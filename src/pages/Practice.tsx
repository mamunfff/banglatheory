import React, { useState, useMemo, useEffect } from 'react';
import { useStore, PracticeSettings } from '../store/useStore';
import { questions, categories } from '../data/questions';
import { QuestionCard } from '../components/QuestionCard';
import { ChevronLeft, ChevronRight, ListFilter, LayoutGrid, Settings, Check, AlertCircle, Zap, Award, RotateCcw } from 'lucide-react';
import { cn } from '../components/BottomNav';
import { motion, AnimatePresence } from 'framer-motion';

export const Practice: React.FC = () => {
  const language = useStore((state) => state.language);
  const practiceSettings = useStore((state) => state.practiceSettings);
  const updatePracticeSettings = useStore((state) => state.updatePracticeSettings);
  const answeredQuestions = useStore((state) => state.answeredQuestions);
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [isCaching, setIsCaching] = useState(false);
  const [cacheProgress, setCacheProgress] = useState(0);

  const filteredQuestions = useMemo(() => {
    let qs = selectedCategory === 'all'
      ? questions
      : selectedCategory 
        ? questions.filter(q => q.categoryId === selectedCategory)
        : [];

    if (practiceSettings.onlyNew) {
      qs = qs.filter(q => !answeredQuestions.includes(q.id));
    }

    if (practiceSettings.maxQuestions !== 'all' && qs.length > Number(practiceSettings.maxQuestions)) {
      qs = qs.slice(0, Number(practiceSettings.maxQuestions));
    }

    return qs;
  }, [selectedCategory, practiceSettings, answeredQuestions]);

  const currentQuestion = filteredQuestions[currentIndex];
  const nextQuestion = filteredQuestions[currentIndex + 1];

  useEffect(() => {
    if (nextQuestion && (language === 'bn' || language === 'bilingual') && nextQuestion.text.bn === nextQuestion.text.en) {
      // Pre-translate the next question in the background
      import('../services/translationService').then(({ translationService }) => {
        translationService.translateQuestion(nextQuestion).catch(console.error);
      });
    }
  }, [currentIndex, language, nextQuestion]);

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const renderT = (en: string, bn: string, isSmall = false) => {
    if (language === 'bilingual') {
      return (
        <span className="flex flex-col">
          <span className={isSmall ? "text-xs" : ""}>{en}</span>
          <span className={isSmall ? "text-[10px] opacity-70 font-normal" : "text-sm opacity-70 font-normal"}>{bn}</span>
        </span>
      );
    }
    return language === 'bn' ? bn : en;
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (!currentQuestion) return;
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: isCorrect }));

    if (!isCorrect && practiceSettings.alertIncorrect) {
      const msg = language === 'bn' ? 'ভুল উত্তর! সঠিক উত্তরটি দেখুন।' : 
                 language === 'bilingual' ? 'Incorrect answer! Check the correct one.\nভুল উত্তর! সঠিক উত্তরটি দেখুন।' :
                 'Incorrect answer! Check the correct one.';
      alert(msg);
    }

    if (isCorrect && practiceSettings.autoNext) {
      setTimeout(() => {
        handleNext();
      }, 1500);
    }
  };

  const resetSession = () => {
    setSelectedCategory(null);
    setCurrentIndex(0);
    setShowResults(false);
    setAnswers({});
    setIsCaching(false);
    setCacheProgress(0);
  };

  const handlePreCache = async () => {
    if (!selectedCategory) return;
    setIsCaching(true);
    setCacheProgress(0);

    const { translationService } = await import('../services/translationService');
    const total = filteredQuestions.length;
    
    for (let i = 0; i < filteredQuestions.length; i++) {
      const q = filteredQuestions[i];
      if (q.text.bn === q.text.en) {
        await translationService.translateQuestion(q);
        // Add a small delay between requests to avoid rate limits (15 RPM is ~4s per request)
        // We'll use a 500ms delay as a baseline, but the service also has retries
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      setCacheProgress(Math.round(((i + 1) / total) * 100));
    }
    
    setIsCaching(false);
    const msg = language === 'bn' ? 'সব অনুবাদ সম্পন্ন হয়েছে!' : 
               language === 'bilingual' ? 'All translations complete!\nসব অনুবাদ সম্পন্ন হয়েছে!' :
               'All translations complete!';
    alert(msg);
  };

  const handleClearCache = () => {
    if (confirm(language === 'bn' ? 'আপনি কি সব সেভ করা অনুবাদ মুছে ফেলতে চান?' : 'Are you sure you want to clear all saved translations?')) {
      localStorage.removeItem('driving_theory_translations');
      window.location.reload();
    }
  };

  if (showResults) {
    const correctCount = Object.values(answers).filter(v => v).length;
    const incorrectCount = Object.values(answers).filter(v => !v).length;

    return (
      <div className="space-y-8 font-bengali pb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-gradient-to-br from-primary to-indigo-600 p-8 rounded-[2rem] text-white shadow-xl shadow-primary/20 relative overflow-hidden flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border-4 border-white/30 shadow-lg">
            <Award size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight mb-2">
            {renderT('PRACTICE COMPLETE', 'অনুশীলন সম্পন্ন')}
          </h2>
          <p className="text-primary-foreground/80 font-medium">
            {renderT('You have finished your practice session.', 'আপনি আপনার প্র্যাকটিস সেশন শেষ করেছেন।')}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card p-6 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center group">
            <div className="text-4xl font-black text-green-500 tracking-tighter">{correctCount}</div>
            <div className="text-sm font-bold text-muted-foreground mt-1 uppercase tracking-widest">
              {renderT('CORRECT', 'সঠিক', true)}
            </div>
          </div>
          <div className="bg-card p-6 rounded-3xl border border-border shadow-sm flex flex-col items-center justify-center group">
            <div className="text-4xl font-black text-destructive tracking-tighter">{incorrectCount}</div>
            <div className="text-sm font-bold text-muted-foreground mt-1 uppercase tracking-widest">
              {renderT('INCORRECT', 'ভুল', true)}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold flex items-center gap-2 tracking-tight">
            <AlertCircle className="text-primary" />
            {renderT('Review Incorrect Answers', 'ভুল উত্তরগুলো রিভিউ করুন')}
          </h3>
          
          <div className="space-y-4">
            {filteredQuestions.filter(q => answers[q.id] === false).map((q) => (
              <QuestionCard key={q.id} question={q} isReviewMode={true} />
            ))}
            {incorrectCount === 0 && (
              <div className="p-8 text-center bg-muted/30 rounded-3xl border border-dashed border-border text-muted-foreground">
                {renderT('No incorrect answers! Great job.', 'কোনো ভুল উত্তর নেই! দারুণ কাজ করেছেন।')}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={resetSession}
          className="w-full py-5 rounded-3xl bg-primary text-primary-foreground font-black text-lg uppercase tracking-widest hover:opacity-90 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] flex items-center justify-center gap-3"
        >
          <RotateCcw size={24} />
          {renderT('START OVER', 'আবার শুরু করুন')}
        </button>
      </div>
    );
  }

  if (!selectedCategory) {
    return (
      <div className="space-y-6 font-bengali">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary/5 p-3 rounded-2xl">
              <LayoutGrid className="text-primary" size={24} />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight">
              {renderT('SELECT CATEGORY', 'ক্যাটাগরি নির্বাচন করুন')}
            </h2>
          </div>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className={cn(
              "p-3 rounded-2xl transition-all",
              showSettings ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
            )}
          >
            <Settings size={20} />
          </button>
        </div>

        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-card border border-border rounded-3xl p-6 mb-6 space-y-4 shadow-sm">
                <h3 className="font-black text-sm uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                  <Zap size={14} className="text-primary" />
                  {renderT('PRACTICE SETTINGS', 'প্র্যাকটিস সেটিংস')}
                </h3>
                
                <div className="grid gap-3">
                  <button
                    onClick={() => updatePracticeSettings({ onlyNew: !practiceSettings.onlyNew })}
                    className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn("p-2 rounded-lg", practiceSettings.onlyNew ? "bg-primary/20 text-primary" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400")}>
                        <Check size={16} />
                      </div>
                      <span className="font-bold text-sm">{renderT('Only new questions', 'শুধুমাত্র নতুন প্রশ্ন')}</span>
                    </div>
                    <div className={cn("w-10 h-5 rounded-full relative transition-colors", practiceSettings.onlyNew ? "bg-primary" : "bg-zinc-300 dark:bg-zinc-700")}>
                      <div className={cn("absolute top-1 w-3 h-3 rounded-full bg-white transition-all", practiceSettings.onlyNew ? "right-1" : "left-1")} />
                    </div>
                  </button>

                  <button
                    onClick={() => updatePracticeSettings({ autoNext: !practiceSettings.autoNext })}
                    className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn("p-2 rounded-lg", practiceSettings.autoNext ? "bg-primary/20 text-primary" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400")}>
                        <ChevronRight size={16} />
                      </div>
                      <span className="font-bold text-sm">{renderT('Auto move next question', 'অটো নেক্সট কোয়েশ্চেন')}</span>
                    </div>
                    <div className={cn("w-10 h-5 rounded-full relative transition-colors", practiceSettings.autoNext ? "bg-primary" : "bg-zinc-300 dark:bg-zinc-700")}>
                      <div className={cn("absolute top-1 w-3 h-3 rounded-full bg-white transition-all", practiceSettings.autoNext ? "right-1" : "left-1")} />
                    </div>
                  </button>

                  <button
                    onClick={() => updatePracticeSettings({ alertIncorrect: !practiceSettings.alertIncorrect })}
                    className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn("p-2 rounded-lg", practiceSettings.alertIncorrect ? "bg-primary/20 text-primary" : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400")}>
                        <AlertCircle size={16} />
                      </div>
                      <span className="font-bold text-sm">{renderT('Alert if answer is incorrect', 'ভুল উত্তরে অ্যালার্ট')}</span>
                    </div>
                    <div className={cn("w-10 h-5 rounded-full relative transition-colors", practiceSettings.alertIncorrect ? "bg-primary" : "bg-zinc-300 dark:bg-zinc-700")}>
                      <div className={cn("absolute top-1 w-3 h-3 rounded-full bg-white transition-all", practiceSettings.alertIncorrect ? "right-1" : "left-1")} />
                    </div>
                  </button>

                  <div className="p-4 rounded-2xl bg-muted/30 space-y-3">
                    <span className="font-bold text-sm block">{renderT('Maximum number of questions', 'সর্বোচ্চ প্রশ্ন সংখ্যা')}</span>
                    <div className="flex flex-wrap gap-2">
                      {[10, 20, 30, 40, 50, 'all'].map((num) => (
                        <button
                          key={num}
                          onClick={() => updatePracticeSettings({ maxQuestions: num as any })}
                          className={cn(
                            "px-4 py-2 rounded-xl text-xs font-black transition-all",
                            practiceSettings.maxQuestions === num 
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                              : "bg-background border border-border text-muted-foreground hover:border-primary/50"
                          )}
                        >
                          {num === 'all' ? renderT('ALL', 'সব') : num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="grid gap-3">
          <button
            onClick={() => { setSelectedCategory('all'); setCurrentIndex(0); }}
            className="bg-zinc-900 dark:bg-zinc-100 p-6 rounded-3xl text-left text-white dark:text-zinc-900 shadow-2xl shadow-zinc-900/20 dark:shadow-none hover:scale-[1.02] transition-all flex justify-between items-center group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
            <span className="font-black text-xl uppercase tracking-widest relative z-10">{renderT('ALL QUESTIONS', 'সব প্রশ্ন')}</span>
            <span className="text-xs font-black bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md relative z-10">{questions.length}</span>
          </button>
          
          {categories.map((cat, i) => {
            const count = questions.filter(q => q.categoryId === cat.id).length;
            return (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                key={cat.id}
                onClick={() => { 
                  if (count > 0) {
                    setSelectedCategory(cat.id); 
                    setCurrentIndex(0); 
                  }
                }}
                disabled={count === 0}
                className={cn(
                  "bg-card p-6 rounded-3xl border border-border text-left transition-all flex justify-between items-center group",
                  count > 0 ? "hover:border-primary hover:bg-zinc-50 dark:hover:bg-zinc-900" : "opacity-40 cursor-not-allowed grayscale"
                )}
              >
                <div className="flex flex-col pr-6">
                  <span className="font-bold text-base leading-tight">{cat.name.en}</span>
                  {language === 'bilingual' && <span className="text-sm font-normal opacity-70">{cat.name.bn}</span>}
                  {language === 'bn' && <span className="font-bold text-base leading-tight">{cat.name.bn}</span>}
                </div>
                <span className={cn(
                  "text-[10px] font-black px-3 py-1.5 rounded-full transition-all shrink-0 uppercase tracking-widest",
                  count > 0 ? "bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground" : "bg-muted text-muted-foreground"
                )}>{count}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  const renderCategoryName = () => {
    if (selectedCategory === 'all') {
      return renderT('All Questions', 'সব প্রশ্ন');
    }
    const cat = categories.find(c => c.id === selectedCategory);
    if (!cat) return '';
    
    if (language === 'bilingual') {
      return (
        <span className="flex flex-col">
          <span className="text-sm">{cat.name.en}</span>
          <span className="text-xs font-normal opacity-70">{cat.name.bn}</span>
        </span>
      );
    }
    return cat.name[language as 'en' | 'bn'] || cat.name.en;
  };

  const isLastQuestion = currentIndex === filteredQuestions.length - 1;

  return (
    <div className="space-y-6 font-bengali pb-8">
      <div className="flex items-center justify-between">
        <button 
          onClick={resetSession}
          className="text-sm font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 bg-muted/50 px-3 py-1.5 rounded-full transition-colors"
        >
          <ChevronLeft size={16} />
          {renderT('Back', 'ফিরে যান')}
        </button>
        <div className="text-sm font-bold bg-primary/10 text-primary px-4 py-1.5 rounded-full">
          {currentIndex + 1} <span className="text-primary/50 mx-1">/</span> {filteredQuestions.length}
        </div>
      </div>

        <div className="bg-gradient-to-r from-accent to-transparent p-4 rounded-2xl border border-accent flex justify-between items-center">
          <h3 className="font-bold text-foreground line-clamp-1 mr-4">{renderCategoryName()}</h3>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className={cn(
                "p-2 rounded-xl transition-all",
                showSettings ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
              )}
            >
              <Settings size={18} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-card border border-border rounded-3xl p-6 mb-2 space-y-4 shadow-sm">
                <div className="grid gap-3">
                  <button
                    onClick={handlePreCache}
                    disabled={isCaching}
                    className="flex items-center justify-between p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors disabled:opacity-50"
                  >
                    <div className="flex items-center gap-3">
                      <Zap size={18} className="text-primary" />
                      <span className="font-bold text-sm">
                        {isCaching 
                          ? renderT(`Caching... ${cacheProgress}%`, `অনুবাদ হচ্ছে... ${cacheProgress}%`)
                          : renderT('Pre-cache all (Offline)', 'সব অনুবাদ সেভ করুন (অফলাইন)')
                        }
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={handleClearCache}
                    className="flex items-center justify-between p-4 rounded-2xl bg-destructive/10 hover:bg-destructive/20 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <RotateCcw size={18} className="text-destructive" />
                      <span className="font-bold text-sm text-destructive">
                        {renderT('Clear Cache', 'ক্যাশ মুছে ফেলুন')}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      {currentQuestion ? (
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <QuestionCard 
            question={currentQuestion} 
            onAnswer={handleAnswer}
          />
        </motion.div>
      ) : (
        <div className="text-center py-12 text-muted-foreground bg-card rounded-3xl border border-border">
          {renderT('No questions found.', 'কোনো প্রশ্ন পাওয়া যায়নি।')}
        </div>
      )}

      <div className="flex justify-between gap-4 pt-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex-1 py-4 rounded-2xl border-2 border-border font-bold disabled:opacity-50 flex items-center justify-center gap-2 hover:bg-muted transition-colors text-foreground"
        >
          <ChevronLeft size={20} />
          {renderT('Previous', 'আগেরটি')}
        </button>
        <button
          onClick={handleNext}
          className="flex-1 py-4 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          {isLastQuestion 
            ? renderT('View Results', 'ফলাফল দেখুন')
            : renderT('Next', 'পরবর্তী')
          }
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
