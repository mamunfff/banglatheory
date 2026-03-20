import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";
import { Question } from "../data/questions";

let genAI: GoogleGenAI | null = null;

function getGenAI() {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'undefined' || apiKey === '') {
      console.error("GEMINI_API_KEY is missing or empty. Translation will not work.");
      console.info("If you are seeing this on Vercel, ensure you have added GEMINI_API_KEY to your Environment Variables in the Vercel Dashboard and triggered a new deployment.");
      return null;
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
}

const CACHE_KEY = 'driving_theory_translations_v1';

const getInitialCache = (): Record<string, Question> => {
  try {
    const saved = localStorage.getItem(CACHE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    console.warn("Failed to load translation cache:", e);
    return {};
  }
};

const translationCache: Record<string, Question> = getInitialCache();

const saveCache = () => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(translationCache));
  } catch (e) {
    console.warn("Failed to save translation cache (likely storage full):", e);
    // If storage is full, we might want to clear old entries, but for now we just log it
  }
};

export const translationService = {
  async translateQuestion(question: Question, retryCount = 0): Promise<Question> {
    // Check cache first
    if (translationCache[question.id]) {
      return translationCache[question.id];
    }

    // If it's already translated in the static data (not fallback English), return it
    if (question.text.bn && question.text.bn !== question.text.en) {
      return question;
    }

    const ai = getGenAI();
    if (!ai) {
      // Return a special error state if API key is missing
      return {
        ...question,
        _translationError: 'API_KEY_MISSING'
      } as any;
    }

    try {
      // Use gemini-3-flash-preview for basic text tasks as recommended
      const model = "gemini-3-flash-preview";
      
      // Dynamically build the options schema based on the question's options
      const optionsProperties: Record<string, any> = {};
      const requiredOptions: string[] = [];
      question.options.forEach(o => {
        optionsProperties[o.id] = { type: Type.STRING };
        requiredOptions.push(o.id);
      });

      const response = await ai.models.generateContent({
        model,
        contents: `Translate the following UK Driving Theory Test content into clear, accurate, and natural Bengali.

        Context: This is for the UK DVSA Driving Theory Test. Use standard driving terminology in Bengali. 
        For specific UK road terms (like 'dual carriageway', 'hard shoulder', 'zebra crossing'), use the most common and understandable Bengali equivalent, or keep the English term in brackets if the Bengali term is not commonly used in the UK Bengali community.

        Question: ${question.text.en}
        Options:
        ${question.options.map(o => `${o.id}: ${o.text.en}`).join('\n')}
        Explanation: ${question.explanation.en}`,
        config: {
          systemInstruction: "You are an expert translator specializing in the UK Highway Code and Driving Theory Test. Your goal is to translate English driving questions into Bengali that is technically accurate, easy to understand for learners, and culturally appropriate for the UK Bengali-speaking community. Avoid literal translations that lose meaning. Ensure driving-specific terms are translated correctly according to standard UK driving terminology. ALWAYS return a valid JSON object matching the schema.",
          thinkingConfig: { thinkingLevel: ThinkingLevel.LOW },
          responseMimeType: "application/json",
          safetySettings: [
            { category: "HATE_SPEECH" as any, threshold: "BLOCK_NONE" as any },
            { category: "SEXUALLY_EXPLICIT" as any, threshold: "BLOCK_NONE" as any },
            { category: "HARASSMENT" as any, threshold: "BLOCK_NONE" as any },
            { category: "DANGEROUS_CONTENT" as any, threshold: "BLOCK_NONE" as any },
          ],
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              text: { type: Type.STRING, description: "The Bengali translation of the question" },
              options: {
                type: Type.OBJECT,
                properties: optionsProperties,
                required: requiredOptions
              },
              explanation: { type: Type.STRING, description: "The Bengali translation of the explanation" }
            },
            required: ["text", "options", "explanation"]
          }
        }
      });

      const text = response.text?.trim();
      if (!text) throw new Error("Empty response from Gemini");

      // Handle potential markdown code blocks in response
      const jsonStr = text.replace(/^```json\n?/, '').replace(/\n?```$/, '');
      let result;
      try {
        result = JSON.parse(jsonStr);
      } catch (parseError) {
        console.error("Failed to parse Gemini response as JSON:", text);
        throw parseError;
      }
      
      if (!result.text || !result.options || !result.explanation) {
        throw new Error("Invalid translation result structure");
      }

      const translatedQuestion = {
        ...question,
        text: { ...question.text, bn: result.text },
        options: question.options.map(o => ({
          ...o,
          text: { ...o.text, bn: result.options[o.id] || o.text.en }
        })),
        explanation: { ...question.explanation, bn: result.explanation }
      };

      // Store in cache and persist
      translationCache[question.id] = translatedQuestion;
      saveCache();
      
      return translatedQuestion;
    } catch (error: any) {
      const errorMessage = error?.message || String(error);
      console.error(`Translation error for question ${question.id} (attempt ${retryCount + 1}):`, error);
      
      // Check for rate limit (429)
      if (errorMessage.includes('429') || errorMessage.toLowerCase().includes('rate limit')) {
        if (retryCount < 3) {
          await new Promise(resolve => setTimeout(resolve, 2000 * (retryCount + 1)));
          return this.translateQuestion(question, retryCount + 1);
        }
      }

      if (retryCount < 2) {
        await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1)));
        return this.translateQuestion(question, retryCount + 1);
      }
      
      return {
        ...question,
        _translationError: 'API_ERROR'
      } as any;
    }
  }
};
