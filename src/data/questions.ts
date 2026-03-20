export type Language = 'en' | 'bn' | 'bilingual';

export interface Option {
  id: string;
  text: {
    en: string;
    bn: string;
  };
}

export interface Question {
  id: string;
  categoryId: string;
  text: {
    en: string;
    bn: string;
  };
  options: Option[];
  correctOptionId: string;
  explanation: {
    en: string;
    bn: string;
  };
  imageUrl?: string;
  _translationError?: 'API_KEY_MISSING' | 'API_ERROR';
}

export const categories = [
  {
    "id": "c1",
    "name": {
      "en": "Alertness",
      "bn": "সতর্কতা ও মনোযোগ"
    },
    "icon": "Eye"
  },
  {
    "id": "c2",
    "name": {
      "en": "Attitude",
      "bn": "আচরণ ও মনোভাব"
    },
    "icon": "Brain"
  },
  {
    "id": "c3",
    "name": {
      "en": "Safety and your vehicle",
      "bn": "নিরাপত্তা ও আপনার যানবাহন"
    },
    "icon": "ShieldCheck"
  },
  {
    "id": "c4",
    "name": {
      "en": "Safety margins",
      "bn": "নিরাপদ দূরত্ব ও সীমা"
    },
    "icon": "Ruler"
  },
  {
    "id": "c5",
    "name": {
      "en": "Hazard awareness",
      "bn": "বিপদ সচেতনতা"
    },
    "icon": "AlertTriangle"
  },
  {
    "id": "c6",
    "name": {
      "en": "Vulnerable road users",
      "bn": "অরক্ষিত রাস্তা ব্যবহারকারী"
    },
    "icon": "Users"
  },
  {
    "id": "c7",
    "name": {
      "en": "Other types of vehicle",
      "bn": "অন্যান্য ধরণের যানবাহন"
    },
    "icon": "Truck"
  },
  {
    "id": "c8",
    "name": {
      "en": "Road conditions and vehicle handling",
      "bn": "রাস্তার অবস্থা ও যানবাহন নিয়ন্ত্রণ"
    },
    "icon": "CloudRain"
  },
  {
    "id": "c9",
    "name": {
      "en": "Motorway rules",
      "bn": "মোটরওয়ে নিয়মাবলী"
    },
    "icon": "Milestone"
  },
  {
    "id": "c10",
    "name": {
      "en": "Rules of the road",
      "bn": "রাস্তার নিয়মাবলী"
    },
    "icon": "BookOpen"
  },
  {
    "id": "c11",
    "name": {
      "en": "Road and traffic signs",
      "bn": "রাস্তা ও ট্রাফিক চিহ্ন"
    },
    "icon": "Signpost"
  },
  {
    "id": "c12",
    "name": {
      "en": "Documents",
      "bn": "প্রয়োজনীয় নথিপত্র"
    },
    "icon": "FileText"
  },
  {
    "id": "c13",
    "name": {
      "en": "Incidents, accidents and emergencies",
      "bn": "দুর্ঘটনা ও জরুরি অবস্থা"
    },
    "icon": "Ambulance"
  },
  {
    "id": "c14",
    "name": {
      "en": "Vehicle loading",
      "bn": "যানবাহন লোডিং ও মালামাল"
    },
    "icon": "Package"
  }
];

export const questions: Question[] = [
  {
    "id": "q1",
    "categoryId": "c8",
    "text": {
      "en": "The main cause of skidding is:",
      "bn": "স্কিডিং বা পিছলে যাওয়ার প্রধান কারণ হলো:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "the vehicle",
          "bn": "যানবাহন"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "the driver",
          "bn": "চালক"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "the road",
          "bn": "রাস্তা"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "the weather",
          "bn": "আবহাওয়া"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q2",
    "categoryId": "c10",
    "text": {
      "en": "You may remove your seat belt temporarily when carrying out a manoeuvre that involves:",
      "bn": "আপনি সাময়িকভাবে আপনার সিট বেল্ট খুলতে পারেন যখন আপনি এমন একটি কৌশল (manoeuvre) সম্পাদন করছেন যাতে জড়িত:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Reversing",
          "bn": "রিভার্সিং বা গাড়ি পেছনে নেওয়া"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "An emergency stop",
          "bn": "জরুরি স্টপ"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "A hill start",
          "bn": "পাহাড়ে যাত্রা শুরু"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Driving slowly",
          "bn": "ধীরে গাড়ি চালানো"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q3",
    "categoryId": "c6",
    "text": {
      "en": "Your car hits a pedestrian at 60 kph. The pedestrian will:",
      "bn": "যদি আপনার গাড়ি ৬০ কিমি/ঘন্টা বেগে একজন পথচারীকে আঘাত করে, তবে সেই পথচারী:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Certainly be killed",
          "bn": "নিশ্চিতভাবে মারা যাবেন"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Probably be killed",
          "bn": "সম্ভবত মারা যাবেন"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Certainly survive",
          "bn": "নিশ্চিতভাবে বেঁচে যাবেন"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Probably survive",
          "bn": "সম্ভবত বেঁচে যাবেন"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q4",
    "categoryId": "c4",
    "text": {
      "en": "You are in very heavy downpour. Your overall stopping distance is likely to be:",
      "bn": "আপনি খুব ভারী বৃষ্টির মধ্যে আছেন। আপনার সামগ্রিক থামার দূরত্ব সম্ভবত হবে:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Doubled",
          "bn": "দ্বিগুণ"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "No different",
          "bn": "কোনো পার্থক্য নেই"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Up to ten times greater",
          "bn": "দশ গুণ পর্যন্ত বেশি"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Halved",
          "bn": "অর্ধেক"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q5",
    "categoryId": "c9",
    "text": {
      "en": "What is the national speed limit for cars in the left-hand lane of a three-lane motorway?",
      "bn": "তিন লেনের মোটরওয়ের বাম দিকের লেনে গাড়ির জাতীয় গতির সীমা কত?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "60 mph",
          "bn": "৬০ মাইল প্রতি ঘণ্টা"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "50 mph",
          "bn": "৫০ মাইল প্রতি ঘণ্টা"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "70 mph",
          "bn": "৭০ মাইল প্রতি ঘণ্টা"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "80 mph",
          "bn": "৮০ মাইল প্রতি ঘণ্টা"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q6",
    "categoryId": "c5",
    "text": {
      "en": "You are turning left into a side road. What hazards should you be especially aware of?",
      "bn": "আপনি একটি পার্শ্ব রাস্তায় বাম দিকে মোড় নিচ্ছেন। কোন বিপদগুলোর (hazards) বিষয়ে আপনার বিশেষভাবে সচেতন হওয়া উচিত?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "One-way street",
          "bn": "একমুখী রাস্তা"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Parked vehicles",
          "bn": "পার্ক করা যানবাহন"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Pedestrians",
          "bn": "পথচারী"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Traffic congestion",
          "bn": "ট্রাফিক জ্যাম"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q7",
    "categoryId": "c3",
    "text": {
      "en": "The fluid level in your battery is low. What should you top it up with?",
      "bn": "আপনার ব্যাটারির ফ্লুইড বা তরলের মাত্রা কম। এটি কী দিয়ে পূর্ণ করা উচিত?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Battery acid",
          "bn": "ব্যাটারি অ্যাসিড"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Distilled water",
          "bn": "পাতিত জল (Distilled water)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Engine coolant",
          "bn": "ইঞ্জিন কুল্যান্ট"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Engine oil",
          "bn": "ইঞ্জিন অয়েল"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q8",
    "categoryId": "c8",
    "text": {
      "en": "You are driving along a wet road. How can you tell if your vehicle is aquaplaning?",
      "bn": "আপনি একটি ভেজা রাস্তা দিয়ে গাড়ি চালাচ্ছেন। আপনার যানবাহন অ্যাকুয়াপ্ল্যানিং (aquaplaning) করছে কিনা তা কীভাবে বুঝবেন?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The engine noise will increase",
          "bn": "ইঞ্জিনের শব্দ বাড়বে"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The engine will stall",
          "bn": "ইঞ্জিন বন্ধ হয়ে যাবে"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The steering will feel very heavy",
          "bn": "স্টিয়ারিং খুব ভারী মনে হবে"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The steering will feel very light",
          "bn": "স্টিয়ারিং খুব হালকা মনে হবে"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q9",
    "categoryId": "c7",
    "text": {
      "en": "When you approach a bus that is about to move off from a bus stop you should:",
      "bn": "আপনি যখন এমন একটি বাসের কাছে পৌঁছান যা বাস স্টপ থেকে ছেড়ে যেতে চলেছে, তখন আপনার উচিত:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Get past before it moves",
          "bn": "বাসটি ছাড়ার আগেই পাশ কাটিয়ে চলে যাওয়া"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Signal left and wave the bus on",
          "bn": "বাম দিকে সংকেত দেওয়া এবং বাসটিকে যেতে বলা"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Allow it to pull away, if it is safe to do so",
          "bn": "নিরাপদ হলে সেটিকে চলে যাওয়ার সুযোগ দেওয়া"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your headlights as you approach",
          "bn": "কাছে যাওয়ার সময় হেডলাইট ফ্ল্যাশ করা"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa942a9118cc.jpg"
  },
  {
    "id": "q10",
    "categoryId": "c12",
    "text": {
      "en": "The national speed limit for cars and motorcycles on a single carriageway road is",
      "bn": "সিঙ্গেল ক্যারিজওয়ে (single carriageway) রাস্তায় কার এবং মোটরসাইকেলের জন্য জাতীয় গতির সীমা হলো"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "40 mph",
          "bn": "৪০ মাইল প্রতি ঘণ্টা"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "30 mph",
          "bn": "৩০ মাইল প্রতি ঘণ্টা"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "60 mph",
          "bn": "৬০ মাইল প্রতি ঘণ্টা"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "50 mph",
          "bn": "৫০ মাইল প্রতি ঘণ্টা"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q11",
    "categoryId": "c11",
    "text": {
      "en": "You are dazzled by oncoming headlights when driving at night. What should you do?",
      "bn": "রাতে গাড়ি চালানোর সময় সামনের দিক থেকে আসা হেডলাইটের আলোতে আপনার চোখ ধাঁধিয়ে গেলে আপনার কী করা উচিত?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive faster past the oncoming car",
          "bn": "সামনের গাড়িটিকে দ্রুত অতিক্রম করা"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Flash your lights",
          "bn": "আপনার লাইট ফ্ল্যাশ করা"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake hard",
          "bn": "জোরে ব্রেক করা"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Slow down or stop",
          "bn": "গতি কমানো বা থামা"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q12",
    "categoryId": "c10",
    "text": {
      "en": "You should not use a mobile phone whilst driving",
      "bn": "গাড়ি চালানোর সময় আপনার মোবাইল ফোন ব্যবহার করা উচিত নয়"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Because it might distract your attention from the road ahead",
          "bn": "কারণ এটি সামনের রাস্তা থেকে আপনার মনোযোগ সরিয়ে দিতে পারে"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Unless you are able to drive one handed",
          "bn": "যদি না আপনি এক হাতে গাড়ি চালাতে সক্ষম হন"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Because reception is poor when the engine is running",
          "bn": "কারণ ইঞ্জিন চালু থাকলে নেটওয়ার্ক সিগন্যাল দুর্বল থাকে"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Until you are satisfied that no other traffic is near",
          "bn": "যতক্ষণ না আপনি নিশ্চিত হচ্ছেন যে আশেপাশে অন্য কোনো যানবাহন নেই"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q13",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "এই চিহ্নটির অর্থ কী?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Roundabout",
          "bn": "রাউন্ডঅবাউট (Roundabout)"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "No entry",
          "bn": "প্রবেশ নিষেধ"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No stopping",
          "bn": "থামা নিষেধ"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Crossroads",
          "bn": "চৌরাস্তা"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6e7ddeaba4.jpg"
  },
  {
    "id": "q14",
    "categoryId": "c6",
    "text": {
      "en": "You have stopped at a pedestrian (zebra) crossing to allow pedestrians to cross. You should:",
      "bn": "আপনি পথচারীদের পার হওয়ার সুযোগ দিতে একটি জেব্রা ক্রসিংয়ে (zebra crossing) থেমেছেন। আপনার উচিত:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Wait until they have crossed",
          "bn": "তারা পার না হওয়া পর্যন্ত অপেক্ষা করা"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Wait, revving your engine",
          "bn": "ইঞ্জিনের শব্দ (revving) করে অপেক্ষা করা"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Edge your vehicle forward slowly",
          "bn": "আপনার যানবাহন ধীরে ধীরে সামনের দিকে এগিয়ে নেওয়া"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Signal to pedestrians to cross",
          "bn": "পথচারীদের পার হওয়ার জন্য সংকেত দেওয়া"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q15",
    "categoryId": "c11",
    "text": {
      "en": "A red traffic light means:",
      "bn": "লাল ট্রাফিক লাইটের অর্থ হলো:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "You must stop behind the white stop line",
          "bn": "আপনাকে অবশ্যই সাদা স্টপ লাইনের পেছনে থামতে হবে"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You may drive straight on if there is no other traffic",
          "bn": "অন্য কোনো যানবাহন না থাকলে আপনি সরাসরি গাড়ি চালিয়ে যেতে পারেন"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "You must slow down and prepare to stop",
          "bn": "আপনাকে অবশ্যই গতি কমাতে হবে এবং থামার জন্য প্রস্তুত হতে হবে"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "You may turn left if it is safe to do so",
          "bn": "নিরাপদ হলে আপনি বাম দিকে মোড় নিতে পারেন"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6e7c49b51f.jpg"
  },
  {
    "id": "q16",
    "categoryId": "c10",
    "text": {
      "en": "When emerging from a side road into a queue of traffic which cars can be especially difficult to see?",
      "bn": "পার্শ্ব রাস্তা থেকে ট্রাফিক জ্যামের মধ্যে প্রবেশের সময় কোন যানবাহনগুলো দেখা বিশেষভাবে কঠিন হতে পারে?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Motorcycles",
          "bn": "মোটরসাইকেল"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Milk floats",
          "bn": "মিল্ক ফ্লোটস (Milk floats)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Tractors",
          "bn": "ট্রাক্টর"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Cars",
          "bn": "কার"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q17",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this sign?",
      "bn": "এই চিহ্নটির অর্থ কী?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Side winds Quayside or river bank",
          "bn": "পার্শ্ব বাতাস বা নদীর পাড়"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Falling or fallen rocks",
          "bn": "পাথর পড়া বা পড়ে থাকা পাথর"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Cliff face ahead",
          "bn": "সামনে পাহাড়ের ঢাল"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6e7ace7f1a.jpg"
  },
  {
    "id": "q18",
    "categoryId": "c2",
    "text": {
      "en": "What should you use the horn for?",
      "bn": "আপনার হর্ন কী কাজে ব্যবহার করা উচিত?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To alert others to your presence",
          "bn": "অন্যদের আপনার উপস্থিতি সম্পর্কে সতর্ক করতে"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To greet other road users",
          "bn": "অন্যান্য রাস্তা ব্যবহারকারীদের অভিবাদন জানাতে"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To allow you right of way",
          "bn": "আপনার যাওয়ার অধিকার (right of way) পেতে"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To signal you annoyance",
          "bn": "আপনার বিরক্তি প্রকাশ করতে"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q19",
    "categoryId": "c8",
    "text": {
      "en": "Why should you always reduce your speed when driving in fog?",
      "bn": "কুয়াশার মধ্যে গাড়ি চালানোর সময় কেন আপনার সবসময় গতি কমানো উচিত?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Because it is more difficult to see events ahead",
          "bn": "কারণ সামনের ঘটনাগুলো দেখা আরও কঠিন হয়ে পড়ে"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Because the engine`s colder",
          "bn": "কারণ ইঞ্জিন ঠান্ডা থাকে"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Because you could be dazzled by other people`s fog lights",
          "bn": "কারণ অন্যদের ফগ লাইটের আলোতে আপনার চোখ ধাঁধিয়ে যেতে পারে"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Because the brakes do not work as well",
          "bn": "কারণ ব্রেকগুলো ততটা ভালো কাজ করে না"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q20",
    "categoryId": "c13",
    "text": {
      "en": "A casualty is not breathing normally. At what rate should chest compressions should be given?",
      "bn": "একজন আহত ব্যক্তি স্বাভাবিকভাবে শ্বাস নিচ্ছেন না। কোন হারে বুকে চাপ (chest compressions) দেওয়া উচিত?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "50 per minute",
          "bn": "মিনিটে ৫০ বার"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "100 per minute",
          "bn": "মিনিটে ১০০ বার"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "200 per minute",
          "bn": "মিনিটে ২০০ বার"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "250 per minute",
          "bn": "মিনিটে ২৫০ বার"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q21",
    "categoryId": "c10",
    "text": {
      "en": "As a driver, how can you help the environment?",
      "bn": "একজন চালক হিসেবে আপনি কীভাবে পরিবেশ রক্ষায় সাহায্য করতে পারেন?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "By driving faster",
          "bn": "দ্রুত গাড়ি চালিয়ে"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "By using leaded fuel",
          "bn": "সীসাযুক্ত জ্বালানি ব্যবহার করে"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "By driving with your windows down",
          "bn": "গাড়ির জানালা খোলা রেখে গাড়ি চালিয়ে"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "By reducing your speed",
          "bn": "গাড়ির গতি কমিয়ে"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q22",
    "categoryId": "c8",
    "text": {
      "en": "Whilst driving, the fog clears and you can see more clearly. You must remember to",
      "bn": "গাড়ি চালানোর সময় কুয়াশা কেটে গেলে এবং আপনি পরিষ্কারভাবে দেখতে পেলে, আপনাকে যা মনে রাখতে হবে:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Switch off the demister",
          "bn": "ডিমিস্টার (demister) বন্ধ করা"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Reduce your speed",
          "bn": "গতি কমানো"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Switch off the fog lights",
          "bn": "ফগ লাইট (fog lights) বন্ধ করা"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Close any open windows",
          "bn": "খোলা জানালা বন্ধ করা"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q23",
    "categoryId": "c14",
    "text": {
      "en": "Overloading your vehicle can seriously affect?",
      "bn": "আপনার যানবাহনে অতিরিক্ত মালামাল বোঝাই (overloading) করলে তা মারাত্মকভাবে প্রভাবিত করতে পারে:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The Handling",
          "bn": "যানবাহন নিয়ন্ত্রণ (Handling)"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The steering",
          "bn": "স্টিয়ারিং (Steering)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Your comfort",
          "bn": "আপনার আরাম"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Your ability to change gears",
          "bn": "গিয়ার পরিবর্তনের ক্ষমতা"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "কোনো ব্যাখ্যা নেই।"
    }
  },
  {
    "id": "q24",
    "categoryId": "c5",
    "text": {
      "en": "Some two-way roads are divided into three lanes. Why are these particularly dangerous?",
      "bn": "Some two-way roads are divided into three lanes. Why are these particularly dangerous?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Traffic uses the middle lane for emergencies only",
          "bn": "Traffic uses the middle lane for emergencies only"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Traffic can travel faster in poor weather conditions",
          "bn": "Traffic can travel faster in poor weather conditions"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Traffic can overtake on the left",
          "bn": "Traffic can overtake on the left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Traffic in both directions can use the middle lane to overtake",
          "bn": "Traffic in both directions can use the middle lane to overtake"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q25",
    "categoryId": "c11",
    "text": {
      "en": "You are approaching this roundabout and see the cyclist signal right. Why is the cyclist keeping to the left?",
      "bn": "You are approaching this roundabout and see the cyclist signal right. Why is the cyclist keeping to the left?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "It is quicker route for cyclist",
          "bn": "It is quicker route for cyclist"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The cyclist is going to turn left instead",
          "bn": "The cyclist is going to turn left instead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The cyclist is slower and more vulnerable",
          "bn": "The cyclist is slower and more vulnerable"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The cyclist thinks The highway Code does not apply to bicycles",
          "bn": "The cyclist thinks The highway Code does not apply to bicycles"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6ebd124dc4.jpg"
  },
  {
    "id": "q26",
    "categoryId": "c10",
    "text": {
      "en": "'Red Routes' in major cities have been introduced to",
      "bn": "'Red Routes' in major cities have been introduced to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Raise the speed limits",
          "bn": "Raise the speed limits"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Help the traffic flow",
          "bn": "Help the traffic flow"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Provide better parking",
          "bn": "Provide better parking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Allow lorries to load more freely",
          "bn": "Allow lorries to load more freely"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q27",
    "categoryId": "c6",
    "text": {
      "en": "Motorcyclists are more at risk to be injured from other road users because they",
      "bn": "Motorcyclists are more at risk to be injured from other road users because they"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Are more likely to break down than other motorists",
          "bn": "Are more likely to break down than other motorists"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Are more difficult to see than other drivers",
          "bn": "Are more difficult to see than other drivers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Are less experienced that other drivers",
          "bn": "Are less experienced that other drivers"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Are always faster than other drivers",
          "bn": "Are always faster than other drivers"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q28",
    "categoryId": "c11",
    "text": {
      "en": "The driver of this car is giving an arm signal. What is he about to do?",
      "bn": "The driver of this car is giving an arm signal. What is he about to do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Go straight ahead",
          "bn": "Go straight ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Turn to the left",
          "bn": "Turn to the left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Let pedestrians cross",
          "bn": "Let pedestrians cross"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Turn to the right",
          "bn": "Turn to the right"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6ee38e12e4.jpg"
  },
  {
    "id": "q29",
    "categoryId": "c10",
    "text": {
      "en": "Someone is waiting to cross at a zebra crossing. They are standing on the pavement. You should normally:",
      "bn": "Someone is waiting to cross at a zebra crossing. They are standing on the pavement. You should normally:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stop, let them cross, wait patiently",
          "bn": "Stop, let them cross, wait patiently"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Go on quickly before they step onto the crossing",
          "bn": "Go on quickly before they step onto the crossing"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Ignore them as they are still on the pavement",
          "bn": "Ignore them as they are still on the pavement"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stop before you reach the zigzag lines and let them cross",
          "bn": "Stop before you reach the zigzag lines and let them cross"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q30",
    "categoryId": "c10",
    "text": {
      "en": "'Tailgating' usually means",
      "bn": "'Tailgating' usually means"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Using the rear door of a hatchback car",
          "bn": "Using the rear door of a hatchback car"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Driving with rear fog lights on",
          "bn": "Driving with rear fog lights on"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reversing into a parking space",
          "bn": "Reversing into a parking space"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Following another vehicle too closely",
          "bn": "Following another vehicle too closely"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q31",
    "categoryId": "c11",
    "text": {
      "en": "When being followed by an ambulance showing a flashing blue light you should:",
      "bn": "When being followed by an ambulance showing a flashing blue light you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Accelerate fast to get away from it",
          "bn": "Accelerate fast to get away from it"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Maintain your speed and course",
          "bn": "Maintain your speed and course"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake harshly and immediately stop in the road",
          "bn": "Brake harshly and immediately stop in the road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Pull over as soon as safely possible to let it pass",
          "bn": "Pull over as soon as safely possible to let it pass"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q32",
    "categoryId": "c14",
    "text": {
      "en": "A heavy load on your roof rack will:",
      "bn": "A heavy load on your roof rack will:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Reduce the stopping distance",
          "bn": "Reduce the stopping distance"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Make the steering lighter",
          "bn": "Make the steering lighter"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reduce stability",
          "bn": "Reduce stability"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Improve the road holding",
          "bn": "Improve the road holding"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q33",
    "categoryId": "c11",
    "text": {
      "en": "What does this traffic sign mean?",
      "bn": "What does this traffic sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Two way traffic",
          "bn": "Two way traffic"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "No overtaking allowed",
          "bn": "No overtaking allowed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "One-way traffic only",
          "bn": "One-way traffic only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Give priority to oncoming traffic",
          "bn": "Give priority to oncoming traffic"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6f05ce155c.jpg"
  },
  {
    "id": "q34",
    "categoryId": "c10",
    "text": {
      "en": "Which of the following types of glasses should NOT be worn when driving at night?",
      "bn": "Which of the following types of glasses should NOT be worn when driving at night?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Round",
          "bn": "Round"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Tinted",
          "bn": "Tinted"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Half-moon",
          "bn": "Half-moon"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Bi-focal",
          "bn": "Bi-focal"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q35",
    "categoryId": "c11",
    "text": {
      "en": "Super trams or Light Rapid Transit (LRT) systems are environmentally friendly because",
      "bn": "Super trams or Light Rapid Transit (LRT) systems are environmentally friendly because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "They use diesel power",
          "bn": "They use diesel power"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "They use electric power",
          "bn": "They use electric power"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They use quieter roads",
          "bn": "They use quieter roads"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "They do not operate during rush hour",
          "bn": "They do not operate during rush hour"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q36",
    "categoryId": "c11",
    "text": {
      "en": "What lights and why must you put them on when going through a tunnel?",
      "bn": "What lights and why must you put them on when going through a tunnel?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Dipped-beam and front and/or rear Fog lights to see and be seen clearly.",
          "bn": "Dipped-beam and front and/or rear Fog lights to see and be seen clearly."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Main-beam to see clearly where you are going.",
          "bn": "Main-beam to see clearly where you are going."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No lights are necessary as tunnels have their own lighting.",
          "bn": "No lights are necessary as tunnels have their own lighting."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Hazard warning lights so nobody drives too near.",
          "bn": "Hazard warning lights so nobody drives too near."
        }
      },
      {
        "id": "e",
        "text": {
          "en": "Dipped-beam to help you see and also be clearly seen by others.",
          "bn": "Dipped-beam to help you see and also be clearly seen by others."
        }
      }
    ],
    "correctOptionId": "e",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q37",
    "categoryId": "c1",
    "text": {
      "en": "You start to feel tired whilst driving, you should?",
      "bn": "You start to feel tired whilst driving, you should?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Turn on the radio and listen to loud music",
          "bn": "Turn on the radio and listen to loud music"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop at a safe place and rest",
          "bn": "Stop at a safe place and rest"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Decrease your speed",
          "bn": "Decrease your speed"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Increase your speed to reduce your journey time",
          "bn": "Increase your speed to reduce your journey time"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q38",
    "categoryId": "c10",
    "text": {
      "en": "You are driving past a lane of parked cars and you notice a ball bouncing out into the road ahead. What should you do?",
      "bn": "You are driving past a lane of parked cars and you notice a ball bouncing out into the road ahead. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stop and wave the children across to fetch their ball",
          "bn": "Stop and wave the children across to fetch their ball"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Continue driving at the same speed and sound your horn",
          "bn": "Continue driving at the same speed and sound your horn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Slow down and be prepared to stop for children",
          "bn": "Slow down and be prepared to stop for children"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Continue driving at the same speed and flash your headlights",
          "bn": "Continue driving at the same speed and flash your headlights"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q39",
    "categoryId": "c11",
    "text": {
      "en": "In daylight, an approaching motorcyclist is using a dipped headlight. Why?",
      "bn": "In daylight, an approaching motorcyclist is using a dipped headlight. Why?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To stop the battery overcharging",
          "bn": "To stop the battery overcharging"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "So that the rider can be seen more easily",
          "bn": "So that the rider can be seen more easily"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The rider is inviting you to proceed",
          "bn": "The rider is inviting you to proceed"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To improve the rider’s vision",
          "bn": "To improve the rider’s vision"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q40",
    "categoryId": "c10",
    "text": {
      "en": "Who is responsible for ensuring that a vehicle is fully road worthy when driven on a public road?",
      "bn": "Who is responsible for ensuring that a vehicle is fully road worthy when driven on a public road?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Nobody in particular",
          "bn": "Nobody in particular"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Your mechanic",
          "bn": "Your mechanic"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "You, the driver",
          "bn": "You, the driver"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The VRT tester",
          "bn": "The VRT tester"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q41",
    "categoryId": "c11",
    "text": {
      "en": "Using front/rear fog lights in good visibility will:",
      "bn": "Using front/rear fog lights in good visibility will:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Improve your visibility",
          "bn": "Improve your visibility"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Dazzle other drivers",
          "bn": "Dazzle other drivers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Increase your awareness",
          "bn": "Increase your awareness"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flatten the battery",
          "bn": "Flatten the battery"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q42",
    "categoryId": "c10",
    "text": {
      "en": "A strong cross wind is least likely to affect which of these vehicles?",
      "bn": "A strong cross wind is least likely to affect which of these vehicles?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Motorcycles",
          "bn": "Motorcycles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "High-sided vehicles",
          "bn": "High-sided vehicles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Cars",
          "bn": "Cars"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Cyclists",
          "bn": "Cyclists"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q43",
    "categoryId": "c10",
    "text": {
      "en": "Where may you overtake on a one-way Street?",
      "bn": "Where may you overtake on a one-way Street?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Only on the left-hand side",
          "bn": "Only on the left-hand side"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Only on the right-hand side",
          "bn": "Only on the right-hand side"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Overtaking is not allowed",
          "bn": "Overtaking is not allowed"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Either on the right or the left",
          "bn": "Either on the right or the left"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q44",
    "categoryId": "c6",
    "text": {
      "en": "You are approaching a zebra crossing. Pedestrians are waiting to cross. You should:",
      "bn": "You are approaching a zebra crossing. Pedestrians are waiting to cross. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slow down and prepare to stop",
          "bn": "Slow down and prepare to stop"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Wave at them to cross the road",
          "bn": "Wave at them to cross the road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Give way to elderly and infirm only",
          "bn": "Give way to elderly and infirm only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Use your headlights to indicate they can cross",
          "bn": "Use your headlights to indicate they can cross"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q45",
    "categoryId": "c8",
    "text": {
      "en": "You are carrying a child in your car. They are under three years of age. Which of these is a suitable restraint?",
      "bn": "You are carrying a child in your car. They are under three years of age. Which of these is a suitable restraint?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "An adult seat belt",
          "bn": "An adult seat belt"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "A child seat",
          "bn": "A child seat"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "An adult lap belt",
          "bn": "An adult lap belt"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "An adult holding a child",
          "bn": "An adult holding a child"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q46",
    "categoryId": "c1",
    "text": {
      "en": "If you are feeling tired it is best to stop as soon as you can. Until then you should:",
      "bn": "If you are feeling tired it is best to stop as soon as you can. Until then you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Ensure a supply of fresh air",
          "bn": "Ensure a supply of fresh air"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Increase your speed to find a stopping place quickly",
          "bn": "Increase your speed to find a stopping place quickly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep changing speed to improve concentration",
          "bn": "Keep changing speed to improve concentration"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Gently tap the steering wheel",
          "bn": "Gently tap the steering wheel"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q47",
    "categoryId": "c10",
    "text": {
      "en": "You think the driver in the vehicle in front has forgotten to cancel their right indicator. You should",
      "bn": "You think the driver in the vehicle in front has forgotten to cancel their right indicator. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Overtake on the left if there is room",
          "bn": "Overtake on the left if there is room"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Flash your lights to alert the driver",
          "bn": "Flash your lights to alert the driver"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound your horn before overtaking",
          "bn": "Sound your horn before overtaking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stay behind and not overtake",
          "bn": "Stay behind and not overtake"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q48",
    "categoryId": "c10",
    "text": {
      "en": "When following a large vehicle you should stay well back because",
      "bn": "When following a large vehicle you should stay well back because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "It allows the driver to see you in the mirror",
          "bn": "It allows the driver to see you in the mirror"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "It helps the large vehicle to stop more easily",
          "bn": "It helps the large vehicle to stop more easily"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "It allows you to corner more quickly",
          "bn": "It allows you to corner more quickly"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "It helps you to keep out of the wind",
          "bn": "It helps you to keep out of the wind"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q49",
    "categoryId": "c13",
    "text": {
      "en": "Following a collision someone has suffered a burn. The burn needs to be cooled. What is the shortest time it should be cooled for?",
      "bn": "Following a collision someone has suffered a burn. The burn needs to be cooled. What is the shortest time it should be cooled for?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "15 minutes",
          "bn": "15 minutes"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "5 minutes",
          "bn": "5 minutes"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "10 minutes",
          "bn": "10 minutes"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "20 minutes",
          "bn": "20 minutes"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q50",
    "categoryId": "c6",
    "text": {
      "en": "A pedestrian with a white stick and red band is",
      "bn": "A pedestrian with a white stick and red band is"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Deaf and dumb",
          "bn": "Deaf and dumb"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Blind only",
          "bn": "Blind only"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Deaf and blind",
          "bn": "Deaf and blind"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Over 65 years old",
          "bn": "Over 65 years old"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q51",
    "categoryId": "c7",
    "text": {
      "en": "There is a tractor ahead of you. You wish to overtake but you are NOT sure if it is safe to do so. You should:",
      "bn": "There is a tractor ahead of you. You wish to overtake but you are NOT sure if it is safe to do so. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Follow another overtaking vehicle through",
          "bn": "Follow another overtaking vehicle through"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Not overtake if you are in doubt",
          "bn": "Not overtake if you are in doubt"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound your horn to the slow vehicle to pull over",
          "bn": "Sound your horn to the slow vehicle to pull over"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Speed through but flash your lights to oncoming traffic",
          "bn": "Speed through but flash your lights to oncoming traffic"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q52",
    "categoryId": "c6",
    "text": {
      "en": "You are driving behind three cyclists. They approach a roundabout in the lefthand lane. In which direction should you expect the cyclists to go?",
      "bn": "You are driving behind three cyclists. They approach a roundabout in the lefthand lane. In which direction should you expect the cyclists to go?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Left",
          "bn": "Left"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Right",
          "bn": "Right"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Straight ahead",
          "bn": "Straight ahead"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Any direction",
          "bn": "Any direction"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q53",
    "categoryId": "c10",
    "text": {
      "en": "When overtaking which routine should you use?",
      "bn": "When overtaking which routine should you use?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Mirrors, position, speed, look, mirrors, signal, manoeuvre",
          "bn": "Mirrors, position, speed, look, mirrors, signal, manoeuvre"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Look, mirrors, position, mirrors, signal, manoeuvre",
          "bn": "Look, mirrors, position, mirrors, signal, manoeuvre"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Speed, mirrors, look, signal, manoeuvre",
          "bn": "Speed, mirrors, look, signal, manoeuvre"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Mirrors, speed, position, look, mirrors, signal, manoeuvre",
          "bn": "Mirrors, speed, position, look, mirrors, signal, manoeuvre"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q54",
    "categoryId": "c10",
    "text": {
      "en": "How can you help to prevent your car radio from being stolen?",
      "bn": "How can you help to prevent your car radio from being stolen?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Hide the radio with a blanket",
          "bn": "Hide the radio with a blanket"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Install a security-coded radio",
          "bn": "Install a security-coded radio"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Park near a busy junction",
          "bn": "Park near a busy junction"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Park in an unlit area",
          "bn": "Park in an unlit area"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q55",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this sign?",
      "bn": "What is the meaning of this sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Toll bridge ahead",
          "bn": "Toll bridge ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Opening or swing bridge ahead",
          "bn": "Opening or swing bridge ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Road ahead closed",
          "bn": "Road ahead closed"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Humpback bridge ahead",
          "bn": "Humpback bridge ahead"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6f69f4f8a8.jpg"
  },
  {
    "id": "q56",
    "categoryId": "c4",
    "text": {
      "en": "Your overall stopping distance will be much longer when:",
      "bn": "Your overall stopping distance will be much longer when:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Driving on a very hot day",
          "bn": "Driving on a very hot day"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Driving in strong winds",
          "bn": "Driving in strong winds"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Driving in fog",
          "bn": "Driving in fog"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Driving in rain",
          "bn": "Driving in rain"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q57",
    "categoryId": "c4",
    "text": {
      "en": "You are on a long, downhill slope. What should you do to help control the speed of your car?",
      "bn": "You are on a long, downhill slope. What should you do to help control the speed of your car?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Grip the handbrake firmly",
          "bn": "Grip the handbrake firmly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Apply the parking brake gently",
          "bn": "Apply the parking brake gently"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Select a lower gear",
          "bn": "Select a lower gear"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Select neutral",
          "bn": "Select neutral"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q58",
    "categoryId": "c5",
    "text": {
      "en": "Why could keeping the clutch down or selecting neutral for long periods of time be dangerous?",
      "bn": "Why could keeping the clutch down or selecting neutral for long periods of time be dangerous?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Engine damage may be caused",
          "bn": "Engine damage may be caused"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Fuel spillage will occur",
          "bn": "Fuel spillage will occur"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "You will have less steering and braking control",
          "bn": "You will have less steering and braking control"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "It will wear tyres out more quickly",
          "bn": "It will wear tyres out more quickly"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q59",
    "categoryId": "c1",
    "text": {
      "en": "You have been convicted of driving whilst unfit through drink or drugs. You will find this is likely to cause the cost of one of the following to rise considerably. Which one?",
      "bn": "You have been convicted of driving whilst unfit through drink or drugs. You will find this is likely to cause the cost of one of the following to rise considerably. Which one?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Insurance premiums",
          "bn": "Insurance premiums"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Vehicle test certificate",
          "bn": "Vehicle test certificate"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Road fund licence",
          "bn": "Road fund licence"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Driving licence",
          "bn": "Driving licence"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q60",
    "categoryId": "c3",
    "text": {
      "en": "Anti-lock brakes prevent wheels from locking. This means the tyres are less likely to",
      "bn": "Anti-lock brakes prevent wheels from locking. This means the tyres are less likely to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Skid",
          "bn": "Skid"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Aquaplane",
          "bn": "Aquaplane"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Wear",
          "bn": "Wear"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Puncture",
          "bn": "Puncture"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q61",
    "categoryId": "c14",
    "text": {
      "en": "Any load that is carried on a roof rack MUST be:",
      "bn": "Any load that is carried on a roof rack MUST be:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "As light as possible",
          "bn": "As light as possible"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Carried only when strictly necessary",
          "bn": "Carried only when strictly necessary"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Covered with plastic sheeting",
          "bn": "Covered with plastic sheeting"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Securely fastened when driving",
          "bn": "Securely fastened when driving"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q62",
    "categoryId": "c12",
    "text": {
      "en": "What is the maximum number of penalty points that will automatically disqualify a driver who holds a provisional driving licence?",
      "bn": "What is the maximum number of penalty points that will automatically disqualify a driver who holds a provisional driving licence?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "10 points during any one year period",
          "bn": "10 points during any one year period"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "18 points over a two year period",
          "bn": "18 points over a two year period"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "15 points over a five 5 year period",
          "bn": "15 points over a five 5 year period"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "4 points a year over a 3 year period",
          "bn": "4 points a year over a 3 year period"
        }
      },
      {
        "id": "e",
        "text": {
          "en": "12 points at any time during a 3 year period",
          "bn": "12 points at any time during a 3 year period"
        }
      }
    ],
    "correctOptionId": "e",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q63",
    "categoryId": "c3",
    "text": {
      "en": "You can use the engine of your vehicle as a brake by",
      "bn": "You can use the engine of your vehicle as a brake by"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "By selecting fifth gear",
          "bn": "By selecting fifth gear"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "By selecting a lower gear",
          "bn": "By selecting a lower gear"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "By travelling with the clutch pressed down",
          "bn": "By travelling with the clutch pressed down"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "By turning the engine off",
          "bn": "By turning the engine off"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q64",
    "categoryId": "c11",
    "text": {
      "en": "When should you use front and rear fog lights?",
      "bn": "When should you use front and rear fog lights?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When it is raining and just in case the roads are slippery.",
          "bn": "When it is raining and just in case the roads are slippery."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When going through tunnels.",
          "bn": "When going through tunnels."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When the road is unlit by street lamps or they are not working.",
          "bn": "When the road is unlit by street lamps or they are not working."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "During any time of the day or night to make sure that other road users see me.",
          "bn": "During any time of the day or night to make sure that other road users see me."
        }
      },
      {
        "id": "e",
        "text": {
          "en": "When visibility is considerably reduced because of fog.",
          "bn": "When visibility is considerably reduced because of fog."
        }
      }
    ],
    "correctOptionId": "e",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q65",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No motor vehicles",
          "bn": "No motor vehicles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You have priority",
          "bn": "You have priority"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No overtaking",
          "bn": "No overtaking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Two-way traffic",
          "bn": "Two-way traffic"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6fa5d05e36.jpg"
  },
  {
    "id": "q66",
    "categoryId": "c1",
    "text": {
      "en": "A driver has had a few alcoholic drinks, what advice should you give them?",
      "bn": "A driver has had a few alcoholic drinks, what advice should you give them?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Take extra care when driving home",
          "bn": "Take extra care when driving home"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Drink several cups of coffee before driving home",
          "bn": "Drink several cups of coffee before driving home"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Take a short sleep before driving home",
          "bn": "Take a short sleep before driving home"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Do not drive home",
          "bn": "Do not drive home"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q67",
    "categoryId": "c10",
    "text": {
      "en": "You may only enter a box junction when:",
      "bn": "You may only enter a box junction when:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Your exit road is clear",
          "bn": "Your exit road is clear"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You need to turn left",
          "bn": "You need to turn left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "There are less than two vehicles in front of you",
          "bn": "There are less than two vehicles in front of you"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The traffic lights show green",
          "bn": "The traffic lights show green"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6fb5b8aa2f.jpg"
  },
  {
    "id": "q68",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Humps in the road",
          "bn": "Humps in the road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Humpback bridge",
          "bn": "Humpback bridge"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Entrance to tunnel",
          "bn": "Entrance to tunnel"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Soft verges",
          "bn": "Soft verges"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6fce0aee63.jpg"
  },
  {
    "id": "q69",
    "categoryId": "c10",
    "text": {
      "en": "You go to a social event and need to drive a short time afterwards. What precaution should you take?",
      "bn": "You go to a social event and need to drive a short time afterwards. What precaution should you take?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Avoid drinking alcohol on an empty stomach",
          "bn": "Avoid drinking alcohol on an empty stomach"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Avoid drinking alcohol completely",
          "bn": "Avoid drinking alcohol completely"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drink plenty of milk before drinking alcohol",
          "bn": "Drink plenty of milk before drinking alcohol"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drink plenty of coffee after drinking alcohol",
          "bn": "Drink plenty of coffee after drinking alcohol"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q70",
    "categoryId": "c12",
    "text": {
      "en": "Apart from suffering any punishment according to law, what will a disqualified driver has to do to obtain a driving licence?",
      "bn": "Apart from suffering any punishment according to law, what will a disqualified driver has to do to obtain a driving licence?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Simply re-sit and pass the test of skills and behaviour.",
          "bn": "Simply re-sit and pass the test of skills and behaviour."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Re-apply as for a new driver after expiry of disqualification period and must re-sit and pass both the theory test and test of skills and behaviour.",
          "bn": "Re-apply as for a new driver after expiry of disqualification period and must re-sit and pass both the theory test and test of skills and behaviour."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Pay any outstanding fines, submit a new licence application and re-sit and pass the theory test at any time during disqualification period.",
          "bn": "Pay any outstanding fines, submit a new licence application and re-sit and pass the theory test at any time during disqualification period."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Wait for any disqualification period to pass and apply for a duplicate driving licence.",
          "bn": "Wait for any disqualification period to pass and apply for a duplicate driving licence."
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q71",
    "categoryId": "c11",
    "text": {
      "en": "You are on a narrow road at night. A slower-moving vehicle ahead has been signaling right for some time. What should you do?",
      "bn": "You are on a narrow road at night. A slower-moving vehicle ahead has been signaling right for some time. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Overtake on the left",
          "bn": "Overtake on the left"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Signal right and sound your horn",
          "bn": "Signal right and sound your horn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Wait for the signal to be cancelled before overtaking",
          "bn": "Wait for the signal to be cancelled before overtaking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your headlights before overtaking",
          "bn": "Flash your headlights before overtaking"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q72",
    "categoryId": "c10",
    "text": {
      "en": "You want to turn right from a main road into a side road. Just before you turn you should",
      "bn": "You want to turn right from a main road into a side road. Just before you turn you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Cancel your right-turn signal",
          "bn": "Cancel your right-turn signal"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop and set the handbrake",
          "bn": "Stop and set the handbrake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Check for traffic overtaking on your right",
          "bn": "Check for traffic overtaking on your right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Select first gear",
          "bn": "Select first gear"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q73",
    "categoryId": "c10",
    "text": {
      "en": "The main purpose of a box junction is",
      "bn": "The main purpose of a box junction is"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To prevent junctions becoming blocked by queuing traffic",
          "bn": "To prevent junctions becoming blocked by queuing traffic"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To speed traffic up",
          "bn": "To speed traffic up"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To stop you turning right at a crossroads",
          "bn": "To stop you turning right at a crossroads"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To slow traffic down",
          "bn": "To slow traffic down"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q74",
    "categoryId": "c11",
    "text": {
      "en": "As you approach a pelican crossing the lights change to green but elderly people are halfway across. You should:",
      "bn": "As you approach a pelican crossing the lights change to green but elderly people are halfway across. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Wait because they will take longer to cross",
          "bn": "Wait because they will take longer to cross"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Rev your engine to make them hurry",
          "bn": "Rev your engine to make them hurry"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Flash your lights in case they have not heard you",
          "bn": "Flash your lights in case they have not heard you"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Wave them to cross as quickly as they can",
          "bn": "Wave them to cross as quickly as they can"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q75",
    "categoryId": "c10",
    "text": {
      "en": "You are approaching a right-hand bend. You should:",
      "bn": "You are approaching a right-hand bend. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep well to the left for a better view around the bend",
          "bn": "Keep well to the left for a better view around the bend"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep well to the left as it makes the bend faster",
          "bn": "Keep well to the left as it makes the bend faster"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep well to the right to avoid anything in the gutter",
          "bn": "Keep well to the right to avoid anything in the gutter"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Keep well to the right to make the bend less sharp",
          "bn": "Keep well to the right to make the bend less sharp"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa6ffbce5b8d.jpg"
  },
  {
    "id": "q76",
    "categoryId": "c10",
    "text": {
      "en": "When are passengers allowed to ride in a caravan that is being towed?",
      "bn": "When are passengers allowed to ride in a caravan that is being towed?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When travelling on minor roads",
          "bn": "When travelling on minor roads"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When they are over 18 years old",
          "bn": "When they are over 18 years old"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When travelling on motorways",
          "bn": "When travelling on motorways"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Never",
          "bn": "Never"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q77",
    "categoryId": "c3",
    "text": {
      "en": "Your car is fitted with power assisted steering. This will make the steering seem",
      "bn": "Your car is fitted with power assisted steering. This will make the steering seem"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Noisier",
          "bn": "Noisier"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Lighter",
          "bn": "Lighter"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Heavier",
          "bn": "Heavier"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Quieter",
          "bn": "Quieter"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "Power assisted steering is a system for reducing the steering effort on cars by using an external power source to assist in turning the wheels ",
      "bn": "Power assisted steering is a system for reducing the steering effort on cars by using an external power source to assist in turning the wheels "
    }
  },
  {
    "id": "q78",
    "categoryId": "c11",
    "text": {
      "en": "You are dazzled at night by the lights of the vehicle behind you. You should:",
      "bn": "You are dazzled at night by the lights of the vehicle behind you. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Set your mirror to anti-dazzle",
          "bn": "Set your mirror to anti-dazzle"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Brake sharply to a stop",
          "bn": "Brake sharply to a stop"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Set your mirror to dazzle the other driver",
          "bn": "Set your mirror to dazzle the other driver"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Switch your rear lights on and off",
          "bn": "Switch your rear lights on and off"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q79",
    "categoryId": "c9",
    "text": {
      "en": "A fundamental rule when driving on a dual carriageway is:",
      "bn": "A fundamental rule when driving on a dual carriageway is:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Use the lane that has least traffic",
          "bn": "Use the lane that has least traffic"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep to the left lane unless overtaking",
          "bn": "Keep to the left lane unless overtaking"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Try to keep above 50 kph to prevent congestion",
          "bn": "Try to keep above 50 kph to prevent congestion"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Overtake on the side that is clearest",
          "bn": "Overtake on the side that is clearest"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q80",
    "categoryId": "c10",
    "text": {
      "en": "You are driving on an icy road. How can you avoid wheel spin?",
      "bn": "You are driving on an icy road. How can you avoid wheel spin?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive at a slow speed in as high gear as possible",
          "bn": "Drive at a slow speed in as high gear as possible"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Use the handbrake if the wheels start to slip",
          "bn": "Use the handbrake if the wheels start to slip"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake gently and repeatedly",
          "bn": "Brake gently and repeatedly"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drive in a low gear at all times",
          "bn": "Drive in a low gear at all times"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q81",
    "categoryId": "c11",
    "text": {
      "en": "This marking appears on the road just before a",
      "bn": "This marking appears on the road just before a"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No entry sign",
          "bn": "No entry sign"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "No through road sign",
          "bn": "No through road sign"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Give way sign",
          "bn": "Give way sign"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stop sign",
          "bn": "Stop sign"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7020f94ff2.jpg"
  },
  {
    "id": "q82",
    "categoryId": "c10",
    "text": {
      "en": "What does tailgating mean?",
      "bn": "What does tailgating mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When a vehicle is with its back doors open",
          "bn": "When a vehicle is with its back doors open"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When stationary vehicles are too close in a queue",
          "bn": "When stationary vehicles are too close in a queue"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When a vehicle delivering goods has its tailgate down",
          "bn": "When a vehicle delivering goods has its tailgate down"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When a driver is following another vehicle too closely",
          "bn": "When a driver is following another vehicle too closely"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q83",
    "categoryId": "c10",
    "text": {
      "en": "You are driving a slow moving car on a narrow winding road. In order to let other vehicles overtake you should",
      "bn": "You are driving a slow moving car on a narrow winding road. In order to let other vehicles overtake you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Wave to them to pass",
          "bn": "Wave to them to pass"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pull in safely when you can",
          "bn": "Pull in safely when you can"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep left and hold your speed",
          "bn": "Keep left and hold your speed"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Show a left turn signal",
          "bn": "Show a left turn signal"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q84",
    "categoryId": "c9",
    "text": {
      "en": "On the dual carriageway the hard shoulder should be used",
      "bn": "On the dual carriageway the hard shoulder should be used"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "For a short rest when tired",
          "bn": "For a short rest when tired"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To answer a mobile phone",
          "bn": "To answer a mobile phone"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When an emergency arises",
          "bn": "When an emergency arises"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To check a road atlas",
          "bn": "To check a road atlas"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q85",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Crossroads",
          "bn": "Crossroads"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Level crossing without gate",
          "bn": "Level crossing without gate"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Ahead only",
          "bn": "Ahead only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Level crossing with gate",
          "bn": "Level crossing with gate"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7045180ba4.jpg"
  },
  {
    "id": "q86",
    "categoryId": "c4",
    "text": {
      "en": "While driving a vehicle, at what distance MUST you be able to read a number plate?",
      "bn": "While driving a vehicle, at what distance MUST you be able to read a number plate?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "30 meters (98 feet)",
          "bn": "30 meters (98 feet)"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "20.5 meters (67 feet)",
          "bn": "20.5 meters (67 feet)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "10 meters (33 feet)",
          "bn": "10 meters (33 feet)"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "15 meters (49 feet)",
          "bn": "15 meters (49 feet)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q87",
    "categoryId": "c10",
    "text": {
      "en": "A learner driver you are following stalls at a junction. What should you do?",
      "bn": "A learner driver you are following stalls at a junction. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Sound your horn and flash your lights",
          "bn": "Sound your horn and flash your lights"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Steer around them and drive on",
          "bn": "Steer around them and drive on"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Shout instructions",
          "bn": "Shout instructions"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Be patient and wait for them to move on",
          "bn": "Be patient and wait for them to move on"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q88",
    "categoryId": "c12",
    "text": {
      "en": "An MOT certificate is normally valid for",
      "bn": "An MOT certificate is normally valid for"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Three years after the date it was issued",
          "bn": "Three years after the date it was issued"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "30,000 miles",
          "bn": "30,000 miles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "10,000 miles",
          "bn": "10,000 miles"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "One year after the date it was issued",
          "bn": "One year after the date it was issued"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q89",
    "categoryId": "c10",
    "text": {
      "en": "A cycle lane is marked by a solid white line. You must not drive or park in it",
      "bn": "A cycle lane is marked by a solid white line. You must not drive or park in it"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "At any time",
          "bn": "At any time"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "During its period of operation",
          "bn": "During its period of operation"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "During the rush hour",
          "bn": "During the rush hour"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "If a cyclist is using it",
          "bn": "If a cyclist is using it"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q90",
    "categoryId": "c6",
    "text": {
      "en": "At which pedestrian crossing are cyclists allowed to ride across?",
      "bn": "At which pedestrian crossing are cyclists allowed to ride across?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Puffin",
          "bn": "Puffin"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Toucan",
          "bn": "Toucan"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Zebra",
          "bn": "Zebra"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Pelican",
          "bn": "Pelican"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "There are five (5) different types of pedestrian crossings; Puffin, Zebra, Toucan, Pelican and Pegasus ",
      "bn": "There are five (5) different types of pedestrian crossings; Puffin, Zebra, Toucan, Pelican and Pegasus "
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa70d94481ca.jpg"
  },
  {
    "id": "q91",
    "categoryId": "c3",
    "text": {
      "en": "A police officer orders you to stop and he finds you have a faulty tyre. Who is responsible for the tyre?",
      "bn": "A police officer orders you to stop and he finds you have a faulty tyre. Who is responsible for the tyre?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Whoever issued the VRT certificate",
          "bn": "Whoever issued the VRT certificate"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The previous owner",
          "bn": "The previous owner"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Whoever services the car",
          "bn": "Whoever services the car"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "You, the driver",
          "bn": "You, the driver"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q92",
    "categoryId": "c4",
    "text": {
      "en": "You are driving in traffic at the speed limit for the road. The driver behind is going to overtake. You should:",
      "bn": "You are driving in traffic at the speed limit for the road. The driver behind is going to overtake. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep a steady course and allow the driver behind to overtake",
          "bn": "Keep a steady course and allow the driver behind to overtake"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Accelerate to get away from the driver behind",
          "bn": "Accelerate to get away from the driver behind"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Move closer to the car ahead, so the driver behind has no room to overtake",
          "bn": "Move closer to the car ahead, so the driver behind has no room to overtake"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Wave the driver behind to overtake when it is safe",
          "bn": "Wave the driver behind to overtake when it is safe"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q93",
    "categoryId": "c10",
    "text": {
      "en": "You are driving past a lane of parked cars and you notice a ball bouncing out into the road ahead. What should you do?",
      "bn": "You are driving past a lane of parked cars and you notice a ball bouncing out into the road ahead. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stop and wave the children across to fetch their ball",
          "bn": "Stop and wave the children across to fetch their ball"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Slow down and be prepared to stop for children",
          "bn": "Slow down and be prepared to stop for children"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Continue driving at the same speed and sound your horn",
          "bn": "Continue driving at the same speed and sound your horn"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Continue driving at the same speed and flash your headlights",
          "bn": "Continue driving at the same speed and flash your headlights"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q94",
    "categoryId": "c10",
    "text": {
      "en": "You are towing a caravan. Which is the safest type of rear-view mirror to use?",
      "bn": "You are towing a caravan. Which is the safest type of rear-view mirror to use?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Interior wide-angle mirror",
          "bn": "Interior wide-angle mirror"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Ordinary interior mirror",
          "bn": "Ordinary interior mirror"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Ordinary door mirrors",
          "bn": "Ordinary door mirrors"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Extended-arm side mirrors",
          "bn": "Extended-arm side mirrors"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q95",
    "categoryId": "c8",
    "text": {
      "en": "You are trying to move off on snow. You should use",
      "bn": "You are trying to move off on snow. You should use"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The lowest gear you can",
          "bn": "The lowest gear you can"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The highest gear you can",
          "bn": "The highest gear you can"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "A high engine speed",
          "bn": "A high engine speed"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The handbrake and footbrake together",
          "bn": "The handbrake and footbrake together"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q96",
    "categoryId": "c10",
    "text": {
      "en": "When going straight ahead at a roundabout you should:",
      "bn": "When going straight ahead at a roundabout you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Indicate right when approaching the roundabout",
          "bn": "Indicate right when approaching the roundabout"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Indicate left when approaching the roundabout",
          "bn": "Indicate left when approaching the roundabout"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Not indicate at any time",
          "bn": "Not indicate at any time"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Indicate left before leaving the roundabout",
          "bn": "Indicate left before leaving the roundabout"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q97",
    "categoryId": "c8",
    "text": {
      "en": "You are driving in fog. Why should you keep well back from the vehicle in front?",
      "bn": "You are driving in fog. Why should you keep well back from the vehicle in front?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "In case it stops suddenly",
          "bn": "In case it stops suddenly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "In case its brake lights dazzle you",
          "bn": "In case its brake lights dazzle you"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "In case its fog lights dazzle you",
          "bn": "In case its fog lights dazzle you"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "In case it changes direction suddenly",
          "bn": "In case it changes direction suddenly"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa71195cfe4b.jpg"
  },
  {
    "id": "q98",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No through road",
          "bn": "No through road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Telephone box ahead",
          "bn": "Telephone box ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "T-junction",
          "bn": "T-junction"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Toilet ahead",
          "bn": "Toilet ahead"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa71259656af.jpg"
  },
  {
    "id": "q99",
    "categoryId": "c12",
    "text": {
      "en": "Apart from suffering any punishment according to law, what will a disqualified driver has to do to obtain a driving licence?",
      "bn": "Apart from suffering any punishment according to law, what will a disqualified driver has to do to obtain a driving licence?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Re-apply as for a new driver after expiry of disqualification period and must re-sit and pass both the theory test and test of skills and behaviour.",
          "bn": "Re-apply as for a new driver after expiry of disqualification period and must re-sit and pass both the theory test and test of skills and behaviour."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pay any outstanding fines, submit a new licence application and re-sit and pass the theory test at any time during disqualification period.",
          "bn": "Pay any outstanding fines, submit a new licence application and re-sit and pass the theory test at any time during disqualification period."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Simply re-sit and pass the test of skills and behaviour.",
          "bn": "Simply re-sit and pass the test of skills and behaviour."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Wait for any disqualification period to pass and apply for a duplicate driving licence.",
          "bn": "Wait for any disqualification period to pass and apply for a duplicate driving licence."
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q100",
    "categoryId": "c1",
    "text": {
      "en": "You are taking drugs that are likely to affect you driving. What should you do?",
      "bn": "You are taking drugs that are likely to affect you driving. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive only for short distances",
          "bn": "Drive only for short distances"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Only drive if accompanied by a full licence holder",
          "bn": "Only drive if accompanied by a full licence holder"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Limit your driving to essential journeys",
          "bn": "Limit your driving to essential journeys"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Seek medical advice before driving",
          "bn": "Seek medical advice before driving"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q101",
    "categoryId": "c11",
    "text": {
      "en": "Motorcycles ride in day light with their headlights switched on because",
      "bn": "Motorcycles ride in day light with their headlights switched on because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "It is legal requirement",
          "bn": "It is legal requirement"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "There is a speed trap ahead",
          "bn": "There is a speed trap ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They need to be seen",
          "bn": "They need to be seen"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "There are speed humps ahead",
          "bn": "There are speed humps ahead"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q102",
    "categoryId": "c11",
    "text": {
      "en": "In daylight, an approaching motorcyclist is using a dipped headlight. Why?",
      "bn": "In daylight, an approaching motorcyclist is using a dipped headlight. Why?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To stop the battery overcharging",
          "bn": "To stop the battery overcharging"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The rider is inviting you to proceed",
          "bn": "The rider is inviting you to proceed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To improve the rider’s vision",
          "bn": "To improve the rider’s vision"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "So that the rider can be seen more easily",
          "bn": "So that the rider can be seen more easily"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q103",
    "categoryId": "c10",
    "text": {
      "en": "You want to turn right from a main road into a side road. Just before you turn you should",
      "bn": "You want to turn right from a main road into a side road. Just before you turn you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Select first gear",
          "bn": "Select first gear"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop and set the handbrake",
          "bn": "Stop and set the handbrake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Cancel your right-turn signal",
          "bn": "Cancel your right-turn signal"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Check for traffic overtaking on your right",
          "bn": "Check for traffic overtaking on your right"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q104",
    "categoryId": "c10",
    "text": {
      "en": "Which of the following are at greatest risk from other road users?",
      "bn": "Which of the following are at greatest risk from other road users?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Lorry drivers",
          "bn": "Lorry drivers"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Busy bus drivers",
          "bn": "Busy bus drivers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Motorcycles",
          "bn": "Motorcycles"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Learner car drivers",
          "bn": "Learner car drivers"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q105",
    "categoryId": "c11",
    "text": {
      "en": "When MUST you use dipped lights during the day?",
      "bn": "When MUST you use dipped lights during the day?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When parking",
          "bn": "When parking"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Along narrow streets",
          "bn": "Along narrow streets"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "All the time",
          "bn": "All the time"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "In poor visibility",
          "bn": "In poor visibility"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q106",
    "categoryId": "c10",
    "text": {
      "en": "Before reversing you should always check:",
      "bn": "Before reversing you should always check:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Your side mirrors",
          "bn": "Your side mirrors"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Your rear view mirror",
          "bn": "Your rear view mirror"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The area behind you",
          "bn": "The area behind you"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "All round",
          "bn": "All round"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q107",
    "categoryId": "c11",
    "text": {
      "en": "What do these road markings mean?",
      "bn": "What do these road markings mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No stopping or parking permitted.",
          "bn": "No stopping or parking permitted."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Central limit of dual carriageway and may be crossed only when overtaking.",
          "bn": "Central limit of dual carriageway and may be crossed only when overtaking."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Lines on the road just to mark the lanes and guide traffic flows, which have no legal or safety implications.",
          "bn": "Lines on the road just to mark the lanes and guide traffic flows, which have no legal or safety implications."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Continuous solid double white line (Centre line) which vehicles must not drive over, across or astride except to enter a side road, unless prohibited from doing so by appropriate signage.",
          "bn": "Continuous solid double white line (Centre line) which vehicles must not drive over, across or astride except to enter a side road, unless prohibited from doing so by appropriate signage."
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa71e768a921.jpg"
  },
  {
    "id": "q108",
    "categoryId": "c7",
    "text": {
      "en": "When about to overtake a long vehicle or lorry you should:",
      "bn": "When about to overtake a long vehicle or lorry you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive close to the lorry in order to pass more quickly",
          "bn": "Drive close to the lorry in order to pass more quickly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Sound the horn to warn the driver that you are there",
          "bn": "Sound the horn to warn the driver that you are there"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stay well back from the lorry to obtain a better view",
          "bn": "Stay well back from the lorry to obtain a better view"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your lights and wait for the driver to signal when it is safe",
          "bn": "Flash your lights and wait for the driver to signal when it is safe"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q109",
    "categoryId": "c9",
    "text": {
      "en": "You are travelling along the left-hand lane of a three-lane motorway. Traffic is joining from a slip road. You should",
      "bn": "You are travelling along the left-hand lane of a three-lane motorway. Traffic is joining from a slip road. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Move to another lane",
          "bn": "Move to another lane"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Race the other vehicles",
          "bn": "Race the other vehicles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Switch on your hazard lights",
          "bn": "Switch on your hazard lights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Maintain a steady speed",
          "bn": "Maintain a steady speed"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q110",
    "categoryId": "c2",
    "text": {
      "en": "Another driver does something that upsets you. You should:",
      "bn": "Another driver does something that upsets you. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Let them know how you feel",
          "bn": "Let them know how you feel"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Try not to react",
          "bn": "Try not to react"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your headlights several times",
          "bn": "Flash your headlights several times"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q111",
    "categoryId": "c10",
    "text": {
      "en": "You are driving and ahead of you there is a vehicle with a flashing amber beacon. This means it is:",
      "bn": "You are driving and ahead of you there is a vehicle with a flashing amber beacon. This means it is:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slow moving",
          "bn": "Slow moving"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "A school crossing patrol",
          "bn": "A school crossing patrol"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "A doctor’s car",
          "bn": "A doctor’s car"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Broken down",
          "bn": "Broken down"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q112",
    "categoryId": "c10",
    "text": {
      "en": "What does the term 'blind spot' mean for a driver?",
      "bn": "What does the term 'blind spot' mean for a driver?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "An area not covered by your mirrors",
          "bn": "An area not covered by your mirrors"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "An area not covered by your headlights",
          "bn": "An area not covered by your headlights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "An area covered by your right-hand mirror",
          "bn": "An area covered by your right-hand mirror"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "An area covered by your left-hand mirror",
          "bn": "An area covered by your left-hand mirror"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q113",
    "categoryId": "c10",
    "text": {
      "en": "You enter a road where there are road humps. You should:",
      "bn": "You enter a road where there are road humps. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Always keep to the maximum legal speed",
          "bn": "Always keep to the maximum legal speed"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Accelerate quickly between each one",
          "bn": "Accelerate quickly between each one"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drive slowly at school times only",
          "bn": "Drive slowly at school times only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Maintain a reduced speed throughout",
          "bn": "Maintain a reduced speed throughout"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7217c711d7.jpg"
  },
  {
    "id": "q114",
    "categoryId": "c6",
    "text": {
      "en": "You see a pedestrian with a white stick and red band. This means that the person is",
      "bn": "You see a pedestrian with a white stick and red band. This means that the person is"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Physically disabled",
          "bn": "Physically disabled"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Deaf and blind",
          "bn": "Deaf and blind"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Deaf only",
          "bn": "Deaf only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Blind only",
          "bn": "Blind only"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q115",
    "categoryId": "c11",
    "text": {
      "en": "When should you give signals?",
      "bn": "When should you give signals?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "In traffic only during the hours of darkness or in bad weather.",
          "bn": "In traffic only during the hours of darkness or in bad weather."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To give you priority over other traffic when changing lanes or before pulling out.",
          "bn": "To give you priority over other traffic when changing lanes or before pulling out."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Only when joining a dual carriageway from a slip road so you don't have to give way",
          "bn": "Only when joining a dual carriageway from a slip road so you don't have to give way"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "At all times in order to alert other road users of your intended actions.",
          "bn": "At all times in order to alert other road users of your intended actions."
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q116",
    "categoryId": "c11",
    "text": {
      "en": "As you approach a pelican crossing the lights change to green but elderly people are halfway across. You should:",
      "bn": "As you approach a pelican crossing the lights change to green but elderly people are halfway across. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Rev your engine to make them hurry",
          "bn": "Rev your engine to make them hurry"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Wave them to cross as quickly as they can",
          "bn": "Wave them to cross as quickly as they can"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Wait because they will take longer to cross",
          "bn": "Wait because they will take longer to cross"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your lights in case they have not heard you",
          "bn": "Flash your lights in case they have not heard you"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q117",
    "categoryId": "c11",
    "text": {
      "en": "At traffic lights, amber on its own means:",
      "bn": "At traffic lights, amber on its own means:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Go if the way is clear",
          "bn": "Go if the way is clear"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Go if no pedestrians are crossing",
          "bn": "Go if no pedestrians are crossing"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Prepare to go",
          "bn": "Prepare to go"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stop at the stop line",
          "bn": "Stop at the stop line"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "the-highway-code-light-signals-controlling-traffic.pdf ",
      "bn": "the-highway-code-light-signals-controlling-traffic.pdf "
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7227690e9f.png"
  },
  {
    "id": "q118",
    "categoryId": "c10",
    "text": {
      "en": "You meet an obstruction on your side of the road. You should:",
      "bn": "You meet an obstruction on your side of the road. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Give way to oncoming traffic",
          "bn": "Give way to oncoming traffic"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Wave oncoming vehicles through",
          "bn": "Wave oncoming vehicles through"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drive on; it is your right of way",
          "bn": "Drive on; it is your right of way"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Accelerate to get past first",
          "bn": "Accelerate to get past first"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa72598be3e4.jpg"
  },
  {
    "id": "q119",
    "categoryId": "c3",
    "text": {
      "en": "You will use more fuel if your tyres are",
      "bn": "You will use more fuel if your tyres are"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Of different makes",
          "bn": "Of different makes"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "New and hardly used",
          "bn": "New and hardly used"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Under-inflated",
          "bn": "Under-inflated"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Over-inflated",
          "bn": "Over-inflated"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q120",
    "categoryId": "c8",
    "text": {
      "en": "To correct a rear-wheel skid you should",
      "bn": "To correct a rear-wheel skid you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Apply your handbrake",
          "bn": "Apply your handbrake"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Steer away from it",
          "bn": "Steer away from it"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Not steer at all",
          "bn": "Not steer at all"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Steer into it",
          "bn": "Steer into it"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q121",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No vehicles over 30 tonnes",
          "bn": "No vehicles over 30 tonnes"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "End of 30 kph zone",
          "bn": "End of 30 kph zone"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "New speed limit 20 kph",
          "bn": "New speed limit 20 kph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Minimum speed limit 30kph",
          "bn": "Minimum speed limit 30kph"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa726ee4e18e.jpg"
  },
  {
    "id": "q122",
    "categoryId": "c6",
    "text": {
      "en": "You stopped for pedestrians waiting to cross at a zebra crossing. They did not start to cross. What should you do?",
      "bn": "You stopped for pedestrians waiting to cross at a zebra crossing. They did not start to cross. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Wave them to cross",
          "bn": "Wave them to cross"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Be patient and wait",
          "bn": "Be patient and wait"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drive on",
          "bn": "Drive on"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q123",
    "categoryId": "c1",
    "text": {
      "en": "A driver has had a few alcoholic drinks, what advice should you give them?",
      "bn": "A driver has had a few alcoholic drinks, what advice should you give them?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drink several cups of coffee before driving home",
          "bn": "Drink several cups of coffee before driving home"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Take extra care when driving home",
          "bn": "Take extra care when driving home"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Take a short sleep before driving home",
          "bn": "Take a short sleep before driving home"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Do not drive home",
          "bn": "Do not drive home"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q124",
    "categoryId": "c7",
    "text": {
      "en": "You are driving in town. There is a bus at the bus stop on the other side of the road. Why should you be careful?",
      "bn": "You are driving in town. There is a bus at the bus stop on the other side of the road. Why should you be careful?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Pedestrians may come from behind the bus",
          "bn": "Pedestrians may come from behind the bus"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The bus may have broken down",
          "bn": "The bus may have broken down"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The bus may remain stationary",
          "bn": "The bus may remain stationary"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The bus may move off suddenly",
          "bn": "The bus may move off suddenly"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q125",
    "categoryId": "c11",
    "text": {
      "en": "You are travelling at the legal speed limit. A vehicle comes up quickly behind, flashing its headlights. You should",
      "bn": "You are travelling at the legal speed limit. A vehicle comes up quickly behind, flashing its headlights. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Accelerate to make a gap behind you",
          "bn": "Accelerate to make a gap behind you"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Maintain your speed to prevent the vehicle from overtaking",
          "bn": "Maintain your speed to prevent the vehicle from overtaking"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Touch the brakes sharply to show your brake lights",
          "bn": "Touch the brakes sharply to show your brake lights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Allow the vehicle to overtake",
          "bn": "Allow the vehicle to overtake"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q126",
    "categoryId": "c10",
    "text": {
      "en": "When you apply to renew your vehicle Excise Duty (tax disc) you must have",
      "bn": "When you apply to renew your vehicle Excise Duty (tax disc) you must have"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "A valid driving licence",
          "bn": "A valid driving licence"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The old tax disc",
          "bn": "The old tax disc"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Valid insurance",
          "bn": "Valid insurance"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The handbook",
          "bn": "The handbook"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q127",
    "categoryId": "c10",
    "text": {
      "en": "A toucan crossing is different from other crossings because",
      "bn": "A toucan crossing is different from other crossings because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "A traffic warden controls it",
          "bn": "A traffic warden controls it"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Two flashing lights control it",
          "bn": "Two flashing lights control it"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Moped riders can use it",
          "bn": "Moped riders can use it"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Cyclists can use it",
          "bn": "Cyclists can use it"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q128",
    "categoryId": "c3",
    "text": {
      "en": "The vehicle you are driving pulls to one side when you brake. What is the most likely cause of the problem?",
      "bn": "The vehicle you are driving pulls to one side when you brake. What is the most likely cause of the problem?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Low levels of power steering fluid",
          "bn": "Low levels of power steering fluid"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Poorly adjusted brakes",
          "bn": "Poorly adjusted brakes"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "A faulty handbrake",
          "bn": "A faulty handbrake"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Incorrect tyre pressure",
          "bn": "Incorrect tyre pressure"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q129",
    "categoryId": "c8",
    "text": {
      "en": "You are driving in very wet weather. Your vehicle begins to slide. This affect is called:",
      "bn": "You are driving in very wet weather. Your vehicle begins to slide. This affect is called:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Weaving",
          "bn": "Weaving"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Fading",
          "bn": "Fading"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Hosing",
          "bn": "Hosing"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Aquaplaning",
          "bn": "Aquaplaning"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q130",
    "categoryId": "c10",
    "text": {
      "en": "You are driving at night on an dark, unlit road following a slower moving vehicle. You should:",
      "bn": "You are driving at night on an dark, unlit road following a slower moving vehicle. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Use dipped beam headlights",
          "bn": "Use dipped beam headlights"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Use full beam headlights",
          "bn": "Use full beam headlights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Switch off you headlights",
          "bn": "Switch off you headlights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your headlights",
          "bn": "Flash your headlights"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q131",
    "categoryId": "c3",
    "text": {
      "en": "Driving with under-inflated (low) tyres can affect",
      "bn": "Driving with under-inflated (low) tyres can affect"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Engine temperatures",
          "bn": "Engine temperatures"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Oil pressure",
          "bn": "Oil pressure"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Fuel consumption",
          "bn": "Fuel consumption"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Judgment of the driver",
          "bn": "Judgment of the driver"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q132",
    "categoryId": "c9",
    "text": {
      "en": "The aim of an Active Traffic Management scheme on a motorway is to",
      "bn": "The aim of an Active Traffic Management scheme on a motorway is to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Prevent overtaking",
          "bn": "Prevent overtaking"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Reduce congestion",
          "bn": "Reduce congestion"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Prevent tailgating",
          "bn": "Prevent tailgating"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Reduce rest stops",
          "bn": "Reduce rest stops"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q133",
    "categoryId": "c11",
    "text": {
      "en": "What should a driver do at a pelican crossing when the red and amber lights are on?",
      "bn": "What should a driver do at a pelican crossing when the red and amber lights are on?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Always wait for the green light before proceeding",
          "bn": "Always wait for the green light before proceeding"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Give way to any pedestrians on the crossing",
          "bn": "Give way to any pedestrians on the crossing"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Wait for the red-and amber light before proceeding",
          "bn": "Wait for the red-and amber light before proceeding"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Signal the pedestrian to cross",
          "bn": "Signal the pedestrian to cross"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q134",
    "categoryId": "c10",
    "text": {
      "en": "An elderly person’s driving ability could be affected because they may be unable to:",
      "bn": "An elderly person’s driving ability could be affected because they may be unable to:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Understand road signs",
          "bn": "Understand road signs"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "React very quickly",
          "bn": "React very quickly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Obtain car insurance",
          "bn": "Obtain car insurance"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Give signals correctly",
          "bn": "Give signals correctly"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q135",
    "categoryId": "c12",
    "text": {
      "en": "Motorcars must first have an MOT certificate when they are",
      "bn": "Motorcars must first have an MOT certificate when they are"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Seven (7) years old",
          "bn": "Seven (7) years old"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "One (1) year old",
          "bn": "One (1) year old"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Five (5) years old",
          "bn": "Five (5) years old"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Three (3) years old",
          "bn": "Three (3) years old"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q136",
    "categoryId": "c4",
    "text": {
      "en": "While driving a vehicle, at what distance MUST you be able to read a number plate?",
      "bn": "While driving a vehicle, at what distance MUST you be able to read a number plate?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "30 meters (98 feet)",
          "bn": "30 meters (98 feet)"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "15 meters (49 feet)",
          "bn": "15 meters (49 feet)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "10 meters (33 feet)",
          "bn": "10 meters (33 feet)"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "20.5 meters (67 feet)",
          "bn": "20.5 meters (67 feet)"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q137",
    "categoryId": "c11",
    "text": {
      "en": "You MUST obey signs giving orders. These signs are mostly in:",
      "bn": "You MUST obey signs giving orders. These signs are mostly in:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Red triangles",
          "bn": "Red triangles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Green rectangles",
          "bn": "Green rectangles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Blue rectangles",
          "bn": "Blue rectangles"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Red circles",
          "bn": "Red circles"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q138",
    "categoryId": "c10",
    "text": {
      "en": "You are parking your car. You have some valuables, which you are unable to take with you. What should you do?",
      "bn": "You are parking your car. You have some valuables, which you are unable to take with you. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Lock then out of sight",
          "bn": "Lock then out of sight"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Park in an unlit side road",
          "bn": "Park in an unlit side road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Put them under the driver's seat",
          "bn": "Put them under the driver's seat"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Park near a police station",
          "bn": "Park near a police station"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q139",
    "categoryId": "c10",
    "text": {
      "en": "'Red Routes' in major cities have been introduced to",
      "bn": "'Red Routes' in major cities have been introduced to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Help the traffic flow",
          "bn": "Help the traffic flow"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Allow lorries to load more freely",
          "bn": "Allow lorries to load more freely"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Provide better parking",
          "bn": "Provide better parking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Raise the speed limits",
          "bn": "Raise the speed limits"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q140",
    "categoryId": "c4",
    "text": {
      "en": "In freezing conditions you should expect stopping distances to increase by up to",
      "bn": "In freezing conditions you should expect stopping distances to increase by up to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Four (4) times",
          "bn": "Four (4) times"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Ten (10) times",
          "bn": "Ten (10) times"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Five (5) times",
          "bn": "Five (5) times"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Seven (7) times",
          "bn": "Seven (7) times"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q141",
    "categoryId": "c10",
    "text": {
      "en": "You should avoid 'coasting' your car because it could:",
      "bn": "You should avoid 'coasting' your car because it could:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Damage the suspension",
          "bn": "Damage the suspension"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Flatten the battery",
          "bn": "Flatten the battery"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Increase tyre wear",
          "bn": "Increase tyre wear"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Reduce steering control",
          "bn": "Reduce steering control"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q142",
    "categoryId": "c11",
    "text": {
      "en": "Front fog lights may be used ONLY if:",
      "bn": "Front fog lights may be used ONLY if:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "They are fitted above the bumper",
          "bn": "They are fitted above the bumper"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "An audible warning device is used",
          "bn": "An audible warning device is used"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They are not as bright as the headlights",
          "bn": "They are not as bright as the headlights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Visibility is seriously reduced",
          "bn": "Visibility is seriously reduced"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q143",
    "categoryId": "c3",
    "text": {
      "en": "It is essential that tyre pressures be checked regularly. When should this be done?",
      "bn": "It is essential that tyre pressures be checked regularly. When should this be done?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When the tyres are hot",
          "bn": "When the tyres are hot"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "After filling the vehicle with fuel",
          "bn": "After filling the vehicle with fuel"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "After a long journey",
          "bn": "After a long journey"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When the tyres are cold",
          "bn": "When the tyres are cold"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q144",
    "categoryId": "c11",
    "text": {
      "en": "You are approaching a small roundabout. The long vehicle in front is signaling left but is positioned over to the right. You should:",
      "bn": "You are approaching a small roundabout. The long vehicle in front is signaling left but is positioned over to the right. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep well back",
          "bn": "Keep well back"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Overtake on the left",
          "bn": "Overtake on the left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Follow the same course as the lorry",
          "bn": "Follow the same course as the lorry"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa72ba346b96.png"
  },
  {
    "id": "q145",
    "categoryId": "c1",
    "text": {
      "en": "You take some cough medicine given to you by a friend. What should you do before driving?",
      "bn": "You take some cough medicine given to you by a friend. What should you do before driving?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Check the label to see if the medicine will affect your driving",
          "bn": "Check the label to see if the medicine will affect your driving"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Drink some strong coffee one hour before driving",
          "bn": "Drink some strong coffee one hour before driving"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Ask your friend if taking the medicine affected their driving",
          "bn": "Ask your friend if taking the medicine affected their driving"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drive a short distance to see if the medicine is affecting your driving",
          "bn": "Drive a short distance to see if the medicine is affecting your driving"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q146",
    "categoryId": "c6",
    "text": {
      "en": "You are approaching two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?",
      "bn": "You are approaching two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Any direction",
          "bn": "Any direction"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Right",
          "bn": "Right"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Left",
          "bn": "Left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Straight ahead",
          "bn": "Straight ahead"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q147",
    "categoryId": "c11",
    "text": {
      "en": "Front fog lights may be used ONLY if :",
      "bn": "Front fog lights may be used ONLY if :"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "You wish to overtake in bad weather",
          "bn": "You wish to overtake in bad weather"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Visibility is seriously reduced",
          "bn": "Visibility is seriously reduced"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They prevent headlights glare on a wet road",
          "bn": "They prevent headlights glare on a wet road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Fitted by manufacturer",
          "bn": "Fitted by manufacturer"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q148",
    "categoryId": "c10",
    "text": {
      "en": "As a driver, how can you help the environment?",
      "bn": "As a driver, how can you help the environment?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "By reducing your speed",
          "bn": "By reducing your speed"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "By using leaded fuel",
          "bn": "By using leaded fuel"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "By driving faster",
          "bn": "By driving faster"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "By driving with your windows down",
          "bn": "By driving with your windows down"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q149",
    "categoryId": "c3",
    "text": {
      "en": "Excessive or uneven wear in one or more tyres can be caused by faults in the:",
      "bn": "Excessive or uneven wear in one or more tyres can be caused by faults in the:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Steering Wheel",
          "bn": "Steering Wheel"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Exhaust system",
          "bn": "Exhaust system"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Gearbox",
          "bn": "Gearbox"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Braking system",
          "bn": "Braking system"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q150",
    "categoryId": "c10",
    "text": {
      "en": "You will help your environment if you:",
      "bn": "You will help your environment if you:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive continually using full choke",
          "bn": "Drive continually using full choke"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Walk or cycle when you can",
          "bn": "Walk or cycle when you can"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Accelerate and brake sharply",
          "bn": "Accelerate and brake sharply"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Reduce the tyre pressure",
          "bn": "Reduce the tyre pressure"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q151",
    "categoryId": "c10",
    "text": {
      "en": "When driving through a tunnel you should",
      "bn": "When driving through a tunnel you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Look out for variable message signs",
          "bn": "Look out for variable message signs"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Always use your windscreen wipers",
          "bn": "Always use your windscreen wipers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Use your air conditioning system",
          "bn": "Use your air conditioning system"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Switch on your rear fog lights",
          "bn": "Switch on your rear fog lights"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q152",
    "categoryId": "c10",
    "text": {
      "en": "You may drive over a footpath:",
      "bn": "You may drive over a footpath:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "If no pedestrians are near",
          "bn": "If no pedestrians are near"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To gain lawful access into a property",
          "bn": "To gain lawful access into a property"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When the pavement is very wide",
          "bn": "When the pavement is very wide"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To overtake slow-moving traffic",
          "bn": "To overtake slow-moving traffic"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q153",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this traffic sign?",
      "bn": "What is the meaning of this traffic sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Bus lane ahead",
          "bn": "Bus lane ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "End of two-way road",
          "bn": "End of two-way road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Give priority to vehicles coming towards you",
          "bn": "Give priority to vehicles coming towards you"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "You have priority over vehicles coming towards you",
          "bn": "You have priority over vehicles coming towards you"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa72e2144913.jpg"
  },
  {
    "id": "q154",
    "categoryId": "c10",
    "text": {
      "en": "You must not reverse:",
      "bn": "You must not reverse:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "In a built-up area",
          "bn": "In a built-up area"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Into a side road",
          "bn": "Into a side road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "For longer than necessary",
          "bn": "For longer than necessary"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "For more than a car’s length",
          "bn": "For more than a car’s length"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q155",
    "categoryId": "c11",
    "text": {
      "en": "You are approaching traffic lights. Red and amber are showing. This means:",
      "bn": "You are approaching traffic lights. Red and amber are showing. This means:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Pass the lights if the road is clear",
          "bn": "Pass the lights if the road is clear"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "There is a fault with the lights – take care",
          "bn": "There is a fault with the lights – take care"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The lights are about are about to change to red",
          "bn": "The lights are about are about to change to red"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Wait for the green light before you pass the lights",
          "bn": "Wait for the green light before you pass the lights"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa72f9adcc89.jpg"
  },
  {
    "id": "q156",
    "categoryId": "c4",
    "text": {
      "en": "Braking hard at a high speed on a sharp bend can make your vehicle",
      "bn": "Braking hard at a high speed on a sharp bend can make your vehicle"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "More stable",
          "bn": "More stable"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stall",
          "bn": "Stall"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Corner safely",
          "bn": "Corner safely"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Unstable",
          "bn": "Unstable"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q157",
    "categoryId": "c2",
    "text": {
      "en": "You must NOT sound your horn",
      "bn": "You must NOT sound your horn"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Between 10 pm and 6 am in a built-up area",
          "bn": "Between 10 pm and 6 am in a built-up area"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Between 11.30 pm and 7 am in a built-up area",
          "bn": "Between 11.30 pm and 7 am in a built-up area"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Between 11.30 pm and 6 am on any road",
          "bn": "Between 11.30 pm and 6 am on any road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "At any time in a built-up area",
          "bn": "At any time in a built-up area"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q158",
    "categoryId": "c8",
    "text": {
      "en": "You are following a large lorry on a wet road. Spray makes it difficult to see. You should:",
      "bn": "You are following a large lorry on a wet road. Spray makes it difficult to see. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drop back until you can see better",
          "bn": "Drop back until you can see better"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Speed up and overtake quickly",
          "bn": "Speed up and overtake quickly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Put your headlights on full beam",
          "bn": "Put your headlights on full beam"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Keep close to the lorry, away from the spray",
          "bn": "Keep close to the lorry, away from the spray"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7322d123ea.jpg"
  },
  {
    "id": "q159",
    "categoryId": "c11",
    "text": {
      "en": "What does the sign mean?",
      "bn": "What does the sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No pedestrians allowed",
          "bn": "No pedestrians allowed"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pedestrian crossing ahead",
          "bn": "Pedestrian crossing ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "School crossing patrol",
          "bn": "School crossing patrol"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Pedestrian zone – no vehicles",
          "bn": "Pedestrian zone – no vehicles"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7b8d6ce565.jpg"
  },
  {
    "id": "q160",
    "categoryId": "c6",
    "text": {
      "en": "There has been a collision. A motorcyclist is lying injured and unconscious. Unless it's essentially why should you usually NOT attempt to remove their helmet?",
      "bn": "There has been a collision. A motorcyclist is lying injured and unconscious. Unless it's essentially why should you usually NOT attempt to remove their helmet?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "This could result in more serious injury",
          "bn": "This could result in more serious injury"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Because you could scratch the helmet",
          "bn": "Because you could scratch the helmet"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They will get too cold if you do this",
          "bn": "They will get too cold if you do this"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Because they may not want you to",
          "bn": "Because they may not want you to"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q161",
    "categoryId": "c2",
    "text": {
      "en": "A driver does something that upsets you. You should",
      "bn": "A driver does something that upsets you. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Let them know how you feel",
          "bn": "Let them know how you feel"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Try not to react",
          "bn": "Try not to react"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Flash your headlights several times",
          "bn": "Flash your headlights several times"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q162",
    "categoryId": "c4",
    "text": {
      "en": "Your overall stopping distance will be longer when driving:",
      "bn": "Your overall stopping distance will be longer when driving:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "In fog",
          "bn": "In fog"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "At night",
          "bn": "At night"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "In strong winds",
          "bn": "In strong winds"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "In the rain",
          "bn": "In the rain"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q163",
    "categoryId": "c10",
    "text": {
      "en": "You are driving past parked cars. You notice a bicycle wheel sticking out between them. What should you do?",
      "bn": "You are driving past parked cars. You notice a bicycle wheel sticking out between them. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slow down and be prepared to stop for a cyclist",
          "bn": "Slow down and be prepared to stop for a cyclist"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Brake sharply and flash your headlights",
          "bn": "Brake sharply and flash your headlights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Slow down and wave the cyclist across",
          "bn": "Slow down and wave the cyclist across"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Accelerate past quickly and sound your horn",
          "bn": "Accelerate past quickly and sound your horn"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q164",
    "categoryId": "c10",
    "text": {
      "en": "Which of the following cars will use blue flashing beacons?",
      "bn": "Which of the following cars will use blue flashing beacons?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Doctor on call",
          "bn": "Doctor on call"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Motorway maintenance",
          "bn": "Motorway maintenance"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Police patrol",
          "bn": "Police patrol"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Breakdown recovery",
          "bn": "Breakdown recovery"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q165",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Approaching traffic passes you on both sides",
          "bn": "Approaching traffic passes you on both sides"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pass either side to get to the same destination",
          "bn": "Pass either side to get to the same destination"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Turn off at the next available junction",
          "bn": "Turn off at the next available junction"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Give way to oncoming vehicles",
          "bn": "Give way to oncoming vehicles"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "The Highway Code - Traffic Signs Signs with blue circles but no red border mostly give positive instruction. Blue circles will usually give compulsory instructions such as: vehicles may pass either side to reach the same destination, mini-roundabout (give way to traffic from the immediate right) or proceed in the direction indicated by the arrow: ",
      "bn": "The Highway Code - Traffic Signs Signs with blue circles but no red border mostly give positive instruction. Blue circles will usually give compulsory instructions such as: vehicles may pass either side to reach the same destination, mini-roundabout (give way to traffic from the immediate right) or proceed in the direction indicated by the arrow: "
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7babbed5ff.jpg"
  },
  {
    "id": "q166",
    "categoryId": "c10",
    "text": {
      "en": "As a driver what do you understand by the term 'Blind Spot'?",
      "bn": "As a driver what do you understand by the term 'Blind Spot'?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "An area covered by your right hand mirror",
          "bn": "An area covered by your right hand mirror"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "An area not seen in your mirrors",
          "bn": "An area not seen in your mirrors"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "An area covered by your left hand mirror",
          "bn": "An area covered by your left hand mirror"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "An area not covered by your headlights",
          "bn": "An area not covered by your headlights"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q167",
    "categoryId": "c10",
    "text": {
      "en": "After a breakdown you need to rejoin the main carriageway of a multilane- carriageway from the hard shoulder. You should:",
      "bn": "After a breakdown you need to rejoin the main carriageway of a multilane- carriageway from the hard shoulder. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Move out onto the carriageway then build up your speed",
          "bn": "Move out onto the carriageway then build up your speed"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Wait on the hard shoulder until someone flashes their headlights at you",
          "bn": "Wait on the hard shoulder until someone flashes their headlights at you"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Gain speed on the harder shoulder before moving out onto the carriageway",
          "bn": "Gain speed on the harder shoulder before moving out onto the carriageway"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Move out onto the carriageway using your hazard lights",
          "bn": "Move out onto the carriageway using your hazard lights"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q168",
    "categoryId": "c8",
    "text": {
      "en": "Why should you always reduce your speed when driving in fog?",
      "bn": "Why should you always reduce your speed when driving in fog?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Because it is more difficult to see events ahead",
          "bn": "Because it is more difficult to see events ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Because the brakes do not work as well",
          "bn": "Because the brakes do not work as well"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Because the engine`s colder",
          "bn": "Because the engine`s colder"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Because you could be dazzled by other people`s fog lights",
          "bn": "Because you could be dazzled by other people`s fog lights"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q169",
    "categoryId": "c7",
    "text": {
      "en": "You lose your way on a busy road. What is the best action to take?",
      "bn": "You lose your way on a busy road. What is the best action to take?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Check a map, and keep going with the traffic flow",
          "bn": "Check a map, and keep going with the traffic flow"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Shout to other drivers to ask them the way",
          "bn": "Shout to other drivers to ask them the way"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stop at traffic lights and ask pedestrians",
          "bn": "Stop at traffic lights and ask pedestrians"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Turn into a side road, stop and check a map",
          "bn": "Turn into a side road, stop and check a map"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q170",
    "categoryId": "c10",
    "text": {
      "en": "To supervise a learner driver you must:",
      "bn": "To supervise a learner driver you must:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Be at least 23",
          "bn": "Be at least 23"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Be an approved driving instructor",
          "bn": "Be an approved driving instructor"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Hold an advanced driving certificate",
          "bn": "Hold an advanced driving certificate"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Have held a full licence for at least 5 years",
          "bn": "Have held a full licence for at least 5 years"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q171",
    "categoryId": "c10",
    "text": {
      "en": "Why should you be parked before using a mobile phone?",
      "bn": "Why should you be parked before using a mobile phone?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Because reception is better when stopped",
          "bn": "Because reception is better when stopped"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Because the car electrics will be affected",
          "bn": "Because the car electrics will be affected"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "So control of your vehicle is not affected",
          "bn": "So control of your vehicle is not affected"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "So a proper conversation can be held",
          "bn": "So a proper conversation can be held"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q172",
    "categoryId": "c4",
    "text": {
      "en": "You are about to go down a steep hill. To control the speed of your car you should:",
      "bn": "You are about to go down a steep hill. To control the speed of your car you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Select a low gear and use the brakes carefully",
          "bn": "Select a low gear and use the brakes carefully"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Select a high gear and use the brakes carefully",
          "bn": "Select a high gear and use the brakes carefully"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Select a low gear and avoid using the brakes",
          "bn": "Select a low gear and avoid using the brakes"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Select a high gear and use the brakes firmly",
          "bn": "Select a high gear and use the brakes firmly"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q173",
    "categoryId": "c11",
    "text": {
      "en": "You should ONLY flash your headlights to other road users",
      "bn": "You should ONLY flash your headlights to other road users"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To show that you are giving way",
          "bn": "To show that you are giving way"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To show that you are about to reverse",
          "bn": "To show that you are about to reverse"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To let them know that you are there",
          "bn": "To let them know that you are there"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To tell the that you have right of way",
          "bn": "To tell the that you have right of way"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q174",
    "categoryId": "c13",
    "text": {
      "en": "You arrive at the scene of a motorcycle accident. No other vehicle is involved. The rider is unconscious, lying in the middle of the road. The first thing you should do is:",
      "bn": "You arrive at the scene of a motorcycle accident. No other vehicle is involved. The rider is unconscious, lying in the middle of the road. The first thing you should do is:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Move the rider out of the road",
          "bn": "Move the rider out of the road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Warn other traffic",
          "bn": "Warn other traffic"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Clear the road of debris",
          "bn": "Clear the road of debris"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Give the rider reassurance",
          "bn": "Give the rider reassurance"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q175",
    "categoryId": "c12",
    "text": {
      "en": "An MOT certificate is normally valid for",
      "bn": "An MOT certificate is normally valid for"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "30,000 miles",
          "bn": "30,000 miles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "One year after the date it was issued",
          "bn": "One year after the date it was issued"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "10,000 miles",
          "bn": "10,000 miles"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Three years after the date it was issued",
          "bn": "Three years after the date it was issued"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q176",
    "categoryId": "c11",
    "text": {
      "en": "In what situation are other drivers allowed to flash their headlights at you?",
      "bn": "In what situation are other drivers allowed to flash their headlights at you?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To warn you danger is ahead",
          "bn": "To warn you danger is ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To tell you that they are giving way to you",
          "bn": "To tell you that they are giving way to you"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To warn you of their presence",
          "bn": "To warn you of their presence"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To warn you when you're breaking the speed limit",
          "bn": "To warn you when you're breaking the speed limit"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q177",
    "categoryId": "c10",
    "text": {
      "en": "New petrol-engined cars have to be fitted with catalytic converters. The reason for this is to",
      "bn": "New petrol-engined cars have to be fitted with catalytic converters. The reason for this is to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Reduce harmful exhaust emissions",
          "bn": "Reduce harmful exhaust emissions"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Allow the exhaust system to be recycled",
          "bn": "Allow the exhaust system to be recycled"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Control exhaust noise levels",
          "bn": "Control exhaust noise levels"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Prolong the life of the exhaust system",
          "bn": "Prolong the life of the exhaust system"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q178",
    "categoryId": "c11",
    "text": {
      "en": "When should you switch on your hazard warning lights?",
      "bn": "When should you switch on your hazard warning lights?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When you are towing a broken down vehicle",
          "bn": "When you are towing a broken down vehicle"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When you cannot avoid causing an obstruction",
          "bn": "When you cannot avoid causing an obstruction"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When you are parked on double yellow lines",
          "bn": "When you are parked on double yellow lines"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When you are driving slowly due to bad weather",
          "bn": "When you are driving slowly due to bad weather"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q179",
    "categoryId": "c11",
    "text": {
      "en": "You are following other vehicles in fog with your lights on. How else can you reduce the chances of being involved in an accident?",
      "bn": "You are following other vehicles in fog with your lights on. How else can you reduce the chances of being involved in an accident?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep close to the vehicle in front",
          "bn": "Keep close to the vehicle in front"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep together with the faster vehicles",
          "bn": "Keep together with the faster vehicles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reduce your speed and increase the gap",
          "bn": "Reduce your speed and increase the gap"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Use your main beam instead of dipped headlights",
          "bn": "Use your main beam instead of dipped headlights"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q180",
    "categoryId": "c10",
    "text": {
      "en": "You are in a line of traffic. The driver behind you is following very closely. What action should you take?",
      "bn": "You are in a line of traffic. The driver behind you is following very closely. What action should you take?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slow down, gradually increasing the gap between you and the vehicle in front",
          "bn": "Slow down, gradually increasing the gap between you and the vehicle in front"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Ignore the following driver and continue to travel within the speed limit",
          "bn": "Ignore the following driver and continue to travel within the speed limit"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Signal left and wave the following driver past",
          "bn": "Signal left and wave the following driver past"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Move over to a position just left of the centre line of the road",
          "bn": "Move over to a position just left of the centre line of the road"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q181",
    "categoryId": "c12",
    "text": {
      "en": "Before driving anyone else’s motor vehicle you should make sure that:",
      "bn": "Before driving anyone else’s motor vehicle you should make sure that:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Your own vehicle has insurance cover",
          "bn": "Your own vehicle has insurance cover"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The vehicle is insured for your use",
          "bn": "The vehicle is insured for your use"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The vehicle owner has third party insurance cover",
          "bn": "The vehicle owner has third party insurance cover"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The owner has left the insurance documents in the vehicle",
          "bn": "The owner has left the insurance documents in the vehicle"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q182",
    "categoryId": "c11",
    "text": {
      "en": "You are approaching a small roundabout. The long vehicle in front is signaling left but is positioned over to the right. You should:",
      "bn": "You are approaching a small roundabout. The long vehicle in front is signaling left but is positioned over to the right. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep well back",
          "bn": "Keep well back"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Overtake on the left",
          "bn": "Overtake on the left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Follow the same course as the lorry",
          "bn": "Follow the same course as the lorry"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7c8a611e1e.jpg"
  },
  {
    "id": "q183",
    "categoryId": "c10",
    "text": {
      "en": "When going straight ahead at a roundabout you should:",
      "bn": "When going straight ahead at a roundabout you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Indicate right when approaching the roundabout",
          "bn": "Indicate right when approaching the roundabout"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Indicate left before leaving the roundabout",
          "bn": "Indicate left before leaving the roundabout"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Indicate left when approaching the roundabout",
          "bn": "Indicate left when approaching the roundabout"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Not indicate at any time",
          "bn": "Not indicate at any time"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q184",
    "categoryId": "c11",
    "text": {
      "en": "Your indicators may be difficult to see in bright sunlight. What should you do?",
      "bn": "Your indicators may be difficult to see in bright sunlight. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Touch the brake several times to show the stop lamp(s)",
          "bn": "Touch the brake several times to show the stop lamp(s)"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Give an arm signal as well as using your indicator",
          "bn": "Give an arm signal as well as using your indicator"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Turn as quickly as you can",
          "bn": "Turn as quickly as you can"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q185",
    "categoryId": "c2",
    "text": {
      "en": "You must NOT sound your horn",
      "bn": "You must NOT sound your horn"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Between 11.30 pm and 7 am in a built-up area",
          "bn": "Between 11.30 pm and 7 am in a built-up area"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Between 10 pm and 6 am in a built-up area",
          "bn": "Between 10 pm and 6 am in a built-up area"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "At any time in a built-up area",
          "bn": "At any time in a built-up area"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Between 11.30 pm and 6 am on any road",
          "bn": "Between 11.30 pm and 6 am on any road"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q186",
    "categoryId": "c10",
    "text": {
      "en": "You must not reverse",
      "bn": "You must not reverse"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "For more than a car's length",
          "bn": "For more than a car's length"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "In built-up areas",
          "bn": "In built-up areas"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "For longer than necessary",
          "bn": "For longer than necessary"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Into a side road",
          "bn": "Into a side road"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q187",
    "categoryId": "c10",
    "text": {
      "en": "Why are place names printed on the road surface?",
      "bn": "Why are place names printed on the road surface?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To enable you to change lanes early",
          "bn": "To enable you to change lanes early"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To prevent you changing lanes",
          "bn": "To prevent you changing lanes"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To warn you of oncoming traffic",
          "bn": "To warn you of oncoming traffic"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To restrict the flow of traffic",
          "bn": "To restrict the flow of traffic"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q188",
    "categoryId": "c9",
    "text": {
      "en": "Whilst driving on the motorway you have to slow down quickly due to a hazard. What should you do?",
      "bn": "Whilst driving on the motorway you have to slow down quickly due to a hazard. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Switch on the headlights to full beam",
          "bn": "Switch on the headlights to full beam"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Switch on your fog light",
          "bn": "Switch on your fog light"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Switch on your hazard lights",
          "bn": "Switch on your hazard lights"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q189",
    "categoryId": "c10",
    "text": {
      "en": "Which of the following statements relates to Tailgating",
      "bn": "Which of the following statements relates to Tailgating"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Park too close to the tail lift platform of a truck.",
          "bn": "Park too close to the tail lift platform of a truck."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Driving so close and in such a way that you bully and intimidate the vehicle in front to force it to speed up or get out of your way",
          "bn": "Driving so close and in such a way that you bully and intimidate the vehicle in front to force it to speed up or get out of your way"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Driving too close to the vehicle in front creating a hazardous situation in that if it had to stop suddenly, you will be unable to avoid a collision.",
          "bn": "Driving too close to the vehicle in front creating a hazardous situation in that if it had to stop suddenly, you will be unable to avoid a collision."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Swerving from lane to lane and getting as close to the vehicle in front so you get to your destination faster.",
          "bn": "Swerving from lane to lane and getting as close to the vehicle in front so you get to your destination faster."
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q190",
    "categoryId": "c8",
    "text": {
      "en": "After driving out of fog and when visibility has returned to normal, you must",
      "bn": "After driving out of fog and when visibility has returned to normal, you must"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Use your headlights on dipped beam",
          "bn": "Use your headlights on dipped beam"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Switch off your fog lights",
          "bn": "Switch off your fog lights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Use your windscreen wipers",
          "bn": "Use your windscreen wipers"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Keep your rear fog light on",
          "bn": "Keep your rear fog light on"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q191",
    "categoryId": "c6",
    "text": {
      "en": "You are driving towards a pedestrian(zebra) crossing. Waiting to cross is a person in a wheelchair. You should:",
      "bn": "You are driving towards a pedestrian(zebra) crossing. Waiting to cross is a person in a wheelchair. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Wave to the person to wait",
          "bn": "Wave to the person to wait"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Wave to the person to cross",
          "bn": "Wave to the person to cross"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Be prepared to stop",
          "bn": "Be prepared to stop"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Continue on your way",
          "bn": "Continue on your way"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q192",
    "categoryId": "c5",
    "text": {
      "en": "Why could keeping the clutch down or selecting neutral for long periods of time be dangerous?",
      "bn": "Why could keeping the clutch down or selecting neutral for long periods of time be dangerous?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "You will have less steering and braking control",
          "bn": "You will have less steering and braking control"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Fuel spillage will occur",
          "bn": "Fuel spillage will occur"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Engine damage may be caused",
          "bn": "Engine damage may be caused"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "It will wear tyres out more quickly",
          "bn": "It will wear tyres out more quickly"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q193",
    "categoryId": "c1",
    "text": {
      "en": "A driver has had a few alcoholic drinks, what advice should you give them?",
      "bn": "A driver has had a few alcoholic drinks, what advice should you give them?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Take a short sleep before driving home",
          "bn": "Take a short sleep before driving home"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Drink several cups of coffee before driving home",
          "bn": "Drink several cups of coffee before driving home"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Take extra care when driving home",
          "bn": "Take extra care when driving home"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Do not drive home",
          "bn": "Do not drive home"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q194",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Turn left for ferry terminal",
          "bn": "Turn left for ferry terminal"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "No through road on the left",
          "bn": "No through road on the left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No entry for traffic turning left",
          "bn": "No entry for traffic turning left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Turn left for parking area",
          "bn": "Turn left for parking area"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7cbd633165.jpg"
  },
  {
    "id": "q195",
    "categoryId": "c3",
    "text": {
      "en": "Your car is fitted with power assisted steering. This will make the steering seem",
      "bn": "Your car is fitted with power assisted steering. This will make the steering seem"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Heavier",
          "bn": "Heavier"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Noisier",
          "bn": "Noisier"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Quieter",
          "bn": "Quieter"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Lighter",
          "bn": "Lighter"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q196",
    "categoryId": "c10",
    "text": {
      "en": "Catalytic converters are fitted to make the",
      "bn": "Catalytic converters are fitted to make the"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Engines produce more power",
          "bn": "Engines produce more power"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Exhaust fumes cleaner",
          "bn": "Exhaust fumes cleaner"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Engines run quietly",
          "bn": "Engines run quietly"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Exhaust systems easier to replace",
          "bn": "Exhaust systems easier to replace"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q197",
    "categoryId": "c10",
    "text": {
      "en": "'Tailgating' usually means",
      "bn": "'Tailgating' usually means"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Driving with rear fog lights on",
          "bn": "Driving with rear fog lights on"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Following another vehicle too closely",
          "bn": "Following another vehicle too closely"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reversing into a parking space",
          "bn": "Reversing into a parking space"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Using the rear door of a hatchback car",
          "bn": "Using the rear door of a hatchback car"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q198",
    "categoryId": "c10",
    "text": {
      "en": "Which of these vehicles is LEAST likely to be affected by strong crosswinds?",
      "bn": "Which of these vehicles is LEAST likely to be affected by strong crosswinds?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Motorcyclists",
          "bn": "Motorcyclists"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "High-sided vehicles",
          "bn": "High-sided vehicles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Cars",
          "bn": "Cars"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Cyclists",
          "bn": "Cyclists"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q199",
    "categoryId": "c10",
    "text": {
      "en": "A toucan crossing is different from other crossings because",
      "bn": "A toucan crossing is different from other crossings because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Cyclists can use it",
          "bn": "Cyclists can use it"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "A traffic warden controls it",
          "bn": "A traffic warden controls it"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Two flashing lights control it",
          "bn": "Two flashing lights control it"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Moped riders can use it",
          "bn": "Moped riders can use it"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q200",
    "categoryId": "c9",
    "text": {
      "en": "What is the national speed limit, unless otherwise indicated, on dual carriageways for cars and motorcycles?",
      "bn": "What is the national speed limit, unless otherwise indicated, on dual carriageways for cars and motorcycles?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "50 mph",
          "bn": "50 mph"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "70 mph",
          "bn": "70 mph"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "80 mph",
          "bn": "80 mph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "100 mph",
          "bn": "100 mph"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q201",
    "categoryId": "c3",
    "text": {
      "en": "The main cause of brake pedal fade is:",
      "bn": "The main cause of brake pedal fade is:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The brakes out of adjustment",
          "bn": "The brakes out of adjustment"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The brakes overheating",
          "bn": "The brakes overheating"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Oil in the brakes",
          "bn": "Oil in the brakes"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Air in brake fluid",
          "bn": "Air in brake fluid"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q202",
    "categoryId": "c10",
    "text": {
      "en": "A strong cross wind is least likely to affect which of these vehicles?",
      "bn": "A strong cross wind is least likely to affect which of these vehicles?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "High-sided vehicles",
          "bn": "High-sided vehicles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Motorcycles",
          "bn": "Motorcycles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Cyclists",
          "bn": "Cyclists"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Cars",
          "bn": "Cars"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q203",
    "categoryId": "c8",
    "text": {
      "en": "You are following a vehicle on a wet and slippery road. You should leave a time gap of at least",
      "bn": "You are following a vehicle on a wet and slippery road. You should leave a time gap of at least"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Two (2) seconds",
          "bn": "Two (2) seconds"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Three (3) seconds",
          "bn": "Three (3) seconds"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Four (4) seconds",
          "bn": "Four (4) seconds"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "One (1) second",
          "bn": "One (1) second"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q204",
    "categoryId": "c6",
    "text": {
      "en": "If you see a pedestrian carrying a white stick, this shows that the person is: This shows that the person is:",
      "bn": "If you see a pedestrian carrying a white stick, this shows that the person is: This shows that the person is:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Elderly",
          "bn": "Elderly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Deaf",
          "bn": "Deaf"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Disabled",
          "bn": "Disabled"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Blind",
          "bn": "Blind"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q205",
    "categoryId": "c10",
    "text": {
      "en": "When driving through a tunnel you should",
      "bn": "When driving through a tunnel you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Look out for variable message signs",
          "bn": "Look out for variable message signs"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Use your air conditioning system",
          "bn": "Use your air conditioning system"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Always use your windscreen wipers",
          "bn": "Always use your windscreen wipers"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Switch on your rear fog lights",
          "bn": "Switch on your rear fog lights"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q206",
    "categoryId": "c10",
    "text": {
      "en": "When driving through a Ford or flood water, what gear should you use?",
      "bn": "When driving through a Ford or flood water, what gear should you use?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Reverse",
          "bn": "Reverse"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "First or second",
          "bn": "First or second"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Fifth",
          "bn": "Fifth"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Third",
          "bn": "Third"
        }
      },
      {
        "id": "e",
        "text": {
          "en": "Fourth",
          "bn": "Fourth"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q207",
    "categoryId": "c9",
    "text": {
      "en": "What is the national speed limit for cars and motorcycles when travelling in the right-hand lane of a motorway?",
      "bn": "What is the national speed limit for cars and motorcycles when travelling in the right-hand lane of a motorway?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "70 mph",
          "bn": "70 mph"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "50 mph",
          "bn": "50 mph"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "80 mph",
          "bn": "80 mph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "60 mph",
          "bn": "60 mph"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q208",
    "categoryId": "c10",
    "text": {
      "en": "If you are at a junction with limited visibility, you should:",
      "bn": "If you are at a junction with limited visibility, you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Creep forward, looking to the left",
          "bn": "Creep forward, looking to the left"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Be ready to move off quickly",
          "bn": "Be ready to move off quickly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Creep forward, looking to the right",
          "bn": "Creep forward, looking to the right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Creep forward, looking both ways",
          "bn": "Creep forward, looking both ways"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q209",
    "categoryId": "c10",
    "text": {
      "en": "You are driving past parked cars. You notice a wheel of a bicycle sticking out between them. What should you do?",
      "bn": "You are driving past parked cars. You notice a wheel of a bicycle sticking out between them. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slow down and be prepared to stop for a cyclist",
          "bn": "Slow down and be prepared to stop for a cyclist"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Accelerate past quickly and sound your horn",
          "bn": "Accelerate past quickly and sound your horn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Slow down and wave the cyclist across",
          "bn": "Slow down and wave the cyclist across"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Brake sharply and flash your headlights",
          "bn": "Brake sharply and flash your headlights"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q210",
    "categoryId": "c8",
    "text": {
      "en": "Whilst driving, the fog clears and you can see more clearly. You must remember to",
      "bn": "Whilst driving, the fog clears and you can see more clearly. You must remember to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Switch off the demister",
          "bn": "Switch off the demister"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Close any open windows",
          "bn": "Close any open windows"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Switch off the fog lights",
          "bn": "Switch off the fog lights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Reduce your speed",
          "bn": "Reduce your speed"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q211",
    "categoryId": "c11",
    "text": {
      "en": "Super trams or Light Rapid Transit (LRT) systems are environmentally friendly because",
      "bn": "Super trams or Light Rapid Transit (LRT) systems are environmentally friendly because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "They use diesel power",
          "bn": "They use diesel power"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "They use electric power",
          "bn": "They use electric power"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They do not operate during rush hour",
          "bn": "They do not operate during rush hour"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "They use quieter roads",
          "bn": "They use quieter roads"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q212",
    "categoryId": "c11",
    "text": {
      "en": "When should you give signals?",
      "bn": "When should you give signals?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To give you priority over other traffic when changing lanes or before pulling out.",
          "bn": "To give you priority over other traffic when changing lanes or before pulling out."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "In traffic only during the hours of darkness or in bad weather.",
          "bn": "In traffic only during the hours of darkness or in bad weather."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "At all times in order to alert other road users of your intended actions.",
          "bn": "At all times in order to alert other road users of your intended actions."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Only when joining a dual carriageway from a slip road so you don't have to give way",
          "bn": "Only when joining a dual carriageway from a slip road so you don't have to give way"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "It is important to let other road users to know your intension. ",
      "bn": "It is important to let other road users to know your intension. "
    }
  },
  {
    "id": "q213",
    "categoryId": "c11",
    "text": {
      "en": "What shape is a STOP sign?",
      "bn": "What shape is a STOP sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Octagonal",
          "bn": "Octagonal"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Square",
          "bn": "Square"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Circular",
          "bn": "Circular"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Triangular",
          "bn": "Triangular"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q214",
    "categoryId": "c10",
    "text": {
      "en": "You are invited to a pub lunch. You know that you will have to drive in the evening. What is your best course of action?",
      "bn": "You are invited to a pub lunch. You know that you will have to drive in the evening. What is your best course of action?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Eat a hot meal with your alcohol drinks",
          "bn": "Eat a hot meal with your alcohol drinks"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Have some milk before drinking alcohol",
          "bn": "Have some milk before drinking alcohol"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Avoid mixing your alcoholic drinks",
          "bn": "Avoid mixing your alcoholic drinks"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Not drink any alcohol at all",
          "bn": "Not drink any alcohol at all"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q215",
    "categoryId": "c10",
    "text": {
      "en": "You are driving at night on an dark, unlit road following a slower moving vehicle. You should:",
      "bn": "You are driving at night on an dark, unlit road following a slower moving vehicle. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Flash your headlights",
          "bn": "Flash your headlights"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Use dipped beam headlights",
          "bn": "Use dipped beam headlights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Use full beam headlights",
          "bn": "Use full beam headlights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Switch off you headlights",
          "bn": "Switch off you headlights"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q216",
    "categoryId": "c14",
    "text": {
      "en": "When a roof rack is not in use it should be removed. Why?",
      "bn": "When a roof rack is not in use it should be removed. Why?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "It is illegal",
          "bn": "It is illegal"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "It will waste fuel",
          "bn": "It will waste fuel"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "It will affect your braking",
          "bn": "It will affect your braking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "It will affect the suspension",
          "bn": "It will affect the suspension"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q217",
    "categoryId": "c11",
    "text": {
      "en": "At a puffin crossing, which colour follows the green signal?",
      "bn": "At a puffin crossing, which colour follows the green signal?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Flashing green",
          "bn": "Flashing green"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Flashing amber",
          "bn": "Flashing amber"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Steady red",
          "bn": "Steady red"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Steady amber",
          "bn": "Steady amber"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q218",
    "categoryId": "c10",
    "text": {
      "en": "You are driving a slow moving car on a narrow winding road. You should",
      "bn": "You are driving a slow moving car on a narrow winding road. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Pull in safely when you can, to let following vehicles overtake",
          "bn": "Pull in safely when you can, to let following vehicles overtake"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Wave following vehicles past you if you think they can overtake quickly",
          "bn": "Wave following vehicles past you if you think they can overtake quickly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep well out to stop vehicles overtaking dangerously",
          "bn": "Keep well out to stop vehicles overtaking dangerously"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Give a left signal when it is safe for vehicles to overtake you",
          "bn": "Give a left signal when it is safe for vehicles to overtake you"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q219",
    "categoryId": "c10",
    "text": {
      "en": "Who has priority at an unmarked crossroads?",
      "bn": "Who has priority at an unmarked crossroads?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The driver who is going faster",
          "bn": "The driver who is going faster"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The driver on the wider road",
          "bn": "The driver on the wider road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No one",
          "bn": "No one"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The driver of the larger vehicle",
          "bn": "The driver of the larger vehicle"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7d372a25d4.jpg"
  },
  {
    "id": "q220",
    "categoryId": "c10",
    "text": {
      "en": "You are driving downhill. There is a car parked on the other side of the road partly blocking the road. Large, slow lorries are coming towards you. You should:",
      "bn": "You are driving downhill. There is a car parked on the other side of the road partly blocking the road. Large, slow lorries are coming towards you. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Pull over on the right behind the parked car",
          "bn": "Pull over on the right behind the parked car"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Speed up and get past quickly",
          "bn": "Speed up and get past quickly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Slow down and give way",
          "bn": "Slow down and give way"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Keep going because you have the right of way",
          "bn": "Keep going because you have the right of way"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q221",
    "categoryId": "c11",
    "text": {
      "en": "You MUST obey signs giving orders. These signs are mostly in",
      "bn": "You MUST obey signs giving orders. These signs are mostly in"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Red circles",
          "bn": "Red circles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Blue rectangles",
          "bn": "Blue rectangles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Red Triangles",
          "bn": "Red Triangles"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Green rectangles",
          "bn": "Green rectangles"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q222",
    "categoryId": "c7",
    "text": {
      "en": "You keep well back while waiting to overtake a large lorry. Another car fills the gap. You should:",
      "bn": "You keep well back while waiting to overtake a large lorry. Another car fills the gap. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Flash your headlights",
          "bn": "Flash your headlights"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Start to overtake",
          "bn": "Start to overtake"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drop back further",
          "bn": "Drop back further"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q223",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No footpath ahead",
          "bn": "No footpath ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pedestrian crossing ahead",
          "bn": "Pedestrian crossing ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "School crossing ahead",
          "bn": "School crossing ahead"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Pedestrians only ahead",
          "bn": "Pedestrians only ahead"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7d43d0ffca.jpg"
  },
  {
    "id": "q224",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this sign?",
      "bn": "What is the meaning of this sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Trams only",
          "bn": "Trams only"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Level crossing without barrier or gate",
          "bn": "Level crossing without barrier or gate"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Level crossing with barrier or gate",
          "bn": "Level crossing with barrier or gate"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Trams crossing ahead",
          "bn": "Trams crossing ahead"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7d5a566811.jpg"
  },
  {
    "id": "q225",
    "categoryId": "c6",
    "text": {
      "en": "Where should you take particular care to look out for motorcyclists and cyclists?",
      "bn": "Where should you take particular care to look out for motorcyclists and cyclists?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "At junctions",
          "bn": "At junctions"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "On one-way streets",
          "bn": "On one-way streets"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "At zebra crossings",
          "bn": "At zebra crossings"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "On dual carriageways",
          "bn": "On dual carriageways"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q226",
    "categoryId": "c13",
    "text": {
      "en": "Whilst driving you have an accident in which someone is injured. You must report this to the police within",
      "bn": "Whilst driving you have an accident in which someone is injured. You must report this to the police within"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "7 days",
          "bn": "7 days"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "36 hours",
          "bn": "36 hours"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "12 hours",
          "bn": "12 hours"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "24 hours",
          "bn": "24 hours"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q227",
    "categoryId": "c7",
    "text": {
      "en": "When you approach a bus that is about to move off from a bus stop you should:",
      "bn": "When you approach a bus that is about to move off from a bus stop you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Allow it to pull away, if it is safe to do so",
          "bn": "Allow it to pull away, if it is safe to do so"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Get past before it moves",
          "bn": "Get past before it moves"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Flash your headlights as you approach",
          "bn": "Flash your headlights as you approach"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Signal left and wave the bus on",
          "bn": "Signal left and wave the bus on"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7d80e4b852.jpg"
  },
  {
    "id": "q228",
    "categoryId": "c1",
    "text": {
      "en": "If you are feeling tired it is best to stop as soon as you can. Until then you should:",
      "bn": "If you are feeling tired it is best to stop as soon as you can. Until then you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Gently tap the steering wheel",
          "bn": "Gently tap the steering wheel"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Increase your speed to find a stopping place quickly",
          "bn": "Increase your speed to find a stopping place quickly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep changing speed to improve concentration",
          "bn": "Keep changing speed to improve concentration"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Ensure a supply of fresh air",
          "bn": "Ensure a supply of fresh air"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "https://ukdrivingtheory.com/question_list.php ",
      "bn": "https://ukdrivingtheory.com/question_list.php "
    }
  },
  {
    "id": "q229",
    "categoryId": "c11",
    "text": {
      "en": "You are on a dual carriageway. Ahead you see a vehicle with an amber flashing light. What could this be?",
      "bn": "You are on a dual carriageway. Ahead you see a vehicle with an amber flashing light. What could this be?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "An ambulance",
          "bn": "An ambulance"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "A fire engine",
          "bn": "A fire engine"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "A disabled person`s vehicle",
          "bn": "A disabled person`s vehicle"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "A doctor on call",
          "bn": "A doctor on call"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q230",
    "categoryId": "c10",
    "text": {
      "en": "Where are you most likely to be affected by a side wind?",
      "bn": "Where are you most likely to be affected by a side wind?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "On a narrow country lane",
          "bn": "On a narrow country lane"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "On an open stretch of road",
          "bn": "On an open stretch of road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "On a long, straight road",
          "bn": "On a long, straight road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "On a busy stretch of road",
          "bn": "On a busy stretch of road"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q231",
    "categoryId": "c8",
    "text": {
      "en": "When travelling in very heavy rain your overall stopping distance is likely to be",
      "bn": "When travelling in very heavy rain your overall stopping distance is likely to be"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Quadrupled",
          "bn": "Quadrupled"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Doubled",
          "bn": "Doubled"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The same as normal",
          "bn": "The same as normal"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Trebled",
          "bn": "Trebled"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q232",
    "categoryId": "c10",
    "text": {
      "en": "A VRT certificate is normally valid for:",
      "bn": "A VRT certificate is normally valid for:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Two (2) years after the date it was issued",
          "bn": "Two (2) years after the date it was issued"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "10,000 miles",
          "bn": "10,000 miles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "One year after the date it was issued",
          "bn": "One year after the date it was issued"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "30,000 miles",
          "bn": "30,000 miles"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q233",
    "categoryId": "c6",
    "text": {
      "en": "A horse rider is in the left-hand lane approaching a roundabout. The driver behind should expect the rider to:",
      "bn": "A horse rider is in the left-hand lane approaching a roundabout. The driver behind should expect the rider to:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Go in any direction",
          "bn": "Go in any direction"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Go ahead",
          "bn": "Go ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Turn left",
          "bn": "Turn left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Turn right",
          "bn": "Turn right"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q234",
    "categoryId": "c11",
    "text": {
      "en": "When should you use front and rear fog lights?",
      "bn": "When should you use front and rear fog lights?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When visibility is considerably reduced because of fog.",
          "bn": "When visibility is considerably reduced because of fog."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When the road is unlit by street lamps or they are not working.",
          "bn": "When the road is unlit by street lamps or they are not working."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When it is raining and just in case the roads are slippery.",
          "bn": "When it is raining and just in case the roads are slippery."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "During any time of the day or night to make sure that other road users see me.",
          "bn": "During any time of the day or night to make sure that other road users see me."
        }
      },
      {
        "id": "e",
        "text": {
          "en": "When going through tunnels.",
          "bn": "When going through tunnels."
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q235",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Ring road",
          "bn": "Ring road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Mini-roundabout",
          "bn": "Mini-roundabout"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No vehicles",
          "bn": "No vehicles"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Roundabout",
          "bn": "Roundabout"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7dae124bda.jpg"
  },
  {
    "id": "q236",
    "categoryId": "c11",
    "text": {
      "en": "You are coming up to a roundabout and a cyclist is signaling to turn right. What should you do",
      "bn": "You are coming up to a roundabout and a cyclist is signaling to turn right. What should you do"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Give the cyclist plenty of room",
          "bn": "Give the cyclist plenty of room"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Give a horn warning",
          "bn": "Give a horn warning"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Signal the cyclist to move across",
          "bn": "Signal the cyclist to move across"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Overtake on the right",
          "bn": "Overtake on the right"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q237",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this sign?",
      "bn": "What is the meaning of this sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Traffic queues likely",
          "bn": "Traffic queues likely"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pedestrian crossing ahead",
          "bn": "Pedestrian crossing ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Light signals ahead at a level crossing",
          "bn": "Light signals ahead at a level crossing"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Accident black spot ahead",
          "bn": "Accident black spot ahead"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7dc19dde75.jpg"
  },
  {
    "id": "q238",
    "categoryId": "c10",
    "text": {
      "en": "To drive on the road learners MUST",
      "bn": "To drive on the road learners MUST"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Have taken professional instruction",
          "bn": "Have taken professional instruction"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Have no penalty points on their licence",
          "bn": "Have no penalty points on their licence"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Apply for a driving test within 12 months",
          "bn": "Apply for a driving test within 12 months"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Have a signed, valid provisional licence",
          "bn": "Have a signed, valid provisional licence"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q239",
    "categoryId": "c6",
    "text": {
      "en": "What do these zigzag lines at pedestrian crossings mean?",
      "bn": "What do these zigzag lines at pedestrian crossings mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No parking at any time",
          "bn": "No parking at any time"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Parking allowed only for a short time",
          "bn": "Parking allowed only for a short time"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sounding horns is not allowed",
          "bn": "Sounding horns is not allowed"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Slow down to 20kph",
          "bn": "Slow down to 20kph"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7dd5b8d901.jpg"
  },
  {
    "id": "q240",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this sign?",
      "bn": "What is the meaning of this sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Holiday route ahead",
          "bn": "Holiday route ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Low bridge ahead",
          "bn": "Low bridge ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Tunnel ahead",
          "bn": "Tunnel ahead"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Tourist route ahead",
          "bn": "Tourist route ahead"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7dec0633dc.jpg"
  },
  {
    "id": "q241",
    "categoryId": "c10",
    "text": {
      "en": "What does tailgating mean?",
      "bn": "What does tailgating mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Following another vehicle too closely",
          "bn": "Following another vehicle too closely"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Driving with rear fog lights on",
          "bn": "Driving with rear fog lights on"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reversing into a parking space",
          "bn": "Reversing into a parking space"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Using the rear door of a hatchback car",
          "bn": "Using the rear door of a hatchback car"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q242",
    "categoryId": "c10",
    "text": {
      "en": "You wish to make a right turn ahead. Why should you take up the correct position in good time?",
      "bn": "You wish to make a right turn ahead. Why should you take up the correct position in good time?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To allow other drivers to pull out in front of you",
          "bn": "To allow other drivers to pull out in front of you"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To help other road users know what you intend to do",
          "bn": "To help other road users know what you intend to do"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To give a better view into the road that you are joining",
          "bn": "To give a better view into the road that you are joining"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To allow other drivers to pass you on the right",
          "bn": "To allow other drivers to pass you on the right"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q243",
    "categoryId": "c6",
    "text": {
      "en": "Why would a pedestrian dress their dog in a yellow or burgundy coat; what are they warning you about?",
      "bn": "Why would a pedestrian dress their dog in a yellow or burgundy coat; what are they warning you about?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Elderly",
          "bn": "Elderly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Dog training",
          "bn": "Dog training"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Colour blind",
          "bn": "Colour blind"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Deaf",
          "bn": "Deaf"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q244",
    "categoryId": "c10",
    "text": {
      "en": "You should never reverse",
      "bn": "You should never reverse"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "For longer than necessary",
          "bn": "For longer than necessary"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "At night",
          "bn": "At night"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Into a side road",
          "bn": "Into a side road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "On a main road",
          "bn": "On a main road"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q245",
    "categoryId": "c11",
    "text": {
      "en": "You are driving on a clear night. There is a steady stream of oncoming cars. The national speed limit applies. Which lights should you use?",
      "bn": "You are driving on a clear night. There is a steady stream of oncoming cars. The national speed limit applies. Which lights should you use?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Dipped headlights",
          "bn": "Dipped headlights"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Full beam headlight",
          "bn": "Full beam headlight"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Fog lights",
          "bn": "Fog lights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sidelights",
          "bn": "Sidelights"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "Dip your headlights when meeting other vehicles and cyclists. high beam may dazzle the other drivers and cause danger ",
      "bn": "Dip your headlights when meeting other vehicles and cyclists. high beam may dazzle the other drivers and cause danger "
    }
  },
  {
    "id": "q246",
    "categoryId": "c10",
    "text": {
      "en": "How should you react to drivers who appear to be inexperienced?",
      "bn": "How should you react to drivers who appear to be inexperienced?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Flash your headlights to indicate that it is safe for them to proceed",
          "bn": "Flash your headlights to indicate that it is safe for them to proceed"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Overtake them as soon as possible",
          "bn": "Overtake them as soon as possible"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Be patient and prepare for them to react more slowly",
          "bn": "Be patient and prepare for them to react more slowly"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sound your horn and warn them of your presence",
          "bn": "Sound your horn and warn them of your presence"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q247",
    "categoryId": "c11",
    "text": {
      "en": "When being followed by an ambulance showing a flashing blue light you should:",
      "bn": "When being followed by an ambulance showing a flashing blue light you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Pull over as soon as safely possible to let it pass",
          "bn": "Pull over as soon as safely possible to let it pass"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Brake harshly and immediately stop in the road",
          "bn": "Brake harshly and immediately stop in the road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Accelerate fast to get away from it",
          "bn": "Accelerate fast to get away from it"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Maintain your speed and course",
          "bn": "Maintain your speed and course"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q248",
    "categoryId": "c11",
    "text": {
      "en": "You are driving at the legal speed limit. A vehicle comes up quickly behind, flashing its headlights. You should:",
      "bn": "You are driving at the legal speed limit. A vehicle comes up quickly behind, flashing its headlights. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Allow the vehicle to overtake",
          "bn": "Allow the vehicle to overtake"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Touch the brakes to show your brake lights",
          "bn": "Touch the brakes to show your brake lights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Accelerate to make a gap behind you",
          "bn": "Accelerate to make a gap behind you"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Maintain your speed to prevent the vehicle from overtaking",
          "bn": "Maintain your speed to prevent the vehicle from overtaking"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q249",
    "categoryId": "c10",
    "text": {
      "en": "What do child locks in a vehicle do?",
      "bn": "What do child locks in a vehicle do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Lock the seat belt buckles in place",
          "bn": "Lock the seat belt buckles in place"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop children from opening rear doors",
          "bn": "Stop children from opening rear doors"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stop the rear seats from tipping forward",
          "bn": "Stop the rear seats from tipping forward"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Lock the rear windows in the up position",
          "bn": "Lock the rear windows in the up position"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q250",
    "categoryId": "c10",
    "text": {
      "en": "Which of the following should you do before stopping?",
      "bn": "Which of the following should you do before stopping?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Sound the horn",
          "bn": "Sound the horn"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Flash your headlights",
          "bn": "Flash your headlights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Use the mirrors",
          "bn": "Use the mirrors"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Select a higher gear",
          "bn": "Select a higher gear"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q251",
    "categoryId": "c12",
    "text": {
      "en": "A provisional licence holder must not drive a motorcar",
      "bn": "A provisional licence holder must not drive a motorcar"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Alone",
          "bn": "Alone"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "With passengers in the back",
          "bn": "With passengers in the back"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "At night",
          "bn": "At night"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "On a dual carriageway",
          "bn": "On a dual carriageway"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q252",
    "categoryId": "c10",
    "text": {
      "en": "You are turning left on a slippery road. The back of your vehicle slides to the right. You should",
      "bn": "You are turning left on a slippery road. The back of your vehicle slides to the right. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Brake firmly and steer to the left",
          "bn": "Brake firmly and steer to the left"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Brake firmly and not turn the steering wheel",
          "bn": "Brake firmly and not turn the steering wheel"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Steer carefully to the right",
          "bn": "Steer carefully to the right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Steer carefully to the left",
          "bn": "Steer carefully to the left"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q253",
    "categoryId": "c5",
    "text": {
      "en": "Who is especially in danger of not being seen as you reverse your car?",
      "bn": "Who is especially in danger of not being seen as you reverse your car?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Children",
          "bn": "Children"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Car drivers",
          "bn": "Car drivers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Motorcyclists",
          "bn": "Motorcyclists"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Cyclists",
          "bn": "Cyclists"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q254",
    "categoryId": "c10",
    "text": {
      "en": "Rapid acceleration and heavy braking can lead to",
      "bn": "Rapid acceleration and heavy braking can lead to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Increased fuel consumption",
          "bn": "Increased fuel consumption"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Reduced pollution",
          "bn": "Reduced pollution"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reduced exhaust emissions",
          "bn": "Reduced exhaust emissions"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Increased road safety",
          "bn": "Increased road safety"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q255",
    "categoryId": "c8",
    "text": {
      "en": "When correcting a rear-wheel skid you should",
      "bn": "When correcting a rear-wheel skid you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Brake sharply",
          "bn": "Brake sharply"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "roll with it",
          "bn": "roll with it"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Steer into the skid",
          "bn": "Steer into the skid"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Steer away from the skid",
          "bn": "Steer away from the skid"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q256",
    "categoryId": "c10",
    "text": {
      "en": "A cycle lane is marked by a solid white line. You must not drive or park in it",
      "bn": "A cycle lane is marked by a solid white line. You must not drive or park in it"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "During its period of operation",
          "bn": "During its period of operation"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "At any time",
          "bn": "At any time"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "During the rush hour",
          "bn": "During the rush hour"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "If a cyclist is using it",
          "bn": "If a cyclist is using it"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q257",
    "categoryId": "c10",
    "text": {
      "en": "You MUST wear glasses or contact lenses when driving on public roads if:",
      "bn": "You MUST wear glasses or contact lenses when driving on public roads if:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "You cannot read a vehicle number plate from distance of 20.5 meters (67 feet) without them",
          "bn": "You cannot read a vehicle number plate from distance of 20.5 meters (67 feet) without them"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You cannot read a vehicle number plate from a distance of 36 meters (120 feet) without them",
          "bn": "You cannot read a vehicle number plate from a distance of 36 meters (120 feet) without them"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "There is an eyesight problem in your family",
          "bn": "There is an eyesight problem in your family"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "You are the holder of an orange badge",
          "bn": "You are the holder of an orange badge"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q258",
    "categoryId": "c10",
    "text": {
      "en": "You are waiting to emerge left from a minor road. A large vehicle is approaching from the right. You have time to turn, but you should wait. Why?",
      "bn": "You are waiting to emerge left from a minor road. A large vehicle is approaching from the right. You have time to turn, but you should wait. Why?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The large vehicle can easily hide an overtaking vehicle",
          "bn": "The large vehicle can easily hide an overtaking vehicle"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The large vehicle can turn suddenly",
          "bn": "The large vehicle can turn suddenly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The large vehicle is difficult to steer in a straight line",
          "bn": "The large vehicle is difficult to steer in a straight line"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The large vehicle can easily hide vehicles from the left",
          "bn": "The large vehicle can easily hide vehicles from the left"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q259",
    "categoryId": "c8",
    "text": {
      "en": "To correct a rear-wheel skid you should",
      "bn": "To correct a rear-wheel skid you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Steer into it",
          "bn": "Steer into it"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Apply your handbrake",
          "bn": "Apply your handbrake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Not steer at all",
          "bn": "Not steer at all"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Steer away from it",
          "bn": "Steer away from it"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q260",
    "categoryId": "c6",
    "text": {
      "en": "The road is wet and slippery. Why might a motorcyclist steer round drain covers on a bend?",
      "bn": "The road is wet and slippery. Why might a motorcyclist steer round drain covers on a bend?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To avoid splashing pedestrians on the pavements",
          "bn": "To avoid splashing pedestrians on the pavements"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To prevent the motorcycle sliding on the metal drain covers",
          "bn": "To prevent the motorcycle sliding on the metal drain covers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To avoid puncturing the tyres on the edge of the drain covers",
          "bn": "To avoid puncturing the tyres on the edge of the drain covers"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To help judge the bend using the drain covers as marker points",
          "bn": "To help judge the bend using the drain covers as marker points"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q261",
    "categoryId": "c12",
    "text": {
      "en": "After how many years does a car first need a MOT certificate?",
      "bn": "After how many years does a car first need a MOT certificate?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "One year",
          "bn": "One year"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Four years",
          "bn": "Four years"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Three years",
          "bn": "Three years"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Two years",
          "bn": "Two years"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q262",
    "categoryId": "c4",
    "text": {
      "en": "You are parking on a two-way road at night. The speed limit is 40 mph. You should park on the",
      "bn": "You are parking on a two-way road at night. The speed limit is 40 mph. You should park on the"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Left with no lights on",
          "bn": "Left with no lights on"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Left with parking lights on",
          "bn": "Left with parking lights on"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Right with dipped headlights on",
          "bn": "Right with dipped headlights on"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Right with parking lights on",
          "bn": "Right with parking lights on"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q263",
    "categoryId": "c6",
    "text": {
      "en": "Motorcyclists often look round over their right shoulder just before turning right. This is because",
      "bn": "Motorcyclists often look round over their right shoulder just before turning right. This is because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Motorcycles do not have mirrors",
          "bn": "Motorcycles do not have mirrors"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "They need to check for traffic in their blind area",
          "bn": "They need to check for traffic in their blind area"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They need to listen for following traffic",
          "bn": "They need to listen for following traffic"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Looking around helps them balance as they turn",
          "bn": "Looking around helps them balance as they turn"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q264",
    "categoryId": "c8",
    "text": {
      "en": "What is the most common reason a car skids?",
      "bn": "What is the most common reason a car skids?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Driver error",
          "bn": "Driver error"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pedestrians",
          "bn": "Pedestrians"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Worn tyres",
          "bn": "Worn tyres"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Other vehicles",
          "bn": "Other vehicles"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q265",
    "categoryId": "c12",
    "text": {
      "en": "What is the legal minimum insurance cover you must have to drive on public roads?",
      "bn": "What is the legal minimum insurance cover you must have to drive on public roads?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Third party, fire and theft",
          "bn": "Third party, fire and theft"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Personal injury cover",
          "bn": "Personal injury cover"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Third party only",
          "bn": "Third party only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Fully comprehensive",
          "bn": "Fully comprehensive"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q266",
    "categoryId": "c10",
    "text": {
      "en": "When must you stop at this junction?",
      "bn": "When must you stop at this junction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Only when the area is busy",
          "bn": "Only when the area is busy"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "At all times",
          "bn": "At all times"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "During rush hours only",
          "bn": "During rush hours only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When turning right only",
          "bn": "When turning right only"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "Motorists must stop behind the line at a junction where a stop sign is in place with a solid white line. It is law that a driver must stop at least once before the line and wait for a safe gap before proceeding. The Highway Code states to cyclists ‘You MUST obey all traffic signs and traffic light signals’. Like motorists, cyclists must also stop at stop signs. ",
      "bn": "Motorists must stop behind the line at a junction where a stop sign is in place with a solid white line. It is law that a driver must stop at least once before the line and wait for a safe gap before proceeding. The Highway Code states to cyclists ‘You MUST obey all traffic signs and traffic light signals’. Like motorists, cyclists must also stop at stop signs. "
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7eb1597a5e.jpg"
  },
  {
    "id": "q267",
    "categoryId": "c7",
    "text": {
      "en": "When about to overtake a long vehicle or lorry you should:",
      "bn": "When about to overtake a long vehicle or lorry you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive close to the lorry in order to pass more quickly",
          "bn": "Drive close to the lorry in order to pass more quickly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Sound the horn to warn the driver that you are there",
          "bn": "Sound the horn to warn the driver that you are there"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stay well back from the lorry to obtain a better view",
          "bn": "Stay well back from the lorry to obtain a better view"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your lights and wait for the driver to signal when it is safe",
          "bn": "Flash your lights and wait for the driver to signal when it is safe"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q268",
    "categoryId": "c4",
    "text": {
      "en": "How can you use the engine of your vehicle to control your speed?",
      "bn": "How can you use the engine of your vehicle to control your speed?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "By selecting neutral",
          "bn": "By selecting neutral"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "By selecting reverse gear",
          "bn": "By selecting reverse gear"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "By changing to a higher gear",
          "bn": "By changing to a higher gear"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "By changing to a lower gear",
          "bn": "By changing to a lower gear"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q269",
    "categoryId": "c6",
    "text": {
      "en": "You should never wave or urge people across at pedestrian crossing because",
      "bn": "You should never wave or urge people across at pedestrian crossing because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "It is safer for you to carry on",
          "bn": "It is safer for you to carry on"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "They may not be ready to cross",
          "bn": "They may not be ready to cross"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They may not be looking",
          "bn": "They may not be looking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "There may be another vehicle coming",
          "bn": "There may be another vehicle coming"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "Be patient and stay safe, not only for yourself but also for other road users ",
      "bn": "Be patient and stay safe, not only for yourself but also for other road users "
    }
  },
  {
    "id": "q270",
    "categoryId": "c10",
    "text": {
      "en": "Why should you make sure that you have cancelled your indicators after turning?",
      "bn": "Why should you make sure that you have cancelled your indicators after turning?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To avoid flattening the battery",
          "bn": "To avoid flattening the battery"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To avoid misleading other road users",
          "bn": "To avoid misleading other road users"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To avoid dazzling other road users",
          "bn": "To avoid dazzling other road users"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To avoid damage to the indicator relay",
          "bn": "To avoid damage to the indicator relay"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q271",
    "categoryId": "c3",
    "text": {
      "en": "You need to top up your battery. What level should you fill to?",
      "bn": "You need to top up your battery. What level should you fill to?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Just below the cell plates",
          "bn": "Just below the cell plates"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Half-way up the battery",
          "bn": "Half-way up the battery"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Just above the cell plates",
          "bn": "Just above the cell plates"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The top of the battery",
          "bn": "The top of the battery"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q272",
    "categoryId": "c10",
    "text": {
      "en": "You are driving a slow moving car on a narrow road. When traffic wishes to overtake you should",
      "bn": "You are driving a slow moving car on a narrow road. When traffic wishes to overtake you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Put your hazard warning lights on",
          "bn": "Put your hazard warning lights on"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pull in safely as soon as you can do so",
          "bn": "Pull in safely as soon as you can do so"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stop immediately and wave it on",
          "bn": "Stop immediately and wave it on"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Take no action",
          "bn": "Take no action"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "Safety is 1st priority, and at the same time try to keep a smooth traffic flow ",
      "bn": "Safety is 1st priority, and at the same time try to keep a smooth traffic flow "
    }
  },
  {
    "id": "q273",
    "categoryId": "c10",
    "text": {
      "en": "What does tailgating mean?",
      "bn": "What does tailgating mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When stationary vehicles are too close in a queue",
          "bn": "When stationary vehicles are too close in a queue"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When a vehicle delivering goods has its tailgate down",
          "bn": "When a vehicle delivering goods has its tailgate down"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When a driver is following another vehicle too closely",
          "bn": "When a driver is following another vehicle too closely"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When a vehicle is with its back doors open",
          "bn": "When a vehicle is with its back doors open"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q274",
    "categoryId": "c10",
    "text": {
      "en": "A car pulls out in front of you at a junction. What should you do?",
      "bn": "A car pulls out in front of you at a junction. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Swerve past it and blow your horn",
          "bn": "Swerve past it and blow your horn"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Accelerate past it immediately",
          "bn": "Accelerate past it immediately"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Flash your headlights and drive up close behind",
          "bn": "Flash your headlights and drive up close behind"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Slow down and be ready to stop",
          "bn": "Slow down and be ready to stop"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "Do not overtake other vehicles when approaching a junction. ",
      "bn": "Do not overtake other vehicles when approaching a junction. "
    }
  },
  {
    "id": "q275",
    "categoryId": "c4",
    "text": {
      "en": "If you are on good, dry road surface and your vehicle has good brakes and tyres, what is the overall stopping distance at 48 kph?",
      "bn": "If you are on good, dry road surface and your vehicle has good brakes and tyres, what is the overall stopping distance at 48 kph?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "36 meters (118 feet)",
          "bn": "36 meters (118 feet)"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "23 meters (75 feet)",
          "bn": "23 meters (75 feet)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "96 meters (315 feet)",
          "bn": "96 meters (315 feet)"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "53 meters (174 feet)",
          "bn": "53 meters (174 feet)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q276",
    "categoryId": "c10",
    "text": {
      "en": "You see this line across the road at the entrance to a roundabout. What does it mean?",
      "bn": "You see this line across the road at the entrance to a roundabout. What does it mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Traffic from the left has right of way",
          "bn": "Traffic from the left has right of way"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You have right of way",
          "bn": "You have right of way"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Give way to traffic from the right",
          "bn": "Give way to traffic from the right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stop at the line",
          "bn": "Stop at the line"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "The broken white line is a reminder to give way to traffic from the right at roundabouts. You can expect to find these at larger roundabouts. ",
      "bn": "The broken white line is a reminder to give way to traffic from the right at roundabouts. You can expect to find these at larger roundabouts. "
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7ee235c49d.jpg"
  },
  {
    "id": "q277",
    "categoryId": "c10",
    "text": {
      "en": "The purpose of a catalytic converter is to",
      "bn": "The purpose of a catalytic converter is to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Increase acceleration",
          "bn": "Increase acceleration"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Reduce toxic exhaust gases",
          "bn": "Reduce toxic exhaust gases"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reduce oil consumption",
          "bn": "Reduce oil consumption"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Reduce fuel consumption",
          "bn": "Reduce fuel consumption"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q278",
    "categoryId": "c8",
    "text": {
      "en": "Anti-lock brakes reduce the chances of a skid occurring particularly when:",
      "bn": "Anti-lock brakes reduce the chances of a skid occurring particularly when:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Breaking in an emergency",
          "bn": "Breaking in an emergency"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Driving on good road surfaces",
          "bn": "Driving on good road surfaces"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Driving down steep hills",
          "bn": "Driving down steep hills"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Breaking during normal driving",
          "bn": "Breaking during normal driving"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q279",
    "categoryId": "c10",
    "text": {
      "en": "You are testing the suspension of your car. You notice that your vehicle keeps bouncing when you press down on the front wing. What does this mean?",
      "bn": "You are testing the suspension of your car. You notice that your vehicle keeps bouncing when you press down on the front wing. What does this mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Steering wheel not located centrally",
          "bn": "Steering wheel not located centrally"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Worn shock absorbers",
          "bn": "Worn shock absorbers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Tyres under-inflated",
          "bn": "Tyres under-inflated"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Worn tyres",
          "bn": "Worn tyres"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q280",
    "categoryId": "c6",
    "text": {
      "en": "An injured motorcyclist is lying unconscious in the road. You should",
      "bn": "An injured motorcyclist is lying unconscious in the road. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Move the person off the road",
          "bn": "Move the person off the road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Remove the leather jacket",
          "bn": "Remove the leather jacket"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Remove the safety helmet",
          "bn": "Remove the safety helmet"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Seek medical assistance",
          "bn": "Seek medical assistance"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q281",
    "categoryId": "c13",
    "text": {
      "en": "Following a collision someone has suffered a burn. The burn needs to be cooled. What is the shortest time it should be cooled for?",
      "bn": "Following a collision someone has suffered a burn. The burn needs to be cooled. What is the shortest time it should be cooled for?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "5 minutes",
          "bn": "5 minutes"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "15 minutes",
          "bn": "15 minutes"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "20 minutes",
          "bn": "20 minutes"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "10 minutes",
          "bn": "10 minutes"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q282",
    "categoryId": "c10",
    "text": {
      "en": "How can you help to prevent your car radio from being stolen?",
      "bn": "How can you help to prevent your car radio from being stolen?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Park in an unlit area",
          "bn": "Park in an unlit area"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Install a security-coded radio",
          "bn": "Install a security-coded radio"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Park near a busy junction",
          "bn": "Park near a busy junction"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Hide the radio with a blanket",
          "bn": "Hide the radio with a blanket"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q283",
    "categoryId": "c1",
    "text": {
      "en": "If you start to feel tired whilst driving you should",
      "bn": "If you start to feel tired whilst driving you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Decrease your speed",
          "bn": "Decrease your speed"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Increase your speed to reduce your journey time",
          "bn": "Increase your speed to reduce your journey time"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stop at a safe place and rest",
          "bn": "Stop at a safe place and rest"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Turn on the radio and listen to loud music",
          "bn": "Turn on the radio and listen to loud music"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q284",
    "categoryId": "c13",
    "text": {
      "en": "At the scene of an accident you should:",
      "bn": "At the scene of an accident you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Go to those casualties who are screaming",
          "bn": "Go to those casualties who are screaming"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Not put yourself at risk",
          "bn": "Not put yourself at risk"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Leave vehicle engines switched on",
          "bn": "Leave vehicle engines switched on"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Pull everybody out of their vehicles",
          "bn": "Pull everybody out of their vehicles"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q285",
    "categoryId": "c6",
    "text": {
      "en": "You are following a motorcyclist on an uneven road. You should:",
      "bn": "You are following a motorcyclist on an uneven road. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Allow extra room in case they swerve to avoid pot-holes",
          "bn": "Allow extra room in case they swerve to avoid pot-holes"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Allow the same room as normal because motorcyclists are not affected by road surfaces",
          "bn": "Allow the same room as normal because motorcyclists are not affected by road surfaces"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Allow less room to ensure that you can be seen in their mirrors",
          "bn": "Allow less room to ensure that you can be seen in their mirrors"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Overtake immediately",
          "bn": "Overtake immediately"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q286",
    "categoryId": "c11",
    "text": {
      "en": "You are driving at night with full-beam headlights on. A vehicle is overtaking you. You should dip your lights",
      "bn": "You are driving at night with full-beam headlights on. A vehicle is overtaking you. You should dip your lights"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Some time after the vehicles has passed you",
          "bn": "Some time after the vehicles has passed you"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Before the vehicles starts to pass you",
          "bn": "Before the vehicles starts to pass you"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "As soon as the vehicle passes you",
          "bn": "As soon as the vehicle passes you"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Only if the other driver dips his headlights",
          "bn": "Only if the other driver dips his headlights"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q287",
    "categoryId": "c10",
    "text": {
      "en": "Which vehicle may have to use a different course to normal at roundabouts?",
      "bn": "Which vehicle may have to use a different course to normal at roundabouts?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Estate car",
          "bn": "Estate car"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Long vehicle",
          "bn": "Long vehicle"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sports car",
          "bn": "Sports car"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Van",
          "bn": "Van"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q288",
    "categoryId": "c6",
    "text": {
      "en": "You stop for pedestrians waiting to cross at a zebra crossing. They do not start to cross. What should you do?",
      "bn": "You stop for pedestrians waiting to cross at a zebra crossing. They do not start to cross. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Carry on",
          "bn": "Carry on"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Be patient and wait",
          "bn": "Be patient and wait"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Wave then to cross",
          "bn": "Wave then to cross"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q289",
    "categoryId": "c8",
    "text": {
      "en": "When following a vehicle on a wet road you should leave a time gap of at least?",
      "bn": "When following a vehicle on a wet road you should leave a time gap of at least?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "3 seconds",
          "bn": "3 seconds"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "4 seconds",
          "bn": "4 seconds"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "2 seconds",
          "bn": "2 seconds"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "1 second",
          "bn": "1 second"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q290",
    "categoryId": "c11",
    "text": {
      "en": "Motorcycles ride in day light with their headlights switched on because",
      "bn": "Motorcycles ride in day light with their headlights switched on because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "There are speed humps ahead",
          "bn": "There are speed humps ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "It is legal requirement",
          "bn": "It is legal requirement"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They need to be seen",
          "bn": "They need to be seen"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "There is a speed trap ahead",
          "bn": "There is a speed trap ahead"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q291",
    "categoryId": "c7",
    "text": {
      "en": "You are driving in town. There is a bus at the bus stop on the other side of the road. Why should you be careful?",
      "bn": "You are driving in town. There is a bus at the bus stop on the other side of the road. Why should you be careful?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The bus may remain stationary",
          "bn": "The bus may remain stationary"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The bus may move off suddenly",
          "bn": "The bus may move off suddenly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Pedestrians may come from behind the bus",
          "bn": "Pedestrians may come from behind the bus"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The bus may have broken down",
          "bn": "The bus may have broken down"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q292",
    "categoryId": "c10",
    "text": {
      "en": "In which of these following situations should you avoid overtaking?",
      "bn": "In which of these following situations should you avoid overtaking?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Just after a bend",
          "bn": "Just after a bend"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "In a one-way street",
          "bn": "In a one-way street"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "On a 30 mph road",
          "bn": "On a 30 mph road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Approaching a dip in the road",
          "bn": "Approaching a dip in the road"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "Try to avoid overtaking when approaching a bend, dip, zebra crossing, road junction, on a bridge or the peak of a mountain. ",
      "bn": "Try to avoid overtaking when approaching a bend, dip, zebra crossing, road junction, on a bridge or the peak of a mountain. "
    }
  },
  {
    "id": "q293",
    "categoryId": "c10",
    "text": {
      "en": "Where may you overtake on a one-way Street?",
      "bn": "Where may you overtake on a one-way Street?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Either on the right or the left",
          "bn": "Either on the right or the left"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Overtaking is not allowed",
          "bn": "Overtaking is not allowed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Only on the left-hand side",
          "bn": "Only on the left-hand side"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Only on the right-hand side",
          "bn": "Only on the right-hand side"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q294",
    "categoryId": "c11",
    "text": {
      "en": "Using rear fog lights in clear daylight or tunnels will:",
      "bn": "Using rear fog lights in clear daylight or tunnels will:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Make following drivers keep back",
          "bn": "Make following drivers keep back"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Dazzle others drivers",
          "bn": "Dazzle others drivers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Give extra protection",
          "bn": "Give extra protection"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Be useful when towing a trailer",
          "bn": "Be useful when towing a trailer"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q295",
    "categoryId": "c10",
    "text": {
      "en": "You are about to drive home. You cannot find the glasses you need to wear when driving. You should:",
      "bn": "You are about to drive home. You cannot find the glasses you need to wear when driving. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive home slowly, keeping to quite roads",
          "bn": "Drive home slowly, keeping to quite roads"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Find a way of getting home without driving",
          "bn": "Find a way of getting home without driving"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drive home at night",
          "bn": "Drive home at night"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Borrow a friend’s glasses and drive home",
          "bn": "Borrow a friend’s glasses and drive home"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q296",
    "categoryId": "c4",
    "text": {
      "en": "In freezing conditions you should expect stopping distances to increase by up to",
      "bn": "In freezing conditions you should expect stopping distances to increase by up to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Four (4) times",
          "bn": "Four (4) times"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Ten (10) times",
          "bn": "Ten (10) times"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Seven (7) times",
          "bn": "Seven (7) times"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Five (5) times",
          "bn": "Five (5) times"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q297",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "End of narrow bridge",
          "bn": "End of narrow bridge"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Road narrows",
          "bn": "Road narrows"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "End of dual carriageway",
          "bn": "End of dual carriageway"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Tall bridge",
          "bn": "Tall bridge"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7f3867637c.jpg"
  },
  {
    "id": "q298",
    "categoryId": "c10",
    "text": {
      "en": "When being followed by an ambulance showing a flashing blue beacon you should",
      "bn": "When being followed by an ambulance showing a flashing blue beacon you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Pull over as soon as safely possible to let it pass",
          "bn": "Pull over as soon as safely possible to let it pass"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Maintain your speed and course",
          "bn": "Maintain your speed and course"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Accelerate hard to get away from it",
          "bn": "Accelerate hard to get away from it"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Brake harshly and immediately stop in the road",
          "bn": "Brake harshly and immediately stop in the road"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q299",
    "categoryId": "c11",
    "text": {
      "en": "You are travelling at the legal speed limit. A vehicle comes up quickly behind, flashing its headlights. You should",
      "bn": "You are travelling at the legal speed limit. A vehicle comes up quickly behind, flashing its headlights. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Accelerate to make a gap behind you",
          "bn": "Accelerate to make a gap behind you"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Touch the brakes sharply to show your brake lights",
          "bn": "Touch the brakes sharply to show your brake lights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Maintain your speed to prevent the vehicle from overtaking",
          "bn": "Maintain your speed to prevent the vehicle from overtaking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Allow the vehicle to overtake",
          "bn": "Allow the vehicle to overtake"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q300",
    "categoryId": "c11",
    "text": {
      "en": "What lights and why must you put them on when going through a tunnel?",
      "bn": "What lights and why must you put them on when going through a tunnel?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No lights are necessary as tunnels have their own lighting.",
          "bn": "No lights are necessary as tunnels have their own lighting."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Dipped-beam to help you see and also be clearly seen by others.",
          "bn": "Dipped-beam to help you see and also be clearly seen by others."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Main-beam to see clearly where you are going.",
          "bn": "Main-beam to see clearly where you are going."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Hazard warning lights so nobody drives too near.",
          "bn": "Hazard warning lights so nobody drives too near."
        }
      },
      {
        "id": "e",
        "text": {
          "en": "Dipped-beam and front and/or rear Fog lights to see and be seen clearly.",
          "bn": "Dipped-beam and front and/or rear Fog lights to see and be seen clearly."
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q301",
    "categoryId": "c9",
    "text": {
      "en": "What is the national speed limit for towing a trailer on a motorway?",
      "bn": "What is the national speed limit for towing a trailer on a motorway?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "40 mph",
          "bn": "40 mph"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "50 mph",
          "bn": "50 mph"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "60 mph",
          "bn": "60 mph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "70 mph",
          "bn": "70 mph"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q302",
    "categoryId": "c10",
    "text": {
      "en": "In windy conditions you need to take extra care when",
      "bn": "In windy conditions you need to take extra care when"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Using the brakes",
          "bn": "Using the brakes"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Making a hill start",
          "bn": "Making a hill start"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Passing pedal cyclists",
          "bn": "Passing pedal cyclists"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Turning into a narrow road",
          "bn": "Turning into a narrow road"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q303",
    "categoryId": "c10",
    "text": {
      "en": "You are about to drive home but you can't find the glasses you need to wear. You should:",
      "bn": "You are about to drive home but you can't find the glasses you need to wear. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Only drive on minor roads",
          "bn": "Only drive on minor roads"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Drive home at night so that the lights will help you",
          "bn": "Drive home at night so that the lights will help you"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drive home without going faster than 30 mph",
          "bn": "Drive home without going faster than 30 mph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Find a way of getting home without driving",
          "bn": "Find a way of getting home without driving"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q304",
    "categoryId": "c9",
    "text": {
      "en": "Immediately after joining a motorway you should:",
      "bn": "Immediately after joining a motorway you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Move to the centre lane",
          "bn": "Move to the centre lane"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Move to the right hand lane",
          "bn": "Move to the right hand lane"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Try to overtake",
          "bn": "Try to overtake"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Keep in the left lane to get used to the speed",
          "bn": "Keep in the left lane to get used to the speed"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q305",
    "categoryId": "c10",
    "text": {
      "en": "You should only use a mobile phone when",
      "bn": "You should only use a mobile phone when"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Driving an automatic vehicle",
          "bn": "Driving an automatic vehicle"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Driving at less than 30 mph",
          "bn": "Driving at less than 30 mph"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Receiving a call",
          "bn": "Receiving a call"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Suitably parked",
          "bn": "Suitably parked"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q306",
    "categoryId": "c3",
    "text": {
      "en": "Anti-lock brakes are most useful when you are",
      "bn": "Anti-lock brakes are most useful when you are"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Driving on worn tyres",
          "bn": "Driving on worn tyres"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Braking gently",
          "bn": "Braking gently"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Braking excessively",
          "bn": "Braking excessively"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Driving normally",
          "bn": "Driving normally"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q307",
    "categoryId": "c11",
    "text": {
      "en": "Why are mirrors often slightly curved (convex)?",
      "bn": "Why are mirrors often slightly curved (convex)?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "They make it easier to judge the speed of following traffic",
          "bn": "They make it easier to judge the speed of following traffic"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "They totally cover blind spots",
          "bn": "They totally cover blind spots"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They make following traffic look bigger",
          "bn": "They make following traffic look bigger"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "They give a wider field of vision",
          "bn": "They give a wider field of vision"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q308",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Ancient monument ahead",
          "bn": "Ancient monument ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Tunnel ahead",
          "bn": "Tunnel ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Low bridge ahead",
          "bn": "Low bridge ahead"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Accident black spot ahead",
          "bn": "Accident black spot ahead"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7f64c68ee8.jpg"
  },
  {
    "id": "q309",
    "categoryId": "c4",
    "text": {
      "en": "You are entering an area of road works. There is a temporary speed limit displayed. You must",
      "bn": "You are entering an area of road works. There is a temporary speed limit displayed. You must"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Accept the speed limit as advisable",
          "bn": "Accept the speed limit as advisable"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Not exceed the speed limit",
          "bn": "Not exceed the speed limit"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Obey the limit except for overnight",
          "bn": "Obey the limit except for overnight"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Obey the limit only during rush hour",
          "bn": "Obey the limit only during rush hour"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q310",
    "categoryId": "c10",
    "text": {
      "en": "Objects or articles hanging from your interior mirror may",
      "bn": "Objects or articles hanging from your interior mirror may"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Help your concentration",
          "bn": "Help your concentration"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Distract your attention",
          "bn": "Distract your attention"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "improve your view",
          "bn": "improve your view"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Improve your driving",
          "bn": "Improve your driving"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q311",
    "categoryId": "c8",
    "text": {
      "en": "What is the main cause of skidding?",
      "bn": "What is the main cause of skidding?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The weather",
          "bn": "The weather"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Damaged brakes",
          "bn": "Damaged brakes"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Driving too fast",
          "bn": "Driving too fast"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The driver",
          "bn": "The driver"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q312",
    "categoryId": "c11",
    "text": {
      "en": "At a crossroads there are no signs or road markings. Two vehicles approach. Which has priority?",
      "bn": "At a crossroads there are no signs or road markings. Two vehicles approach. Which has priority?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The vehicle on the widest road",
          "bn": "The vehicle on the widest road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The vehicle the fastest",
          "bn": "The vehicle the fastest"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Neither vehicle",
          "bn": "Neither vehicle"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Vehicles approaching from the right",
          "bn": "Vehicles approaching from the right"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q313",
    "categoryId": "c6",
    "text": {
      "en": "You should never wave people across at pedestrian crossings because",
      "bn": "You should never wave people across at pedestrian crossings because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "There may be another vehicle coming",
          "bn": "There may be another vehicle coming"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "They may not be looking",
          "bn": "They may not be looking"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They may not be ready to cross",
          "bn": "They may not be ready to cross"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "It is safer for you to carry on",
          "bn": "It is safer for you to carry on"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q314",
    "categoryId": "c3",
    "text": {
      "en": "You are driving down a long steep hill. You suddenly notice that your brakes are not working as well as normal. What is the usual cause of this?",
      "bn": "You are driving down a long steep hill. You suddenly notice that your brakes are not working as well as normal. What is the usual cause of this?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The brakes overheating",
          "bn": "The brakes overheating"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Badly adjusted",
          "bn": "Badly adjusted"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Air in the brake fluid",
          "bn": "Air in the brake fluid"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Oil on the brakes",
          "bn": "Oil on the brakes"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q315",
    "categoryId": "c10",
    "text": {
      "en": "Which of the following are at greatest risk from other road users?",
      "bn": "Which of the following are at greatest risk from other road users?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Motorcycles",
          "bn": "Motorcycles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Lorry drivers",
          "bn": "Lorry drivers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Busy bus drivers",
          "bn": "Busy bus drivers"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Learner car drivers",
          "bn": "Learner car drivers"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q316",
    "categoryId": "c12",
    "text": {
      "en": "What are the maximum national speed limits for cars and motorcycles in built-up areas and elsewhere?",
      "bn": "What are the maximum national speed limits for cars and motorcycles in built-up areas and elsewhere?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "50kph and 80kph",
          "bn": "50kph and 80kph"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "30mph and 70mph",
          "bn": "30mph and 70mph"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "40kph and 70kph",
          "bn": "40kph and 70kph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "45mph and 100mph",
          "bn": "45mph and 100mph"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q317",
    "categoryId": "c3",
    "text": {
      "en": "You can use the engine of your vehicle as a brake by",
      "bn": "You can use the engine of your vehicle as a brake by"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "By travelling with the clutch pressed down",
          "bn": "By travelling with the clutch pressed down"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "By selecting fifth gear",
          "bn": "By selecting fifth gear"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "By turning the engine off",
          "bn": "By turning the engine off"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "By selecting a lower gear",
          "bn": "By selecting a lower gear"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q318",
    "categoryId": "c12",
    "text": {
      "en": "For which of these must you show on your motor insurance certificate?",
      "bn": "For which of these must you show on your motor insurance certificate?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When having an MOT inspection",
          "bn": "When having an MOT inspection"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When buying or selling a vehicle",
          "bn": "When buying or selling a vehicle"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When you are taking your driving test",
          "bn": "When you are taking your driving test"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When a police office asks for it",
          "bn": "When a police office asks for it"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q319",
    "categoryId": "c7",
    "text": {
      "en": "You wish to overtake a long, slow moving vehicle or lorry on a busy road with oncoming traffic. You should:",
      "bn": "You wish to overtake a long, slow moving vehicle or lorry on a busy road with oncoming traffic. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Follow it closely and keep moving out to see the road ahead",
          "bn": "Follow it closely and keep moving out to see the road ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stay behind until the driver waves you past",
          "bn": "Stay behind until the driver waves you past"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep well back until you can see that it is clear",
          "bn": "Keep well back until you can see that it is clear"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your headlights for the oncoming traffic to give way",
          "bn": "Flash your headlights for the oncoming traffic to give way"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q320",
    "categoryId": "c14",
    "text": {
      "en": "Any load that is carried on a roof rack should be",
      "bn": "Any load that is carried on a roof rack should be"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Visible in your exterior mirror",
          "bn": "Visible in your exterior mirror"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Loaded towards the rear of the vehicle",
          "bn": "Loaded towards the rear of the vehicle"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Securely fastened when driving",
          "bn": "Securely fastened when driving"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Covered with plastic sheeting",
          "bn": "Covered with plastic sheeting"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q321",
    "categoryId": "c13",
    "text": {
      "en": "At the scene of an accident you have to treat someone for shock. What should you do?",
      "bn": "At the scene of an accident you have to treat someone for shock. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep reassuring them until qualified help arrives",
          "bn": "Keep reassuring them until qualified help arrives"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Give them liquids to drink",
          "bn": "Give them liquids to drink"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Try and cool them down",
          "bn": "Try and cool them down"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sing to them",
          "bn": "Sing to them"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q322",
    "categoryId": "c11",
    "text": {
      "en": "This marking appears on the road just before a",
      "bn": "This marking appears on the road just before a"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No through road sign",
          "bn": "No through road sign"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop sign",
          "bn": "Stop sign"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Give way sign",
          "bn": "Give way sign"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "No entry sign",
          "bn": "No entry sign"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7f92e634d2.jpg"
  },
  {
    "id": "q323",
    "categoryId": "c10",
    "text": {
      "en": "For a driver, what doe the term Blind Spot mean?",
      "bn": "For a driver, what doe the term Blind Spot mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "An area immediately behind the car",
          "bn": "An area immediately behind the car"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The area covered by your left mirror",
          "bn": "The area covered by your left mirror"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The area covered by the rear view mirror",
          "bn": "The area covered by the rear view mirror"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "An area not seen in your mirrors",
          "bn": "An area not seen in your mirrors"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q324",
    "categoryId": "c6",
    "text": {
      "en": "At toucan crossings, apart from pedestrians you should be aware of",
      "bn": "At toucan crossings, apart from pedestrians you should be aware of"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Buses pulling out",
          "bn": "Buses pulling out"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Emergency vehicles emerging",
          "bn": "Emergency vehicles emerging"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Cyclists riding across",
          "bn": "Cyclists riding across"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Trams crossing in front",
          "bn": "Trams crossing in front"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q325",
    "categoryId": "c10",
    "text": {
      "en": "You are turning left on a slippery road. The back of your vehicle slides to the right. You should:",
      "bn": "You are turning left on a slippery road. The back of your vehicle slides to the right. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Brake firmly and not turn the steering wheel",
          "bn": "Brake firmly and not turn the steering wheel"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Steer carefully to the left",
          "bn": "Steer carefully to the left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake firmly and steer to the left",
          "bn": "Brake firmly and steer to the left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Steer carefully to the right",
          "bn": "Steer carefully to the right"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q326",
    "categoryId": "c6",
    "text": {
      "en": "You are approaching a zebra crossing. Pedestrians are waiting to cross. You should:",
      "bn": "You are approaching a zebra crossing. Pedestrians are waiting to cross. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Wave at them to cross the road",
          "bn": "Wave at them to cross the road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Give way to elderly and infirm only",
          "bn": "Give way to elderly and infirm only"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Slow down and prepare to stop",
          "bn": "Slow down and prepare to stop"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Use your headlights to indicate they can cross",
          "bn": "Use your headlights to indicate they can cross"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q327",
    "categoryId": "c10",
    "text": {
      "en": "You should ONLY use a mobile or cellular phone when:",
      "bn": "You should ONLY use a mobile or cellular phone when:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Driving an automatic vehicle",
          "bn": "Driving an automatic vehicle"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Suitably parked",
          "bn": "Suitably parked"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Receiving a call",
          "bn": "Receiving a call"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Driving at less than 30 mph",
          "bn": "Driving at less than 30 mph"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "Using a mobile phone while driving is dangerous, since your attention is diverted away from the road ",
      "bn": "Using a mobile phone while driving is dangerous, since your attention is diverted away from the road "
    }
  },
  {
    "id": "q328",
    "categoryId": "c3",
    "text": {
      "en": "You will use more fuel if your tyres are",
      "bn": "You will use more fuel if your tyres are"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Of different makes",
          "bn": "Of different makes"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "New and hardly used",
          "bn": "New and hardly used"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Under-inflated",
          "bn": "Under-inflated"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Over-inflated",
          "bn": "Over-inflated"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q329",
    "categoryId": "c11",
    "text": {
      "en": "What do these solid double white centre line road markings mean?",
      "bn": "What do these solid double white centre line road markings mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Lines on the road just to mark the lanes and guide traffic flows, which have no legal or safety implications.",
          "bn": "Lines on the road just to mark the lanes and guide traffic flows, which have no legal or safety implications."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Continuous solid double white line (Centre line) which vehicles must not drive over, across or astride except to enter a side road, unless prohibited from doing so by appropriate signage.",
          "bn": "Continuous solid double white line (Centre line) which vehicles must not drive over, across or astride except to enter a side road, unless prohibited from doing so by appropriate signage."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Central limit of dual carriageway and may be crossed only when overtaking.",
          "bn": "Central limit of dual carriageway and may be crossed only when overtaking."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "No stopping or parking permitted.",
          "bn": "No stopping or parking permitted."
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa7fbb0d1cda.jpg"
  },
  {
    "id": "q330",
    "categoryId": "c14",
    "text": {
      "en": "A roof rack that is fitted to your car will:",
      "bn": "A roof rack that is fitted to your car will:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Improve the road handling",
          "bn": "Improve the road handling"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Make your car go faster",
          "bn": "Make your car go faster"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reduce fuel consumption",
          "bn": "Reduce fuel consumption"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Increase fuel consumption",
          "bn": "Increase fuel consumption"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q331",
    "categoryId": "c10",
    "text": {
      "en": "The road is icy. You should drive slowly",
      "bn": "The road is icy. You should drive slowly"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "With your left foot on the brake",
          "bn": "With your left foot on the brake"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "In the lowest gear possible",
          "bn": "In the lowest gear possible"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "With the handbrake partly on",
          "bn": "With the handbrake partly on"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "In the highest gear possible",
          "bn": "In the highest gear possible"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q332",
    "categoryId": "c11",
    "text": {
      "en": "You see this sign ahead of you. It means:",
      "bn": "You see this sign ahead of you. It means:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Start to slow down to 30 kph after passing it",
          "bn": "Start to slow down to 30 kph after passing it"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You are leaving the 30 kph speed limit area",
          "bn": "You are leaving the 30 kph speed limit area"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The minimum speed limit ahead is 30 kph",
          "bn": "The minimum speed limit ahead is 30 kph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Do not exceed 30 kph after passing it",
          "bn": "Do not exceed 30 kph after passing it"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa80314913bc.jpg"
  },
  {
    "id": "q333",
    "categoryId": "c7",
    "text": {
      "en": "On a road where trams operate, which of these vehicles will be most at risk from tram rails?",
      "bn": "On a road where trams operate, which of these vehicles will be most at risk from tram rails?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Buses",
          "bn": "Buses"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Cycles",
          "bn": "Cycles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Lorries",
          "bn": "Lorries"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Cars",
          "bn": "Cars"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q334",
    "categoryId": "c10",
    "text": {
      "en": "Which type of crossing can detect when people are on them?",
      "bn": "Which type of crossing can detect when people are on them?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Puffin",
          "bn": "Puffin"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Zebra",
          "bn": "Zebra"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Pelican",
          "bn": "Pelican"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Toucan",
          "bn": "Toucan"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q335",
    "categoryId": "c11",
    "text": {
      "en": "Signals are normally given by direction indicators and",
      "bn": "Signals are normally given by direction indicators and"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Interior lights",
          "bn": "Interior lights"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Sidelights",
          "bn": "Sidelights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake lights",
          "bn": "Brake lights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Fog lights",
          "bn": "Fog lights"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q336",
    "categoryId": "c8",
    "text": {
      "en": "You are carrying a child in your car. They are under three years of age. Which of these is a suitable restraint?",
      "bn": "You are carrying a child in your car. They are under three years of age. Which of these is a suitable restraint?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "An adult lap belt",
          "bn": "An adult lap belt"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "A child seat",
          "bn": "A child seat"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "An adult seat belt",
          "bn": "An adult seat belt"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "An adult holding a child",
          "bn": "An adult holding a child"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q337",
    "categoryId": "c12",
    "text": {
      "en": "What is the maximum number of penalty points that will automatically disqualify a driver who holds a provisional driving licence?",
      "bn": "What is the maximum number of penalty points that will automatically disqualify a driver who holds a provisional driving licence?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "12 points at any time during a 3 year period",
          "bn": "12 points at any time during a 3 year period"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "10 points during any one year period",
          "bn": "10 points during any one year period"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "4 points a year over a 3 year period",
          "bn": "4 points a year over a 3 year period"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "18 points over a two year period",
          "bn": "18 points over a two year period"
        }
      },
      {
        "id": "e",
        "text": {
          "en": "15 points over a five 5 year period",
          "bn": "15 points over a five 5 year period"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q338",
    "categoryId": "c10",
    "text": {
      "en": "You take the wrong route and find you are on a one-way street. You should:",
      "bn": "You take the wrong route and find you are on a one-way street. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Reverse into a driveway",
          "bn": "Reverse into a driveway"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Turn round in a side road",
          "bn": "Turn round in a side road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Continue to the end of the road",
          "bn": "Continue to the end of the road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Reverse out of the road",
          "bn": "Reverse out of the road"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q339",
    "categoryId": "c10",
    "text": {
      "en": "Coasting your vehicle whilst driving will:",
      "bn": "Coasting your vehicle whilst driving will:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Increase the control you have over the vehicle",
          "bn": "Increase the control you have over the vehicle"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Reduce the vehicle's braking distance",
          "bn": "Reduce the vehicle's braking distance"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Make the car use more fuel",
          "bn": "Make the car use more fuel"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Decrease the control you have over the vehicle",
          "bn": "Decrease the control you have over the vehicle"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q340",
    "categoryId": "c10",
    "text": {
      "en": "Using a hands-free phone is likely to",
      "bn": "Using a hands-free phone is likely to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Increase your concentration",
          "bn": "Increase your concentration"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Divert your attention",
          "bn": "Divert your attention"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Improve your safety",
          "bn": "Improve your safety"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Reduce your view",
          "bn": "Reduce your view"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "Using a mobile phone while driving is dangerous. your attention should not be diverted away from the road ",
      "bn": "Using a mobile phone while driving is dangerous. your attention should not be diverted away from the road "
    }
  },
  {
    "id": "q341",
    "categoryId": "c11",
    "text": {
      "en": "Using rear fog lights in clear daylight will",
      "bn": "Using rear fog lights in clear daylight will"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Dazzle other drivers",
          "bn": "Dazzle other drivers"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Give extra protection",
          "bn": "Give extra protection"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Make following drivers keep back",
          "bn": "Make following drivers keep back"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Be useful when towing a trailer",
          "bn": "Be useful when towing a trailer"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q342",
    "categoryId": "c8",
    "text": {
      "en": "Why should you always reduce your speed when travelling in fog?",
      "bn": "Why should you always reduce your speed when travelling in fog?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "It is more difficult to see events ahead",
          "bn": "It is more difficult to see events ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The brakes do not work as well",
          "bn": "The brakes do not work as well"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "You will be dazzled by oncoming headlights",
          "bn": "You will be dazzled by oncoming headlights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The engine will take longer to warm up",
          "bn": "The engine will take longer to warm up"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q343",
    "categoryId": "c11",
    "text": {
      "en": "When MUST you use dipped headlights during the day?",
      "bn": "When MUST you use dipped headlights during the day?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When parking",
          "bn": "When parking"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Along narrow streets",
          "bn": "Along narrow streets"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "In poor visibility",
          "bn": "In poor visibility"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "All the time",
          "bn": "All the time"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q344",
    "categoryId": "c9",
    "text": {
      "en": "You are on a well-lit motorway at night. You must",
      "bn": "You are on a well-lit motorway at night. You must"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Use your headlights only in bad weather",
          "bn": "Use your headlights only in bad weather"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Use only your sidelights",
          "bn": "Use only your sidelights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Always use your headlights",
          "bn": "Always use your headlights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Always use your rear fog lights",
          "bn": "Always use your rear fog lights"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q345",
    "categoryId": "c2",
    "text": {
      "en": "A driver's behaviour has upset you. It may help if you",
      "bn": "A driver's behaviour has upset you. It may help if you"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Shout abusive language",
          "bn": "Shout abusive language"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Gesture to them with your hand",
          "bn": "Gesture to them with your hand"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stop and take a break",
          "bn": "Stop and take a break"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Follow their car, flashing your headlights",
          "bn": "Follow their car, flashing your headlights"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q346",
    "categoryId": "c10",
    "text": {
      "en": "If you cannot see clearly behind when reversing, what should you do?",
      "bn": "If you cannot see clearly behind when reversing, what should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Ask someone to guide you",
          "bn": "Ask someone to guide you"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Open the door and look behind",
          "bn": "Open the door and look behind"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Open your window to look behind",
          "bn": "Open your window to look behind"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Look in the nearside mirror",
          "bn": "Look in the nearside mirror"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q347",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Crossroads",
          "bn": "Crossroads"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Roundabout",
          "bn": "Roundabout"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No entry",
          "bn": "No entry"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "No stopping",
          "bn": "No stopping"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa807c09d2da.jpg"
  },
  {
    "id": "q348",
    "categoryId": "c10",
    "text": {
      "en": "When emerging from junctions, which is most likely to obstruct your view?",
      "bn": "When emerging from junctions, which is most likely to obstruct your view?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Interior mirror",
          "bn": "Interior mirror"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Steering wheel",
          "bn": "Steering wheel"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Windscreen pillars",
          "bn": "Windscreen pillars"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Windscreen wipers",
          "bn": "Windscreen wipers"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q349",
    "categoryId": "c10",
    "text": {
      "en": "An elderly person's driving ability could be affected because they may be unable to",
      "bn": "An elderly person's driving ability could be affected because they may be unable to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Give signals correctly",
          "bn": "Give signals correctly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Understand road signs",
          "bn": "Understand road signs"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Obtain car insurance",
          "bn": "Obtain car insurance"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "React very quickly",
          "bn": "React very quickly"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q350",
    "categoryId": "c10",
    "text": {
      "en": "You are in a line of traffic. The driver behind you is following very closely. What action should you take?",
      "bn": "You are in a line of traffic. The driver behind you is following very closely. What action should you take?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Move over to a position just left of the centre line of the road",
          "bn": "Move over to a position just left of the centre line of the road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Signal left and wave the following driver past",
          "bn": "Signal left and wave the following driver past"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Slow down, gradually increasing the gap between you and the vehicle in front",
          "bn": "Slow down, gradually increasing the gap between you and the vehicle in front"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Ignore the following driver and continue to drive within the speed limit",
          "bn": "Ignore the following driver and continue to drive within the speed limit"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "Allow room for the vehicle to overtake ",
      "bn": "Allow room for the vehicle to overtake "
    }
  },
  {
    "id": "q351",
    "categoryId": "c10",
    "text": {
      "en": "You wish to turn right ahead. Why should you take up the proper position in good time?",
      "bn": "You wish to turn right ahead. Why should you take up the proper position in good time?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To allow other drivers to pull out in front of you",
          "bn": "To allow other drivers to pull out in front of you"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To allow drivers to pass you on the right",
          "bn": "To allow drivers to pass you on the right"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To give a better view into the road that you are joining",
          "bn": "To give a better view into the road that you are joining"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To help other road users know what you intend to do",
          "bn": "To help other road users know what you intend to do"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "It is essential and important to let others know your intension as early as possible to prevent wrong perception and accidents ",
      "bn": "It is essential and important to let others know your intension as early as possible to prevent wrong perception and accidents "
    }
  },
  {
    "id": "q352",
    "categoryId": "c10",
    "text": {
      "en": "To help the environment you should NOT:",
      "bn": "To help the environment you should NOT:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Walk, cycle, or use public transport",
          "bn": "Walk, cycle, or use public transport"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Remove your roof rack when unloaded",
          "bn": "Remove your roof rack when unloaded"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Use your car for very short journeys",
          "bn": "Use your car for very short journeys"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Empty the boot of unnecessary weight",
          "bn": "Empty the boot of unnecessary weight"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q353",
    "categoryId": "c9",
    "text": {
      "en": "As soon as you join a dual carriageway you should normally:",
      "bn": "As soon as you join a dual carriageway you should normally:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Position your vehicle in the centre lane",
          "bn": "Position your vehicle in the centre lane"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep in the left lane",
          "bn": "Keep in the left lane"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Readjust your mirrors",
          "bn": "Readjust your mirrors"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Try to overtake",
          "bn": "Try to overtake"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q354",
    "categoryId": "c10",
    "text": {
      "en": "Which of the following is the main cause of rear-end collisions?",
      "bn": "Which of the following is the main cause of rear-end collisions?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "A wet road surface",
          "bn": "A wet road surface"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pedestrians crossing the road unexpectedly",
          "bn": "Pedestrians crossing the road unexpectedly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Traffic lights",
          "bn": "Traffic lights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Driving too close to the vehicle in front",
          "bn": "Driving too close to the vehicle in front"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q355",
    "categoryId": "c10",
    "text": {
      "en": "At an incident it is important to look after any casualties. When the area is safe you should",
      "bn": "At an incident it is important to look after any casualties. When the area is safe you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep them in the vehicle",
          "bn": "Keep them in the vehicle"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Give them a drink",
          "bn": "Give them a drink"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Give them something to eat",
          "bn": "Give them something to eat"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Get them out of the vehicle",
          "bn": "Get them out of the vehicle"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q356",
    "categoryId": "c11",
    "text": {
      "en": "You are at a junction controlled by traffic lights. When should you NOT proceed at green?",
      "bn": "You are at a junction controlled by traffic lights. When should you NOT proceed at green?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When your exit from the junction is blocked",
          "bn": "When your exit from the junction is blocked"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When pedestrians are waiting to cross",
          "bn": "When pedestrians are waiting to cross"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When you think the lights may be about to change",
          "bn": "When you think the lights may be about to change"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When you intend to turn right",
          "bn": "When you intend to turn right"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa80af0346f6.jpg"
  },
  {
    "id": "q357",
    "categoryId": "c4",
    "text": {
      "en": "In good conditions, what is the typical stopping distance at 70 mph?",
      "bn": "In good conditions, what is the typical stopping distance at 70 mph?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "53 meters (175 feet)",
          "bn": "53 meters (175 feet)"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "96 meters (315 feet)",
          "bn": "96 meters (315 feet)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "73 meters (240 feet)",
          "bn": "73 meters (240 feet)"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "60 meters (197 feet)",
          "bn": "60 meters (197 feet)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q358",
    "categoryId": "c3",
    "text": {
      "en": "Vehicles fitted with an anti-lock brake system",
      "bn": "Vehicles fitted with an anti-lock brake system"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Can be steered while you are braking",
          "bn": "Can be steered while you are braking"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Are impossible to skid",
          "bn": "Are impossible to skid"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Accelerate much faster",
          "bn": "Accelerate much faster"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Are not fitted with a handbrake",
          "bn": "Are not fitted with a handbrake"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q359",
    "categoryId": "c10",
    "text": {
      "en": "A newly qualified driver must",
      "bn": "A newly qualified driver must"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Display green L-Plates",
          "bn": "Display green L-Plates"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Have valid motor insurance",
          "bn": "Have valid motor insurance"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Not exceed 40 mph for 12 months",
          "bn": "Not exceed 40 mph for 12 months"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Be accompanied on a motorway",
          "bn": "Be accompanied on a motorway"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q360",
    "categoryId": "c10",
    "text": {
      "en": "When turning your car in the road, you must:",
      "bn": "When turning your car in the road, you must:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Overhang the kerb",
          "bn": "Overhang the kerb"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Check all around for other road users",
          "bn": "Check all around for other road users"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep your hand on the handbrake",
          "bn": "Keep your hand on the handbrake"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Use an available driveway",
          "bn": "Use an available driveway"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "Look out for other road users when turning, especially pedestrians ",
      "bn": "Look out for other road users when turning, especially pedestrians "
    }
  },
  {
    "id": "q361",
    "categoryId": "c10",
    "text": {
      "en": "Which type of vehicle is most affected by strong winds?",
      "bn": "Which type of vehicle is most affected by strong winds?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Tanker",
          "bn": "Tanker"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Motorcycle",
          "bn": "Motorcycle"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Car",
          "bn": "Car"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Tractor",
          "bn": "Tractor"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q362",
    "categoryId": "c12",
    "text": {
      "en": "Motorcars must first have an MOT certificate when they are",
      "bn": "Motorcars must first have an MOT certificate when they are"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Five (5) years old",
          "bn": "Five (5) years old"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "One (1) year old",
          "bn": "One (1) year old"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Three (3) years old",
          "bn": "Three (3) years old"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Seven (7) years old",
          "bn": "Seven (7) years old"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q363",
    "categoryId": "c10",
    "text": {
      "en": "You have driven through a flood. What is the first thing you should do?",
      "bn": "You have driven through a flood. What is the first thing you should do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Check your exhaust",
          "bn": "Check your exhaust"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop and dry the brakes",
          "bn": "Stop and dry the brakes"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stop and check the tyres",
          "bn": "Stop and check the tyres"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Test your brakes",
          "bn": "Test your brakes"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q364",
    "categoryId": "c10",
    "text": {
      "en": "You are approaching an unmarked crossroads. How should you deal with this type of junction?",
      "bn": "You are approaching an unmarked crossroads. How should you deal with this type of junction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Accelerate looking to the left",
          "bn": "Accelerate looking to the left"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Slow down and look both ways",
          "bn": "Slow down and look both ways"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Slow down and keep to the right",
          "bn": "Slow down and keep to the right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Accelerate and keep to the middle",
          "bn": "Accelerate and keep to the middle"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q365",
    "categoryId": "c5",
    "text": {
      "en": "Some two-way roads are divided into three lanes. Why are these particularly dangerous?",
      "bn": "Some two-way roads are divided into three lanes. Why are these particularly dangerous?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Traffic can travel faster in poor weather conditions",
          "bn": "Traffic can travel faster in poor weather conditions"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Traffic uses the middle lane for emergencies only",
          "bn": "Traffic uses the middle lane for emergencies only"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Traffic can overtake on the left",
          "bn": "Traffic can overtake on the left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Traffic in both directions can use the middle lane to overtake",
          "bn": "Traffic in both directions can use the middle lane to overtake"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q366",
    "categoryId": "c8",
    "text": {
      "en": "You are following a large lorry on a wet road. Spray makes it difficult to see. You should:",
      "bn": "You are following a large lorry on a wet road. Spray makes it difficult to see. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Put your headlights on full beam",
          "bn": "Put your headlights on full beam"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Drop back until you can see better",
          "bn": "Drop back until you can see better"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep close to the lorry, away from the spray",
          "bn": "Keep close to the lorry, away from the spray"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Speed up and overtake quickly",
          "bn": "Speed up and overtake quickly"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa80d3f81318.jpg"
  },
  {
    "id": "q367",
    "categoryId": "c11",
    "text": {
      "en": "Front and rear fog lights MUST be:",
      "bn": "Front and rear fog lights MUST be:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Switched of if visibility is not seriously reduced",
          "bn": "Switched of if visibility is not seriously reduced"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Used outside built up areas only",
          "bn": "Used outside built up areas only"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Switched off in night-time fog",
          "bn": "Switched off in night-time fog"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Connected to an audible warning signal",
          "bn": "Connected to an audible warning signal"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q368",
    "categoryId": "c10",
    "text": {
      "en": "You want to turn from a junction but your view is partly restricted by parked vehicles. What should you do?",
      "bn": "You want to turn from a junction but your view is partly restricted by parked vehicles. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Move out quickly, but be prepared to stop",
          "bn": "Move out quickly, but be prepared to stop"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop, get out and look along the main road to check",
          "bn": "Stop, get out and look along the main road to check"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stop, then move slowly forward until you have a clear view",
          "bn": "Stop, then move slowly forward until you have a clear view"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sound your horn and pull out if there is no reply",
          "bn": "Sound your horn and pull out if there is no reply"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q369",
    "categoryId": "c9",
    "text": {
      "en": "On a three-lane motorway which lane should you normally use?",
      "bn": "On a three-lane motorway which lane should you normally use?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Centre",
          "bn": "Centre"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Left",
          "bn": "Left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Either the right or centre",
          "bn": "Either the right or centre"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Right",
          "bn": "Right"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q370",
    "categoryId": "c11",
    "text": {
      "en": "You are dazzled at night by the lights of the vehicle behind you. You should:",
      "bn": "You are dazzled at night by the lights of the vehicle behind you. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Set your mirror to dazzle the other driver",
          "bn": "Set your mirror to dazzle the other driver"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Set your mirror to anti-dazzle",
          "bn": "Set your mirror to anti-dazzle"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake sharply to a stop",
          "bn": "Brake sharply to a stop"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Switch your rear lights on and off",
          "bn": "Switch your rear lights on and off"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q371",
    "categoryId": "c11",
    "text": {
      "en": "At night, you are dazzled by headlights coming towards you. You should:",
      "bn": "At night, you are dazzled by headlights coming towards you. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slow down or stop",
          "bn": "Slow down or stop"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Switch on your main beam headlights",
          "bn": "Switch on your main beam headlights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Put your hand over your eyes",
          "bn": "Put your hand over your eyes"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Pull down your sun visor",
          "bn": "Pull down your sun visor"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q372",
    "categoryId": "c11",
    "text": {
      "en": "Fog lights should be used ONLY when",
      "bn": "Fog lights should be used ONLY when"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Visibility is seriously reduced",
          "bn": "Visibility is seriously reduced"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Driving after midnight",
          "bn": "Driving after midnight"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "In very light rain",
          "bn": "In very light rain"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Daylight is fading",
          "bn": "Daylight is fading"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q373",
    "categoryId": "c6",
    "text": {
      "en": "You are about to reverse into a side road and a pedestrian wishes to cross behind you. You should:",
      "bn": "You are about to reverse into a side road and a pedestrian wishes to cross behind you. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Give way to the pedestrian",
          "bn": "Give way to the pedestrian"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Wave to the pedestrian to stop",
          "bn": "Wave to the pedestrian to stop"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Wave to the pedestrian to cross",
          "bn": "Wave to the pedestrian to cross"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Reverse before the pedestrian starts to cross",
          "bn": "Reverse before the pedestrian starts to cross"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q374",
    "categoryId": "c4",
    "text": {
      "en": "What is the maximum speed limit in a built up area unless indicated otherwise?",
      "bn": "What is the maximum speed limit in a built up area unless indicated otherwise?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "60mph",
          "bn": "60mph"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "50mph",
          "bn": "50mph"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "40mph",
          "bn": "40mph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "30mph",
          "bn": "30mph"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q375",
    "categoryId": "c6",
    "text": {
      "en": "Motorcyclists are particularly vulnerable",
      "bn": "Motorcyclists are particularly vulnerable"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When moving off",
          "bn": "When moving off"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "On dual carriageways",
          "bn": "On dual carriageways"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When approaching junctions",
          "bn": "When approaching junctions"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "On motorways",
          "bn": "On motorways"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q376",
    "categoryId": "c6",
    "text": {
      "en": "Motorcyclists are more at risk to be injured from other road users because they",
      "bn": "Motorcyclists are more at risk to be injured from other road users because they"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Are less experienced that other drivers",
          "bn": "Are less experienced that other drivers"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Are more difficult to see than other drivers",
          "bn": "Are more difficult to see than other drivers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Are always faster than other drivers",
          "bn": "Are always faster than other drivers"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Are more likely to break down than other motorists",
          "bn": "Are more likely to break down than other motorists"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q377",
    "categoryId": "c10",
    "text": {
      "en": "You are approaching a right-hand bend. You should:",
      "bn": "You are approaching a right-hand bend. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep well to the right to avoid anything in the gutter",
          "bn": "Keep well to the right to avoid anything in the gutter"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep well to the left as it makes the bend faster",
          "bn": "Keep well to the left as it makes the bend faster"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep well to the left for a better view around the bend",
          "bn": "Keep well to the left for a better view around the bend"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Keep well to the right to make the bend less sharp",
          "bn": "Keep well to the right to make the bend less sharp"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa80fd951c36.jpg"
  },
  {
    "id": "q378",
    "categoryId": "c6",
    "text": {
      "en": "How should you overtake horse riders?",
      "bn": "How should you overtake horse riders?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive slowly and leave plenty of room",
          "bn": "Drive slowly and leave plenty of room"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Speed is not important but allow plenty of room",
          "bn": "Speed is not important but allow plenty of room"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Use your horn just once to warn them",
          "bn": "Use your horn just once to warn them"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q379",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this sign?",
      "bn": "What is the meaning of this sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Humpback bridge ahead",
          "bn": "Humpback bridge ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Toll bridge ahead",
          "bn": "Toll bridge ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Road ahead closed",
          "bn": "Road ahead closed"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Opening or swing bridge ahead",
          "bn": "Opening or swing bridge ahead"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa810d9262c4.jpg"
  },
  {
    "id": "q380",
    "categoryId": "c10",
    "text": {
      "en": "A learner driver you are following stalls at a junction. What should you do?",
      "bn": "A learner driver you are following stalls at a junction. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Shout instructions",
          "bn": "Shout instructions"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Sound your horn and flash your lights",
          "bn": "Sound your horn and flash your lights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Steer around them and drive on",
          "bn": "Steer around them and drive on"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Be patient and wait for them to move on",
          "bn": "Be patient and wait for them to move on"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q381",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this sign?",
      "bn": "What is the meaning of this sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Minimum speed 20 mph",
          "bn": "Minimum speed 20 mph"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Entry into a 20 mph zone",
          "bn": "Entry into a 20 mph zone"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "End of a 20 mph zone",
          "bn": "End of a 20 mph zone"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa8124ecad08.jpg"
  },
  {
    "id": "q382",
    "categoryId": "c10",
    "text": {
      "en": "You may only enter a box junction when:",
      "bn": "You may only enter a box junction when:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "There are less than two vehicles in front of you",
          "bn": "There are less than two vehicles in front of you"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The traffic lights show green",
          "bn": "The traffic lights show green"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "You need to turn left",
          "bn": "You need to turn left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Your exit road is clear",
          "bn": "Your exit road is clear"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa81297e4825.jpg"
  },
  {
    "id": "q383",
    "categoryId": "c10",
    "text": {
      "en": "To answer your mobile phone when driving, you should:",
      "bn": "To answer your mobile phone when driving, you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stop in a proper and convenient place",
          "bn": "Stop in a proper and convenient place"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Slow down and allow others to overtake",
          "bn": "Slow down and allow others to overtake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reduce your speed wherever you are",
          "bn": "Reduce your speed wherever you are"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Keep the call time to a minimum",
          "bn": "Keep the call time to a minimum"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q384",
    "categoryId": "c10",
    "text": {
      "en": "What is the most likely cause of high fuel consumption?",
      "bn": "What is the most likely cause of high fuel consumption?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Harsh braking and accelerating",
          "bn": "Harsh braking and accelerating"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Poor steering control",
          "bn": "Poor steering control"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Accelerating around bends",
          "bn": "Accelerating around bends"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Staying in high gears",
          "bn": "Staying in high gears"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q385",
    "categoryId": "c6",
    "text": {
      "en": "Why should you particularly look for motorcyclists and cyclists at any junction?",
      "bn": "Why should you particularly look for motorcyclists and cyclists at any junction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "They are harder to see",
          "bn": "They are harder to see"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "They might not see you turn",
          "bn": "They might not see you turn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They nay want to turn into the side road",
          "bn": "They nay want to turn into the side road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "They may slow down to let you turn",
          "bn": "They may slow down to let you turn"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q386",
    "categoryId": "c10",
    "text": {
      "en": "Unbalanced wheels on a car may cause",
      "bn": "Unbalanced wheels on a car may cause"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Poor acceleration",
          "bn": "Poor acceleration"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Poor braking",
          "bn": "Poor braking"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The tyres to wear out",
          "bn": "The tyres to wear out"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The steering to vibrate",
          "bn": "The steering to vibrate"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q387",
    "categoryId": "c3",
    "text": {
      "en": "Which one is adversely affected if the tyres are under-inflated?",
      "bn": "Which one is adversely affected if the tyres are under-inflated?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Accelerating",
          "bn": "Accelerating"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Braking",
          "bn": "Braking"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Changing gear",
          "bn": "Changing gear"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Parking",
          "bn": "Parking"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q388",
    "categoryId": "c12",
    "text": {
      "en": "A provisional licence holder must not drive a motor car",
      "bn": "A provisional licence holder must not drive a motor car"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "With passengers",
          "bn": "With passengers"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "At night",
          "bn": "At night"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Alone",
          "bn": "Alone"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "On a dual carriageway",
          "bn": "On a dual carriageway"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q389",
    "categoryId": "c11",
    "text": {
      "en": "At a crossroads there are no signs or road markings. Two vehicles approach. Which has priority?",
      "bn": "At a crossroads there are no signs or road markings. Two vehicles approach. Which has priority?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Oncoming vehicles turning right",
          "bn": "Oncoming vehicles turning right"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The vehicle travelling the fastest",
          "bn": "The vehicle travelling the fastest"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Vehicles approaching from the right",
          "bn": "Vehicles approaching from the right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Neither of the vehicles",
          "bn": "Neither of the vehicles"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q390",
    "categoryId": "c6",
    "text": {
      "en": "It is very windy. You are behind a motorcyclist who is overtaking a high-sided vehicle. What should you do?",
      "bn": "It is very windy. You are behind a motorcyclist who is overtaking a high-sided vehicle. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Overtake the motorcyclist immediately",
          "bn": "Overtake the motorcyclist immediately"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep well back",
          "bn": "Keep well back"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep close to the motorcyclist",
          "bn": "Keep close to the motorcyclist"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stay level with the motorcyclist",
          "bn": "Stay level with the motorcyclist"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q391",
    "categoryId": "c13",
    "text": {
      "en": "At an accident you suspect a casualty has back injuries. The area is safe. You should:",
      "bn": "At an accident you suspect a casualty has back injuries. The area is safe. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Offer them a drink",
          "bn": "Offer them a drink"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Raise their legs",
          "bn": "Raise their legs"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Offer them a cigarette",
          "bn": "Offer them a cigarette"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Not move them",
          "bn": "Not move them"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q392",
    "categoryId": "c6",
    "text": {
      "en": "You should NEVER attempt to overtake a cyclist",
      "bn": "You should NEVER attempt to overtake a cyclist"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Just before you turn left",
          "bn": "Just before you turn left"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "On a one-way street",
          "bn": "On a one-way street"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Just before you turn right",
          "bn": "Just before you turn right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "On a dual carriageway",
          "bn": "On a dual carriageway"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q393",
    "categoryId": "c7",
    "text": {
      "en": "You are parked in a busy high street. What is the safest way to turn your vehicle around so you can go the opposite way?",
      "bn": "You are parked in a busy high street. What is the safest way to turn your vehicle around so you can go the opposite way?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Do a U-turn",
          "bn": "Do a U-turn"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Get someone to stop the traffic",
          "bn": "Get someone to stop the traffic"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drive into a side road and reverse into the main road",
          "bn": "Drive into a side road and reverse into the main road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Find a quiet side road to turn around in",
          "bn": "Find a quiet side road to turn around in"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q394",
    "categoryId": "c10",
    "text": {
      "en": "You are driving on a multi-lane carriageway. By mistake, you go past the exit that you wanted to take. You should:",
      "bn": "You are driving on a multi-lane carriageway. By mistake, you go past the exit that you wanted to take. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Carefully reverse on the hard shoulder",
          "bn": "Carefully reverse on the hard shoulder"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Carefully reverse in the left-hand lane",
          "bn": "Carefully reverse in the left-hand lane"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Carry on to the next exit",
          "bn": "Carry on to the next exit"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Make a U-turn at the next gap in the central reservation",
          "bn": "Make a U-turn at the next gap in the central reservation"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa817048ee9c.jpg"
  },
  {
    "id": "q395",
    "categoryId": "c8",
    "text": {
      "en": "You are driving in fog. Why should you keep well back from the vehicle in front?",
      "bn": "You are driving in fog. Why should you keep well back from the vehicle in front?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "In case its brake lights dazzle you",
          "bn": "In case its brake lights dazzle you"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "In case its fog lights dazzle you",
          "bn": "In case its fog lights dazzle you"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "In case it changes direction suddenly",
          "bn": "In case it changes direction suddenly"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "In case it stops suddenly",
          "bn": "In case it stops suddenly"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa817542f379.jpg"
  },
  {
    "id": "q396",
    "categoryId": "c10",
    "text": {
      "en": "When driving through a ford or floodwater, what gear should you be in?",
      "bn": "When driving through a ford or floodwater, what gear should you be in?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Third",
          "bn": "Third"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "First or second",
          "bn": "First or second"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Fourth",
          "bn": "Fourth"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Fifth",
          "bn": "Fifth"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q397",
    "categoryId": "c10",
    "text": {
      "en": "You are waiting to emerge from a minor road. A large vehicle is approaching from the right. You have time to turn, but you should wait. Why?",
      "bn": "You are waiting to emerge from a minor road. A large vehicle is approaching from the right. You have time to turn, but you should wait. Why?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The large vehicle can easily hide an overtaking vehicle",
          "bn": "The large vehicle can easily hide an overtaking vehicle"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The large vehicle can easily hide vehicles from the left",
          "bn": "The large vehicle can easily hide vehicles from the left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The large vehicle is difficult to steer in a straight line",
          "bn": "The large vehicle is difficult to steer in a straight line"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The large vehicle can turn suddenly",
          "bn": "The large vehicle can turn suddenly"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q398",
    "categoryId": "c3",
    "text": {
      "en": "How can you use the engine of your vehicle as a brake?",
      "bn": "How can you use the engine of your vehicle as a brake?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "By changing to a higher gear",
          "bn": "By changing to a higher gear"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "By changing to a lower gear",
          "bn": "By changing to a lower gear"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "By selecting reverse gear",
          "bn": "By selecting reverse gear"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "By selecting neutral gear",
          "bn": "By selecting neutral gear"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q399",
    "categoryId": "c11",
    "text": {
      "en": "What does a sign with a brown background show?",
      "bn": "What does a sign with a brown background show?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Minor routes",
          "bn": "Minor routes"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Tourist directions",
          "bn": "Tourist directions"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Primary roads",
          "bn": "Primary roads"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Motorway routes",
          "bn": "Motorway routes"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa818f18f4c2.jpg"
  },
  {
    "id": "q400",
    "categoryId": "c8",
    "text": {
      "en": "You are driving in very wet weather. Your vehicle begins to slide. This affect is called:",
      "bn": "You are driving in very wet weather. Your vehicle begins to slide. This affect is called:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Aquaplaning",
          "bn": "Aquaplaning"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Weaving",
          "bn": "Weaving"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Hosing",
          "bn": "Hosing"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Fading",
          "bn": "Fading"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q401",
    "categoryId": "c7",
    "text": {
      "en": "A long, heavily laden lorry is taking a long time to overtake you. What should you do?",
      "bn": "A long, heavily laden lorry is taking a long time to overtake you. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slow down",
          "bn": "Slow down"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Hold you speed",
          "bn": "Hold you speed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Change direction",
          "bn": "Change direction"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Speed up",
          "bn": "Speed up"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q402",
    "categoryId": "c11",
    "text": {
      "en": "You are driving on a dual carriageway and the car ahead shows its hazard lights for a short time. This tells you that:",
      "bn": "You are driving on a dual carriageway and the car ahead shows its hazard lights for a short time. This tells you that:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The other car is going to change lanes",
          "bn": "The other car is going to change lanes"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Traffic ahead is slowing or stopping suddenly",
          "bn": "Traffic ahead is slowing or stopping suddenly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "There is a police speed check up ahead",
          "bn": "There is a police speed check up ahead"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The driver wants you to overtake",
          "bn": "The driver wants you to overtake"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q403",
    "categoryId": "c11",
    "text": {
      "en": "You see this sign ahead. You should expect the road to:",
      "bn": "You see this sign ahead. You should expect the road to:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Bend sharply to the right",
          "bn": "Bend sharply to the right"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Bend sharply to the left",
          "bn": "Bend sharply to the left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Go steeply downhill",
          "bn": "Go steeply downhill"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Go steeply downhill",
          "bn": "Go steeply downhill"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa867e7b6301.jpg"
  },
  {
    "id": "q404",
    "categoryId": "c4",
    "text": {
      "en": "Freezing conditions will affect the distance it takes you to come to a stop. You should expect stopping distances to increase by up to",
      "bn": "Freezing conditions will affect the distance it takes you to come to a stop. You should expect stopping distances to increase by up to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Ten (10) times",
          "bn": "Ten (10) times"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Three (3) times",
          "bn": "Three (3) times"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Two (2) times",
          "bn": "Two (2) times"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Five (5) times",
          "bn": "Five (5) times"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q405",
    "categoryId": "c11",
    "text": {
      "en": "At a pelican crossing the flashing amber light means you MUST",
      "bn": "At a pelican crossing the flashing amber light means you MUST"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Give way to pedestrians waiting to cross",
          "bn": "Give way to pedestrians waiting to cross"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop and wait for the red light",
          "bn": "Stop and wait for the red light"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stop and wait for the green light",
          "bn": "Stop and wait for the green light"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Give way to pedestrians already on the crossing",
          "bn": "Give way to pedestrians already on the crossing"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q406",
    "categoryId": "c8",
    "text": {
      "en": "The most important reason for having a properly adjusted head restraint is to",
      "bn": "The most important reason for having a properly adjusted head restraint is to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Make you more comfortable",
          "bn": "Make you more comfortable"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Help you to relax",
          "bn": "Help you to relax"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Help you to maintain your driving position",
          "bn": "Help you to maintain your driving position"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Help you to avoid neck injury",
          "bn": "Help you to avoid neck injury"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q407",
    "categoryId": "c10",
    "text": {
      "en": "What is the nearest you can park your vehicle to a junction?",
      "bn": "What is the nearest you can park your vehicle to a junction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "20 meters",
          "bn": "20 meters"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "22 meters",
          "bn": "22 meters"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "15 meters",
          "bn": "15 meters"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "10 meters",
          "bn": "10 meters"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q408",
    "categoryId": "c11",
    "text": {
      "en": "When may you use hazard warning lights?",
      "bn": "When may you use hazard warning lights?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To park alongside another car",
          "bn": "To park alongside another car"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When you are being towed",
          "bn": "When you are being towed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To park on double yellow lines",
          "bn": "To park on double yellow lines"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When you have broken down",
          "bn": "When you have broken down"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q409",
    "categoryId": "c10",
    "text": {
      "en": "Road humps, chicanes, and road narrowing's are",
      "bn": "Road humps, chicanes, and road narrowing's are"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "At toll-bridge approaches only",
          "bn": "At toll-bridge approaches only"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Used to increase traffic speed",
          "bn": "Used to increase traffic speed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Always at major road works",
          "bn": "Always at major road works"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Traffic calming measures",
          "bn": "Traffic calming measures"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q410",
    "categoryId": "c11",
    "text": {
      "en": "The driver of the car in front is giving this signal. What does it mean?",
      "bn": "The driver of the car in front is giving this signal. What does it mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The drivers intends to turn left",
          "bn": "The drivers intends to turn left"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The driver is slowing down",
          "bn": "The driver is slowing down"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The driver intends to turn right",
          "bn": "The driver intends to turn right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The driver wishes to overtake",
          "bn": "The driver wishes to overtake"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa869333d237.jpg"
  },
  {
    "id": "q411",
    "categoryId": "c11",
    "text": {
      "en": "You are driving in heavy rain. Your steering suddenly becomes very light. You should",
      "bn": "You are driving in heavy rain. Your steering suddenly becomes very light. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Ease off the accelerator",
          "bn": "Ease off the accelerator"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Steer towards the side of the road",
          "bn": "Steer towards the side of the road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake firmly to reduce speed",
          "bn": "Brake firmly to reduce speed"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Apply gentle acceleration",
          "bn": "Apply gentle acceleration"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q412",
    "categoryId": "c11",
    "text": {
      "en": "What does the sign mean?",
      "bn": "What does the sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No pedestrians",
          "bn": "No pedestrians"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Route for pedestrians",
          "bn": "Route for pedestrians"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Pedestrians in the road ahead",
          "bn": "Pedestrians in the road ahead"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Pedestrian crossing",
          "bn": "Pedestrian crossing"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q413",
    "categoryId": "c11",
    "text": {
      "en": "You see this sign ahead. It means:",
      "bn": "You see this sign ahead. It means:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Waiting restrictions apply",
          "bn": "Waiting restrictions apply"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "No stopping",
          "bn": "No stopping"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No entry",
          "bn": "No entry"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "National speed limit applies",
          "bn": "National speed limit applies"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa869d1bc795.jpg"
  },
  {
    "id": "q414",
    "categoryId": "c10",
    "text": {
      "en": "Coasting the car:",
      "bn": "Coasting the car:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Reduces the driver’s control",
          "bn": "Reduces the driver’s control"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Makes steering easier",
          "bn": "Makes steering easier"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Improves the driver’s control",
          "bn": "Improves the driver’s control"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Uses more fuel",
          "bn": "Uses more fuel"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q415",
    "categoryId": "c11",
    "text": {
      "en": "You are driving behind a long vehicle. It approaches a crossroads and signals left, but moves out to the right. You should:-",
      "bn": "You are driving behind a long vehicle. It approaches a crossroads and signals left, but moves out to the right. You should:-"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Assume the signal is wrong and it is really turning right",
          "bn": "Assume the signal is wrong and it is really turning right"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Overtake as it starts to slow down",
          "bn": "Overtake as it starts to slow down"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Get closer in order to pass it quickly",
          "bn": "Get closer in order to pass it quickly"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stay well back and give it room",
          "bn": "Stay well back and give it room"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa86d643e914.jpg"
  },
  {
    "id": "q416",
    "categoryId": "c4",
    "text": {
      "en": "You are driving in traffic at the speed limit for the road. The driver behind is going to overtake. You should:",
      "bn": "You are driving in traffic at the speed limit for the road. The driver behind is going to overtake. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Move closer to the car ahead, so the driver behind has no room to overtake",
          "bn": "Move closer to the car ahead, so the driver behind has no room to overtake"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep a steady course and allow the driver behind to overtake",
          "bn": "Keep a steady course and allow the driver behind to overtake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Accelerate to get away from the driver behind",
          "bn": "Accelerate to get away from the driver behind"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Wave the driver behind to overtake when it is safe",
          "bn": "Wave the driver behind to overtake when it is safe"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "Safety is the 1st priority, at the same time try to keep a smooth traffic flow and give room for others ",
      "bn": "Safety is the 1st priority, at the same time try to keep a smooth traffic flow and give room for others "
    }
  },
  {
    "id": "q417",
    "categoryId": "c10",
    "text": {
      "en": "You are waiting in a traffic queue at night. To avoid dazzling the drivers behind, you should:",
      "bn": "You are waiting in a traffic queue at night. To avoid dazzling the drivers behind, you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Apply the footbrake only",
          "bn": "Apply the footbrake only"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Switch off your headlights",
          "bn": "Switch off your headlights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Use both the handbrake and footbrake",
          "bn": "Use both the handbrake and footbrake"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Apply the handbrake only",
          "bn": "Apply the handbrake only"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "The brake light will be switched on when using the footbrake ",
      "bn": "The brake light will be switched on when using the footbrake "
    }
  },
  {
    "id": "q418",
    "categoryId": "c6",
    "text": {
      "en": "A pedestrian with a white stick and red band is",
      "bn": "A pedestrian with a white stick and red band is"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Deaf and dumb",
          "bn": "Deaf and dumb"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Over 65 years old",
          "bn": "Over 65 years old"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Blind only",
          "bn": "Blind only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Deaf and blind",
          "bn": "Deaf and blind"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q419",
    "categoryId": "c13",
    "text": {
      "en": "You arrive at the scene of a motorcycle accident and the rider is injured. When should the helmet be removed?",
      "bn": "You arrive at the scene of a motorcycle accident and the rider is injured. When should the helmet be removed?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Always straight away.",
          "bn": "Always straight away."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Only when it is essential.",
          "bn": "Only when it is essential."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Always, unless they are in shock.",
          "bn": "Always, unless they are in shock."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Only when the motorcyclist asks",
          "bn": "Only when the motorcyclist asks"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "It is important not to remove their helmet unless it is necessary to do so to keep them alive ",
      "bn": "It is important not to remove their helmet unless it is necessary to do so to keep them alive "
    }
  },
  {
    "id": "q420",
    "categoryId": "c7",
    "text": {
      "en": "You are on a busy main road and find that you are in a wrong direction. What should you do?",
      "bn": "You are on a busy main road and find that you are in a wrong direction. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Turn round in a side road",
          "bn": "Turn round in a side road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Turn into a side road on the road on the right and reverse into the main road.",
          "bn": "Turn into a side road on the road on the right and reverse into the main road."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Make a ‘three point’ turn in the main road",
          "bn": "Make a ‘three point’ turn in the main road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Make a U-turn in the main road",
          "bn": "Make a U-turn in the main road"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q421",
    "categoryId": "c10",
    "text": {
      "en": "What is the safest way to use a mobile phone in a car?",
      "bn": "What is the safest way to use a mobile phone in a car?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive slowly on a quiet road",
          "bn": "Drive slowly on a quiet road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Direct your call thought the operator",
          "bn": "Direct your call thought the operator"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Find a suitable place to stop",
          "bn": "Find a suitable place to stop"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Use hands-free equipment",
          "bn": "Use hands-free equipment"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "Using a mobile phone while driving will make you less concentrate on the road, it is a dangerous practice ",
      "bn": "Using a mobile phone while driving will make you less concentrate on the road, it is a dangerous practice "
    }
  },
  {
    "id": "q422",
    "categoryId": "c7",
    "text": {
      "en": "Planning your journey to avoid busy times has a number of advantages. One of these is",
      "bn": "Planning your journey to avoid busy times has a number of advantages. One of these is"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Your journey will take longer",
          "bn": "Your journey will take longer"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Your stress levels will be greater",
          "bn": "Your stress levels will be greater"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "You will cause more pollution",
          "bn": "You will cause more pollution"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "You will have a more pleasant journey",
          "bn": "You will have a more pleasant journey"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q423",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Two-way traffic ahead",
          "bn": "Two-way traffic ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You have priority over vehicles from the opposite direction",
          "bn": "You have priority over vehicles from the opposite direction"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No overtaking",
          "bn": "No overtaking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "You are entering a one way street",
          "bn": "You are entering a one way street"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa86ff8065b7.jpg"
  },
  {
    "id": "q424",
    "categoryId": "c1",
    "text": {
      "en": "How does alcohol affect your driving?",
      "bn": "How does alcohol affect your driving?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "It improves your coordination",
          "bn": "It improves your coordination"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "It reduces your concentration",
          "bn": "It reduces your concentration"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "It speeds up your reactions",
          "bn": "It speeds up your reactions"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "It increases your awareness",
          "bn": "It increases your awareness"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q425",
    "categoryId": "c10",
    "text": {
      "en": "You are driving on an icy road. How can you avoid wheel spin?",
      "bn": "You are driving on an icy road. How can you avoid wheel spin?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Use the handbrake if the wheels start to slip",
          "bn": "Use the handbrake if the wheels start to slip"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Drive in a low gear at all times",
          "bn": "Drive in a low gear at all times"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drive at a slow speed in as high gear as possible",
          "bn": "Drive at a slow speed in as high gear as possible"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Brake gently and repeatedly",
          "bn": "Brake gently and repeatedly"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q426",
    "categoryId": "c10",
    "text": {
      "en": "You want to turn right from a main road into a side road. Just before you turn you should",
      "bn": "You want to turn right from a main road into a side road. Just before you turn you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Select first gear",
          "bn": "Select first gear"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop and set the handbrake",
          "bn": "Stop and set the handbrake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Cancel your right-turn signal",
          "bn": "Cancel your right-turn signal"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Check for traffic overtaking on your right",
          "bn": "Check for traffic overtaking on your right"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q427",
    "categoryId": "c10",
    "text": {
      "en": "What is the nearest you may park to a junction?",
      "bn": "What is the nearest you may park to a junction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "12 meters (39 feet)",
          "bn": "12 meters (39 feet)"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "10 meters (32 feet)",
          "bn": "10 meters (32 feet)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "15 meters (49 feet)",
          "bn": "15 meters (49 feet)"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "20 meters (66 feet)",
          "bn": "20 meters (66 feet)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "This is to allow drivers emerging from, or turning into, the junction a clear view of the road they are joining. ",
      "bn": "This is to allow drivers emerging from, or turning into, the junction a clear view of the road they are joining. "
    }
  },
  {
    "id": "q428",
    "categoryId": "c10",
    "text": {
      "en": "A flashing green beacon on a vehicle means",
      "bn": "A flashing green beacon on a vehicle means"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Police on non-urgent duties",
          "bn": "Police on non-urgent duties"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Doctor on an emergency call",
          "bn": "Doctor on an emergency call"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Road safety patrol operating",
          "bn": "Road safety patrol operating"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Gritting in progress",
          "bn": "Gritting in progress"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q429",
    "categoryId": "c10",
    "text": {
      "en": "You have driven your car through a flood. What is the first thing you should do?",
      "bn": "You have driven your car through a flood. What is the first thing you should do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stop and check the tyres",
          "bn": "Stop and check the tyres"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop and dry the brakes",
          "bn": "Stop and dry the brakes"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Test your brakes",
          "bn": "Test your brakes"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Switch on your windscreen wipers",
          "bn": "Switch on your windscreen wipers"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q430",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Two-way traffic",
          "bn": "Two-way traffic"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You have priority",
          "bn": "You have priority"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No overtaking",
          "bn": "No overtaking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "No motor vehicles",
          "bn": "No motor vehicles"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa8726b58dc5.jpg"
  },
  {
    "id": "q431",
    "categoryId": "c10",
    "text": {
      "en": "What is the safest way to us a mobile phone in you vehicle?",
      "bn": "What is the safest way to us a mobile phone in you vehicle?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Direct your call through the operator",
          "bn": "Direct your call through the operator"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Drive slowly on a quiet road",
          "bn": "Drive slowly on a quiet road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Use hands-free equipment",
          "bn": "Use hands-free equipment"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Find a suitable place to stop",
          "bn": "Find a suitable place to stop"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q432",
    "categoryId": "c6",
    "text": {
      "en": "You are approaching two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?",
      "bn": "You are approaching two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Right",
          "bn": "Right"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Any direction",
          "bn": "Any direction"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Left",
          "bn": "Left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Straight ahead",
          "bn": "Straight ahead"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q433",
    "categoryId": "c11",
    "text": {
      "en": "Why are vehicles fitted with rear fog lights?",
      "bn": "Why are vehicles fitted with rear fog lights?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To be seen when driving at high speed",
          "bn": "To be seen when driving at high speed"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To warn drivers following closely to drop back",
          "bn": "To warn drivers following closely to drop back"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To make them more visible in thick fog",
          "bn": "To make them more visible in thick fog"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To use if broken down in a dangerous position",
          "bn": "To use if broken down in a dangerous position"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q434",
    "categoryId": "c6",
    "text": {
      "en": "You intend to turn right into a side road. Just before turning you should check for motorcyclists who may be:",
      "bn": "You intend to turn right into a side road. Just before turning you should check for motorcyclists who may be:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Emerging from the side road",
          "bn": "Emerging from the side road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Overtaking on your left",
          "bn": "Overtaking on your left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Overtaking on your right",
          "bn": "Overtaking on your right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Following you closely",
          "bn": "Following you closely"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q435",
    "categoryId": "c6",
    "text": {
      "en": "You intend to turn right into a side road. Just before turning you should check for motorcyclists who might be",
      "bn": "You intend to turn right into a side road. Just before turning you should check for motorcyclists who might be"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Emerging from the side road",
          "bn": "Emerging from the side road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Following you closely",
          "bn": "Following you closely"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Overtaking on your right",
          "bn": "Overtaking on your right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Overtaking you on the left",
          "bn": "Overtaking you on the left"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q436",
    "categoryId": "c10",
    "text": {
      "en": "Someone is waiting to cross at a zebra crossing. They are standing on the pavement. You should normally:",
      "bn": "Someone is waiting to cross at a zebra crossing. They are standing on the pavement. You should normally:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Go on quickly before they step onto the crossing",
          "bn": "Go on quickly before they step onto the crossing"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop, let them cross, wait patiently",
          "bn": "Stop, let them cross, wait patiently"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Ignore them as they are still on the pavement",
          "bn": "Ignore them as they are still on the pavement"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stop before you reach the zigzag lines and let them cross",
          "bn": "Stop before you reach the zigzag lines and let them cross"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q437",
    "categoryId": "c4",
    "text": {
      "en": "When are you permitted to exceed the maximum speed limit?",
      "bn": "When are you permitted to exceed the maximum speed limit?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Between midnight and 6 am",
          "bn": "Between midnight and 6 am"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "At no time",
          "bn": "At no time"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When overtaking",
          "bn": "When overtaking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When the road is clear",
          "bn": "When the road is clear"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q438",
    "categoryId": "c10",
    "text": {
      "en": "You must not reverse:",
      "bn": "You must not reverse:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Into a side road",
          "bn": "Into a side road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "In a built-up area",
          "bn": "In a built-up area"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "For longer than necessary",
          "bn": "For longer than necessary"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "For more than a car’s length",
          "bn": "For more than a car’s length"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q439",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign means?",
      "bn": "What does this sign means?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Turn left ahead",
          "bn": "Turn left ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Give way",
          "bn": "Give way"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "T-junction",
          "bn": "T-junction"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "No through road",
          "bn": "No through road"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa874b216d4d.jpg"
  },
  {
    "id": "q440",
    "categoryId": "c8",
    "text": {
      "en": "You are driving on a wet road and you have to stop your vehicle in an emergency. You should:",
      "bn": "You are driving on a wet road and you have to stop your vehicle in an emergency. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep both hands on the wheel",
          "bn": "Keep both hands on the wheel"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Apply the handbrake and footbrake together",
          "bn": "Apply the handbrake and footbrake together"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Select reverse gear",
          "bn": "Select reverse gear"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Give an arm signalin an emergency, you will brake hard on the footbrake, which most likely will cause skidding on a wet road. To have a better control of your vehicle, you should keep both of your hands on the steering wheel.",
          "bn": "Give an arm signalin an emergency, you will brake hard on the footbrake, which most likely will cause skidding on a wet road. To have a better control of your vehicle, you should keep both of your hands on the steering wheel."
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q441",
    "categoryId": "c6",
    "text": {
      "en": "You are driving along a narrow country road. When passing the cyclist you should drive",
      "bn": "You are driving along a narrow country road. When passing the cyclist you should drive"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slowly, leaving plenty of room",
          "bn": "Slowly, leaving plenty of room"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Quickly, leaving plenty of room",
          "bn": "Quickly, leaving plenty of room"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Quickly, sounding the horn as you pass",
          "bn": "Quickly, sounding the horn as you pass"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Slowly, sounding the horn as you pass",
          "bn": "Slowly, sounding the horn as you pass"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "Cyclists are more vulnerable in the case. be patient, stay safe, and with courtesy ",
      "bn": "Cyclists are more vulnerable in the case. be patient, stay safe, and with courtesy "
    }
  },
  {
    "id": "q442",
    "categoryId": "c11",
    "text": {
      "en": "You are driving behind a large vehicle. It signals left but steers to the right. You should:",
      "bn": "You are driving behind a large vehicle. It signals left but steers to the right. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive on, keeping to the left",
          "bn": "Drive on, keeping to the left"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Hold your speed and sound your horn",
          "bn": "Hold your speed and sound your horn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Overtake on the right of it",
          "bn": "Overtake on the right of it"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Slow down and let the vehicle turn",
          "bn": "Slow down and let the vehicle turn"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "Large vehicle need more space to make a turn ",
      "bn": "Large vehicle need more space to make a turn "
    }
  },
  {
    "id": "q443",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep in one lane",
          "bn": "Keep in one lane"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Do not overtake",
          "bn": "Do not overtake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Give way to oncoming traffic",
          "bn": "Give way to oncoming traffic"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Form two lanes",
          "bn": "Form two lanes"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa875c2f27f9.png"
  },
  {
    "id": "q444",
    "categoryId": "c6",
    "text": {
      "en": "It is very windy. You are behind a motorcyclist who is overtaking a high vehicle. What should you do?",
      "bn": "It is very windy. You are behind a motorcyclist who is overtaking a high vehicle. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep close to the motorcyclist",
          "bn": "Keep close to the motorcyclist"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stay level with the motorcycle",
          "bn": "Stay level with the motorcycle"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Overtake the motorcyclist immediately",
          "bn": "Overtake the motorcyclist immediately"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Keep well back",
          "bn": "Keep well back"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa87695398b6.jpg"
  },
  {
    "id": "q445",
    "categoryId": "c6",
    "text": {
      "en": "You see a group of horse riders as you approach a roundabout. They are indicating right but keeping well to the left. You should:",
      "bn": "You see a group of horse riders as you approach a roundabout. They are indicating right but keeping well to the left. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep close of them",
          "bn": "Keep close of them"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Cut in front of them",
          "bn": "Cut in front of them"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Proceed as normal",
          "bn": "Proceed as normal"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stay well back",
          "bn": "Stay well back"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa878843f626.jpg"
  },
  {
    "id": "q446",
    "categoryId": "c4",
    "text": {
      "en": "While driving a vehicle, at what distance MUST you be able to read a number plate?",
      "bn": "While driving a vehicle, at what distance MUST you be able to read a number plate?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "10 meters (33 feet)",
          "bn": "10 meters (33 feet)"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "30 meters (98 feet)",
          "bn": "30 meters (98 feet)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "20.5 meters (67 feet)",
          "bn": "20.5 meters (67 feet)"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "15 meters (49 feet)",
          "bn": "15 meters (49 feet)"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q447",
    "categoryId": "c6",
    "text": {
      "en": "You should never attempt to overtake cyclists",
      "bn": "You should never attempt to overtake cyclists"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When approaching a roundabout",
          "bn": "When approaching a roundabout"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "On a right hand bend",
          "bn": "On a right hand bend"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Just before you turn left",
          "bn": "Just before you turn left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "On narrow road",
          "bn": "On narrow road"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q448",
    "categoryId": "c4",
    "text": {
      "en": "You are approaching a bend at a high speed. You should begin to brake.",
      "bn": "You are approaching a bend at a high speed. You should begin to brake."
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Before the bend",
          "bn": "Before the bend"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "After the bend",
          "bn": "After the bend"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "On the bend",
          "bn": "On the bend"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "After changing gears",
          "bn": "After changing gears"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q449",
    "categoryId": "c13",
    "text": {
      "en": "At an accident a casualty is unconscious but still breathing. You should only move them if",
      "bn": "At an accident a casualty is unconscious but still breathing. You should only move them if"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "There is further danger",
          "bn": "There is further danger"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Bystanders will help you to",
          "bn": "Bystanders will help you to"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "An ambulance is on its way",
          "bn": "An ambulance is on its way"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Bystanders advise you to",
          "bn": "Bystanders advise you to"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q450",
    "categoryId": "c4",
    "text": {
      "en": "Your overall stopping distance will be much longer when:",
      "bn": "Your overall stopping distance will be much longer when:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Driving on a very hot day",
          "bn": "Driving on a very hot day"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Driving in strong winds",
          "bn": "Driving in strong winds"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Driving in fog",
          "bn": "Driving in fog"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Driving in rain",
          "bn": "Driving in rain"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q451",
    "categoryId": "c10",
    "text": {
      "en": "Why should you make sure your indicators are cancelled after turning?",
      "bn": "Why should you make sure your indicators are cancelled after turning?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To avoid dazzling other road users",
          "bn": "To avoid dazzling other road users"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To avoid damage to the indicator relay",
          "bn": "To avoid damage to the indicator relay"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To avoid misleading other road users",
          "bn": "To avoid misleading other road users"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To avoid flattening the battery",
          "bn": "To avoid flattening the battery"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q452",
    "categoryId": "c5",
    "text": {
      "en": "Which of these, if allowed to get low, is dangerous?",
      "bn": "Which of these, if allowed to get low, is dangerous?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Antifreeze level",
          "bn": "Antifreeze level"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Battery water level",
          "bn": "Battery water level"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake fluid level",
          "bn": "Brake fluid level"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Radiator coolant level",
          "bn": "Radiator coolant level"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q453",
    "categoryId": "c12",
    "text": {
      "en": "A police officer asks to see your documents. You do not have them with you. You may be asked to take them to the police station with",
      "bn": "A police officer asks to see your documents. You do not have them with you. You may be asked to take them to the police station with"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "5 days",
          "bn": "5 days"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "7 days",
          "bn": "7 days"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "14 days",
          "bn": "14 days"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "21 days",
          "bn": "21 days"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q454",
    "categoryId": "c13",
    "text": {
      "en": "The age group most likely to be involved in road accidents is",
      "bn": "The age group most likely to be involved in road accidents is"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "46 to 55-year-olds",
          "bn": "46 to 55-year-olds"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "30 to 45-year-olds",
          "bn": "30 to 45-year-olds"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "55 to 66-year olds",
          "bn": "55 to 66-year olds"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "17 to 25-year-olds",
          "bn": "17 to 25-year-olds"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q455",
    "categoryId": "c10",
    "text": {
      "en": "You go to a social event and need to drive a short time after. What precautions should you take?",
      "bn": "You go to a social event and need to drive a short time after. What precautions should you take?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Avoid drinking alcohol on an empty stomach",
          "bn": "Avoid drinking alcohol on an empty stomach"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Avoid drinking alcohol completely",
          "bn": "Avoid drinking alcohol completely"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drink plenty of coffee after drinking alcohol",
          "bn": "Drink plenty of coffee after drinking alcohol"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drink plenty of milk before drinking alcohol",
          "bn": "Drink plenty of milk before drinking alcohol"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q456",
    "categoryId": "c4",
    "text": {
      "en": "In normal conditions the braking distance when travelling at 50 mph is",
      "bn": "In normal conditions the braking distance when travelling at 50 mph is"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "25 meters",
          "bn": "25 meters"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "38 meters",
          "bn": "38 meters"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "14 meters",
          "bn": "14 meters"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "16 meters",
          "bn": "16 meters"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q457",
    "categoryId": "c10",
    "text": {
      "en": "If you notice a strong smell of petrol as you are driving along you should",
      "bn": "If you notice a strong smell of petrol as you are driving along you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Expect it to stop in a few miles",
          "bn": "Expect it to stop in a few miles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop at a suitable place and investigate the problem",
          "bn": "Stop at a suitable place and investigate the problem"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Not worry, as it is only exhaust fumes",
          "bn": "Not worry, as it is only exhaust fumes"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Carry on at a reduced speed",
          "bn": "Carry on at a reduced speed"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q458",
    "categoryId": "c10",
    "text": {
      "en": "Which statement represents being in safe control of your vehicle?",
      "bn": "Which statement represents being in safe control of your vehicle?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "One hand on the steering wheel and the other simply hanging out of the window to catch the breeze and look cool or wave to friends.",
          "bn": "One hand on the steering wheel and the other simply hanging out of the window to catch the breeze and look cool or wave to friends."
        }
      },
      {
        "id": "b",
        "text": {
          "en": "One hand on the steering wheel and the other grasping the gear lever for the most part to facilitate instant gear changes.",
          "bn": "One hand on the steering wheel and the other grasping the gear lever for the most part to facilitate instant gear changes."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "One hand on the steering wheel and the other being used to hold a mobile phone.",
          "bn": "One hand on the steering wheel and the other being used to hold a mobile phone."
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Both hands on the steering wheel at all times , and only when a change of gear or operation of controls is necessary that one hand is taken off the steering wheel.",
          "bn": "Both hands on the steering wheel at all times , and only when a change of gear or operation of controls is necessary that one hand is taken off the steering wheel."
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q459",
    "categoryId": "c10",
    "text": {
      "en": "When emerging from a side road into a queue of traffic which cars can be especially difficult to see?",
      "bn": "When emerging from a side road into a queue of traffic which cars can be especially difficult to see?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Motorcycles",
          "bn": "Motorcycles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Cars",
          "bn": "Cars"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Milk floats",
          "bn": "Milk floats"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Tractors",
          "bn": "Tractors"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q460",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No motor vehicles",
          "bn": "No motor vehicles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Clearway (no stopping)",
          "bn": "Clearway (no stopping)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No overtaking",
          "bn": "No overtaking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Cars and motorcycles only",
          "bn": "Cars and motorcycles only"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa87caa86ae3.jpg"
  },
  {
    "id": "q461",
    "categoryId": "c10",
    "text": {
      "en": "When going straight ahead at a roundabout you should",
      "bn": "When going straight ahead at a roundabout you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Indicate left before leaving the roundabout",
          "bn": "Indicate left before leaving the roundabout"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Not indicate at any time",
          "bn": "Not indicate at any time"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Indicate left when approaching the roundabout",
          "bn": "Indicate left when approaching the roundabout"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Indicate right when approaching the roundabout",
          "bn": "Indicate right when approaching the roundabout"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q462",
    "categoryId": "c10",
    "text": {
      "en": "What is most likely to cause high fuel consumption?",
      "bn": "What is most likely to cause high fuel consumption?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Poor steering control",
          "bn": "Poor steering control"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Staying in high gears",
          "bn": "Staying in high gears"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Aggressive braking",
          "bn": "Aggressive braking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Driving above 50 mph",
          "bn": "Driving above 50 mph"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q463",
    "categoryId": "c14",
    "text": {
      "en": "A heavy load on your roof rack will:",
      "bn": "A heavy load on your roof rack will:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Make the steering lighter",
          "bn": "Make the steering lighter"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Reduce the stopping distance",
          "bn": "Reduce the stopping distance"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reduce stability",
          "bn": "Reduce stability"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Improve the road holding",
          "bn": "Improve the road holding"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q464",
    "categoryId": "c8",
    "text": {
      "en": "You are following a vehicle at a safe distance on a wet and slippery road. Another driver overtakes you and pulls into the gap you have left. What should you do?",
      "bn": "You are following a vehicle at a safe distance on a wet and slippery road. Another driver overtakes you and pulls into the gap you have left. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stay close to the other vehicle until it moves on",
          "bn": "Stay close to the other vehicle until it moves on"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Try to overtake safely as soon as you can",
          "bn": "Try to overtake safely as soon as you can"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drop back to regain a safe distance",
          "bn": "Drop back to regain a safe distance"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your headlights as a warning",
          "bn": "Flash your headlights as a warning"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q465",
    "categoryId": "c5",
    "text": {
      "en": "If you are turning left into a side road what hazards should you be especially aware of?",
      "bn": "If you are turning left into a side road what hazards should you be especially aware of?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Traffic congestion",
          "bn": "Traffic congestion"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pedestrians",
          "bn": "Pedestrians"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "One way street",
          "bn": "One way street"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Parked vehicles.",
          "bn": "Parked vehicles."
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q466",
    "categoryId": "c11",
    "text": {
      "en": "At a puffin crossing which light won't you see?",
      "bn": "At a puffin crossing which light won't you see?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Steady amber",
          "bn": "Steady amber"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Red",
          "bn": "Red"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Flashing amber",
          "bn": "Flashing amber"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Green",
          "bn": "Green"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q467",
    "categoryId": "c10",
    "text": {
      "en": "To avoid spilling after refueling, you should make sure that:",
      "bn": "To avoid spilling after refueling, you should make sure that:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "You have used a locking filler cap",
          "bn": "You have used a locking filler cap"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Your filler cap is securely fastened",
          "bn": "Your filler cap is securely fastened"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Your tank is only 3/4 full",
          "bn": "Your tank is only 3/4 full"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "You check your fuel gauge is working",
          "bn": "You check your fuel gauge is working"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q468",
    "categoryId": "c10",
    "text": {
      "en": "If you are following a car driven by an elderly driver, you should:",
      "bn": "If you are following a car driven by an elderly driver, you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stay close behind and drive carefully",
          "bn": "Stay close behind and drive carefully"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Expect the driver to drive badly",
          "bn": "Expect the driver to drive badly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Be aware that the driver’s reactions may not be as fast as yours",
          "bn": "Be aware that the driver’s reactions may not be as fast as yours"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your lights and overtake",
          "bn": "Flash your lights and overtake"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q469",
    "categoryId": "c4",
    "text": {
      "en": "In fast moving traffic a two (2) second gap may be enough only when conditions are:",
      "bn": "In fast moving traffic a two (2) second gap may be enough only when conditions are:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Foggy",
          "bn": "Foggy"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Dry",
          "bn": "Dry"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Damp",
          "bn": "Damp"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Wet",
          "bn": "Wet"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "When road is wet, the stopping distance will be doubled. So on a dry road a 2-second gap will be ok, but on a wet road, you should leave a 4-second gap. ",
      "bn": "When road is wet, the stopping distance will be doubled. So on a dry road a 2-second gap will be ok, but on a wet road, you should leave a 4-second gap. "
    }
  },
  {
    "id": "q470",
    "categoryId": "c14",
    "text": {
      "en": "Overloading your vehicle can seriously affect?",
      "bn": "Overloading your vehicle can seriously affect?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Your comfort",
          "bn": "Your comfort"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Your ability to change gears",
          "bn": "Your ability to change gears"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The steering",
          "bn": "The steering"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The Handling",
          "bn": "The Handling"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q471",
    "categoryId": "c11",
    "text": {
      "en": "You are going straight ahead at a roundabout. How should you signal?",
      "bn": "You are going straight ahead at a roundabout. How should you signal?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Signal right on the approach and then left to leave the roundabout",
          "bn": "Signal right on the approach and then left to leave the roundabout"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Signal left just after you pass the exit before the one you will take",
          "bn": "Signal left just after you pass the exit before the one you will take"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Signal left on the approach to the roundabout and keep the signal on until you leave",
          "bn": "Signal left on the approach to the roundabout and keep the signal on until you leave"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Signal left as you leave the roundabouts",
          "bn": "Signal left as you leave the roundabouts"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q472",
    "categoryId": "c11",
    "text": {
      "en": "You are dazzled by oncoming headlights when driving at night. What should you do?",
      "bn": "You are dazzled by oncoming headlights when driving at night. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slow down or stop",
          "bn": "Slow down or stop"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Flash your lights",
          "bn": "Flash your lights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake hard",
          "bn": "Brake hard"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drive faster past the oncoming car",
          "bn": "Drive faster past the oncoming car"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q473",
    "categoryId": "c3",
    "text": {
      "en": "It is essential that tyre pressures be checked regularly. When should this be done?",
      "bn": "It is essential that tyre pressures be checked regularly. When should this be done?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When tyres are hot",
          "bn": "When tyres are hot"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "After any length journey",
          "bn": "After any length journey"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "After travelling at high speed",
          "bn": "After travelling at high speed"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When tyres are cold",
          "bn": "When tyres are cold"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q474",
    "categoryId": "c9",
    "text": {
      "en": "You are turning right onto a dual carriageway. What should you do before emerging?",
      "bn": "You are turning right onto a dual carriageway. What should you do before emerging?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Position your vehicle well to the left of the side of the road",
          "bn": "Position your vehicle well to the left of the side of the road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Make sure that you leave enough room for a vehicle behind",
          "bn": "Make sure that you leave enough room for a vehicle behind"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stop, apply the handbrake then select a low gear",
          "bn": "Stop, apply the handbrake then select a low gear"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Check that the central reservation is wide enough for your vehicle",
          "bn": "Check that the central reservation is wide enough for your vehicle"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q475",
    "categoryId": "c10",
    "text": {
      "en": "You enter a road where there are road humps. You should:",
      "bn": "You enter a road where there are road humps. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Accelerate quickly between each one",
          "bn": "Accelerate quickly between each one"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Maintain a reduced speed throughout",
          "bn": "Maintain a reduced speed throughout"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drive slowly at school times only",
          "bn": "Drive slowly at school times only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Always keep to the maximum legal speed",
          "bn": "Always keep to the maximum legal speed"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa880c99c5be.jpg"
  },
  {
    "id": "q476",
    "categoryId": "c10",
    "text": {
      "en": "You are following a slow-moving vehicle on a narrow country road. There is a junction just ahead on the right. What should you do?",
      "bn": "You are following a slow-moving vehicle on a narrow country road. There is a junction just ahead on the right. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Overtake after checking your mirrors and signaling",
          "bn": "Overtake after checking your mirrors and signaling"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stay behind until you are past the junction",
          "bn": "Stay behind until you are past the junction"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Slow down and prepare to overtake on the left",
          "bn": "Slow down and prepare to overtake on the left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Accelerate quickly to pass before the junction",
          "bn": "Accelerate quickly to pass before the junction"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q477",
    "categoryId": "c10",
    "text": {
      "en": "Who is responsible for ensuring that a vehicle is fully road worthy when driven on a public road?",
      "bn": "Who is responsible for ensuring that a vehicle is fully road worthy when driven on a public road?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Nobody in particular",
          "bn": "Nobody in particular"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The VRT tester",
          "bn": "The VRT tester"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "You, the driver",
          "bn": "You, the driver"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Your mechanic",
          "bn": "Your mechanic"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q478",
    "categoryId": "c6",
    "text": {
      "en": "You see a pedestrian with a white stick and red band. This means that the person is",
      "bn": "You see a pedestrian with a white stick and red band. This means that the person is"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Blind only",
          "bn": "Blind only"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Deaf only",
          "bn": "Deaf only"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Physically disabled",
          "bn": "Physically disabled"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Deaf and blind",
          "bn": "Deaf and blind"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q479",
    "categoryId": "c8",
    "text": {
      "en": "You are following a vehicle on a wet road. You should leave a time gap of at least",
      "bn": "You are following a vehicle on a wet road. You should leave a time gap of at least"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Four (4) seconds",
          "bn": "Four (4) seconds"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "One (1) second",
          "bn": "One (1) second"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Two (2) seconds",
          "bn": "Two (2) seconds"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Three (3) seconds",
          "bn": "Three (3) seconds"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q480",
    "categoryId": "c10",
    "text": {
      "en": "The safest place to park your vehicle at night is",
      "bn": "The safest place to park your vehicle at night is"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "On a driveway",
          "bn": "On a driveway"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "On a quiet side street",
          "bn": "On a quiet side street"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "In a garage",
          "bn": "In a garage"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "In a car park",
          "bn": "In a car park"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q481",
    "categoryId": "c3",
    "text": {
      "en": "When the fluid level in your battery is low you should top it up with",
      "bn": "When the fluid level in your battery is low you should top it up with"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Water that has been boiled",
          "bn": "Water that has been boiled"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Distilled water",
          "bn": "Distilled water"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Battery acid",
          "bn": "Battery acid"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Tap water",
          "bn": "Tap water"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q482",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this sign?",
      "bn": "What is the meaning of this sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "School crossing patrol",
          "bn": "School crossing patrol"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "National speed limit",
          "bn": "National speed limit"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Waiting restrictions",
          "bn": "Waiting restrictions"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "No entry",
          "bn": "No entry"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa94676ce2f9.jpg"
  },
  {
    "id": "q483",
    "categoryId": "c11",
    "text": {
      "en": "You are on a road that has no traffic signs. There are streetlights. What is the speed limit?",
      "bn": "You are on a road that has no traffic signs. There are streetlights. What is the speed limit?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "30 mph",
          "bn": "30 mph"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "50 mph",
          "bn": "50 mph"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "40 mph",
          "bn": "40 mph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "20 mph",
          "bn": "20 mph"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q484",
    "categoryId": "c10",
    "text": {
      "en": "While driving, you intend to turn left into a minor road. On the approach you should:",
      "bn": "While driving, you intend to turn left into a minor road. On the approach you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep in the middle of the road",
          "bn": "Keep in the middle of the road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep well to the left of the road",
          "bn": "Keep well to the left of the road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep just left of the middle of the road",
          "bn": "Keep just left of the middle of the road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Swing out wide just before turning",
          "bn": "Swing out wide just before turning"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q485",
    "categoryId": "c11",
    "text": {
      "en": "Front fog lights may be used ONLY",
      "bn": "Front fog lights may be used ONLY"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "During ‘lighting up’ times only",
          "bn": "During ‘lighting up’ times only"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Between dusk and dawn",
          "bn": "Between dusk and dawn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When visibility is seriously reduced",
          "bn": "When visibility is seriously reduced"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "If they are not as bright as the headlights",
          "bn": "If they are not as bright as the headlights"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q486",
    "categoryId": "c6",
    "text": {
      "en": "Motorcyclists should wear bright clothing mainly so that",
      "bn": "Motorcyclists should wear bright clothing mainly so that"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The colours are popular",
          "bn": "The colours are popular"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "It helps keep them cool in summer",
          "bn": "It helps keep them cool in summer"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They must do so by law",
          "bn": "They must do so by law"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Other road users can see them more easily",
          "bn": "Other road users can see them more easily"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q487",
    "categoryId": "c11",
    "text": {
      "en": "What does this traffic sign mean?",
      "bn": "What does this traffic sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Give priority to oncoming traffic",
          "bn": "Give priority to oncoming traffic"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "No overtaking allowed",
          "bn": "No overtaking allowed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Two way traffic",
          "bn": "Two way traffic"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "One-way traffic only",
          "bn": "One-way traffic only"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "Give way to oncoming vehicles. ",
      "bn": "Give way to oncoming vehicles. "
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa94802ae617.jpg"
  },
  {
    "id": "q488",
    "categoryId": "c10",
    "text": {
      "en": "When are passengers allowed to ride in a caravan that is being towed?",
      "bn": "When are passengers allowed to ride in a caravan that is being towed?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When travelling on minor roads",
          "bn": "When travelling on minor roads"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When they are over 18 years old",
          "bn": "When they are over 18 years old"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When travelling on motorways",
          "bn": "When travelling on motorways"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Never",
          "bn": "Never"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q489",
    "categoryId": "c8",
    "text": {
      "en": "When driving in snow it is best to keep in as high a gear as possible. Why is this?",
      "bn": "When driving in snow it is best to keep in as high a gear as possible. Why is this?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "So that wheel spin does not cause your engine to run too fast",
          "bn": "So that wheel spin does not cause your engine to run too fast"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To leave a lower gear available in case of wheel spin",
          "bn": "To leave a lower gear available in case of wheel spin"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To help prevent wheel spin",
          "bn": "To help prevent wheel spin"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To help you slow down quickly when you brake",
          "bn": "To help you slow down quickly when you brake"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q490",
    "categoryId": "c9",
    "text": {
      "en": "Travelling on a wet motorway with road spray you should",
      "bn": "Travelling on a wet motorway with road spray you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Turn on your hazard lights",
          "bn": "Turn on your hazard lights"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Turn on your front fog lights",
          "bn": "Turn on your front fog lights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Turn on your rear fog lights",
          "bn": "Turn on your rear fog lights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Turn your headlights to dipped mode",
          "bn": "Turn your headlights to dipped mode"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q491",
    "categoryId": "c5",
    "text": {
      "en": "Why is coasting wrong or dangerous?",
      "bn": "Why is coasting wrong or dangerous?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "There is no engine braking",
          "bn": "There is no engine braking"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "It will cause the car to skid",
          "bn": "It will cause the car to skid"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The engine will run faster",
          "bn": "The engine will run faster"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "It will make the engine stall",
          "bn": "It will make the engine stall"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q492",
    "categoryId": "c7",
    "text": {
      "en": "You are to turn right in busy traffic. How would you confirm your intention safely?",
      "bn": "You are to turn right in busy traffic. How would you confirm your intention safely?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Flash your headlamp",
          "bn": "Flash your headlamp"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Position over the centre line at an angle",
          "bn": "Position over the centre line at an angle"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound the horn",
          "bn": "Sound the horn"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Give an arm signal also",
          "bn": "Give an arm signal also"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q493",
    "categoryId": "c10",
    "text": {
      "en": "You are driving on a quiet country road. What should you expect to see coming towards you on YOUR side of the road?",
      "bn": "You are driving on a quiet country road. What should you expect to see coming towards you on YOUR side of the road?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Motorcycles",
          "bn": "Motorcycles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Bicycles",
          "bn": "Bicycles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Pedestrians",
          "bn": "Pedestrians"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Horse riders",
          "bn": "Horse riders"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q494",
    "categoryId": "c10",
    "text": {
      "en": "A properly adjusted head rest will:",
      "bn": "A properly adjusted head rest will:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Help you to maintain your driving position",
          "bn": "Help you to maintain your driving position"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Help you to avoid neck injury",
          "bn": "Help you to avoid neck injury"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Make you more comfortable",
          "bn": "Make you more comfortable"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Help you to relax",
          "bn": "Help you to relax"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q495",
    "categoryId": "c10",
    "text": {
      "en": "To help prevent your vehicle's radio from being stolen you can",
      "bn": "To help prevent your vehicle's radio from being stolen you can"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Install a cheap, no frills radio",
          "bn": "Install a cheap, no frills radio"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Install a security coded radio",
          "bn": "Install a security coded radio"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Park in a busy area",
          "bn": "Park in a busy area"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Park in a quiet area",
          "bn": "Park in a quiet area"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q496",
    "categoryId": "c3",
    "text": {
      "en": "Excessive or uneven wear in one or more tyres can be caused by faults in the:",
      "bn": "Excessive or uneven wear in one or more tyres can be caused by faults in the:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Braking system",
          "bn": "Braking system"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Gearbox",
          "bn": "Gearbox"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Steering Wheel",
          "bn": "Steering Wheel"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Exhaust system",
          "bn": "Exhaust system"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "Braking system and suspension may cause excessive or uneven wear of the tyres ",
      "bn": "Braking system and suspension may cause excessive or uneven wear of the tyres "
    }
  },
  {
    "id": "q497",
    "categoryId": "c3",
    "text": {
      "en": "A driver pulls out of a side road in front of you. You have to brake hard. You should",
      "bn": "A driver pulls out of a side road in front of you. You have to brake hard. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Overtake as soon as possible",
          "bn": "Overtake as soon as possible"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Ignore the error and stay calm",
          "bn": "Ignore the error and stay calm"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound your horn to show your annoyance",
          "bn": "Sound your horn to show your annoyance"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your lights to show your annoyance",
          "bn": "Flash your lights to show your annoyance"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q498",
    "categoryId": "c11",
    "text": {
      "en": "Using front/rear fog lights in good visibility will:",
      "bn": "Using front/rear fog lights in good visibility will:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Dazzle other drivers",
          "bn": "Dazzle other drivers"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Flatten the battery",
          "bn": "Flatten the battery"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Improve your visibility",
          "bn": "Improve your visibility"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Increase your awareness",
          "bn": "Increase your awareness"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q499",
    "categoryId": "c9",
    "text": {
      "en": "You are travelling along the left-hand lane of a three-lane motorway. Traffic is joining from a slip road. You should",
      "bn": "You are travelling along the left-hand lane of a three-lane motorway. Traffic is joining from a slip road. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Race the other vehicles",
          "bn": "Race the other vehicles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Switch on your hazard lights",
          "bn": "Switch on your hazard lights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Move to another lane",
          "bn": "Move to another lane"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Maintain a steady speed",
          "bn": "Maintain a steady speed"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q500",
    "categoryId": "c9",
    "text": {
      "en": "The right hand lane on a three-lane motorway is used for",
      "bn": "The right hand lane on a three-lane motorway is used for"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Cruising at low speeds",
          "bn": "Cruising at low speeds"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Cruising at high speeds",
          "bn": "Cruising at high speeds"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "High-sided vehicles",
          "bn": "High-sided vehicles"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Overtaking",
          "bn": "Overtaking"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q501",
    "categoryId": "c11",
    "text": {
      "en": "You are driving behind a large vehicle. It signals left but steers to the right. You should:",
      "bn": "You are driving behind a large vehicle. It signals left but steers to the right. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slow down and let the vehicle turn",
          "bn": "Slow down and let the vehicle turn"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Overtake on the right of it",
          "bn": "Overtake on the right of it"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Hold your speed and sound your horn",
          "bn": "Hold your speed and sound your horn"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drive on, keeping to the left",
          "bn": "Drive on, keeping to the left"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q502",
    "categoryId": "c10",
    "text": {
      "en": "Car passengers MUST wear a seat belt if one is available, unless they are",
      "bn": "Car passengers MUST wear a seat belt if one is available, unless they are"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Travelling within a congestion charging zone",
          "bn": "Travelling within a congestion charging zone"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "In a vehicle fitted with airbags",
          "bn": "In a vehicle fitted with airbags"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sitting in the rear seat",
          "bn": "Sitting in the rear seat"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Exempt for medical reasons",
          "bn": "Exempt for medical reasons"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q503",
    "categoryId": "c6",
    "text": {
      "en": "It is very blustery and windy. You are about to overtake a motorcyclist. You should:",
      "bn": "It is very blustery and windy. You are about to overtake a motorcyclist. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Overtake slowly",
          "bn": "Overtake slowly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep close as you pass",
          "bn": "Keep close as you pass"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Allow extra room",
          "bn": "Allow extra room"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q504",
    "categoryId": "c7",
    "text": {
      "en": "You wish to overtake a long, slow moving vehicle or lorry on a busy road with oncoming traffic. You should:",
      "bn": "You wish to overtake a long, slow moving vehicle or lorry on a busy road with oncoming traffic. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep well back until you can see that it is clear",
          "bn": "Keep well back until you can see that it is clear"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stay behind until the driver waves you past",
          "bn": "Stay behind until the driver waves you past"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Follow it closely and keep moving out to see the road ahead",
          "bn": "Follow it closely and keep moving out to see the road ahead"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your headlights for the oncoming traffic to give way",
          "bn": "Flash your headlights for the oncoming traffic to give way"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q505",
    "categoryId": "c11",
    "text": {
      "en": "What does a sign with a brown background show?",
      "bn": "What does a sign with a brown background show?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Tourist directions",
          "bn": "Tourist directions"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Primary roads",
          "bn": "Primary roads"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Minor routes",
          "bn": "Minor routes"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Motorway routes",
          "bn": "Motorway routes"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9105d951dd.jpg"
  },
  {
    "id": "q506",
    "categoryId": "c3",
    "text": {
      "en": "When should you especially check the engine oil level?",
      "bn": "When should you especially check the engine oil level?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "On a cold morning",
          "bn": "On a cold morning"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Before starting a long journey",
          "bn": "Before starting a long journey"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Before an MOT test",
          "bn": "Before an MOT test"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Every 5000 miles",
          "bn": "Every 5000 miles"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q507",
    "categoryId": "c10",
    "text": {
      "en": "You are driving on a dual-carriageway with surface spray. You should:",
      "bn": "You are driving on a dual-carriageway with surface spray. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Your dipped headlights",
          "bn": "Your dipped headlights"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Your hazard flashers",
          "bn": "Your hazard flashers"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Your sidelights",
          "bn": "Your sidelights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Your rear fog lights",
          "bn": "Your rear fog lights"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q508",
    "categoryId": "c11",
    "text": {
      "en": "You are approaching a busy junction. There are several lanes with road markings. At the last moment you realise that you are in the wrong lane. You should:",
      "bn": "You are approaching a busy junction. There are several lanes with road markings. At the last moment you realise that you are in the wrong lane. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Use clear arm signals to cut across",
          "bn": "Use clear arm signals to cut across"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Force your way across",
          "bn": "Force your way across"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Continue in that lane",
          "bn": "Continue in that lane"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stop until the area has cleared",
          "bn": "Stop until the area has cleared"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q509",
    "categoryId": "c10",
    "text": {
      "en": "A learner driver you are following stalls at a junction. What should you do?",
      "bn": "A learner driver you are following stalls at a junction. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Shout instructions",
          "bn": "Shout instructions"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Be patient and wait for them to move on",
          "bn": "Be patient and wait for them to move on"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Steer around them and drive on",
          "bn": "Steer around them and drive on"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sound your horn and flash your lights",
          "bn": "Sound your horn and flash your lights"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q510",
    "categoryId": "c10",
    "text": {
      "en": "An elderly person’s driving ability could be affected because they may be unable to:",
      "bn": "An elderly person’s driving ability could be affected because they may be unable to:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "React very quickly",
          "bn": "React very quickly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Understand road signs",
          "bn": "Understand road signs"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Give signals correctly",
          "bn": "Give signals correctly"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Obtain car insurance",
          "bn": "Obtain car insurance"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q511",
    "categoryId": "c10",
    "text": {
      "en": "What action should you take when elderly people are crossing the road?",
      "bn": "What action should you take when elderly people are crossing the road?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Wave them across so they know that you have seen them",
          "bn": "Wave them across so they know that you have seen them"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Rev the engine to let them know that you are waiting",
          "bn": "Rev the engine to let them know that you are waiting"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Tap the horn in case they are hard of hearing",
          "bn": "Tap the horn in case they are hard of hearing"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Be patient and allow them to cross in their own time",
          "bn": "Be patient and allow them to cross in their own time"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q512",
    "categoryId": "c11",
    "text": {
      "en": "Triangular road signs give:",
      "bn": "Triangular road signs give:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Warnings",
          "bn": "Warnings"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Instructions",
          "bn": "Instructions"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Information",
          "bn": "Information"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Directions",
          "bn": "Directions"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q513",
    "categoryId": "c11",
    "text": {
      "en": "You see this traffic light ahead. Which light(s) will come on next?",
      "bn": "You see this traffic light ahead. Which light(s) will come on next?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Red and amber together",
          "bn": "Red and amber together"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Green alone",
          "bn": "Green alone"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Red alone",
          "bn": "Red alone"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Green and amber together",
          "bn": "Green and amber together"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa911fbb7c80.jpg"
  },
  {
    "id": "q514",
    "categoryId": "c8",
    "text": {
      "en": "How should you correct a rear wheel skid?",
      "bn": "How should you correct a rear wheel skid?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Steer away from it",
          "bn": "Steer away from it"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Remove your hand's from the steering wheel and let the vehicle steer itself",
          "bn": "Remove your hand's from the steering wheel and let the vehicle steer itself"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake hard and not steer at all",
          "bn": "Brake hard and not steer at all"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Steer into it",
          "bn": "Steer into it"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q515",
    "categoryId": "c10",
    "text": {
      "en": "You are looking for somewhere to park your vehicle. The area is full EXCEPT for spaces marked ‘disabled use’. You can:",
      "bn": "You are looking for somewhere to park your vehicle. The area is full EXCEPT for spaces marked ‘disabled use’. You can:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Not park there unless permitted",
          "bn": "Not park there unless permitted"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Use these spaces, disabled or not",
          "bn": "Use these spaces, disabled or not"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Park if you stay with your vehicle",
          "bn": "Park if you stay with your vehicle"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Use these spaces when elsewhere is full",
          "bn": "Use these spaces when elsewhere is full"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q516",
    "categoryId": "c1",
    "text": {
      "en": "You are taking drugs that are likely to affect you driving. What should you do?",
      "bn": "You are taking drugs that are likely to affect you driving. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Only drive if accompanied by a full licence holder",
          "bn": "Only drive if accompanied by a full licence holder"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Limit your driving to essential journeys",
          "bn": "Limit your driving to essential journeys"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Seek medical advice before driving",
          "bn": "Seek medical advice before driving"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drive only for short distances",
          "bn": "Drive only for short distances"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q516",
    "categoryId": "c1",
    "text": {
      "en": "You are taking drugs that are likely to affect you driving. What should you do?",
      "bn": "You are taking drugs that are likely to affect you driving. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive only for short distances",
          "bn": "Drive only for short distances"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Only drive if accompanied by a full licence holder",
          "bn": "Only drive if accompanied by a full licence holder"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Limit your driving to essential journeys",
          "bn": "Limit your driving to essential journeys"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Seek medical advice before driving",
          "bn": "Seek medical advice before driving"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q517",
    "categoryId": "c6",
    "text": {
      "en": "Motorcyclists often look round over their right shoulder just before turning right. This is because",
      "bn": "Motorcyclists often look round over their right shoulder just before turning right. This is because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "They need to check for traffic in their blind area",
          "bn": "They need to check for traffic in their blind area"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Motorcycles do not have mirrors",
          "bn": "Motorcycles do not have mirrors"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They need to listen for following traffic",
          "bn": "They need to listen for following traffic"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Looking around helps them balance as they turn",
          "bn": "Looking around helps them balance as they turn"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q518",
    "categoryId": "c10",
    "text": {
      "en": "To help keep your vehicle secure at night where should you park?",
      "bn": "To help keep your vehicle secure at night where should you park?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "On a red route",
          "bn": "On a red route"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "In a well-lit area",
          "bn": "In a well-lit area"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "In a quiet road",
          "bn": "In a quiet road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Near a police station",
          "bn": "Near a police station"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q519",
    "categoryId": "c10",
    "text": {
      "en": "Where may you overtake on a one-way Street?",
      "bn": "Where may you overtake on a one-way Street?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Only on the right-hand side",
          "bn": "Only on the right-hand side"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Overtaking is not allowed",
          "bn": "Overtaking is not allowed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Only on the left-hand side",
          "bn": "Only on the left-hand side"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Either on the right or the left",
          "bn": "Either on the right or the left"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q520",
    "categoryId": "c6",
    "text": {
      "en": "Why should you particularly look for motorcyclists and cyclists at any junction?",
      "bn": "Why should you particularly look for motorcyclists and cyclists at any junction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "They are harder to see",
          "bn": "They are harder to see"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "They may slow down to let you turn",
          "bn": "They may slow down to let you turn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They might not see you turn",
          "bn": "They might not see you turn"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "They nay want to turn into the side road",
          "bn": "They nay want to turn into the side road"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q521",
    "categoryId": "c10",
    "text": {
      "en": "You want to turn right from a main road into a side road. Just before you turn you should",
      "bn": "You want to turn right from a main road into a side road. Just before you turn you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stop and set the handbrake",
          "bn": "Stop and set the handbrake"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Cancel your right-turn signal",
          "bn": "Cancel your right-turn signal"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Check for traffic overtaking on your right",
          "bn": "Check for traffic overtaking on your right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Select first gear",
          "bn": "Select first gear"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q522",
    "categoryId": "c1",
    "text": {
      "en": "Your doctor has given you a course of medicine. Why should you ask if it is OK to drive?",
      "bn": "Your doctor has given you a course of medicine. Why should you ask if it is OK to drive?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "You will have to let your insurance company know about the medicine",
          "bn": "You will have to let your insurance company know about the medicine"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Some types of medicine can cause your reactions to slow down",
          "bn": "Some types of medicine can cause your reactions to slow down"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The medicine you take may affect your hearing",
          "bn": "The medicine you take may affect your hearing"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drugs make you a better driver by quickening your reactions",
          "bn": "Drugs make you a better driver by quickening your reactions"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q523",
    "categoryId": "c13",
    "text": {
      "en": "You arrive at an accident where someone is suffering from severe burns. You should:",
      "bn": "You arrive at an accident where someone is suffering from severe burns. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Burst any blisters",
          "bn": "Burst any blisters"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Remove anything stuck to the burns",
          "bn": "Remove anything stuck to the burns"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Apply lotions to the injury",
          "bn": "Apply lotions to the injury"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Douse the burns with cool liquid",
          "bn": "Douse the burns with cool liquid"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q524",
    "categoryId": "c4",
    "text": {
      "en": "You are approaching a bend at a high speed. You should begin to brake.",
      "bn": "You are approaching a bend at a high speed. You should begin to brake."
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Before the bend",
          "bn": "Before the bend"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "After changing gears",
          "bn": "After changing gears"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "On the bend",
          "bn": "On the bend"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "After the bend",
          "bn": "After the bend"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q525",
    "categoryId": "c4",
    "text": {
      "en": "In some residential roads you will find a speed limit of:",
      "bn": "In some residential roads you will find a speed limit of:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "40 mph",
          "bn": "40 mph"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "60 mph",
          "bn": "60 mph"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "50 mph",
          "bn": "50 mph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "25 mph",
          "bn": "25 mph"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q526",
    "categoryId": "c10",
    "text": {
      "en": "You are driving on a multi-lane carriageway. By mistake, you go past the exit that you wanted to take. You should:",
      "bn": "You are driving on a multi-lane carriageway. By mistake, you go past the exit that you wanted to take. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Carefully reverse on the hard shoulder",
          "bn": "Carefully reverse on the hard shoulder"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Carefully reverse in the left-hand lane",
          "bn": "Carefully reverse in the left-hand lane"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Make a U-turn at the next gap in the central reservation",
          "bn": "Make a U-turn at the next gap in the central reservation"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Carry on to the next exit",
          "bn": "Carry on to the next exit"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9158de37aa.jpg"
  },
  {
    "id": "q527",
    "categoryId": "c10",
    "text": {
      "en": "You are driving and ahead of you there is a vehicle with a flashing amber beacon. This means it is:",
      "bn": "You are driving and ahead of you there is a vehicle with a flashing amber beacon. This means it is:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Slow moving",
          "bn": "Slow moving"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "A school crossing patrol",
          "bn": "A school crossing patrol"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Broken down",
          "bn": "Broken down"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "A doctor’s car",
          "bn": "A doctor’s car"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q528",
    "categoryId": "c10",
    "text": {
      "en": "Why should you make sure that you have cancelled your indicators after turning?",
      "bn": "Why should you make sure that you have cancelled your indicators after turning?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To avoid flattening the battery",
          "bn": "To avoid flattening the battery"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To avoid dazzling other road users",
          "bn": "To avoid dazzling other road users"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To avoid damage to the indicator relay",
          "bn": "To avoid damage to the indicator relay"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To avoid misleading other road users",
          "bn": "To avoid misleading other road users"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q529",
    "categoryId": "c10",
    "text": {
      "en": "'Tailgating' usually means",
      "bn": "'Tailgating' usually means"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Reversing into a parking space",
          "bn": "Reversing into a parking space"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Following another vehicle too closely",
          "bn": "Following another vehicle too closely"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Using the rear door of a hatchback car",
          "bn": "Using the rear door of a hatchback car"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Driving with rear fog lights on",
          "bn": "Driving with rear fog lights on"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "Tailgating, or following too closely behind another vehicle is a dangerous practice. ",
      "bn": "Tailgating, or following too closely behind another vehicle is a dangerous practice. "
    }
  },
  {
    "id": "q530",
    "categoryId": "c10",
    "text": {
      "en": "Where are you most likely to be affected by a side wind?",
      "bn": "Where are you most likely to be affected by a side wind?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "On a narrow country lane",
          "bn": "On a narrow country lane"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "On a long, straight road",
          "bn": "On a long, straight road"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "On an open stretch of road",
          "bn": "On an open stretch of road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "On a busy stretch of road",
          "bn": "On a busy stretch of road"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q531",
    "categoryId": "c6",
    "text": {
      "en": "A horse rider is in the left-hand lane approaching a roundabout. The driver behind should expect the rider to:",
      "bn": "A horse rider is in the left-hand lane approaching a roundabout. The driver behind should expect the rider to:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Go ahead",
          "bn": "Go ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Turn left",
          "bn": "Turn left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Go in any direction",
          "bn": "Go in any direction"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Turn right",
          "bn": "Turn right"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q532",
    "categoryId": "c4",
    "text": {
      "en": "There is vibration on your steering wheel as you drive at certain speeds. You should check that the:",
      "bn": "There is vibration on your steering wheel as you drive at certain speeds. You should check that the:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Wheels are balanced",
          "bn": "Wheels are balanced"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Doors are closed",
          "bn": "Doors are closed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Exhaust is not loose",
          "bn": "Exhaust is not loose"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Engine oil level is correct",
          "bn": "Engine oil level is correct"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "Unbalance wheels will cause vibration of steering wheel ",
      "bn": "Unbalance wheels will cause vibration of steering wheel "
    }
  },
  {
    "id": "q533",
    "categoryId": "c4",
    "text": {
      "en": "You are parking on a two-way road at night. The speed limit is 40 mph. You should park on the",
      "bn": "You are parking on a two-way road at night. The speed limit is 40 mph. You should park on the"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Left with parking lights on",
          "bn": "Left with parking lights on"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Right with parking lights on",
          "bn": "Right with parking lights on"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Right with dipped headlights on",
          "bn": "Right with dipped headlights on"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Left with no lights on",
          "bn": "Left with no lights on"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q534",
    "categoryId": "c13",
    "text": {
      "en": "You arrive at the scene of a motorcycle accident and the rider is injured. When should the helmet be removed?",
      "bn": "You arrive at the scene of a motorcycle accident and the rider is injured. When should the helmet be removed?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Always, unless they are in shock",
          "bn": "Always, unless they are in shock"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Only when the motorcyclist asks",
          "bn": "Only when the motorcyclist asks"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Only when it is essential",
          "bn": "Only when it is essential"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Always straight away",
          "bn": "Always straight away"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "It is important not to remove their helmet unless it is necessary to do so to keep them alive. ",
      "bn": "It is important not to remove their helmet unless it is necessary to do so to keep them alive. "
    }
  },
  {
    "id": "q535",
    "categoryId": "c6",
    "text": {
      "en": "You stopped for pedestrians waiting to cross at a zebra crossing. They did not start to cross. What should you do?",
      "bn": "You stopped for pedestrians waiting to cross at a zebra crossing. They did not start to cross. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Be patient and wait",
          "bn": "Be patient and wait"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Drive on",
          "bn": "Drive on"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Wave them to cross",
          "bn": "Wave them to cross"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "Always be patient and considerate at zebra cross, not only because pedestrians have the right of way. ",
      "bn": "Always be patient and considerate at zebra cross, not only because pedestrians have the right of way. "
    }
  },
  {
    "id": "q536",
    "categoryId": "c10",
    "text": {
      "en": "'Red Routes' in major cities have been introduced to",
      "bn": "'Red Routes' in major cities have been introduced to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Provide better parking",
          "bn": "Provide better parking"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Help the traffic flow",
          "bn": "Help the traffic flow"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Raise the speed limits",
          "bn": "Raise the speed limits"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Allow lorries to load more freely",
          "bn": "Allow lorries to load more freely"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q537",
    "categoryId": "c8",
    "text": {
      "en": "You are trying to move off on snow. You should use",
      "bn": "You are trying to move off on snow. You should use"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "A high engine speed",
          "bn": "A high engine speed"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The lowest gear you can",
          "bn": "The lowest gear you can"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The handbrake and footbrake together",
          "bn": "The handbrake and footbrake together"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The highest gear you can",
          "bn": "The highest gear you can"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q538",
    "categoryId": "c7",
    "text": {
      "en": "When you approach a bus that is about to move off from a bus stop you should:",
      "bn": "When you approach a bus that is about to move off from a bus stop you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Get past before it moves",
          "bn": "Get past before it moves"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Signal left and wave the bus on",
          "bn": "Signal left and wave the bus on"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Allow it to pull away, if it is safe to do so",
          "bn": "Allow it to pull away, if it is safe to do so"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your headlights as you approach",
          "bn": "Flash your headlights as you approach"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9182b3d652.jpg"
  },
  {
    "id": "q539",
    "categoryId": "c7",
    "text": {
      "en": "There is a tractor ahead of you. You wish to overtake but you are NOT sure if it is safe to do so. You should:",
      "bn": "There is a tractor ahead of you. You wish to overtake but you are NOT sure if it is safe to do so. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Follow another overtaking vehicle through",
          "bn": "Follow another overtaking vehicle through"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Speed through but flash your lights to oncoming traffic",
          "bn": "Speed through but flash your lights to oncoming traffic"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Not overtake if you are in doubt",
          "bn": "Not overtake if you are in doubt"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sound your horn to the slow vehicle to pull over",
          "bn": "Sound your horn to the slow vehicle to pull over"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q540",
    "categoryId": "c10",
    "text": {
      "en": "You are turning left on a slippery road. The back of your vehicle slides to the right. You should:",
      "bn": "You are turning left on a slippery road. The back of your vehicle slides to the right. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Brake firmly and not turn the steering wheel",
          "bn": "Brake firmly and not turn the steering wheel"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Brake firmly and steer to the left",
          "bn": "Brake firmly and steer to the left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Steer carefully to the right",
          "bn": "Steer carefully to the right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Steer carefully to the left",
          "bn": "Steer carefully to the left"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "Continue to turn left will cause the car to spin. ",
      "bn": "Continue to turn left will cause the car to spin. "
    }
  },
  {
    "id": "q541",
    "categoryId": "c12",
    "text": {
      "en": "Motorcars must first have an MOT certificate when they are",
      "bn": "Motorcars must first have an MOT certificate when they are"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Five (5) years old",
          "bn": "Five (5) years old"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "One (1) year old",
          "bn": "One (1) year old"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Three (3) years old",
          "bn": "Three (3) years old"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Seven (7) years old",
          "bn": "Seven (7) years old"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q542",
    "categoryId": "c10",
    "text": {
      "en": "For a driver, what doe the term Blind Spot mean?",
      "bn": "For a driver, what doe the term Blind Spot mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "An area not seen in your mirrors",
          "bn": "An area not seen in your mirrors"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The area covered by your left mirror",
          "bn": "The area covered by your left mirror"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "An area immediately behind the car",
          "bn": "An area immediately behind the car"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The area covered by the rear view mirror",
          "bn": "The area covered by the rear view mirror"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q543",
    "categoryId": "c3",
    "text": {
      "en": "It is illegal to drive with tyres that -",
      "bn": "It is illegal to drive with tyres that -"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Were bought second-hand",
          "bn": "Were bought second-hand"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Are more than three years old",
          "bn": "Are more than three years old"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Are of different makes",
          "bn": "Are of different makes"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Have a large, deep cut in the sidewall",
          "bn": "Have a large, deep cut in the sidewall"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q544",
    "categoryId": "c11",
    "text": {
      "en": "What does the sign mean?",
      "bn": "What does the sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Pedestrian crossing ahead",
          "bn": "Pedestrian crossing ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "School crossing patrol",
          "bn": "School crossing patrol"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Pedestrian zone – no vehicles",
          "bn": "Pedestrian zone – no vehicles"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "No pedestrians allowed",
          "bn": "No pedestrians allowed"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa919d46c90d.jpg"
  },
  {
    "id": "q545",
    "categoryId": "c10",
    "text": {
      "en": "You are towing a caravan. Which is the safest type of rear-view mirror to use?",
      "bn": "You are towing a caravan. Which is the safest type of rear-view mirror to use?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Interior wide-angle mirror",
          "bn": "Interior wide-angle mirror"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Extended-arm side mirrors",
          "bn": "Extended-arm side mirrors"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Ordinary interior mirror",
          "bn": "Ordinary interior mirror"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Ordinary door mirrors",
          "bn": "Ordinary door mirrors"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q546",
    "categoryId": "c10",
    "text": {
      "en": "At an incident it is important to look after any casualties. When the area is safe you should",
      "bn": "At an incident it is important to look after any casualties. When the area is safe you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Give them a drink",
          "bn": "Give them a drink"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Get them out of the vehicle",
          "bn": "Get them out of the vehicle"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Give them something to eat",
          "bn": "Give them something to eat"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Keep them in the vehicle",
          "bn": "Keep them in the vehicle"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q547",
    "categoryId": "c10",
    "text": {
      "en": "You engine catches fire what should you do first?",
      "bn": "You engine catches fire what should you do first?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Lift the bonnet and disconnect the battery",
          "bn": "Lift the bonnet and disconnect the battery"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Call a breakdown service",
          "bn": "Call a breakdown service"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Call the fire brigade",
          "bn": "Call the fire brigade"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Lift the bonnet and warn other traffic",
          "bn": "Lift the bonnet and warn other traffic"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q548",
    "categoryId": "c10",
    "text": {
      "en": "Unbalanced wheels on a car may cause",
      "bn": "Unbalanced wheels on a car may cause"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Poor braking",
          "bn": "Poor braking"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The tyres to wear out",
          "bn": "The tyres to wear out"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Poor acceleration",
          "bn": "Poor acceleration"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The steering to vibrate",
          "bn": "The steering to vibrate"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q549",
    "categoryId": "c10",
    "text": {
      "en": "You are at the front of a queue of traffic waiting to turn right into a side road. Why is it important to check your right mirror just before turning?",
      "bn": "You are at the front of a queue of traffic waiting to turn right into a side road. Why is it important to check your right mirror just before turning?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To look for pedestrians about to cross",
          "bn": "To look for pedestrians about to cross"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To make sure the side road is clear",
          "bn": "To make sure the side road is clear"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To check for emerging traffic",
          "bn": "To check for emerging traffic"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To check for overtaking vehicles",
          "bn": "To check for overtaking vehicles"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q550",
    "categoryId": "c10",
    "text": {
      "en": "Before you make a U-turn in the road, you should",
      "bn": "Before you make a U-turn in the road, you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Signal so that other drivers can slow down for you",
          "bn": "Signal so that other drivers can slow down for you"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Give an arm signal as well as using your indicators",
          "bn": "Give an arm signal as well as using your indicators"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Look over your shoulder for a final check",
          "bn": "Look over your shoulder for a final check"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Select a higher gear than normal",
          "bn": "Select a higher gear than normal"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q551",
    "categoryId": "c11",
    "text": {
      "en": "What does this sign mean?",
      "bn": "What does this sign mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Cars and motorcycles only",
          "bn": "Cars and motorcycles only"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "No motor vehicles",
          "bn": "No motor vehicles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Clearway (no stopping)",
          "bn": "Clearway (no stopping)"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "No overtaking",
          "bn": "No overtaking"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa91c43467ac.jpg"
  },
  {
    "id": "q552",
    "categoryId": "c4",
    "text": {
      "en": "A driver can only read a number plate at the required distance with glasses on. The glasses should be worn:",
      "bn": "A driver can only read a number plate at the required distance with glasses on. The glasses should be worn:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Only when reversing",
          "bn": "Only when reversing"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Only when driving long distances",
          "bn": "Only when driving long distances"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Only in poor visibility",
          "bn": "Only in poor visibility"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "All the time when driving",
          "bn": "All the time when driving"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q553",
    "categoryId": "c8",
    "text": {
      "en": "You are following a vehicle on a wet road. You should leave a time gap of at least",
      "bn": "You are following a vehicle on a wet road. You should leave a time gap of at least"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Two (2) seconds",
          "bn": "Two (2) seconds"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "One (1) second",
          "bn": "One (1) second"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Four (4) seconds",
          "bn": "Four (4) seconds"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Three (3) seconds",
          "bn": "Three (3) seconds"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q554",
    "categoryId": "c10",
    "text": {
      "en": "A newly qualified driver must",
      "bn": "A newly qualified driver must"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Be accompanied on a motorway",
          "bn": "Be accompanied on a motorway"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Have valid motor insurance",
          "bn": "Have valid motor insurance"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Display green L-Plates",
          "bn": "Display green L-Plates"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Not exceed 40 mph for 12 months",
          "bn": "Not exceed 40 mph for 12 months"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q555",
    "categoryId": "c3",
    "text": {
      "en": "You have too much oil in your engine. What could this cause?",
      "bn": "You have too much oil in your engine. What could this cause?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Chain wear",
          "bn": "Chain wear"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Engine overheating",
          "bn": "Engine overheating"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Low oil pressure",
          "bn": "Low oil pressure"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Oil leaks",
          "bn": "Oil leaks"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q556",
    "categoryId": "c10",
    "text": {
      "en": "You should avoid 'coasting' your car because it could:",
      "bn": "You should avoid 'coasting' your car because it could:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Increase tyre wear",
          "bn": "Increase tyre wear"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Damage the suspension",
          "bn": "Damage the suspension"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Flatten the battery",
          "bn": "Flatten the battery"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Reduce steering control",
          "bn": "Reduce steering control"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q557",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this sign?",
      "bn": "What is the meaning of this sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Traffic queues likely",
          "bn": "Traffic queues likely"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Light signals ahead at a level crossing",
          "bn": "Light signals ahead at a level crossing"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Accident black spot ahead",
          "bn": "Accident black spot ahead"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Pedestrian crossing ahead",
          "bn": "Pedestrian crossing ahead"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa91dc8a5af9.jpg"
  },
  {
    "id": "q558",
    "categoryId": "c10",
    "text": {
      "en": "When going straight ahead at a roundabout you should:",
      "bn": "When going straight ahead at a roundabout you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Not indicate at any time",
          "bn": "Not indicate at any time"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Indicate left when approaching the roundabout",
          "bn": "Indicate left when approaching the roundabout"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Indicate right when approaching the roundabout",
          "bn": "Indicate right when approaching the roundabout"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Indicate left before leaving the roundabout",
          "bn": "Indicate left before leaving the roundabout"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q559",
    "categoryId": "c6",
    "text": {
      "en": "At which pedestrian crossing are cyclists allowed to ride across?",
      "bn": "At which pedestrian crossing are cyclists allowed to ride across?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Zebra",
          "bn": "Zebra"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Toucan",
          "bn": "Toucan"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Puffin",
          "bn": "Puffin"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Pelican",
          "bn": "Pelican"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q560",
    "categoryId": "c10",
    "text": {
      "en": "You are waiting in a traffic queue at night. To avoid dazzling the drivers behind, you should:",
      "bn": "You are waiting in a traffic queue at night. To avoid dazzling the drivers behind, you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Apply the footbrake only",
          "bn": "Apply the footbrake only"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Use both the handbrake and footbrake",
          "bn": "Use both the handbrake and footbrake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Switch off your headlights",
          "bn": "Switch off your headlights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Apply the handbrake only",
          "bn": "Apply the handbrake only"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "N.B. the brake light will be switched on when using the footbrake ",
      "bn": "N.B. the brake light will be switched on when using the footbrake "
    }
  },
  {
    "id": "q561",
    "categoryId": "c10",
    "text": {
      "en": "When driving through a Ford or flood water, what gear should you use?",
      "bn": "When driving through a Ford or flood water, what gear should you use?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Reverse",
          "bn": "Reverse"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Fifth",
          "bn": "Fifth"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "First or second",
          "bn": "First or second"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Fourth",
          "bn": "Fourth"
        }
      },
      {
        "id": "e",
        "text": {
          "en": "Third",
          "bn": "Third"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q562",
    "categoryId": "c6",
    "text": {
      "en": "You are driving behind three cyclists. They approach a roundabout in the left hand lane. In which direction should you expect the cyclists to go?",
      "bn": "You are driving behind three cyclists. They approach a roundabout in the left hand lane. In which direction should you expect the cyclists to go?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Any direction",
          "bn": "Any direction"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Left",
          "bn": "Left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Right",
          "bn": "Right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Straight ahead",
          "bn": "Straight ahead"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q563",
    "categoryId": "c9",
    "text": {
      "en": "What is the national speed limit on motorways, unless otherwise indicated, for cars and motorcycles?",
      "bn": "What is the national speed limit on motorways, unless otherwise indicated, for cars and motorcycles?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "60mph",
          "bn": "60mph"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "70mph",
          "bn": "70mph"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "50mph",
          "bn": "50mph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "80mph",
          "bn": "80mph"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q564",
    "categoryId": "c10",
    "text": {
      "en": "An elderly person's driving ability could be affected because they may be unable to",
      "bn": "An elderly person's driving ability could be affected because they may be unable to"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Give signals correctly",
          "bn": "Give signals correctly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Obtain car insurance",
          "bn": "Obtain car insurance"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "React very quickly",
          "bn": "React very quickly"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Understand road signs",
          "bn": "Understand road signs"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q565",
    "categoryId": "c6",
    "text": {
      "en": "Where should you take particular care to look out for motorcyclists and cyclists?",
      "bn": "Where should you take particular care to look out for motorcyclists and cyclists?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "On dual carriageways",
          "bn": "On dual carriageways"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "At junctions",
          "bn": "At junctions"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "At zebra crossings",
          "bn": "At zebra crossings"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "On one-way streets",
          "bn": "On one-way streets"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q566",
    "categoryId": "c8",
    "text": {
      "en": "When following a vehicle on a wet road you should leave a time gap of at least:",
      "bn": "When following a vehicle on a wet road you should leave a time gap of at least:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "1 second",
          "bn": "1 second"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "4 seconds",
          "bn": "4 seconds"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "2 seconds",
          "bn": "2 seconds"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "5 seconds",
          "bn": "5 seconds"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q567",
    "categoryId": "c11",
    "text": {
      "en": "This marking appears on the road just before a",
      "bn": "This marking appears on the road just before a"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stop sign",
          "bn": "Stop sign"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "No through road sign",
          "bn": "No through road sign"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No entry sign",
          "bn": "No entry sign"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Give way sign",
          "bn": "Give way sign"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa92077b741f.jpg"
  },
  {
    "id": "q568",
    "categoryId": "c11",
    "text": {
      "en": "What MUST you do when you see this sign?",
      "bn": "What MUST you do when you see this sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stop, ONLY if children are waiting to cross",
          "bn": "Stop, ONLY if children are waiting to cross"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop, even if the road is clear",
          "bn": "Stop, even if the road is clear"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stop, ONLY if traffic is approaching",
          "bn": "Stop, ONLY if traffic is approaching"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Stop, ONLY if a red light is showing",
          "bn": "Stop, ONLY if a red light is showing"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9216376551.jpg"
  },
  {
    "id": "q569",
    "categoryId": "c10",
    "text": {
      "en": "You are following a slow-moving vehicle on a narrow country road. There is a junction just ahead on the right. What should you do?",
      "bn": "You are following a slow-moving vehicle on a narrow country road. There is a junction just ahead on the right. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Overtake after checking your mirrors and signaling",
          "bn": "Overtake after checking your mirrors and signaling"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stay behind until you are past the junction",
          "bn": "Stay behind until you are past the junction"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Slow down and prepare to overtake on the left",
          "bn": "Slow down and prepare to overtake on the left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Accelerate quickly to pass before the junction",
          "bn": "Accelerate quickly to pass before the junction"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q570",
    "categoryId": "c10",
    "text": {
      "en": "As a driver what do you understand by the term 'Blind Spot'?",
      "bn": "As a driver what do you understand by the term 'Blind Spot'?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "An area not covered by your headlights",
          "bn": "An area not covered by your headlights"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "An area covered by your right hand mirror",
          "bn": "An area covered by your right hand mirror"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "An area covered by your left hand mirror",
          "bn": "An area covered by your left hand mirror"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "An area not seen in your mirrors",
          "bn": "An area not seen in your mirrors"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "Blind spots are the areas of the road that cannot be seen while looking forward or through either the rear-view or side mirrors ",
      "bn": "Blind spots are the areas of the road that cannot be seen while looking forward or through either the rear-view or side mirrors "
    }
  },
  {
    "id": "q571",
    "categoryId": "c11",
    "text": {
      "en": "You are on a narrow road at night. A slower-moving vehicle ahead has been signaling right for some time. What should you do?",
      "bn": "You are on a narrow road at night. A slower-moving vehicle ahead has been signaling right for some time. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Wait for the signal to be cancelled before overtaking",
          "bn": "Wait for the signal to be cancelled before overtaking"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Signal right and sound your horn",
          "bn": "Signal right and sound your horn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Flash your headlights before overtaking",
          "bn": "Flash your headlights before overtaking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Overtake on the left",
          "bn": "Overtake on the left"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q572",
    "categoryId": "c10",
    "text": {
      "en": "You may only enter a box junction when:",
      "bn": "You may only enter a box junction when:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The traffic lights show green",
          "bn": "The traffic lights show green"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You need to turn left",
          "bn": "You need to turn left"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "There are less than two vehicles in front of you",
          "bn": "There are less than two vehicles in front of you"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Your exit road is clear",
          "bn": "Your exit road is clear"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa925833fb4a.jpg"
  },
  {
    "id": "q573",
    "categoryId": "c6",
    "text": {
      "en": "You turn into a side road. Pedestrians have started to cross the road. You should",
      "bn": "You turn into a side road. Pedestrians have started to cross the road. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Give way to them",
          "bn": "Give way to them"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Drive around them",
          "bn": "Drive around them"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Proceed regardless",
          "bn": "Proceed regardless"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your lights and wave them across",
          "bn": "Flash your lights and wave them across"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q574",
    "categoryId": "c10",
    "text": {
      "en": "What does tailgating mean?",
      "bn": "What does tailgating mean?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Driving with your headlights on full beam",
          "bn": "Driving with your headlights on full beam"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Bumping another car whilst parking",
          "bn": "Bumping another car whilst parking"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Following another vehicle too closely",
          "bn": "Following another vehicle too closely"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Skidding on a dry road",
          "bn": "Skidding on a dry road"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q575",
    "categoryId": "c10",
    "text": {
      "en": "When are passengers allowed to ride in a caravan that is being towed?",
      "bn": "When are passengers allowed to ride in a caravan that is being towed?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Never",
          "bn": "Never"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When travelling on motorways",
          "bn": "When travelling on motorways"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When they are over 18 years old",
          "bn": "When they are over 18 years old"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When travelling on minor roads",
          "bn": "When travelling on minor roads"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q576",
    "categoryId": "c4",
    "text": {
      "en": "You are about to go down a steep hill. To control the speed of your car you should:",
      "bn": "You are about to go down a steep hill. To control the speed of your car you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Select a high gear and use the brakes firmly",
          "bn": "Select a high gear and use the brakes firmly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Select a low gear and avoid using the brakes",
          "bn": "Select a low gear and avoid using the brakes"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Select a low gear and use the brakes carefully",
          "bn": "Select a low gear and use the brakes carefully"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Select a high gear and use the brakes carefully",
          "bn": "Select a high gear and use the brakes carefully"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q577",
    "categoryId": "c11",
    "text": {
      "en": "Super trams or Light Rapid Transit (LRT) systems are environmentally friendly because",
      "bn": "Super trams or Light Rapid Transit (LRT) systems are environmentally friendly because"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "They use electric power",
          "bn": "They use electric power"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "They use quieter roads",
          "bn": "They use quieter roads"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "They use diesel power",
          "bn": "They use diesel power"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "They do not operate during rush hour",
          "bn": "They do not operate during rush hour"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q578",
    "categoryId": "c12",
    "text": {
      "en": "You are driving behind a moped or small motorcycle. You want to turn left just ahead. You should:",
      "bn": "You are driving behind a moped or small motorcycle. You want to turn left just ahead. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Stay behind until the moped has passed the junction",
          "bn": "Stay behind until the moped has passed the junction"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pull alongside the moped and stay level until just before the junction",
          "bn": "Pull alongside the moped and stay level until just before the junction"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound your horn as a warning and pull in front of the moped",
          "bn": "Sound your horn as a warning and pull in front of the moped"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Overtake the moped before the junction",
          "bn": "Overtake the moped before the junction"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q579",
    "categoryId": "c10",
    "text": {
      "en": "Which of the following is the main cause of rear-end collisions?",
      "bn": "Which of the following is the main cause of rear-end collisions?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Pedestrians crossing the road unexpectedly",
          "bn": "Pedestrians crossing the road unexpectedly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Driving too close to the vehicle in front",
          "bn": "Driving too close to the vehicle in front"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "A wet road surface",
          "bn": "A wet road surface"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Traffic lights",
          "bn": "Traffic lights"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q580",
    "categoryId": "c6",
    "text": {
      "en": "When you are overtaking a horse and rider you should:",
      "bn": "When you are overtaking a horse and rider you should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Flash your headlights as a warning",
          "bn": "Flash your headlights as a warning"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Go past as quickly as possible",
          "bn": "Go past as quickly as possible"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Go past slowly and carefully",
          "bn": "Go past slowly and carefully"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sound your horn as a warning",
          "bn": "Sound your horn as a warning"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q581",
    "categoryId": "c11",
    "text": {
      "en": "A red traffic light means:",
      "bn": "A red traffic light means:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "You must slow down and prepare to stop if traffic has started to cross",
          "bn": "You must slow down and prepare to stop if traffic has started to cross"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You must stop behind the white stop line",
          "bn": "You must stop behind the white stop line"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "You may drive straight on if there is no other traffic",
          "bn": "You may drive straight on if there is no other traffic"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "You may turn left if it is safe to do so",
          "bn": "You may turn left if it is safe to do so"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa92afb4d95b.jpg"
  },
  {
    "id": "q582",
    "categoryId": "c10",
    "text": {
      "en": "You are driving a slow moving car on a narrow winding road. In order to let other vehicles overtake you should",
      "bn": "You are driving a slow moving car on a narrow winding road. In order to let other vehicles overtake you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Show a left turn signal",
          "bn": "Show a left turn signal"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Keep left and hold your speed",
          "bn": "Keep left and hold your speed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Pull in safely when you can",
          "bn": "Pull in safely when you can"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Wave to them to pass",
          "bn": "Wave to them to pass"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "Safety is the first priority ",
      "bn": "Safety is the first priority "
    }
  },
  {
    "id": "q583",
    "categoryId": "c10",
    "text": {
      "en": "You are about to drive home. You cannot find the glasses you need to wear when driving. You should:",
      "bn": "You are about to drive home. You cannot find the glasses you need to wear when driving. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Drive home slowly, keeping to quite roads",
          "bn": "Drive home slowly, keeping to quite roads"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Borrow a friend’s glasses and drive home",
          "bn": "Borrow a friend’s glasses and drive home"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Find a way of getting home without driving",
          "bn": "Find a way of getting home without driving"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Drive home at night",
          "bn": "Drive home at night"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q584",
    "categoryId": "c10",
    "text": {
      "en": "When turning your car in the road, you must:",
      "bn": "When turning your car in the road, you must:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep your hand on the handbrake",
          "bn": "Keep your hand on the handbrake"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Overhang the kerb",
          "bn": "Overhang the kerb"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Use an available driveway",
          "bn": "Use an available driveway"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Check all around for other road users",
          "bn": "Check all around for other road users"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "Look out for other road users when turning, especially pedestrians ",
      "bn": "Look out for other road users when turning, especially pedestrians "
    }
  },
  {
    "id": "q585",
    "categoryId": "c10",
    "text": {
      "en": "Road humps, chicanes, and road narrowing's are",
      "bn": "Road humps, chicanes, and road narrowing's are"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Always at major road works",
          "bn": "Always at major road works"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Used to increase traffic speed",
          "bn": "Used to increase traffic speed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "At toll-bridge approaches only",
          "bn": "At toll-bridge approaches only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Traffic calming measures",
          "bn": "Traffic calming measures"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q586",
    "categoryId": "c4",
    "text": {
      "en": "When travelling on ice braking distances can be",
      "bn": "When travelling on ice braking distances can be"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Three (3) times the normal distance",
          "bn": "Three (3) times the normal distance"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Ten (10) times the normal distance",
          "bn": "Ten (10) times the normal distance"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Six (6) times the normal distance",
          "bn": "Six (6) times the normal distance"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "fifteen (15) times the normal distance",
          "bn": "fifteen (15) times the normal distance"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q587",
    "categoryId": "c6",
    "text": {
      "en": "You stop for pedestrians waiting to cross at a zebra crossing. They do not start to cross. What should you do?",
      "bn": "You stop for pedestrians waiting to cross at a zebra crossing. They do not start to cross. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Wave then to cross",
          "bn": "Wave then to cross"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Be patient and wait",
          "bn": "Be patient and wait"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Carry on",
          "bn": "Carry on"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q588",
    "categoryId": "c10",
    "text": {
      "en": "A strong cross wind is least likely to affect which of these vehicles?",
      "bn": "A strong cross wind is least likely to affect which of these vehicles?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Cyclists",
          "bn": "Cyclists"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Motorcycles",
          "bn": "Motorcycles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Cars",
          "bn": "Cars"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "High-sided vehicles",
          "bn": "High-sided vehicles"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q589",
    "categoryId": "c4",
    "text": {
      "en": "While driving a vehicle, at what distance MUST you be able to read a number plate?",
      "bn": "While driving a vehicle, at what distance MUST you be able to read a number plate?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "30 meters (98 feet)",
          "bn": "30 meters (98 feet)"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "20.5 meters (67 feet)",
          "bn": "20.5 meters (67 feet)"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "15 meters (49 feet)",
          "bn": "15 meters (49 feet)"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "10 meters (33 feet)",
          "bn": "10 meters (33 feet)"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q590",
    "categoryId": "c13",
    "text": {
      "en": "What is the most common cause of road accidents?",
      "bn": "What is the most common cause of road accidents?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Driver error",
          "bn": "Driver error"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Mechanical failure",
          "bn": "Mechanical failure"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Road conditions",
          "bn": "Road conditions"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Weather conditions",
          "bn": "Weather conditions"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q591",
    "categoryId": "c11",
    "text": {
      "en": "As you approach a pelican crossing the lights change to green but elderly people are halfway across. You should:",
      "bn": "As you approach a pelican crossing the lights change to green but elderly people are halfway across. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Flash your lights in case they have not heard you",
          "bn": "Flash your lights in case they have not heard you"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Wave them to cross as quickly as they can",
          "bn": "Wave them to cross as quickly as they can"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Rev your engine to make them hurry",
          "bn": "Rev your engine to make them hurry"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Wait because they will take longer to cross",
          "bn": "Wait because they will take longer to cross"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q592",
    "categoryId": "c10",
    "text": {
      "en": "You are following a learner driver who stalls at a junction. You should",
      "bn": "You are following a learner driver who stalls at a junction. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Start to rev your engine if they take too long to restart",
          "bn": "Start to rev your engine if they take too long to restart"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Immediately steer around them and drive on",
          "bn": "Immediately steer around them and drive on"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Stay very close behind and flash your headlights",
          "bn": "Stay very close behind and flash your headlights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Be patient as you expect them to make mistakes",
          "bn": "Be patient as you expect them to make mistakes"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q593",
    "categoryId": "c10",
    "text": {
      "en": "Which vehicle may have to use a different course to normal at roundabouts?",
      "bn": "Which vehicle may have to use a different course to normal at roundabouts?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Van",
          "bn": "Van"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Long vehicle",
          "bn": "Long vehicle"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Estate car",
          "bn": "Estate car"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sports car",
          "bn": "Sports car"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q594",
    "categoryId": "c10",
    "text": {
      "en": "You are overtaking a car at night. You must be sure that:",
      "bn": "You are overtaking a car at night. You must be sure that:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "You flash your headlamps before overtaking",
          "bn": "You flash your headlamps before overtaking"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "You do not dazzle other road users",
          "bn": "You do not dazzle other road users"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "You have switched your lights to full beam before overtaking",
          "bn": "You have switched your lights to full beam before overtaking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Your rear fog lights are switched on",
          "bn": "Your rear fog lights are switched on"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q595",
    "categoryId": "c2",
    "text": {
      "en": "When may you sound the horn on your vehicle?",
      "bn": "When may you sound the horn on your vehicle?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To warn others of your presence",
          "bn": "To warn others of your presence"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To make slower drivers move over",
          "bn": "To make slower drivers move over"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To attract a friend’s attention",
          "bn": "To attract a friend’s attention"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To give you right of way",
          "bn": "To give you right of way"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q596",
    "categoryId": "c9",
    "text": {
      "en": "On a motorway what is used to reduce traffic bunching?",
      "bn": "On a motorway what is used to reduce traffic bunching?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Variable speed limits",
          "bn": "Variable speed limits"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "National speed limits",
          "bn": "National speed limits"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Contraflow systems",
          "bn": "Contraflow systems"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Lane closures",
          "bn": "Lane closures"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q597",
    "categoryId": "c11",
    "text": {
      "en": "You are driving in busy traffic. You want to pull up on the left just after a junction on the left. When should you signal?",
      "bn": "You are driving in busy traffic. You want to pull up on the left just after a junction on the left. When should you signal?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "It would be better not to signal at all",
          "bn": "It would be better not to signal at all"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "As you are passing or just after the junction",
          "bn": "As you are passing or just after the junction"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Just before you reach the junction",
          "bn": "Just before you reach the junction"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Well before you reach the junction",
          "bn": "Well before you reach the junction"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q598",
    "categoryId": "c13",
    "text": {
      "en": "Whilst driving you have an accident in which someone is injured. You must report this to the police within",
      "bn": "Whilst driving you have an accident in which someone is injured. You must report this to the police within"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "7 days",
          "bn": "7 days"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "24 hours",
          "bn": "24 hours"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "36 hours",
          "bn": "36 hours"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "12 hours",
          "bn": "12 hours"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q599",
    "categoryId": "c8",
    "text": {
      "en": "You are carrying a child in your car. They are under three years of age. Which of these is a suitable restraint?",
      "bn": "You are carrying a child in your car. They are under three years of age. Which of these is a suitable restraint?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "An adult seat belt",
          "bn": "An adult seat belt"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "A child seat",
          "bn": "A child seat"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "An adult lap belt",
          "bn": "An adult lap belt"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "An adult holding a child",
          "bn": "An adult holding a child"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q600",
    "categoryId": "c4",
    "text": {
      "en": "What is the maximum speed limit in a built up area unless indicated otherwise?",
      "bn": "What is the maximum speed limit in a built up area unless indicated otherwise?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "60mph",
          "bn": "60mph"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "30mph",
          "bn": "30mph"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "50mph",
          "bn": "50mph"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "40mph",
          "bn": "40mph"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q601",
    "categoryId": "c8",
    "text": {
      "en": "You are travelling in heavy rain. Your overall stopping distance is likely to be",
      "bn": "You are travelling in heavy rain. Your overall stopping distance is likely to be"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Quadrupled",
          "bn": "Quadrupled"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Up to 15 times greater",
          "bn": "Up to 15 times greater"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Doubled",
          "bn": "Doubled"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Tripled",
          "bn": "Tripled"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q602",
    "categoryId": "c9",
    "text": {
      "en": "You are driving on a dual carriageway. You have to slow down quickly due to a hazard. You should:",
      "bn": "You are driving on a dual carriageway. You have to slow down quickly due to a hazard. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Switch on your hazard lights",
          "bn": "Switch on your hazard lights"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Switch on your headlights",
          "bn": "Switch on your headlights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Flash your headlights",
          "bn": "Flash your headlights"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q603",
    "categoryId": "c6",
    "text": {
      "en": "Your car hits a pedestrian at 60 kph. The pedestrian will:",
      "bn": "Your car hits a pedestrian at 60 kph. The pedestrian will:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Certainly survive",
          "bn": "Certainly survive"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Probably be killed",
          "bn": "Probably be killed"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Probably survive",
          "bn": "Probably survive"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Certainly be killed",
          "bn": "Certainly be killed"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "Speed kills - The relationship between speed and injury severity is particularly critical for vulnerable road users such as pedestrians and cyclists. For example, pedestrians have been shown to have a 90% chance of survival when struck by a car travelling at 30 km/h (18 mph) or below, but less than 50% chance of surviving an impact at 45 km/h (28 mph). Pedestrians have almost no chance of surviving an impact at 80 km/hr (50 mph). ",
      "bn": "Speed kills - The relationship between speed and injury severity is particularly critical for vulnerable road users such as pedestrians and cyclists. For example, pedestrians have been shown to have a 90% chance of survival when struck by a car travelling at 30 km/h (18 mph) or below, but less than 50% chance of surviving an impact at 45 km/h (28 mph). Pedestrians have almost no chance of surviving an impact at 80 km/hr (50 mph). "
    }
  },
  {
    "id": "q604",
    "categoryId": "c10",
    "text": {
      "en": "When must you stop at this junction?",
      "bn": "When must you stop at this junction?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Only when the area is busy",
          "bn": "Only when the area is busy"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "At all times",
          "bn": "At all times"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When turning right only",
          "bn": "When turning right only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "During rush hours only",
          "bn": "During rush hours only"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa933f71df99.jpg"
  },
  {
    "id": "q605",
    "categoryId": "c5",
    "text": {
      "en": "Who is especially in danger of not being seen as you reverse your car?",
      "bn": "Who is especially in danger of not being seen as you reverse your car?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Cyclists",
          "bn": "Cyclists"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Children",
          "bn": "Children"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Motorcyclists",
          "bn": "Motorcyclists"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Car drivers",
          "bn": "Car drivers"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q606",
    "categoryId": "c3",
    "text": {
      "en": "A driver pulls out of a side road in front of you. You have to brake hard. You should",
      "bn": "A driver pulls out of a side road in front of you. You have to brake hard. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Ignore the error and stay calm",
          "bn": "Ignore the error and stay calm"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Flash your lights to show your annoyance",
          "bn": "Flash your lights to show your annoyance"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound your horn to show your annoyance",
          "bn": "Sound your horn to show your annoyance"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Overtake as soon as possible",
          "bn": "Overtake as soon as possible"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q607",
    "categoryId": "c10",
    "text": {
      "en": "You think the driver in the vehicle in front has forgotten to cancel their right indicator. You should",
      "bn": "You think the driver in the vehicle in front has forgotten to cancel their right indicator. You should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Flash your lights to alert the driver",
          "bn": "Flash your lights to alert the driver"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stay behind and not overtake",
          "bn": "Stay behind and not overtake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Overtake on the left if there is room",
          "bn": "Overtake on the left if there is room"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sound your horn before overtaking",
          "bn": "Sound your horn before overtaking"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q608",
    "categoryId": "c3",
    "text": {
      "en": "Vehicles fitted with an anti-lock brake system",
      "bn": "Vehicles fitted with an anti-lock brake system"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Can be steered while you are braking",
          "bn": "Can be steered while you are braking"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Are impossible to skid",
          "bn": "Are impossible to skid"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Are not fitted with a handbrake",
          "bn": "Are not fitted with a handbrake"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Accelerate much faster",
          "bn": "Accelerate much faster"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q609",
    "categoryId": "c11",
    "text": {
      "en": "You are approaching this roundabout and see the cyclist signal right. Why is the cyclist keeping to the left?",
      "bn": "You are approaching this roundabout and see the cyclist signal right. Why is the cyclist keeping to the left?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The cyclist is going to turn left instead",
          "bn": "The cyclist is going to turn left instead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The cyclist thinks The highway Code does not apply to bicycles",
          "bn": "The cyclist thinks The highway Code does not apply to bicycles"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "It is quicker route for cyclist",
          "bn": "It is quicker route for cyclist"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The cyclist is slower and more vulnerable",
          "bn": "The cyclist is slower and more vulnerable"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9352c0dc25.jpg"
  },
  {
    "id": "q610",
    "categoryId": "c13",
    "text": {
      "en": "At an accident a small child is not breathing. When giving a mouth to mouth you should breathe",
      "bn": "At an accident a small child is not breathing. When giving a mouth to mouth you should breathe"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Heavily",
          "bn": "Heavily"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Rapidly",
          "bn": "Rapidly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Gently",
          "bn": "Gently"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sharply",
          "bn": "Sharply"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q611",
    "categoryId": "c6",
    "text": {
      "en": "When you are overtaking a cyclist in the road, you should leave as much room as you would give to a car. What is the main reason for this?",
      "bn": "When you are overtaking a cyclist in the road, you should leave as much room as you would give to a car. What is the main reason for this?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "The cyclist might have to make a right turn",
          "bn": "The cyclist might have to make a right turn"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "The cyclist might swerve",
          "bn": "The cyclist might swerve"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The cyclist might get off the bike",
          "bn": "The cyclist might get off the bike"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "The cyclist might change lanes",
          "bn": "The cyclist might change lanes"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q612",
    "categoryId": "c11",
    "text": {
      "en": "You are signaling to turn right in busy traffic. How would you confirm your intention safely?",
      "bn": "You are signaling to turn right in busy traffic. How would you confirm your intention safely?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Give an arm signal",
          "bn": "Give an arm signal"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Position over the centre line",
          "bn": "Position over the centre line"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Flash your headlights",
          "bn": "Flash your headlights"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Sound the horn",
          "bn": "Sound the horn"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q613",
    "categoryId": "c11",
    "text": {
      "en": "When may you use hazard warning lights?",
      "bn": "When may you use hazard warning lights?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When you are being towed",
          "bn": "When you are being towed"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To park on double yellow lines",
          "bn": "To park on double yellow lines"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When you have broken down",
          "bn": "When you have broken down"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To park alongside another car",
          "bn": "To park alongside another car"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q614",
    "categoryId": "c6",
    "text": {
      "en": "You are driving on a narrow country road. Where would you find it most difficult to see horses and riders ahead of you?",
      "bn": "You are driving on a narrow country road. Where would you find it most difficult to see horses and riders ahead of you?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "On right-hand bends",
          "bn": "On right-hand bends"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "On left-hand bends",
          "bn": "On left-hand bends"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When uphill",
          "bn": "When uphill"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When downhill",
          "bn": "When downhill"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q615",
    "categoryId": "c12",
    "text": {
      "en": "A police officer asks to see your documents. You do not have them with you. You may be asked to take them to the police station with",
      "bn": "A police officer asks to see your documents. You do not have them with you. You may be asked to take them to the police station with"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "14 days",
          "bn": "14 days"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "5 days",
          "bn": "5 days"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "7 days",
          "bn": "7 days"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "21 days",
          "bn": "21 days"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q616",
    "categoryId": "c11",
    "text": {
      "en": "Front fog lights may be used ONLY if:",
      "bn": "Front fog lights may be used ONLY if:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "They are not as bright as the headlights",
          "bn": "They are not as bright as the headlights"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Visibility is seriously reduced",
          "bn": "Visibility is seriously reduced"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "An audible warning device is used",
          "bn": "An audible warning device is used"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "They are fitted above the bumper",
          "bn": "They are fitted above the bumper"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q617",
    "categoryId": "c11",
    "text": {
      "en": "You are on a dual carriageway. Ahead you see a vehicle with an amber flashing light. What could this be?",
      "bn": "You are on a dual carriageway. Ahead you see a vehicle with an amber flashing light. What could this be?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "A disabled person`s vehicle",
          "bn": "A disabled person`s vehicle"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "A doctor on call",
          "bn": "A doctor on call"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "A fire engine",
          "bn": "A fire engine"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "An ambulance",
          "bn": "An ambulance"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q618",
    "categoryId": "c11",
    "text": {
      "en": "The driver of this car is giving an arm signal. What is he about to do?",
      "bn": "The driver of this car is giving an arm signal. What is he about to do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Go straight ahead",
          "bn": "Go straight ahead"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Let pedestrians cross",
          "bn": "Let pedestrians cross"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Turn to the right",
          "bn": "Turn to the right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Turn to the left",
          "bn": "Turn to the left"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9372a1a910.jpg"
  },
  {
    "id": "q619",
    "categoryId": "c3",
    "text": {
      "en": "What should you do if a driver pulls out of a side road in front of you and you have to brake hard?",
      "bn": "What should you do if a driver pulls out of a side road in front of you and you have to brake hard?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Overtake as soon as possible",
          "bn": "Overtake as soon as possible"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Flash your lights to show your annoyance",
          "bn": "Flash your lights to show your annoyance"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound your horn to show your annoyance",
          "bn": "Sound your horn to show your annoyance"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Ignore the error and stay calm",
          "bn": "Ignore the error and stay calm"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "Try to be tolerant if a vehicle does emerge and you have to brake quickly and don't react aggressively. ",
      "bn": "Try to be tolerant if a vehicle does emerge and you have to brake quickly and don't react aggressively. "
    }
  },
  {
    "id": "q620",
    "categoryId": "c10",
    "text": {
      "en": "Catalytic converters are fitted to make the",
      "bn": "Catalytic converters are fitted to make the"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Exhaust systems easier to replace",
          "bn": "Exhaust systems easier to replace"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Engines run quietly",
          "bn": "Engines run quietly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Engines produce more power",
          "bn": "Engines produce more power"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Exhaust fumes cleaner",
          "bn": "Exhaust fumes cleaner"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q621",
    "categoryId": "c7",
    "text": {
      "en": "Before overtaking a large vehicle or lorry you should keep well back. Why is this?",
      "bn": "Before overtaking a large vehicle or lorry you should keep well back. Why is this?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To leave a gap in case stops and rolls back",
          "bn": "To leave a gap in case stops and rolls back"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To get the best view of the road ahead",
          "bn": "To get the best view of the road ahead"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To offer other drivers a safe gap if they want to overtake you",
          "bn": "To offer other drivers a safe gap if they want to overtake you"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To give acceleration space to overtake quickly on blind bends",
          "bn": "To give acceleration space to overtake quickly on blind bends"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q622",
    "categoryId": "c14",
    "text": {
      "en": "A roof rack that is fitted to your car will:",
      "bn": "A roof rack that is fitted to your car will:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Make your car go faster",
          "bn": "Make your car go faster"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Improve the road handling",
          "bn": "Improve the road handling"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Reduce fuel consumption",
          "bn": "Reduce fuel consumption"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Increase fuel consumption",
          "bn": "Increase fuel consumption"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q623",
    "categoryId": "c8",
    "text": {
      "en": "When driving in falling snow you should",
      "bn": "When driving in falling snow you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Brake firmly and quickly",
          "bn": "Brake firmly and quickly"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Use sidelights only",
          "bn": "Use sidelights only"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Be ready to steer sharply",
          "bn": "Be ready to steer sharply"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Brake gently in plenty of time",
          "bn": "Brake gently in plenty of time"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q624",
    "categoryId": "c11",
    "text": {
      "en": "What is the meaning of this sign?",
      "bn": "What is the meaning of this sign?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Uneven road surface",
          "bn": "Uneven road surface"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Humpback bridge",
          "bn": "Humpback bridge"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Humps on the road",
          "bn": "Humps on the road"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Risk of grounding",
          "bn": "Risk of grounding"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "The Risk of Grounding sign informs drivers they are approaching a level crossing railway line or a hump backed bridge ahead where there may be a risk of grounding. ",
      "bn": "The Risk of Grounding sign informs drivers they are approaching a level crossing railway line or a hump backed bridge ahead where there may be a risk of grounding. "
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa9393e6b9d0.jpg"
  },
  {
    "id": "q625",
    "categoryId": "c10",
    "text": {
      "en": "When you are NOT sure it is safe to reverse your vehicle you should",
      "bn": "When you are NOT sure it is safe to reverse your vehicle you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Rev your engine",
          "bn": "Rev your engine"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Use your horn",
          "bn": "Use your horn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Get out and check",
          "bn": "Get out and check"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Reverse slowly",
          "bn": "Reverse slowly"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q626",
    "categoryId": "c7",
    "text": {
      "en": "You are to turn right in busy traffic. How would you confirm your intention safely?",
      "bn": "You are to turn right in busy traffic. How would you confirm your intention safely?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Position over the centre line at an angle",
          "bn": "Position over the centre line at an angle"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Flash your headlamp",
          "bn": "Flash your headlamp"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Sound the horn",
          "bn": "Sound the horn"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Give an arm signal also",
          "bn": "Give an arm signal also"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q627",
    "categoryId": "c6",
    "text": {
      "en": "You are approaching two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?",
      "bn": "You are approaching two cyclists. They approach a roundabout in the left-hand lane. In which direction should you expect the cyclists to go?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Any direction",
          "bn": "Any direction"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Right",
          "bn": "Right"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Straight ahead",
          "bn": "Straight ahead"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Left",
          "bn": "Left"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q628",
    "categoryId": "c4",
    "text": {
      "en": "Your overall stopping distance will be much longer when:",
      "bn": "Your overall stopping distance will be much longer when:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Driving in fog",
          "bn": "Driving in fog"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Driving on a very hot day",
          "bn": "Driving on a very hot day"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Driving in rain",
          "bn": "Driving in rain"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Driving in strong winds",
          "bn": "Driving in strong winds"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q629",
    "categoryId": "c11",
    "text": {
      "en": "Front fog lights may be used ONLY",
      "bn": "Front fog lights may be used ONLY"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When visibility is seriously reduced",
          "bn": "When visibility is seriously reduced"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Between dusk and dawn",
          "bn": "Between dusk and dawn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "During ‘lighting up’ times only",
          "bn": "During ‘lighting up’ times only"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "If they are not as bright as the headlights",
          "bn": "If they are not as bright as the headlights"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q630",
    "categoryId": "c10",
    "text": {
      "en": "If a friend wants to teach you to drive a car, they must:",
      "bn": "If a friend wants to teach you to drive a car, they must:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Be over 18 and hold an advanced driver’s certificate",
          "bn": "Be over 18 and hold an advanced driver’s certificate"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Be over 21 and have had a full license for at least three years.",
          "bn": "Be over 21 and have had a full license for at least three years."
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Be over 18 and have fully comprehensive insurance",
          "bn": "Be over 18 and have fully comprehensive insurance"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Be over 23 and have held a full licence for at least 5 years",
          "bn": "Be over 23 and have held a full licence for at least 5 years"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q631",
    "categoryId": "c9",
    "text": {
      "en": "You are driving in the left-hand lane of a dual carriageway. Another car overtakes and pulls in front of you leaving you without enough separation distance. You should:",
      "bn": "You are driving in the left-hand lane of a dual carriageway. Another car overtakes and pulls in front of you leaving you without enough separation distance. You should:"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Continue as you are",
          "bn": "Continue as you are"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Sound your horn",
          "bn": "Sound your horn"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Drop back",
          "bn": "Drop back"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Move to the right-hand lane",
          "bn": "Move to the right-hand lane"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q632",
    "categoryId": "c11",
    "text": {
      "en": "You are approaching a crossroads. The traffic lights have failed. What should you do?",
      "bn": "You are approaching a crossroads. The traffic lights have failed. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Be prepared to brake sharply to a stop",
          "bn": "Be prepared to brake sharply to a stop"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Be prepared to stop for any traffic",
          "bn": "Be prepared to stop for any traffic"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Brake sharply to a stop before looking",
          "bn": "Brake sharply to a stop before looking"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Brake and stop only for large vehicles",
          "bn": "Brake and stop only for large vehicles"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q633",
    "categoryId": "c5",
    "text": {
      "en": "Some two-way roads are divided into three lanes. Why are these particularly dangerous?",
      "bn": "Some two-way roads are divided into three lanes. Why are these particularly dangerous?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Traffic can travel faster in poor weather conditions",
          "bn": "Traffic can travel faster in poor weather conditions"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Traffic in both directions can use the middle lane to overtake",
          "bn": "Traffic in both directions can use the middle lane to overtake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Traffic can overtake on the left",
          "bn": "Traffic can overtake on the left"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Traffic uses the middle lane for emergencies only",
          "bn": "Traffic uses the middle lane for emergencies only"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q634",
    "categoryId": "c12",
    "text": {
      "en": "A provisional licence holder must not drive a motorcar",
      "bn": "A provisional licence holder must not drive a motorcar"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "On a dual carriageway",
          "bn": "On a dual carriageway"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Alone",
          "bn": "Alone"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "With passengers in the back",
          "bn": "With passengers in the back"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "At night",
          "bn": "At night"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q635",
    "categoryId": "c6",
    "text": {
      "en": "What should you do when overtaking a motorcyclist in strong winds?",
      "bn": "What should you do when overtaking a motorcyclist in strong winds?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Pass immediately",
          "bn": "Pass immediately"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Pass quickly",
          "bn": "Pass quickly"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Pass wide",
          "bn": "Pass wide"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Pass close",
          "bn": "Pass close"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q636",
    "categoryId": "c10",
    "text": {
      "en": "A strong crosswind is least likely to affect which of these vehicles?",
      "bn": "A strong crosswind is least likely to affect which of these vehicles?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Motorcycles",
          "bn": "Motorcycles"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Cars",
          "bn": "Cars"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Cyclists",
          "bn": "Cyclists"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "High-sided vehicles",
          "bn": "High-sided vehicles"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q637",
    "categoryId": "c4",
    "text": {
      "en": "When driving at 60mph on a dry road what would be the shortest overall stopping distance?",
      "bn": "When driving at 60mph on a dry road what would be the shortest overall stopping distance?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "53 meters",
          "bn": "53 meters"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "73 meters",
          "bn": "73 meters"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "96 meters",
          "bn": "96 meters"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "58 meters",
          "bn": "58 meters"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q638",
    "categoryId": "c10",
    "text": {
      "en": "When may you reverse from a side-road into a main road?",
      "bn": "When may you reverse from a side-road into a main road?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Only if both roads are clear of traffic",
          "bn": "Only if both roads are clear of traffic"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Not at any time",
          "bn": "Not at any time"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "At any time",
          "bn": "At any time"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Only if the main road is clear of traffic",
          "bn": "Only if the main road is clear of traffic"
        }
      }
    ],
    "correctOptionId": "b",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q639",
    "categoryId": "c3",
    "text": {
      "en": "You are driving down a long steep hill. You suddenly notice that your brakes are not working as well as normal. What is the usual cause of this?",
      "bn": "You are driving down a long steep hill. You suddenly notice that your brakes are not working as well as normal. What is the usual cause of this?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Oil on the brakes",
          "bn": "Oil on the brakes"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Badly adjusted",
          "bn": "Badly adjusted"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "The brakes overheating",
          "bn": "The brakes overheating"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Air in the brake fluid",
          "bn": "Air in the brake fluid"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q640",
    "categoryId": "c10",
    "text": {
      "en": "If a trailer swerves or snakes when you are towing it you should",
      "bn": "If a trailer swerves or snakes when you are towing it you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Ease off the accelerator and reduce your speed",
          "bn": "Ease off the accelerator and reduce your speed"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Brake hard and hold the pedal down",
          "bn": "Brake hard and hold the pedal down"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Increase your speed as quickly as possible",
          "bn": "Increase your speed as quickly as possible"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Let go of the steering wheel and let it correct itself",
          "bn": "Let go of the steering wheel and let it correct itself"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q641",
    "categoryId": "c10",
    "text": {
      "en": "You are driving a slow moving car on a narrow road. When traffic wishes to overtake you should",
      "bn": "You are driving a slow moving car on a narrow road. When traffic wishes to overtake you should"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Pull in safely as soon as you can do so",
          "bn": "Pull in safely as soon as you can do so"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stop immediately and wave it on",
          "bn": "Stop immediately and wave it on"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Put your hazard warning lights on",
          "bn": "Put your hazard warning lights on"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Take no action",
          "bn": "Take no action"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "Safety is 1st priority, and at the same time try to keep a smooth traffic flow ",
      "bn": "Safety is 1st priority, and at the same time try to keep a smooth traffic flow "
    }
  },
  {
    "id": "q642",
    "categoryId": "c11",
    "text": {
      "en": "You are at a junction controlled by traffic lights. When should you NOT proceed at green?",
      "bn": "You are at a junction controlled by traffic lights. When should you NOT proceed at green?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "When pedestrians are waiting to cross",
          "bn": "When pedestrians are waiting to cross"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "When you think the lights may be about to change",
          "bn": "When you think the lights may be about to change"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "When you intend to turn right",
          "bn": "When you intend to turn right"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "When your exit from the junction is blocked",
          "bn": "When your exit from the junction is blocked"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa93e3c7a9ed.jpg"
  },
  {
    "id": "q643",
    "categoryId": "c6",
    "text": {
      "en": "It is very windy. You are behind a motorcyclist who is overtaking a high-sided vehicle. What should you do?",
      "bn": "It is very windy. You are behind a motorcyclist who is overtaking a high-sided vehicle. What should you do?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Keep close to the motorcyclist",
          "bn": "Keep close to the motorcyclist"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Stay level with the motorcyclist",
          "bn": "Stay level with the motorcyclist"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Keep well back",
          "bn": "Keep well back"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Overtake the motorcyclist immediately",
          "bn": "Overtake the motorcyclist immediately"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q644",
    "categoryId": "c8",
    "text": {
      "en": "When following a vehicle on a wet road you should leave a time gap of at least?",
      "bn": "When following a vehicle on a wet road you should leave a time gap of at least?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "4 seconds",
          "bn": "4 seconds"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "3 seconds",
          "bn": "3 seconds"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "2 seconds",
          "bn": "2 seconds"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "1 second",
          "bn": "1 second"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    }
  },
  {
    "id": "q645",
    "categoryId": "c10",
    "text": {
      "en": "When approaching a right-hand bend you should keep well to the left. Why this?",
      "bn": "When approaching a right-hand bend you should keep well to the left. Why this?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "To improve your view of the road",
          "bn": "To improve your view of the road"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "To let faster traffic from behind overtake",
          "bn": "To let faster traffic from behind overtake"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "To overcome the effect of the road’s slope",
          "bn": "To overcome the effect of the road’s slope"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "To be positioned safely if the vehicle skids",
          "bn": "To be positioned safely if the vehicle skids"
        }
      }
    ],
    "correctOptionId": "a",
    "explanation": {
      "en": "No explanation available.",
      "bn": "No explanation available."
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fa93ed8e7348.jpg"
  },
  {
    "id": "q646",
    "categoryId": "c5",
    "text": {
      "en": "Which of these, if allowed to get low, is dangerous?",
      "bn": "Which of these, if allowed to get low, is dangerous?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "Antifreeze level",
          "bn": "Antifreeze level"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Battery water level",
          "bn": "Battery water level"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "Radiator coolant level",
          "bn": "Radiator coolant level"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Brake fluid level",
          "bn": "Brake fluid level"
        }
      }
    ],
    "correctOptionId": "d",
    "explanation": {
      "en": "It will be extremely dangerous if you could not slow down and stop your vehicle ",
      "bn": "It will be extremely dangerous if you could not slow down and stop your vehicle "
    }
  },
  {
    "id": "q647",
    "categoryId": "c4",
    "text": {
      "en": "You are driving at the legal speed limit. A vehicle behind tries to overtake. Should you try to prevent the driver overtaking?",
      "bn": "You are driving at the legal speed limit. A vehicle behind tries to overtake. Should you try to prevent the driver overtaking?"
    },
    "options": [
      {
        "id": "a",
        "text": {
          "en": "No, unless it is safe to do so",
          "bn": "No, unless it is safe to do so"
        }
      },
      {
        "id": "b",
        "text": {
          "en": "Yes, because the other driver is acting dangerously",
          "bn": "Yes, because the other driver is acting dangerously"
        }
      },
      {
        "id": "c",
        "text": {
          "en": "No, not at any time",
          "bn": "No, not at any time"
        }
      },
      {
        "id": "d",
        "text": {
          "en": "Yes, because the other driver is breaking the law",
          "bn": "Yes, because the other driver is breaking the law"
        }
      }
    ],
    "correctOptionId": "c",
    "explanation": {
      "en": "Try to give way to other road users when it is safe to do so There are 1000+ questions in the DVSA theory test question bank, study these comprehensive revision guides and you will pass the the UK driving theory test first time. ",
      "bn": "Try to give way to other road users when it is safe to do so There are 1000+ questions in the DVSA theory test question bank, study these comprehensive revision guides and you will pass the the UK driving theory test first time. "
    },
    "imageUrl": "https://files.cdn-files-a.com/uploads/4860174/2000_5fff06a8054ca.jpg"
  }
];
