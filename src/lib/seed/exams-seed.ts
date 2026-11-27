// ============================================================================
// DATA SOAL ASLI MTs ASSIBYAN (38 PAKET UJIAN — 1.115 SOAL PILIHAN GANDA)
// Diekstrak langsung dari dokumen soal resmi ASAS Tahun Pelajaran 2025/2026 - 2026/2027
// Mencakup Kelas VII, Kelas VIII, dan Kelas IX (Hari Ke-1, Hari Ke-2, Hari Ke-3, Hari Ke-5, Hari Ke-6)
// ============================================================================

export interface QuestionOptionSeed {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface QuestionSeed {
  no: number;
  context?: string;
  imageUrl?: string;
  text: string;
  options: QuestionOptionSeed[];
  answerKey: 'A' | 'B' | 'C' | 'D';
}

export interface ExamSeed {
  id: string;
  code: string;
  title: string;
  subject: string;
  classLevel: 'VII' | 'VIII' | 'IX' | 'ALL';
  scheduleText: string;
  dayOrder?: number;
  dayLabel?: string;
  sessionOrder?: number;
  durationMin: number;
  status: 'draft' | 'published' | 'closed';
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  questions: QuestionSeed[];
}

export const INITIAL_EXAMS_SEED: ExamSeed[] = [
  {
    "id": "exam-bing-vii",
    "code": "ASAS-BING-VII",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Inggris Kelas VII",
    "subject": "Bahasa Inggris",
    "classLevel": "VII",
    "scheduleText": "Rabu, 25 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 3,
    "dayLabel": "Hari Ke-3 • Rabu, 25 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Jack : Hi, Lisa. How are you?\nLisa : …. And you?\nJack : I’m OK",
        "options": [
          {
            "key": "A",
            "text": "How do you do?"
          },
          {
            "key": "B",
            "text": "Fine, thanks."
          },
          {
            "key": "C",
            "text": "Goodbye"
          },
          {
            "key": "D",
            "text": "yes, I am"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Son   : Good morning, mom.",
        "options": [
          {
            "key": "A",
            "text": "Hello, dear"
          },
          {
            "key": "B",
            "text": "hi, son"
          },
          {
            "key": "C",
            "text": "I’m fine, dear"
          },
          {
            "key": "D",
            "text": "Good morning, dear"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 3,
        "text": "Titin : Sorry, Devi. I’m just be going now. See you again\nDevi : ……..",
        "options": [
          {
            "key": "A",
            "text": "Okay. Very well"
          },
          {
            "key": "B",
            "text": "it’s okay, Titin"
          },
          {
            "key": "C",
            "text": "Okay. Until next time"
          },
          {
            "key": "D",
            "text": "Okay, Titin thank you"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 4,
        "text": "Fred   : …….\nTom   : Hi, Fred. Fine with me. And you?\nFred   : Fine too, Thanks.",
        "options": [
          {
            "key": "A",
            "text": "Hi, Tom. Good morning."
          },
          {
            "key": "B",
            "text": "Hi, Tom. Are you okay?"
          },
          {
            "key": "C",
            "text": "Hi, Tom. And what about you?"
          },
          {
            "key": "D",
            "text": "Hi, Tom. How are things with you?"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 5,
        "text": "Nadia   : What is your name?\nBadu    :  ……..",
        "options": [
          {
            "key": "A",
            "text": "My name is Badu"
          },
          {
            "key": "B",
            "text": "I study in Kebagusan Junior High School"
          },
          {
            "key": "C",
            "text": "I’m fine"
          },
          {
            "key": "D",
            "text": "See you"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 6,
        "text": "A   : How old are you?\nB   : ………….",
        "options": [
          {
            "key": "A",
            "text": "I am Catherine"
          },
          {
            "key": "B",
            "text": "I am 12"
          },
          {
            "key": "C",
            "text": "I am fine"
          },
          {
            "key": "D",
            "text": "I am student"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "A   : Where are you from?\nB   : ………..",
        "options": [
          {
            "key": "A",
            "text": "I am in the seventh grade"
          },
          {
            "key": "B",
            "text": "I am from malang"
          },
          {
            "key": "C",
            "text": "I live at Sagan Regency no.5"
          },
          {
            "key": "D",
            "text": "I am student"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "Kamal : What time does your school start everyday?\nFajar    : At ……..",
        "options": [
          {
            "key": "A",
            "text": "Seven o’clock"
          },
          {
            "key": "B",
            "text": "five o’clock"
          },
          {
            "key": "C",
            "text": "twenty past twelve"
          },
          {
            "key": "D",
            "text": "quarter past nine"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 9,
        "imageUrl": "/exam-media/bing7-q16-clock.jpeg",
        "text": "Son      :What time is it?\nMother : ……….",
        "options": [
          {
            "key": "A",
            "text": "Six and twenty five"
          },
          {
            "key": "B",
            "text": "Twenty past six"
          },
          {
            "key": "C",
            "text": "Twenty to six"
          },
          {
            "key": "D",
            "text": "Twenty five past six"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "We usually hold a flag ceremony on …",
        "options": [
          {
            "key": "A",
            "text": "Monday"
          },
          {
            "key": "B",
            "text": "Tuesday"
          },
          {
            "key": "C",
            "text": "Wednesday"
          },
          {
            "key": "D",
            "text": "Thursday"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 11,
        "text": "Teacher : It is July. Do you know what the next month is?\nStudent : Yes, Sir. It is.",
        "options": [
          {
            "key": "A",
            "text": "January"
          },
          {
            "key": "B",
            "text": "June"
          },
          {
            "key": "C",
            "text": "August"
          },
          {
            "key": "D",
            "text": "December"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "text": "Tian : Do you know when we commemorate Kartini day?\nDevi : of course. It is on ….",
        "options": [
          {
            "key": "A",
            "text": "March 25th"
          },
          {
            "key": "B",
            "text": "April 21st"
          },
          {
            "key": "C",
            "text": "May 2nd"
          },
          {
            "key": "D",
            "text": "October 10th"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Yuni : When was the youth pledge ( Sumpah  Pemuda) proclaimed?",
        "options": [
          {
            "key": "A",
            "text": "October 28, 1928"
          },
          {
            "key": "B",
            "text": "August 17, 1945"
          },
          {
            "key": "C",
            "text": "July 5, 1959"
          },
          {
            "key": "D",
            "text": "October 1, 1966"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 14,
        "imageUrl": "/exam-media/bing7-q18-evening.jpeg",
        "text": "Andi : What is it?\nReno : It is a ….",
        "options": [
          {
            "key": "A",
            "text": "Bank"
          },
          {
            "key": "B",
            "text": "Hospital"
          },
          {
            "key": "C",
            "text": "Post office"
          },
          {
            "key": "D",
            "text": "Market"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "text": "Randi : what do we usually do in this room?\nMona  : we ……\nRandi  : Is it a kitchen?\nMona  : Yes, you’re right",
        "options": [
          {
            "key": "A",
            "text": "Take a bath"
          },
          {
            "key": "B",
            "text": "cook"
          },
          {
            "key": "C",
            "text": "store things"
          },
          {
            "key": "D",
            "text": "sleep"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 16,
        "text": "Where do people relax with their family",
        "options": [
          {
            "key": "A",
            "text": "Police station"
          },
          {
            "key": "B",
            "text": "airport"
          },
          {
            "key": "C",
            "text": "city park"
          },
          {
            "key": "D",
            "text": "traditional market"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 17,
        "imageUrl": "/exam-media/bing7-q27-books.jpeg",
        "text": "How many book are there?",
        "options": [
          {
            "key": "A",
            "text": "Six"
          },
          {
            "key": "B",
            "text": "Four"
          },
          {
            "key": "C",
            "text": "Five"
          },
          {
            "key": "D",
            "text": "Three"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Teacher : what is the ….\nStudent : it is the building that people save their money",
        "options": [
          {
            "key": "A",
            "text": "Hospital"
          },
          {
            "key": "B",
            "text": "Bank"
          },
          {
            "key": "C",
            "text": "Post office"
          },
          {
            "key": "D",
            "text": "Market"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "What do you say when you meet someone in the morning?",
        "options": [
          {
            "key": "A",
            "text": "Good night"
          },
          {
            "key": "B",
            "text": "Good morning"
          },
          {
            "key": "C",
            "text": "Good evening"
          },
          {
            "key": "D",
            "text": "Goodbye"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 20,
        "text": "Rina: \"Hello, my name is Rina. What is your name?\"\nSiti: \"....\"",
        "options": [
          {
            "key": "A",
            "text": "I am fine"
          },
          {
            "key": "B",
            "text": "Good morning"
          },
          {
            "key": "C",
            "text": "My name is Siti"
          },
          {
            "key": "D",
            "text": "Thank you"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "The correct response to \"How are you?\" is ....",
        "options": [
          {
            "key": "A",
            "text": "I am fine, thank you"
          },
          {
            "key": "B",
            "text": "Good night"
          },
          {
            "key": "C",
            "text": "See you"
          },
          {
            "key": "D",
            "text": "My name is Budi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 22,
        "text": "What is the English word for \"Buku\"?",
        "options": [
          {
            "key": "A",
            "text": "Pencil"
          },
          {
            "key": "B",
            "text": "Table"
          },
          {
            "key": "C",
            "text": "Book"
          },
          {
            "key": "D",
            "text": "Chair"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "text": "There are ... days in a week.",
        "options": [
          {
            "key": "A",
            "text": "Five"
          },
          {
            "key": "B",
            "text": "Six"
          },
          {
            "key": "C",
            "text": "Seven"
          },
          {
            "key": "D",
            "text": "Eight"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "What is the English word for \"Merah\"?",
        "options": [
          {
            "key": "A",
            "text": "Blue"
          },
          {
            "key": "B",
            "text": "Red"
          },
          {
            "key": "C",
            "text": "Green"
          },
          {
            "key": "D",
            "text": "Yellow"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "My father is a teacher. He works at a ....",
        "options": [
          {
            "key": "A",
            "text": "Hospital"
          },
          {
            "key": "B",
            "text": "School"
          },
          {
            "key": "C",
            "text": "Market"
          },
          {
            "key": "D",
            "text": "Restaurant"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 26,
        "text": "Complete the sentence!\n\"This is my mother. ... name is Mrs. Ani.\"",
        "options": [
          {
            "key": "A",
            "text": "His"
          },
          {
            "key": "B",
            "text": "Her"
          },
          {
            "key": "C",
            "text": "Their"
          },
          {
            "key": "D",
            "text": "My"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 27,
        "text": "What is the correct plural form of \"Apple\"?",
        "options": [
          {
            "key": "A",
            "text": "Apples"
          },
          {
            "key": "B",
            "text": "Applees"
          },
          {
            "key": "C",
            "text": "Apple"
          },
          {
            "key": "D",
            "text": "Applese"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 28,
        "text": "Arrange the words into a correct sentence!\n\"Is – name – My – Andi\"",
        "options": [
          {
            "key": "A",
            "text": "Is my Andi name"
          },
          {
            "key": "B",
            "text": "Andi is name my"
          },
          {
            "key": "C",
            "text": "My name is Andi"
          },
          {
            "key": "D",
            "text": "Name my is Andi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 29,
        "text": "Rina: \"Hello, my name is Rina. What is your name?\"\nSita: \"Hi, Rina. ___ is Sita.\"",
        "options": [
          {
            "key": "A",
            "text": "My name"
          },
          {
            "key": "B",
            "text": "Your name"
          },
          {
            "key": "C",
            "text": "Her name"
          },
          {
            "key": "D",
            "text": "His name"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 30,
        "text": "Teacher: \"Good morning, students!\"\nStudents: \"___ , Ma'am!\"",
        "options": [
          {
            "key": "A",
            "text": "Good night"
          },
          {
            "key": "B",
            "text": "Good afternoon"
          },
          {
            "key": "C",
            "text": "Good morning"
          },
          {
            "key": "D",
            "text": "Good evening"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 31,
        "text": "Andi: \"How are you today, Budi?\"\nBudi: \"___ , thank you. And you?\"",
        "options": [
          {
            "key": "A",
            "text": "I am fine"
          },
          {
            "key": "B",
            "text": "I am Budi"
          },
          {
            "key": "C",
            "text": "I am ten years old"
          },
          {
            "key": "D",
            "text": "I am from Jakarta"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 32,
        "text": "Look at the picture. This is a ___ for writing on the whiteboard.",
        "options": [
          {
            "key": "A",
            "text": "Book"
          },
          {
            "key": "B",
            "text": "Ruler"
          },
          {
            "key": "C",
            "text": "Marker"
          },
          {
            "key": "D",
            "text": "Eraser"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 33,
        "text": "Sinta has two ___. She uses them to read books.",
        "options": [
          {
            "key": "A",
            "text": "Ear"
          },
          {
            "key": "B",
            "text": "Eyes"
          },
          {
            "key": "C",
            "text": "Nose"
          },
          {
            "key": "D",
            "text": "Hand"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 34,
        "text": "There are seven days in a week. Today is Monday. Tomorrow is ___.",
        "options": [
          {
            "key": "A",
            "text": "Sunday"
          },
          {
            "key": "B",
            "text": "Tuesday"
          },
          {
            "key": "C",
            "text": "Friday"
          },
          {
            "key": "D",
            "text": "Saturday"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 35,
        "text": "My mother is a teacher. My father is a doctor. They are my ___.",
        "options": [
          {
            "key": "A",
            "text": "Friends"
          },
          {
            "key": "B",
            "text": "Parents"
          },
          {
            "key": "C",
            "text": "Cousins"
          },
          {
            "key": "D",
            "text": "Classmates"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 36,
        "text": "Lisa: \"What is your hobby, Dina?\"\nDina: \"I like ___ in my free time.\"",
        "options": [
          {
            "key": "A",
            "text": "Reading books"
          },
          {
            "key": "B",
            "text": "Sleeping in class"
          },
          {
            "key": "C",
            "text": "Crying loudly"
          },
          {
            "key": "D",
            "text": "Eating chalk"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 37,
        "text": "Count it: 10 + 5 = ___",
        "options": [
          {
            "key": "A",
            "text": "Twelve"
          },
          {
            "key": "B",
            "text": "Thirteen"
          },
          {
            "key": "C",
            "text": "Fourteen"
          },
          {
            "key": "D",
            "text": "Fifteen"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 38,
        "text": "This is my brother. ___ name is Fajar. He is 12 years old.",
        "options": [
          {
            "key": "A",
            "text": "My"
          },
          {
            "key": "B",
            "text": "Your"
          },
          {
            "key": "C",
            "text": "His"
          },
          {
            "key": "D",
            "text": "Her"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 39,
        "text": "A cat has four ___ to walk.",
        "options": [
          {
            "key": "A",
            "text": "Wings"
          },
          {
            "key": "B",
            "text": "Legs"
          },
          {
            "key": "C",
            "text": "Tails"
          },
          {
            "key": "D",
            "text": "Fins"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 40,
        "text": "The sky is blue and the grass is ___.",
        "options": [
          {
            "key": "A",
            "text": "Green"
          },
          {
            "key": "B",
            "text": "Black"
          },
          {
            "key": "C",
            "text": "Red"
          },
          {
            "key": "D",
            "text": "White"
          }
        ],
        "answerKey": "A"
      }
    ]
  },
  {
    "id": "exam-bing-viii",
    "code": "ASAS-BING-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Inggris Kelas VIII",
    "subject": "Bahasa Inggris",
    "classLevel": "VIII",
    "scheduleText": "Rabu, 25 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 3,
    "dayLabel": "Hari Ke-3 • Rabu, 25 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "When you want to ask people’s opinion about someone , you ask?",
        "options": [
          {
            "key": "A",
            "text": "What do you think of our new teacher ?"
          },
          {
            "key": "B",
            "text": "What does our new teacher look like?"
          },
          {
            "key": "C",
            "text": "Where is our new teacher from ?"
          },
          {
            "key": "D",
            "text": "What is our teacher’s name?"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 2,
        "text": "I Had a terrible day yesterday. First, I woke up an hour late because my alarm clock didn't go off. Then, I was in such a hurry that I burned my hand when I was making breakfast. After breakfast, I got dressed so quickly that I forgot to wear socks.\nWhat happened to the writer yesterday?",
        "options": [
          {
            "key": "A",
            "text": "He has a terrible day"
          },
          {
            "key": "B",
            "text": "He gets a terrible day"
          },
          {
            "key": "C",
            "text": "He had a terrible day"
          },
          {
            "key": "D",
            "text": "He got a terrible day"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "text": "Johan: Excuse me, sir. What time the library close, yesterday ?\nMr. Damar : It ….  at 2 p.m",
        "options": [
          {
            "key": "A",
            "text": "closes"
          },
          {
            "key": "B",
            "text": "close"
          },
          {
            "key": "C",
            "text": "closes"
          },
          {
            "key": "D",
            "text": "closed"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 4,
        "text": "Miss Ina : Did you Understand\nJohan : Yes, I …",
        "options": [
          {
            "key": "A",
            "text": "do"
          },
          {
            "key": "B",
            "text": "Did"
          },
          {
            "key": "C",
            "text": "Is"
          },
          {
            "key": "D",
            "text": "Does"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "She … my cake last day.",
        "options": [
          {
            "key": "A",
            "text": "Eaten"
          },
          {
            "key": "B",
            "text": "Am"
          },
          {
            "key": "C",
            "text": "eat"
          },
          {
            "key": "D",
            "text": "ate"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 6,
        "text": "They ... the animal’s Cage last morning.",
        "options": [
          {
            "key": "A",
            "text": "Cleaning"
          },
          {
            "key": "B",
            "text": "Clean"
          },
          {
            "key": "C",
            "text": "Cleaned"
          },
          {
            "key": "D",
            "text": "Cleanses"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 7,
        "text": "Look! The horse and the donkey look alike. But, the horse ... than the donkey.",
        "options": [
          {
            "key": "A",
            "text": "Younger"
          },
          {
            "key": "B",
            "text": "Bigger"
          },
          {
            "key": "C",
            "text": "Older"
          },
          {
            "key": "D",
            "text": "Smaller"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "Lina is ...than her older sister, Salsa. Lina is 148 centimeters tall and Salsa is 145centimeters tall.",
        "options": [
          {
            "key": "A",
            "text": "Plumper"
          },
          {
            "key": "B",
            "text": "Shorter"
          },
          {
            "key": "C",
            "text": "Fatter"
          },
          {
            "key": "D",
            "text": "Taller"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 9,
        "text": "An Airplane can fly 150 km/hour. A Bus can run 120km/hour. A Bicycle can run 40 km/ hour. A bicycle is ........... than a bus",
        "options": [
          {
            "key": "A",
            "text": "Faster"
          },
          {
            "key": "B",
            "text": "slow"
          },
          {
            "key": "C",
            "text": "Slower"
          },
          {
            "key": "D",
            "text": "Fast"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Keep off the grass. From the text above we know that …",
        "options": [
          {
            "key": "A",
            "text": "We may cut the grass"
          },
          {
            "key": "B",
            "text": "We may walk on the grass"
          },
          {
            "key": "C",
            "text": "We may not walk on the grass"
          },
          {
            "key": "D",
            "text": "We may not keep the grass"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 11,
        "text": "Ten years ago, she . . .only a baby",
        "options": [
          {
            "key": "A",
            "text": "Was"
          },
          {
            "key": "B",
            "text": "Am"
          },
          {
            "key": "C",
            "text": "Were"
          },
          {
            "key": "D",
            "text": "Is"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 12,
        "text": "Mario and Dono .....an active student last year",
        "options": [
          {
            "key": "A",
            "text": "Am"
          },
          {
            "key": "B",
            "text": "Were"
          },
          {
            "key": "C",
            "text": "Is"
          },
          {
            "key": "D",
            "text": "Was"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": ".....he read novel last night?",
        "options": [
          {
            "key": "A",
            "text": "Are"
          },
          {
            "key": "B",
            "text": "Do"
          },
          {
            "key": "C",
            "text": "Did"
          },
          {
            "key": "D",
            "text": "Done"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "Hendra : Did the boys study after class ?\nAyu : No\nHendra : What did they do?\nAyu : They … football",
        "options": [
          {
            "key": "A",
            "text": "Played"
          },
          {
            "key": "B",
            "text": "Will play"
          },
          {
            "key": "C",
            "text": "Playing"
          },
          {
            "key": "D",
            "text": "Play"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 15,
        "text": "Ma’am, I borrowed a black suede clutch and two side pockets. I need it for Bima’s birthday party tonight. Thank you very much.  Daughter.  Who wrote the short message?",
        "options": [
          {
            "key": "A",
            "text": "Daughter"
          },
          {
            "key": "B",
            "text": "Bima"
          },
          {
            "key": "C",
            "text": "Princess"
          },
          {
            "key": "D",
            "text": "Mother"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Teacher       :  “I’ve got some information about English Contest. Don’t be noisy…..”\nStudents      : “Yes, sir.”",
        "options": [
          {
            "key": "A",
            "text": "Can I have your attention, please?"
          },
          {
            "key": "B",
            "text": "I got it"
          },
          {
            "key": "C",
            "text": "You are with me"
          },
          {
            "key": "D",
            "text": "I don’t understand"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 17,
        "text": "Ryan           :  “Do you understand Mrs. Hanna’s story?”\nSintya         :  “...................She speaks very fast.”",
        "options": [
          {
            "key": "A",
            "text": "Not really"
          },
          {
            "key": "B",
            "text": "I don’t know what you mean"
          },
          {
            "key": "C",
            "text": "I’d love to"
          },
          {
            "key": "D",
            "text": "I think so"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Aulia    :  “Did you watch “Tjimanoek Carnival” yesterday?”\nNanda     :  “Yes, I watched it with my younger brother.”\nAulia        :  “........................... “Tjimanoek carnival”?\nNanda : “I think it was so amazing . it makes me so proud of being Indonesian.”",
        "options": [
          {
            "key": "A",
            "text": "Can I see"
          },
          {
            "key": "B",
            "text": "Can you watch"
          },
          {
            "key": "C",
            "text": "What is"
          },
          {
            "key": "D",
            "text": "What do you think of"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 19,
        "text": "Which the following expression shows giving instruction?",
        "options": [
          {
            "key": "A",
            "text": "I am studying"
          },
          {
            "key": "B",
            "text": "Oh sorry"
          },
          {
            "key": "C",
            "text": "I don’t know"
          },
          {
            "key": "D",
            "text": "Hi, turn down the television"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 20,
        "text": "Marry :“............. to Lina’s birthday party?\nPutri : “Of course. I will go there, Marry.”\nMarry : “Ok. Thanks a lot.”",
        "options": [
          {
            "key": "A",
            "text": "don’t you come"
          },
          {
            "key": "B",
            "text": "can you come"
          },
          {
            "key": "C",
            "text": "will you come"
          },
          {
            "key": "D",
            "text": "may you come"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Zidan       :  “..................... Don’t be lazy. Get up and have some exercise outside.”\nAldi : “Okay,  a little bit more, Wait a minute, please.”",
        "options": [
          {
            "key": "A",
            "text": "Aldi, let’s go out"
          },
          {
            "key": "B",
            "text": "Let’s sleep"
          },
          {
            "key": "C",
            "text": "Aldi, will you go?"
          },
          {
            "key": "D",
            "text": "May I go with you?"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 22,
        "text": "Mrs. Diana:  “Ayu, have a seat. Go back to your group!”\nAyu:  “Sorry, Maam. ...................... return this dictionary to the library?”",
        "options": [
          {
            "key": "A",
            "text": "Will you"
          },
          {
            "key": "B",
            "text": "Can you"
          },
          {
            "key": "C",
            "text": "May I"
          },
          {
            "key": "D",
            "text": "Let’s"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "text": "Mr Harry : “ Look at your class! What a messy class! ....................................!”\nAlvin : “ Yes sir, I will clean it up after I’ve finished eating these snacks “",
        "options": [
          {
            "key": "A",
            "text": "I will clean it up!"
          },
          {
            "key": "B",
            "text": "Clean up your classroom!"
          },
          {
            "key": "C",
            "text": "Go to your class!"
          },
          {
            "key": "D",
            "text": "Don’t enter your class!"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "text": "Edo says “We can learn well if the classroom is clean and tidy. So, we must keep our classroom clean and tidy.”\nThe underlined word shows .......",
        "options": [
          {
            "key": "A",
            "text": "An obligation"
          },
          {
            "key": "B",
            "text": "A suggestion"
          },
          {
            "key": "C",
            "text": "An opinion"
          },
          {
            "key": "D",
            "text": "An agreement"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 25,
        "text": "Afifah : “ what do you usually see in Ragunan zoo?”\nNayla : “ ……… many animals in the zoo”",
        "options": [
          {
            "key": "A",
            "text": "There was"
          },
          {
            "key": "B",
            "text": "There were"
          },
          {
            "key": "C",
            "text": "There is"
          },
          {
            "key": "D",
            "text": "There are"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 26,
        "text": "................. an elephant in the zoo.",
        "options": [
          {
            "key": "A",
            "text": "There was"
          },
          {
            "key": "B",
            "text": "There were"
          },
          {
            "key": "C",
            "text": "There is"
          },
          {
            "key": "D",
            "text": "There are"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 27,
        "text": "“YOU SHOULD TAKE A REST FOR FEELING BETTER”\nWe send this card when …",
        "options": [
          {
            "key": "A",
            "text": "We win the competition"
          },
          {
            "key": "B",
            "text": "We visit sick people"
          },
          {
            "key": "C",
            "text": "We celebrate new year"
          },
          {
            "key": "D",
            "text": "We celebrate people birthday"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 28,
        "text": "Handy : “ it’s me. May I come in?”\nWhat is the expression of underline word above?",
        "options": [
          {
            "key": "A",
            "text": "Give invitation"
          },
          {
            "key": "B",
            "text": "Greeting"
          },
          {
            "key": "C",
            "text": "Leave taking"
          },
          {
            "key": "D",
            "text": "Asking permission"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 29,
        "text": "Please ........... your cell phone when you are in mosque",
        "options": [
          {
            "key": "A",
            "text": "Turn in"
          },
          {
            "key": "B",
            "text": "Turn on"
          },
          {
            "key": "C",
            "text": "Turn out"
          },
          {
            "key": "D",
            "text": "Turn off"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 30,
        "text": "Don't smoke here. this is the expression of ....",
        "options": [
          {
            "key": "A",
            "text": "Prohibition"
          },
          {
            "key": "B",
            "text": "Command"
          },
          {
            "key": "C",
            "text": "Necessity"
          },
          {
            "key": "D",
            "text": "Suggestion"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 31,
        "text": "She _____ to school every day.",
        "options": [
          {
            "key": "A",
            "text": "go"
          },
          {
            "key": "B",
            "text": "goes"
          },
          {
            "key": "C",
            "text": "went"
          },
          {
            "key": "D",
            "text": "going"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 32,
        "text": "They _____ football every Sunday.",
        "options": [
          {
            "key": "A",
            "text": "plays"
          },
          {
            "key": "B",
            "text": "played"
          },
          {
            "key": "C",
            "text": "play"
          },
          {
            "key": "D",
            "text": "playing"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 33,
        "text": "My mother _____ delicious food every morning.",
        "options": [
          {
            "key": "A",
            "text": "cook"
          },
          {
            "key": "B",
            "text": "cooked"
          },
          {
            "key": "C",
            "text": "cooking"
          },
          {
            "key": "D",
            "text": "cooks"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 34,
        "text": "He _____ coffee every morning.",
        "options": [
          {
            "key": "A",
            "text": "drink"
          },
          {
            "key": "B",
            "text": "drinks"
          },
          {
            "key": "C",
            "text": "drank"
          },
          {
            "key": "D",
            "text": "drinking"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 35,
        "text": "We _____ English at school.",
        "options": [
          {
            "key": "A",
            "text": "studies"
          },
          {
            "key": "B",
            "text": "studied"
          },
          {
            "key": "C",
            "text": "study"
          },
          {
            "key": "D",
            "text": "studying"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 36,
        "text": "I _____ a movie last night.",
        "options": [
          {
            "key": "A",
            "text": "watch"
          },
          {
            "key": "B",
            "text": "watches"
          },
          {
            "key": "C",
            "text": "watched"
          },
          {
            "key": "D",
            "text": "watching"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 37,
        "text": "She _____ to the market yesterday.",
        "options": [
          {
            "key": "A",
            "text": "go"
          },
          {
            "key": "B",
            "text": "goes"
          },
          {
            "key": "C",
            "text": "going"
          },
          {
            "key": "D",
            "text": "went"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 38,
        "text": "They _____ basketball last weekend.",
        "options": [
          {
            "key": "A",
            "text": "played"
          },
          {
            "key": "B",
            "text": "play"
          },
          {
            "key": "C",
            "text": "plays"
          },
          {
            "key": "D",
            "text": "playing"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 39,
        "text": "My father _____ a new car two days ago.",
        "options": [
          {
            "key": "A",
            "text": "buy"
          },
          {
            "key": "B",
            "text": "buys"
          },
          {
            "key": "C",
            "text": "bought"
          },
          {
            "key": "D",
            "text": "buying"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 40,
        "text": "We _____ dinner at a restaurant last night.",
        "options": [
          {
            "key": "A",
            "text": "eat"
          },
          {
            "key": "B",
            "text": "eats"
          },
          {
            "key": "C",
            "text": "eating"
          },
          {
            "key": "D",
            "text": "ate"
          }
        ],
        "answerKey": "D"
      }
    ]
  },
  {
    "id": "exam-bing-ix",
    "code": "ASAS-BING-IX",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Inggris Kelas IX",
    "subject": "Bahasa Inggris",
    "classLevel": "IX",
    "scheduleText": "Rabu, 25 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 3,
    "dayLabel": "Hari Ke-3 • Rabu, 25 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "I …. At five o’clock every morning.",
        "options": [
          {
            "key": "A",
            "text": "Wakes up"
          },
          {
            "key": "B",
            "text": "Woke Up"
          },
          {
            "key": "C",
            "text": "Waking up"
          },
          {
            "key": "D",
            "text": "Wake up"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 2,
        "text": "My sister and brother seldom …. Shirt",
        "options": [
          {
            "key": "A",
            "text": "wears"
          },
          {
            "key": "B",
            "text": "wearing"
          },
          {
            "key": "C",
            "text": "wear"
          },
          {
            "key": "D",
            "text": "weared"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "context": "This text is for questions number 3 and 4.\nDear Esther\nCONGRATULATIONS!\nEver since I heard about your success as the first winner of singing contest of FLS2N, I know how long and how hard you practiced. We are all very proud of you. We wish you all the best in pursuing your dream to be a popular singer some day.\nRudy\nChairperson of Class 9 A",
        "text": "The text above shows that . . .",
        "options": [
          {
            "key": "A",
            "text": "The writer is one of the contestants"
          },
          {
            "key": "B",
            "text": "Esther is the best student"
          },
          {
            "key": "C",
            "text": "Esther is the first winner of singing contest"
          },
          {
            "key": "D",
            "text": "Rudy is Esther's special friend"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 4,
        "context": "This text is for questions number 3 and 4.\nDear Esther\nCONGRATULATIONS!\nEver since I heard about your success as the first winner of singing contest of FLS2N, I know how long and how hard you practiced. We are all very proud of you. We wish you all the best in pursuing your dream to be a popular singer some day.\nRudy\nChairperson of Class 9 A",
        "text": "The text is for . . . of FL2SN.",
        "options": [
          {
            "key": "A",
            "text": "The best student"
          },
          {
            "key": "B",
            "text": "The best teacher"
          },
          {
            "key": "C",
            "text": "The best singer"
          },
          {
            "key": "D",
            "text": "The best graduate student"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "I told him I ……something to show to his brother last week.",
        "options": [
          {
            "key": "A",
            "text": "had"
          },
          {
            "key": "B",
            "text": "Has"
          },
          {
            "key": "C",
            "text": "Have"
          },
          {
            "key": "D",
            "text": "Haven’t"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 6,
        "text": "One day last year, john …… off his bike.",
        "options": [
          {
            "key": "A",
            "text": "falls"
          },
          {
            "key": "B",
            "text": "Fell"
          },
          {
            "key": "C",
            "text": "Has been falling"
          },
          {
            "key": "D",
            "text": "Is falling"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "context": "The following dialog is for questions 7 and 8.\nZalfa  : I will study English in London this year. I’ll be missing you so much.\nMaula: I’ll give you my number.(7) . . you can call me whenever you want.\nZalfa  :Ok. I promise I will study hard(8)  . . . graduate soon.",
        "text": "Complete blank number (7) in the dialog above!",
        "options": [
          {
            "key": "A",
            "text": "in order to"
          },
          {
            "key": "B",
            "text": "but"
          },
          {
            "key": "C",
            "text": "so that"
          },
          {
            "key": "D",
            "text": "and"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "context": "The following dialog is for questions 7 and 8.\nZalfa  : I will study English in London this year. I’ll be missing you so much.\nMaula: I’ll give you my number.(7) . . you can call me whenever you want.\nZalfa  :Ok. I promise I will study hard(8)  . . . graduate soon.",
        "text": "Complete blank number (8) in the dialog above!",
        "options": [
          {
            "key": "A",
            "text": "so"
          },
          {
            "key": "B",
            "text": "in order to"
          },
          {
            "key": "C",
            "text": "so that"
          },
          {
            "key": "D",
            "text": "because of"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "Yesterday, the student ….. the map of Indonesia.",
        "options": [
          {
            "key": "A",
            "text": "learn"
          },
          {
            "key": "B",
            "text": "Are learning"
          },
          {
            "key": "C",
            "text": "learns"
          },
          {
            "key": "D",
            "text": "Learned"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "Rendy: Is Puncak Pass resort near here?\nMona : Yes, it is.\nJack : … it's about 100 kilometers from here.\nRendy : Oh, really?\nThe suitable expression to complete the dialogue is …",
        "options": [
          {
            "key": "A",
            "text": "I don’t think so"
          },
          {
            "key": "B",
            "text": "I quite agree"
          },
          {
            "key": "C",
            "text": "It certainly is"
          },
          {
            "key": "D",
            "text": "You are right"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 11,
        "text": "Ryan : The government plans to raise the electricity bill next month.\nHani :  …… It will increase the amount of poor people.\nThe suitable expression to complete the dialogue is …",
        "options": [
          {
            "key": "A",
            "text": "I agree with you"
          },
          {
            "key": "B",
            "text": "I totally disagree"
          },
          {
            "key": "C",
            "text": "I don't disagree"
          },
          {
            "key": "D",
            "text": "I agree"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Mother : You know that Tamara always takes sleeping pills to solve her problems.\nFather : That's wrong. It can be dangerous for her life if she doesn't change her bad habit. She should go to a specialist or share her problems with someone she trusts.\nThe underlined expression expresses ....",
        "options": [
          {
            "key": "A",
            "text": "Possibility"
          },
          {
            "key": "B",
            "text": "Agreement"
          },
          {
            "key": "C",
            "text": "Disagreement"
          },
          {
            "key": "D",
            "text": "Uncertainty"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 13,
        "context": "The following dialog is for questions 13 to 15\nRendy:“I don’t feel well. I’m cathing a cold.”\nRose:“You should go to the doctor.\nRima: “ (13) . . . . Just take a good rest and drink a lot of water, Rendy.”\nRanty: “(14) . . . . You should go to the doctor. I think you need to take medicine.”\nRirin: “(15) . . . , Ranty. Too much medicine is not good.\nRahma: “I think the best to do is going home. Your mom and dad know better what should you do.”",
        "text": "Complete blank number (13) in the dialog above!",
        "options": [
          {
            "key": "A",
            "text": "I couldn’t agree with you more"
          },
          {
            "key": "B",
            "text": "I disagree with you"
          },
          {
            "key": "C",
            "text": "I agree with you"
          },
          {
            "key": "D",
            "text": "That’s right"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "context": "The following dialog is for questions 13 to 15\nRendy:“I don’t feel well. I’m cathing a cold.”\nRose:“You should go to the doctor.\nRima: “ (13) . . . . Just take a good rest and drink a lot of water, Rendy.”\nRanty: “(14) . . . . You should go to the doctor. I think you need to take medicine.”\nRirin: “(15) . . . , Ranty. Too much medicine is not good.\nRahma: “I think the best to do is going home. Your mom and dad know better what should you do.”",
        "text": "Complete blank number (14) in the dialog above!",
        "options": [
          {
            "key": "A",
            "text": "I agree with Rose"
          },
          {
            "key": "B",
            "text": "I don’t agree with Rose"
          },
          {
            "key": "C",
            "text": "I don’t think Rose is right"
          },
          {
            "key": "D",
            "text": "I’m not sure about Rose’s opinion"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 15,
        "context": "The following dialog is for questions 13 to 15\nRendy:“I don’t feel well. I’m cathing a cold.”\nRose:“You should go to the doctor.\nRima: “ (13) . . . . Just take a good rest and drink a lot of water, Rendy.”\nRanty: “(14) . . . . You should go to the doctor. I think you need to take medicine.”\nRirin: “(15) . . . , Ranty. Too much medicine is not good.\nRahma: “I think the best to do is going home. Your mom and dad know better what should you do.”",
        "text": "Complete blank number (15) in the dialog above!",
        "options": [
          {
            "key": "A",
            "text": "I don’t think so"
          },
          {
            "key": "B",
            "text": "you are right"
          },
          {
            "key": "C",
            "text": "That’s true"
          },
          {
            "key": "D",
            "text": "I guess so"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Mom : Get up, please. Riko.\nRiko : In a minute, Mom. I'm still sleepy.\nMom : Come on. Have a shower right now, or you'll be late for school.\nWhere does the dialogue take place?",
        "options": [
          {
            "key": "A",
            "text": "In the office"
          },
          {
            "key": "B",
            "text": "At home"
          },
          {
            "key": "C",
            "text": "In class"
          },
          {
            "key": "D",
            "text": "In the library"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Mr. Wilman   : Mr. Enoch, do you mind having dinner at my house this evening?\nMr. Enoch : That sounds good.\nMr. Wilman : Are you sure?\nMr. Enoch : …",
        "options": [
          {
            "key": "A",
            "text": "Of course"
          },
          {
            "key": "B",
            "text": "Fine, go ahead"
          },
          {
            "key": "C",
            "text": "I'm afraid I can't"
          },
          {
            "key": "D",
            "text": "No, I can't"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Rita : Hi, friends! Tomorrow is a holiday. What shall we do?\nRatih : How about going to Ramayana Department store?\nEmi : ... What about swimming?\nRita : OK, so what time shall we go?\nEmi : Nine o'clock.",
        "options": [
          {
            "key": "A",
            "text": "That’s not a good idea"
          },
          {
            "key": "B",
            "text": "I agree with you"
          },
          {
            "key": "C",
            "text": "That's fine"
          },
          {
            "key": "D",
            "text": "You're right"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Dony : ... do you go fishing?\nDeni : Once a week.",
        "options": [
          {
            "key": "A",
            "text": "How far"
          },
          {
            "key": "B",
            "text": "How long"
          },
          {
            "key": "C",
            "text": "How often"
          },
          {
            "key": "D",
            "text": "How many"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 20,
        "text": "Lidya  : What a lovely purse!\nAnne : Thank you, I made it myself.\nLidya : Did you?\nAnne  : Yes, I did.\nRiska : Ssst! Please be quiet! The baby ...",
        "options": [
          {
            "key": "A",
            "text": "sleeping"
          },
          {
            "key": "B",
            "text": "was sleeping"
          },
          {
            "key": "C",
            "text": "is sleeping"
          },
          {
            "key": "D",
            "text": "slept"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "context": "NUTRITION INFORMATION\nServing per package: Avg 2 / Serving size: 30 g\n- Energy: 709 kJ (169 Cal) per serving | 2360 kJ per 100 g\n- Protein: 3,6 g per serving | 12,0 g per 100 g\n- Fat total: 10,5 g per serving | 35,9 g per 100 g\n- Saturated: 4,8 g per serving | 15,9 g per 100 g\n- Carbohydrate: 14,4 g per serving | 47,6 g per 100 g\n- Sugars: 11,9 g per serving | 39,6 g per 100 g\n- Sodium: 45 mg per serving | 148 mg per 100 g\nIngredients: Sugar, Cashew, Milk Solid, Cocoa Mass, Cocoa Butter, Vegetable Fat, Emulsifier (322: Soy), Salt, Flavour.",
        "imageUrl": "/exam-media/bing9-q6-nutrition.png",
        "text": "How much sodium does the product contain per 100 g?",
        "options": [
          {
            "key": "A",
            "text": "45 mg"
          },
          {
            "key": "B",
            "text": "148 mg"
          },
          {
            "key": "C",
            "text": "565 mg"
          },
          {
            "key": "D",
            "text": "709 mg"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 22,
        "context": "NUTRITION INFORMATION\nServing per package: Avg 2 / Serving size: 30 g\n- Energy: 709 kJ (169 Cal) per serving | 2360 kJ per 100 g\n- Protein: 3,6 g per serving | 12,0 g per 100 g\n- Fat total: 10,5 g per serving | 35,9 g per 100 g\n- Saturated: 4,8 g per serving | 15,9 g per 100 g\n- Carbohydrate: 14,4 g per serving | 47,6 g per 100 g\n- Sugars: 11,9 g per serving | 39,6 g per 100 g\n- Sodium: 45 mg per serving | 148 mg per 100 g\nIngredients: Sugar, Cashew, Milk Solid, Cocoa Mass, Cocoa Butter, Vegetable Fat, Emulsifier (322: Soy), Salt, Flavour.",
        "imageUrl": "/exam-media/bing9-q6-nutrition.png",
        "text": "“Ingredients: sugar, cashew, milk solids…etc.”\nThe underlined word means: …. needed to make something.",
        "options": [
          {
            "key": "A",
            "text": "The steps"
          },
          {
            "key": "B",
            "text": "The goals"
          },
          {
            "key": "C",
            "text": "The materials"
          },
          {
            "key": "D",
            "text": "The methods"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "context": "NUTRITION INFORMATION\nServing per package: Avg 2 / Serving size: 30 g\n- Energy: 709 kJ (169 Cal) per serving | 2360 kJ per 100 g\n- Protein: 3,6 g per serving | 12,0 g per 100 g\n- Fat total: 10,5 g per serving | 35,9 g per 100 g\n- Saturated: 4,8 g per serving | 15,9 g per 100 g\n- Carbohydrate: 14,4 g per serving | 47,6 g per 100 g\n- Sugars: 11,9 g per serving | 39,6 g per 100 g\n- Sodium: 45 mg per serving | 148 mg per 100 g\nIngredients: Sugar, Cashew, Milk Solid, Cocoa Mass, Cocoa Butter, Vegetable Fat, Emulsifier (322: Soy), Salt, Flavour.",
        "imageUrl": "/exam-media/bing9-q6-nutrition.png",
        "text": "The label is telling us about … of a product.",
        "options": [
          {
            "key": "A",
            "text": "The steps"
          },
          {
            "key": "B",
            "text": "The goals"
          },
          {
            "key": "C",
            "text": "The materials"
          },
          {
            "key": "D",
            "text": "The nutrition information"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 24,
        "context": "COLD BREAKER — LIKE YOU NEVER FEEL ANY COLD\nFast relief for:\n- Congestion\n- Runny nose\n- Coughs\n- Headache\n- Fever\nContent: 100 tablets | USP | 200 mg\nAVAILABLE IN EVERY STORE IN INDONESIA",
        "imageUrl": "/exam-media/bing9-q8-coldbreaker.png",
        "text": "Which of the following sickness cannot be relieved by this medicine?",
        "options": [
          {
            "key": "A",
            "text": "Headache"
          },
          {
            "key": "B",
            "text": "Coughs"
          },
          {
            "key": "C",
            "text": "Cancer"
          },
          {
            "key": "D",
            "text": "Fever"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 25,
        "context": "COLD BREAKER — LIKE YOU NEVER FEEL ANY COLD\nFast relief for:\n- Congestion\n- Runny nose\n- Coughs\n- Headache\n- Fever\nContent: 100 tablets | USP | 200 mg\nAVAILABLE IN EVERY STORE IN INDONESIA",
        "imageUrl": "/exam-media/bing9-q8-coldbreaker.png",
        "text": "What's the writer's purpose to write the text above?",
        "options": [
          {
            "key": "A",
            "text": "To inform the process of making Cold Breaker"
          },
          {
            "key": "B",
            "text": "To persuade people to use the product"
          },
          {
            "key": "C",
            "text": "To explain the ingredients of the product"
          },
          {
            "key": "D",
            "text": "To describe the illnesses that can be cured"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 26,
        "context": "COLD BREAKER — LIKE YOU NEVER FEEL ANY COLD\nFast relief for:\n- Congestion\n- Runny nose\n- Coughs\n- Headache\n- Fever\nContent: 100 tablets | USP | 200 mg\nAVAILABLE IN EVERY STORE IN INDONESIA",
        "imageUrl": "/exam-media/bing9-q8-coldbreaker.png",
        "text": "Which information is NOT available in the text?",
        "options": [
          {
            "key": "A",
            "text": "The function of medicine"
          },
          {
            "key": "B",
            "text": "The medicine availability in drugstore."
          },
          {
            "key": "C",
            "text": "The medicine expiration date"
          },
          {
            "key": "D",
            "text": "The content of medicine"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 27,
        "context": "DRUG FACTS — Uses:\n• Temporarily relieves nasal congestion due to the common cold, hay fever or other upper respiratory allergies, or associated with sinusitis.\n• Temporarily relieves these symptoms due to hay fever (allergic rhinitis): runny nose, sneezing, itching of the nose or throat, itchy, watery eyes.\n• Temporarily restores freer breathing through the nose.\nDirections (Do not take more than 4 doses in any 24-hour period):\n- Adults and children over 12 years: 4 tsp (teaspoons) every 4 hours\n- Children 6 to under 12 years: 2 tsp (teaspoons) every 4 hours\n- Children under 6 years: ask a doctor.",
        "imageUrl": "/exam-media/bing9-q9-directions.jpeg",
        "text": "From the label above we know that ....",
        "options": [
          {
            "key": "A",
            "text": "This medicine is only for adult"
          },
          {
            "key": "B",
            "text": "This medicine is in the form of syrup"
          },
          {
            "key": "C",
            "text": "Stomachache can be cured with this medicine"
          },
          {
            "key": "D",
            "text": "Children under 12 cannot take this medicine"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 28,
        "context": "DRUG FACTS — Uses:\n• Temporarily relieves nasal congestion due to the common cold, hay fever or other upper respiratory allergies, or associated with sinusitis.\n• Temporarily relieves these symptoms due to hay fever (allergic rhinitis): runny nose, sneezing, itching of the nose or throat, itchy, watery eyes.\n• Temporarily restores freer breathing through the nose.\nDirections (Do not take more than 4 doses in any 24-hour period):\n- Adults and children over 12 years: 4 tsp (teaspoons) every 4 hours\n- Children 6 to under 12 years: 2 tsp (teaspoons) every 4 hours\n- Children under 6 years: ask a doctor.",
        "imageUrl": "/exam-media/bing9-q9-directions.jpeg",
        "text": "Who must be consulted to the doctor before taking this medicine?",
        "options": [
          {
            "key": "A",
            "text": "Adult"
          },
          {
            "key": "B",
            "text": "Children under 6 years"
          },
          {
            "key": "C",
            "text": "Children 12 years and over"
          },
          {
            "key": "D",
            "text": "Children 6 to under 12 years"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 29,
        "context": "DRUG FACTS — Uses:\n• Temporarily relieves nasal congestion due to the common cold, hay fever or other upper respiratory allergies, or associated with sinusitis.\n• Temporarily relieves these symptoms due to hay fever (allergic rhinitis): runny nose, sneezing, itching of the nose or throat, itchy, watery eyes.\n• Temporarily restores freer breathing through the nose.\nDirections (Do not take more than 4 doses in any 24-hour period):\n- Adults and children over 12 years: 4 tsp (teaspoons) every 4 hours\n- Children 6 to under 12 years: 2 tsp (teaspoons) every 4 hours\n- Children under 6 years: ask a doctor.",
        "imageUrl": "/exam-media/bing9-q9-directions.jpeg",
        "text": "\"Temporarily relieves these symptoms due to hay fever.\"\nWhat does the underlined word mean?",
        "options": [
          {
            "key": "A",
            "text": "Increase"
          },
          {
            "key": "B",
            "text": "Ease"
          },
          {
            "key": "C",
            "text": "Repeat"
          },
          {
            "key": "D",
            "text": "Believe"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 30,
        "context": "SUPPLEMENTS FACTS\nServing size: 1 tablet | Servings per container: 30\n- Vitamin C (as non acidic calcium ascorbate): 250 mg (416,67% DV)\n- Calcium (as calcium ascorbate): 50 mg (7,14% DV)\n- Citrus bioflavonoid*: 50 mg | Rutin*: 25 mg | Hesperidin*: 25 mg | Rose hips*: 125 mg | Acerola*: 5 mg\nSuggested use: 1 tablet after meal.\nThis product contains no artificial colors, flavors, preservatives, milk, egg, sugar, chemical solvent, starch or gluten.",
        "imageUrl": "/exam-media/bing9-q11-supplement.png",
        "text": "What is the purpose of the text?",
        "options": [
          {
            "key": "A",
            "text": "To advertise a supplement for woman"
          },
          {
            "key": "B",
            "text": "To describe a product for adult"
          },
          {
            "key": "C",
            "text": "To give detailed information about the supplement"
          },
          {
            "key": "D",
            "text": "To tell the value of a supplement"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 31,
        "text": "She _____ to school every day.",
        "options": [
          {
            "key": "A",
            "text": "go"
          },
          {
            "key": "B",
            "text": "goes"
          },
          {
            "key": "C",
            "text": "went"
          },
          {
            "key": "D",
            "text": "going"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 32,
        "text": "They _____ football every Sunday.",
        "options": [
          {
            "key": "A",
            "text": "plays"
          },
          {
            "key": "B",
            "text": "played"
          },
          {
            "key": "C",
            "text": "play"
          },
          {
            "key": "D",
            "text": "playing"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 33,
        "text": "My mother _____ delicious food every morning.",
        "options": [
          {
            "key": "A",
            "text": "cook"
          },
          {
            "key": "B",
            "text": "cooked"
          },
          {
            "key": "C",
            "text": "cooking"
          },
          {
            "key": "D",
            "text": "cooks"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 34,
        "text": "He _____ coffee every morning.",
        "options": [
          {
            "key": "A",
            "text": "drink"
          },
          {
            "key": "B",
            "text": "drinks"
          },
          {
            "key": "C",
            "text": "drank"
          },
          {
            "key": "D",
            "text": "drinking"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 35,
        "text": "We _____ English at school.",
        "options": [
          {
            "key": "A",
            "text": "studies"
          },
          {
            "key": "B",
            "text": "studied"
          },
          {
            "key": "C",
            "text": "study"
          },
          {
            "key": "D",
            "text": "studying"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 36,
        "text": "I _____ a movie last night.",
        "options": [
          {
            "key": "A",
            "text": "watch"
          },
          {
            "key": "B",
            "text": "watches"
          },
          {
            "key": "C",
            "text": "watched"
          },
          {
            "key": "D",
            "text": "watching"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 37,
        "text": "She _____ to the market yesterday.",
        "options": [
          {
            "key": "A",
            "text": "go"
          },
          {
            "key": "B",
            "text": "goes"
          },
          {
            "key": "C",
            "text": "going"
          },
          {
            "key": "D",
            "text": "went"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 38,
        "text": "They _____ basketball last weekend.",
        "options": [
          {
            "key": "A",
            "text": "played"
          },
          {
            "key": "B",
            "text": "play"
          },
          {
            "key": "C",
            "text": "plays"
          },
          {
            "key": "D",
            "text": "playing"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 39,
        "text": "My father _____ a new car two days ago.",
        "options": [
          {
            "key": "A",
            "text": "buy"
          },
          {
            "key": "B",
            "text": "buys"
          },
          {
            "key": "C",
            "text": "bought"
          },
          {
            "key": "D",
            "text": "buying"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 40,
        "text": "We _____ dinner at a restaurant last night.",
        "options": [
          {
            "key": "A",
            "text": "eat"
          },
          {
            "key": "B",
            "text": "eats"
          },
          {
            "key": "C",
            "text": "eating"
          },
          {
            "key": "D",
            "text": "ate"
          }
        ],
        "answerKey": "D"
      }
    ]
  },
  {
    "id": "exam-fiqih-vii",
    "code": "ASAS-FIQIH-VII",
    "title": "Asesmen Sumatif Akhir Semester — Fiqih Kelas VII",
    "subject": "Fiqih",
    "classLevel": "VII",
    "scheduleText": "Rabu, 25 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Menyucikan diri dari hadats dan najis ketika akan mengerjakan ibadah disebut….",
        "options": [
          {
            "key": "A",
            "text": "Tayamum"
          },
          {
            "key": "B",
            "text": "Thaharah"
          },
          {
            "key": "C",
            "text": "Wudhu"
          },
          {
            "key": "D",
            "text": "Istinja’"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِين — Ayat tersebut menjelaskan tentang....",
        "options": [
          {
            "key": "A",
            "text": "Thaharah (Bersuci)"
          },
          {
            "key": "B",
            "text": "Najis"
          },
          {
            "key": "C",
            "text": "Shalat"
          },
          {
            "key": "D",
            "text": "Puasa"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 3,
        "text": "Ditinjau dari segi hukumnya, air dibagi menjadi empat macam, yaitu...",
        "options": [
          {
            "key": "A",
            "text": "Air mutlak, air musyammas, air mutanajjis, air zam-zam"
          },
          {
            "key": "B",
            "text": "Air mutlak, air musyammas, air musta’mal, air mutanajjis"
          },
          {
            "key": "C",
            "text": "Air mutlak, air musyammas, air mutanajjis, air sumur"
          },
          {
            "key": "D",
            "text": "Air mutlak, air musyammas, air mutanajjis, air hujan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "Air panas akibat terkena sinar matahari (air musyammas) makruh dipergunakan apabila disimpan di dalam….",
        "options": [
          {
            "key": "A",
            "text": "Penampungan ember plastik"
          },
          {
            "key": "B",
            "text": "Penampungan kendi tanah"
          },
          {
            "key": "C",
            "text": "Penampungan yang terbuat dari besi, baja, atau tembaga (logam berkarat)"
          },
          {
            "key": "D",
            "text": "Bak kamar mandi keramik"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Air suci sedikit yang kurang dari dua qullah dan sudah dipergunakan untuk bersuci (menghilangkan hadats), sehingga tidak dapat dipakai bersuci kembali disebut…",
        "options": [
          {
            "key": "A",
            "text": "Air thahir"
          },
          {
            "key": "B",
            "text": "Air musta’mal"
          },
          {
            "key": "C",
            "text": "Air musyammas"
          },
          {
            "key": "D",
            "text": "Air mutanajjis"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 6,
        "text": "Najis berasal dari bahasa Arab yang artinya....",
        "options": [
          {
            "key": "A",
            "text": "Suci"
          },
          {
            "key": "B",
            "text": "Kotor"
          },
          {
            "key": "C",
            "text": "Bersih"
          },
          {
            "key": "D",
            "text": "Hitam"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "Suatu najis yang cara menyucikannya cukup dipercikkan dengan air pada tempat yang terkena najis disebut najis ….",
        "options": [
          {
            "key": "A",
            "text": "Mughallazhah"
          },
          {
            "key": "B",
            "text": "Mutawassithah"
          },
          {
            "key": "C",
            "text": "Mukhaffafah"
          },
          {
            "key": "D",
            "text": "Hukmiyah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Najis mutawassithah yang masih tampak wujud, bau, ataupun rasanya disebut...",
        "options": [
          {
            "key": "A",
            "text": "Najis hukmiyah"
          },
          {
            "key": "B",
            "text": "Najis ‘ainiyah"
          },
          {
            "key": "C",
            "text": "Najis ringan"
          },
          {
            "key": "D",
            "text": "Najis berat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "Yang termasuk najis mughallazhah (najis berat) ialah….",
        "options": [
          {
            "key": "A",
            "text": "Muntah"
          },
          {
            "key": "B",
            "text": "Darah"
          },
          {
            "key": "C",
            "text": "Khamar"
          },
          {
            "key": "D",
            "text": "Babi dan anjing"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "Suatu najis yang cara menyucikannya dengan membasuh air sebanyak tujuh kali dan salah satunya dicampur dengan tanah disebut najis....",
        "options": [
          {
            "key": "A",
            "text": "Mughallazhah"
          },
          {
            "key": "B",
            "text": "Mutawassithah"
          },
          {
            "key": "C",
            "text": "Mukhaffafah"
          },
          {
            "key": "D",
            "text": "Hukmiyah"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 11,
        "text": "Keadaan tidak suci pada diri seseorang sehingga menjadikannya tidak sah dalam melakukan ibadah shalat disebut…",
        "options": [
          {
            "key": "A",
            "text": "Najis"
          },
          {
            "key": "B",
            "text": "Kotor"
          },
          {
            "key": "C",
            "text": "Hadats"
          },
          {
            "key": "D",
            "text": "Thaharah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "context": "1) Keluar sesuatu dari qubul dan dubur\n2) Karena hilang akal (tidur/pingsan)\n3) Haid\n4) Persentuhan kulit laki-laki dan perempuan bukan mahram\n5) Nifas\n6) Menyentuh kemaluan dengan telapak tangan",
        "text": "Manakah yang termasuk hal-hal yang menyebabkan seseorang berhadats kecil…",
        "options": [
          {
            "key": "A",
            "text": "1), 2), 4), 5)"
          },
          {
            "key": "B",
            "text": "1), 2), 3), 4)"
          },
          {
            "key": "C",
            "text": "1), 2), 4), 6)"
          },
          {
            "key": "D",
            "text": "3), 4), 5), 6)"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 13,
        "text": "Bersuci membersihkan qubul atau dubur sesudah buang air besar atau buang air kecil disebut....",
        "options": [
          {
            "key": "A",
            "text": "Istinja’"
          },
          {
            "key": "B",
            "text": "Thaharah"
          },
          {
            "key": "C",
            "text": "Najis"
          },
          {
            "key": "D",
            "text": "Suci"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 14,
        "context": "1) Mencuci tangan — 2) Niat — 3) Mandi — 4) Kumur-kumur — 5) Membasuh muka — 6) Membasuh kedua tangan sampai siku — 7) Mengusap sebagian kepala — 8) Membasuh telinga — 9) Membasuh kedua kaki sampai mata kaki — 10) Tertib",
        "text": "Manakah yang termasuk rukun wudhu…",
        "options": [
          {
            "key": "A",
            "text": "1), 2), 3), 4), 5), 6)"
          },
          {
            "key": "B",
            "text": "2), 3), 4), 5), 6), 7)"
          },
          {
            "key": "C",
            "text": "2), 5), 6), 7), 9), 10)"
          },
          {
            "key": "D",
            "text": "4), 5), 6), 7), 8), 9)"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Cara menyucikan hadats kecil yaitu harus berwudhu, apabila tidak ada air maka diganti dengan tayamum. Lafadz niat tayamum yaitu…",
        "options": [
          {
            "key": "A",
            "text": "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا ِللهِ تَعَالَى"
          },
          {
            "key": "B",
            "text": "نَوَيْتُ التَّيَمُّمَ لِاسْتِبَاحَةِ الصَّلَاةِ فَرْضًا للهِ تَعَالَى"
          },
          {
            "key": "C",
            "text": "نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ اْلاَكْبَرِ فَرْضًا ِللهِ تَعَالَى"
          },
          {
            "key": "D",
            "text": "اَللّٰهُمَّ حَسِّنْ فَرْجِىْ مِنَ الْفَوَاحِشِ وَطَهِّرْ قَلْبِيْ مِنَ النِّفَاقِ"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 16,
        "text": "نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ اْلاَكْبَرِ مِنَ الحَيْضِ فَرْضًا ِللهِ تَعَالَى — Lafadz niat tersebut adalah….",
        "options": [
          {
            "key": "A",
            "text": "Niat mandi nifas"
          },
          {
            "key": "B",
            "text": "Niat mandi wiladah"
          },
          {
            "key": "C",
            "text": "Niat mandi haid"
          },
          {
            "key": "D",
            "text": "Niat mandi sunnah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 17,
        "text": "Shalat adalah kewajiban yang telah ditentukan waktunya atas orang-orang yang beriman. Menurut bahasa, shalat artinya...",
        "options": [
          {
            "key": "A",
            "text": "Selamat"
          },
          {
            "key": "B",
            "text": "Doa"
          },
          {
            "key": "C",
            "text": "Menyembah"
          },
          {
            "key": "D",
            "text": "Memohon"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Ibadah yang terdiri dari perkataan dan perbuatan tertentu, yang dimulai dengan takbiratul ihram dan diakhiri dengan salam disebut…",
        "options": [
          {
            "key": "A",
            "text": "Do’a"
          },
          {
            "key": "B",
            "text": "Pidato"
          },
          {
            "key": "C",
            "text": "Shalat"
          },
          {
            "key": "D",
            "text": "Khutbah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 19,
        "text": "Dalil وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ وَارْكَعُوْا مَعَ الرّٰكِعِيْنَ merupakan perintah…",
        "options": [
          {
            "key": "A",
            "text": "Ruku"
          },
          {
            "key": "B",
            "text": "Sujud"
          },
          {
            "key": "C",
            "text": "Zakat dan sadaqah"
          },
          {
            "key": "D",
            "text": "Shalat dan zakat"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 20,
        "text": "<u>وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ</u> وَارْكَعُوْا مَعَ الرّٰكِعِيْنَ — Arti ayat yang bergaris bawah adalah….",
        "options": [
          {
            "key": "A",
            "text": "Dan dirikanlah shalat dan tunaikanlah zakat"
          },
          {
            "key": "B",
            "text": "Dan ruku’lah bersama orang-orang yang ruku"
          },
          {
            "key": "C",
            "text": "Laksanakanlah shalat atas perintah Allah"
          },
          {
            "key": "D",
            "text": "Shalat dan zakat adalah kewajiban umat muslim"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 21,
        "context": "1. Suci dari hadats besar dan kecil\n2. Suci badan, pakaian, dan tempat dari najis\n3. Menutup aurat\n4. Telah masuk waktu shalat\n5. Menghadap kiblat",
        "text": "Pernyataan-pernyataan tersebut di atas merupakan…",
        "options": [
          {
            "key": "A",
            "text": "Syarat wajib shalat"
          },
          {
            "key": "B",
            "text": "Syarat sah shalat"
          },
          {
            "key": "C",
            "text": "Sunnah-sunnah shalat"
          },
          {
            "key": "D",
            "text": "Rukun shalat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 22,
        "context": "1) Islam — 2) Baligh — 3) Berakal — 4) Anak kecil — 5) Niat — 6) Berdiri",
        "text": "Perhatikan pernyataan di atas, manakah yang termasuk syarat wajib shalat…",
        "options": [
          {
            "key": "A",
            "text": "3), 4), 5)"
          },
          {
            "key": "B",
            "text": "1), 2), 3)"
          },
          {
            "key": "C",
            "text": "1), 3), 5)"
          },
          {
            "key": "D",
            "text": "2), 4), 6)"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "text": "Amalan sunnah dalam shalat yang apabila terlupakan dianjurkan untuk diganti dengan sujud sahwi disebut....",
        "options": [
          {
            "key": "A",
            "text": "Sunnah hai’at"
          },
          {
            "key": "B",
            "text": "Sunnah yang dianjurkan"
          },
          {
            "key": "C",
            "text": "Sunnah ab’adh"
          },
          {
            "key": "D",
            "text": "Sunnah muakkad"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "<u>صَلاَةُ الجَمَاعَةِ تَفْضُلُ صَلاَة الفَذِّ</u> بِسَبْعٍ وعِشْرِينَ دَرَجَةً — Arti dalil yang digarisbawahi adalah…",
        "options": [
          {
            "key": "A",
            "text": "Shalat berjamaah merupakan kewajiban bagi umat muslim"
          },
          {
            "key": "B",
            "text": "Shalat di hari Jum’at adalah wajib"
          },
          {
            "key": "C",
            "text": "Shalat berjamaah itu lebih utama daripada shalat sendirian"
          },
          {
            "key": "D",
            "text": "Shalat berjamaah itu harus lebih dari satu orang"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 25,
        "text": "Banyak manfaat yang dapat kita peroleh dengan selalu berzikir kepada Allah, kecuali…",
        "options": [
          {
            "key": "A",
            "text": "Menenteramkan hati"
          },
          {
            "key": "B",
            "text": "Menimbulkan kesabaran"
          },
          {
            "key": "C",
            "text": "Selalu dekat dengan Allah"
          },
          {
            "key": "D",
            "text": "Menjadi sombong"
          }
        ],
        "answerKey": "D"
      }
    ],
    "dayOrder": 3,
    "dayLabel": "Hari Ke-3 • Rabu, 25 Nov 2026",
    "sessionOrder": 2
  },
  {
    "id": "exam-fiqih-viii",
    "code": "ASAS-FIQIH-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Fiqih Kelas VIII",
    "subject": "Fiqih",
    "classLevel": "VIII",
    "scheduleText": "Rabu, 25 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Pada zaman Nabi Muhammad SAW dan para sahabat, sujud syukur ketika mendengar kabar kematian Musailamah Al-Kadzab dilakukan oleh ...",
        "options": [
          {
            "key": "A",
            "text": "Nabi Muhammad SAW"
          },
          {
            "key": "B",
            "text": "Abu Bakar Ash-Shiddiq"
          },
          {
            "key": "C",
            "text": "Ali bin Abi Thalib"
          },
          {
            "key": "D",
            "text": "Ka’ab bin Malik"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Sesuai dengan sabda Rasulullah SAW yang diriwayatkan oleh Imam Muslim, keutamaan sujud tilawah adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Akan diampuni dosa"
          },
          {
            "key": "B",
            "text": "Akan dimudahkan rizki"
          },
          {
            "key": "C",
            "text": "Terhindar dari gangguan setan dan masuk surga"
          },
          {
            "key": "D",
            "text": "Terhindar dari bencana"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "text": "Salah satu rukun sujud syukur dan sujud tilawah adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Sujud satu kali"
          },
          {
            "key": "B",
            "text": "Suci dari hadats dan nifas"
          },
          {
            "key": "C",
            "text": "Sujud dua kali"
          },
          {
            "key": "D",
            "text": "Membaca doa qunut"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 4,
        "text": "Sujud tilawah dilakukan ketika ...",
        "options": [
          {
            "key": "A",
            "text": "Mendapat nikmat"
          },
          {
            "key": "B",
            "text": "Mendengar atau membaca ayat sajdah"
          },
          {
            "key": "C",
            "text": "Terhindar dari bahaya"
          },
          {
            "key": "D",
            "text": "Ada yang lupa dalam shalat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "Di dalam Al-Qur’an terdapat .... ayat sajdah.",
        "options": [
          {
            "key": "A",
            "text": "12 ayat"
          },
          {
            "key": "B",
            "text": "13 ayat"
          },
          {
            "key": "C",
            "text": "14 atau 15 ayat"
          },
          {
            "key": "D",
            "text": "17 ayat"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Potongan ayat Al-Qur’an yang merupakan ayat sajdah (QS. Al-‘Alaq: 19) adalah ...",
        "options": [
          {
            "key": "A",
            "text": "سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ"
          },
          {
            "key": "B",
            "text": "فَسَجَدَ اعْتَزَلَ الشَّيْطَانُ"
          },
          {
            "key": "C",
            "text": "كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِبْ"
          },
          {
            "key": "D",
            "text": "يَا أَيُّهَا النَّاسُ إِنَّا لَمْ نُؤْمَرْ بِالسُّجُودِ"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 7,
        "text": "Berikut ini yang merupakan ayat sajdah adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Q.S. Al-A’raf ayat 203"
          },
          {
            "key": "B",
            "text": "Q.S. Al-A’raf ayat 204"
          },
          {
            "key": "C",
            "text": "Q.S. Al-A’raf ayat 205"
          },
          {
            "key": "D",
            "text": "Q.S. Al-A’raf ayat 206"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 8,
        "text": "سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ — Adalah bacaan ....",
        "options": [
          {
            "key": "A",
            "text": "Sujud sahwi"
          },
          {
            "key": "B",
            "text": "Sujud tilawah / syukur"
          },
          {
            "key": "C",
            "text": "I’tidal"
          },
          {
            "key": "D",
            "text": "Sujud ampunan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "Ahmad sedang membaca Al-Qur’an, tiba-tiba saat sampai pada ayat sajdah ia melakukan sujud. Sujud yang dilakukan Ahmad disebut sujud...",
        "options": [
          {
            "key": "A",
            "text": "Syukur"
          },
          {
            "key": "B",
            "text": "Tilawah"
          },
          {
            "key": "C",
            "text": "Sahwi"
          },
          {
            "key": "D",
            "text": "Qiro’ah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 10,
        "text": "Sujud yang dikerjakan karena lupa atau ragu jumlah rakaat dalam shalat adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Sujud syukur"
          },
          {
            "key": "B",
            "text": "Sujud tilawah"
          },
          {
            "key": "C",
            "text": "Sujud sahwi"
          },
          {
            "key": "D",
            "text": "Sujud ampunan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 11,
        "text": "Wanita yang sedang berhadats besar (haid atau nifas) maka ... berpuasa.",
        "options": [
          {
            "key": "A",
            "text": "Wajib"
          },
          {
            "key": "B",
            "text": "Boleh"
          },
          {
            "key": "C",
            "text": "Dilarang / Haram"
          },
          {
            "key": "D",
            "text": "Sah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "text": "Ibadah puasa diberikan langsung balasan pahalanya oleh ...",
        "options": [
          {
            "key": "A",
            "text": "Malaikat"
          },
          {
            "key": "B",
            "text": "Rasul"
          },
          {
            "key": "C",
            "text": "Nabi"
          },
          {
            "key": "D",
            "text": "Allah SWT"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 13,
        "text": "Shaum atau shiyam menurut istilah syariat artinya ...",
        "options": [
          {
            "key": "A",
            "text": "Shalat"
          },
          {
            "key": "B",
            "text": "Puasa (Menahan diri)"
          },
          {
            "key": "C",
            "text": "Zakat"
          },
          {
            "key": "D",
            "text": "Syahadat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "text": "Rukun puasa ada … macam (yaitu niat dan menahan diri dari hal yang membatalkan puasa).",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 15,
        "text": "Syarat sah puasa salah satunya adalah tamyiz atau mumayyiz, yaitu ...",
        "options": [
          {
            "key": "A",
            "text": "Dapat membedakan yang baik dan buruk"
          },
          {
            "key": "B",
            "text": "Laki-laki"
          },
          {
            "key": "C",
            "text": "Bayi yang baru lahir"
          },
          {
            "key": "D",
            "text": "Perempuan"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Muntah secara disengaja dalam keadaan berpuasa menyebabkan ...",
        "options": [
          {
            "key": "A",
            "text": "Puasa sah"
          },
          {
            "key": "B",
            "text": "Boleh"
          },
          {
            "key": "C",
            "text": "Batalnya puasa"
          },
          {
            "key": "D",
            "text": "Tidak dilarang"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 17,
        "text": "Orang yang dalam perjalanan jauh boleh tidak berpuasa Ramadhan tetapi wajib mengganti (qadha) di hari lain. Orang ini disebut sebagai ...",
        "options": [
          {
            "key": "A",
            "text": "Mukallaf"
          },
          {
            "key": "B",
            "text": "Musafir"
          },
          {
            "key": "C",
            "text": "Muallim"
          },
          {
            "key": "D",
            "text": "Muslim"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Hukum melaksanakan puasa Arafah (9 Dzulhijjah) disunnahkan bagi ...",
        "options": [
          {
            "key": "A",
            "text": "Umat Islam yang sedang wukuf menunaikan ibadah haji"
          },
          {
            "key": "B",
            "text": "Orang-orang Islam yang sudah pernah haji saja"
          },
          {
            "key": "C",
            "text": "Anak kecil yang belum baligh"
          },
          {
            "key": "D",
            "text": "Orang mukallaf yang tidak sedang menunaikan ibadah haji"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 19,
        "text": "Bagi orang tua renta (jompo) yang sudah tidak mampu menjalankan puasa Ramadhan, maka baginya wajib ...",
        "options": [
          {
            "key": "A",
            "text": "Membayar fidyah"
          },
          {
            "key": "B",
            "text": "Mengeluarkan zakat mal"
          },
          {
            "key": "C",
            "text": "Membayar kafarat"
          },
          {
            "key": "D",
            "text": "Mengeluarkan wakaf"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "Berikut adalah hal-hal yang membatalkan puasa, kecuali ...",
        "options": [
          {
            "key": "A",
            "text": "Menangis"
          },
          {
            "key": "B",
            "text": "Muntah disengaja"
          },
          {
            "key": "C",
            "text": "Makan dan minum dengan sengaja"
          },
          {
            "key": "D",
            "text": "Haid atau nifas"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 21,
        "text": "Niat melaksanakan puasa wajib Ramadhan dilakukan pada waktu ...",
        "options": [
          {
            "key": "A",
            "text": "Sore hari"
          },
          {
            "key": "B",
            "text": "Siang hari"
          },
          {
            "key": "C",
            "text": "Pagi hari setelah terbit matahari"
          },
          {
            "key": "D",
            "text": "Malam hari sampai sebelum terbit fajar shadiq"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 22,
        "text": "Puasa yang apabila dikerjakan mendapat pahala dan apabila ditinggalkan tidak mendapat dosa adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Puasa wajib"
          },
          {
            "key": "B",
            "text": "Puasa sunnah"
          },
          {
            "key": "C",
            "text": "Puasa nazar"
          },
          {
            "key": "D",
            "text": "Puasa haram"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "text": "Macam-macam puasa wajib ada 3 yaitu ...",
        "options": [
          {
            "key": "A",
            "text": "Arafah, Ramadhan, Daud"
          },
          {
            "key": "B",
            "text": "Sunnah, Arafah, Kifarat"
          },
          {
            "key": "C",
            "text": "Ramadhan, Nazar, Kifarat (Kafarat)"
          },
          {
            "key": "D",
            "text": "Nazar, Sunnah, Syawal"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Kewajiban puasa menurut Surat Al-Baqarah ayat 183 ditujukan bagi ...",
        "options": [
          {
            "key": "A",
            "text": "Musafir"
          },
          {
            "key": "B",
            "text": "Mualaf"
          },
          {
            "key": "C",
            "text": "Orang-orang yang beriman"
          },
          {
            "key": "D",
            "text": "Seluruh manusia"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 25,
        "text": "Yang merupakan Hari Tasyrik (hari yang diharamkan berpuasa) adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Tanggal 11, 12, 13 Dzulhijjah"
          },
          {
            "key": "B",
            "text": "Tanggal 9, 10 Dzulhijjah"
          },
          {
            "key": "C",
            "text": "Tanggal 12, 13, 14 Dzulhijjah"
          },
          {
            "key": "D",
            "text": "Tanggal 1, 2, 3 Syawal"
          }
        ],
        "answerKey": "A"
      }
    ],
    "dayOrder": 3,
    "dayLabel": "Hari Ke-3 • Rabu, 25 Nov 2026",
    "sessionOrder": 2
  },
  {
    "id": "exam-fqh-ix",
    "code": "ASAS-FQH-IX",
    "title": "Asesmen Sumatif Akhir Semester — Fiqih Kelas IX",
    "subject": "Fiqih",
    "classLevel": "IX",
    "scheduleText": "Rabu, 25 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "dayOrder": 3,
    "dayLabel": "Hari Ke-3 • Rabu, 25 Nov 2026",
    "sessionOrder": 2,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Memutuskan saluran makanan dan minuman, saluran pernafasan, saluran darah dari jantung ke otak (urat nadi) dengan menggunakan alat yang tajam selain kuku, gigi atau tulang agar menjadi halal disebut....",
        "options": [
          {
            "key": "A",
            "text": "Penyiksaan"
          },
          {
            "key": "B",
            "text": "Penyembelihan"
          },
          {
            "key": "C",
            "text": "Membunuh"
          },
          {
            "key": "D",
            "text": "Mematika"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Perhatikan pernyataan berikut.\n1) Memukuli hewan sampai mati  5) Memotong kerongkongan, tenggorokan, dan dua urat nadi hewan\n2) Membaringkan hewan ke kiri   6) Membaca basmalah dan niat karena Allah SWT\n3) Menghadap kiblat                     7) Membiarkan darah segar mengalir dari urat nadi leher yang putus\n4) Memotong anggota hewan        8) Memutuskan leher hewan\nTata cara menyembelih hewan yang baik menurut ajaran Islam dutunjukkan oleh nomor....",
        "options": [
          {
            "key": "A",
            "text": "1) 3) 5) 7)"
          },
          {
            "key": "B",
            "text": "1) 4) 5) 6)"
          },
          {
            "key": "C",
            "text": "2) 3) 5) 6)"
          },
          {
            "key": "D",
            "text": "3) 4) 5) 7)"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "text": "Penyembelihan harus memenuhi beberapa syarat sehingga hewan sembelihannya menjadi halal. Diantara syarat syah penyembelihan hewan adalah....",
        "options": [
          {
            "key": "A",
            "text": "Islam, mumayyiz dan berakal"
          },
          {
            "key": "B",
            "text": "Islam, balig, berakal dan laki-laki"
          },
          {
            "key": "C",
            "text": "Islam, balig, berakal, suci dari hadast dan najis"
          },
          {
            "key": "D",
            "text": "Islam, berakal, laki-laki dan dilakukan dengan cepat"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 4,
        "text": "Perhatikan beberapa ketentuan berikut ini.\n1) Membaringkan hewan ke sebelah kanan4)Menyakiti hewan sebelum disembelih\n2) Menghadapkan hewan ke arah kiblat5)Mempercepat proses penyembelihan\n3) Menyembelih hewan dengan pisau tumpul6) Menajamkan pisau untuk menyembel\nDari beberapa ketentuan tersebut, yang termasuk sunnah dalam penyembelihan hewan ditunjukkan oleh nomor...",
        "options": [
          {
            "key": "A",
            "text": "1), 2) dan 6)"
          },
          {
            "key": "B",
            "text": "2), 5) dan 6)"
          },
          {
            "key": "C",
            "text": "3), 4) dan 7)"
          },
          {
            "key": "D",
            "text": "5), 6) dan 7)"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "Dalam hal penyembelihan harus mengikuti pedoman atau tata cara yang telah ditentukan oleh Rasulullah SAW Karena pasti semua itu mengandung hikmah, diantaranya....",
        "options": [
          {
            "key": "A",
            "text": "Memperoleh daging yang halal dan sehat"
          },
          {
            "key": "B",
            "text": "Mengikuti budaya Islam"
          },
          {
            "key": "C",
            "text": "Menjalankan dakwah Rasaulullah SAW"
          },
          {
            "key": "D",
            "text": "Mengikuti ajaran Nabi Ibrahim AS"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 6,
        "text": "Amatilah pernyataan di bawah ini.\n1) Menyakiti hewan sebelum disembelih4) Membaca shalawat\n2) Memunjukkan alat potong kepada hewan 5) Menyembelih sampai putus batang lehernya\n3) Membaca baslamah6) Menyembelih dengan alat tumpul\nHal-hal yang makruh dalam penyembelihan ditunjukkan oleh nomor....",
        "options": [
          {
            "key": "A",
            "text": "2) 3) 4) dan 5)"
          },
          {
            "key": "B",
            "text": "1) 2 ) 5) dan 6)"
          },
          {
            "key": "C",
            "text": "1) 3) 4) dan 5)"
          },
          {
            "key": "D",
            "text": "2) 4) 5) dan 6)"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "Pak Rudi memotong hewan dengan menggunakan tulang yang amat tajam. Maka daging dari hewan tersebut apabila dimakan hukumnya....",
        "options": [
          {
            "key": "A",
            "text": "Halal"
          },
          {
            "key": "B",
            "text": "Boleh"
          },
          {
            "key": "C",
            "text": "Haram"
          },
          {
            "key": "D",
            "text": "Makruh"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Penyembelihan hewan ternak yang memeneuhi syarat tertentu pada waktu tertentu dengan niat mendekatkan diri kepada Allah SWT. Adalah pengertian dari....",
        "options": [
          {
            "key": "A",
            "text": "Akikah"
          },
          {
            "key": "B",
            "text": "Penyembelihan"
          },
          {
            "key": "C",
            "text": "Qurban"
          },
          {
            "key": "D",
            "text": "Pemotongan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 9,
        "text": "Pak Asep diminta oleh masyarakat untuk menyembelih hewan kurban dengan dibantu oleh beberapa panitia kurban. Pada pelaksanaan penyembelihan hewan kurban satu persatu disembelih dengan memposisikan hewan kurban dihadapkan ke arah kiblat. Hukum menghadapkan binatang ke arah kiblat ketika menyembelih adalah...",
        "options": [
          {
            "key": "A",
            "text": "Wajib ‘ain"
          },
          {
            "key": "B",
            "text": "Wajib kifayah"
          },
          {
            "key": "C",
            "text": "Mubah"
          },
          {
            "key": "D",
            "text": "Sunnah"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "Qurban merupakan bentuk mendekatkan diri kepada Allah dengan cara menyembelih binatang ternak yang waktunya telah ditentukan, yaitu....",
        "options": [
          {
            "key": "A",
            "text": "Tanggal 8, 9, 10 dan 11 Dzulhijjah"
          },
          {
            "key": "B",
            "text": "Tanggal lO, 11,12 dan 13 Dzulhijjah"
          },
          {
            "key": "C",
            "text": "Tanggal 9, 10, 11 dan 12 Dzulhijjah"
          },
          {
            "key": "D",
            "text": "Tanggal 11, 12, 13 dan 14 Dzulhijjah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 11,
        "text": "Ayat Al-Qur'an yang menjadi dasar hukum perintah berkurban adalah....",
        "options": [
          {
            "key": "A",
            "text": "فَصَلِّ لِرَبِّكَ وَانْحَرْۗ"
          },
          {
            "key": "B",
            "text": "وَيَمْنَعُونَ ٱلْمَاعُونَ"
          },
          {
            "key": "C",
            "text": "اِنَّآ اَعْطَيْنٰكَ الْكَوْثَرَۗ"
          },
          {
            "key": "D",
            "text": "وَاَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبٰواۗ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 12,
        "text": "Perbedaan kurban dan akikah yang tepat adalah....",
        "options": [
          {
            "key": "A",
            "text": "Qurban: Dagingnya diberikan setelah dimasak terlebih dahulu | Akikah: Dagingnya sebaiknya diberikan sebelum dimasak"
          },
          {
            "key": "B",
            "text": "Qurban: Disyariatkan untuk dilaksanakan setiap tahun | Akikah: Disyariatkan satu kali seumur hidup"
          },
          {
            "key": "C",
            "text": "Qurban: Hanya binatang ternak seperti kambing atau domba | Akikah: Binatang ternak seperti sapi, unta, kambing dan domba"
          },
          {
            "key": "D",
            "text": "Qurban: Hukum melaksanakannya wajib bagi setiap muslim | Akikah: Hukum melaksanakannya sunnah bagi setiap muslim"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Perhatikan pernyataan berikut.\n1) Dagingnya dibagikan dalam keadaan sudah masak3) Dagingnya tidak diperjual belikan\n2) Dagingnya hanya diberikan kepada fakir miskin4) Diberikan kepada saudara, keluarga dan tetangga\nBerdasarkan pernyataan tersebut, ketentuan pembagian daging akikah yang tepat terdapat pada nomor....",
        "options": [
          {
            "key": "A",
            "text": "1), 2) dan 3)"
          },
          {
            "key": "B",
            "text": "1), 2) dan 4)"
          },
          {
            "key": "C",
            "text": "1), 3) dan 4)"
          },
          {
            "key": "D",
            "text": "2), 3) dan 4)"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "Do’a  بِسْمِ اللهِ وَاللهُ أَكْبَرُاللهم مِنْكَ وَلَكَ اللهم تَقَبَّلْ مِنِّي هَذِهِ عَقِيْقَةُ  adalah do’a....",
        "options": [
          {
            "key": "A",
            "text": "Penyembelihan qurban"
          },
          {
            "key": "B",
            "text": "Penyembelihan akikah"
          },
          {
            "key": "C",
            "text": "Penyembelihan hewan"
          },
          {
            "key": "D",
            "text": "Penyembelihan binatang ternak"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 15,
        "text": "Arti dari ayat al-qur'an tersebut وَاَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبٰواۗ...",
        "options": [
          {
            "key": "A",
            "text": "Dan Allah telah menghalalkan jual beli dan mengharamkan riba"
          },
          {
            "key": "B",
            "text": "Dan Allah telah menghalalkan pinjam meminjam dan mengharamkan riba"
          },
          {
            "key": "C",
            "text": "Padahal Allah telah menghalalkan utang piutang dan mengharamkan riba"
          },
          {
            "key": "D",
            "text": "Ingatlah Allah telah menghalalkan jual beli dan janganlah mendekati riba"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Cermatilah pernyataan berikut\n1) Ada penjual dan pembeli4)  Suka sama suka\n2) Ada barang yang diperjual belikan5)  Ada ijab qabul\n3) Ada alat tukar\nRukun jual beli ditunjukkan pada nomor....",
        "options": [
          {
            "key": "A",
            "text": "1),  2), 3) dan 5)"
          },
          {
            "key": "B",
            "text": "2),  3), 4) dan 5)"
          },
          {
            "key": "C",
            "text": "1),  3), 4) dan 5)"
          },
          {
            "key": "D",
            "text": "1), 2),  4), dan 5)"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 17,
        "text": "Suci, bermanfaat, milik sendiri, jelas dan diketahu serta barang dapat langsung diserahkan. Merupakan syarat....",
        "options": [
          {
            "key": "A",
            "text": "Sah barang yang diperjual belikan"
          },
          {
            "key": "B",
            "text": "Sah penjual dan pembeli"
          },
          {
            "key": "C",
            "text": "Sah tukar menukar barang"
          },
          {
            "key": "D",
            "text": "Sah ijab dan qabul"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Contoh jual beli yang sah tetapi dilarang oleh agama adalah....",
        "options": [
          {
            "key": "A",
            "text": "Jual beli di pasar, jual beli dengan menghadang di jalan sebelum sampai ke pasar, jual beli barang haram"
          },
          {
            "key": "B",
            "text": "Jual beli di halaman masjid, jual beli dengan niat menimbun, jual beli anak binatang dalam kandungan induknya"
          },
          {
            "key": "C",
            "text": "Jual beli ketika khutbah/shalat Jum'at, jual beli menimbun barang, jual beli masih dalam tawaran orang lain, jual beli menipu dan subrah"
          },
          {
            "key": "D",
            "text": "Jual beli ketika berlangsung shalat berjamaah, jual beli dengan cara mengecoh, dan jual beli barang yang belum jelas"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 19,
        "text": "Salah satu jual beli yang terlarang dalam ketentuan syar'i (hukum Islam) adalah jual beli dengan sistem ijon, yaitu....",
        "options": [
          {
            "key": "A",
            "text": "Jual belinya dilakukan dengan cara mengurangi ukuran atau timbangan"
          },
          {
            "key": "B",
            "text": "Jual belinya tidak dilakukan berdasarkan atas dasar suka sama suka"
          },
          {
            "key": "C",
            "text": "Jual beli buah-buahan yang masih ada di atas pohon yang kualitasnya belum diketahui pastti."
          },
          {
            "key": "D",
            "text": "Rukun dan syarat jual beli semuanya tidak terpenuhi dalam jual beli tersebut"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 20,
        "text": "Nadiya dan teman-temannya pergi berekreasi ke Bali. Sebelum pulang, dia ingin membeli baju di sebuah toko. Setelah memilih-milih baju yang cocok ternyata baju pilihannya sedang ditawar orang lain. Karena sudah merasa cocok, ia langsung membayar sesuai harga yang ditawarkan penjualnnya, dan tidak menghiraukan pembeli lain yang sedang menawarnya. Praktik jual beli dalam ilustrasi ini termasuk....",
        "options": [
          {
            "key": "A",
            "text": "Jual beli garar"
          },
          {
            "key": "B",
            "text": "Jual beli yang terlarang"
          },
          {
            "key": "C",
            "text": "Jual beli yang sah tapi terlarang"
          },
          {
            "key": "D",
            "text": "Jual beli dengan sistem ijon"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Penjual dan pembeli boleh memilih antara meneruskan atau menangguhkan jual beli selama keduanya masih dalam satu tempat jual beli. Hal ini adalah pengertian dari...",
        "options": [
          {
            "key": "A",
            "text": "Jual beli"
          },
          {
            "key": "B",
            "text": "Khiyar ‘aib"
          },
          {
            "key": "C",
            "text": "Khiyar majlis"
          },
          {
            "key": "D",
            "text": "Khiyar syarat"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "Syakirah hendak membeli sebuah televisi di sebuah toko elektronik. Sebelumnya dia berkata kepada penjualnya, “Saya mau beli TV ini dengan syarat mencoba terlebih dahulu, apabila cocok maka jual beli saya lanjutkan, tetapi apabila tidak cocok maka jual beli saya batalkan, dan TV saya kembalikan dalam keadaan seperti semula.” Ilustrasi tersebut termasuk jenis khiyar....",
        "options": [
          {
            "key": "A",
            "text": "Majlis"
          },
          {
            "key": "B",
            "text": "Syarat"
          },
          {
            "key": "C",
            "text": "‘Aib"
          },
          {
            "key": "D",
            "text": "Ru’yah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "text": "Khiyar adalah hak memilih untuk meneruskan atau membatalkan jual beli. Ada hikmah yang terkandung dalam khiyar tersebut, yaitu....",
        "options": [
          {
            "key": "A",
            "text": "Mendaptkan barang pilihan"
          },
          {
            "key": "B",
            "text": "Mendapatkan barang yang mewah"
          },
          {
            "key": "C",
            "text": "Mendapatkan keuntungan yang besar"
          },
          {
            "key": "D",
            "text": "Menghindari penyesalan dari pihak penjual dan pembeli"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 24,
        "text": "Bu Mira memberikan pinjaman tanpa bunga kepada temannya sebesar Rp 10.000.000 untuk usaha membuat kue dengan perjanjian bagi hasil yang telah disepakati. Transaksi seperti itu disebut....",
        "options": [
          {
            "key": "A",
            "text": "Qiradh"
          },
          {
            "key": "B",
            "text": "Jual beli"
          },
          {
            "key": "C",
            "text": "Gadai"
          },
          {
            "key": "D",
            "text": "Hiwalah"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 25,
        "text": "Qiradh merupakan bentuk muamalah yang mengandung unsur tolong-menolong, diperlukan syarat-syarat tertentu dalam qiradh. Di bawah ini yang merupakan syarat qiradh adalah....",
        "options": [
          {
            "key": "A",
            "text": "Pemilik dan pengelola modal harus seagama serta pemilik modal ikut melakukan usaha"
          },
          {
            "key": "B",
            "text": "Pemilik dan pengelola modal sudah balig, berakal, dan merdeka"
          },
          {
            "key": "C",
            "text": "Pemilik dan pengelola modal beragama Islam serta modal tidak perlu diketahui jenisnya"
          },
          {
            "key": "D",
            "text": "Pemilik dan pengelola modal semuanya terlibat dalam usaha serta keuntungan dibagi rata"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 26,
        "text": "Berikut yang merupakan contoh qirad modern, yaitu seseorang....",
        "options": [
          {
            "key": "A",
            "text": "Diberi modal orang lain untuk menjalankan usaha"
          },
          {
            "key": "B",
            "text": "Meminjam modal kepada bank keliling"
          },
          {
            "key": "C",
            "text": "Mendapatkan pinjaman modal dari bank syariah untuk menjalankan usaha"
          },
          {
            "key": "D",
            "text": "Orang mendapatkan pinjaman modal dari renternir untuk menjalankan usaha"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 27,
        "text": "Najma meminjam uang keapada Frea. Ketika Najma melunasinya, ia diminta menambahkan pokok pinjamannya oleh Frea. Tindakan Frea termasuk perbuatan....",
        "options": [
          {
            "key": "A",
            "text": "Hiwalah"
          },
          {
            "key": "B",
            "text": "Riba"
          },
          {
            "key": "C",
            "text": "Ta’awun"
          },
          {
            "key": "D",
            "text": "Qirad"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 28,
        "text": "Jesika meminjam uang kepada Nia sebesar Rp. 10.000.000. pada waktu yang telah ditentukan, ia (Jesika) belum dapat melunasinya. Kemudian Nia (orang yang memberikan utang) mengatakan, “Kamu harus bayar utangnya sekarang, kalua lewat waktu yang telah ditentukan maka kamu harus membayarnya sebear Rp. 10.500.000.” Ilustrasi tersebut termasuk jenis riba....",
        "options": [
          {
            "key": "A",
            "text": "Fadl"
          },
          {
            "key": "B",
            "text": "Nasiah"
          },
          {
            "key": "C",
            "text": "Qard"
          },
          {
            "key": "D",
            "text": "Yad"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 29,
        "text": "Gibran mengutang uang kepada temannya Rp 275.000 untuk suatu keperluan keluarganya. Temannyapun memberikan utang sejumlah uang yang diperlukam Gibran dengan perjanjian ketika mengembalikan harus Rp.300.000. Praktik utang piutang tersebut termasuk jenis riba....",
        "options": [
          {
            "key": "A",
            "text": "Fadl"
          },
          {
            "key": "B",
            "text": "Qardh"
          },
          {
            "key": "C",
            "text": "Yad"
          },
          {
            "key": "D",
            "text": "Nashi'ah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 30,
        "text": "Arti dari ayat al-Qur'an وَتَعَاوَنُوا۟ عَلَى ٱلْبِرِّ وَٱلتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا۟ عَلَى ٱلْإِثْمِ وَٱلْعُدْوَٰنِ yaitu....",
        "options": [
          {
            "key": "A",
            "text": "Hai orang-orang yang beriman, janganlah kamu melanggar syi'ar-syi'ar Allah, dan jangan melanggar kehormatan bulan-bulan haram."
          },
          {
            "key": "B",
            "text": "Dan janganlah sekali-kali kebencian (mu) kepada sesuatu kaum kamu mendorongmu berbuat aniaya (kepada mereka)."
          },
          {
            "key": "C",
            "text": "Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan pelanggaran."
          },
          {
            "key": "D",
            "text": "Dan bertakwalah kamu kepada Allah, sesungguhnya Allah amat berat siksa-Nya."
          }
        ],
        "answerKey": "C"
      }
    ]
  },
  {
    "id": "exam-inf-vii",
    "code": "ASAS-INF-VII",
    "title": "Asesmen Sumatif Akhir Semester — Informatika Kelas VII",
    "subject": "Informatika",
    "classLevel": "VII",
    "scheduleText": "Rabu, 25 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 3,
    "dayLabel": "Hari Ke-3 • Rabu, 25 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Pernyataan berikut yang tidak sesuai dengan konsep berfikir komputasional adalah ....",
        "options": [
          {
            "key": "A",
            "text": "Memberikan digital training pada komputer agar bekerja lebih cepat."
          },
          {
            "key": "B",
            "text": "Membagi masalah yang komplek agar menjadi lebih sederhana."
          },
          {
            "key": "C",
            "text": "Memilih informasi yang tidak penting dan yang penting"
          },
          {
            "key": "D",
            "text": "Menyusun penyelesaian dengan langkah – langkah yang logis dan sesuai"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 2,
        "text": "Proses berikut yang merupakan proses dekomposisi adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Membagi perangkat komputer ke dalam beberapa komponen"
          },
          {
            "key": "B",
            "text": "Melihat kesamaan urutan angka – angka"
          },
          {
            "key": "C",
            "text": "Menguraikan sifat – sifat bola"
          },
          {
            "key": "D",
            "text": "Membuat langkah – langkah untuk menyelesaikan persamaan elastisitas pantulan bola"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 3,
        "text": "Fokus pada Informasi yang penting merupakan contoh dari proses ...",
        "options": [
          {
            "key": "A",
            "text": "Abstraksi"
          },
          {
            "key": "B",
            "text": "Algoritma"
          },
          {
            "key": "C",
            "text": "Dekomposisi"
          },
          {
            "key": "D",
            "text": "Pengenalan pola"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 4,
        "text": "Teknisi melakukan proses scanning kondisi  mobil konsumen. Data hasil scanning tersebut di bandingkan dengan data base model sejenis yang dimiliki oleh teknisi. Proses yang dilakukan oleh teknisi tersebut adalah...",
        "options": [
          {
            "key": "A",
            "text": "Dekomposisi"
          },
          {
            "key": "B",
            "text": "Abstraksi"
          },
          {
            "key": "C",
            "text": "Pengenalan Pola"
          },
          {
            "key": "D",
            "text": "Algoritma"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Proses berikut yang merupakan dekomposisi adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Seorang teknisi memeriksa kondisi mesin mobil dan komponen utamanya"
          },
          {
            "key": "B",
            "text": "Teknisi mobil melaporkan permaslah dan solusinya kepada pemilik mobil"
          },
          {
            "key": "C",
            "text": "Seorang teknisi mobil memberikan penjelasan mengenai kerusakan mobil konsumennya"
          },
          {
            "key": "D",
            "text": "Seorang teknisi mobil membuat technical report hasil pengecekan mobil konsumen"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 6,
        "text": "Pola dapat muncul dalam bentuk ....",
        "options": [
          {
            "key": "A",
            "text": "Perilaku"
          },
          {
            "key": "B",
            "text": "Angka"
          },
          {
            "key": "C",
            "text": "Gejala alam"
          },
          {
            "key": "D",
            "text": "Perilaku, angka, dan gejala alam"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 7,
        "text": "Ketika menggambar flowchart, persegi panjang digunakan untuk mengambarkan ...",
        "options": [
          {
            "key": "A",
            "text": "Input dari pengguna"
          },
          {
            "key": "B",
            "text": "Output kepada pengguna"
          },
          {
            "key": "C",
            "text": "Pengambilan keputusan"
          },
          {
            "key": "D",
            "text": "Proses dalam program"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 8,
        "text": "Pernyataan berikut yang bukan merupakan etika ber-email adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Sering mengirimkan file – file promosi produk tertentu yang bersifat spam"
          },
          {
            "key": "B",
            "text": "Mengguanakan tata cara penulisan yang benar"
          },
          {
            "key": "C",
            "text": "Sebelum masuk ke inti surat memberikan salam pembukaan yang santun"
          },
          {
            "key": "D",
            "text": "Memilih kalimat – kalimat yang efektif dan santun"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 9,
        "text": "File berikut yang secara otomatis akan di – uploud oleh Gmail ke Google Drive sebelum dikirim adalah ...",
        "options": [
          {
            "key": "A",
            "text": "File, docx, berukuran 2 MB"
          },
          {
            "key": "B",
            "text": "File, indd, berukuran 10 MB"
          },
          {
            "key": "C",
            "text": "File, mp4, berukuran 20 MB"
          },
          {
            "key": "D",
            "text": "File, rar, berukuran 25 MB"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "Tipe file yang pasti memicu respon antivirus secara spontan ketika desertakan ke email adalah ...",
        "options": [
          {
            "key": "A",
            "text": "zip"
          },
          {
            "key": "B",
            "text": "rar"
          },
          {
            "key": "C",
            "text": "docx"
          },
          {
            "key": "D",
            "text": "exe"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 11,
        "text": "Cloud storge gratis One Drive menyediakan ruang penyimpanan sebesar ...",
        "options": [
          {
            "key": "A",
            "text": "25 GB"
          },
          {
            "key": "B",
            "text": "15 GB"
          },
          {
            "key": "C",
            "text": "10 GB"
          },
          {
            "key": "D",
            "text": "5 GB"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 12,
        "text": "Berikut yang bukan merupakan mesin pencarian ...",
        "options": [
          {
            "key": "A",
            "text": "Google"
          },
          {
            "key": "B",
            "text": "Bing"
          },
          {
            "key": "C",
            "text": "Yahoo"
          },
          {
            "key": "D",
            "text": "Friendster"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 13,
        "text": "Format file gambar yang tidak dapat diuploud search engine untuk melakukan pencarian dengan gambar adalah ....",
        "options": [
          {
            "key": "A",
            "text": "jpg"
          },
          {
            "key": "B",
            "text": "png"
          },
          {
            "key": "C",
            "text": "tif"
          },
          {
            "key": "D",
            "text": "psd"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 14,
        "text": "Ketika melakukan pencarian dengan kata kunci “Cara membuat robot Line Follower dengan Arduino” google juga akan menampilkan “langkah – langkah merakit robot Line Follower”. Dukungan teknolog Google yang dapat melakukan hal tersebut adalah ....",
        "options": [
          {
            "key": "A",
            "text": "Freshness"
          },
          {
            "key": "B",
            "text": "Mochine learning"
          },
          {
            "key": "C",
            "text": "Computer vision"
          },
          {
            "key": "D",
            "text": "NL"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 15,
        "text": "Semakin banyak kata kunci yang di gunakan dalam suatu pencarian, maka hasil pencarian akan ...",
        "options": [
          {
            "key": "A",
            "text": "Semakin banyak"
          },
          {
            "key": "B",
            "text": "Semakin spesifik"
          },
          {
            "key": "C",
            "text": "ditampilkan semakin lambat"
          },
          {
            "key": "D",
            "text": "ditampilkan cepat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 16,
        "text": "Menggunakan aplikasi berbasis cloud akan lebih menarik karena ...",
        "options": [
          {
            "key": "A",
            "text": "Lebih aman"
          },
          {
            "key": "B",
            "text": "Fitur aplikasi lebih banyak"
          },
          {
            "key": "C",
            "text": "Dapat diakses menggunakan browser"
          },
          {
            "key": "D",
            "text": "Dapat digunakan untuk membuka file di internet tanpa di download terlebeih dahulu"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 17,
        "text": "Aplikasi berikut yang menyimpan sebagai memori file web yang telah dibuka ke cache memory adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Outlook"
          },
          {
            "key": "B",
            "text": "Chrome"
          },
          {
            "key": "C",
            "text": "Firefox"
          },
          {
            "key": "D",
            "text": "Opera"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Microsoft Word, Micrsoft Excel, Microsoft Power Point merupakan contoh  dari ....",
        "options": [
          {
            "key": "A",
            "text": "Ram"
          },
          {
            "key": "B",
            "text": "Software"
          },
          {
            "key": "C",
            "text": "Hardware"
          },
          {
            "key": "D",
            "text": "Hardisk"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "Dalam sistem komputer, RAM merupakan salah satu komponen penting dalam menjalankan program. Berikut yang merupakan fungsi utama RAM adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Menyimpan program dan data"
          },
          {
            "key": "B",
            "text": "Mengantisipasi bahaya virus di dalam komputer"
          },
          {
            "key": "C",
            "text": "Menentukan seluruh kinerja sistem komputer"
          },
          {
            "key": "D",
            "text": "Komponen pelengkap CPU pada komputer"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "Fungsi perangkat input komputer adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Memasukan perintah dan data yang akan diproses oleh sistem komputer"
          },
          {
            "key": "B",
            "text": "Menyimpan seluruh data komputer"
          },
          {
            "key": "C",
            "text": "Menampilkan dan menyampaikan informasi kepada pengggunanya"
          },
          {
            "key": "D",
            "text": "Mengidentifikasi file yang terdeteksi virus"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 21,
        "text": "Perangkat input yang memilki pointer dalam bentuk tanda panah adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Keyboard"
          },
          {
            "key": "B",
            "text": "Headset"
          },
          {
            "key": "C",
            "text": "Mouse"
          },
          {
            "key": "D",
            "text": "HDD"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "Perangkat lunak aplikasi di bawah ini yang tidak umum digunakan adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Perangkat lunak multimedia"
          },
          {
            "key": "B",
            "text": "Perangkat lunak database"
          },
          {
            "key": "C",
            "text": "Pengolah angka"
          },
          {
            "key": "D",
            "text": "Pengolah virus"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 23,
        "text": "Perangkat lunak yang sering di gunakan untuk membuat presentasi adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Video Pad"
          },
          {
            "key": "B",
            "text": "Microsoft SOL"
          },
          {
            "key": "C",
            "text": "Open Office org"
          },
          {
            "key": "D",
            "text": "Microsoft Power point"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 24,
        "text": "Fungsi utama dari perangkat lunak Microsoft Word adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Pengolah angka"
          },
          {
            "key": "B",
            "text": "Pengolah kata"
          },
          {
            "key": "C",
            "text": "Perangkat lunak multimedia"
          },
          {
            "key": "D",
            "text": "Pengolah database"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Perusahaan farmasi ingin menghubungkan semua penjualannya di seluruh dunia dalam satu jaringan. Agar koneksinya aman dari gangguan pihak luar, jaringan yang baik digunakan adalah ...",
        "options": [
          {
            "key": "A",
            "text": "WAN"
          },
          {
            "key": "B",
            "text": "MAN"
          },
          {
            "key": "C",
            "text": "Intranet"
          },
          {
            "key": "D",
            "text": "Internet"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 26,
        "text": "Nirmala akan membuka restoran yanh akan di lengkapi dengan layanan WiFi gratis kepada  pengunjungnya. Jaringan berikut yang sesuai untuk Nirmala adalah jaringan...",
        "options": [
          {
            "key": "A",
            "text": "Modem bluetooth"
          },
          {
            "key": "B",
            "text": "LAN menggunakan kabel UTP"
          },
          {
            "key": "C",
            "text": "LAN menggunakan serat optik"
          },
          {
            "key": "D",
            "text": "WiFi dilengkapi password untuk koneksi"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 27,
        "text": "Salah satu dampak posotif dari kemajuan  tekhnologi dan internet adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Bebas bermain game sepuasnya"
          },
          {
            "key": "B",
            "text": "Menyontek jawaban ulang dari google"
          },
          {
            "key": "C",
            "text": "Mudahnya komunikasi antar daerah"
          },
          {
            "key": "D",
            "text": "Menghilangkan budaya asli leluhur"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 28,
        "text": "Sistem jaringan yang saling terinterkoneksi, yang menghubungkan komputer diseluruh dunia melalui Protocol PCP/IP adalah .....",
        "options": [
          {
            "key": "A",
            "text": "Data base"
          },
          {
            "key": "B",
            "text": "Internet"
          },
          {
            "key": "C",
            "text": "WiFi Access"
          },
          {
            "key": "D",
            "text": "Intranet"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 29,
        "text": "Saat kita berada di kota besar, jaringan 4G begitu mudah untuk akses. Namun saat berpindah ke plosok daerah, jaringan 4G sulit sekali untuk diakses. Hal tersebut bisa terjadi..",
        "options": [
          {
            "key": "A",
            "text": "Pembangunan yang tidak merata"
          },
          {
            "key": "B",
            "text": "Kondisi dan letak geografis daerah berpengaruh pada jaringan yang masuk"
          },
          {
            "key": "C",
            "text": "Keterbatasan teknologi TIK di daerah"
          },
          {
            "key": "D",
            "text": "Pengguna smartphone di daerah masih sedikit"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 30,
        "text": "Proses menyalin suatu file dari internet berupa gambar, vidio, atau dokumen ke dalam perangkat yang kita gunakan disebut...",
        "options": [
          {
            "key": "A",
            "text": "Copy paste"
          },
          {
            "key": "B",
            "text": "Download"
          },
          {
            "key": "C",
            "text": "rename"
          },
          {
            "key": "D",
            "text": "shortcut"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-inf-viii",
    "code": "ASAS-INF-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Informatika Kelas VIII",
    "subject": "Informatika",
    "classLevel": "VIII",
    "scheduleText": "Rabu, 25 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 3,
    "dayLabel": "Hari Ke-3 • Rabu, 25 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Literasi digital adalah kemampuan untuk….",
        "options": [
          {
            "key": "A",
            "text": "Menggunakan komputer tanpa internet"
          },
          {
            "key": "B",
            "text": "Memahami, menggunakan, dan membuat informasi melalui teknologi digital"
          },
          {
            "key": "C",
            "text": "Mengoperasikan mesin fotokopi"
          },
          {
            "key": "D",
            "text": "Menggambar hanya dengan komputer"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Contoh etika digital yang baik adalah….",
        "options": [
          {
            "key": "A",
            "text": "Menyebarkan hoaks"
          },
          {
            "key": "B",
            "text": "Menggunakan kata kasar saat berkomentar"
          },
          {
            "key": "C",
            "text": "Menghargai privasi orang lain di dunia maya"
          },
          {
            "key": "D",
            "text": "Mem-bully teman di media sosial"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "text": "Aktivitas yang termasuk jejak digital adalah….",
        "options": [
          {
            "key": "A",
            "text": "Bermain bola"
          },
          {
            "key": "B",
            "text": "Membersihkan rumah"
          },
          {
            "key": "C",
            "text": "Komentar di media sosial"
          },
          {
            "key": "D",
            "text": "Jalan-jalan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 4,
        "text": "Yang dimaksud cyberbullying adalah….",
        "options": [
          {
            "key": "A",
            "text": "Menghapus data orang lain"
          },
          {
            "key": "B",
            "text": "Mengganggu orang lain secara digital"
          },
          {
            "key": "C",
            "text": "Meminjam laptop teman"
          },
          {
            "key": "D",
            "text": "Belajar melalui internet"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "Password yang kuat ditandai dengan….",
        "options": [
          {
            "key": "A",
            "text": "Menggunakan tanggal lahir"
          },
          {
            "key": "B",
            "text": "Menggunakan nama sendiri"
          },
          {
            "key": "C",
            "text": "Kombinasi huruf, angka, dan simbol"
          },
          {
            "key": "D",
            "text": "Satu kata saja"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Perangkat yang termasuk perangkat keras adalah….",
        "options": [
          {
            "key": "A",
            "text": "Microsoft Word"
          },
          {
            "key": "B",
            "text": "Mouse"
          },
          {
            "key": "C",
            "text": "Google Drive"
          },
          {
            "key": "D",
            "text": "Aplikasi kamera"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "Bagian otak komputer yang memproses instruksi adalah….",
        "options": [
          {
            "key": "A",
            "text": "RAM"
          },
          {
            "key": "B",
            "text": "CPU"
          },
          {
            "key": "C",
            "text": "Harddisk"
          },
          {
            "key": "D",
            "text": "Monitor"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "Contoh perangkat input adalah….",
        "options": [
          {
            "key": "A",
            "text": "Proyektor"
          },
          {
            "key": "B",
            "text": "Keyboard"
          },
          {
            "key": "C",
            "text": "Printer"
          },
          {
            "key": "D",
            "text": "Speaker"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "Fungsi RAM dalam komputer adalah….",
        "options": [
          {
            "key": "A",
            "text": "Menyimpan data permanen"
          },
          {
            "key": "B",
            "text": "Menampilkan gambar"
          },
          {
            "key": "C",
            "text": "Menyimpan data sementara ketika komputer bekerja"
          },
          {
            "key": "D",
            "text": "Mengeluarkan suara"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Sistem operasi berfungsi untuk….",
        "options": [
          {
            "key": "A",
            "text": "Menggambar"
          },
          {
            "key": "B",
            "text": "Menghubungkan pengguna dengan perangkat keras komputer"
          },
          {
            "key": "C",
            "text": "Menyimpan data di cloud"
          },
          {
            "key": "D",
            "text": "Menghasilkan suara"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 11,
        "text": "WiFi adalah teknologi untuk….",
        "options": [
          {
            "key": "A",
            "text": "Mengedit video"
          },
          {
            "key": "B",
            "text": "Menghubungkan perangkat tanpa kabel"
          },
          {
            "key": "C",
            "text": "Mengetik dokumen"
          },
          {
            "key": "D",
            "text": "Menghapus virus"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Perangkat yang menghubungkan komputer ke internet disebut….",
        "options": [
          {
            "key": "A",
            "text": "Modem"
          },
          {
            "key": "B",
            "text": "Printer"
          },
          {
            "key": "C",
            "text": "Scanner"
          },
          {
            "key": "D",
            "text": "Flashdisk"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 13,
        "text": "Kepanjangan dari URL adalah….",
        "options": [
          {
            "key": "A",
            "text": "User Relation Link"
          },
          {
            "key": "B",
            "text": "Universal Rate Link"
          },
          {
            "key": "C",
            "text": "Uniform Resource Locator"
          },
          {
            "key": "D",
            "text": "United Resource Link"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "Browser digunakan untuk….",
        "options": [
          {
            "key": "A",
            "text": "Mengelola file"
          },
          {
            "key": "B",
            "text": "Menjelajahi internet"
          },
          {
            "key": "C",
            "text": "Merekam suara"
          },
          {
            "key": "D",
            "text": "Mengedit gambar"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 15,
        "text": "Contoh browser adalah….",
        "options": [
          {
            "key": "A",
            "text": "Telegram"
          },
          {
            "key": "B",
            "text": "Google Chrome"
          },
          {
            "key": "C",
            "text": "Facebook"
          },
          {
            "key": "D",
            "text": "Canva"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 16,
        "text": "Algoritma adalah….",
        "options": [
          {
            "key": "A",
            "text": "Bahasa computer"
          },
          {
            "key": "B",
            "text": "Urutan langkah untuk menyelesaikan masalah"
          },
          {
            "key": "C",
            "text": "Kode rahasia"
          },
          {
            "key": "D",
            "text": "Virus komputer"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Flowchart digunakan untuk….",
        "options": [
          {
            "key": "A",
            "text": "Mengetik paragraph"
          },
          {
            "key": "B",
            "text": "Menggambar dekorasi"
          },
          {
            "key": "C",
            "text": "Menggambarkan alur suatu algoritma"
          },
          {
            "key": "D",
            "text": "Membuat presentasi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 18,
        "text": "Bentuk simbol flowchart untuk keputusan adalah….",
        "options": [
          {
            "key": "A",
            "text": "Persegi Panjang"
          },
          {
            "key": "B",
            "text": "Lingkaran"
          },
          {
            "key": "C",
            "text": "Belah ketupat"
          },
          {
            "key": "D",
            "text": "Segitiga"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 19,
        "text": "Bahasa pemrograman yang cocok untuk pemula adalah….",
        "options": [
          {
            "key": "A",
            "text": "Python"
          },
          {
            "key": "B",
            "text": "Assembly"
          },
          {
            "key": "C",
            "text": "Machine Language"
          },
          {
            "key": "D",
            "text": "Binary"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "Perintah untuk mencetak teks pada Python adalah….",
        "options": [
          {
            "key": "A",
            "text": "echo()"
          },
          {
            "key": "B",
            "text": "print()"
          },
          {
            "key": "C",
            "text": "show()"
          },
          {
            "key": "D",
            "text": "text()"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 21,
        "text": "Data adalah….",
        "options": [
          {
            "key": "A",
            "text": "Kesimpulan"
          },
          {
            "key": "B",
            "text": "Fakta mentah yang belum diolah"
          },
          {
            "key": "C",
            "text": "Hasil akhir analisis"
          },
          {
            "key": "D",
            "text": "Informasi lengkap"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 22,
        "text": "Informasi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Data yang sudah diolah"
          },
          {
            "key": "B",
            "text": "File yang disimpan"
          },
          {
            "key": "C",
            "text": "Dokumen rahasia"
          },
          {
            "key": "D",
            "text": "Angka acak"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 23,
        "text": "Contoh data kuantitatif adalah….",
        "options": [
          {
            "key": "A",
            "text": "Warna baju"
          },
          {
            "key": "B",
            "text": "Jumlah siswa"
          },
          {
            "key": "C",
            "text": "Nama hewan"
          },
          {
            "key": "D",
            "text": "Jenis tanaman"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "text": "Grafik digunakan untuk….",
        "options": [
          {
            "key": "A",
            "text": "Menyembunyikan data"
          },
          {
            "key": "B",
            "text": "Menyajikan data agar mudah dipahami"
          },
          {
            "key": "C",
            "text": "Menghapus data"
          },
          {
            "key": "D",
            "text": "Mengacak data"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Excel digunakan untuk mengolah….",
        "options": [
          {
            "key": "A",
            "text": "Teks"
          },
          {
            "key": "B",
            "text": "Video"
          },
          {
            "key": "C",
            "text": "Data angka dan tabel"
          },
          {
            "key": "D",
            "text": "Musik"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 26,
        "text": "Virus komputer adalah….",
        "options": [
          {
            "key": "A",
            "text": "Jaringan internet"
          },
          {
            "key": "B",
            "text": "Program yang merusak sistem computer"
          },
          {
            "key": "C",
            "text": "Aplikasi komunikasi"
          },
          {
            "key": "D",
            "text": "Alat input"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 27,
        "text": "Anti-virus berfungsi untuk….",
        "options": [
          {
            "key": "A",
            "text": "Menggambar wallpaper"
          },
          {
            "key": "B",
            "text": "Melindungi komputer dari virus"
          },
          {
            "key": "C",
            "text": "Menghubungkan komputer ke internet"
          },
          {
            "key": "D",
            "text": "Menghapus semua file"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 28,
        "text": "Phishing adalah usaha untuk….",
        "options": [
          {
            "key": "A",
            "text": "Mendaur ulang sampah digital"
          },
          {
            "key": "B",
            "text": "Mengambil data pribadi secara illegal"
          },
          {
            "key": "C",
            "text": "Memperbaiki komputer"
          },
          {
            "key": "D",
            "text": "Mempercepat internet"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 29,
        "text": "Salah satu cara menjaga keamanan akun adalah….",
        "options": [
          {
            "key": "A",
            "text": "Memberikan password pada teman"
          },
          {
            "key": "B",
            "text": "Menggunakan password yang sama untuk semua akun"
          },
          {
            "key": "C",
            "text": "Mengaktifkan verifikasi dua langkah"
          },
          {
            "key": "D",
            "text": "Login dari sembarang perangkat"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 30,
        "text": "File backup adalah….",
        "options": [
          {
            "key": "A",
            "text": "File sampah"
          },
          {
            "key": "B",
            "text": "Cadangan data untuk keamanan"
          },
          {
            "key": "C",
            "text": "File rusak"
          },
          {
            "key": "D",
            "text": "File sementara"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-inf-ix",
    "code": "ASAS-INF-IX",
    "title": "Asesmen Sumatif Akhir Semester — Informatika Kelas IX",
    "subject": "Informatika",
    "classLevel": "IX",
    "scheduleText": "Rabu, 25 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 3,
    "dayLabel": "Hari Ke-3 • Rabu, 25 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Jaringan komputer adalah….",
        "options": [
          {
            "key": "A",
            "text": "Perangkat yang digunakan untuk mengetik"
          },
          {
            "key": "B",
            "text": "Kumpulan komputer yang saling terhubung untuk berbagi data"
          },
          {
            "key": "C",
            "text": "Alat untuk mengedit video"
          },
          {
            "key": "D",
            "text": "Sistem penyimpanan data"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Jaringan yang cakupannya paling kecil adalah….",
        "options": [
          {
            "key": "A",
            "text": "WAN"
          },
          {
            "key": "B",
            "text": "MAN"
          },
          {
            "key": "C",
            "text": "LAN"
          },
          {
            "key": "D",
            "text": "Internet"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "text": "Alat yang berfungsi membagi koneksi internet ke beberapa perangkat disebut….",
        "options": [
          {
            "key": "A",
            "text": "Printer"
          },
          {
            "key": "B",
            "text": "Router"
          },
          {
            "key": "C",
            "text": "Flashdisk"
          },
          {
            "key": "D",
            "text": "Proyektor"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "IP Address digunakan untuk….",
        "options": [
          {
            "key": "A",
            "text": "Menghapus data"
          },
          {
            "key": "B",
            "text": "Mengidentifikasi perangkat dalam jaringan"
          },
          {
            "key": "C",
            "text": "Menambah kecepatan komputer"
          },
          {
            "key": "D",
            "text": "Menampilkan gambar"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "HTTP digunakan untuk….",
        "options": [
          {
            "key": "A",
            "text": "Menyimpan video"
          },
          {
            "key": "B",
            "text": "Mengirim email"
          },
          {
            "key": "C",
            "text": "Mengakses halaman web"
          },
          {
            "key": "D",
            "text": "Memperbaiki jaringan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Sistem operasi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Bahasa pemrograman"
          },
          {
            "key": "B",
            "text": "Penghubung antara perangkat keras dan pengguna"
          },
          {
            "key": "C",
            "text": "Perangkat input"
          },
          {
            "key": "D",
            "text": "Penyimpanan data"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "Contoh sistem operasi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Google"
          },
          {
            "key": "B",
            "text": "Windows"
          },
          {
            "key": "C",
            "text": "Facebook"
          },
          {
            "key": "D",
            "text": "Word"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "File berekstensi .exe biasanya digunakan untuk….",
        "options": [
          {
            "key": "A",
            "text": "File video"
          },
          {
            "key": "B",
            "text": "File instalasi aplikasi"
          },
          {
            "key": "C",
            "text": "File musik"
          },
          {
            "key": "D",
            "text": "File gambar"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "Perangkat lunak yang digunakan untuk mengolah angka adalah….",
        "options": [
          {
            "key": "A",
            "text": "PowerPoint"
          },
          {
            "key": "B",
            "text": "Excel"
          },
          {
            "key": "C",
            "text": "Word"
          },
          {
            "key": "D",
            "text": "Paint"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 10,
        "text": "Perangkat yang berfungsi sebagai tempat penyimpanan permanen adalah….",
        "options": [
          {
            "key": "A",
            "text": "RAM"
          },
          {
            "key": "B",
            "text": "Monitor"
          },
          {
            "key": "C",
            "text": "Harddisk"
          },
          {
            "key": "D",
            "text": "Mouse"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 11,
        "text": "Basis data adalah….",
        "options": [
          {
            "key": "A",
            "text": "Kumpulan informasi acak"
          },
          {
            "key": "B",
            "text": "Kumpulan data yang terorganisir"
          },
          {
            "key": "C",
            "text": "Tempat menyimpan foto"
          },
          {
            "key": "D",
            "text": "Data yang sudah dibagikan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "SQL digunakan untuk….",
        "options": [
          {
            "key": "A",
            "text": "Mengedit gambar"
          },
          {
            "key": "B",
            "text": "Mengelola basis data"
          },
          {
            "key": "C",
            "text": "Menghubungkan internet"
          },
          {
            "key": "D",
            "text": "Menghapus file"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Contoh data teks adalah….",
        "options": [
          {
            "key": "A",
            "text": "Suara burung"
          },
          {
            "key": "B",
            "text": "Gambar pemandangan"
          },
          {
            "key": "C",
            "text": "Nama siswa"
          },
          {
            "key": "D",
            "text": "Video pembelajaran"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "Tujuan normalisasi data adalah….",
        "options": [
          {
            "key": "A",
            "text": "Memperbesar ukuran data"
          },
          {
            "key": "B",
            "text": "Menghilangkan data"
          },
          {
            "key": "C",
            "text": "Mengurangi redundansi dan meningkatkan efisiensi"
          },
          {
            "key": "D",
            "text": "Menyulitkan proses pencarian"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Fungsi utama tabel pada basis data adalah….",
        "options": [
          {
            "key": "A",
            "text": "Menampilkan wallpaper"
          },
          {
            "key": "B",
            "text": "Menyimpan data dalam baris dan kolom"
          },
          {
            "key": "C",
            "text": "Menghapus data"
          },
          {
            "key": "D",
            "text": "Mengirim data ke internet"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 16,
        "text": "Malware adalah….",
        "options": [
          {
            "key": "A",
            "text": "Layanan email"
          },
          {
            "key": "B",
            "text": "Program berbahaya"
          },
          {
            "key": "C",
            "text": "Aplikasi editing"
          },
          {
            "key": "D",
            "text": "Aplikasi musik"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Contoh malware adalah….",
        "options": [
          {
            "key": "A",
            "text": "Antivirus"
          },
          {
            "key": "B",
            "text": "Browser"
          },
          {
            "key": "C",
            "text": "Worm"
          },
          {
            "key": "D",
            "text": "Text editor"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 18,
        "text": "Phishing adalah kegiatan….",
        "options": [
          {
            "key": "A",
            "text": "Mengunduh aplikasi legal"
          },
          {
            "key": "B",
            "text": "Mencuri data pribadi dengan berpura-pura menjadi pihak terpercaya"
          },
          {
            "key": "C",
            "text": "Memperbaiki komputer"
          },
          {
            "key": "D",
            "text": "Mengirim pesan biasa"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "Cara aman menjaga data pribadi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Membagikan password ke teman dekat"
          },
          {
            "key": "B",
            "text": "Menggunakan password sederhana"
          },
          {
            "key": "C",
            "text": "Mengaktifkan verifikasi dua langkah"
          },
          {
            "key": "D",
            "text": "Login dari perangkat publik"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 20,
        "text": "Tujuan firewall adalah….",
        "options": [
          {
            "key": "A",
            "text": "Mempercepat internet"
          },
          {
            "key": "B",
            "text": "Menyimpan data"
          },
          {
            "key": "C",
            "text": "Mengontrol lalu lintas jaringan"
          },
          {
            "key": "D",
            "text": "Menampilkan gambar"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Algoritma adalah….",
        "options": [
          {
            "key": "A",
            "text": "Program computer"
          },
          {
            "key": "B",
            "text": "Urutan langkah untuk menyelesaikan masalah"
          },
          {
            "key": "C",
            "text": "Gambar dekorasi"
          },
          {
            "key": "D",
            "text": "Ikon aplikasi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 22,
        "text": "Flowchart digunakan untuk….",
        "options": [
          {
            "key": "A",
            "text": "Mengedit video"
          },
          {
            "key": "B",
            "text": "Menggambar pola"
          },
          {
            "key": "C",
            "text": "Menggambarkan alur algoritma"
          },
          {
            "key": "D",
            "text": "Mengelola jaringan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "text": "Simbol flowchart untuk proses adalah….",
        "options": [
          {
            "key": "A",
            "text": "Belah ketupat"
          },
          {
            "key": "B",
            "text": "Lingkaran"
          },
          {
            "key": "C",
            "text": "Persegi panjang"
          },
          {
            "key": "D",
            "text": "Segitiga"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Bahasa pemrograman tingkat tinggi berarti….",
        "options": [
          {
            "key": "A",
            "text": "Bahasa yang hanya dimengerti mesin"
          },
          {
            "key": "B",
            "text": "Bahasa yang mirip bahasa manusia dan mudah dipahami"
          },
          {
            "key": "C",
            "text": "Bahasa yang hanya digunakan robot"
          },
          {
            "key": "D",
            "text": "Bahasa yang tidak bisa dipelajari pemula"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Contoh bahasa pemrograman tingkat tinggi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Python"
          },
          {
            "key": "B",
            "text": "Binary"
          },
          {
            "key": "C",
            "text": "Assembly"
          },
          {
            "key": "D",
            "text": "Machine code"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 26,
        "text": "AI adalah kemampuan mesin untuk….",
        "options": [
          {
            "key": "A",
            "text": "Menyimpan makanan"
          },
          {
            "key": "B",
            "text": "Membersihkan computer"
          },
          {
            "key": "C",
            "text": "Meniru cara berpikir manusia"
          },
          {
            "key": "D",
            "text": "Mengubah bentuk komputer"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 27,
        "text": "Contoh penerapan AI dalam kehidupan sehari-hari adalah….",
        "options": [
          {
            "key": "A",
            "text": "Sapu ijuk"
          },
          {
            "key": "B",
            "text": "Mobil tanpa pengemudi"
          },
          {
            "key": "C",
            "text": "Buku tulis"
          },
          {
            "key": "D",
            "text": "Pensil"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 28,
        "text": "Machine Learning adalah….",
        "options": [
          {
            "key": "A",
            "text": "Mesin pembuat makanan"
          },
          {
            "key": "B",
            "text": "Cabang AI yang membuat komputer belajar dari data"
          },
          {
            "key": "C",
            "text": "Aplikasi chatting"
          },
          {
            "key": "D",
            "text": "Sistem untuk menggambar otomatis"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 29,
        "text": "Chatbot adalah….",
        "options": [
          {
            "key": "A",
            "text": "Mesin cuci otomatis"
          },
          {
            "key": "B",
            "text": "Program yang dapat berinteraksi menggunakan teks atau suara"
          },
          {
            "key": "C",
            "text": "File suara"
          },
          {
            "key": "D",
            "text": "Rumus matematika"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 30,
        "text": "Data training dalam AI digunakan untuk….",
        "options": [
          {
            "key": "A",
            "text": "Menghapus sistem"
          },
          {
            "key": "B",
            "text": "Melatih model agar mengenali pola"
          },
          {
            "key": "C",
            "text": "Menghentikan proses belajar"
          },
          {
            "key": "D",
            "text": "Merusak data"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-mtk-vii",
    "code": "ASAS-MTK-VII",
    "title": "Asesmen Sumatif Akhir Semester — Matematika Kelas VII",
    "subject": "Matematika",
    "classLevel": "VII",
    "scheduleText": "Selasa, 24 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 2,
    "dayLabel": "Hari Ke-2 • Selasa, 24 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Jika hari Senin pada minggu ini adalah 0, maka bilangan bulat untuk menggantikan hari Kamis minggu lalu adalah ....",
        "options": [
          {
            "key": "A",
            "text": "-4"
          },
          {
            "key": "B",
            "text": "-3"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 2,
        "text": "Susunan bilangan 1, -2, 3, -4, 5 dari kecil ke besar adalah ....",
        "options": [
          {
            "key": "A",
            "text": "-4, -2, 1, 3, 5"
          },
          {
            "key": "B",
            "text": "-2, -4, 1, 3, 5"
          },
          {
            "key": "C",
            "text": "1, -2, 3, -4, 5"
          },
          {
            "key": "D",
            "text": "-4, -2, 3, 1, 5"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 3,
        "text": "Hasil dari (-20) + 7 × 5 - 18 : (-3) adalah ....",
        "options": [
          {
            "key": "A",
            "text": "-21"
          },
          {
            "key": "B",
            "text": "-14"
          },
          {
            "key": "C",
            "text": "14"
          },
          {
            "key": "D",
            "text": "21"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 4,
        "text": "2³ + 2⁵ apabila ditulis dalam satu suku perkalian adalah ...",
        "options": [
          {
            "key": "A",
            "text": "2³ × 2"
          },
          {
            "key": "B",
            "text": "2³ × 3"
          },
          {
            "key": "C",
            "text": "2³ × 4"
          },
          {
            "key": "D",
            "text": "2³ × 5"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 5,
        "text": "Di antara bilangan berikut, manakah yang merupakan bilangan prima ....",
        "options": [
          {
            "key": "A",
            "text": "12"
          },
          {
            "key": "B",
            "text": "13"
          },
          {
            "key": "C",
            "text": "14"
          },
          {
            "key": "D",
            "text": "15"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 6,
        "text": "Faktorisasi prima dari 500 adalah ....",
        "options": [
          {
            "key": "A",
            "text": "2² × 5²"
          },
          {
            "key": "B",
            "text": "2² × 5³"
          },
          {
            "key": "C",
            "text": "2³ × 5²"
          },
          {
            "key": "D",
            "text": "2³ × 5³"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "Banyak faktor prima yang terdapat pada bilangan (30)³ adalah ....",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Faktor Persekutuan Terbesar (FPB) dari 36, 72, dan 96 adalah ....",
        "options": [
          {
            "key": "A",
            "text": "8"
          },
          {
            "key": "B",
            "text": "12"
          },
          {
            "key": "C",
            "text": "18"
          },
          {
            "key": "D",
            "text": "36"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "Perhatikan gambar persegi di atas (4 bagian segitiga diarsir dari total 8 bagian segitiga sama besar). Daerah diarsir pada gambar tersebut menunjukkan pecahan ....",
        "options": [
          {
            "key": "A",
            "text": "1/4"
          },
          {
            "key": "B",
            "text": "1/5"
          },
          {
            "key": "C",
            "text": "1/2"
          },
          {
            "key": "D",
            "text": "2/3"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Urutan yang benar pada pecahan di bawah ini dari yang terkecil adalah ….",
        "options": [
          {
            "key": "A",
            "text": "1/2 , 1/3 , 1/4"
          },
          {
            "key": "B",
            "text": "1/2 , 1/4 , 1/3"
          },
          {
            "key": "C",
            "text": "1/4 , 1/2 , 1/3"
          },
          {
            "key": "D",
            "text": "1/4 , 1/3 , 1/2"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 11,
        "text": "Diketahui x/12 lebih dari 1/6 tetapi kurang dari 1/3. Nilai x yang mungkin adalah ....",
        "options": [
          {
            "key": "A",
            "text": "3"
          },
          {
            "key": "B",
            "text": "4"
          },
          {
            "key": "C",
            "text": "5"
          },
          {
            "key": "D",
            "text": "6"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 12,
        "text": "Diketahui dalam suatu kelas terdapat 14 siswa laki-laki dan 26 siswa perempuan. Persentase siswa laki-laki dalam kelas itu adalah ….",
        "options": [
          {
            "key": "A",
            "text": "35%"
          },
          {
            "key": "B",
            "text": "45%"
          },
          {
            "key": "C",
            "text": "55%"
          },
          {
            "key": "D",
            "text": "65%"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 13,
        "text": "Hasil dari 3/4 - 2/3 - 1/2 adalah ….",
        "options": [
          {
            "key": "A",
            "text": "-7/12"
          },
          {
            "key": "B",
            "text": "-5/12"
          },
          {
            "key": "C",
            "text": "5/12"
          },
          {
            "key": "D",
            "text": "7/12"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "text": "Hasil dari 1/2 : 1/4 × 1 2/3 = ….",
        "options": [
          {
            "key": "A",
            "text": "1 1/5"
          },
          {
            "key": "B",
            "text": "1 2/5"
          },
          {
            "key": "C",
            "text": "2 2/3"
          },
          {
            "key": "D",
            "text": "3 1/3"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "text": "Hasil dari 0,456 + 12,25 – 7,5 adalah ....",
        "options": [
          {
            "key": "A",
            "text": "202,06"
          },
          {
            "key": "B",
            "text": "5,206 (atau 20,206)"
          },
          {
            "key": "C",
            "text": "19,181"
          },
          {
            "key": "D",
            "text": "9,181"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 16,
        "text": "Hasil dari 12,02 × 0,025 adalah ....",
        "options": [
          {
            "key": "A",
            "text": "0,35"
          },
          {
            "key": "B",
            "text": "0,305"
          },
          {
            "key": "C",
            "text": "0,3005"
          },
          {
            "key": "D",
            "text": "0,30005"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 17,
        "text": "Bentuk sederhana dari perbandingan 25 cm : 1 m adalah ....",
        "options": [
          {
            "key": "A",
            "text": "25 : 1"
          },
          {
            "key": "B",
            "text": "5 : 2"
          },
          {
            "key": "C",
            "text": "1 : 5"
          },
          {
            "key": "D",
            "text": "1 : 4"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 18,
        "text": "Seorang penjahit mendapat pesanan menjahit kaus untuk keperluan kampanye. Dia mampu menjahit 60 potong kaus dalam 3 hari. Jika ia bekerja selama 2 minggu (14 hari), maka banyak kaus yang dapat ia kerjakan adalah ....",
        "options": [
          {
            "key": "A",
            "text": "280 potong"
          },
          {
            "key": "B",
            "text": "180 potong"
          },
          {
            "key": "C",
            "text": "120 potong"
          },
          {
            "key": "D",
            "text": "80 potong"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Pembangunan jembatan direncanakan selesai dalam waktu 132 hari dengan 72 pekerja. Sebelum pembangunan dimulai, terjadi penambahan pekerja sebanyak 24 orang. Waktu yang dihabiskan untuk menyelesaikan pembangunan jembatan tersebut adalah ....",
        "options": [
          {
            "key": "A",
            "text": "89 hari"
          },
          {
            "key": "B",
            "text": "99 hari"
          },
          {
            "key": "C",
            "text": "109 hari"
          },
          {
            "key": "D",
            "text": "119 hari"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 20,
        "text": "Harga 1 lusin (12 buah) buku tulis adalah Rp 48.000,00. Jika Ibu akan membeli 10 buku tulis, harga yang harus Ibu bayarkan adalah ....",
        "options": [
          {
            "key": "A",
            "text": "Rp 80.000,00"
          },
          {
            "key": "B",
            "text": "Rp 48.000,00"
          },
          {
            "key": "C",
            "text": "Rp 40.000,00"
          },
          {
            "key": "D",
            "text": "Rp 20.000,00"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Seorang penulis dapat mengetik 1.400 kata dalam waktu 1 jam. Lama waktu yang dibutuhkan penulis untuk mengetik 3.500 kata adalah ....",
        "options": [
          {
            "key": "A",
            "text": "3 jam"
          },
          {
            "key": "B",
            "text": "2,5 jam"
          },
          {
            "key": "C",
            "text": "2 jam"
          },
          {
            "key": "D",
            "text": "1,5 jam"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 22,
        "text": "Jarak stasiun A dan stasiun B sebenarnya adalah 7,5 km. Jika pada peta jarak kedua stasiun tersebut adalah 50 cm, maka skala peta tersebut adalah ....",
        "options": [
          {
            "key": "A",
            "text": "1 : 12.000"
          },
          {
            "key": "B",
            "text": "1 : 13.000"
          },
          {
            "key": "C",
            "text": "1 : 14.000"
          },
          {
            "key": "D",
            "text": "1 : 15.000"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 23,
        "text": "Pada suatu peta berskala 1 : 1.000.000, panjang sebuah sungai adalah 9,2 cm. Panjang sungai sebenarnya adalah ....",
        "options": [
          {
            "key": "A",
            "text": "9.200 km"
          },
          {
            "key": "B",
            "text": "920 km"
          },
          {
            "key": "C",
            "text": "92 km"
          },
          {
            "key": "D",
            "text": "9,2 km"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Perhatikan gambar keempat grafik di atas! Grafik yang menunjukkan hubungan perbandingan senilai antara banyak barang belanjaan dengan besar biayanya adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Grafik A (Garis lurus miring turun)"
          },
          {
            "key": "B",
            "text": "Grafik B (Garis lurus miring naik dari titik O)"
          },
          {
            "key": "C",
            "text": "Grafik C (Garis lurus mendatar)"
          },
          {
            "key": "D",
            "text": "Grafik D (Garis melengkung ke atas)"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Hasil dari (-4³)² adalah ....",
        "options": [
          {
            "key": "A",
            "text": "4096"
          },
          {
            "key": "B",
            "text": "-4096"
          },
          {
            "key": "C",
            "text": "(-4)⁶"
          },
          {
            "key": "D",
            "text": "(-4)⁵"
          }
        ],
        "answerKey": "C"
      }
    ]
  },
  {
    "id": "exam-mtk-viii",
    "code": "ASAS-MTK-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Matematika Kelas VIII",
    "subject": "Matematika",
    "classLevel": "VIII",
    "scheduleText": "Selasa, 24 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 2,
    "dayLabel": "Hari Ke-2 • Selasa, 24 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Pada pola bilangan segitiga 1, 3, 6, 10, .... dan seterusnya, maka suku ke-7 dan suku ke-10 adalah...",
        "options": [
          {
            "key": "A",
            "text": "30 dan 35"
          },
          {
            "key": "B",
            "text": "36 dan 42"
          },
          {
            "key": "C",
            "text": "28 dan 55"
          },
          {
            "key": "D",
            "text": "27 dan 51"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Rumus suku ke-n dari barisan bilangan 5, 9, 13, 17, ... adalah...",
        "options": [
          {
            "key": "A",
            "text": "4n + 1"
          },
          {
            "key": "B",
            "text": "4n + 4"
          },
          {
            "key": "C",
            "text": "4n + 2"
          },
          {
            "key": "D",
            "text": "n + 4"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 3,
        "text": "Suku ke-9 dari pola bilangan persegi panjang 2, 6, 12, … adalah ...",
        "options": [
          {
            "key": "A",
            "text": "72"
          },
          {
            "key": "B",
            "text": "90"
          },
          {
            "key": "C",
            "text": "89"
          },
          {
            "key": "D",
            "text": "91"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "Dua suku berikutnya dari barisan bilangan 192, 96, 48, 24, 12, ... adalah...",
        "options": [
          {
            "key": "A",
            "text": "6 dan 2"
          },
          {
            "key": "B",
            "text": "6 dan 3"
          },
          {
            "key": "C",
            "text": "8 dan 4"
          },
          {
            "key": "D",
            "text": "8 dan 6"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "Dalam gedung pentas seni disusun kursi dengan baris paling depan terdiri 14 buah, baris ke-2 berisi 16 buah, baris ke-3 berisi 18 buah dan setiap baris berikutnya selalu bertambah 2. Banyaknya kursi pada baris ke-20 adalah....",
        "options": [
          {
            "key": "A",
            "text": "52 buah"
          },
          {
            "key": "B",
            "text": "54 buah"
          },
          {
            "key": "C",
            "text": "40 buah"
          },
          {
            "key": "D",
            "text": "38 buah"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 6,
        "text": "Perhatikan gambar diagram panah di atas! Diagram di atas adalah pemetaan (fungsi), kecuali….",
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 7,
        "text": "Perhatikan gambar diagram panah dari himpunan A = {1, 2, 4} ke B = {2, 3, 4} di atas! Relasi dari himpunan A ke himpunan B yang tepat adalah…",
        "options": [
          {
            "key": "A",
            "text": "faktor dari"
          },
          {
            "key": "B",
            "text": "lebih dari"
          },
          {
            "key": "C",
            "text": "kurang dari"
          },
          {
            "key": "D",
            "text": "setengah dari"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 8,
        "text": "Suatu fungsi didefinisikan dengan rumus f(x) = 3 – 5x. Nilai f(–4) adalah….",
        "options": [
          {
            "key": "A",
            "text": "–23"
          },
          {
            "key": "B",
            "text": "–17"
          },
          {
            "key": "C",
            "text": "17"
          },
          {
            "key": "D",
            "text": "23"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 9,
        "text": "Fungsi f dinyatakan dengan rumus f(x) = ax + b. Jika f(2) = 3 dan f(–3) = 13, maka nilai dari –a + b adalah....",
        "options": [
          {
            "key": "A",
            "text": "–12"
          },
          {
            "key": "B",
            "text": "–3"
          },
          {
            "key": "C",
            "text": "9"
          },
          {
            "key": "D",
            "text": "11"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Perhatikan gambar diagram fungsi dari P = {a, b, c} ke Q = {d, e, f} di atas! Kodomain atau daerah kawan dari fungsi tersebut adalah….",
        "options": [
          {
            "key": "A",
            "text": "{a, b, c, d, e, f}"
          },
          {
            "key": "B",
            "text": "{a, b, c}"
          },
          {
            "key": "C",
            "text": "{d, e, f}"
          },
          {
            "key": "D",
            "text": "{e, f}"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 11,
        "text": "Berdasarkan gambar diagram fungsi pada soal nomor 10 di atas (panah menuju e dan f), Range atau daerah hasil dari fungsi tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "{a, b, c, d, e, f}"
          },
          {
            "key": "B",
            "text": "{a, b, c}"
          },
          {
            "key": "C",
            "text": "{d, e, f}"
          },
          {
            "key": "D",
            "text": "{e, f}"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 12,
        "text": "Gradien garis yang melalui titik (-1, -1) dan (-3, -7) adalah...",
        "options": [
          {
            "key": "A",
            "text": "–3"
          },
          {
            "key": "B",
            "text": "–2"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "3"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 13,
        "text": "Gradien garis y = -3x + 44 adalah..",
        "options": [
          {
            "key": "A",
            "text": "3"
          },
          {
            "key": "B",
            "text": "1/3"
          },
          {
            "key": "C",
            "text": "–1/3"
          },
          {
            "key": "D",
            "text": "–3"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 14,
        "text": "Gradien garis 3y = 4x – 16 adalah...",
        "options": [
          {
            "key": "A",
            "text": "3/4"
          },
          {
            "key": "B",
            "text": "4/3"
          },
          {
            "key": "C",
            "text": "-3/4"
          },
          {
            "key": "D",
            "text": "-4/3"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 15,
        "text": "Gradien garis dengan persamaan 3x – 6y = -5 adalah....",
        "options": [
          {
            "key": "A",
            "text": "–2"
          },
          {
            "key": "B",
            "text": "-1/2"
          },
          {
            "key": "C",
            "text": "1/2"
          },
          {
            "key": "D",
            "text": "2"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 16,
        "text": "Persamaan garis yang melalui titik (-4, 0) dan titik (0, 2) adalah...",
        "options": [
          {
            "key": "A",
            "text": "x + 2y = -4"
          },
          {
            "key": "B",
            "text": "x – 2y = -4"
          },
          {
            "key": "C",
            "text": "2x – y = -4"
          },
          {
            "key": "D",
            "text": "2x + y = 4"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Perhatikan persamaan garis berikut ini:\n(i) 2y = 8x + 20\n(ii) 6y = 12x + 18\n(iii) 3y = 12x + 15\n(iv) 3y = -6x + 15\nPersamaan yang grafiknya saling sejajar adalah...",
        "options": [
          {
            "key": "A",
            "text": "(i) dan (ii)"
          },
          {
            "key": "B",
            "text": "(i) dan (iii)"
          },
          {
            "key": "C",
            "text": "(iii) dan (iv)"
          },
          {
            "key": "D",
            "text": "(ii) dan (iv)"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Gradien garis yang sejajar dengan garis 3y = -6x + 5 adalah…",
        "options": [
          {
            "key": "A",
            "text": "–2"
          },
          {
            "key": "B",
            "text": "-1/2"
          },
          {
            "key": "C",
            "text": "1/2"
          },
          {
            "key": "D",
            "text": "2"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Gradien garis yang tegak lurus garis y = -1/2 x + 11 adalah...",
        "options": [
          {
            "key": "A",
            "text": "–2"
          },
          {
            "key": "B",
            "text": "1/2"
          },
          {
            "key": "C",
            "text": "-1/2"
          },
          {
            "key": "D",
            "text": "2"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 20,
        "text": "Perhatikan persamaan-persamaan berikut!\n(i) 15 – 5x = 23\n(ii) 5x = 20 – 3y\n(iii) x² – y² = 49\n(iv) 3x² + 6x + 12 = 0\nYang merupakan persamaan linear dua variabel adalah ....",
        "options": [
          {
            "key": "A",
            "text": "(i)"
          },
          {
            "key": "B",
            "text": "(ii)"
          },
          {
            "key": "C",
            "text": "(iii)"
          },
          {
            "key": "D",
            "text": "(iv)"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 21,
        "text": "Himpunan penyelesaian dari sistem persamaan x + y = 12 dan x – y = 4 adalah ....",
        "options": [
          {
            "key": "A",
            "text": "{4, 8}"
          },
          {
            "key": "B",
            "text": "{12, 4}"
          },
          {
            "key": "C",
            "text": "{4, 12}"
          },
          {
            "key": "D",
            "text": "{8, 4}"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 22,
        "text": "Diketahui sistem persamaan 3x + 2y = 8 dan x – 5y = -37. Nilai 6x + 4y adalah ....",
        "options": [
          {
            "key": "A",
            "text": "–30"
          },
          {
            "key": "B",
            "text": "–16"
          },
          {
            "key": "C",
            "text": "16"
          },
          {
            "key": "D",
            "text": "30"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "text": "Jika x = 2y disubstitusikan pada persamaan x + y = -6 maka himpunan penyelesaiannya (x, y) adalah ....",
        "options": [
          {
            "key": "A",
            "text": "{-8, -2}"
          },
          {
            "key": "B",
            "text": "{-2, -4}"
          },
          {
            "key": "C",
            "text": "{-4, -2}"
          },
          {
            "key": "D",
            "text": "{26, 24}"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Harga 4 buah donat dan 5 buah roti kukus adalah Rp 4.550,00. Sedangkan harga 2 buah donat dan 3 buah roti kukus adalah Rp 2.550,00. Harga 1 buah donat dan 2 buah roti kukus berturut-turut adalah ....",
        "options": [
          {
            "key": "A",
            "text": "Rp 450,00 dan Rp 550,00"
          },
          {
            "key": "B",
            "text": "Rp 550,00 dan Rp 450,00"
          },
          {
            "key": "C",
            "text": "Rp 450,00 dan Rp 1.100,00"
          },
          {
            "key": "D",
            "text": "Rp 1.100,00 dan Rp 450,00"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 25,
        "text": "Barisan di bawah ini yang merupakan barisan Fibonacci adalah...",
        "options": [
          {
            "key": "A",
            "text": "2, 4, 6, 8, ..."
          },
          {
            "key": "B",
            "text": "2, 3, 4, 6, ..."
          },
          {
            "key": "C",
            "text": "3, 6, 12, 24, ..."
          },
          {
            "key": "D",
            "text": "1, 1, 2, 3, 5, ..."
          }
        ],
        "answerKey": "D"
      }
    ]
  },
  {
    "id": "exam-mtk-ix",
    "code": "ASAS-MTK-IX",
    "title": "Asesmen Sumatif Akhir Semester — Matematika Kelas IX",
    "subject": "Matematika",
    "classLevel": "IX",
    "scheduleText": "Selasa, 24 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 2,
    "dayLabel": "Hari Ke-2 • Selasa, 24 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Perhatikan angka pangkat dan tanda bilangannya!\nHasil operasi hitung bilangan pangkat dari (-2)³ + (-3)² + (-2)¹ + (-4)⁰ adalah….",
        "options": [
          {
            "key": "A",
            "text": "0"
          },
          {
            "key": "B",
            "text": "16"
          },
          {
            "key": "C",
            "text": "-20"
          },
          {
            "key": "D",
            "text": "-1"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 2,
        "text": "Bilangan berpangkat bulat negatif 1 / (4⁻³) jika diubah ke bilangan berpangkat bulat positif, hasil pemangkatannya adalah…",
        "options": [
          {
            "key": "A",
            "text": "16"
          },
          {
            "key": "B",
            "text": "64"
          },
          {
            "key": "C",
            "text": "1/16"
          },
          {
            "key": "D",
            "text": "-64"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "Notasi ilmiah merupakan cara penulisan angka untuk mengakomodir nilai-nilai yang terlalu besar dan terlalu kecil sehingga dapat dipahami dengan mudah.\nAngka 1.898.000.000.000.000.000.000.000.000 km jika ditulis dalam Notasi Ilmiah adalah…",
        "options": [
          {
            "key": "A",
            "text": "1,98 × 10²⁷"
          },
          {
            "key": "B",
            "text": "18,98 × 10²⁶"
          },
          {
            "key": "C",
            "text": "1,898 × 10²⁷"
          },
          {
            "key": "D",
            "text": "1,90 × 10⁻²⁷"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 4,
        "text": "Massa planet Jupiter adalah 1,9 × 10²² kg, sedangkan massa planet Bumi adalah 30% dari Jupiter. Massa planet Bumi adalah ….",
        "options": [
          {
            "key": "A",
            "text": "6,33 × 10²² kg"
          },
          {
            "key": "B",
            "text": "5,7 × 10²² kg"
          },
          {
            "key": "C",
            "text": "5,7 × 10²¹ kg"
          },
          {
            "key": "D",
            "text": "6,33 × 10⁻²¹ kg"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Bilangan berpangkat pecahan adalah bentuk lain dari bentuk akar. Bilangan 2^(3/2) jika diubah menjadi bentuk akar adalah…",
        "options": [
          {
            "key": "A",
            "text": "³√(2²)"
          },
          {
            "key": "B",
            "text": "√(2³) = 2√2"
          },
          {
            "key": "C",
            "text": "1/16"
          },
          {
            "key": "D",
            "text": "-64"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 6,
        "text": "Untuk sembarang bilangan berpangkat dengan basis yang sama berlaku a^p × a^q = a^(p+q). Hasil perkalian dari 4⁻⁵ × 4³ adalah...",
        "options": [
          {
            "key": "A",
            "text": "-1/8"
          },
          {
            "key": "B",
            "text": "-1/16"
          },
          {
            "key": "C",
            "text": "1/8"
          },
          {
            "key": "D",
            "text": "1/16"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 7,
        "text": "Untuk sembarang bilangan berpangkat dengan basis yang sama berlaku a^p : a^q = a^(p-q). Hasil pembagian dari (1/2)³ : -(1/2)⁴ adalah...",
        "options": [
          {
            "key": "A",
            "text": "1/8"
          },
          {
            "key": "B",
            "text": "-1/16"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "-2"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 8,
        "text": "Bentuk perpangkatan paling sederhana dari 2x³ × 3(x²y²)³ × 5y⁴ adalah…",
        "options": [
          {
            "key": "A",
            "text": "15 x⁹ y¹⁰"
          },
          {
            "key": "B",
            "text": "30 x⁹ y¹⁰"
          },
          {
            "key": "C",
            "text": "1/16"
          },
          {
            "key": "D",
            "text": "-64"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "Dengan memperhatikan bentuk akar paling sederhana, hasil operasi hitung bentuk akar dari 7√3 + √48 - √192 adalah..",
        "options": [
          {
            "key": "A",
            "text": "5√3"
          },
          {
            "key": "B",
            "text": "8√3"
          },
          {
            "key": "C",
            "text": "3√3"
          },
          {
            "key": "D",
            "text": "19√3"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Dengan mengalikan sekawannya, bentuk rasional dari 8 / (√5 + 3) adalah…",
        "options": [
          {
            "key": "A",
            "text": "4√5 - 12 (atau -2√5 + 6)"
          },
          {
            "key": "B",
            "text": "8√5 - 24"
          },
          {
            "key": "C",
            "text": "4√5 + 12"
          },
          {
            "key": "D",
            "text": "√5 - 4"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 11,
        "text": "Volume sebuah kubus yang memiliki panjang sisi a² meter adalah 64 m³. Dengan memperhatikan sifat pemangkatan dan bentuk akar, nilai a yang sesuai adalah….",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "4"
          },
          {
            "key": "C",
            "text": "8"
          },
          {
            "key": "D",
            "text": "16"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 12,
        "text": "Bentuk umum persamaan kuadrat adalah ax² + bx + c = 0. Nilai a, b, dan c dari persamaan kuadrat 2x - 3x² = 0 secara berturut-turut adalah…",
        "options": [
          {
            "key": "A",
            "text": "2, -3, 1"
          },
          {
            "key": "B",
            "text": "-3, 2, 1"
          },
          {
            "key": "C",
            "text": "2, -3, 0"
          },
          {
            "key": "D",
            "text": "-3, 2, 0"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 13,
        "text": "Sebuah kolam renang dengan panjang (2x + 10) meter dan lebar (3x – 3) meter, maka luas kolam renang jika dinyatakan dalam fungsi kuadrat adalah…",
        "options": [
          {
            "key": "A",
            "text": "y = 6x² + 24x – 30"
          },
          {
            "key": "B",
            "text": "y = 5x² + 10x + 7"
          },
          {
            "key": "C",
            "text": "y = 6x² + 30x – 10"
          },
          {
            "key": "D",
            "text": "y = 5x² – 6x + 30"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 14,
        "text": "Dari pilihan jawaban di bawah ini, persamaan kuadrat yang akar-akarnya 6 dan -4 adalah…",
        "options": [
          {
            "key": "A",
            "text": "x² - 2x - 24 = 0"
          },
          {
            "key": "B",
            "text": "x² - 10x + 24 = 0"
          },
          {
            "key": "C",
            "text": "x² + 2x - 24 = 0"
          },
          {
            "key": "D",
            "text": "x² - 10x - 24 = 0"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 15,
        "text": "Kuadrat suatu bilangan dikurangi empat kali bilangan tersebut sama dengan –3. Maka bilangan yang dimaksud adalah...",
        "options": [
          {
            "key": "A",
            "text": "-1 dan -3"
          },
          {
            "key": "B",
            "text": "1 dan 3"
          },
          {
            "key": "C",
            "text": "2 dan 3"
          },
          {
            "key": "D",
            "text": "-2 dan 3"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 16,
        "text": "Grafik fungsi kuadrat akan berpotongan dengan sumbu-X jika y = 0. Koordinat titik potong grafik y = 2x² + x - 6 pada sumbu-X adalah…",
        "options": [
          {
            "key": "A",
            "text": "(3, 0) dan (2, 0)"
          },
          {
            "key": "B",
            "text": "(3, 0) dan (-2, 0)"
          },
          {
            "key": "C",
            "text": "(1½, 0) dan (2, 0)"
          },
          {
            "key": "D",
            "text": "(1½, 0) dan (-2, 0)"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 17,
        "text": "Tinggi dari balon udara dalam waktu t dapat dinyatakan dalam fungsi f(t) = –16t² + 112t − 91. Tinggi maksimum balon udara tersebut adalah … kaki",
        "options": [
          {
            "key": "A",
            "text": "9"
          },
          {
            "key": "B",
            "text": "105 (pada t = 7/2)"
          },
          {
            "key": "C",
            "text": "91"
          },
          {
            "key": "D",
            "text": "16"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Nilai optimum (minimum atau maksimum) dari fungsi kuadrat f(x) = x² − 2x + 4 adalah...",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "−1"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "−3"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 19,
        "text": "Diketahui fungsi f : x → 4x – 7. Nilai fungsi untuk x = –4 adalah ...",
        "options": [
          {
            "key": "A",
            "text": "–23"
          },
          {
            "key": "B",
            "text": "9"
          },
          {
            "key": "C",
            "text": "15"
          },
          {
            "key": "D",
            "text": "23"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "Dengan mensubstitusikan terhadap rumus fungsi, bayangan –2 oleh fungsi f(x) = 3 – 2x² adalah..",
        "options": [
          {
            "key": "A",
            "text": "11"
          },
          {
            "key": "B",
            "text": "1"
          },
          {
            "key": "C",
            "text": "–5"
          },
          {
            "key": "D",
            "text": "–4"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Bangun P’Q’R’S’ adalah bayangan dari pencerminan jajargenjang PQRS terhadap sumbu-X. Jika P’(8, 1), Q’(5, 5), dan R’(9, 5), koordinat bidang PQRS yang tepat adalah ....",
        "options": [
          {
            "key": "A",
            "text": "P(–8, 1), Q(–5, 5), R(–9, 5), dan S(–12, 5)"
          },
          {
            "key": "B",
            "text": "P(–1, 8), Q(–5, 5), R(–5, 9), dan S(–5, 12)"
          },
          {
            "key": "C",
            "text": "P(8, –1), Q(5, –5), R(9, –5), dan S(12, –1)"
          },
          {
            "key": "D",
            "text": "P(1, 8), Q(–5, 5), R(5, 9), dan S(5, 12)"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "Koordinat bayangan titik A(2, 3) jika ditranslasikan dengan T(–2, 3) adalah ....",
        "options": [
          {
            "key": "A",
            "text": "A’(-4, 0)"
          },
          {
            "key": "B",
            "text": "A’(0, 6)"
          },
          {
            "key": "C",
            "text": "A’(4, 0)"
          },
          {
            "key": "D",
            "text": "A’(4, 6)"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "text": "Salah satu akar dari persamaan kuadrat 2x² - 5x - 12 = 0 adalah…",
        "options": [
          {
            "key": "A",
            "text": "5/2"
          },
          {
            "key": "B",
            "text": "4"
          },
          {
            "key": "C",
            "text": "-2"
          },
          {
            "key": "D",
            "text": "5"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "text": "Kuadrat suatu bilangan jika dikurangi dua kali bilangan tersebut adalah 8 (x² - 2x = 8). Salah satu bilangan yang dimaksud adalah….",
        "options": [
          {
            "key": "A",
            "text": "–2"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "5"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 25,
        "text": "Jika a dan b adalah akar-akar dari persamaan kuadrat 2x² + x - 10 = 0, maka nilai dari a . b (hasil kali akar) adalah…",
        "options": [
          {
            "key": "A",
            "text": "a + b = 5/2"
          },
          {
            "key": "B",
            "text": "a . b = –5"
          },
          {
            "key": "C",
            "text": "a + b = 1/2"
          },
          {
            "key": "D",
            "text": "a . b = 5"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-aa-vii",
    "code": "ASAS-AA-VII",
    "title": "Asesmen Sumatif Akhir Semester — Aqidah Akhlak Kelas VII",
    "subject": "Aqidah Akhlak",
    "classLevel": "VII",
    "scheduleText": "Selasa, 24 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Makna akidah menurut bahasa berasal dari kata (عَقَدَ - يَعْقِدُ - عَقِيْدَةً) yang artinya adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Ucapan atau perbuatan"
          },
          {
            "key": "B",
            "text": "Keselamatan"
          },
          {
            "key": "C",
            "text": "Ikatan atau perjanjian"
          },
          {
            "key": "D",
            "text": "Kebaikan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Pokok-pokok kepercayaan yang harus diyakini keberadaannya oleh setiap orang yang mengaku dirinya beragama Islam (muslim) disebut...",
        "options": [
          {
            "key": "A",
            "text": "Akidah akhlak"
          },
          {
            "key": "B",
            "text": "Akidah Nasrani"
          },
          {
            "key": "C",
            "text": "Akidah Yahudi"
          },
          {
            "key": "D",
            "text": "Akidah Islam"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 3,
        "text": "Berikut ini yang tidak termasuk tujuan mempelajari akidah Islam adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Untuk memperoleh petunjuk hidup yang benar sesuai kehendak Allah SWT"
          },
          {
            "key": "B",
            "text": "Untuk meningkatkan keimanan ketakwaan kepada Allah Swt"
          },
          {
            "key": "C",
            "text": "Agar terjamin keselamatan hidup di dunia dan akhirat"
          },
          {
            "key": "D",
            "text": "Untuk memperoleh kebahagiaan dunia dan dapat mengumpulkan harta sebanyak-banyaknya"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 4,
        "text": "Dasar hukum akidah Islam yang pertama adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Al-Qur’an"
          },
          {
            "key": "B",
            "text": "Al-Hadits"
          },
          {
            "key": "C",
            "text": "Ijma’"
          },
          {
            "key": "D",
            "text": "Qiyas"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 5,
        "text": "Segala ucapan, perbuatan dan taqrir (sikap diam) Nabi Muhammad Saw disebut...",
        "options": [
          {
            "key": "A",
            "text": "Al-Qur’an"
          },
          {
            "key": "B",
            "text": "Al-Hadits"
          },
          {
            "key": "C",
            "text": "Ijma’"
          },
          {
            "key": "D",
            "text": "Qiyas"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 6,
        "text": "Iman menurut bahasa adalah…",
        "options": [
          {
            "key": "A",
            "text": "Patuh"
          },
          {
            "key": "B",
            "text": "Percaya"
          },
          {
            "key": "C",
            "text": "Baik"
          },
          {
            "key": "D",
            "text": "Selamat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "Ihsan berasal dari bahasa Arab (أَحْسَنَ - يُحْسِنُ - إِحْسَانًا) yang artinya adalah…",
        "options": [
          {
            "key": "A",
            "text": "Percaya"
          },
          {
            "key": "B",
            "text": "Patuh/tunduk"
          },
          {
            "key": "C",
            "text": "Berbuat baik"
          },
          {
            "key": "D",
            "text": "Keselamatan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Patuh, tunduk, menyerahkan diri dan selamat adalah pengertian dari....",
        "options": [
          {
            "key": "A",
            "text": "Akidah"
          },
          {
            "key": "B",
            "text": "Iman"
          },
          {
            "key": "C",
            "text": "Ihsan"
          },
          {
            "key": "D",
            "text": "Islam"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 9,
        "text": "Iman tidak hanya ada dalam hati, namun dibuktikan dan diwujudkan melalui Islam dan Ihsan. Sebaliknya, dalam mewujudkan Islam dan Ihsan, akan sia-sia atau tidak ada artinya manakala tidak dilandasi dengan keyakinan (iman) yang kuat. Pernyataan tersebut adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Pengertian akidah Islam"
          },
          {
            "key": "B",
            "text": "Hubungan iman, Islam dan ihsan"
          },
          {
            "key": "C",
            "text": "Tujuan mempelajari akidah Islam"
          },
          {
            "key": "D",
            "text": "Manfaat mempelajari akidah Islam"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 10,
        "context": "قَالَ فَأَخْبِرْنِي عَنِ الْإِحْسَانِ قَالَ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
        "text": "Hadits tersebut menjelaskan tentang....",
        "options": [
          {
            "key": "A",
            "text": "Islam"
          },
          {
            "key": "B",
            "text": "Ihsan"
          },
          {
            "key": "C",
            "text": "Iman"
          },
          {
            "key": "D",
            "text": "Ikhlas"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 11,
        "context": "إِنَّ الدِّيْنَ عِنْدَ اللّٰهِ الْإِسْلَامُ",
        "text": "Potongan ayat tersebut merupakan dalil naqli tentang…",
        "options": [
          {
            "key": "A",
            "text": "Iman"
          },
          {
            "key": "B",
            "text": "Islam"
          },
          {
            "key": "C",
            "text": "Ihsan"
          },
          {
            "key": "D",
            "text": "Akidah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Sifat yang harus ada pada Dzat Allah sebagai bukti kesempurnaan-Nya adalah pengertian dari…",
        "options": [
          {
            "key": "A",
            "text": "Sifat-sifat Allah Swt"
          },
          {
            "key": "B",
            "text": "Sifat wajib Allah Swt"
          },
          {
            "key": "C",
            "text": "Sifat mustahil bagi Allah Swt"
          },
          {
            "key": "D",
            "text": "Sifat wajib Allah Swt yang nafsiyah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Pengertian Sifat Jaiz Allah SWT adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Kebebasan Allah untuk berbuat sesuatu atau tidak berbuat sesuatu sesuai dengan kehendak-Nya yang mutlak"
          },
          {
            "key": "B",
            "text": "Sifat yang dimiliki dan tidak dimiliki oleh Allah SWT"
          },
          {
            "key": "C",
            "text": "Sifat yang harus ada pada Allah dan pasti dimiliki oleh Allah"
          },
          {
            "key": "D",
            "text": "Sifat yang harus ada pada Allah SWT sebagai bukti kesempurnaan bagi-Nya"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 14,
        "text": "Wahdaniyah merupakan salah satu sifat wajib Allah yang mempunyai arti...",
        "options": [
          {
            "key": "A",
            "text": "Ada"
          },
          {
            "key": "B",
            "text": "Berdiri sendiri"
          },
          {
            "key": "C",
            "text": "Esa"
          },
          {
            "key": "D",
            "text": "Melihat"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Mukhalafatu lil hawaditsi adalah salah satu sifat wajib bagi Allah yang artinya ...",
        "options": [
          {
            "key": "A",
            "text": "Berkuasa"
          },
          {
            "key": "B",
            "text": "Berfirman"
          },
          {
            "key": "C",
            "text": "Berkehendak"
          },
          {
            "key": "D",
            "text": "Berbeda dengan makhluk-Nya"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 16,
        "text": "Salah satu sifat wajib bagi Allah adalah Qudrat, yang artinya ....",
        "options": [
          {
            "key": "A",
            "text": "Berdiri Sendiri"
          },
          {
            "key": "B",
            "text": "Berkuasa"
          },
          {
            "key": "C",
            "text": "Mendengar"
          },
          {
            "key": "D",
            "text": "Berfirman"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Tidak ada suatu yang tidak didengar oleh Allah Swt, walaupun jumlah suara manusia ratusan juta, semua akan didengar oleh Allah Swt karena Allah bersifat ...",
        "options": [
          {
            "key": "A",
            "text": "Baqa’"
          },
          {
            "key": "B",
            "text": "Sama’"
          },
          {
            "key": "C",
            "text": "Kalam"
          },
          {
            "key": "D",
            "text": "Qudrat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Sifat Ma’ani berjumlah...",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "5"
          },
          {
            "key": "D",
            "text": "7"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 19,
        "text": "Sifat yang digunakan untuk meniadakan sesuatu yang tidak layak bagi Allah Swt adalah…",
        "options": [
          {
            "key": "A",
            "text": "Sifat Nafsiyah"
          },
          {
            "key": "B",
            "text": "Sifat Salbiyah"
          },
          {
            "key": "C",
            "text": "Sifat Ma’ani"
          },
          {
            "key": "D",
            "text": "Sifat Ma’nawiyah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 20,
        "text": "Klasifikasi sifat wajib Allah yang Nafsiyah adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Wujud"
          },
          {
            "key": "B",
            "text": "Bashiran"
          },
          {
            "key": "C",
            "text": "Hayat"
          },
          {
            "key": "D",
            "text": "Ilmu"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 21,
        "text": "Yang tidak termasuk Sifat Wajib Allah yang Ma’nawiyah adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Bashiran"
          },
          {
            "key": "B",
            "text": "Hayyan"
          },
          {
            "key": "C",
            "text": "‘Aliman"
          },
          {
            "key": "D",
            "text": "Baqa’"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 22,
        "text": "Dalil naqli yang menunjukkan tentang sifat Qudrat (Allah Maha Kuasa atas segala sesuatu) adalah....",
        "options": [
          {
            "key": "A",
            "text": "إِنَّهُ هُوَ السَّمِيْعُ الْبَصِيْرُ"
          },
          {
            "key": "B",
            "text": "إِنَّ اللّٰهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ"
          },
          {
            "key": "C",
            "text": "قُلْ هُوَ اللّٰهُ أَحَدٌ"
          },
          {
            "key": "D",
            "text": "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيْمٌ"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "context": "وَكَلَّمَ اللّٰهُ مُوْسَىٰ تَكْلِيْمًا",
        "text": "Ayat tersebut menjelaskan tentang sifat wajib Allah Swt yaitu...",
        "options": [
          {
            "key": "A",
            "text": "Wujud"
          },
          {
            "key": "B",
            "text": "Qidam"
          },
          {
            "key": "C",
            "text": "Kalam"
          },
          {
            "key": "D",
            "text": "Qiyamuhu binafsihi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "context": "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ وَهُوَ بِكُلِّ شَيْءٍ عَلِيْمٌ",
        "text": "Ayat tersebut merupakan dalil naqli tentang sifat…",
        "options": [
          {
            "key": "A",
            "text": "Wujud"
          },
          {
            "key": "B",
            "text": "Qidam"
          },
          {
            "key": "C",
            "text": "Baqa’"
          },
          {
            "key": "D",
            "text": "Mukhalafatu lil hawaditsi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Tanda-tanda adanya Allah melalui ciptaan-Nya adalah...",
        "options": [
          {
            "key": "A",
            "text": "Adanya Al-Qur’an"
          },
          {
            "key": "B",
            "text": "Adanya makhluk hidup dan alam semesta"
          },
          {
            "key": "C",
            "text": "Terjadi gempa bumi"
          },
          {
            "key": "D",
            "text": "Terjadi tsunami"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 26,
        "text": "Arti sifat mustahil Jahlun adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Baru"
          },
          {
            "key": "B",
            "text": "Bodoh"
          },
          {
            "key": "C",
            "text": "Terpaksa"
          },
          {
            "key": "D",
            "text": "Lemah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 27,
        "text": "Mumatsalatu lil hawaditsi mempunyai arti ...",
        "options": [
          {
            "key": "A",
            "text": "Menyerupai makhluk-Nya"
          },
          {
            "key": "B",
            "text": "Rusak / Binasa"
          },
          {
            "key": "C",
            "text": "Membutuhkan makhluk-Nya"
          },
          {
            "key": "D",
            "text": "Berbilang"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 28,
        "context": "قُلْ هُوَ اللّٰهُ أَحَدٌ",
        "text": "Ayat tersebut menjelaskan bahwa mustahil Allah bersifat ...",
        "options": [
          {
            "key": "A",
            "text": "‘Adam"
          },
          {
            "key": "B",
            "text": "‘Ajzun"
          },
          {
            "key": "C",
            "text": "Ta’addud (Berbilang)"
          },
          {
            "key": "D",
            "text": "Jahlun"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 29,
        "context": "إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَنْ يَقُوْلَ لَهُ كُنْ فَيَكُوْنُ",
        "text": "Dalil naqli tersebut menjelaskan tentang mustahil Allah bersifat…",
        "options": [
          {
            "key": "A",
            "text": "‘Ajzun"
          },
          {
            "key": "B",
            "text": "Karahah (Terpaksa)"
          },
          {
            "key": "C",
            "text": "Jahlun"
          },
          {
            "key": "D",
            "text": "‘Umyun"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 30,
        "text": "Seluruh kehidupan makhluk tunduk kepada Allah Swt. Dia yang mengatur semua kehidupan makhluk hidup. Allah Swt tidak akan mati dan Dia kekal selamanya. Pernyataan tersebut merupakan dalil aqli bahwa mustahil Allah Swt bersifat…",
        "options": [
          {
            "key": "A",
            "text": "Mautun (Mati)"
          },
          {
            "key": "B",
            "text": "Shummun"
          },
          {
            "key": "C",
            "text": "Bukmun"
          },
          {
            "key": "D",
            "text": "‘Ajizan"
          }
        ],
        "answerKey": "A"
      }
    ],
    "dayOrder": 2,
    "dayLabel": "Hari Ke-2 • Selasa, 24 Nov 2026",
    "sessionOrder": 2
  },
  {
    "id": "exam-aa-viii",
    "code": "ASAS-AA-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Akidah Akhlak Kelas VIII",
    "subject": "Akidah Akhlak",
    "classLevel": "VIII",
    "scheduleText": "Selasa, 24 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Al-Qur’an secara bahasa berasal dari istilah Arab “Qara’a” yang berarti...",
        "options": [
          {
            "key": "A",
            "text": "Pembaca"
          },
          {
            "key": "B",
            "text": "Bacaan"
          },
          {
            "key": "C",
            "text": "Dibacakan"
          },
          {
            "key": "D",
            "text": "Bacakanlah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Al-Qur’an mempunyai nama lain “Asy-Syifa’”. Asy-Syifa artinya....",
        "options": [
          {
            "key": "A",
            "text": "Pembeda"
          },
          {
            "key": "B",
            "text": "Penyembuh / Obat"
          },
          {
            "key": "C",
            "text": "Perkataan"
          },
          {
            "key": "D",
            "text": "Petunjuk"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "Nabi Muhammad SAW menerima wahyu terakhir ketika beliau sedang melakukan haji wada’. Haji wada’ artinya…",
        "options": [
          {
            "key": "A",
            "text": "Haji yang paling besar"
          },
          {
            "key": "B",
            "text": "Haji perpisahan"
          },
          {
            "key": "C",
            "text": "Haji pembukaan"
          },
          {
            "key": "D",
            "text": "Haji pertemuan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "Ayat-ayat atau wahyu yang turun sebelum hijrah Nabi Muhammad Saw disebut ayat...",
        "options": [
          {
            "key": "A",
            "text": "Madaniyah"
          },
          {
            "key": "B",
            "text": "Makkiyah"
          },
          {
            "key": "C",
            "text": "Nabawi"
          },
          {
            "key": "D",
            "text": "Nubuwwah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "context": "وَاِمَّا تُعْرِضَنَّ عَنْهُمُ ابْتِغَاۤءَ رَحْمَةٍ مِّنْ رَّبِّكَ تَرْجُوْهَا فَقُلْ لَّهُمْ قَوْلًا مَّيْسُوْرًا (QS. Al-Isra’: 28)",
        "text": "Fungsi Al-Qur’an menurut ayat di atas adalah sebagai…",
        "options": [
          {
            "key": "A",
            "text": "Petunjuk kehidupan"
          },
          {
            "key": "B",
            "text": "Penyembuh / obat"
          },
          {
            "key": "C",
            "text": "Sumber hukum"
          },
          {
            "key": "D",
            "text": "Sumber ilmu"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 6,
        "text": "Tujuan Allah Swt menuliskan kisah-kisah umat terdahulu dalam kitab suci Al-Qur’an adalah untuk....",
        "options": [
          {
            "key": "A",
            "text": "Meniru kemungkaran orang-orang yang durhaka"
          },
          {
            "key": "B",
            "text": "Menghukum orang-orang kafir seperti dalam kisah tersebut"
          },
          {
            "key": "C",
            "text": "Mengambil pelajaran (‘ibrah) dari kisah-kisah tersebut"
          },
          {
            "key": "D",
            "text": "Mengambil kisah menarik untuk dikisahkan ulang"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 7,
        "text": "Berikut adalah nama-nama sahabat yang menjadi pencatat wahyu Al-Qur’an, kecuali...",
        "options": [
          {
            "key": "A",
            "text": "Abu Lahab"
          },
          {
            "key": "B",
            "text": "Muawiyah bin Abi Sufyan"
          },
          {
            "key": "C",
            "text": "Utsman bin Affan"
          },
          {
            "key": "D",
            "text": "Khalid bin Walid"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 8,
        "text": "Para pemimpin pemerintahan Islam pengganti Rasulullah sesudah beliau wafat disebut dengan istilah....",
        "options": [
          {
            "key": "A",
            "text": "Amirul Mukminin"
          },
          {
            "key": "B",
            "text": "Khalifatul Aminin"
          },
          {
            "key": "C",
            "text": "Khulafaur Rasyidin"
          },
          {
            "key": "D",
            "text": "Qadhi Ar-Rasyidin"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 9,
        "text": "Di bawah ini yang bukan merupakan keistimewaan Al-Qur’an dibandingkan dengan kitab-kitab suci sebelumnya yaitu....",
        "options": [
          {
            "key": "A",
            "text": "Al-Qur’an terpelihara kemurnian dan keutuhannya"
          },
          {
            "key": "B",
            "text": "Membacanya bernilai ibadah"
          },
          {
            "key": "C",
            "text": "Menyesatkan kitab-kitab suci sebelumnya"
          },
          {
            "key": "D",
            "text": "Keindahan bahasa dan redaksinya tak tertandingi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Karena banyaknya penghafal Al-Qur’an yang gugur dalam Perang Yamamah, salah seorang sahabat mengusulkan kepada Khalifah Abu Bakar untuk mengadakan pembukuan Al-Qur’an. Sahabat yang mengusulkan tersebut bernama...",
        "options": [
          {
            "key": "A",
            "text": "Abu Bakar Ash-Shiddiq"
          },
          {
            "key": "B",
            "text": "Umar bin Khattab"
          },
          {
            "key": "C",
            "text": "Utsman bin Affan"
          },
          {
            "key": "D",
            "text": "Ali bin Abi Thalib"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 11,
        "text": "Untuk membuktikan kerasulan dan melemahkan lawan-lawannya, Allah Swt membekali sesuatu yang luar biasa yang diberikan kepada para rasul-Nya. Sesuatu itu adalah...",
        "options": [
          {
            "key": "A",
            "text": "Ma’unah"
          },
          {
            "key": "B",
            "text": "Irhas"
          },
          {
            "key": "C",
            "text": "Mukjizat"
          },
          {
            "key": "D",
            "text": "Karamah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "text": "Nabi Isa a.s. pernah diminta oleh seorang ibu agar menghidupkan putranya yang telah mati. Atas izin Allah Swt, beliau dapat menghidupkan kembali orang mati tersebut. Peristiwa luar biasa yang tampak secara indrawi ini termasuk jenis mukjizat....",
        "options": [
          {
            "key": "A",
            "text": "Aqliyah"
          },
          {
            "key": "B",
            "text": "Maknawiyah"
          },
          {
            "key": "C",
            "text": "Kauniyah / Hissiyah"
          },
          {
            "key": "D",
            "text": "Hammiyah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 13,
        "text": "Berikut ini yang merupakan mukjizat Nabi atau Rasul yang mempunyai sifat hanya dapat dipahami oleh akal pikiran serta berlaku sepanjang zaman adalah....",
        "options": [
          {
            "key": "A",
            "text": "Tongkat Nabi Musa"
          },
          {
            "key": "B",
            "text": "Al-Qur’anul Karim"
          },
          {
            "key": "C",
            "text": "Perahu Nabi Nuh"
          },
          {
            "key": "D",
            "text": "Bayi Isa yang dapat berbicara"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "text": "Berikut ini yang tidak termasuk ciri-ciri mukjizat adalah....",
        "options": [
          {
            "key": "A",
            "text": "Bukti kenabian atau kerasulan"
          },
          {
            "key": "B",
            "text": "Sebagai kejadian yang luar biasa"
          },
          {
            "key": "C",
            "text": "Merupakan bukti kekuasaan Allah Swt"
          },
          {
            "key": "D",
            "text": "Diturunkan hanya kepada rasul Ulul Azmi saja"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "text": "Karamah diberikan kepada para wali Allah (kekasih Allah), yang juga sering dijumpai pada seorang .... yang saleh dan bertakwa.",
        "options": [
          {
            "key": "A",
            "text": "Raja"
          },
          {
            "key": "B",
            "text": "Sufi / Ulama Wara’"
          },
          {
            "key": "C",
            "text": "Pendeta"
          },
          {
            "key": "D",
            "text": "Pangeran"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 16,
        "text": "Berikut ini adalah yang bukan ciri-ciri wali Allah Swt....",
        "options": [
          {
            "key": "A",
            "text": "Beriman kepada Allah Swt"
          },
          {
            "key": "B",
            "text": "Bertaqwa kepada-Nya"
          },
          {
            "key": "C",
            "text": "Beramal saleh"
          },
          {
            "key": "D",
            "text": "Tidak memerlukan harta benda"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 17,
        "text": "Allah Swt memberikan ma’unah kepada manusia beriman untuk mengatasi problem dan....",
        "options": [
          {
            "key": "A",
            "text": "Mengawasi hamba-Nya"
          },
          {
            "key": "B",
            "text": "Menolong utusan-Nya"
          },
          {
            "key": "C",
            "text": "Menolong hamba-Nya"
          },
          {
            "key": "D",
            "text": "Mengendalikan wahyu"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 18,
        "text": "Di bawah ini yang merupakan contoh kejadian luar biasa (irhas/pertolongan sebelum kerasulan) adalah....",
        "options": [
          {
            "key": "A",
            "text": "Kejadian yang dialami Nabi Zakaria a.s"
          },
          {
            "key": "B",
            "text": "Kejadian yang dialami Nabi Sulaiman a.s"
          },
          {
            "key": "C",
            "text": "Kemampuan Nabi Isa berbicara ketika masih bayi"
          },
          {
            "key": "D",
            "text": "Selamatnya seorang mukmin biasa dari kecelakaan maut"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 19,
        "text": "Calon nabi dan rasul ketika masih kecil ada yang mengalami kejadian luar biasa pada diri mereka, kejadian tersebut dinamakan....",
        "options": [
          {
            "key": "A",
            "text": "Irhas"
          },
          {
            "key": "B",
            "text": "Jimat"
          },
          {
            "key": "C",
            "text": "Keramat"
          },
          {
            "key": "D",
            "text": "Keajaiban"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "Dalam perjalanan niaga Muhammad bin Abdullah (sebelum diangkat menjadi Rasul) dari Syam ke Mekah, beliau dipayungi awan tebal sehingga tidak merasakan panas. Hal ini termasuk contoh kejadian luar biasa yaitu.....",
        "options": [
          {
            "key": "A",
            "text": "Mukjizat"
          },
          {
            "key": "B",
            "text": "Karamah"
          },
          {
            "key": "C",
            "text": "Ma’unah"
          },
          {
            "key": "D",
            "text": "Irhas"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 21,
        "text": "Sifat ananiyah (egois/mementingkan diri sendiri) sangat dekat dengan sikap....",
        "options": [
          {
            "key": "A",
            "text": "Toleran"
          },
          {
            "key": "B",
            "text": "Tenggang rasa"
          },
          {
            "key": "C",
            "text": "Sopan"
          },
          {
            "key": "D",
            "text": "Sombong"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 22,
        "text": "Usaha manusia untuk memenuhi kebutuhan hidupnya, baik material, spiritual, kesehatan dan masa depannya dalam usaha mendapatkan yang terbaik agar tujuan hidupnya selamat sejahtera di dunia dan di akhirat merupakan pengertian dari....",
        "options": [
          {
            "key": "A",
            "text": "Tawakal"
          },
          {
            "key": "B",
            "text": "Sabar"
          },
          {
            "key": "C",
            "text": "Ikhtiar"
          },
          {
            "key": "D",
            "text": "Qana’ah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "text": "Pahira belum lancar membaca Al-Qur’an, ketika ulangan membaca Pahira tidak tuntas. Karena ingin memperbaiki diri, ia mengikuti kegiatan les baca tulis Al-Qur’an hingga akhirnya lancar membaca. Sikap Pahira ini termasuk perilaku....",
        "options": [
          {
            "key": "A",
            "text": "Syukur"
          },
          {
            "key": "B",
            "text": "Sabar"
          },
          {
            "key": "C",
            "text": "Qana’ah"
          },
          {
            "key": "D",
            "text": "Ikhtiar"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 24,
        "context": "اِنَّ اللّٰهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتّٰى يُغَيِّرُوْا مَا بِاَنْفُسِهِمْۗ (QS. Ar-Ra’d: 11)",
        "text": "Dari ayat tersebut dapat diterangkan bahwa Allah memerintahkan kepada kita untuk mempunyai sikap ….",
        "options": [
          {
            "key": "A",
            "text": "Qana’ah"
          },
          {
            "key": "B",
            "text": "Sabar"
          },
          {
            "key": "C",
            "text": "Ikhtiar"
          },
          {
            "key": "D",
            "text": "Tawakal"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 25,
        "text": "Mendayagunakan nikmat Allah Swt pada hal-hal yang diridhai-Nya dengan memberikan sebagian hartanya untuk orang lain merupakan contoh perilaku syukur dengan....",
        "options": [
          {
            "key": "A",
            "text": "Badan / Perbuatan (Amal)"
          },
          {
            "key": "B",
            "text": "Lisan"
          },
          {
            "key": "C",
            "text": "Hati"
          },
          {
            "key": "D",
            "text": "Pikiran"
          }
        ],
        "answerKey": "A"
      }
    ],
    "dayOrder": 2,
    "dayLabel": "Hari Ke-2 • Selasa, 24 Nov 2026",
    "sessionOrder": 2
  },
  {
    "id": "exam-aa-ix",
    "code": "ASAS-AA-IX",
    "title": "Asesmen Sumatif Akhir Semester — Akidah Akhlak Kelas IX",
    "subject": "Akidah Akhlak",
    "classLevel": "IX",
    "scheduleText": "Selasa, 24 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "dayOrder": 2,
    "dayLabel": "Hari Ke-2 • Selasa, 24 Nov 2026",
    "sessionOrder": 2,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Mempercayai dan meyakini dengan sepenuh hati bahwa hari kiamat pasti akan terjadi merupakan pengertian beriman kepada…",
        "options": [
          {
            "key": "A",
            "text": "Yaumul ba’ats"
          },
          {
            "key": "B",
            "text": "Yaumul mahsyar"
          },
          {
            "key": "C",
            "text": "Yaumul hisab"
          },
          {
            "key": "D",
            "text": "Yaumul qiyamah"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 2,
        "text": "Perhatikan pernyataan berikut:\n1) Mengingkari atau tidak percaya akan adanya hari akhir\n2) Mempunyai anggapan bahwa setelah manusia mati tidak lagi ada kehidupan\n3) Mempercayai dunia terjadi dengan sendirinya tanpa pencipta\n4) Mempercayai akan adanya reinkarnasi\nYang termasuk ciri-ciri orang ateis dalam menyikapi adanya hari akhir ditunjukkan oleh nomor…",
        "options": [
          {
            "key": "A",
            "text": "1, 2, 3"
          },
          {
            "key": "B",
            "text": "1, 2, 4"
          },
          {
            "key": "C",
            "text": "2, 3, 4"
          },
          {
            "key": "D",
            "text": "1, 3, 4"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 3,
        "text": "Perhatikan ayat berikut (Q.S. Ar-Rum: 56):\nفَهَٰذَا يَوْمُ الْبَعْثِ وَلَٰكِنَّكُمْ كُنْتُمْ لَا تَعْلَمُونَ\nArti dari potongan ayat tersebut di atas adalah…",
        "options": [
          {
            "key": "A",
            "text": "Maka dia berada dalam kehidupan yang menyenangkan"
          },
          {
            "key": "B",
            "text": "Maka inilah hari berbangkit itu, tetapi dahulu kamu tidak meyakininya (mengetahuinya)"
          },
          {
            "key": "C",
            "text": "Maka tempat kembalinya adalah neraka Hawiyah"
          },
          {
            "key": "D",
            "text": "Dan manusia bertanya: ada apa dengan bumi ini?"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "Kiamat pasti datang dan tidak ada keraguan padanya, serta Allah akan membangkitkan siapa pun yang di dalam kubur. Hal ini sesuai dengan firman Allah SWT dalam…",
        "options": [
          {
            "key": "A",
            "text": "Q.S. Al-Hajj : 7"
          },
          {
            "key": "B",
            "text": "Q.S. Al-Qari’ah : 1-5"
          },
          {
            "key": "C",
            "text": "Q.S. Az-Zalzalah : 1-5"
          },
          {
            "key": "D",
            "text": "Q.S. Ar-Rahman : 26-27"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 5,
        "text": "Di bawah ini yang tidak termasuk gambaran kejadian hari kiamat menurut Q.S. Az-Zalzalah adalah…",
        "options": [
          {
            "key": "A",
            "text": "Bumi diguncangkan dengan guncangan yang dahsyat"
          },
          {
            "key": "B",
            "text": "Bumi mengeluarkan beban-beban berat yang dikandungnya"
          },
          {
            "key": "C",
            "text": "Manusia berlarian mencari tempat persembunyian yang aman"
          },
          {
            "key": "D",
            "text": "Manusia keluar dari kuburnya dalam keadaan bermacam-macam untuk diperlihatkan amalnya"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Menurut para pakar/ahli ilmu pengetahuan (astronomi/fisika), salah satu penyebab terjadinya kehancuran alam semesta (kiamat) nanti adalah…",
        "options": [
          {
            "key": "A",
            "text": "Matahari yang terus memancarkan energi hingga kehilangan massanya jutaan ton setiap detik, sehingga lama-kelamaan mengecil dan padam"
          },
          {
            "key": "B",
            "text": "Bumi kehilangan beratnya karena eksplorasi di darat dan di laut"
          },
          {
            "key": "C",
            "text": "Gedung-gedung pencakar langit terlalu banyak didirikan sehingga bumi tidak mampu menampung"
          },
          {
            "key": "D",
            "text": "Banyak didirikan gedung dari bahan kaca sehingga bumi semakin panas"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 7,
        "text": "Keadaan yang dialami orang-orang yang beriman dan beramal saleh ketika berada di alam Barzakh diibaratkan seperti…",
        "options": [
          {
            "key": "A",
            "text": "Sendiri dan sangat merindukan kehadiran sanak saudaranya"
          },
          {
            "key": "B",
            "text": "Melewati malam dan siang seperti keadaannya selama di dunia"
          },
          {
            "key": "C",
            "text": "Tempat penantian yang sangat panjang dan tidak tahu kapan berakhir"
          },
          {
            "key": "D",
            "text": "Tidur nyenyak, malam terasa sangat singkat, dan terbangun menjelang fajar"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 8,
        "text": "Peristiwa yang terjadi pada saat Yaumul Ba’ats adalah…",
        "options": [
          {
            "key": "A",
            "text": "Dikumpulkannya manusia di tanah lapang yang sangat panas"
          },
          {
            "key": "B",
            "text": "Dibangkitkannya manusia dari dalam kuburnya"
          },
          {
            "key": "C",
            "text": "Penimbangan terhadap amal manusia dengan seadil-adilnya"
          },
          {
            "key": "D",
            "text": "Dihitungnya amal manusia apakah baik atau buruk"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "Peristiwa yang terjadi pada saat Yaumul Mizan adalah…",
        "options": [
          {
            "key": "A",
            "text": "Dikumpulkannya manusia di tanah lapang yang sangat panas"
          },
          {
            "key": "B",
            "text": "Dibangkitkannya manusia dari dalam kuburnya"
          },
          {
            "key": "C",
            "text": "Penimbangan terhadap amal manusia dengan seadil-adilnya"
          },
          {
            "key": "D",
            "text": "Dihitungnya amal manusia apakah baik atau buruk"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Gambaran kejadian pada Yaumul Mahsyar adalah…",
        "options": [
          {
            "key": "A",
            "text": "Manusia diberi tanda satu per satu oleh para malaikat"
          },
          {
            "key": "B",
            "text": "Manusia berlarian ke sana kemari mencari keluarga"
          },
          {
            "key": "C",
            "text": "Malaikat menanyakan apa saja yang sudah dilakukan di dalam kubur"
          },
          {
            "key": "D",
            "text": "Manusia berkumpul di padang datar yang luas sesuai amal perbuatannya"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 11,
        "text": "Berikut adalah keadaan manusia pada saat Yaumul Hisab, di antaranya…",
        "options": [
          {
            "key": "A",
            "text": "Manusia dibangkitkan dari kuburnya dengan rupa yang berbeda-beda"
          },
          {
            "key": "B",
            "text": "Dikumpulkannya di suatu tempat sebelum pemeriksaan"
          },
          {
            "key": "C",
            "text": "Dihitung semua amal baik dan buruknya serta menerima catatan amalnya"
          },
          {
            "key": "D",
            "text": "Meniti jembatan menuju ke tempat yang sudah ditentukan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "text": "Nama lain hari akhir yang berarti hari berkumpul atau hari penyesalan terhadap dosa selama di dunia adalah...",
        "options": [
          {
            "key": "A",
            "text": "Yaumul Hasyr / Yaumul Hasrah"
          },
          {
            "key": "B",
            "text": "Yaumul Mizan"
          },
          {
            "key": "C",
            "text": "Yaumul Ba’ats"
          },
          {
            "key": "D",
            "text": "Yaumul Hisab"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 13,
        "text": "Perhatikan ayat berikut:\nالْيَوْمَ تُجْزَىٰ كُلُّ نَفْسٍ بِمَا كَسَبَتْ ۚ لَا ظُلْمَ الْيَوْمَ ۚ إِنَّ اللَّهَ سَرِيعُ الْحِسَابِ\nAyat di atas berkaitan dengan peristiwa…",
        "options": [
          {
            "key": "A",
            "text": "Yaumul Ba’ats"
          },
          {
            "key": "B",
            "text": "Yaumul Mahsyar"
          },
          {
            "key": "C",
            "text": "Yaumul Mizan"
          },
          {
            "key": "D",
            "text": "Yaumul Hisab"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 14,
        "text": "Perhatikan perilaku berikut:\n1) Berhati-hati dalam berusaha mencukupi kebutuhan hidup agar tidak melanggar hukum agama\n2) Memperbanyak amalan baik dalam rangka mencari ridha Allah SWT\n3) Berhati-hati saat bergaul agar tidak terpengaruh hal-hal negatif\n4) Rajin menumpuk harta benda semata-mata untuk kemewahan\nSikap orang yang mengimplementasikan iman kepada hari akhir ditunjukkan oleh nomor…",
        "options": [
          {
            "key": "A",
            "text": "1, 2, 4"
          },
          {
            "key": "B",
            "text": "2, 3, 4"
          },
          {
            "key": "C",
            "text": "1, 3, 4"
          },
          {
            "key": "D",
            "text": "1, 2, 3"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "text": "Hikmah beriman kepada hari akhir antara lain…",
        "options": [
          {
            "key": "A",
            "text": "Mendorong setiap muslim untuk memperbanyak amal ibadah dan menjauhi maksiat"
          },
          {
            "key": "B",
            "text": "Memotivasi manusia untuk mengejar dunia semata"
          },
          {
            "key": "C",
            "text": "Memperbanyak pengalaman hidup dengan mengelilingi dunia"
          },
          {
            "key": "D",
            "text": "Menjalin silaturahmi hanya dengan orang kaya"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Allah SWT berfirman dalam Q.S. Al-Mujadalah ayat 11 bahwa orang yang beriman dan berilmu dijanjikan oleh Allah berupa...",
        "options": [
          {
            "key": "A",
            "text": "Uang yang berlimpah"
          },
          {
            "key": "B",
            "text": "Derajat yang tinggi"
          },
          {
            "key": "C",
            "text": "Saudara yang baik"
          },
          {
            "key": "D",
            "text": "Jabatan yang tinggi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Berikut merupakan perilaku orang yang mencintai ilmu adalah...",
        "options": [
          {
            "key": "A",
            "text": "Menuntut ilmu semata-mata agar memperoleh uang yang banyak"
          },
          {
            "key": "B",
            "text": "Mengkaji sendiri semua ilmu tanpa butuh guru"
          },
          {
            "key": "C",
            "text": "Rajin dan senang mendatangi majelis ilmu meskipun harus berkorban waktu dan biaya"
          },
          {
            "key": "D",
            "text": "Bangga mendapatkan ilmu tinggi agar disanjung dan dikagumi orang"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 18,
        "text": "Perhatikan pernyataan berikut:\n1) Mampu mengatasi persoalan yang dihadapi\n2) Dapat melaksanakan ajaran agama secara benar\n3) Terangkat derajatnya\n4) Dapat membantu orang lain dalam menyelesaikan persoalannya\nYang termasuk manfaat ilmu bagi diri sendiri ditunjukkan oleh nomor...",
        "options": [
          {
            "key": "A",
            "text": "2, 3, 4"
          },
          {
            "key": "B",
            "text": "1, 2, 4"
          },
          {
            "key": "C",
            "text": "1, 3, 4"
          },
          {
            "key": "D",
            "text": "1, 2, 3"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 19,
        "text": "Menurut Imam Al-Ghazali, maksud dari “Orang yang tahu tetapi tidak tahu bahwa dirinya tahu” adalah orang yang...",
        "options": [
          {
            "key": "A",
            "text": "Tidak tahu tetapi ia merasa tahu"
          },
          {
            "key": "B",
            "text": "Tidak tahu dan ia sadar bahwa dirinya tidak tahu"
          },
          {
            "key": "C",
            "text": "Berilmu tetapi ia lalai / tidak mau mengamalkan ilmunya"
          },
          {
            "key": "D",
            "text": "Berilmu dan ia mau mengamalkan ilmunya"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 20,
        "text": "Firdaus adalah anak tunggal yang berasal dari keluarga berada. Apa yang diinginkannya dipenuhi oleh orang tuanya. Sebagai seorang siswa, sikap Firdaus yang tepat adalah...",
        "options": [
          {
            "key": "A",
            "text": "Bersekolah biasa-biasa saja karena hidupnya sudah dijamin orang tua"
          },
          {
            "key": "B",
            "text": "Tetap bekerja keras dan belajar sungguh-sungguh mengejar cita-cita karena harta orang tua tidak menjamin masa depannya"
          },
          {
            "key": "C",
            "text": "Memanfaatkan harta orang tuanya untuk bersenang-senang"
          },
          {
            "key": "D",
            "text": "Memilih sekolah paling mahal hanya untuk gengsi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 21,
        "text": "Akhlak mulia yang harus dimiliki oleh orang yang berilmu di antaranya...",
        "options": [
          {
            "key": "A",
            "text": "Berusaha selalu memenangkan setiap perdebatan dalam majelis"
          },
          {
            "key": "B",
            "text": "Merasa paling benar dalam setiap permasalahan"
          },
          {
            "key": "C",
            "text": "Bangga ketika mendapat pujian sebagai orang alim"
          },
          {
            "key": "D",
            "text": "Mengutamakan sikap rendah hati (tawadhu) dan tidak sombong"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 22,
        "text": "Risky terpilih mewakili madrasah untuk ikut lomba karate. Untuk itu dia mempersiapkan diri dengan berlatih sungguh-sungguh dan disiplin hingga akhirnya memperoleh piala kejuaraan yang mengharumkan nama madrasah. Sikap tersebut menunjukkan perilaku...",
        "options": [
          {
            "key": "A",
            "text": "Bersabar"
          },
          {
            "key": "B",
            "text": "Tawakal"
          },
          {
            "key": "C",
            "text": "Kreatif"
          },
          {
            "key": "D",
            "text": "Bekerja keras"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 23,
        "text": "Rasulullah SAW bersabda: “Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah...” (HR. Muslim). Makna terpenting dari sabda tersebut adalah...",
        "options": [
          {
            "key": "A",
            "text": "Meremehkan mukmin yang lemah"
          },
          {
            "key": "B",
            "text": "Motivasi agar mengetahui keadaan mukmin yang berbeda-beda"
          },
          {
            "key": "C",
            "text": "Motivasi agar kaum mukminin berusaha menjadi umat yang kuat (iman, ilmu, fisik, dan ekonomi)"
          },
          {
            "key": "D",
            "text": "Perintah agar mukmin pasrah pada keadaannya"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Allah SWT berfirman: “...Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum sebelum mereka mengubah keadaan diri mereka sendiri...” (Q.S. Ar-Ra’d: 11). Makna terpenting dari firman tersebut adalah...",
        "options": [
          {
            "key": "A",
            "text": "Isyarat dan perintah agar manusia mau berusaha dan bekerja keras mengubah nasibnya"
          },
          {
            "key": "B",
            "text": "Sindiran kepada manusia yang lemah"
          },
          {
            "key": "C",
            "text": "Isyarat agar manusia cukup berdiam diri"
          },
          {
            "key": "D",
            "text": "Celaan kepada orang miskin"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 25,
        "text": "Bella memiliki hobi membuat kerajinan. Dia mengolah limbah kulit bawang yang biasanya dibuang menjadi hiasan bunga yang cantik dan bernilai jual. Bella adalah siswa yang memiliki sifat...",
        "options": [
          {
            "key": "A",
            "text": "Tawakal"
          },
          {
            "key": "B",
            "text": "Kreatif"
          },
          {
            "key": "C",
            "text": "Sabar"
          },
          {
            "key": "D",
            "text": "Qana’ah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 26,
        "text": "Rasulullah SAW mengajak umatnya agar menjadi umat muslim yang kuat, di antaranya kuat ekonomi/harta, yang tujuannya adalah...",
        "options": [
          {
            "key": "A",
            "text": "Menjadi umat yang sombong dan ditakuti"
          },
          {
            "key": "B",
            "text": "Memiliki kekuasaan mutlak"
          },
          {
            "key": "C",
            "text": "Dapat memenuhi kebutuhan hidup, berinfak, dan tidak meminta-minta"
          },
          {
            "key": "D",
            "text": "Menumpuk kekayaan pribadi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 27,
        "text": "Perhatikan daftar perilaku berikut:\n(1) Bekerja sangat santai dan menunda-nunda\n(2) Suka mengeluarkan dana tanpa perhitungan\n(3) Pandai memanfaatkan waktu sebaik-baiknya untuk menghasilkan karya bermanfaat\n(4) Bergaul dengan orang yang pemalas\nYang termasuk ciri orang produktif ditunjukkan oleh nomor...",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 28,
        "text": "Cara membiasakan diri agar memiliki sifat bekerja keras yaitu...",
        "options": [
          {
            "key": "A",
            "text": "Meyakini bahwa dengan bekerja keras hidup menjadi mandiri dan tidak bergantung pada orang lain"
          },
          {
            "key": "B",
            "text": "Mempercayai keberhasilan hanya bisa diraih dengan modal besar"
          },
          {
            "key": "C",
            "text": "Menghalalkan segala cara untuk mengalahkan teman"
          },
          {
            "key": "D",
            "text": "Bekerja keras agar ditakuti orang lain"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 29,
        "text": "Akbar adalah seorang yang kreatif dan berakhlak. Ia bersikap...",
        "options": [
          {
            "key": "A",
            "text": "Menghalalkan segala cara untuk berkreasi"
          },
          {
            "key": "B",
            "text": "Meninggalkan seluruh aturan agama demi hal baru"
          },
          {
            "key": "C",
            "text": "Selalu berusaha menciptakan karya baru dan memanfaatkan karunia Allah untuk kebaikan"
          },
          {
            "key": "D",
            "text": "Mengeksploitasi alam semesta secara berlebihan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 30,
        "text": "Bagi setiap muslim, menerapkan adab dan akhlak Islami dalam kehidupan sehari-hari hukumnya...",
        "options": [
          {
            "key": "A",
            "text": "Fardhu kifayah"
          },
          {
            "key": "B",
            "text": "Sunnah muakkadah"
          },
          {
            "key": "C",
            "text": "Fardhu ‘ain"
          },
          {
            "key": "D",
            "text": "Sunnah ghairu muakkadah"
          }
        ],
        "answerKey": "C"
      }
    ]
  },
  {
    "id": "exam-btq-vii",
    "code": "ASAS-BTQ-VII",
    "title": "Asesmen Sumatif Akhir Semester — Baca Tulis Qur’an (BTQ) Kelas VII",
    "subject": "Baca Tulis Qur’an",
    "classLevel": "VII",
    "scheduleText": "Selasa, 24 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 2,
    "dayLabel": "Hari Ke-2 • Selasa, 24 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Jika nun mati bertemu dengan kaf (ك) disebut…",
        "options": [
          {
            "key": "A",
            "text": "Idhar"
          },
          {
            "key": "B",
            "text": "Ikhfa ab’ad"
          },
          {
            "key": "C",
            "text": "Idghom"
          },
          {
            "key": "D",
            "text": "Iklab"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Jika nun mati atau tanwin bertemu huruf ba’ (ب) disebut…",
        "options": [
          {
            "key": "A",
            "text": "Idhar"
          },
          {
            "key": "B",
            "text": "Ikhfa’"
          },
          {
            "key": "C",
            "text": "Idghom"
          },
          {
            "key": "D",
            "text": "Iklab"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 3,
        "text": "Jika nun mati bertemu dengan huruf kho (خ) disebut…",
        "options": [
          {
            "key": "A",
            "text": "Idhar halqi"
          },
          {
            "key": "B",
            "text": "Ikhfa’"
          },
          {
            "key": "C",
            "text": "Idghom"
          },
          {
            "key": "D",
            "text": "Iklab"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 4,
        "text": "Jika mim mati bertemu dengan huruf ba’ (ب) disebut…",
        "options": [
          {
            "key": "A",
            "text": "Ikhfa’"
          },
          {
            "key": "B",
            "text": "Idhar syafawi"
          },
          {
            "key": "C",
            "text": "Idghom"
          },
          {
            "key": "D",
            "text": "Ikhfa syafawi"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 5,
        "text": "Jika mim mati bertemu mim (م) disebut…",
        "options": [
          {
            "key": "A",
            "text": "Idghom mutamatsilain"
          },
          {
            "key": "B",
            "text": "Idghom mutaqoribain"
          },
          {
            "key": "C",
            "text": "Idghom mutajanisain"
          },
          {
            "key": "D",
            "text": "Idghom bila ghunah"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 6,
        "text": "Berikut ini hukum mim mati, kecuali…",
        "options": [
          {
            "key": "A",
            "text": "Ikhfa syafawi"
          },
          {
            "key": "B",
            "text": "Idhar syafawi"
          },
          {
            "key": "C",
            "text": "Idghom mutamatsilain"
          },
          {
            "key": "D",
            "text": "Idghom bila ghunah"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 7,
        "text": "Allah SWT memerintahkan untuk membaca Al-Qur’an dengan …",
        "options": [
          {
            "key": "A",
            "text": "Cepat"
          },
          {
            "key": "B",
            "text": "Lambat"
          },
          {
            "key": "C",
            "text": "Tartil"
          },
          {
            "key": "D",
            "text": "Dilagukan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Berikut ini termasuk huruf ikhfa’, yaitu….",
        "options": [
          {
            "key": "A",
            "text": "ا ج ل"
          },
          {
            "key": "B",
            "text": "ا ب ت"
          },
          {
            "key": "C",
            "text": "ش ص ض"
          },
          {
            "key": "D",
            "text": "م ص ض"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 9,
        "text": "Berikut ini yang termasuk huruf idghom maal ghunnah (bighunnah) adalah…",
        "options": [
          {
            "key": "A",
            "text": "Wau dan ya"
          },
          {
            "key": "B",
            "text": "Lam dan sin"
          },
          {
            "key": "C",
            "text": "Mim dan ba’"
          },
          {
            "key": "D",
            "text": "Wau dan jim"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 10,
        "text": "Berikut ini yang termasuk huruf ikhfa’ adalah…",
        "options": [
          {
            "key": "A",
            "text": "Wau dan kha"
          },
          {
            "key": "B",
            "text": "Lam dan jim"
          },
          {
            "key": "C",
            "text": "Fa dan qof"
          },
          {
            "key": "D",
            "text": "Wau dan sin"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 11,
        "text": "Berikut ini contoh alif lam qomariah, kecuali…",
        "options": [
          {
            "key": "A",
            "text": "الّرحمن"
          },
          {
            "key": "B",
            "text": "بالاركان"
          },
          {
            "key": "C",
            "text": "والارض"
          },
          {
            "key": "D",
            "text": "واليوم"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 12,
        "text": "Huruf syamsiyah di antaranya …",
        "options": [
          {
            "key": "A",
            "text": "ن ف ق ك"
          },
          {
            "key": "B",
            "text": "ا ب ج ح"
          },
          {
            "key": "C",
            "text": "ا ب ت ث"
          },
          {
            "key": "D",
            "text": "ص ر ز ش"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 13,
        "text": "Alif lam yang bertemu dengan ba’ (ب) dibaca…",
        "options": [
          {
            "key": "A",
            "text": "Jelas"
          },
          {
            "key": "B",
            "text": "Berdengung"
          },
          {
            "key": "C",
            "text": "Samar"
          },
          {
            "key": "D",
            "text": "Tidak dibaca"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 14,
        "text": "Alif lam yang bertemu dengan huruf nun (ن) dibaca…",
        "options": [
          {
            "key": "A",
            "text": "Jelas"
          },
          {
            "key": "B",
            "text": "Berdengung / Lebur (Idgham)"
          },
          {
            "key": "C",
            "text": "Samar"
          },
          {
            "key": "D",
            "text": "Tidak dibaca"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "text": "Berikut ini alif lam yang dibaca jelas (Al-Qomariyah) adalah…",
        "options": [
          {
            "key": "A",
            "text": "بالله"
          },
          {
            "key": "B",
            "text": "والّيل"
          },
          {
            "key": "C",
            "text": "واليوم"
          },
          {
            "key": "D",
            "text": "والّشمس"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 16,
        "text": "Berikut ini alif lam yang dibaca lebur/syamsiyah adalah…",
        "options": [
          {
            "key": "A",
            "text": "والّيل"
          },
          {
            "key": "B",
            "text": "واليوم"
          },
          {
            "key": "C",
            "text": "بالقلم"
          },
          {
            "key": "D",
            "text": "والاخرة"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 17,
        "text": "Kata syamsun (شَمْسٌ) artinya…",
        "options": [
          {
            "key": "A",
            "text": "Bintang"
          },
          {
            "key": "B",
            "text": "Bulan"
          },
          {
            "key": "C",
            "text": "Bumi"
          },
          {
            "key": "D",
            "text": "Matahari"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 18,
        "text": "Kata qomarun (قَمَرٌ) artinya…",
        "options": [
          {
            "key": "A",
            "text": "Bintang"
          },
          {
            "key": "B",
            "text": "Bulan"
          },
          {
            "key": "C",
            "text": "Bumi"
          },
          {
            "key": "D",
            "text": "Matahari"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "Lafadz مِنْهُمْ adalah contoh dari….",
        "options": [
          {
            "key": "A",
            "text": "Ikhfa’"
          },
          {
            "key": "B",
            "text": "Idghom"
          },
          {
            "key": "C",
            "text": "Idhar halqi"
          },
          {
            "key": "D",
            "text": "Iklab"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 20,
        "text": "Hukum nun sukun bertemu huruf ha (هـ) pada lafadz مِنْهُمْ dibaca secara jelas yang dinamakan….",
        "options": [
          {
            "key": "A",
            "text": "Ikhfa’"
          },
          {
            "key": "B",
            "text": "Idghom"
          },
          {
            "key": "C",
            "text": "Idhar halqi"
          },
          {
            "key": "D",
            "text": "Iklab"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Contoh bacaan idhar halqi adalah…",
        "options": [
          {
            "key": "A",
            "text": "ولكلٍ وّجهة"
          },
          {
            "key": "B",
            "text": "الخيرات"
          },
          {
            "key": "C",
            "text": "وجهةٌ هو"
          },
          {
            "key": "D",
            "text": "شيئٍ قدير"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "Ketika tanwin kasrah bertemu dengan qof (ق) pada kalimat شَيْءٍ قَدِيْرٌ harus dibaca…",
        "options": [
          {
            "key": "A",
            "text": "Idhar halqi"
          },
          {
            "key": "B",
            "text": "Iqlab"
          },
          {
            "key": "C",
            "text": "Idgom bighunah"
          },
          {
            "key": "D",
            "text": "Ikhfa’"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 23,
        "text": "Jumlah huruf al syamsiyah ada…",
        "options": [
          {
            "key": "A",
            "text": "12"
          },
          {
            "key": "B",
            "text": "13"
          },
          {
            "key": "C",
            "text": "14"
          },
          {
            "key": "D",
            "text": "15"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Berikut ini adalah contoh alif lam syamsiyah, kecuali…",
        "options": [
          {
            "key": "A",
            "text": "الّشيطين"
          },
          {
            "key": "B",
            "text": "الّسبيل"
          },
          {
            "key": "C",
            "text": "الّناس"
          },
          {
            "key": "D",
            "text": "المسكين"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 25,
        "text": "Berikut ini yang termasuk huruf idhar halqi adalah…",
        "options": [
          {
            "key": "A",
            "text": "Wau dan ya"
          },
          {
            "key": "B",
            "text": "Mim dan ba’"
          },
          {
            "key": "C",
            "text": "Ha’ dan kha"
          },
          {
            "key": "D",
            "text": "Wau dan jim"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 26,
        "text": "Jumlah ayat QS. Al-Fatihah terdiri dari....",
        "options": [
          {
            "key": "A",
            "text": "10"
          },
          {
            "key": "B",
            "text": "7"
          },
          {
            "key": "C",
            "text": "8"
          },
          {
            "key": "D",
            "text": "6"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 27,
        "text": "QS. Al-Fatihah memiliki arti...",
        "options": [
          {
            "key": "A",
            "text": "Pintu"
          },
          {
            "key": "B",
            "text": "Pembuka"
          },
          {
            "key": "C",
            "text": "Perjalanan"
          },
          {
            "key": "D",
            "text": "Perjuangan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 28,
        "text": "Bunyi ayat ke-5 QS. An-Nas yaitu....",
        "options": [
          {
            "key": "A",
            "text": "فَالْمُغِيْرٰتِ صُبْحًاۙ"
          },
          {
            "key": "B",
            "text": "فَاَثَرْنَ بِهٖ نَقْعًاۙ"
          },
          {
            "key": "C",
            "text": "بِاَنَّ رَبَّكَ اَوْحٰى لَهَاۗ"
          },
          {
            "key": "D",
            "text": "الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِۙ"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 29,
        "text": "Lanjutan ayat مِنْ شَرِّ الْوَسْوَاسِ .... yaitu....",
        "options": [
          {
            "key": "A",
            "text": "لِرَبِّهٖ لَكَنُوْدٌ"
          },
          {
            "key": "B",
            "text": "اَوْحٰى لَهَاۗ"
          },
          {
            "key": "C",
            "text": "الْخَنَّاسِۖ"
          },
          {
            "key": "D",
            "text": "يَّصْدُرُ النَّاسُ"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 30,
        "text": "Lanjutan ayat وَمِنْ شَرِّ النَّفّٰثٰتِ ... yaitu...",
        "options": [
          {
            "key": "A",
            "text": "فِى الْعُقَدِۙ"
          },
          {
            "key": "B",
            "text": "أَحَدٌ"
          },
          {
            "key": "C",
            "text": "فِيْ كَبَد"
          },
          {
            "key": "D",
            "text": "فِيْ تَضْلِيْلٍ"
          }
        ],
        "answerKey": "A"
      }
    ]
  },
  {
    "id": "exam-btq-viii",
    "code": "ASAS-BTQ-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Baca Tulis Qur’an (BTQ) Kelas VIII",
    "subject": "Baca Tulis Qur’an",
    "classLevel": "VIII",
    "scheduleText": "Selasa, 24 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 2,
    "dayLabel": "Hari Ke-2 • Selasa, 24 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Lafadz مِنْهُمْ adalah contoh dari….",
        "options": [
          {
            "key": "A",
            "text": "Ikhfa’"
          },
          {
            "key": "B",
            "text": "Idghom"
          },
          {
            "key": "C",
            "text": "Idhar halqi"
          },
          {
            "key": "D",
            "text": "Iklab"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Contoh bacaan idhar halqi adalah…",
        "options": [
          {
            "key": "A",
            "text": "ولكلٍ وّجهة"
          },
          {
            "key": "B",
            "text": "الخيرات"
          },
          {
            "key": "C",
            "text": "وجهةٌ هو"
          },
          {
            "key": "D",
            "text": "شيئٍ قدير"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "text": "Ketika tanwin kasrah bertemu dengan qof (ق) pada kalimat شَيْءٍ قَدِيْرٌ harus dibaca…",
        "options": [
          {
            "key": "A",
            "text": "Idhar halqi"
          },
          {
            "key": "B",
            "text": "Iqlab"
          },
          {
            "key": "C",
            "text": "Idgom bighunah"
          },
          {
            "key": "D",
            "text": "Ikhfa’"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 4,
        "text": "Jumlah huruf al syamsiyah ada…",
        "options": [
          {
            "key": "A",
            "text": "12"
          },
          {
            "key": "B",
            "text": "14"
          },
          {
            "key": "C",
            "text": "13"
          },
          {
            "key": "D",
            "text": "15"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "Berikut ini adalah contoh alif lam syamsiyah, kecuali…",
        "options": [
          {
            "key": "A",
            "text": "الّشيطين"
          },
          {
            "key": "B",
            "text": "الّناس"
          },
          {
            "key": "C",
            "text": "الّسبيل"
          },
          {
            "key": "D",
            "text": "المسكين"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 6,
        "text": "Berikut ini adalah contoh alif lam Qomariyah, kecuali…",
        "options": [
          {
            "key": "A",
            "text": "المال"
          },
          {
            "key": "B",
            "text": "المتقون"
          },
          {
            "key": "C",
            "text": "البأساء"
          },
          {
            "key": "D",
            "text": "النّبيين"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 7,
        "text": "Ketika alif lam bertemu dengan س (sin) disebut…..",
        "options": [
          {
            "key": "A",
            "text": "Alif lam jalalah"
          },
          {
            "key": "B",
            "text": "Alif lam syamsiyah"
          },
          {
            "key": "C",
            "text": "Alif lam qomariyah"
          },
          {
            "key": "D",
            "text": "Alif lam qosid"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "مِنْ لَدُنْكَ kata yang digarisbawahi adalah contoh dari bacaan…",
        "options": [
          {
            "key": "A",
            "text": "Idhar halqi dan iqlab"
          },
          {
            "key": "B",
            "text": "Idghom bighunnah dan idgom bila ghunnah"
          },
          {
            "key": "C",
            "text": "Idghom bila ghunnah dan ikhfa’ ab’ad"
          },
          {
            "key": "D",
            "text": "Ikhfa ab’ad dan idhar"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 9,
        "text": "Hukum mempelajari ilmu tajwid secara teori adalah…",
        "options": [
          {
            "key": "A",
            "text": "Sunnah muakad"
          },
          {
            "key": "B",
            "text": "Fardhu ‘ain"
          },
          {
            "key": "C",
            "text": "Fardhu kifayah"
          },
          {
            "key": "D",
            "text": "Makruh"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Hukum mempraktikkan ilmu tajwid saat membaca Al-Qur’an adalah …",
        "options": [
          {
            "key": "A",
            "text": "Sunnah muakad"
          },
          {
            "key": "B",
            "text": "Fardhu ‘ain"
          },
          {
            "key": "C",
            "text": "Fardhu kifayah"
          },
          {
            "key": "D",
            "text": "Makruh"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 11,
        "text": "Kita diperintahkan oleh Allah SWT membaca Al-Qur’an dengan …",
        "options": [
          {
            "key": "A",
            "text": "Suara merdu"
          },
          {
            "key": "B",
            "text": "Cepat"
          },
          {
            "key": "C",
            "text": "Tartil"
          },
          {
            "key": "D",
            "text": "Suara lantang"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "text": "زَيِّنُوا الْقُرْآنَ بِأَصْوَاتِكُمْ — Hendaklah kalian menghiasi Al-Qur’an dengan suara…",
        "options": [
          {
            "key": "A",
            "text": "Lantang"
          },
          {
            "key": "B",
            "text": "Merdu"
          },
          {
            "key": "C",
            "text": "Nyaring"
          },
          {
            "key": "D",
            "text": "Lemah lembut"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "وَرَتِّلِ الْقُرْآنَ تَرْتِيْلًا — Dan bacalah Al-Qur’an dengan …",
        "options": [
          {
            "key": "A",
            "text": "Khusyu’"
          },
          {
            "key": "B",
            "text": "Benar"
          },
          {
            "key": "C",
            "text": "Tartil"
          },
          {
            "key": "D",
            "text": "Keras"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "وَلَا أَنَا عَابِدٌ مَا عَبَدْتُّمْ — Pada kata yang digarisbawahi disebut bacaan….",
        "options": [
          {
            "key": "A",
            "text": "Idgom mutamatsilain"
          },
          {
            "key": "B",
            "text": "Idgom mutaqoribain"
          },
          {
            "key": "C",
            "text": "Idgom mutajanisain"
          },
          {
            "key": "D",
            "text": "Idgom bigunnah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "وَلَكُمْ مَّا سَأَلْتُمْ — Pada ayat yang digarisbawahi adalah bacaan….",
        "options": [
          {
            "key": "A",
            "text": "Idgom mutamatsilain"
          },
          {
            "key": "B",
            "text": "Idgom mutaqoribain"
          },
          {
            "key": "C",
            "text": "Idgom mutajanisain"
          },
          {
            "key": "D",
            "text": "Idgom bigunnah"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Asy-Syafatain (الشَّفَتَيْنِ) artinya adalah...",
        "options": [
          {
            "key": "A",
            "text": "Dua bibir"
          },
          {
            "key": "B",
            "text": "Dua kaki"
          },
          {
            "key": "C",
            "text": "Dua tangan"
          },
          {
            "key": "D",
            "text": "Dua telinga"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 17,
        "text": "لِيُحَآجُّوْكُمْ — Pada kata yang digarisbawahi adalah mad...",
        "options": [
          {
            "key": "A",
            "text": "Farqi"
          },
          {
            "key": "B",
            "text": "Badal"
          },
          {
            "key": "C",
            "text": "Tamkin"
          },
          {
            "key": "D",
            "text": "Lazim mutsaqqal kilmi"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 18,
        "text": "قُلْ ءٰٓالذَّكَرَيْنِ — adalah contoh bacaan mad…",
        "options": [
          {
            "key": "A",
            "text": "Farqi"
          },
          {
            "key": "B",
            "text": "Iwad"
          },
          {
            "key": "C",
            "text": "Tamkin"
          },
          {
            "key": "D",
            "text": "Badal"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Yang dimaksud dengan mad wajib muttashil adalah…",
        "options": [
          {
            "key": "A",
            "text": "Setelah huruf mad ada hamzah dalam satu kalimat (kata)"
          },
          {
            "key": "B",
            "text": "Setelah huruf mad ada hamzah dalam dua kalimat (kata)"
          },
          {
            "key": "C",
            "text": "Setelah huruf mad ada tasydid"
          },
          {
            "key": "D",
            "text": "Semua benar"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "Apabila nun mati bertemu ع (‘ain) disebut…",
        "options": [
          {
            "key": "A",
            "text": "Ikhfa ab’ad"
          },
          {
            "key": "B",
            "text": "Iklab"
          },
          {
            "key": "C",
            "text": "Idhar halqi"
          },
          {
            "key": "D",
            "text": "Mad"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Surat Adh-Dhuha adalah surat ke… dalam Al-Qur’an.",
        "options": [
          {
            "key": "A",
            "text": "90"
          },
          {
            "key": "B",
            "text": "91"
          },
          {
            "key": "C",
            "text": "92"
          },
          {
            "key": "D",
            "text": "93"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 22,
        "text": "Arti “Adh-Dhuha” adalah….",
        "options": [
          {
            "key": "A",
            "text": "Barang yang berguna"
          },
          {
            "key": "B",
            "text": "Nikmat yang banyak"
          },
          {
            "key": "C",
            "text": "Waktu Dhuha"
          },
          {
            "key": "D",
            "text": "Suku Quraisy"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "text": "Surat “Adh-Dhuha” terdiri dari ….",
        "options": [
          {
            "key": "A",
            "text": "8 ayat"
          },
          {
            "key": "B",
            "text": "9 ayat"
          },
          {
            "key": "C",
            "text": "10 ayat"
          },
          {
            "key": "D",
            "text": "11 ayat"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 24,
        "text": "Perhatikan ayat ini!\nمَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ\nAyat tersebut adalah bagian dari surat Adh-Dhuha ayat ke....",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 25,
        "text": "Ayat ke-4 dari surat Adh-Dhuha adalah …",
        "options": [
          {
            "key": "A",
            "text": "وَاللَّيْلِ إِذَا سَجَىٰ"
          },
          {
            "key": "B",
            "text": "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ"
          },
          {
            "key": "C",
            "text": "وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ"
          },
          {
            "key": "D",
            "text": "وَالضُّحَىٰ"
          }
        ],
        "answerKey": "C"
      }
    ]
  },
  {
    "id": "exam-btq-ix",
    "code": "ASAS-BTQ-IX",
    "title": "Asesmen Sumatif Akhir Semester — Baca Tulis Qur’an (BTQ) Kelas IX",
    "subject": "Baca Tulis Qur’an",
    "classLevel": "IX",
    "scheduleText": "Selasa, 24 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 2,
    "dayLabel": "Hari Ke-2 • Selasa, 24 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Lafadz مِنْهُمْ adalah contoh dari….",
        "options": [
          {
            "key": "A",
            "text": "Ikhfa’"
          },
          {
            "key": "B",
            "text": "Idghom"
          },
          {
            "key": "C",
            "text": "Idhar halqi"
          },
          {
            "key": "D",
            "text": "Iklab"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Contoh bacaan idhar halqi adalah…",
        "options": [
          {
            "key": "A",
            "text": "ولكلٍ وّجهة"
          },
          {
            "key": "B",
            "text": "الخيرات"
          },
          {
            "key": "C",
            "text": "وجهةٌ هو"
          },
          {
            "key": "D",
            "text": "شيئٍ قدير"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "text": "Ketika tanwin kasrah bertemu dengan qof (ق) pada kalimat شَيْءٍ قَدِيْرٌ harus dibaca…",
        "options": [
          {
            "key": "A",
            "text": "Idhar halqi"
          },
          {
            "key": "B",
            "text": "Iqlab"
          },
          {
            "key": "C",
            "text": "Idgom bighunah"
          },
          {
            "key": "D",
            "text": "Ikhfa’"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 4,
        "text": "Jumlah huruf alif lam syamsiyah ada…",
        "options": [
          {
            "key": "A",
            "text": "12"
          },
          {
            "key": "B",
            "text": "14"
          },
          {
            "key": "C",
            "text": "13"
          },
          {
            "key": "D",
            "text": "15"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "Berikut ini adalah contoh alif lam syamsiyah, kecuali…",
        "options": [
          {
            "key": "A",
            "text": "الّشيطين"
          },
          {
            "key": "B",
            "text": "الّناس"
          },
          {
            "key": "C",
            "text": "الّسبيل"
          },
          {
            "key": "D",
            "text": "المسكين"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 6,
        "text": "Berikut ini adalah contoh alif lam Qomariyah, kecuali…",
        "options": [
          {
            "key": "A",
            "text": "المال"
          },
          {
            "key": "B",
            "text": "المتقون"
          },
          {
            "key": "C",
            "text": "البأساء"
          },
          {
            "key": "D",
            "text": "النّبيين"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 7,
        "text": "Ketika alif lam bertemu dengan huruf س (sin) disebut…..",
        "options": [
          {
            "key": "A",
            "text": "Alif lam jalalah"
          },
          {
            "key": "B",
            "text": "Alif lam syamsiyah"
          },
          {
            "key": "C",
            "text": "Alif lam qomariyah"
          },
          {
            "key": "D",
            "text": "Alif lam qosid"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "مِنْ لَدُنْكَ — Hukum nun mati pada kata tersebut adalah contoh dari bacaan…",
        "options": [
          {
            "key": "A",
            "text": "Idhar halqi dan iqlab"
          },
          {
            "key": "B",
            "text": "Idghom bighunnah dan idgom bila ghunnah"
          },
          {
            "key": "C",
            "text": "Idghom bila ghunnah dan ikhfa’ ab’ad"
          },
          {
            "key": "D",
            "text": "Ikhfa ab’ad dan idhar"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 9,
        "text": "Hukum mempelajari ilmu tajwid secara teori adalah…",
        "options": [
          {
            "key": "A",
            "text": "Sunnah muakad"
          },
          {
            "key": "B",
            "text": "Fardhu ‘ain"
          },
          {
            "key": "C",
            "text": "Fardhu kifayah"
          },
          {
            "key": "D",
            "text": "Makruh"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Hukum mempraktikkan ilmu tajwid ketika membaca Al-Qur’an adalah …",
        "options": [
          {
            "key": "A",
            "text": "Sunnah muakad"
          },
          {
            "key": "B",
            "text": "Fardhu ‘ain"
          },
          {
            "key": "C",
            "text": "Fardhu kifayah"
          },
          {
            "key": "D",
            "text": "Makruh"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 11,
        "text": "Kita diperintahkan oleh Allah SWT membaca Al-Qur’an dengan …",
        "options": [
          {
            "key": "A",
            "text": "Suara merdu"
          },
          {
            "key": "B",
            "text": "Cepat"
          },
          {
            "key": "C",
            "text": "Tartil"
          },
          {
            "key": "D",
            "text": "Suara lantang"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "text": "زَيِّنُوا الْقُرْآنَ بِأَصْوَاتِكُمْ — Hendaklah kalian menghiasi Al-Qur’an dengan suara…",
        "options": [
          {
            "key": "A",
            "text": "Lantang"
          },
          {
            "key": "B",
            "text": "Merdu"
          },
          {
            "key": "C",
            "text": "Nyaring"
          },
          {
            "key": "D",
            "text": "Lemah lembut"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "وَرَتِّلِ الْقُرْآنَ تَرْتِيْلًا — Dan bacalah Al-Qur’an dengan …",
        "options": [
          {
            "key": "A",
            "text": "Khusyu’"
          },
          {
            "key": "B",
            "text": "Benar"
          },
          {
            "key": "C",
            "text": "Tartil"
          },
          {
            "key": "D",
            "text": "Keras"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "وَلَا أَنَا عَابِدٌ مَا عَبَدْتُّمْ — Pertemuan huruf dal sukun (دْ) dengan ta (ت) pada kata عَبَدْتُّمْ disebut bacaan….",
        "options": [
          {
            "key": "A",
            "text": "Idgom mutamatsilain"
          },
          {
            "key": "B",
            "text": "Idgom mutaqoribain"
          },
          {
            "key": "C",
            "text": "Idgom mutajanisain"
          },
          {
            "key": "D",
            "text": "Idgom bigunnah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "وَلَكُمْ مَّا سَأَلْتُمْ — Pertemuan mim sukun (مْ) dengan mim (م) adalah bacaan….",
        "options": [
          {
            "key": "A",
            "text": "Idgom mutamatsilain"
          },
          {
            "key": "B",
            "text": "Idgom mutaqoribain"
          },
          {
            "key": "C",
            "text": "Idgom mutajanisain"
          },
          {
            "key": "D",
            "text": "Idgom bigunnah"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Asy-Syafatain (الشَّفَتَيْنِ) artinya adalah...",
        "options": [
          {
            "key": "A",
            "text": "Dua bibir"
          },
          {
            "key": "B",
            "text": "Dua kaki"
          },
          {
            "key": "C",
            "text": "Dua tangan"
          },
          {
            "key": "D",
            "text": "Dua telinga"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 17,
        "text": "لِيُحَآجُّوْكُمْ — Pada kata tersebut terdapat hukum bacaan mad...",
        "options": [
          {
            "key": "A",
            "text": "Farqi"
          },
          {
            "key": "B",
            "text": "Badal"
          },
          {
            "key": "C",
            "text": "Tamkin"
          },
          {
            "key": "D",
            "text": "Lazim mutsaqqal kilmi"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 18,
        "text": "قُلْ ءٰٓالذَّكَرَيْنِ — adalah contoh bacaan mad…",
        "options": [
          {
            "key": "A",
            "text": "Farqi"
          },
          {
            "key": "B",
            "text": "Iwad"
          },
          {
            "key": "C",
            "text": "Tamkin"
          },
          {
            "key": "D",
            "text": "Badal"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Yang dimaksud dengan mad wajib muttashil adalah…",
        "options": [
          {
            "key": "A",
            "text": "Setelah huruf mad ada hamzah dalam satu kalimat (kata)"
          },
          {
            "key": "B",
            "text": "Setelah huruf mad ada hamzah dalam dua kalimat"
          },
          {
            "key": "C",
            "text": "Setelah huruf mad ada tasydid"
          },
          {
            "key": "D",
            "text": "Semua benar"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "Apabila nun mati bertemu ع (‘ain) disebut…",
        "options": [
          {
            "key": "A",
            "text": "Ikhfa ab’ad"
          },
          {
            "key": "B",
            "text": "Iklab"
          },
          {
            "key": "C",
            "text": "Idhar halqi"
          },
          {
            "key": "D",
            "text": "Mad"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Azkia membaca Al-Qur’an surat Al-Infithar sesuai dengan tajwidnya. Sampai kepada ayat yang berbunyi يَعْلَمُونَ مَا تَفْعَلُونَ. Ayat tersebut termasuk ayat yang ke ...",
        "options": [
          {
            "key": "A",
            "text": "10"
          },
          {
            "key": "B",
            "text": "11"
          },
          {
            "key": "C",
            "text": "12"
          },
          {
            "key": "D",
            "text": "13"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "يَوْمَىِٕذٍ تُحَدِّثُ أَخْبَارَهَا — Ayat tersebut merupakan QS. Az-Zalzalah ayat ke....",
        "options": [
          {
            "key": "A",
            "text": "3"
          },
          {
            "key": "B",
            "text": "4"
          },
          {
            "key": "C",
            "text": "6"
          },
          {
            "key": "D",
            "text": "7"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "text": "يَوْمَىِٕذٍ يَّصْدُرُ النَّاسُ .... لِّيُرَوْا اَعْمَالَهُمْۗ — Lafadz untuk melengkapi potongan ayat tersebut yaitu....",
        "options": [
          {
            "key": "A",
            "text": "عَلَيْهِمْ"
          },
          {
            "key": "B",
            "text": "يَجْعَلْ"
          },
          {
            "key": "C",
            "text": "اَشْتَاتًا"
          },
          {
            "key": "D",
            "text": "اَوْحٰى"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Bunyi ayat ke-7 surat Az-Zalzalah yaitu....",
        "options": [
          {
            "key": "A",
            "text": "بِاَنَّ رَبَّكَ اَوْحٰى لَهَاۗ"
          },
          {
            "key": "B",
            "text": "نَارُ اللّٰهِ الْمُوْقَدَةُۙ"
          },
          {
            "key": "C",
            "text": "وَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَّرَهٗ"
          },
          {
            "key": "D",
            "text": "فَمَنْ يَّعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَّرَهٗ"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 25,
        "text": "وَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ — Ayat tersebut tercantum dalam QS. Az-Zalzalah ayat ke....",
        "options": [
          {
            "key": "A",
            "text": "5"
          },
          {
            "key": "B",
            "text": "6"
          },
          {
            "key": "C",
            "text": "8"
          },
          {
            "key": "D",
            "text": "9"
          }
        ],
        "answerKey": "C"
      }
    ]
  },
  {
    "id": "exam-bindo-vii",
    "code": "ASAS-BINDO-VII",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Indonesia Kelas VII",
    "subject": "Bahasa Indonesia",
    "classLevel": "VII",
    "scheduleText": "Senin, 23 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 1,
    "dayLabel": "Hari Ke-1 • Senin, 23 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Bacalah teks berikut untuk menjawab soal no 1 - 5!\nHEWAN- HEWAN YANG TERANCAM PUNAH\nMasalah besar yang mengancam kepunahan hewan adalah karena berkurangnya habitat untuk tempat hidup mereka dan karena ulah manusia. Punahnya hewan dapat terjadi secara alami, seperti perubahan iklim, pasokan makanan yang menipis, atau adanya persaingan dengan jenis hewan lain yang menempati habitat sama dan pola makan yang sama pula.\nKepunahan hewan karena ulah manusia, banyak disebabkan karena hewan-hewan tersebut diburu untuk dimanfaatkan. Hewan-hewan yang diburu diantaranya Harimau, Gajah, dan Badak bercula satu. Contoh bagian hewan yang dimanfaatkan tersebut adalah Harimau yang diambil kulitnya, bahkan ada bagian tubuh lainnya seperti tulang yang dijadikan bahan obat-obatan tradisional. Gajah diambil gadingnya untuk hiasan, dan badak diambil culanya.\nSelain Harimau, Badak, dan Gajah, ada pula hewan-hewan yang lain saat ini terancam punah, seperti buruk Auk, burung Dodo, Panda, burung Elang, Beruang kutub, ikan Paus, ular Boa, dan lain- lain.\nBurung Auk terancam punah karena diburu oleh manusia untuk dimakan, minyaknya diolah, dan bulunya dijadikan bahan pengisi kasur. Burung Dodo hidup di Mauritis, punah karena ditangkap oleh para pelaut untuk dimakan.\nTerancam punahnya Elang karena korban pestisida. Burung Elang menghasilkan telur yang tidak sempurna karena akumulasi pestisida dalam tubuhnya. Pestisida mengakibatkan tipisnya kulit telur sehingga mudah pecah.\nPanda terancam punah karena makanannya sangat terbatas yaitu hanya pohon bambu. Jika populasi pohon bambu berkurang, maka akan mengancam kepunahan Panda.\n\nHewan-hewan yang terancam punah diantaranya……",
        "options": [
          {
            "key": "A",
            "text": "Burung Auk, burung Dodo, Panda, burung Elang, ikan Paus dan burung Auk"
          },
          {
            "key": "B",
            "text": "Gajah, burung Elang, Harimau dan Panda"
          },
          {
            "key": "C",
            "text": "Harimau, Macan tutul, burung Elang, ikan Paus dan Burung Auk"
          },
          {
            "key": "D",
            "text": "Panda, Orang utan, burung Dodo dan Beruang kutub"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 2,
        "text": "Banyak hewan diburu dan dimanfaatkan oleh manusia, hewan-hewan tersebut diantaranya…",
        "options": [
          {
            "key": "A",
            "text": "Musang, Macan tutul, dan Beruang kutub"
          },
          {
            "key": "B",
            "text": "Ular, Serigala, dan Ikan Paus"
          },
          {
            "key": "C",
            "text": "Harimau, Gajah, dan Badak bercula satu"
          },
          {
            "key": "D",
            "text": "Elang, Ular, dan Beruang kutub"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "text": "Kalimat topik dalam teks deskripsi tersebut adalah……",
        "options": [
          {
            "key": "A",
            "text": "Kepunahan hewan karena ulah manusia"
          },
          {
            "key": "B",
            "text": "Masalah besar yang mengancam kepunahan hewan adalah karena berkurangnya habitat untuk tempat hidup mereka dan karena ulah manusia"
          },
          {
            "key": "C",
            "text": "Punahnya hewan dapat terjadi karena perubahan iklim, dan pasokan makanan yang menipis"
          },
          {
            "key": "D",
            "text": "Hewan jenis lain yang memiliki habitat sama dan jenis makan yang sama juga"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "Berikut pernyataan yang benar tentang hewan-hewan yang terancam punah adalah……….",
        "options": [
          {
            "key": "A",
            "text": "Punahnya hewan dapat terjadi"
          },
          {
            "key": "B",
            "text": "Hewan yang habitatnya sama"
          },
          {
            "key": "C",
            "text": "Kepunahan hewan karena ulah manusia"
          },
          {
            "key": "D",
            "text": "Banyak hewan yang dimanfaatkan manusia"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Berikut tanggapan yang tidak sesuai dengan teks tersebut adalah……..",
        "options": [
          {
            "key": "A",
            "text": "Teks lebih banyak membahas kepunahan hewan daripada pencegahan"
          },
          {
            "key": "B",
            "text": "Teks menjelaskan alasan hewan yang terancam punah"
          },
          {
            "key": "C",
            "text": "Judul teks tersebut kurang menggambarkan isinya secara keseluruhan"
          },
          {
            "key": "D",
            "text": "Hewan terancam punah terjadi secara alami"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 6,
        "text": "Bacalah teks berikut untuk menjawab soal nomor 6-10!\nOBJEK WISATA PANTAI ANYER\nPantai Anyer adalah salah satu pantai di provinsi Banten yang paling banyak dikunjungi wisatawan, baik itu wisatawan lokal, maupun wisatawan mancanegara. Pantai indah dengan pasir putih yang memesona yang menjadikan pantai ini salah satu pantai favorit.\nPantai Anyer berlokasi di Kecamatan Anyer, Kabupaten Serang, Provinsi Banten. Jadi sebenarnya nama Anyer itu diambil dari salah satu kecamatan yang berada di kabupaten Serang, Banten. Mengapa nama Anyer ini diambil? sebab kecamatan Anyer sebagian besar daerahnya berada di bibir pantai. Anda akan menikmati pemandangan pantai sepanjang jalan raya sampai perbatasan antara Anyer dengan Carita. Namun pantai Anyer dan pantai Carita sangat dikenal oleh wisatawan karena pesona keindahan alamnya.\nBerbagai aktivitas yang dapat dilakukan di pantai Anyer adalah berenang di pantai, bermain Water spot membuat istana pasir, snorkeling, berselancar (surfing), menikmati matahari terbit (sunrise) dan matahari terbenam (sunset). Kita pun dapat mengabadikan momen indah bersama dengan berfoto ria bersama teman dan keluarga.\nTidak lengkap rasanya jika menikmati keindahan pantai Anyer hanya sebentar atau satu hari saja. Anda bisa menginap di hotel atau villa, juga homestay yang ada di kawasan pantai Anyer. Banyak orang memilih pantai Anyer sebagai tujuan wisata. Pantai Anyer menjadi primadona karena lokasinya yang mudah dijangkau dan dekat dengan Ibukota Jakarta. Fasilitas yang tersedia di pantai Anyer pun sangat lengkap.\n\nKalimat yang mengandung makna implisit dalam teks deskripsi “Objek wisata pantai Anyer” adalah……",
        "options": [
          {
            "key": "A",
            "text": "Anyer sebagian besar daerahnya berada di bibir pantai"
          },
          {
            "key": "B",
            "text": "Pantai Anyer berlokasi di Anyer"
          },
          {
            "key": "C",
            "text": "Pantai Anyer adalah salah satu pantai yang berada di provinsi Banten"
          },
          {
            "key": "D",
            "text": "Pantai indah dengan pasir putih yang memesona yang menjadikan pantai menjadi salah satu pantai favorit"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 7,
        "text": "Kalimat pesan tentang kelestarian alam pada teks deskripsi tersebut ada pada……….",
        "options": [
          {
            "key": "A",
            "text": "1-5"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 8,
        "text": "Pernyataan yang benar sesuai dengan informasi pada bagian deskripsi teks adalah……….",
        "options": [
          {
            "key": "A",
            "text": "Pantai Anyer berlokasi di kecamatan Anyer, kabupaten Serang, provinsi Banten"
          },
          {
            "key": "B",
            "text": "Berbagai aktivitas yang dilakukan di Anyer"
          },
          {
            "key": "C",
            "text": "Mengapa nama Anyer dipakai untuk nama pantai?"
          },
          {
            "key": "D",
            "text": "Pantai Anyer dan pantai Carita sangat dikenal"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 9,
        "text": "Pernyataan yang tepat tentang struktur teks deskripsi tersebut adalah……..",
        "options": [
          {
            "key": "A",
            "text": "Hal yang di deskripsikan meliputi letak geografis dan kontur alam"
          },
          {
            "key": "B",
            "text": "Yang di deskripsikan meliputi letak geografis"
          },
          {
            "key": "C",
            "text": "Hal yang di deskripsikan meliputi potensi wisata"
          },
          {
            "key": "D",
            "text": "Kalimat topik ada pada paragraf pertama"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "Makna implisit kalimat ekspresif “Objek wisata pantai Anyer “ pantai indah dengan pasir putih yang memesona adalah…….",
        "options": [
          {
            "key": "A",
            "text": "Pasir putih yang memesona yang menjadikan pantai favorit"
          },
          {
            "key": "B",
            "text": "Pantai Anyer adalah salah satu pantai di provinsi Banten yang paling banyak dikunjungi oleh wisatawan lokal maupun mancanegara"
          },
          {
            "key": "C",
            "text": "Pantai Anyer berada di kecamatan Anyer"
          },
          {
            "key": "D",
            "text": "Pantai Anyer sangat dikenal oleh wisatawan karena keindahan alamnya"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 11,
        "text": "Susunan struktur cerita dongeng adalah…………",
        "options": [
          {
            "key": "A",
            "text": "Orientasi, resolusi, komplikasi dan klimaks"
          },
          {
            "key": "B",
            "text": "Orientasi, komplikasi, klimaks, dan resolusi"
          },
          {
            "key": "C",
            "text": "Resolusi, alur, koda dan orientasi"
          },
          {
            "key": "D",
            "text": "Komplikasi, resolusi, alur dan koda"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Perhatiakan kalimat berikut!\nArbi malu melihat badan Pavo yang indah itu\nKata kerja pada kalimat tersebut adalah……..",
        "options": [
          {
            "key": "A",
            "text": "Malu"
          },
          {
            "key": "B",
            "text": "Melihat"
          },
          {
            "key": "C",
            "text": "Badan"
          },
          {
            "key": "D",
            "text": "Indah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Yang termasuk kedalam kata kerja transitif adalah…….",
        "options": [
          {
            "key": "A",
            "text": "Menyanyi dan menari"
          },
          {
            "key": "B",
            "text": "Menyaksikan dan menyanyi"
          },
          {
            "key": "C",
            "text": "Melihat dan menari"
          },
          {
            "key": "D",
            "text": "Melihat dan menyaksikan"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 14,
        "text": "Bacalah cuplikan dongeng berikut!\nAku adalah kuda laut. aku dan teman-temanku dapat ditemukan diperairan tropis dan subtropis.\nKami tinggal disepanjang pantai di antara ganggang dan tumbuhan laut lainnya.”\nCuplikan cerita dongeng tersebut termasuk kedalam struktur……….",
        "options": [
          {
            "key": "A",
            "text": "Klimaks"
          },
          {
            "key": "B",
            "text": "Orientasi"
          },
          {
            "key": "C",
            "text": "Komplikasi"
          },
          {
            "key": "D",
            "text": "Resolusi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 15,
        "text": "Latar tempat pada cerita tersebut adalah……..",
        "options": [
          {
            "key": "A",
            "text": "Rumah"
          },
          {
            "key": "B",
            "text": "Kebun"
          },
          {
            "key": "C",
            "text": "Laut"
          },
          {
            "key": "D",
            "text": "Danau"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 16,
        "text": "Keterangan waktu, ruang, dan suasana yang terjadi pada cerita disebut……….",
        "options": [
          {
            "key": "A",
            "text": "Peristiwa"
          },
          {
            "key": "B",
            "text": "Latar"
          },
          {
            "key": "C",
            "text": "Alur"
          },
          {
            "key": "D",
            "text": "Tokoh"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Pokok pikiran dari keseluruhan isi cerita disebut……….",
        "options": [
          {
            "key": "A",
            "text": "Tema"
          },
          {
            "key": "B",
            "text": "Amanat"
          },
          {
            "key": "C",
            "text": "Tokoh"
          },
          {
            "key": "D",
            "text": "Latar"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Perhatikan pantun berikut untuk menjawab soal nomor 18 dan 19\nKemarikan coklat di pintu\nKita sekat dan kerat-kerat Dirikan sholat setiap waktu Agar selamat dunia akhirat\nPola pengembangan pantun tersebut adalah………….",
        "options": [
          {
            "key": "A",
            "text": "aaaa"
          },
          {
            "key": "B",
            "text": "abab"
          },
          {
            "key": "C",
            "text": "abcd"
          },
          {
            "key": "D",
            "text": "abbb"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "Baris pertama dan kedua pada pantun tersebut adalah……..",
        "options": [
          {
            "key": "A",
            "text": "Isi"
          },
          {
            "key": "B",
            "text": "Sampiran"
          },
          {
            "key": "C",
            "text": "Masalah"
          },
          {
            "key": "D",
            "text": "Jawaban"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 20,
        "text": "Amanat yang terkandung dalam pantun tersebut adalah……………..",
        "options": [
          {
            "key": "A",
            "text": "Jangan lupa beribadah"
          },
          {
            "key": "B",
            "text": "Jangan lupa bersilaturahmi"
          },
          {
            "key": "C",
            "text": "Selalu berbudi pekerti yang baik"
          },
          {
            "key": "D",
            "text": "Jangan lupa dirikan sholat"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 21,
        "text": "Perhatikan pantun berikut\nTunduk menangis segala putri\nMasing-masing berkata pada sendiri Jahatnya perangai permaisuri Lakonnya seperti Jin dan Peri\nTunduk menangis segala putri\nMasing-masing berkata pada sendiri Jahatnya perangai permaisuri Lakonnya seperti Jin dan Peri\nPuisi rakyat diatas disebut……….",
        "options": [
          {
            "key": "A",
            "text": "Pantun"
          },
          {
            "key": "B",
            "text": "Karmina"
          },
          {
            "key": "C",
            "text": "Syair"
          },
          {
            "key": "D",
            "text": "Talibun"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "Perhatikan puisi rakyat berikut untuk menjawab soal nomor 22 dan 23\nTemukan apa yang dimaksud sahabat\nTemukan apa yang dimaksud maksiat Janganlah menjadi orang yang memelas Nanti kamu menjadi orang yang malas\nAmanat pada puisi rakyat diatas adalah………",
        "options": [
          {
            "key": "A",
            "text": "Pandai mencari teman dan harus bersikap baik"
          },
          {
            "key": "B",
            "text": "Harus memilih teman, dan bersikap memelas"
          },
          {
            "key": "C",
            "text": "Tidak boleh pilih-pilih teman, dan harus rajin"
          },
          {
            "key": "D",
            "text": "Mencari makna persahabatan, dan harus bersikap rajin"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 23,
        "text": "Puisi rakyat tersebut merupakan……….",
        "options": [
          {
            "key": "A",
            "text": "Pantun"
          },
          {
            "key": "B",
            "text": "Karmina"
          },
          {
            "key": "C",
            "text": "Syair"
          },
          {
            "key": "D",
            "text": "Talibun"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Perhatikan larik pantun berikut\nDari mana dan mau kemana\n……………………………\n…………………………… Namamu siapa cantik?\nLarik yang tepat untuk pantun yang rumpang adalah ….",
        "options": [
          {
            "key": "A",
            "text": "Jari tanganmu lentik"
          },
          {
            "key": "B",
            "text": "Kalau boleh aku bertanya"
          },
          {
            "key": "C",
            "text": "Dari Bandung ke bandar Cina"
          },
          {
            "key": "D",
            "text": "Kalau boleh aku melirik"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 25,
        "text": "Kalau boleh aku bertanya    Melihat wanita cantik\nJari tanganmu lentikAku pergi membeli penitik\n\nPernyataan manakah yang termasuk syarat pantun……….",
        "options": [
          {
            "key": "A",
            "text": "Larik ke-1 dan ke-2 adalah isi"
          },
          {
            "key": "B",
            "text": "Larik ke-1 dan ke-2 adalah sampiran"
          },
          {
            "key": "C",
            "text": "Larik ke-3 dan ke-4 adalah sampiran"
          },
          {
            "key": "D",
            "text": "Larik ke-3 dan ke-4 adalah isi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 26,
        "text": "Salah satu ciri umum puisi rakyat atau pantun adalah…………….",
        "options": [
          {
            "key": "A",
            "text": "Puisi kerakyatan yang biasanya tidak dikenal siapa pengarangnya atau anonym"
          },
          {
            "key": "B",
            "text": "Pantun mempunyai ciri-ciri A-B-A-B"
          },
          {
            "key": "C",
            "text": "Pada baris ke-1 dan ke-2 berisi sampiran"
          },
          {
            "key": "D",
            "text": "Setiap baris memiliki makna"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 27,
        "text": "Pantun, syair dan gurindam termasuk kedalam……….",
        "options": [
          {
            "key": "A",
            "text": "Dongeng"
          },
          {
            "key": "B",
            "text": "Legenda"
          },
          {
            "key": "C",
            "text": "Parabel"
          },
          {
            "key": "D",
            "text": "Puisi rakyat"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 28,
        "text": "Gurindam memiliki ciri-ciri sebagai berikut, salah satunya…………",
        "options": [
          {
            "key": "A",
            "text": "Baris pertama dan kedua merupakan isi"
          },
          {
            "key": "B",
            "text": "Setiap baris memiliki hubungan sebab akibat"
          },
          {
            "key": "C",
            "text": "Bersajak A-A-A-A"
          },
          {
            "key": "D",
            "text": "Setiap bait terdiri dari empat baris"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 29,
        "text": "Bunyi persajakan dalam pantun disebut……….",
        "options": [
          {
            "key": "A",
            "text": "Baris"
          },
          {
            "key": "B",
            "text": "Larik"
          },
          {
            "key": "C",
            "text": "Audio"
          },
          {
            "key": "D",
            "text": "Rima"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 30,
        "text": "Makna pantun berasal dari bahasa Minangkabau, yaitu………..",
        "options": [
          {
            "key": "A",
            "text": "Patuntun"
          },
          {
            "key": "B",
            "text": "Parikan"
          },
          {
            "key": "C",
            "text": "Paparikan"
          },
          {
            "key": "D",
            "text": "Umpasa"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 31,
        "text": "Contoh teks prosedur yang sering ditemui dalam kehidupan sehari-hari adalah………….",
        "options": [
          {
            "key": "A",
            "text": "Tulisan “Jangan digancu” yang biasa terdapat pada dus elektronik"
          },
          {
            "key": "B",
            "text": "Petunjuk cara membuat mie instan yang terdapat dibalik kemasan mie instan"
          },
          {
            "key": "C",
            "text": "Bahan membuat sabun yang biasa disebutkan dibalik kemasan sabun"
          },
          {
            "key": "D",
            "text": "Panduan menanam tabulam pot anggur bagi pemula"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 32,
        "text": "Bagian yang membuat beragam perlengkapan atau alat serta bahan dalam teks prosedur adalah……",
        "options": [
          {
            "key": "A",
            "text": "Alat"
          },
          {
            "key": "B",
            "text": "Bahan"
          },
          {
            "key": "C",
            "text": "Judul"
          },
          {
            "key": "D",
            "text": "Cara membuat"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 33,
        "text": "Manakah dibawah ini yang termasuk alat dalam teks prosedur……..",
        "options": [
          {
            "key": "A",
            "text": "Wajan"
          },
          {
            "key": "B",
            "text": "Nasi"
          },
          {
            "key": "C",
            "text": "Spatula"
          },
          {
            "key": "D",
            "text": "Bumbu nasi goreng"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 34,
        "text": "Bacalah kutipan teks prosedur berikut\nBahan: Rimpang kencur sebesar ibu jari, garam secukupnya\nCara membuat: Kencur diparut, tambahkan secangkir air hangat\nLalu peras dan saring\nCara menggunakan : Diamkan kencur yang sudah disaring sampai mengendap di dalam gelas, beri\ngaram secukupnya, kemudian di minum.\nBahan: Rimpang kencur sebesar ibu jari, garam secukupnya\nCara membuat: Kencur diparut, tambahkan secangkir air hangat\nLalu peras dan saring\nCara menggunakan : Diamkan kencur yang sudah disaring sampai mengendap di dalam gelas, beri\ngaram secukupnya, kemudian di minum.\nKata yang menunjukkan urutan kegiatan adalah……….",
        "options": [
          {
            "key": "A",
            "text": "Kemudian"
          },
          {
            "key": "B",
            "text": "Tambahkan"
          },
          {
            "key": "C",
            "text": "Lalu peras"
          },
          {
            "key": "D",
            "text": "Secangkir air"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 35,
        "text": "Berikut yang termasuk judul bacaan teks prosedur adalah…………….",
        "options": [
          {
            "key": "A",
            "text": "Cara mengurus SIM"
          },
          {
            "key": "B",
            "text": "Cara mengurus ATM"
          },
          {
            "key": "C",
            "text": "Keindahan pantai Carita"
          },
          {
            "key": "D",
            "text": "Dampak makanan berwarna"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 36,
        "text": "Berikut ini merupakan ciri teks prosedur dari segi isinya……….",
        "options": [
          {
            "key": "A",
            "text": "Merupakan teks berisi gambaran objek"
          },
          {
            "key": "B",
            "text": "Berisi petunjuk yang tidak harus urut"
          },
          {
            "key": "C",
            "text": "Merupakan panduan langkah-langkah yang harus dilakukan"
          },
          {
            "key": "D",
            "text": "Isi kegiatan dilakukan secara urut"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 37,
        "text": "Dibawah ini manakah kalimat yang termasuk kedalam kalimat larangan……….",
        "options": [
          {
            "key": "A",
            "text": "Bungkuslah tanah dengan sabut"
          },
          {
            "key": "B",
            "text": "Tutuplah batang yang sudah dikuliti"
          },
          {
            "key": "C",
            "text": "Janganlah menggunakan api terlalu besar"
          },
          {
            "key": "D",
            "text": "Tidaklah memotong terlalu besar"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 38,
        "text": "Di bawah ini manakah langkah-langkah untuk membuat tabulampot anggur……….",
        "options": [
          {
            "key": "A",
            "text": "Siapkan media yang telah di isi air"
          },
          {
            "key": "B",
            "text": "Tanamlah bibit jambu tepat di tengah pot"
          },
          {
            "key": "C",
            "text": "Tanamlah bibit anggur tepat di tengah pot"
          },
          {
            "key": "D",
            "text": "Tancapkan satu tiang dari bambu, kayu atau semisalnya sebagai rambatan sementara"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 39,
        "text": "Judul berikut yang sesuai untuk teks prosedur menggunakan sesuatu adalah………",
        "options": [
          {
            "key": "A",
            "text": "Cara memasak nasi goreng sederhana"
          },
          {
            "key": "B",
            "text": "Cara memakai mesin jahit elektrik"
          },
          {
            "key": "C",
            "text": "Cara menggunakan komputer"
          },
          {
            "key": "D",
            "text": "Cara membuat wedang jahe"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 40,
        "text": "Perhatikan bagian teks prosedur berikut!\n(1).Tepung beras\n(2).Santan\n(3).Oven\n(4).Cetakan\nDari yang disebutkan diatas, yang termasuk jenis “Alat” adalah………..",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "A"
      }
    ]
  },
  {
    "id": "exam-bindo-viii",
    "code": "ASAS-BINDO-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Indonesia Kelas VIII",
    "subject": "Bahasa Indonesia",
    "classLevel": "VIII",
    "scheduleText": "Senin, 23 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 1,
    "dayLabel": "Hari Ke-1 • Senin, 23 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Cermati kutipan teks berita berikut.\nTeks Berita 1\nMenjelang akhir tahun dan menyambut tahun baru, Kapolres Bogor meminta pengguna kendaraan untuk tidak melalui jalur Puncak. Pengguna kendaraan diminta mencari jalan alternatif. Hal itu untuk menghindari kemacetan di jalur Puncak.\nTeks Berita 2\nKapolres Bogor meminta pengguna kendaraan dari wilayah Jabodetabek yang menuju kota Bandung dan sekitarnya tidak melalui jalur Puncak. Para pengguna kendaraan diminta melalui tol Cipularang atau lewat jalur Sukabumi.\nKesamaan informasi kedua teks tersebut adalah ….",
        "options": [
          {
            "key": "A",
            "text": "Rencana pemberlakuan satu jalur di Puncak menjelang tahun baru"
          },
          {
            "key": "B",
            "text": "Pengguna kendaraan diminta tidak melewati jalur Puncak"
          },
          {
            "key": "C",
            "text": "Pengalihan tujuan pengguna kendaraan yang menuju Bandung"
          },
          {
            "key": "D",
            "text": "Padatnya pengguna kendaraan dan rencana pengalihan pada akhir tahun"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Sekitar 7.000 hektar hutan mangrove hancur di kawasan Tanjung Lesung, Kabupaten Pandeglang, Banten. Kasus itu terjadi sejak tahun 1984 sehingga menghancurkan berbagai biota laut dan tempat pemijahan puluhan jenis ikan. Bahkan, kondisi tersebut ikut mengancam ekosistem perairan selatan Banten dan kepunahan hutan mangrove.\nTeks berita tersebut diawali dengan menggunakan  unsur ....",
        "options": [
          {
            "key": "A",
            "text": "Apa"
          },
          {
            "key": "B",
            "text": "Mengapa"
          },
          {
            "key": "C",
            "text": "Siapa"
          },
          {
            "key": "D",
            "text": "Kapan"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 3,
        "text": "Cermati penggalan berita di bawah ini!\nPertambahan penduduk dan perekembangan industri di wilayah perkotaan memengaruhi permintaan lahan yang kian meningkat. Di sisi lain, diperlukan lahan kosong yang dapat dimanfaatkan sebagai daerah resapan untuk menghindari banjir serta penyediaan hutan kota. Hal ini menyebabkan ketidakseimbangan antara luas lahan tersisa dengan kebutuhan. Dengan demikian, kesejahteraan masyarakat akan sulit tercapai.\n\nSimpulan teks berita tersebut adalah …",
        "options": [
          {
            "key": "A",
            "text": "Kesejahteraan masyarakat sulit tercapai apabila pemerintah tidak hendak memenuhi   kebutuhan terhadap lahan."
          },
          {
            "key": "B",
            "text": "Ketidakseimbangan persediaan dan kebutuhan lahan menyebabkan ketimpangan sosial masyarakat di wilayah perkotaan"
          },
          {
            "key": "C",
            "text": "Kesejahteraan masyarakat dipengaruhi keseimbangan persediaan lahan dengan kebutuhan lahan diberbagai sektor"
          },
          {
            "key": "D",
            "text": "Kebutuhan lahan dalam sektor kependudukan dan industri semakin mempersempit persediaan lahan dalam sektor pertanian."
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 4,
        "text": "Perhatikan kalimat di bawah ini!\n“Departemen saya telah berinvestasi besar-besaran untuk menanggulangi spesies invasif ini, di mana sulit untuk mengontrolnya, mahal, dan padat karya,” ujar Rings.\n\nHasil pengubahan kalimat tersebut menjadi kalimat tidak langsung yang tepat adalah…",
        "options": [
          {
            "key": "A",
            "text": "Menurut Rings, kalau departemen saya telah berinvestasi besar-besaran untuk menanggulangi spesies invasif ini, di mana sulit untuk mengontrolnya, mahal, dan padat karya."
          },
          {
            "key": "B",
            "text": "Rings mengatakan bahwa departemen saya telah berinvestasi besar-besaran untuk menanggulangi spesies invasif ini, di mana sulit untuk mengontrolnya, mahal, dan padat karya."
          },
          {
            "key": "C",
            "text": "Rings berujar bahwa departemennya telah berinvestasi besar-besaran untuk menanggulangi spesies invasif ini, di mana sulit untuk mengontrolnya, mahal, dan padat karya."
          },
          {
            "key": "D",
            "text": "Rings berujar jika departemen saya telah berinvestasi besar-besaran untuk menanggulangi spesies invasif ini, di mana sulit untuk mengontrolnya, mahal, dan padat karya."
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Kalimat berikut yang memiliki keterangan waktu adalah…",
        "options": [
          {
            "key": "A",
            "text": "Syukran Arabia Samual dan Andrian Rusdianto mendapat kesempatan yang diidam-idamkan banyak anak muda di Indonesia, yakni berlatih di Spanyol."
          },
          {
            "key": "B",
            "text": "Keduanya bisa berlatih di negeri Matador itu karena mendapat beasiswa dari klub CDA Navalcarnero."
          },
          {
            "key": "C",
            "text": "Klub divisi 3 di Spanyol itu lantas memberikan beasiswa untuk berlatih bersama mereka selama tiga tahun."
          },
          {
            "key": "D",
            "text": "Bea siswa tersebut kontan membuat keduanya merasa sangat bahagia."
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Berwarna merah, kuning, putih, pink, […] ungu, bunga Azalea […] Rhododendron memang cantik. […], keberadaannya di Irlandia sungguh merepotkan. Tanaman itu […] mulai menginvasi dan mengambil alih tanaman nasional.\nKonjungsi yang tepat untuk mengisi bagian yang rumpang pada teks berita tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "Dan, atau, namun, bahkan"
          },
          {
            "key": "B",
            "text": "Dan, atau, namun, sudah"
          },
          {
            "key": "C",
            "text": "Serta, atau, tetapi, bahkan"
          },
          {
            "key": "D",
            "text": "Serta, atau, tetapi, sudah."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 7,
        "text": "Perhatikan langkah-langkah penyimpulan teks berita berikut!\n1) Membuat ringkasan berita.3) Membuat simpulan berita.\n2) Mencatat unsur-unsur pokok berita.4) Membaca/menyimak berita dengan saksama.\n\nUrutan yang tepat langkah-langkah penyimpulan teks berita tersebut adalah...",
        "options": [
          {
            "key": "A",
            "text": "4), 2), 1), 3)"
          },
          {
            "key": "B",
            "text": "4), 3), 2), 1)"
          },
          {
            "key": "C",
            "text": "1), 2), 3), 4)"
          },
          {
            "key": "D",
            "text": "1), 2), 4), 3)"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 8,
        "text": "Perhatikan data-data berikut ini!\n\nbersifat persuasif3. memadukan unsur gambar dengan kata, gerak, dan suara\n2. mengutamakan unsur kata-kata4. mengutamakan kekuatan gambar dan kata-kata\n5. dipajang di tempat umum\nBerdasarkan data di atas, yang merupakan unsur-unsur sebuah poster adalah…",
        "options": [
          {
            "key": "A",
            "text": "1,2,3"
          },
          {
            "key": "B",
            "text": "1,2,5"
          },
          {
            "key": "C",
            "text": "1,3,5"
          },
          {
            "key": "D",
            "text": "1,4,5"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 9,
        "text": "Perhatikan slogan berikut ini!\n\nSatu tunas untuk masa depan bumi kita\nMakna slogan tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "Mari kita menanam pohon bersama"
          },
          {
            "key": "B",
            "text": "Bumi ini akan indah jika pohon tidak ditebang"
          },
          {
            "key": "C",
            "text": "Satu pohon yang kita tanam sangat bermanfaat bagi masa depan bumi dan manusia."
          },
          {
            "key": "D",
            "text": "Pohon yang kita tanam tidak ada pengaruhnya bagi dunia."
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Berikut ini yang termasuk contoh kalimat iklan layanan masyarakat adalah…",
        "options": [
          {
            "key": "A",
            "text": "Sunny, sabun cuci nomor satu di Indonesia"
          },
          {
            "key": "B",
            "text": "Juara masakan tentu pakai bumbu Sedap Rasa"
          },
          {
            "key": "C",
            "text": "Petunjuk 3M Plus untuk mencegah demam dengue"
          },
          {
            "key": "D",
            "text": "Wujudkan cita-citamu bersama bimbingan belajar Cendekia."
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 11,
        "text": "Perhatikan iklan berikut ini!\n\nBerdasarkan iklan tersebut, simpulan yang dapat kita ambil adalah …",
        "options": [
          {
            "key": "A",
            "text": "Iklan tersebut adalah iklan penawaran yang bertujuan untuk menawarkan kepada masyarakat tentang penghematan air. Respon yang diharapkan adalah tindakan masyarakat untuk melakukan penghematan terhadap air ketika sedang mencuci pakaian."
          },
          {
            "key": "B",
            "text": "Iklan tersebut adalah iklan pemberitahuan yang bertujuan untuk menyampaikan pesan kepada masyarakat tentang penghematan air. Respon yang diharapkan adalah tindakan masyarakat untuk melakukan penghematan terhadap air ketika sedang mencuci pakaian."
          },
          {
            "key": "C",
            "text": "Iklan tersebut termasuk ke dalam kategori iklan atau poster transformasional yang bertujuan untuk menyampaikan pesan dan mengubah gaya hidup masyarakat tentang perlunya menghemat air. Respon yang diharapkan adalah tindakan masyarakat untuk melakukan penghematan terhadap air ketika sedang mencucui pakaian."
          },
          {
            "key": "D",
            "text": "Iklan tersebut termasuk ke dalam kategori iklan atau poster informasional yang bertujuan untuk menyampaikan pesan kepada masyarakat tentang penghematan air. Respon yang diharapkan adalah tindakan masyarakat untuk melakukan penghematan terhadap air ketika sedang mandi."
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "text": "Cermati paragraf di bawah ini!\nSaat ini masyarakat cenderung memilih barang-barang produksi luar negeri daripada produk dalam negeri. Meskipun sesungguhnya, banyak barang berlabel impor yang aslinya merupakan buatan kita sendiri. Tampaknya, masyarakat merasa bangga jika menggunakan produk asing. Pemerintah pun tak henti-hentinya melakukan kampanye perlunya menggunakan produk dalam negeri.\n\nKalimat slogan yang tepat sesuai ilustrasi tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "Menggunakan produk dalam negeri berarti merawat barang kita sendiri"
          },
          {
            "key": "B",
            "text": "Menggunakan barang-barang impor tidak baik jika dilakukan terus-menerus"
          },
          {
            "key": "C",
            "text": "Menggunakan produk dalam negeri berarti mencintai bangsa sendiri"
          },
          {
            "key": "D",
            "text": "Menggunakan barang-barang produksi impor merugikan kita sendiri, orang lain, dan Negara."
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 13,
        "text": "Perhatikan iklan berikut!\nHadiri dan saksikan!!\nPameran dan bursa buku di Diamond Convention Center\nTanggal 8-13 November 2023\nTersedia berbagai macam buku, harga paling murah, koleksi buku lengkap.\n\nFakta yang terdapat dalam penggalan iklan tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "Pameran dan bursa buku di Diamond Convention Center."
          },
          {
            "key": "B",
            "text": "Semua merk ada di sini"
          },
          {
            "key": "C",
            "text": "Harga paling murah"
          },
          {
            "key": "D",
            "text": "Kualitas terjamin."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 14,
        "text": "Cermati teks berikut! Jawablah pertanyaan nomor 14 dan 15!\nKebersihan lingkungan sekolah merupakan salah satu faktor utama dalam menciptakan suasana belajar yang nyaman dan kondusif. Sayangnya, kesadaran untuk menjaga kebersihan lingkungan sekolah di kalangan peserta didik tampaknya masih kurang. Hal itu, bisa dilihat dari kebiasaan mereka seperti membuang sampah sembarangan, menyimpan plastik es atau bungkus makanan dalam laci meja, juga mengotori lantai dan dinding kelas. Jika kesadaran belum tumbuh di kalangan peserta didik maka akan sangat sulit untuk menciptakan lingkungan sekolah yang nyaman dan kondusif.\n\nGagasan utama paragraf eksposisi di atas adalah ....",
        "options": [
          {
            "key": "A",
            "text": "Kebersihan lingkungan sekolah merupakan salah satu faktor utama dalam menciptakan suasana belajar yang nyaman dan kondusif."
          },
          {
            "key": "B",
            "text": "Perlunya kesadaran bersama dalam menjaga kebersihan lingkungan sekolah yang nyaman dan kondusif."
          },
          {
            "key": "C",
            "text": "Peserta didik jangan membuang lagi sampah secara sembarangan baik itu di dalam dan di luar kelas"
          },
          {
            "key": "D",
            "text": "Kebersihan lingkungan tidak hanya menjadi tugas pserta didik tapi juga petugas sekolah"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 15,
        "text": "Paragraf teks ekposisi di atas menggunakan pola pengembangan…",
        "options": [
          {
            "key": "A",
            "text": "Induktif"
          },
          {
            "key": "B",
            "text": "Deduktif"
          },
          {
            "key": "C",
            "text": "Campuran"
          },
          {
            "key": "D",
            "text": "Perbandingan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 16,
        "text": "Kalimat berikut ini yang menggunakan kata tidak baku adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Pasang surut laut mengubah kondisi hutan bakau."
          },
          {
            "key": "B",
            "text": "Dalam kehidupannya, lebah mempunyai sistim pembagian kerja yang baik."
          },
          {
            "key": "C",
            "text": "Lebah memiliki perilaku yang khas."
          },
          {
            "key": "D",
            "text": "Dengan posisi hutan bakau yang berada di garis pantai, hutan ini dipengaruhi oleh keadaan air laut."
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Perhatikan kalimat-kalimat berikut!\n(1)Di Indonesia peningkatan upaya pendidikan memang tergolong lumayan baik. Selain itu hal paling utama ialah harus ada minat siswa untuk berprestasi dan belajar.\n(2)Pendidikan adalah hal yang paling efektif dalam memperbaharui dunia. Hal tersebut dikarenakan pendidikan dapat digunakan sebagai batu loncatan untuk mengetahui segala informasi serta ilmu yang ada.\n(3)Jika peserta didik semakin aktif serta diimbangi dengan fasilitas yang baik dapat melakukan kerjasama maka akan meningkatkan martabat Indonesia di kalangan negara-negara di dunia.\n(4)Banyak sekali upaya yang dilakukan oleh pihak pemerintah contohnya Indonesia dalam melakukan pembangunan gedung sekolah bahkan sampai melakukan kegiatan bebas biaya atau sekolah gratis.\n\nYang merupakan bagian tesis dari kalimat-kalimat di atas adalah nomor ...",
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Cermati paragraf eksposisi di bawah ini!\nKemacetan yang berulang pada jangka lebih panjang cenderung terjadi pada musim liburan ataupun lebaran. Pada tahap kedatangan dan kepulangan, kemacetan parah akan terjadi pada jalan-jalan arah luar kota (misalnya Jalan Magelang, Jalan Solo, Jalan Palagan, dan Jalan Wates). Pada rentang masa tersebut, kemacetan dapat dirasakan di pusat kota sebagai lokasi menginap dan tujuan wisata (seperti Malioboro, Prawirotaman), serta jalan-jalan menuju objek wisata, seperti Jalan Parangtritis.\n\nInformasi inti teks eksposisi tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "Musim liburan atau lebaran kerap terjadi kemacetan berulang dan jangka panjang."
          },
          {
            "key": "B",
            "text": "Kemacetan yang berulang dan pada jangka waktu panjang sering terjadi."
          },
          {
            "key": "C",
            "text": "Kemacetan terjadi pada jalan-jalan arah luar kota pada musim liburan atau lebaran."
          },
          {
            "key": "D",
            "text": "Kemacetan juga terjadi di pusat-pusat kota dan tujuan wisata."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Bacalah teks berikut untuk menjawab soal nomor 19 dan 20\nKemacetan sebagian besar ditimbulkan oleh aktivitas masyarakat. Kemacetan ini terjadi karena pola tempat tinggal, bekerja, dan bersekolah. Upaya mendekatkan lokasi tempat tinggal dengan lokasi kegiatan merupakan salah satu solusi yang dapat dilakukan. Bentuknya dapat berupa pemberian insentif tempat tinggal berupa rumah susun sewa ataupun milik yang cukup nyaman untuk beraktivitas. Selama ini, sepertinya, belum ada upaya pengaturan pola kegiatan internal yang sistematis.\n\nKalimat utama teks eksposisi tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "Selama ini, sepertinya, belum ada upaya pengaturan pola berkegiatan yang sistematis."
          },
          {
            "key": "B",
            "text": "Upaya mendekatkan lokasi tempat tinggal dengan lokasi kegiatan merupakan salah satu solusi yang dapat dilakukan."
          },
          {
            "key": "C",
            "text": "Kemacetan ditimbulkan oleh aktivitas masyarakat."
          },
          {
            "key": "D",
            "text": "Kemacetan harian yang dominan ditimbulkan oleh aktivitas masyarakat dalam lingkup internal."
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 20,
        "text": "Makna kata internal dalam teks tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "Dalam lingkungan sendiri"
          },
          {
            "key": "B",
            "text": "Menckup semua bidang"
          },
          {
            "key": "C",
            "text": "Di bagian luar"
          },
          {
            "key": "D",
            "text": "Di bagian dalam"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 21,
        "text": "Contoh topik yang tepat untuk dijadikan sebuah teks eksposisi adalah",
        "options": [
          {
            "key": "A",
            "text": "Liburan menyenangkan"
          },
          {
            "key": "B",
            "text": "Indahnya pemandangan desa"
          },
          {
            "key": "C",
            "text": "Bahaya makanan, ber-MSG"
          },
          {
            "key": "D",
            "text": "Jagalah terumbu karang kita"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "Bacalah penggalan puisi di bawah ini, kemudian jawab soal no 22 dan 23\nSenja di Pelabuhan Kecil\n(Chairil Anwar)\nIni kali tidak ada yang mencari cinta\nDi antara gedung, rumah tua, pada cerita\nTiang serta temali. Kapal, perahu, tiada berlaut\nMenghembus diri dalam mempercaya mau berpaut\nGerimis mempercepat kelam. Ada juga kelepak elang\nMenyinggung muram, desir hari lari berenang\nMenemu bujuk pangkal akanan. Tidak bergerak\n\nSuasana yang tergambar pada puisi di atas adalah...",
        "options": [
          {
            "key": "A",
            "text": "Sepi"
          },
          {
            "key": "B",
            "text": "Gaduh"
          },
          {
            "key": "C",
            "text": "Damai"
          },
          {
            "key": "D",
            "text": "Santai"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 23,
        "text": "Perasaan yang dialami oleh penyair pada puisi di atas adalah…",
        "options": [
          {
            "key": "A",
            "text": "Gembira"
          },
          {
            "key": "B",
            "text": "Menyesal"
          },
          {
            "key": "C",
            "text": "Sedih"
          },
          {
            "key": "D",
            "text": "Marah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Cermati penggalan puisi di bawah ini!\nBurung dara jantan\nYang dulu kau pelihara\nKini telah terbang menemui jodohnya.\n(WS. Rendra)\n\nMakna lambang dara jantan dalam puisi di atas adalah...",
        "options": [
          {
            "key": "A",
            "text": "Manusia"
          },
          {
            "key": "B",
            "text": "Kebebasan"
          },
          {
            "key": "C",
            "text": "Anak laki-laki"
          },
          {
            "key": "D",
            "text": "Burung dara"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 25,
        "text": "Cermati puisi di bawah ini untuk menjawab soal no 25 dan 26\nSajak Seorang Tua untuk Istrinya\n(W.S. Rendra)\n….\nSuka duka kita bukanlah istimewa\nKarena setiap orang mengalaminya\nHidup tidaklah untuk mengeluh dan mengaduh\nHidup adalah untuk mengolah hidup\nBekerja membalik tanah\nMemasuki rahasia langit dan samudra,\nSerta mencipta dan mengukir dunia.\n\nAmanat puisi tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "Rajin bekerja dalam menghadapi tantangan hidup"
          },
          {
            "key": "B",
            "text": "Suka duka dalam kehidupan adalah hal biasa."
          },
          {
            "key": "C",
            "text": "Hidup itu penuh dengan rahasia"
          },
          {
            "key": "D",
            "text": "Harus sabar, ikhlas, dan optimis dalam menghadapi kehidupan."
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 26,
        "text": "Majas yang terdapat pada larik pertama teks puisi tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "Repetisi"
          },
          {
            "key": "B",
            "text": "Paradoks"
          },
          {
            "key": "C",
            "text": "Ironi"
          },
          {
            "key": "D",
            "text": "Hiperbola"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 27,
        "text": "Baca dan cermati teks berikut!\nTEKS 1\nTEKS 2\nGerhana matahari total terjadi ketika bulan tepat berada di antara matahari dan bumi. Peristiwa ini terjadi hanya pada bulan baru.  Pada gerhana matahari total, piringan matahari sepenuhnya tertutup oleh bulan, tetapi pada peristiwa gerhana matahari sebagian, hanya sebagian dari cahaya matahari yang terhalangi bulan. Pada saat bulan berada dalam posisi orbit cukup dekat dan berada dalam bidang yang sama dengan bumi, akan terjadi gerhana total\nRasa takut adalah rasa di mana seseorang merasa bahwa dirinya sedang mengalami situasi atau suasana yang menghilangkan rasa percaya diri mereka akan sesuatu. Di bawah ini ada lima jurus untuk mengatasi rasa takut tersebut.\nPertama, persiapkan diri Anda sebaik-baiknya bila menghadapi situasi atau suasana tertentu. Kedua, pelajari sebaik-baiknya bila menghadapi situasi tersebut. Ketiga, pupuk dan binalah rasa percaya diri. Keempat, setelah timbul rasa percaya diri, pertebal keyakinan Anda. Kelima, untuk menambah rasa percaya diri, kita harus menambah kecakapan atau keahlian melalui latihan atau belajar sungguh-sungguh.\n\nPernyataan berikut yang sesuai dengan kedua teks di atas adalah …",
        "options": [
          {
            "key": "A",
            "text": "Teks 1 merupakan teks eksposisi, sedangkan teks 2 merupakan teks eksplanasi"
          },
          {
            "key": "B",
            "text": "Teks 1 merupakan teks eksplanasi, sedangkan teks 2 merupakan teks eksposisi"
          },
          {
            "key": "C",
            "text": "Kedua teks merupakan teks eksposisi"
          },
          {
            "key": "D",
            "text": "Kedua teks merupakan teks eksplanasi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 28,
        "text": "Bacalah teks berikut untuk menjawab soal no 28 dan 29\nGletser merupakan salah satu kenampakan sekaligus fenomena alam yang terjadi di Bumi. Gletser berupa lapisan besar es yang terbentuk di atas permukaan tanah hasil akumulasi endapan salju yang membatu selama kurun waktu geologi tertentu. Banyak orang mengira bahwa gletser hanya ada di daerah kutub. Nyatanya, gletser juga berada di daerah pegunungan tinggi dunia, bahkan di daerah dekat khatulistiwa. Oleh karena itu, gletser juga dapat terbentuk dari pembekuan air saat musim dingin. Ketika temperatur meninggi, gletser akan mencair dan dapat menjadi sumber air.\n\nPernyataan yang sesuai dengan teks tersebut adalah…",
        "options": [
          {
            "key": "A",
            "text": "Gletser tidak hanya terjadi di kutub, tetapi juga di daerah pegunungan tinggi."
          },
          {
            "key": "B",
            "text": "Gletser yang mencair dapat mengalir di sungai-sungai di pegunungan tinggi."
          },
          {
            "key": "C",
            "text": "Gletser menjadi sumber air masyarakat di daerah pegunungan tinggi."
          },
          {
            "key": "D",
            "text": "Daerah kutub menjadi tempat terciptanya gletser terbesar di dunia."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 29,
        "text": "Pernyataan umum dalam teks eksplanasi tersebut berisi…",
        "options": [
          {
            "key": "A",
            "text": "Proses terjadinya gletser di daerah kutub"
          },
          {
            "key": "B",
            "text": "Proses terjadinya gletser di daerah pegunungan tinggi"
          },
          {
            "key": "C",
            "text": "Penjelasan mengenai gletser sebagai salah satu ketampakan dan fenomena alam"
          },
          {
            "key": "D",
            "text": "Penjelasan mengenai dampak yang terjadi saat gletser mencair di permukaan bumi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 30,
        "text": "Bacalah teks eksplanasi berikut!\nTak hanya menimbulkan berbagai macam penyakit, sampah juga dapat menjadi sebab munculnya bencana alam banjir. Banjir yang ditimbulkan oleh sampah ini juga mendatangkan kerugian-kerugian   baru seperti misalnya muncul penyakit kulit, DBD, dan kerugian material yang cukup besar. Banjir yang diakibatkan oleh sampah bermula pada pembuangan sampah ke sungai secara terus-menerus dan konsisten dalam jumlah yang besar. Hal ini tentu akan menyebabkan sulitnya air mengalir, pendangkalan sungai, menyempitnya luas sungai, dan lain sebagainya sehingga berakhir pada bencana banjir. Banjir yang terjadi akibat sampah tentu akan sangat merugikan lingkungan terlebih lagi dalam segala aspek dan sendi kehidupan manusia.\n\nTeks eksplanasi di atas mengemukakan tentang fenomena …",
        "options": [
          {
            "key": "A",
            "text": "Agama"
          },
          {
            "key": "B",
            "text": "Sosial"
          },
          {
            "key": "C",
            "text": "Alam"
          },
          {
            "key": "D",
            "text": "Ekonomi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 31,
        "text": "Pernyataan berikut yang benar tentang teks berita adalah…",
        "options": [
          {
            "key": "A",
            "text": "Teks berita harus menarik, kontraversial, dan aktual"
          },
          {
            "key": "B",
            "text": "Teks berita harus menarik, aktual, dan faktual"
          },
          {
            "key": "C",
            "text": "Teks berita harus kontroversial, jelas dan sensasional"
          },
          {
            "key": "D",
            "text": "Teks berita harus menarik, jelas, dan aktual"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 32,
        "text": "Penulisan kata baku yang benar adalah…",
        "options": [
          {
            "key": "A",
            "text": "Apotek, antre, isap, izin."
          },
          {
            "key": "B",
            "text": "Bis, antre, atlit, imbau"
          },
          {
            "key": "C",
            "text": "Hafal, hakikat, lubang, kualitas"
          },
          {
            "key": "D",
            "text": "Kwalitas, hakekat, ijazah, karier"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 33,
        "text": "Slogan yang cocok untuk tema Pendidikan adalah…",
        "options": [
          {
            "key": "A",
            "text": "Lingkungan bersih, alam lestari, hidup pun tertata rapi."
          },
          {
            "key": "B",
            "text": "Selamatkan bumi, selamatkan generasi."
          },
          {
            "key": "C",
            "text": "Belajar di hari ini, sukses di hari esok"
          },
          {
            "key": "D",
            "text": "Tiada hari tanpa prestasi."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 34,
        "text": "Ciri kebahasaan teks eksposisi adalah…",
        "options": [
          {
            "key": "A",
            "text": "Menggunakan fakta untuk mendukung argumen (bersifat faktual)"
          },
          {
            "key": "B",
            "text": "Menggunakan bahasa yang jelas dan tidak ambigu"
          },
          {
            "key": "C",
            "text": "Menggunakan kalimat pasif"
          },
          {
            "key": "D",
            "text": "Menggunakan konjungsi sebab akibat"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 35,
        "text": "Berikut ini pernyataan yang benar tentang poster adalah…",
        "options": [
          {
            "key": "A",
            "text": "Poster merupakan teks persuasif yang mengutamakan unsur kata-kata."
          },
          {
            "key": "B",
            "text": "Poster merupakan teks persuasif  yang mengutamakan kekuatan gambar dan kata-kata"
          },
          {
            "key": "C",
            "text": "Poster  merupakan teks persuasif yang dipajang di tempat-tempat umum"
          },
          {
            "key": "D",
            "text": "Poster merupakan teks persuasif yang memadukan unsur gambar saja."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 36,
        "text": "Baca dan cermati puisi berikut!\nSuasana indah hati bergairah (1)Bintang-bintang bertaburan (3)\nDewi malam bersinar terang (2)Sungguh besar keagungan Illahi (4)\n\nImaji atau citraan perasaan pada puisi tersebut terdapat pada larik ke...",
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 37,
        "text": "Di bawah ini yang termasuk ke dalam struktur teks eksplanasi adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Interpretasi"
          },
          {
            "key": "B",
            "text": "Tesis"
          },
          {
            "key": "C",
            "text": "Pengasan Ulang"
          },
          {
            "key": "D",
            "text": "Pernyataan Umum"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 38,
        "text": "Berikut ini yang termasuk unsur fisik sebuah puisi adalah…",
        "options": [
          {
            "key": "A",
            "text": "Citraan dan diksi"
          },
          {
            "key": "B",
            "text": "Tema dan amanat"
          },
          {
            "key": "C",
            "text": "Gaya bahasa dan tipografi"
          },
          {
            "key": "D",
            "text": "Nada dan suasana"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 39,
        "text": "Gaya bahasa personifikasi terdapat pada kalimat ….",
        "options": [
          {
            "key": "A",
            "text": "Suaranya menggelegar membelah angkasa"
          },
          {
            "key": "B",
            "text": "Daun pohon itu menjuntai putus asa"
          },
          {
            "key": "C",
            "text": "Laut yang biru seolah menatapku dalam keheningan."
          },
          {
            "key": "D",
            "text": "Meski cuaca panas, tetapi pikiran harus tetap dingin"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 40,
        "text": "Berikut ini yang tidak dapat dijadikan judul teks eksplanasi adalah…",
        "options": [
          {
            "key": "A",
            "text": "Hujan asam"
          },
          {
            "key": "B",
            "text": "Resep pudding"
          },
          {
            "key": "C",
            "text": "Tingginya angka pengangguran"
          },
          {
            "key": "D",
            "text": "Cita-citamu, cita-cita bersama"
          }
        ],
        "answerKey": "A"
      }
    ]
  },
  {
    "id": "exam-bindo-ix",
    "code": "ASAS-BINDO-IX",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Indonesia Kelas IX",
    "subject": "Bahasa Indonesia",
    "classLevel": "IX",
    "scheduleText": "Senin, 23 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 1,
    "dayLabel": "Hari Ke-1 • Senin, 23 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Haryadi dan teman-temannya ingin membuat laporan praktikum pelajaran IPA dengan menggunakan teks laporan percobaan. Informasi pokok berikut yang tidak perlu dimunculkan dalam teks laporan percobaan yang dibuat Haryadi dan teman-temannya adalah …",
        "options": [
          {
            "key": "A",
            "text": "Tujuan Percobaan"
          },
          {
            "key": "B",
            "text": "Bahan dan Alat Percobaan"
          },
          {
            "key": "C",
            "text": "Biaya Percobaan"
          },
          {
            "key": "D",
            "text": "Langkah-Langkah Percobaan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Perhatikan paragraf berikut!\n- Pada kegiatan B penulis mendapatkan hasil bahwa ketika beberapa tetes tinta dimasukan kedalam air, tinta akan bercampur air dalam beberapa menit tanpa diaduk. Tinta bercampur dengan air secara keseluruhan.\n- Keindahan Pantai Kuta pun sudah terkenal sejak dahulu. Bahkan, para wisatawan mancanegara sudah meramaikan Pantai Kuta sejak awal tahun 1970-an. Hal tersebut tentu saja berdampak positif bagi masyarakat Bali secara umum, terutama terkait dengan kondisi ekonomi masyarakat setempat.\n- Rubella, atau biasa disebut campak jerman adalah penyakit menular yang disebabkan oleh virus rubella. Gejala rubella yang paling utama adalah demam ringan dan bintik-bintik merah di kulit. Rubella sering terjadi pada bayi dan anak yang belum atau tidak diimunisasi.\n- Pemerintah pusat akan mendorong pemerintah daerah di Sulawesi Tengah untuk mengaktifkan kembali aktivitas perekonomian. Selain itu, pemerintah pusat pun akan berupaya memenuhi kebutuhan masyarakat Palu, Donggala, dan Sigi, yaitu jaringan listrik dan komunikasi.\nParagraf yang termasuk teks laporan percobaan ditandai dengan nomor….",
        "options": [
          {
            "key": "A",
            "text": "1)"
          },
          {
            "key": "B",
            "text": "2)"
          },
          {
            "key": "C",
            "text": "3)"
          },
          {
            "key": "D",
            "text": "4)"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 3,
        "text": "Bacalah teks berikut ini!\nTemulawak (curcuma xanthorriza, roxb) merupakan salah satu herbal yang telah lama digunakan oleh masyarakat Indonesia sebagai obat alami dalam memerangi berbagai jenis penyakit. Tanaman yang konon dianggap sebagai tanaman asli Indonesia ini juga digunakan secara luas diberbagai belahan dunia sebagai herbal untuk berbagai penyakit. Bukan itu saja, rimpang ini juga dapat digunakan sebagai sumber karbohidrat, pewarna alami, atau penyedap makanan dan minuman. Temulawak merupakan jenis rimpang yang masih satu familia dengan jahe dan kunyit, yakni famili curcuma.\nInformasi tersurat yang sesuai dengan kutipan teks laporan percobaan tersebut adalah….",
        "options": [
          {
            "key": "A",
            "text": "Temulawak adalah satu satunya tanaman asli Indonesia."
          },
          {
            "key": "B",
            "text": "Berbagai negara di belahan dunia menyukai tanaman temulawak."
          },
          {
            "key": "C",
            "text": "Temulawak termasuk tanaman obat alami."
          },
          {
            "key": "D",
            "text": "Fungsi utama temulawak adalah sebagai penyedap makanan dan minuman."
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 4,
        "text": "Makna kata herbal dalam teks laporan percobaan di atas adalah....",
        "options": [
          {
            "key": "A",
            "text": "Tanaman yang dapat dibudidayakan."
          },
          {
            "key": "B",
            "text": "Tanaman yang memiliki kegunaan untuk pengobatan."
          },
          {
            "key": "C",
            "text": "Tanaman khas asli indonesia."
          },
          {
            "key": "D",
            "text": "Tanaman yang berjenis rimpang."
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "Bacalah kutipan teks berikut untuk menjawab soal nomor 7 dan 8!\nSetelah melakukan percobaan, penulis mendapatkan hasil bahwa berat kentang sebelum dimasukkan ke dalam larutan dan sesudah dimasukkan berbeda. Deskripsi perbedaan tersebut tergambar dalam tabel berikut.\nNo\nJenis media\nBalok Umbi Kentang\nSebelum percobaan\nSetelah percobaan\n1\nAir\n15 gram\n10 gram\n2\nLarutan gula 15%\n13,3 gram\n8 gram\n3\nLarutan gula 50%\n14,9 gram\n14,5 gram\n\nTeks tersebut merupakan kutipan teks laporan percobaan bagian....",
        "options": [
          {
            "key": "A",
            "text": "kajian pustaka"
          },
          {
            "key": "B",
            "text": "hasil percobaan"
          },
          {
            "key": "C",
            "text": "prosedur kerja"
          },
          {
            "key": "D",
            "text": "pembahasan hasil percobaan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 6,
        "text": "Berdasarkan data dalam tabel, setelah dimasukkan ke dalam larutan gula 15%, berat kentang mengalami....",
        "options": [
          {
            "key": "A",
            "text": "kenaikan sebesar 5 gram"
          },
          {
            "key": "B",
            "text": "penurunan sebesar 5,3 gram"
          },
          {
            "key": "C",
            "text": "kenaikan sebesar 35 gram"
          },
          {
            "key": "D",
            "text": "penurunan sebesar 0,4 gram"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "Perhatikan kalimat-kalimat berikut dengan cermat!\n- Mentega dan minyak mengandung lemak karena saat dioleskan ke kertas buram, kertas tersebut berubah menjadi transparan.\n- Kita dapat mempunyai slime yang aman digunakan tanpa menggunakan boraks setelah melakukan percobaan ini.\n- Ragi dikenal sebagai bahan yang umum digunakan dalam fermentasi untuk menghasilkan etanol.\n- Manfaat percobaan ini adalah dapat mengetahui perubahan berat kentang yang dimasukkan pada larutan gula sebanyak 15% dan 50% serta pada air biasa.\nKalimat kompleks yang menyatakan hubungan penyebaban ditandai nomor....",
        "options": [
          {
            "key": "A",
            "text": "1)"
          },
          {
            "key": "B",
            "text": "2)"
          },
          {
            "key": "C",
            "text": "3)"
          },
          {
            "key": "D",
            "text": "4)"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 8,
        "text": "Perhatikan langkah-langkah percobaan berikut!\n- Mengukur voltase listrik pada buah dan mencatat hasilnya\n- Menghubungkan setiap buah dengan sensor voltase\n- Menyiapkan alat dan bahan.\n- Mengumpulkan beragam buah, jenis buah yang manis dan jenis buah yang masam\nUrutan langkah-langkah laporan percobaan untuk mengetahui kandungan listrik pada buah yang benar adalah….",
        "options": [
          {
            "key": "A",
            "text": "3, 4, 2, 1"
          },
          {
            "key": "B",
            "text": "4, 3, 2, 1"
          },
          {
            "key": "C",
            "text": "2, 1, 3, 4"
          },
          {
            "key": "D",
            "text": "3, 4, 1, 2"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 9,
        "text": "Perhatikan paragraf-paragraf berikut dengan cermat!\n- Melalui media cetak dan elektronik kita dapat menyaksikan bagaimana para pengedar narkoba membangun jaringan secara intensif. Akibatnya, peredaran narkoba begitu merebak hingga ke daerah-daerah pelosok bahkan sampai ke lembaga pemasyarakatan.\n- Mungkin banyak di antara hadirin yang belum memahami isu globalisasi. Untuk itu, kali ini saya ingin mengajak hadirin untuk mengingat kembali beberapa pola hidup yang dapat mengakibatkan globalisasi, apa pengaruhnya bagi kita semua, dan bagaimana kita menghadapi pengaruhnya.\n- Idealnya, biaya pembangunan di suatu negara harusnya dibiayai oleh rakyat di negara tersebut melalui setoran pajak. Inilah mengapa dikatakan pajak sebagai harga diri bangsa. Karena pajak sebagai harga diri bangsa, seharusnya setiap wajib pajak merasa bangga setelah melakukan kewajibannya kepada negara.\n- Langkah pertama adalah dengan memasukkan air hangat dengan takaran sesuai selera. Selanjutnya, celupkan teh gantung ke dalam gelas berisi air hangat. Jangan lupa masukkan gula secukupnya kemudian aduk hingga larut. Teh siap disajikan.\nParagraf berikut yang bukan termasuk kutipan teks pidato persuasif adalah....",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "Bacalah kutipan pidato berikut!\nSaudara-saudara yang saya hormati, tema Bulan Bahasa kali ini adalah meningkatkan mutu dan disiplin penggunaan bahasa Indonesia dalam mencerdaskan bangsa. Tanpa peningkatan mutu dan disiplin penggunaan bahasa, maka fungsi dan kedudukan bahasa Indonesia sebagai bahasa negara dan bahasa persatuan akan menjadi pudar. Bahasa Indonesia tidak akan memancarkan kepribadian dan kebanggaan nasionalnya.\nIsi kutipan pidato di atas adalah....",
        "options": [
          {
            "key": "A",
            "text": "Ajakan untuk meningkatkan mutu dan disiplin berbahasa Indonesia."
          },
          {
            "key": "B",
            "text": "Meningkatkan mutu dan disiplin berbahasa Indonesia tidak ada fungsinya."
          },
          {
            "key": "C",
            "text": "Tanpa meningkatkan mutu berbahasa Indonesia, fungsi dan kedudukannya tidak kuat."
          },
          {
            "key": "D",
            "text": "Bahasa Indonesia tidak dapat memancarkan kepribadian dan kebanggaan nasional."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 11,
        "text": "Berikut ini merupakan struktur teks pidato persuasif bagian pembuka!",
        "options": [
          {
            "key": "A",
            "text": "Salam Pembuka dan Sapaan"
          },
          {
            "key": "B",
            "text": "Ucapan Syukur dan Terima Kasih"
          },
          {
            "key": "C",
            "text": "Tujuan Pidato"
          },
          {
            "key": "D",
            "text": "Pernyataan Posisi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 12,
        "text": "Bacalah teks berikut untuk menjawab soal nomor 12-14!\n........\nUntuk menghindari peredaran dan penyalahgunaan narkoba di kalangan peserta didik, kesadaran dan pengetahuan tentang bahaya narkoba perlu ditanamkan. Banyak cara yang dapat dilakukan, baik melalui penyampaian materi, forum diskusi, maupun dalam bentuk pemberian tugas-tugas sekolah. Pemberian tugas sekolah dapat dilakukan guru dalam bentuk tugas membuat poster, cerpen, atau tulisan yang bertema antinarkoba.\nDengan cara-cara di atassecara tidak langsung para peserta didik akan mengenal dampak penyalahgunaan narkoba. Melalui pengenalan itu, terbentuklah pola pikir untuk menjauhi penggunaan narkoba pada diri peserta didik.\n…....\n\nTeks pidato di atas mengangkat topik....",
        "options": [
          {
            "key": "A",
            "text": "peredaran dan penyalahgunaan narkoba di Indonesia"
          },
          {
            "key": "B",
            "text": "pemberantasan mata rantai peredaran narkoba"
          },
          {
            "key": "C",
            "text": "antisipasi penyalahgunaan narkoba di kalangan peserta didik"
          },
          {
            "key": "D",
            "text": "pemberlakuan hukuman bagi pengedar narkoba"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 13,
        "text": "Kutipan teks pidato tersebut bertujuan mengajak pembaca/pendengar untuk....",
        "options": [
          {
            "key": "A",
            "text": "membantu polisi dalam pemberantasan peredaran narkoba"
          },
          {
            "key": "B",
            "text": "pemberantasan mata rantai peredaran narkoba"
          },
          {
            "key": "C",
            "text": "mengantisipasi penyalahgunaan narkoba di kalangan peserta didik"
          },
          {
            "key": "D",
            "text": "berupaya aktif dalam upaya penanganan penyalahgunaan narkoba"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "Alasan orator (penyampai pidato) menghindari peredaran dan penyalahgunaan narkoba dengan cara pemberian tugas-tugas sekolah adalah....",
        "options": [
          {
            "key": "A",
            "text": "mengenalkan cara mengatasi bahaya narkoba kepada peserta didik"
          },
          {
            "key": "B",
            "text": "menanamkan sikap kerja sama peserta didik dalam pemberantasan narkoba"
          },
          {
            "key": "C",
            "text": "membentuk pola pikir peserta didik menjauhi penggunaan narkoba"
          },
          {
            "key": "D",
            "text": "mengefektifkan pembelajaran di kelas agar mencapai hasil belajar yang maksimal"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Bacalah teks berikut untuk menjawab soal nomor 15-16!\nKebersihan lingkungan merupakan hal yang sangat penting guna menjaga kesehatan diri sendiri dan lingkungan sekitar. Lingkungan yang sehat akan meminimalisasi penyebaran penyakit dan akan memberikan kenyamanan saat berada di lingkungan tersebut. Hal tersebut berlaku pula untuk lingkup sekolah.\nKenyamanan lingkungan sekolah menjadi faktor pendorong keberhasilan proses belajar mengajar. Dengan lingkungan sekolah yang nyaman, peserta didik dan guru memiliki kesempatan untuk melaksanakan kegiatan pembelajaran yang aktif, kreatif, efektif, dan menyenangkan.\nMaka dari itu, marilah kita sebagai warga sekolah dapat menjaga kebersihan lingkungan sekolah. Mulailah dari diri sendiri, seperti membuang sampah pada tempatnya dan tidak meninggalkan barang-barang di laci karena dapat menjadi sarang nyamuk.\nDengan demikian, menjaga kebersihan lingkungan,khususnya di lingkungan sekolah, merupakan hal yang sangat penting dan bukan hal yang layak ditunda-tunda. Kelasku bersih, prestasi mudah diraih!\n\nBagian isi teks pidato persuasif yang berupa pendahuluan yang berisi pendapat atau sudut pandang orator (pernyataan posisi) adalah ditandai dengan nomor....",
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Bagian isi teks pidato persuasif yang berisi ajakan orator kepada pendengarnya adalah ditandai dengan nomor....",
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 17,
        "text": "Bacalah kutipan cerpen berikut untuk menjawab soal nomor 17 dan 18!\n(1) Kini giliranku memegang senter, menaklukkan semak-semak, kayu berduri dan batang-batang angkuh di depannya. (2) Sebelumnya, dua kawanku secara bergantian telah menyelesaikan pembagian tugas membuka jalan. (3) Ya, ini kesepakatan kami: yang terdepan membuka jalan, di tengah membawa ransel berisi makanan, sedang yang paling belakang membawa matras. (4) Ini dilakukan secara bergantian.\nBukti latar waktu kutipan cerpen di atas ditandai dengan kalimat nomor....",
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Sudut pandang kutipan cerpen di atas adalah....",
        "options": [
          {
            "key": "A",
            "text": "orang pertama"
          },
          {
            "key": "B",
            "text": "orang kedua"
          },
          {
            "key": "C",
            "text": "orang ketiga"
          },
          {
            "key": "D",
            "text": "orang lain"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Perhatikan kutipan cerpen berikut!\n\"Dengan hati yang berdebar, Sarah melangkah ke depan pintu kelas. Ia tahu bahwa saat ini saatnya untuk menghadapi ketakutannya. Dia menarik napas dalam-dalam dan memasuki ruangan itu. Disana, dia melihat wajah-wajah teman-temannya yang sudah duduk di bangku-bangku mereka. Mereka tersenyum ramah, dan Sarah merasa lega. Hari ini, dia akan memberanikan diri untuk mengungkapkan perasaannya pada Kevin.\"\nKutipan cerpen tersebut menggunakan alur ….",
        "options": [
          {
            "key": "A",
            "text": "Maju"
          },
          {
            "key": "B",
            "text": "Mundur"
          },
          {
            "key": "C",
            "text": "Campuran"
          },
          {
            "key": "D",
            "text": "Komplikasi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "Perhatikan kutipan cerpen berikut!\n“Dalam hening malam yang sepi, dua hati yang pernah bersatu kini terpisah oleh jurang perbedaan. Mereka saling menatap, tetapi tak ada kata yang terucap. Pergulatan hebat terjadi dalam diri masing-masing begitu kuat, dan mereka tahu bahwa hidup mereka tak akan pernah sama lagi.”\nKutipan cerpen tersebut menggambarkan tentang!",
        "options": [
          {
            "key": "A",
            "text": "Tema"
          },
          {
            "key": "B",
            "text": "Alur"
          },
          {
            "key": "C",
            "text": "Amanat"
          },
          {
            "key": "D",
            "text": "Konflik"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 21,
        "text": "Struktur cerpen yang benar adalah ….",
        "options": [
          {
            "key": "A",
            "text": "Komplikasi – Rangkaian Peristiwa – Orientasi – Resolusi"
          },
          {
            "key": "B",
            "text": "Orientasi – Rangkaian Peristiwa – Komplikasi – Resolusi"
          },
          {
            "key": "C",
            "text": "Rangkaian Peristiwa – Orientasi – Komplikasi – Resolusi"
          },
          {
            "key": "D",
            "text": "Rangkaian Peristiwa – Komplikasi – Orientasi – Resolusi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 22,
        "text": "Bacalah kutipan cerpen berikut ini!\n“Nada, minggu depan kita harus pindah ke Yogyakarta. Ayah dipindahtugaskan di sana.” Bagaikan petir di siang bolong menyambar Nada yang seketika itu langsung diam mematung. “Kenapa mendadak, Bunda? Nada senang tinggal di sini. Apa Nada tidak bisa tetap tinggal di sini? Sekolah Nada gimana?” “Tidak bisa, sayang. Kamu mau tinggal sama siapa di sini? Masalah sekolah, semua sudah diurus Ayah. Kamu hanya tinggal mengemasi barang-barangmu.” Nada terdiam. Tak mungkin mampu ia membantah. Minggu depan ia harus meninggalkan tempat ini. Tepat di hari ulang tahun Dio yang ke-18. Terasa berat untuknya meninggalkan tempat ini. Terlalu banyak kenangan yang terukir. Semakin terasa berat ketika harus meninggalkan Dio.\nMakna simbol petir di siang bolong pada kutipan cerpen tersebut adalah....",
        "options": [
          {
            "key": "A",
            "text": "merasa sedih"
          },
          {
            "key": "B",
            "text": "merasa bingung"
          },
          {
            "key": "C",
            "text": "merasa terkejut"
          },
          {
            "key": "D",
            "text": "merasa heran"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "text": "Dalam kutipan berikut, apa yang menjadi hasil dari resolusi karakter?\n\"Dengan tekad yang bulat, dia akhirnya meminta maaf pada teman-temannya dan berusaha memperbaiki hubungan yang retak.\"",
        "options": [
          {
            "key": "A",
            "text": "Karakter utama menjadi lebih dingin dan jauh dari teman-teman"
          },
          {
            "key": "B",
            "text": "Karakter utama tetap berkeras hati dan tidak meminta maaf"
          },
          {
            "key": "C",
            "text": "Karakter utama meminta maaf dan berusaha memperbaiki hubungan yang retak"
          },
          {
            "key": "D",
            "text": "Karakter utama memutuskan untuk meninggalkan semua teman-temannya"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Perhatikan kalimat-kalimat berikut dengan cermat!\n- Sebagian besar pihak yang menjadi sponsor Asian Para Games 2018 sempat mengira ajang tersebut sama dengan Asian Games.\n- Dalam standar olimpiade saat ini, setiap medali emas yang menjadi hadiah bagi para atlit pemenang mengandung kadar emas sebesar 6 gram yang dicampur dengan perak sebesar 494 gram.\n- Lagu “Laskar Pelangi” memberikan inspirasi bahwa ”mimpi” bisa menjadi ”kunci” yang bisa digunakan untuk membuka harapan kita untuk ”menaklukkan dunia” yang kemudian menjadi penyemangat untuk meraih cita-cita.\n- BNPB menyemprotkan cairan desinfektan melalui udara dengan metode water booming di titik lokasi gempa likuifaksi, Balaroa dan Sigi, Sulawesi Tengah, Kamis, 18 Oktober 2018.\nKalimat yang termasuk teks tanggapan ditandai nomor....",
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 25,
        "text": "Yang dimaksud dengan teks tanggapan adalah ?",
        "options": [
          {
            "key": "A",
            "text": "Teks yang memberikan informasi faktual"
          },
          {
            "key": "B",
            "text": "Teks yang menghibur pembaca"
          },
          {
            "key": "C",
            "text": "Teks yang memberikan opini atau pendapat terhadap suatu masalah atau karya"
          },
          {
            "key": "D",
            "text": "Teks yang hanya berisi narasi cerita"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 26,
        "text": "Bacalah teks berikut!\n(1) Meskipun lukisan “Dini Hari” dibuat berdasarkan imajinasi pelukisnya, tetapi pemandangan alam yang dilukiskannya itu seolah-olah benar-benar ada dan bukan imajinasi. (2) Bentuk benda-benda yang dilukiskan tidak beda dengan benda dalam kehidupan nyata.(3) Namun, dari sisi komposisi tampilan lukisan tersebut terasa kurang lengkap. (4) Lukisan hanya menampilkan unsur tumbuhan (pohon pinus dan rerumputan). (5) Unsur-unsur kehidupan yang lain seperti binatang dan manusia tidak ditampilkan. (6) Hal inilah yang menyebabkan lukisan ini terkesan “kering” atau “kurang lengkap”.\nKalimat berisi pujian dalam teks tersebut ditandai dengan nomor....",
        "options": [
          {
            "key": "A",
            "text": "1 dan 2"
          },
          {
            "key": "B",
            "text": "3 dan 4"
          },
          {
            "key": "C",
            "text": "4 dan 5"
          },
          {
            "key": "D",
            "text": "5 dan 6"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 27,
        "text": "Bacalah teks berikut!\n(1) Penerbit Wayang menerbitkan buku terbaru yang berjudul Sudah Saatnya Menjadi Penulis Hebat. (2) Buku ini ditulis oleh Bendi Derajat. (3) Judulnya menarik, isinya lengkap, bahasanya ringan dan mudah dipahami serta bermanfaat bagi pembaca. (4) Hanya saja buku tersebut menggunakan banyak istilah akademik yang sulit dipahami pembaca awam.\nKalimat berisi kritikan dalam teks tersebut ditandai dengan nomor....",
        "options": [
          {
            "key": "A",
            "text": "(4)"
          },
          {
            "key": "B",
            "text": "(3)"
          },
          {
            "key": "C",
            "text": "(2)"
          },
          {
            "key": "D",
            "text": "(1)"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 28,
        "text": "Kalimat teks tanggapan yang tepat adalah….",
        "options": [
          {
            "key": "A",
            "text": "\"Hari ini saya pergi ke taman dan bermain dengan teman-teman saya.\""
          },
          {
            "key": "B",
            "text": "\"Film yang saya tonton semalam sangat menarik dan penuh aksi.\""
          },
          {
            "key": "C",
            "text": "\"Menurut saya, novel ini sangat menginspirasi dan memiliki pesan yang mendalam.\""
          },
          {
            "key": "D",
            "text": "\"Saya suka makanan pedas, terutama cabai.\""
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 29,
        "text": "Bacalah teks berikut!\nNamun dengan segala kelebihan, buku ini mebuat pembaca sulit menangkap maksud pengarang karena menggunakan bahasa yang begitu kental dengan dunia musik, kutipan film mancanegara, dan nama filsafat- filsafat Yunani Kuno. Hal ini membuat pembaca tidak mengerti dan menjadi sebagian pembaca malas untuk membacanya. Dalam novel ini, sepertinya penulis ingin menunjukan dirinya daripada tokohnya.\nHal yang dibahas dalam teks tanggapan novel di atas adalah....",
        "options": [
          {
            "key": "A",
            "text": "alur cerita yang mudah diikuti pembaca"
          },
          {
            "key": "B",
            "text": "kutipan-kutipan yang terdapat dalam novel"
          },
          {
            "key": "C",
            "text": "pembaca sulit menangkap maksud pengarang"
          },
          {
            "key": "D",
            "text": "amanat yang terdapat dalam novel"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 30,
        "text": "Bacalah teks berikut!\nKekurangan novel Negeri 5 Menara adalah terlalu banyak menggunakan bahasa daerah Minangkabau, sehingga membuat pembaca yang bukan berasal dari Minangkabau kesulitan untuk mengerti arti kosakatanya. Oleh karena itu, di setiap kosakata sulit, di bawahnya dituliskan arti kosakata tersebut. Kekurangan dalam novel ini ditutupi oleh kelebihannya. Kelebihan novel ini dapat menyihir pembaca untuk merasakan suasana pesantren dan apa yang dilakukan oleh Alif dan kelima sahabatnya. Setelah membaca novel ini, kita akan menyadari bahwa pondok pesantren tidak hanya memberikan ilmu agama, tetapi juga ilmu umum. Selain itu, kita akan menghapus anggapan bahwa anak lulusan pondok paling jauh hanya akan menjadi pemuka agama.\nKritik atas novel Negeri 5 Menara sesuai teks tersebut adalah....",
        "options": [
          {
            "key": "A",
            "text": "Penggunaan bahasa daerah yang berlebihan dalam novel Negeri 5 Menara."
          },
          {
            "key": "B",
            "text": "Suasana pesantren yang tergambarkan dalam novel Negeri 5 Menara dapat dirasakan oleh pembaca."
          },
          {
            "key": "C",
            "text": "Alur cerita dalam novel Negeri 5 Menara terasa terlalu meloncat-loncat."
          },
          {
            "key": "D",
            "text": "Penggambaran watak tokoh-tokoh dalam novel Negeri 5 Menara cenderung dipaksakan."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 31,
        "text": "Apa yang biasanya menjadi bagian utama dari teks laporan percobaan?",
        "options": [
          {
            "key": "A",
            "text": "Hasil percobaan"
          },
          {
            "key": "B",
            "text": "Latar belakang penulis"
          },
          {
            "key": "C",
            "text": "Analisis data"
          },
          {
            "key": "D",
            "text": "Resensi buku terkait"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 32,
        "text": "Mana di antara kalimat-kalimat berikut yang merupakan kalimat fakta dalam laporan percobaan:",
        "options": [
          {
            "key": "A",
            "text": "\"Kami berharap hasil percobaan ini akan mengubah pandangan kita tentang dunia.\""
          },
          {
            "key": "B",
            "text": "\"Waktu reaksi kimia dalam percobaan ini adalah 30 detik.\""
          },
          {
            "key": "C",
            "text": "\"Para peneliti merasa optimis tentang hasil percobaan ini.\""
          },
          {
            "key": "D",
            "text": "\"Semua orang akan terkejut dengan temuan ini.\""
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 33,
        "text": "Berikut ini merupakan struktur teks pidato persuasif bagian Penutup!",
        "options": [
          {
            "key": "A",
            "text": "Tujuan dan pernyataan posisi"
          },
          {
            "key": "B",
            "text": "Tahap argumen dan penguatan pernyataan posisi"
          },
          {
            "key": "C",
            "text": "Simpulan dan terima kasih"
          },
          {
            "key": "D",
            "text": "Permohonan maaf dan salam penutup"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 34,
        "text": "Berikut ini merupakan metode dalam berpidato yang benar adalah  ...",
        "options": [
          {
            "key": "A",
            "text": "Impromtu dan Memoriter"
          },
          {
            "key": "B",
            "text": "Metode Naskah dan Ekstemporan"
          },
          {
            "key": "C",
            "text": "Impromtu dan Komunikasi"
          },
          {
            "key": "D",
            "text": "Ekstemporan dan Persuasif"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 35,
        "text": "Cerpen dibangun oleh dua unsur yaitu …",
        "options": [
          {
            "key": "A",
            "text": "Intrinsik"
          },
          {
            "key": "B",
            "text": "Tema"
          },
          {
            "key": "C",
            "text": "Amanat"
          },
          {
            "key": "D",
            "text": "Ekstrinsik"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 36,
        "text": "Bacalah kutipan cerpen berikut!\n(1) Malam ini Vina tengah menengadahkan kepalanya, berusaha menyapa bulan. (2) Kendati penantiannya telah habiskan lebih dari separuh kesabarannya, bulan tak kunjung membalas sapanya. (3) Rupanya, awanlah yang menghalangi terangnya bulan,karena  malam ini terasa lebih dingin dari malam-malam sebelumnya. (4) Entah mengapa dingin itu tak ia rasakan sedikit pun, mungkin pikiran tentang kejadian tadi siang yang hilangkan rasa itu.\nMajas personifikasi yang terdapat dalam kutipan cerpen di atas ditandai kalimat nomor....",
        "options": [
          {
            "key": "A",
            "text": "(3)"
          },
          {
            "key": "B",
            "text": "(4)"
          },
          {
            "key": "C",
            "text": "(1)"
          },
          {
            "key": "D",
            "text": "(2)"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 37,
        "text": "“Wajahnya keras dan beku seperti dinding batu, Ia Berkata, “Aku ikut.” Makna yang emotif yang terkandung dalam kalimat ini adalah sebagai berikut…",
        "options": [
          {
            "key": "A",
            "text": "Ia gembira karena ikut serta"
          },
          {
            "key": "B",
            "text": "Ia ingin ingin ikut namun ada juga rasa enggan"
          },
          {
            "key": "C",
            "text": "Keinginan ikut secara terpaksa"
          },
          {
            "key": "D",
            "text": "Ia harus ikut serta"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 38,
        "text": "Dalam teks tanggapan, ungkapan seperti \"menurut pendapat saya,\" \"saya merasa,\" dan \"saya setuju\" adalah contoh dari...",
        "options": [
          {
            "key": "A",
            "text": "Fakta"
          },
          {
            "key": "B",
            "text": "Narasi"
          },
          {
            "key": "C",
            "text": "Opini"
          },
          {
            "key": "D",
            "text": "Pendapat"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 39,
        "text": "“Peserta didik melakukan kajian kemasyarakatan ke suatu daerah.” Kalimat terebut merupakan kalimat ….",
        "options": [
          {
            "key": "A",
            "text": "Tunggal"
          },
          {
            "key": "B",
            "text": "Aktif"
          },
          {
            "key": "C",
            "text": "Pasif"
          },
          {
            "key": "D",
            "text": "Komplek"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 40,
        "text": "Bacalah teks berikut!\n- “5 Cm” adalah film drama Indonesia yang dirilis pada 12 Desember2012. Film ini merupakan film yang diadaptasi dari sebuah novel dengan judul yang sama karya Donny Dhirgantoro. Film yang disutradarai oleh Rizal Mantovani ini diperankan oleh Fedi Nuril sebagai Genta, Denny Sumargo sebagai Arial, Raline Shah sebagai Riani, Igor Saykoji sebagai Ian, Herjunot Ali sebagai Zafran, dan Pevita Pearce sebagai Adinda.\n- Film ini secara garis besar bercerita tentang persahabatan dan nasionalisme. Genta, Arial, Zafran, Riani, dan Ian adalah lima remaja yang telah menjalin persahabatan sepuluh tahun lamanya. Mereka memiliki karakter yang berbeda-beda. Suatu hari mereka berlima merasa jenuh dengan persahabatan mereka. Akhirnya, kelimanya memutuskan untuk berpisah, tidak saling berkomunikasi satu sama lain selama tiga bulan lamanya.\n- Judul film ini unik dan sederhana tetapi memiliki cerita yang sangat menakjubkan. Film ini dengan cerdas merekatkan karakter kuat pada masing-masing tokoh. Hal ini yang membuat “5 Cm” unggul dari film lain. Biasanya, pada permulaan film kita dibiarkan menebak seperti apa karakter para tokoh. Namun, pada film “5 Cm” kita tidak dibiarkan menebak sebab karakter tokoh sudah terbaca kuat di bagian awal.\n- Terdapat beberapa perbedaan antara novel dan film “5 Cm”. Dalam novel jalan cerita digambarkan sangat detail sedangkan dalam film ada beberapa bagian yang dikurangi. Demikian pula dalam penggambaran latar. Pada film Gunung Mahameru dan sekitarnya kurang diekspos secara luas, hanya sebagian yang kita lihat. Hal tersebut sangat jauh berbeda dengan penggambaran latar yang sama pada novel.\nBagian penilaian pada teks tersebut ditandai dengan nomor....",
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          }
        ],
        "answerKey": "A"
      }
    ]
  },
  {
    "id": "exam-qh-vii",
    "code": "ASAS-QH-VII",
    "title": "Asesmen Sumatif Akhir Semester — Al-Qur’an Hadits Kelas VII",
    "subject": "Al-Qur’an Hadits",
    "classLevel": "VII",
    "scheduleText": "Senin, 23 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "dayOrder": 1,
    "dayLabel": "Hari Ke-1 • Senin, 23 Nov 2026",
    "sessionOrder": 2,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Pengertian Al-Qur’an menurut bahasa adalah :",
        "options": [
          {
            "key": "A",
            "text": "Tulisan"
          },
          {
            "key": "B",
            "text": "Hafalan"
          },
          {
            "key": "C",
            "text": "Bacaan"
          },
          {
            "key": "D",
            "text": "Rangkaian Huruf"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Sedangkan menurut Istilah Al-Qur’an adalah",
        "options": [
          {
            "key": "A",
            "text": "Bacaan yang harus dihafal."
          },
          {
            "key": "B",
            "text": "Fiman Allah yang di turunkan kepada Nabi SAW."
          },
          {
            "key": "C",
            "text": "Kitab yang ada sebelum manusia ada."
          },
          {
            "key": "D",
            "text": "Kitab yang menggunakan Bahasa arab."
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "……………القران هو الكباب المعجز المنزل",
        "options": [
          {
            "key": "A",
            "text": "على النبي صلى الله عليه وسلم"
          },
          {
            "key": "B",
            "text": "على اللاسلام"
          },
          {
            "key": "C",
            "text": "على الناس"
          },
          {
            "key": "D",
            "text": "على المسلمون والمسلما ت"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 4,
        "text": "Al Qur’an disampaikan kepada manusia secara Mutawatir, artinya adalah ….",
        "options": [
          {
            "key": "A",
            "text": "Diriwayatkan oleh banyak orang/kebenarannya mutlak."
          },
          {
            "key": "B",
            "text": "Diriwatyakan oleh malaikat jibril."
          },
          {
            "key": "C",
            "text": "Diriwayatkan oleh orang cerdas."
          },
          {
            "key": "D",
            "text": "Diriwayatkan oleh shabat."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 5,
        "text": "Al-Qur’an terdiri dari :",
        "options": [
          {
            "key": "A",
            "text": "113 surat dan 3278 ayat 28 juz"
          },
          {
            "key": "B",
            "text": "6666 surat dan 114 ayat 80 juz"
          },
          {
            "key": "C",
            "text": "3278 surat dan 113 ayat 30 juz"
          },
          {
            "key": "D",
            "text": "6666 ayat dan 114 surat 30 juz"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 6,
        "text": "Al-Qur’an terdiri dari :",
        "options": [
          {
            "key": "A",
            "text": "350 Ruku’"
          },
          {
            "key": "B",
            "text": "554 Ruku’"
          },
          {
            "key": "C",
            "text": "114 Ruku’"
          },
          {
            "key": "D",
            "text": "30 Ruku’"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "Menurut pendapat Imam Az-Zarkasy dan Imam As-Syuyuthi dalam kitab Al-Itqon,bahwa Al-Qur’an memempunyai nama lain,yaitu :",
        "options": [
          {
            "key": "A",
            "text": "55 nama lain"
          },
          {
            "key": "B",
            "text": "100 nama lain"
          },
          {
            "key": "C",
            "text": "99 nama lain"
          },
          {
            "key": "D",
            "text": "semuanya salah"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 8,
        "text": "البرهان  artinya adalah :",
        "options": [
          {
            "key": "A",
            "text": "Petunjuk"
          },
          {
            "key": "B",
            "text": "Bukti"
          },
          {
            "key": "C",
            "text": "Yang diturunkan"
          },
          {
            "key": "D",
            "text": "Pemberi peringatan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "الفرقان   artinya adalah :",
        "options": [
          {
            "key": "A",
            "text": "Petunjuk"
          },
          {
            "key": "B",
            "text": "Bukti"
          },
          {
            "key": "C",
            "text": "Yang diturunkan"
          },
          {
            "key": "D",
            "text": "Pembeda"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "التنزيل  artinya adalah :",
        "options": [
          {
            "key": "A",
            "text": "Petunjuk"
          },
          {
            "key": "B",
            "text": "Bukti"
          },
          {
            "key": "C",
            "text": "Yang diturunkan"
          },
          {
            "key": "D",
            "text": "Pemberi peringatan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 11,
        "text": "Al-Qur’an diturunkan sebagai Petunjuk, Pedoman, dan Rahmat bagi yang meyakininya, Hal ini sebagai :",
        "options": [
          {
            "key": "A",
            "text": "Penyataan Al-Qur’an."
          },
          {
            "key": "B",
            "text": "Fungsi Al-Qur’an"
          },
          {
            "key": "C",
            "text": "Nama lain Al-Qur’an"
          },
          {
            "key": "D",
            "text": "Sejarah Al-Qur’an"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "(ذالك الكباب لاريب فيه هدا للمتقين  (البقرة\nAyat diatas merupakan dalil Al-Qur’an sebagai :",
        "options": [
          {
            "key": "A",
            "text": "Penyataan Al-Qur’an"
          },
          {
            "key": "B",
            "text": "Fungsi Al-Qur’an"
          },
          {
            "key": "C",
            "text": "Nama lain Al-Qur’an"
          },
          {
            "key": "D",
            "text": "Sejarah Al-Qur’an."
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Al-Qur’an berfungsi sebagai Penawar bagi segala penyakit.",
        "options": [
          {
            "key": "A",
            "text": "Alburhan"
          },
          {
            "key": "B",
            "text": "Alhuda"
          },
          {
            "key": "C",
            "text": "Alkitab"
          },
          {
            "key": "D",
            "text": "Asy-Syifa’"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 14,
        "text": "Al-Busyro Artinya adalah :",
        "options": [
          {
            "key": "A",
            "text": "Penawar bagi segala penyakit"
          },
          {
            "key": "B",
            "text": "Petunjuk dalam kehidupan"
          },
          {
            "key": "C",
            "text": "Penerang dalam kehidupan."
          },
          {
            "key": "D",
            "text": "Khabar gembira"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "text": "“ Katakanlah,Al-Qur’an adalah Petujuk dan Penyembuh bagi Orang-orang yang beriman “",
        "options": [
          {
            "key": "A",
            "text": "QS,,usshilat 44"
          },
          {
            "key": "B",
            "text": "QS,,Fusshilat 43"
          },
          {
            "key": "C",
            "text": "QS,, Fusshilat 34"
          },
          {
            "key": "D",
            "text": "QS,, Fusshilat 48"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Berikut ini Arti Hadis secara bahasa, kecuali ….",
        "options": [
          {
            "key": "A",
            "text": "Baru"
          },
          {
            "key": "B",
            "text": "Berita"
          },
          {
            "key": "C",
            "text": "Cerita"
          },
          {
            "key": "D",
            "text": "Lama"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 17,
        "text": "Hadits menurut Istilah adalah :",
        "options": [
          {
            "key": "A",
            "text": "Perkataan Nabi"
          },
          {
            "key": "B",
            "text": "Seruan Nabi"
          },
          {
            "key": "C",
            "text": "Segala sesuatu yang bersumber dari Nabi SAW"
          },
          {
            "key": "D",
            "text": "Semuanya salah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 18,
        "text": "Berikut ini adalah fungsi Hadis, kecuali  …",
        "options": [
          {
            "key": "A",
            "text": "Penjelas terhadap Al Qur’an"
          },
          {
            "key": "B",
            "text": "Menghilangkan sebagian hukum dalam Al Qur’an"
          },
          {
            "key": "C",
            "text": "Menetapkan hukum – hukum yang tidak disebut dalam Al Qur’an"
          },
          {
            "key": "D",
            "text": "Pendukung terhadap ketetapan Al-Qur’an"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "Hadist terdiri dari…",
        "options": [
          {
            "key": "A",
            "text": "Satu unsur"
          },
          {
            "key": "B",
            "text": "Lima Unsur"
          },
          {
            "key": "C",
            "text": "EmpatUnsur"
          },
          {
            "key": "D",
            "text": "TigaUnsur"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 20,
        "text": "Salah satu dari Unsur Hadist Adalah :",
        "options": [
          {
            "key": "A",
            "text": "Tulisan"
          },
          {
            "key": "B",
            "text": "Bacaan"
          },
          {
            "key": "C",
            "text": "Sanad"
          },
          {
            "key": "D",
            "text": "Semuanya benar"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Orang yang menyampaikan Hadits.",
        "options": [
          {
            "key": "A",
            "text": "Rawi"
          },
          {
            "key": "B",
            "text": "Matan"
          },
          {
            "key": "C",
            "text": "Sanad"
          },
          {
            "key": "D",
            "text": "Shokhih"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 22,
        "text": "Orang yang meriwayatkan Hadits.",
        "options": [
          {
            "key": "A",
            "text": "Rawi"
          },
          {
            "key": "B",
            "text": "Matan"
          },
          {
            "key": "C",
            "text": "Sanad"
          },
          {
            "key": "D",
            "text": "Shokhih"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 23,
        "text": "Isi dari sebuah  Hadits.",
        "options": [
          {
            "key": "A",
            "text": "Rawi"
          },
          {
            "key": "B",
            "text": "Matan"
          },
          {
            "key": "C",
            "text": "Sanad"
          },
          {
            "key": "D",
            "text": "Shokhih"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "text": "Unsur Hadits terdiri dari :",
        "options": [
          {
            "key": "A",
            "text": "Rawi"
          },
          {
            "key": "B",
            "text": "Matan"
          },
          {
            "key": "C",
            "text": "Sanad"
          },
          {
            "key": "D",
            "text": "Semuanya benar"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 25,
        "text": "Untuk membatasi Keumuman Al-Qur’an :",
        "options": [
          {
            "key": "A",
            "text": "Sumber Hadits"
          },
          {
            "key": "B",
            "text": "Kedudukan Hadits"
          },
          {
            "key": "C",
            "text": "Keutamaan Hadits"
          },
          {
            "key": "D",
            "text": "Fungsi Hadits"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 26,
        "text": "Sebagai Sumber Hukum kedua setelah Al-Qur’an.:",
        "options": [
          {
            "key": "A",
            "text": "Sumber Hadits"
          },
          {
            "key": "B",
            "text": "Kedudukan Hadits"
          },
          {
            "key": "C",
            "text": "Keutamaan Hadits"
          },
          {
            "key": "D",
            "text": "Fungsi Hadits"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 27,
        "text": "عن ابي سليما ن مالك بن الحو يرث قال قال رسول الله صلى الله عليه وسلم          وصلوا كما رايتمو ني اصلي\nKalimat yang bergaris menunjukan :",
        "options": [
          {
            "key": "A",
            "text": "Rawi"
          },
          {
            "key": "B",
            "text": "Matan"
          },
          {
            "key": "C",
            "text": "Sanad"
          },
          {
            "key": "D",
            "text": "Hadits Nabi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 28,
        "text": "عن ابي سليما ن مالك بن الحو يرث قال قال رسول الله صلى الله عليه وسلم          وصلوا كما رايتمو ني اصلي\nKalimat yang bergaris menunjukan",
        "options": [
          {
            "key": "A",
            "text": "Rawi"
          },
          {
            "key": "B",
            "text": "Matan"
          },
          {
            "key": "C",
            "text": "Sanad"
          },
          {
            "key": "D",
            "text": "Kesengajaan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 29,
        "text": "عن ابي سليما ن مالك بن الحو يرث قال قال رسول الله صلى الله عليه وسلم          وصلوا كما رايتمو ني اصلي    رواه  البخا ري\nKalimat yang bergaris menunjukan",
        "options": [
          {
            "key": "A",
            "text": "Rawi"
          },
          {
            "key": "B",
            "text": "Matan"
          },
          {
            "key": "C",
            "text": "Sanad"
          },
          {
            "key": "D",
            "text": "Semuanya benar"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 30,
        "text": "Sebagai Warisan Hidup Rasulullah.",
        "options": [
          {
            "key": "A",
            "text": "Unsur Hadits"
          },
          {
            "key": "B",
            "text": "Matan Hadits"
          },
          {
            "key": "C",
            "text": "Kedudukan Hadits"
          },
          {
            "key": "D",
            "text": "Fungsi Hadits"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 31,
        "text": "Orang yang mengotori dirinya adalah orang yang menjerumuskan diri kedalam kedalam perbuatan      perbuatan maksiat dan meninggalkan ketaatan kepada Allah SWT,\nHal ini menunjukkan :",
        "options": [
          {
            "key": "A",
            "text": "Perbuatan Tercela"
          },
          {
            "key": "B",
            "text": "Perbuatan yang di benci Allah SWT"
          },
          {
            "key": "C",
            "text": "Perbuatan yang mengada ada"
          },
          {
            "key": "D",
            "text": "Pebuatan baik"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 32,
        "text": "Q.S As-Syam termasuk surat yang diturunkan……..Rasulullah melakukan Hijrah,\nSurat ini merupakan surt yang ke 91 yang diturunkan setelah QS…….",
        "options": [
          {
            "key": "A",
            "text": "Setelah"
          },
          {
            "key": "B",
            "text": "Sebelum"
          },
          {
            "key": "C",
            "text": "QS Al-‘Alaq"
          },
          {
            "key": "D",
            "text": "QS,Qodr"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 33,
        "text": "Umar selalu tekun mempelajari Al-Qur’an dan Hadits,ia selalu mempelajari ayat ayat qouniyah ( tentang alam )serta selalu menekuni keterampilan tertentu sebagai bekal menghadapi masa depan,\nHal ini bahwa uamar selalu :",
        "options": [
          {
            "key": "A",
            "text": "Menjauhi ajaran Al-Qur’an"
          },
          {
            "key": "B",
            "text": "Menerapkan ajaran Al-Qur’an dalam kehidupan"
          },
          {
            "key": "C",
            "text": "Menerapkan ajaran Hadits dalam kehidupan."
          },
          {
            "key": "D",
            "text": "Semuanya benar"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 34,
        "text": "Dalam kehidupan bermasyarakat,Al-Qur’an dan Hadits  harus diterapkan oleh anggota masyarakat dalam kehidupan sehari-hari antara lain :",
        "options": [
          {
            "key": "A",
            "text": "Tidak mau berkorban dalam masyarakat."
          },
          {
            "key": "B",
            "text": "Selalau mengikutu kehendak sendiri."
          },
          {
            "key": "C",
            "text": "Berperan aktif dalam kehidupan masyarakat selam tidak melanggar aturan Islam."
          },
          {
            "key": "D",
            "text": "Menjaga kerukunan dan suka menolong."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 35,
        "text": "Allah SWT Selalu bersumpah dengan waktu,artinya hidup didunia ini hanya semetara dan singkat sehingga hendaklah kita memanfaatkan waktu untuk senantiasa taat kepada Allah SWT dan mengerjakan amal sholeh :",
        "options": [
          {
            "key": "A",
            "text": "Menerapkan Kandungan QS,As-Syam.ayat 1-10"
          },
          {
            "key": "B",
            "text": "Menerapkan Kandungan QS,Al-Imron ayat 190"
          },
          {
            "key": "C",
            "text": "Mengabaikan ajaran Al-Qur’an"
          },
          {
            "key": "D",
            "text": "Besikap masa bodo"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 36,
        "text": "”Sesungguhnya dalam Penciptaan langit dan Bumi dan Pergantian Malam dan Siang terdapat Tanda-tanda (Kebesaran Allah) bagi Orang-orang yang berakal”.",
        "options": [
          {
            "key": "A",
            "text": "Pernyataan Kekuasaan dan Rakhmat Allah SWT."
          },
          {
            "key": "B",
            "text": "Terjemahan QS,As-Syam."
          },
          {
            "key": "C",
            "text": "Terjemahan Hadits Bukhori."
          },
          {
            "key": "D",
            "text": "Terjemahan QS Al-Imron 190."
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 37,
        "text": "عن ابي هريرة رضي الله عنه عن الني صلئ الله عليه وسلم قال لم قضئ الله الحق كتب في كتا به فهو عنده فوق العرش : ان رحمتى غلبت غضبيز",
        "options": [
          {
            "key": "A",
            "text": "Hadits Riwayat Imam Muslim"
          },
          {
            "key": "B",
            "text": "Hadits Riwayat Imam Bukhori"
          },
          {
            "key": "C",
            "text": "Tentang Rahmat dan Kekuasaan Allah SWT"
          },
          {
            "key": "D",
            "text": "Tentang Bersyukur"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 38,
        "text": "Dalam pergantian malam dan siang,musim panas dan musim dingin,kemarau dan hujan,terdapat bukti kebesaran Allah SWT.Allah Menyebutnya :",
        "options": [
          {
            "key": "A",
            "text": "Ulul Albab"
          },
          {
            "key": "B",
            "text": "Orang yang selalu merenung Kebesaran Allah SWT"
          },
          {
            "key": "C",
            "text": "Ulul Abshor"
          },
          {
            "key": "D",
            "text": "Ulul Ambiya"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 39,
        "text": "Kita aharus ta’at kepada Akkah SWT,Dengan senantiasa menjalankan perintahNYA,baik untuk melakukan dan meninggalkannya,Dengan demikian Allah akan mengilhamkan kepada kita jalan ketaqwaan bukan jalan kefasikan,Pernyataan Allah :",
        "options": [
          {
            "key": "A",
            "text": "والشمس وضحها"
          },
          {
            "key": "B",
            "text": "فاالهمها فجورها"
          },
          {
            "key": "C",
            "text": "من زكا ها"
          },
          {
            "key": "D",
            "text": "وتقوا ها"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 40,
        "text": "Dalam Kehidupan Berbangsa dan Bernegara,Ajaran Al-Qur’an dan Hadits harus diterapkan oleh setiap Warga Negara dengan cara :",
        "options": [
          {
            "key": "A",
            "text": "Berperan aktif dalam menjaga Persatuan dan Kesatuan Bangsa dan Negara"
          },
          {
            "key": "B",
            "text": "Melaksanakan Kewajiban sebagai Warga Negara"
          },
          {
            "key": "C",
            "text": "Tidak mendukung Program Pemerintah"
          },
          {
            "key": "D",
            "text": "Mendukung Program pemerintah walaupun Tidak Sesuai dengan Ajaran Islam"
          }
        ],
        "answerKey": "A"
      }
    ]
  },
  {
    "id": "exam-qh-viii",
    "code": "ASAS-QH-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Al-Qur’an Hadits Kelas VIII",
    "subject": "Al-Qur’an Hadits",
    "classLevel": "VIII",
    "scheduleText": "Senin, 23 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "dayOrder": 1,
    "dayLabel": "Hari Ke-1 • Senin, 23 Nov 2026",
    "sessionOrder": 2,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Secara bahasa, mad “Iwadh” artinya adalah ….",
        "options": [
          {
            "key": "A",
            "text": "Lunak"
          },
          {
            "key": "B",
            "text": "Pembeda"
          },
          {
            "key": "C",
            "text": "Pengganti"
          },
          {
            "key": "D",
            "text": "Hubungan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Perhatikan ayat di bawah ini!\nوَرَأَيْتَ النّاس يَدْخُلُوْنَ فِىْ دِيْنِ اللّهِ أَفْوَاجًا\nPotongan ayat di atas mengandung  hukum bacaan mad iwadh karena....",
        "options": [
          {
            "key": "A",
            "text": "Mad thabi’i  diikuti dengan huruf berharakat sukun"
          },
          {
            "key": "B",
            "text": "Di akhir ayat terdapat fathatain  yang diikuti alif dan di baca waqaf"
          },
          {
            "key": "C",
            "text": "Terjadi ha’ dhomir"
          },
          {
            "key": "D",
            "text": "Mad thabi’i terletak di  akhir ayat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "Panjang hukum bacaan Mad ‘Iwadh adalah ....",
        "options": [
          {
            "key": "A",
            "text": "satu alif"
          },
          {
            "key": "B",
            "text": "Tiga alif"
          },
          {
            "key": "C",
            "text": "Dua alif"
          },
          {
            "key": "D",
            "text": "Empat alif"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 4,
        "text": "Apabila ada fathah tanwin yang diikuti alif dan dibaca waqaf (berhenti) pada akhir kalimat, maka hukum bacaannya disebut ….",
        "options": [
          {
            "key": "A",
            "text": "Mad iwadh"
          },
          {
            "key": "B",
            "text": "Mad ’aridh lissukun"
          },
          {
            "key": "C",
            "text": "Mad layyin"
          },
          {
            "key": "D",
            "text": "Mad Thabi’i"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 5,
        "text": "Mad layyin terjadi apabila sesudah huruf berbaris fathah diikuti oleh huruf … dan ...berbaris sukun, setelahnya berupa huruf  hidup yang dibaca waqaf (berhenti).",
        "options": [
          {
            "key": "A",
            "text": "اdan و"
          },
          {
            "key": "B",
            "text": "ا danي"
          },
          {
            "key": "C",
            "text": "ي danو"
          },
          {
            "key": "D",
            "text": "ف danي"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Perhatikan lafal-lafal berikut!\n1)عَزِيْزًا4)هَذَا الْبَيْتِ\n2)مِنْ خَوْفٍ5)وَالَّصَّيْفِ\n3)مُبِيْنًا\nBerdasarkan lafal-lafal di atas, yang bukan merupakan contoh hukum bacaan mad layyin adalah....",
        "options": [
          {
            "key": "A",
            "text": "1 dan 3"
          },
          {
            "key": "B",
            "text": "1 dan 4"
          },
          {
            "key": "C",
            "text": "1 dan 5"
          },
          {
            "key": "D",
            "text": "3 dan 2"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 7,
        "text": "Secara bahasa “Aridh” artinya ….",
        "options": [
          {
            "key": "A",
            "text": "Baru atau  Tiba-tiba"
          },
          {
            "key": "B",
            "text": "Lunak"
          },
          {
            "key": "C",
            "text": "Tebal"
          },
          {
            "key": "D",
            "text": "Pengganti"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 8,
        "text": "Ketika membaca Al - Qur'an,  Azka menemukan lafal  بَصيْراً  Lafal tersebut merupakan contoh hukum bacaan ….",
        "options": [
          {
            "key": "A",
            "text": "Mad aridh lissukun"
          },
          {
            "key": "B",
            "text": "Mad Iwadh"
          },
          {
            "key": "C",
            "text": "Mad Badal"
          },
          {
            "key": "D",
            "text": "Mad Layyin"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "Apabila ada mad thabi’i  bertemu huruf hidup yang dibaca  waqaf (berhenti) di sebut ....",
        "options": [
          {
            "key": "A",
            "text": "mad Iwadh"
          },
          {
            "key": "B",
            "text": "mad Layyin"
          },
          {
            "key": "C",
            "text": "mad Badal"
          },
          {
            "key": "D",
            "text": "mad ‘Aridh lissukun"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "Panjang bacaan mad ‘aridh lissukun adalah ….",
        "options": [
          {
            "key": "A",
            "text": "Harus dipanjangkan 6 harakat"
          },
          {
            "key": "B",
            "text": "Harus dipanjangkan 4 harakat"
          },
          {
            "key": "C",
            "text": "Harus dipanjangkan 2 harakat"
          },
          {
            "key": "D",
            "text": "Boleh dipanjangkan 2, 4 atau 6 harakat"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 11,
        "text": "Infak berarti  mengeluarkan  sebagian harta untuk kepentingan  yang diperintahkan ajaran Islam. jika zakat ada nisabnya. Infak tidak mengenal nisab. Infak dikeluarkan oleh setiap  orang  yang beriman dalam keadaan ....",
        "options": [
          {
            "key": "A",
            "text": "Lapang maupun dalam keadaan  sempit"
          },
          {
            "key": "B",
            "text": "Akan meninggal dunia"
          },
          {
            "key": "C",
            "text": "Bergelimangan harta"
          },
          {
            "key": "D",
            "text": "Terdesak saja"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 12,
        "text": "Perhatikan ayat ini!\nفَأَمَّا الْاِنْسَانُ اِذَا مَا ا بْتَلَه  رَبُّهُ فَأَكْرَمَهُ وَنَعَّمَهُ فَيَقُوْلُ رَبِّى  ....\nLanjutan ayat di atas adalah ....",
        "options": [
          {
            "key": "A",
            "text": "أَهَا نَنِ"
          },
          {
            "key": "B",
            "text": "أَكْرَمَن"
          },
          {
            "key": "C",
            "text": "الْيَتِيْم"
          },
          {
            "key": "D",
            "text": "طَعَامَ الْمِسْكِيْن"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "وَأَمَّا الْاِنْسَانُ اِذَا مَا ا بْتَلَهُ فَقَدَرَ عَلَيْهِ رِزْقَهُ فَيَقُوْلُ رَبِّى  ...\nLanjutan ayat di atas adalah ....",
        "options": [
          {
            "key": "A",
            "text": "أَهَا نَنِ"
          },
          {
            "key": "B",
            "text": "أَكْرَمَن"
          },
          {
            "key": "C",
            "text": "الْيَتِيْم"
          },
          {
            "key": "D",
            "text": "طَعَامَ الْمِسْكِيْن"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 14,
        "text": "Lafal pada  QS. Al- Fajr “ فَاَ كْرَمَهُ “  artinya adalah ....",
        "options": [
          {
            "key": "A",
            "text": "lalu dia memuliakannya"
          },
          {
            "key": "B",
            "text": "menghinakan"
          },
          {
            "key": "C",
            "text": "dan dia memberi kesenangan"
          },
          {
            "key": "D",
            "text": "apabila dia mengujinya"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 15,
        "text": "Lafal  “ \" وَنَعَّمَهُ artinya adalah ....",
        "options": [
          {
            "key": "A",
            "text": "dan dia memberi kesengsaran"
          },
          {
            "key": "B",
            "text": "dan manusia"
          },
          {
            "key": "C",
            "text": "dan dia memberi  kesenangan"
          },
          {
            "key": "D",
            "text": "dia membatasi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 16,
        "text": "lafal di bawah ini yang memiliki arti  “rezekinya” adalah....",
        "options": [
          {
            "key": "A",
            "text": "طَعَامٌ"
          },
          {
            "key": "B",
            "text": "وَنَعَّمَه"
          },
          {
            "key": "C",
            "text": "رِزْقَهُ"
          },
          {
            "key": "D",
            "text": "فَأَكْرَمَهُ"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 17,
        "text": "Perhatikan ayat ini! كَلَّا بَلْ لَا تُكْرِمُوْنَ الْيَتِيْمَ dalam ayat ini terkandung makna perintah untuk ....",
        "options": [
          {
            "key": "A",
            "text": "Memberi makan orang miskin"
          },
          {
            "key": "B",
            "text": "Memuliakan anak yatim"
          },
          {
            "key": "C",
            "text": "Mengerjakan sholat"
          },
          {
            "key": "D",
            "text": "Memuliakan anak yang shaleh"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Perhatikan ayat ini!\n.... يا أَيُّهَا الَّذِينَ  أَمَنُوْا\nLanjutan ayat pada QS. Al-Baqarah ayat 254 di atas adalah ....",
        "options": [
          {
            "key": "A",
            "text": "اسْتَعِيْنُوابِالصَّبْرِ"
          },
          {
            "key": "B",
            "text": "ادْخُلُوْا فِى السِّلْمِ"
          },
          {
            "key": "C",
            "text": "اَنْفِقُوْا مِمَّارَزَقْنَكُمْ"
          },
          {
            "key": "D",
            "text": "اِذَا قِيْلَ لَكُمْ"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 19,
        "text": "Perhatikan ayat berikut ini!\nاَنْفِقُوْا  مِمَّارَزَقْنَكُمْ\nTerjemahan  potongan  ayat  di atas adalah....",
        "options": [
          {
            "key": "A",
            "text": "Wahai orang beriman"
          },
          {
            "key": "B",
            "text": "Infakkanlah sebagian dari rezeki yang telah kami berikan kepadamu"
          },
          {
            "key": "C",
            "text": "Ketika tidak ada jual beli"
          },
          {
            "key": "D",
            "text": "Tidak ada lagi syafaat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 20,
        "text": "Perhatikan ayat ini!\nوَالْكَافِرُوْنَ هُمُ الظَّالِمُوْنَ\nTerjemahan  potongan  ayat  di atas adalah....",
        "options": [
          {
            "key": "A",
            "text": "Dan orang-orang kafir itulah orang-orang yang rugi"
          },
          {
            "key": "B",
            "text": "Dan orang-orang  kafir itulah orang yang dzalim"
          },
          {
            "key": "C",
            "text": "Dan orang-orang  kafir itulah orang yang dilaknat"
          },
          {
            "key": "D",
            "text": "Dan orang-orang kafir itulah orang yang ingkar"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 21,
        "text": "Arti lafal “سَبْعَ سَنَابِلَ “  artinya adalah ....",
        "options": [
          {
            "key": "A",
            "text": "Tujuh tangkai"
          },
          {
            "key": "B",
            "text": "Enam tangkai"
          },
          {
            "key": "C",
            "text": "Lima tangkai"
          },
          {
            "key": "D",
            "text": "Empat tangkai"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 22,
        "text": "Salah satu amalan yang dido’akan para malaikat apabila dikerjakan adalah ....",
        "options": [
          {
            "key": "A",
            "text": "Bekerja"
          },
          {
            "key": "B",
            "text": "Puasa"
          },
          {
            "key": "C",
            "text": "Zakat"
          },
          {
            "key": "D",
            "text": "Infak"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 23,
        "text": "Perumpamaan orang yang menginfakkan hartanya  di jalan Allah  SWT. bagaikan sebutir  biji yang menumbuhkan ....tangkai.",
        "options": [
          {
            "key": "A",
            "text": "Dua"
          },
          {
            "key": "B",
            "text": "Lima"
          },
          {
            "key": "C",
            "text": "Tujuh"
          },
          {
            "key": "D",
            "text": "Seratus"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Perhatikan ayat ini!\nمَثَلُ الَّذِيْنَ يُنْفِقُوْنَ أَمْوَالَهُمْ ....\nLanjutan ayat pada QS. Al-Baqarah ayat 261 di atas adalah ....",
        "options": [
          {
            "key": "A",
            "text": "فىِ سَبِيْلِ الله"
          },
          {
            "key": "B",
            "text": "سَبْعَ سَنَابِلَ"
          },
          {
            "key": "C",
            "text": "أَنْبَتَتْ"
          },
          {
            "key": "D",
            "text": "اَنْفِقُوْا  مِمَّارَزَقْنَكُمْ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 25,
        "text": "Lafal pada  QS. Al- Baqarah 261 “ اَنْبَتَتْ “  artinya adalah ....",
        "options": [
          {
            "key": "A",
            "text": "Dilipatkan"
          },
          {
            "key": "B",
            "text": "Menumbuhkan"
          },
          {
            "key": "C",
            "text": "Di jalan Allah"
          },
          {
            "key": "D",
            "text": "Hartanya"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-qh-ix",
    "code": "ASAS-QH-IX",
    "title": "Asesmen Sumatif Akhir Semester — Al-Qur’an Hadits Kelas IX",
    "subject": "Al-Qur’an Hadits",
    "classLevel": "IX",
    "scheduleText": "Senin, 23 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "dayOrder": 1,
    "dayLabel": "Hari Ke-1 • Senin, 23 Nov 2026",
    "sessionOrder": 2,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Perhatikan huruf-huruf di bawah ini!\n( ح – ي – ط – هـ – ر )\nHuruf-huruf di atas adalah termasuk huruf mad laazim ...",
        "options": [
          {
            "key": "A",
            "text": "Mutsaqqal harfi"
          },
          {
            "key": "B",
            "text": "Mukhaffaf harfi"
          },
          {
            "key": "C",
            "text": "Mutsaqqal kalimi"
          },
          {
            "key": "D",
            "text": "Mukhaffaf kalimi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Pada saat tes lisan baca tulis Al-Quran Elfa membaca ayat demi ayat dengan tartil dan fasih sesuai makharijul huruf dan tajwidnya. Ketika membaca ayat الۤمّۤ bacaan lam diidghamkan kepada huruf mim. Mad ia panjangkan secara sempurna. Hal ini karena pada bacaan tersebut terdapat hukum bacaan ...",
        "options": [
          {
            "key": "A",
            "text": "Mukhaffaf harfi"
          },
          {
            "key": "B",
            "text": "Mutsaqqal harfi"
          },
          {
            "key": "C",
            "text": "Mutsaqqal kalimi"
          },
          {
            "key": "D",
            "text": "Mukhaffaf kalimi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "Perhatikan pernyataan di bawah ini!\n1. Bacaan mad thabi'i\n2. Bertemu dengan huruf berharakat sukun4. Berada di lain kata6. Panjang bacaan 3 alif\nBertemu dengan huruf bertasydid5. Berada dalam satu kata7. Panjang bacaan 3 harakat\nPernyataan yang menunjukkan pengertian mad laazim mutsaqqal kalimi adalah ...",
        "options": [
          {
            "key": "A",
            "text": "1-2-4-6"
          },
          {
            "key": "B",
            "text": "1-4-5-7"
          },
          {
            "key": "C",
            "text": "1-3-5-6"
          },
          {
            "key": "D",
            "text": "1-2-5-7"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 4,
        "text": "Perhatikan pernyataan berikut ini!\nNo\nPernyataan\nDari pernyataan di samping, mad laazim mukhaffaf kalimi terdapat pada nomor ...",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Perhatikan ayat-ayat berikut!\n(1) يٰسٓ   (2) حٰمٓ   (3) طٰهٰ   (4) الۤرٰ\nAyat-ayat di atas yang merupakan contoh mad laazim mukhaffaf harfi (atau bukan mutsaqqal harfi) terdapat pada nomor ...",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Ketika belajar Al-Quran Hadis di kelas, Ustadz Agus menugaskan Adhwa untuk membaca Al-Quran dengan tartil. Adhwa membaca Al-Quran sangat bagus sesuai makhrajnya, ketika membaca lafadz yang digarisbawahi pada ayat dibawah ini, bacaannya dipanjangkan sebanyak enam harakat. Hukum bacaannya adalah ....\nأَثَمَّ إِذَا مَاوَقَعَ ءَامَنتُم بِهِ ءَآلْئَانَ وَقَدْ كُنتُم بِهِ تَسْتَعْجِلُونَ",
        "options": [
          {
            "key": "A",
            "text": "Mad laazim mukhaffaf harfi"
          },
          {
            "key": "B",
            "text": "Mad laazim mutsaqqal harfi"
          },
          {
            "key": "C",
            "text": "Mad laazim mukhaffaf kalimi"
          },
          {
            "key": "D",
            "text": "Mad laazim mutsaqqal kalimi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 7,
        "text": "Perhatikan ayat berikut ini!\nفَإِذَا جَآءَتِ الصَّاخَّةُ\nLafadz yang bergaris bawah  di atas adalah  ....",
        "options": [
          {
            "key": "A",
            "text": "Mad laazim mukhaffaf harfi"
          },
          {
            "key": "B",
            "text": "Mad laazim mutsaqqal harfi"
          },
          {
            "key": "C",
            "text": "Mad laazim mukhaffaf kalimi"
          },
          {
            "key": "D",
            "text": "Mad laazim mutsaqqal kalimi"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 8,
        "text": "Perhatikan potongan ayat di bawah ini!\nالۤمّۤصۤ\nAyat tersebut merupakan contoh bacaan ....",
        "options": [
          {
            "key": "A",
            "text": "Mad laazim mukhaffaf kalimi"
          },
          {
            "key": "B",
            "text": "Mad laazim mutsaqqal kalimi"
          },
          {
            "key": "C",
            "text": "Mad laazim mukhaffaf harfi"
          },
          {
            "key": "D",
            "text": "Mad laazim mutsaqqal harfi"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 9,
        "text": "Perhatikan lafadz berikut ini!\nيَتَحَآجُّونَ\nLafadz yang bergarisbawah di atas cara membacanya adalah ....",
        "options": [
          {
            "key": "A",
            "text": "Dua harakat"
          },
          {
            "key": "B",
            "text": "Empat harakat"
          },
          {
            "key": "C",
            "text": "Lima harakat"
          },
          {
            "key": "D",
            "text": "Enam harakat"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "Perhatikan lafadz di bawah ini!\n1.وَالصَّآفَّاتِ2مُدْهَآمَّتَانِ3. يَتَحَآجُّونَ4. خُلِقَتْ\nPada lafadz di atas, yang bukan contoh mad laazim mutsaqqal kalimi adalah ....",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 11,
        "text": "Cermati ayat-ayat di bawah ini!\nوَمَآ اَدْرٰىكَ مَا سِجِّيْنٌۗ -  كِتٰبٌ مَّرْقُوْمٌۗ -   وَيْلٌ يَّوْمَىِٕذٍ لِّلْمُكَذِّبِيْنَۙ\nAyat yang mendahului rangkaian ayat di atas adalah ...",
        "options": [
          {
            "key": "A",
            "text": "كَلآَّإِنَّ الْفُجَّارِ لَفِي سِجِّين"
          },
          {
            "key": "B",
            "text": "وَمَايُكَذِّبُ بِهِ إِلاَّ كُلُّ مُعْتَدٍ أَثِيمٍ"
          },
          {
            "key": "C",
            "text": "الَّذِينَ يُكَذِّبُونَ بِيَوْمِ الدِّين"
          },
          {
            "key": "D",
            "text": "أَلاَيَظُنُّ أُوْلَئِكَ أَنَّهُم مَّبْعُوثُونَ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 12,
        "text": "Fauzan  membaca QS al-Muthaffifin sambil merenungi maknanya, dia mengingat terjemah لِلْمُطَفِّفِينَ lawan kata dari terjemah tersebut adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Orang-orang yang jujur"
          },
          {
            "key": "B",
            "text": "Orang-orang yang curang"
          },
          {
            "key": "C",
            "text": "Orang-orang yang munafik"
          },
          {
            "key": "D",
            "text": "Orang-orang yang durhaka"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 13,
        "text": "Ammalia berdiskusi dengan teman kelompoknya di dalam kelas tentang orang-orang yang curang dan durhaka, ia lalu membuka al-Quran surat al-Muthaffifin. Saat sampai ayat كِتٰبٌ مَّرْقُوْمٌۙ   ia bertanya kepada teman kelompoknya. Arti ayat tersebut adalah ...",
        "options": [
          {
            "key": "A",
            "text": "Buku catatam amal"
          },
          {
            "key": "B",
            "text": "Buku yang disembunyikan"
          },
          {
            "key": "C",
            "text": "Buku catatan timbangan"
          },
          {
            "key": "D",
            "text": "Buku yang dilindungi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 14,
        "text": "Allah memberikan ancaman dengan sangat keras dalam QS al-Muthaffifin yaitu dengan ditandai lafadz ...",
        "options": [
          {
            "key": "A",
            "text": "الْجَحِيْمِ"
          },
          {
            "key": "B",
            "text": "سِجِّيْنٍۗ"
          },
          {
            "key": "C",
            "text": "مُعْتَدٍ أَثِيمٍ"
          },
          {
            "key": "D",
            "text": "وَيْلٌ"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "text": "Perhatikan kalimat berikut ini!\n“dan apabila mereka menakar atau menimbang untuk orang lain, mereka mengurangi”\nMerupakan arti dari QS al-Muthaffifin ayat ....",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 16,
        "text": "Dalam praktik jual beli terkadang banyak pedagang yang sengaja merekayasa timbangan yang digunakan untuk melayani pembeli dengan tujuan untuk mendapatkan keuntungan yang sebesar-besarnya. Mereka tidak peduli pada kerugian yang dialami pembelinya, padahal dengan jelasnya Allah mengatakan \"celakalah bagi orang-orang yang curang\". Hal itu terdapat dalam QS ....",
        "options": [
          {
            "key": "A",
            "text": "Al-Muthaffifin ayat 1"
          },
          {
            "key": "B",
            "text": "Al-Muthaffifin ayat 2"
          },
          {
            "key": "C",
            "text": "Al-Muthaffifin ayat 3"
          },
          {
            "key": "D",
            "text": "Al-Muthaffifin ayat 4"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 17,
        "text": "Perhatikan ayat di bawah ini!\nوَلَا تَقْرَبُوا۟ مَالَ ٱلْيَتِيمِ إِلَّا بِٱلَّتِى هِىَ أَحْسَنُ حَتَّىٰ يَبْلُغَ أَشُدَّهُۥ ۖ وَأَوْفُوا۟ ٱلْكَيْلَ وَٱلْمِيزَانَ بِٱلْقِسْطِ\nArti dari lafal yang bergaris bawah adalah ….",
        "options": [
          {
            "key": "A",
            "text": "Sempurnakanlah takaran dan timbangan"
          },
          {
            "key": "B",
            "text": "Dan penuhilah janji  Allah"
          },
          {
            "key": "C",
            "text": "Sesuai kesanggupan"
          },
          {
            "key": "D",
            "text": "Janganlah kamu mendekati harta anak yatim"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Cermati kelompok ayat di bawah ini!\n- وَلَا تَقْرَبُوْا مَالَ الْيَتِيْمِ\n- وَأَوْفُوا۟ ٱلْكَيْلَ وَٱلْمِيزَانَ بِٱلْقِسْطِ\n- وَإِذَا قُلْتُمْ فَٱعْدِلُوا\n- وَبِعَهْدِ ٱللَّهِ أَوْفُوا\nLafal yang menunjukkan terjemah “Apabila kamu berbicara, bicaralah sejujurnya” adalah .…",
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 19,
        "text": "Perhatikan ayat berikut ini!\nوَلَا تَقْرَبُوا۟ مَالَ ٱلْيَتِيمِ إِلَّا بِٱلَّتِى هِىَ أَحْسَنُ حَتَّىٰ يَبْلُغَ أَشُدَّهُۥ ۖ وَأَوْفُوا۟ ٱلْكَيْلَ وَٱلْمِيزَانَ بِٱلْقِسْطِ\nTerjemah dari ayat yang bergaris bawah di atas adalah ....",
        "options": [
          {
            "key": "A",
            "text": "Dan penuhilah janji  Allah"
          },
          {
            "key": "B",
            "text": "Dan sempurnakanlah takaran"
          },
          {
            "key": "C",
            "text": "Dan janganlah kamu mendekati harta anak yatim"
          },
          {
            "key": "D",
            "text": "Bicaralah sejujurnya"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 20,
        "text": "Perhatikan ayat di bawah ini!\nوَلَا تَقْرَبُوا۟ مَالَ ٱلْيَتِيمِ إِلَّا بِٱلَّتِى هِىَ أَحْسَنُ حَتَّىٰ يَبْلُغَ أَشُدَّهُۥ ۖ وَأَوْفُوا۟ ٱلْكَيْلَ وَٱلْمِيزَانَ بِٱلْقِسْطِ\nArti dari lafal yang bergaris bawah adalah ….",
        "options": [
          {
            "key": "A",
            "text": "Dengan jujur"
          },
          {
            "key": "B",
            "text": "Dengan baik"
          },
          {
            "key": "C",
            "text": "Dengan adil"
          },
          {
            "key": "D",
            "text": "Dengan sempurna"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Perhatikan QS. Al-An’am (6): 152!\nوَلَا تَقْرَبُوْا مَالَ الْيَتِيْمِ اِلَّا بِالَّتِيْ هِيَ اَحْسَنُ حَتّٰى يَبْلُغَ اَشُدَّهٗ ۚوَاَوْفُوا الْكَيْلَ وَالْمِيْزَانَ بِالْقِسْطِۚ\n1)Ancaman bagi orang-orang yang curang3)Perintah untuk berlaku jujur\n2)Penjelasan bagi orang yang suka mengurangi 4)Larangan mendustakan agama\ndan menambah takaran\nKandungan QS. Al-An’am (6): 152  di atas dari lafadz yang bergaris bawah ditunjukkan nomor….",
        "options": [
          {
            "key": "A",
            "text": "(1)"
          },
          {
            "key": "B",
            "text": "(2)"
          },
          {
            "key": "C",
            "text": "(3)"
          },
          {
            "key": "D",
            "text": "(4)"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "Seperti diketahui, saat ini sedang marak berjualan lewat Online Shop. Banyak yang menjual makanan, pakaian, ataupun kebutuhan-kebutuhan yang lainnya. Berjualan secara online harus memberikan informasi apa adanya terkait barang atau akad (perjanjian) yang ditawarkan, tidak menyembunyikan cacat, kekurangan, keburukan, mengurangi atau menambah takaran/timbangan, ataupun manipulasi data jika ada pada barang atau akad yang akan ditawarkan. Hal ini mencerminkan perilaku pedagang yang . ...",
        "options": [
          {
            "key": "A",
            "text": "Amanah"
          },
          {
            "key": "B",
            "text": "Bertanggungjawab"
          },
          {
            "key": "C",
            "text": "Jujur"
          },
          {
            "key": "D",
            "text": "Bekerjasama"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "text": "Perhatikan pernyataan berikut ini!\n1.Jujur dalam berdagang\n2.Berbicara seperlunya saja\n3.Menjadi saksi yang adil dalam mengungkapkan suatu fakta\n4.Tidak menjual barang yang dilarang atau diharamkan\n5.Tidak perlu melaporkan data diri ke RT setempat ketika pindah tempat tinggal\n6.Tidak menyebarkan berita yang belum jelas kebenarannya\nPernyataan di atas merupakan contoh jujur dalam muamalah ...",
        "options": [
          {
            "key": "A",
            "text": "1-2-3-4"
          },
          {
            "key": "B",
            "text": "1-3-4-5"
          },
          {
            "key": "C",
            "text": "1-3-4-6"
          },
          {
            "key": "D",
            "text": "2-3-4-6"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Cermati hadis berikut!\nعن حَسَنْ بْنْ عَلِىّْ قال حَفِظْتْ مِنْ رَسُولِ الِلْهِّ صلى الله عليه وسلم: دَعْ مَا يَرِيبُكْ إِلىَ مَا لّاْ يَرِيبُكْ فَإِنّْ الصِّدْقَ طُمَأْنِينَةْ وَإِنّْ الْكَذِبْ رِيبَةْ (رواه الترمذى)\nLafal yang bergaris bawah artinya adalah …",
        "options": [
          {
            "key": "A",
            "text": "Kejujuran"
          },
          {
            "key": "B",
            "text": "Keraguan"
          },
          {
            "key": "C",
            "text": "Ketenangan"
          },
          {
            "key": "D",
            "text": "Kecurangan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Perhatikan lafal hadits berikut!\n1.يَاْ مَعْشَرَ التُّجَّار  2.قَدْ وَلَيْتُمْ أَمْرًا3. الأُمَمْ السَّالِفَةْ4. الْمِكْيَالُ والْمِيزَانْ\nLafal yang menunjukkan terjemah “wahai para pedagang” adalah ….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "A"
      }
    ]
  },
  {
    "id": "exam-prk-vii",
    "code": "ASAS-PRK-VII",
    "title": "Asesmen Sumatif Akhir Semester — Prakarya Kelas VII",
    "subject": "Prakarya",
    "classLevel": "VII",
    "scheduleText": "Senin, 23 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 1,
    "dayLabel": "Hari Ke-1 • Senin, 23 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Yang dimaksud bahan lunak adalah….",
        "options": [
          {
            "key": "A",
            "text": "Bahan yang keras dan sulit dibentuk"
          },
          {
            "key": "B",
            "text": "Bahan yang mudah dibentuk"
          },
          {
            "key": "C",
            "text": "Bahan yang hanya berasal dari tumbuhan"
          },
          {
            "key": "D",
            "text": "Bahan yang mudah terbakar"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Contoh bahan lunak alami adalah….",
        "options": [
          {
            "key": "A",
            "text": "Kayu jati"
          },
          {
            "key": "B",
            "text": "Tanah liat"
          },
          {
            "key": "C",
            "text": "Kaca"
          },
          {
            "key": "D",
            "text": "Besi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "Produk kerajinan dari tanah liat disebut juga….",
        "options": [
          {
            "key": "A",
            "text": "Anyaman"
          },
          {
            "key": "B",
            "text": "Gerabah"
          },
          {
            "key": "C",
            "text": "Ukiran"
          },
          {
            "key": "D",
            "text": "Batik"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "Teknik mencubit dalam pembuatan keramik dikenal dengan istilah….",
        "options": [
          {
            "key": "A",
            "text": "Slab"
          },
          {
            "key": "B",
            "text": "Putar"
          },
          {
            "key": "C",
            "text": "Pinching"
          },
          {
            "key": "D",
            "text": "Coil"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Tujuan finishing pada produk kerajinan adalah….",
        "options": [
          {
            "key": "A",
            "text": "Mempercepat proses pembuatan"
          },
          {
            "key": "B",
            "text": "Memberikan nilai estetika dan melindungi permukaan"
          },
          {
            "key": "C",
            "text": "Membuat produk menjadi lebih kecil"
          },
          {
            "key": "D",
            "text": "Menghilangkan fungsi produk"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 6,
        "text": "Komponen listrik yang berfungsi sebagai sumber energi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Saklar"
          },
          {
            "key": "B",
            "text": "Baterai"
          },
          {
            "key": "C",
            "text": "Kabel"
          },
          {
            "key": "D",
            "text": "Lampu"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "Fungsi saklar dalam rangkaian listrik adalah….",
        "options": [
          {
            "key": "A",
            "text": "Menyimpan energi Listrik"
          },
          {
            "key": "B",
            "text": "Menghantarkan Listrik"
          },
          {
            "key": "C",
            "text": "Menghubungkan dan memutus arus"
          },
          {
            "key": "D",
            "text": "Mengubah energi listrik menjadi cahaya"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Alat yang digunakan untuk mengupas isolasi kabel adalah….",
        "options": [
          {
            "key": "A",
            "text": "Obeng"
          },
          {
            "key": "B",
            "text": "Tang potong"
          },
          {
            "key": "C",
            "text": "Tang kombinasi"
          },
          {
            "key": "D",
            "text": "Cutter"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 9,
        "text": "Rangkaian listrik yang satu jalur disebut….",
        "options": [
          {
            "key": "A",
            "text": "Paralel"
          },
          {
            "key": "B",
            "text": "Seri"
          },
          {
            "key": "C",
            "text": "Campuran"
          },
          {
            "key": "D",
            "text": "Tunggal"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 10,
        "text": "Keuntungan rangkaian paralel dibanding seri adalah….",
        "options": [
          {
            "key": "A",
            "text": "Lebih boros energi"
          },
          {
            "key": "B",
            "text": "Jika satu lampu padam, lainnya tetap menyala"
          },
          {
            "key": "C",
            "text": "Tidak membutuhkan kabel"
          },
          {
            "key": "D",
            "text": "Lebih mudah korsleting"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 11,
        "text": "Budi daya adalah kegiatan….",
        "options": [
          {
            "key": "A",
            "text": "Menghias tanaman"
          },
          {
            "key": "B",
            "text": "Mengolah sumber daya agar lebih bermanfaat"
          },
          {
            "key": "C",
            "text": "Membiarkan tanaman tumbuh sendiri"
          },
          {
            "key": "D",
            "text": "Mengambil hasil alam tanpa perawatan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Contoh tanaman sayuran yang bisa dibudidayakan di rumah adalah….",
        "options": [
          {
            "key": "A",
            "text": "Padi"
          },
          {
            "key": "B",
            "text": "Mangga"
          },
          {
            "key": "C",
            "text": "Cabai"
          },
          {
            "key": "D",
            "text": "Kelapa"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 13,
        "text": "Media tanam hidroponik menggunakan….",
        "options": [
          {
            "key": "A",
            "text": "Tanah"
          },
          {
            "key": "B",
            "text": "Lumpur"
          },
          {
            "key": "C",
            "text": "Air"
          },
          {
            "key": "D",
            "text": "Batu besar"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "Peralatan yang dipakai untuk menyiram tanaman adalah….",
        "options": [
          {
            "key": "A",
            "text": "Cangkul"
          },
          {
            "key": "B",
            "text": "Gunting"
          },
          {
            "key": "C",
            "text": "Selang air"
          },
          {
            "key": "D",
            "text": "Pisau"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Faktor paling penting untuk fotosintesis adalah….",
        "options": [
          {
            "key": "A",
            "text": "Cahaya"
          },
          {
            "key": "B",
            "text": "Suara"
          },
          {
            "key": "C",
            "text": "Angin"
          },
          {
            "key": "D",
            "text": "Debu"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Pengolahan makanan adalah proses….",
        "options": [
          {
            "key": "A",
            "text": "Menyimpan makanan"
          },
          {
            "key": "B",
            "text": "Mengubah bahan mentah menjadi makanan siap konsumsi"
          },
          {
            "key": "C",
            "text": "Menjual makanan"
          },
          {
            "key": "D",
            "text": "Menyajikan makanan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Teknik memasak dengan minyak banyak dan panas disebut….",
        "options": [
          {
            "key": "A",
            "text": "Menggoreng deep frying"
          },
          {
            "key": "B",
            "text": "Merebus"
          },
          {
            "key": "C",
            "text": "Mengukus"
          },
          {
            "key": "D",
            "text": "Memanggang"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Contoh makanan yang diolah dengan cara dikukus adalah….",
        "options": [
          {
            "key": "A",
            "text": "Donat"
          },
          {
            "key": "B",
            "text": "Nasi uduk"
          },
          {
            "key": "C",
            "text": "Bolu kukus"
          },
          {
            "key": "D",
            "text": "Ayam goreng"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 19,
        "text": "Bahan makanan yang termasuk karbohidrat adalah….",
        "options": [
          {
            "key": "A",
            "text": "Wortel"
          },
          {
            "key": "B",
            "text": "Tempe"
          },
          {
            "key": "C",
            "text": "Nasi"
          },
          {
            "key": "D",
            "text": "Ikan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 20,
        "text": "Alat yang digunakan untuk menimbang bahan makanan adalah….",
        "options": [
          {
            "key": "A",
            "text": "Wajan"
          },
          {
            "key": "B",
            "text": "Timbangan"
          },
          {
            "key": "C",
            "text": "Piring"
          },
          {
            "key": "D",
            "text": "Kompor"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 21,
        "text": "Anyaman biasanya menggunakan bahan….",
        "options": [
          {
            "key": "A",
            "text": "Kain sutra"
          },
          {
            "key": "B",
            "text": "Plastik, rotan, atau bambu"
          },
          {
            "key": "C",
            "text": "Batu bata"
          },
          {
            "key": "D",
            "text": "Besi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 22,
        "text": "Fungsi utama produk kerajinan adalah….",
        "options": [
          {
            "key": "A",
            "text": "Hanya sebagai pajangan"
          },
          {
            "key": "B",
            "text": "Sebagai hiasan atau benda pakai"
          },
          {
            "key": "C",
            "text": "Untuk alat berat"
          },
          {
            "key": "D",
            "text": "Untuk bahan bangunan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "text": "Pewarna alami dapat diperoleh dari….",
        "options": [
          {
            "key": "A",
            "text": "Plastik"
          },
          {
            "key": "B",
            "text": "Daun dan akar tertentu"
          },
          {
            "key": "C",
            "text": "Karet"
          },
          {
            "key": "D",
            "text": "Logam"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "text": "Teknik menempel dalam kerajinan disebut….",
        "options": [
          {
            "key": "A",
            "text": "Aplikasi"
          },
          {
            "key": "B",
            "text": "Ukir"
          },
          {
            "key": "C",
            "text": "Tenun"
          },
          {
            "key": "D",
            "text": "Cor"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 25,
        "text": "Kerajinan dari sabun biasanya dibuat dengan teknik….",
        "options": [
          {
            "key": "A",
            "text": "Dipahat"
          },
          {
            "key": "B",
            "text": "Dipotong mesin"
          },
          {
            "key": "C",
            "text": "Dicetak panas"
          },
          {
            "key": "D",
            "text": "Dilem"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 26,
        "text": "Komponen yang dapat mengubah energi listrik menjadi cahaya adalah….",
        "options": [
          {
            "key": "A",
            "text": "Baterai"
          },
          {
            "key": "B",
            "text": "Kabel"
          },
          {
            "key": "C",
            "text": "Lampu"
          },
          {
            "key": "D",
            "text": "Sekring"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 27,
        "text": "Keamanan dalam menggunakan listrik dapat dijaga dengan….",
        "options": [
          {
            "key": "A",
            "text": "Menyentuh kabel terbuka"
          },
          {
            "key": "B",
            "text": "Menggunakan tangan basah"
          },
          {
            "key": "C",
            "text": "Menggunakan isolator yang baik"
          },
          {
            "key": "D",
            "text": "Membuat hubungan arus pendek"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 28,
        "text": "Sebelum membuat rangkaian listrik, langkah pertama adalah….",
        "options": [
          {
            "key": "A",
            "text": "Menyolder kabel"
          },
          {
            "key": "B",
            "text": "Menyiapkan gambar rancangan"
          },
          {
            "key": "C",
            "text": "Menghidupkan listrik"
          },
          {
            "key": "D",
            "text": "Membeli lampu"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 29,
        "text": "Alat untuk menguji ada tidaknya arus listrik adalah….",
        "options": [
          {
            "key": "A",
            "text": "Lem"
          },
          {
            "key": "B",
            "text": "Multimeter"
          },
          {
            "key": "C",
            "text": "Gunting"
          },
          {
            "key": "D",
            "text": "Penggaris"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 30,
        "text": "Bahan konduktor adalah bahan yang….",
        "options": [
          {
            "key": "A",
            "text": "Tidak bisa menghantarkan Listrik"
          },
          {
            "key": "B",
            "text": "Bisa menghantarkan Listrik"
          },
          {
            "key": "C",
            "text": "Berbahaya bagi tubuh"
          },
          {
            "key": "D",
            "text": "Tidak dapat dibentuk"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-prk-viii",
    "code": "ASAS-PRK-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Prakarya Kelas VIII",
    "subject": "Prakarya",
    "classLevel": "VIII",
    "scheduleText": "Senin, 23 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 1,
    "dayLabel": "Hari Ke-1 • Senin, 23 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Bahan yang digunakan untuk karya kerajinan yang diolah menjadi lunak dinamakan....",
        "options": [
          {
            "key": "A",
            "text": "bahan lunak alami"
          },
          {
            "key": "B",
            "text": "bahan lunak buatan"
          },
          {
            "key": "C",
            "text": "limbah organic"
          },
          {
            "key": "D",
            "text": "limbah anorganik"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Berbagai macam karya kerajinan dari bahan lunak buatan dapat dibuat berdasarkan bahan yang digunakan, contohnya adalah....",
        "options": [
          {
            "key": "A",
            "text": "bubur kertas, lilin, fiberglass, gips, sabun,spon"
          },
          {
            "key": "B",
            "text": "tanah liat, kulit dan serat alam"
          },
          {
            "key": "C",
            "text": "tanah liat, kulit dan serat alam, gips,sabun, spon"
          },
          {
            "key": "D",
            "text": "bubur kertas, tanah liat, kulit, fiberglass, gips, sabun, spon"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 3,
        "text": "Beberapa faktor yang paling mendukung dalam membuat kemasan seperti diuraikan di bawah ini, kecuali...",
        "options": [
          {
            "key": "A",
            "text": "melindungi produk agar terhindar dari kotoran dan debu"
          },
          {
            "key": "B",
            "text": "mempercantik atau memperindah produk"
          },
          {
            "key": "C",
            "text": "menarik minat pembeli"
          },
          {
            "key": "D",
            "text": "meningkatkan harga bahan baku produk kerajinan"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 4,
        "text": "Bahan lunak yang didapat dari alam sekitar kita dan cara pengolahan menjadi kerajinan juga dilakukan secara alami disebut dengan",
        "options": [
          {
            "key": "A",
            "text": "bahan lunak alam"
          },
          {
            "key": "B",
            "text": "bahan lunak buatan"
          },
          {
            "key": "C",
            "text": "limbah organik"
          },
          {
            "key": "D",
            "text": "limbah anorganik"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 5,
        "text": "Contoh bahan lunak alami adalah ....",
        "options": [
          {
            "key": "A",
            "text": "bubur kertas, lilin, fiberglass, gips, sabun,spon"
          },
          {
            "key": "B",
            "text": "tanah liat, kulit dan serat alam"
          },
          {
            "key": "C",
            "text": "tanah liat, kulit dan serat alam, gips. sabun, spon"
          },
          {
            "key": "D",
            "text": "bubur kertas, tanah liat, kulit, fiberglass, gips, sabun, spon"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 6,
        "text": "Warna natural tanah, yaitu ....",
        "options": [
          {
            "key": "A",
            "text": "cokelat"
          },
          {
            "key": "B",
            "text": "lebih coklat kekuningan"
          },
          {
            "key": "C",
            "text": "lebih kehitam/keabu-abuan"
          },
          {
            "key": "D",
            "text": "lebih terlihat cokelat kemerahan"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 7,
        "text": "Fiberglass memiliki struktur yaitu .......",
        "options": [
          {
            "key": "A",
            "text": "cair, dan jika mengering akan mengeras"
          },
          {
            "key": "B",
            "text": "cair, dan lembek mudah dibentuk"
          },
          {
            "key": "C",
            "text": "khalis mudah dibentuk"
          },
          {
            "key": "D",
            "text": "padat tetapi lunak"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 8,
        "text": "Kerajinan fiberglass dibuat dengan cara .............",
        "options": [
          {
            "key": "A",
            "text": "dibentuk"
          },
          {
            "key": "B",
            "text": "Dipahat"
          },
          {
            "key": "C",
            "text": "disisir"
          },
          {
            "key": "D",
            "text": "dicetak"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 9,
        "text": "Kerajinan yang memanfaatkan bahan sintetis sebagai bahan untuk membuat kerajinan contohnya yaitu",
        "options": [
          {
            "key": "A",
            "text": "limbah karet, plastik, serat alam"
          },
          {
            "key": "B",
            "text": "limbah karet, kayu, plastik, karet"
          },
          {
            "key": "C",
            "text": "limbah kertas, plastik, karet"
          },
          {
            "key": "D",
            "text": "kulit, logam, rotan, plastik, karet"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Salah satu daerah penghasil kerajinan keramik dengan bahan sumber daya alam yang banyak tersedia yaitu tanah liat ialah....",
        "options": [
          {
            "key": "A",
            "text": "Palu (Sulawesi Tengah)"
          },
          {
            "key": "B",
            "text": "Kapuas (Kalimantan Tengah)"
          },
          {
            "key": "C",
            "text": "Bali"
          },
          {
            "key": "D",
            "text": "Kasongan (DIY)"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 11,
        "text": "Bahan dasar yang bersifat lunak memiliki kriteria yaitu....",
        "options": [
          {
            "key": "A",
            "text": "bentuk cair, lentur, lembut, dan empuk"
          },
          {
            "key": "B",
            "text": "lentur, lembut, empuk, dan bentuk cair"
          },
          {
            "key": "C",
            "text": "lentur, lembut, empuk, dan mudah dibentuk"
          },
          {
            "key": "D",
            "text": "lentur, lembek, lembut, berbentuk adonan, dan mudah dibentuk"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "text": "Penggunaan bahan lain dengan warna dan bentuk yang berbeda tetapi padu dengan bahan dasarnya dinamakan",
        "options": [
          {
            "key": "A",
            "text": "penggabungan"
          },
          {
            "key": "B",
            "text": "Pemaduan"
          },
          {
            "key": "C",
            "text": "komposisi"
          },
          {
            "key": "D",
            "text": "adonan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Produk kerajinan bahan lunak dibuat dengan mempertimbangkan produk tersebut dapat mempercantik di dalam menggunakan busananya, contohnya yaitu....",
        "options": [
          {
            "key": "A",
            "text": "lilin"
          },
          {
            "key": "B",
            "text": "bros"
          },
          {
            "key": "C",
            "text": "gerabah"
          },
          {
            "key": "D",
            "text": "keramik"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "text": "Barang kerajinan bahan lunak yang banyak digunakan untuk berbagai acara ritual dan pesta adat ialah",
        "options": [
          {
            "key": "A",
            "text": "Tilin"
          },
          {
            "key": "B",
            "text": "Perhiasan"
          },
          {
            "key": "C",
            "text": "gerabah"
          },
          {
            "key": "D",
            "text": "keramik"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 15,
        "text": "Sumber daya alamnya banyak menghasilkan tanaman kayu hitam, kerajinan yang bentuk kerajinan kayu hitam Daerah penghasil kerajinan kayu hitam yang dimaksud berkembang berupa ialah...",
        "options": [
          {
            "key": "A",
            "text": "Palu (Sulawesi Tengah)"
          },
          {
            "key": "B",
            "text": "Kapuas (Kalimantan Tengah)"
          },
          {
            "key": "C",
            "text": "Bali"
          },
          {
            "key": "D",
            "text": "Kasongan (DIY)"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Berikut dibawah ini merupakan periode perkembangan sistem informasi pada masa prasejarah, adalah…",
        "options": [
          {
            "key": "A",
            "text": "100 SM, 500 SM, 1000 SM, 1500 SM"
          },
          {
            "key": "B",
            "text": "200 M, 1000 SM, 1900 SM, 2000 SM"
          },
          {
            "key": "C",
            "text": "105 M, 500 SM, 2900 SM, 3000 SM"
          },
          {
            "key": "D",
            "text": "150 SM, 1500 SM, 2500 SM, 3000 SM"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 17,
        "text": "Pada periode perkembangan sistem informasi manakah, manusia sudah mengenal cara membuat serat dari pohon papyrus, adalah…",
        "options": [
          {
            "key": "A",
            "text": "200 SM"
          },
          {
            "key": "B",
            "text": "300 SM"
          },
          {
            "key": "C",
            "text": "400 SM"
          },
          {
            "key": "D",
            "text": "500 SM"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Media penghantar komunikasi tradisional yang berbentuk Piktograf, pertama kali digunakan oleh bangsa…",
        "options": [
          {
            "key": "A",
            "text": "Sumeria"
          },
          {
            "key": "B",
            "text": "Yunani"
          },
          {
            "key": "C",
            "text": "Arya"
          },
          {
            "key": "D",
            "text": "Mesopotamia"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Pada gambar di samping, merupakan media penghantar\nkomunikasi tradisional, yang terbuat dari…",
        "options": [
          {
            "key": "A",
            "text": "Kulit hewan"
          },
          {
            "key": "B",
            "text": "Serat Papyrus"
          },
          {
            "key": "C",
            "text": "Daun Lontar"
          },
          {
            "key": "D",
            "text": "Kain"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 20,
        "text": "Media penghantar komunikasi modern yang berbentuk Televisi, pertama kali ditemukan oleh…",
        "options": [
          {
            "key": "A",
            "text": "Paul Allen"
          },
          {
            "key": "B",
            "text": "Paul Steve"
          },
          {
            "key": "C",
            "text": "Paul Nipkow"
          },
          {
            "key": "D",
            "text": "Paul Pogba"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Media penghantar komunikasi modern yang menggunakan sinyal frekuensi untuk menghu-bungkan antara satu dengan yang lainnya, adalah…",
        "options": [
          {
            "key": "A",
            "text": "Handphone"
          },
          {
            "key": "B",
            "text": "Internet"
          },
          {
            "key": "C",
            "text": "Faximile"
          },
          {
            "key": "D",
            "text": "Handy Talky"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 22,
        "text": "Media penghantar komunikasi modern yang berbentuk surat kabar, pertama kali dicetak pada tahun…",
        "options": [
          {
            "key": "A",
            "text": "1595"
          },
          {
            "key": "B",
            "text": "1600"
          },
          {
            "key": "C",
            "text": "1605"
          },
          {
            "key": "D",
            "text": "1610"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "text": "Penemuan media penghantar komunikasi modern yang berbentuk radio, untuk pertama kalinya diawali dengan penemuan berupa gelombang radio. Penemu gelombang radio tersebut, adalah…",
        "options": [
          {
            "key": "A",
            "text": "Heinrich Bubble"
          },
          {
            "key": "B",
            "text": "Heinrich Hertz"
          },
          {
            "key": "C",
            "text": "Heinrich Stoner"
          },
          {
            "key": "D",
            "text": "Heinrich William"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "text": "Salah satu jenis tumbuhan Gramineae yang dibudidayakan untuk menghasilkan bulir-bulir berisi biji-bijian sebagai sumber karbohidrat, adalah…",
        "options": [
          {
            "key": "A",
            "text": "Serealia"
          },
          {
            "key": "B",
            "text": "Kacang-kacangan"
          },
          {
            "key": "C",
            "text": "Umbi"
          },
          {
            "key": "D",
            "text": "Sayuran"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 25,
        "text": "Salah satu jenis beras yang disebabkan aleuron dan endosperma yang memproduksi antosianin dengan intensitas tinggi sehingga berwarna ungu pekat, adalah…",
        "options": [
          {
            "key": "A",
            "text": "Beras putih"
          },
          {
            "key": "B",
            "text": "Beras hitam"
          },
          {
            "key": "C",
            "text": "Beras merah"
          },
          {
            "key": "D",
            "text": "Beras ketan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 26,
        "text": "Salah satu manfaat mengkonsumsi Gandum bagi tubuh manusia, adalah…",
        "options": [
          {
            "key": "A",
            "text": "Mudah merasa lelah"
          },
          {
            "key": "B",
            "text": "Mudah merasa kenyang"
          },
          {
            "key": "C",
            "text": "Mudah merasa lapar"
          },
          {
            "key": "D",
            "text": "Memperlancar peredaran darah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 27,
        "text": "Salah satu manfaat akar Sorgum, ketika di konsumsi oleh tubuh manusia, adalah…",
        "options": [
          {
            "key": "A",
            "text": "Menyembuhkan sembelit"
          },
          {
            "key": "B",
            "text": "Menurunkan berat badan"
          },
          {
            "key": "C",
            "text": "Mengurangi lonjakan kadar gula"
          },
          {
            "key": "D",
            "text": "Memperlancar peredaran darah"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 28,
        "text": "Salah satu teknik mengolah bahan makanan yang terlebih dahulu ditumis bumbunya, dan direbus dengan cairan serta direbus dengan api sedang, merupakan teknik…",
        "options": [
          {
            "key": "A",
            "text": "Stewing"
          },
          {
            "key": "B",
            "text": "Braising"
          },
          {
            "key": "C",
            "text": "Boiling"
          },
          {
            "key": "D",
            "text": "Poaching"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 29,
        "text": "Salah satu teknik mengolah bahan makanan yang direbus dengan sedikit cairan dalam panci tertutup dengan api dikecilkan secara perlahan-lahan, merupakan teknik…",
        "options": [
          {
            "key": "A",
            "text": "Stewin"
          },
          {
            "key": "B",
            "text": "Braising"
          },
          {
            "key": "C",
            "text": "Boiling"
          },
          {
            "key": "D",
            "text": "Poaching"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 30,
        "text": "Salah satu badan khusus di PBB yang dibentuk untuk menyelesaikan permasalahan pangan dan pertanian adalah…",
        "options": [
          {
            "key": "A",
            "text": "ICAO"
          },
          {
            "key": "B",
            "text": "IFAD"
          },
          {
            "key": "C",
            "text": "FAO"
          },
          {
            "key": "D",
            "text": "IMO"
          }
        ],
        "answerKey": "C"
      }
    ]
  },
  {
    "id": "exam-prk-ix",
    "code": "ASAS-PRK-IX",
    "title": "Asesmen Sumatif Akhir Semester — Prakarya Kelas IX",
    "subject": "Prakarya",
    "classLevel": "IX",
    "scheduleText": "Senin, 23 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 1,
    "dayLabel": "Hari Ke-1 • Senin, 23 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Bahan kayu memiliki keunikan berupa...",
        "options": [
          {
            "key": "A",
            "text": "Tekstur urat"
          },
          {
            "key": "B",
            "text": "Warna kalem"
          },
          {
            "key": "C",
            "text": "Tahan lama"
          },
          {
            "key": "D",
            "text": "Berbau wangi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 2,
        "text": "Teknik membuat kerajinan berbahan keras dapat dipengaruhi oleh...",
        "options": [
          {
            "key": "A",
            "text": "Instruksi atasan perajin"
          },
          {
            "key": "B",
            "text": "Selera konsumen"
          },
          {
            "key": "C",
            "text": "Buku teori"
          },
          {
            "key": "D",
            "text": "Alat dan bahan dasar yang digunakan"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 3,
        "text": "Produk kerajinan tidak lepas dari muatan nilai yang berawal dari...",
        "options": [
          {
            "key": "A",
            "text": "Pengaruh Masyarakat"
          },
          {
            "key": "B",
            "text": "Gagasan penciptanya"
          },
          {
            "key": "C",
            "text": "Komentar netizen"
          },
          {
            "key": "D",
            "text": "Berita di media"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "Salah satu faktor yang termasuk perlu untuk dipertimbangkan dalam merancang produk kerajinan yaitu...",
        "options": [
          {
            "key": "A",
            "text": "Faktor kesehatan masyarakat"
          },
          {
            "key": "B",
            "text": "Faktor tak terduga"
          },
          {
            "key": "C",
            "text": "Faktor ergonomis"
          },
          {
            "key": "D",
            "text": "Faktor ramalan cuaca"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Salah satu hal yang perlu dipertimbangkan dari faktor teknis dalam merancang produk kerajinan yaitu...",
        "options": [
          {
            "key": "A",
            "text": "Penerapan daya mesin atau manual"
          },
          {
            "key": "B",
            "text": "Sistem pemasokan atau distribusi"
          },
          {
            "key": "C",
            "text": "Kenyamanan"
          },
          {
            "key": "D",
            "text": "Memiliki daya pikat"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 6,
        "text": "Salah satu faktor yang termasuk perlu dipertimbangkan dari faktor ekonomis dalam merancang produk kerajinan yaitu...",
        "options": [
          {
            "key": "A",
            "text": "Penerapan daya mesin atau manual"
          },
          {
            "key": "B",
            "text": "Sistem pemasokan atau distribusi"
          },
          {
            "key": "C",
            "text": "Kenyamanan"
          },
          {
            "key": "D",
            "text": "Memiliki daya pikat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "Salah satu faktor yang termasuk perlu dipertimbangkan dari faktor ergonomis dalam merancang produk kerajinan yaitu...",
        "options": [
          {
            "key": "A",
            "text": "Penerapan daya mesin atau manual"
          },
          {
            "key": "B",
            "text": "Sistem pemasokan atau distribusi"
          },
          {
            "key": "C",
            "text": "Kenyamana"
          },
          {
            "key": "D",
            "text": "Memiliki daya pikat"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Salah satu faktor yang termasuk perlu dipertimbangkan dari faktor estetika dalam merancang produk kerajinan yaitu...",
        "options": [
          {
            "key": "A",
            "text": "Penerapan daya mesin atau manual"
          },
          {
            "key": "B",
            "text": "Sistem pemasokan atau distribusi"
          },
          {
            "key": "C",
            "text": "Kenyamanan"
          },
          {
            "key": "D",
            "text": "Memiliki daya pikat"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 9,
        "text": "Salah satu sifat bahan keras alam yaitu...",
        "options": [
          {
            "key": "A",
            "text": "Pejal"
          },
          {
            "key": "B",
            "text": "Wangi"
          },
          {
            "key": "C",
            "text": "Warna kalem"
          },
          {
            "key": "D",
            "text": "Halus"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 10,
        "text": "Yang bukan termasuk contoh bahan keras alam adalah...",
        "options": [
          {
            "key": "A",
            "text": "Rotan"
          },
          {
            "key": "B",
            "text": "Semen"
          },
          {
            "key": "C",
            "text": "Bambu"
          },
          {
            "key": "D",
            "text": "Kayu"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 11,
        "text": "Kebanyakan orang memilih benda keras untuk produk fungsional yang membutuhkan penggunaan dalam waktu jangka...",
        "options": [
          {
            "key": "A",
            "text": "Pendek"
          },
          {
            "key": "B",
            "text": "Menengah"
          },
          {
            "key": "C",
            "text": "Panjang"
          },
          {
            "key": "D",
            "text": "Terbatas"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "text": "Kaleng memiliki sifat...",
        "options": [
          {
            "key": "A",
            "text": "Tidak cocok di suhu rendah"
          },
          {
            "key": "B",
            "text": "Rentan dan mudah pecah"
          },
          {
            "key": "C",
            "text": "Lembek dan ringan"
          },
          {
            "key": "D",
            "text": "Ringan tapi kuat"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 13,
        "text": "Kaca memiliki sifat...",
        "options": [
          {
            "key": "A",
            "text": "Tidak cocok di suhu rendah"
          },
          {
            "key": "B",
            "text": "Rentan dan mudah pecah"
          },
          {
            "key": "C",
            "text": "Lembek dan ringan"
          },
          {
            "key": "D",
            "text": "Ringan tapi kuat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "text": "Berbatang kuat namun jika terkena air terus menerus akan terkena pelapukan. Karakteristik tersebut merupakan salah satu karakteristik yang dimiliki bahan...",
        "options": [
          {
            "key": "A",
            "text": "Bambu"
          },
          {
            "key": "B",
            "text": "Rotan"
          },
          {
            "key": "C",
            "text": "Kayu"
          },
          {
            "key": "D",
            "text": "Batu"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 15,
        "text": "Bahan yang memiliki salah satu karakteristik memiliki lingkar tahun adalah bahan…",
        "options": [
          {
            "key": "A",
            "text": "Bambu"
          },
          {
            "key": "B",
            "text": "Rotan"
          },
          {
            "key": "C",
            "text": "Kayu"
          },
          {
            "key": "D",
            "text": "Batu"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 16,
        "text": "Bahan yang tumbuh menjalar dan melilit adalah bahan…",
        "options": [
          {
            "key": "A",
            "text": "Bambu"
          },
          {
            "key": "B",
            "text": "Rotan"
          },
          {
            "key": "C",
            "text": "Kayu"
          },
          {
            "key": "D",
            "text": "Batu"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Perbedaan rotan dengan bambu yaitu…",
        "options": [
          {
            "key": "A",
            "text": "Rotan dapat dipotong berbentuk sayatan ataupun bentuk utuhan"
          },
          {
            "key": "B",
            "text": "Rotan berwarna lebih gelap"
          },
          {
            "key": "C",
            "text": "Tekstur batang rotan lebih halus daripada bambu"
          },
          {
            "key": "D",
            "text": "Rotan memiliki ruas batang namun lebih samar dibanding bamboo"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Perlu cat khusus untuk melukis di atas kaca karena…",
        "options": [
          {
            "key": "A",
            "text": "Permukaan kaca licin dan kilap"
          },
          {
            "key": "B",
            "text": "Bersifat eksklusif"
          },
          {
            "key": "C",
            "text": "Bahan dasar yang sensitif"
          },
          {
            "key": "D",
            "text": "Karakteristik yang transparan"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Logam biasanya dilapisi dengan lapisan aditif seperti krom atau cat karena…",
        "options": [
          {
            "key": "A",
            "text": "Dapat menambah kesan estetika pada logam"
          },
          {
            "key": "B",
            "text": "Logam mudah terkorosi oleh udara"
          },
          {
            "key": "C",
            "text": "Kurang elegan"
          },
          {
            "key": "D",
            "text": "Permukaannya tidak halus"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 20,
        "text": "Bahan kayu hitam adalah bahan yang terkenal dihasilkan dari daerah…",
        "options": [
          {
            "key": "A",
            "text": "Kalimantan Barat"
          },
          {
            "key": "B",
            "text": "Lampung"
          },
          {
            "key": "C",
            "text": "Sulawesi Tengah"
          },
          {
            "key": "D",
            "text": "Probolinggo"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Tanaman bambu sejak dahulu telah dibudidayakan di Indonesia, India, dan…",
        "options": [
          {
            "key": "A",
            "text": "Zimbabwe"
          },
          {
            "key": "B",
            "text": "Timbuktu"
          },
          {
            "key": "C",
            "text": "Kepulauan Faroe"
          },
          {
            "key": "D",
            "text": "Bangladesh"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 22,
        "text": "Dari 1.500 spesies bambu di dunia, terdapat sebanyak … spesies asli bambu tumbuh di Indonesia",
        "options": [
          {
            "key": "A",
            "text": "100"
          },
          {
            "key": "B",
            "text": "125"
          },
          {
            "key": "C",
            "text": "150"
          },
          {
            "key": "D",
            "text": "175"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "text": "Bambu belum menjadi pilihan prioritas pengembangan dalam pembangunan di Indonesia karena masih dilihat sebagai bahan yang…",
        "options": [
          {
            "key": "A",
            "text": "Tidak estetik"
          },
          {
            "key": "B",
            "text": "Mahal"
          },
          {
            "key": "C",
            "text": "Cepat rusak"
          },
          {
            "key": "D",
            "text": "Sulit didapat"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Kota penghasil bambu terbesar di Jawa Barat adalah…",
        "options": [
          {
            "key": "A",
            "text": "Tasikmalaya"
          },
          {
            "key": "B",
            "text": "Bandung"
          },
          {
            "key": "C",
            "text": "Subang"
          },
          {
            "key": "D",
            "text": "Sumedang"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 25,
        "text": "Negara yang bisa dibilang sebagai penghasil rotan terbesar di dunia adalah…",
        "options": [
          {
            "key": "A",
            "text": "Samoa"
          },
          {
            "key": "B",
            "text": "Nauru"
          },
          {
            "key": "C",
            "text": "Indonesia"
          },
          {
            "key": "D",
            "text": "Mali"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 26,
        "text": "Kaca patri merupakan teknik membuat kerajinan dari bahan kaca dengan cara…",
        "options": [
          {
            "key": "A",
            "text": "Melukis di atas kaca"
          },
          {
            "key": "B",
            "text": "Mencetak kaca dengan printer 3D"
          },
          {
            "key": "C",
            "text": "Menempa pasir silika dengan suhu panas lalu didinginkan"
          },
          {
            "key": "D",
            "text": "Melekatkan bentuk kaca yang berbeda"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 27,
        "text": "Salah satu daerah penghasil kerajinan emas yang terkenal di Indonesia yaitu …",
        "options": [
          {
            "key": "A",
            "text": "Cilegon"
          },
          {
            "key": "B",
            "text": "Merauke"
          },
          {
            "key": "C",
            "text": "Aceh"
          },
          {
            "key": "D",
            "text": "Kalimantan Selatan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 28,
        "text": "Salah satu daerah penghasil kerajinan perak yang terkenal di Indonesia yaitu…",
        "options": [
          {
            "key": "A",
            "text": "Yogyakarta"
          },
          {
            "key": "B",
            "text": "Surabaya"
          },
          {
            "key": "C",
            "text": "Sulawesi Selatan"
          },
          {
            "key": "D",
            "text": "Batam"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 29,
        "text": "Bahan logam dapat diolah dengan berbagai teknik, salah satunya yaitu…",
        "options": [
          {
            "key": "A",
            "text": "Ukir"
          },
          {
            "key": "B",
            "text": "Cor"
          },
          {
            "key": "C",
            "text": "Tempa"
          },
          {
            "key": "D",
            "text": "Sambung"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 30,
        "text": "Secara umum kemasan dimaksudkan sebagai bagian terluar yang membungkus suatu produk dengan tujuan untuk…",
        "options": [
          {
            "key": "A",
            "text": "Mudah dikirim lewat JNT"
          },
          {
            "key": "B",
            "text": "Melindungi produk"
          },
          {
            "key": "C",
            "text": "Meringkas produk berjumlah banyak"
          },
          {
            "key": "D",
            "text": "Bisa ditempeli barcode"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-ba-vii",
    "code": "ASAS-BA-VII",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Arab Kelas VII",
    "subject": "Bahasa Arab",
    "classLevel": "VII",
    "scheduleText": "Jum’at, 27 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "آمنة : صَبَاحَ الخَيْر\nليلي : .....",
        "options": [
          {
            "key": "A",
            "text": "أَهْلاً بِكَ"
          },
          {
            "key": "B",
            "text": "اَلْحَمْدُ لله بِخَيْر"
          },
          {
            "key": "C",
            "text": "صَبَاحَ النُّوْر"
          },
          {
            "key": "D",
            "text": "مَعَ السَّلاَمَة"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "آمري : كَيْفَ حَالُك ؟\nاحمد : .....",
        "options": [
          {
            "key": "A",
            "text": "مَعَ السَّلاَمَة"
          },
          {
            "key": "B",
            "text": "اَلْحَمْدُ لله بِخَيْر"
          },
          {
            "key": "C",
            "text": "صَبَاحَ النُّوْر"
          },
          {
            "key": "D",
            "text": "أَهْلاً بِكَ"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "مَاسْمُكَ ؟ .....",
        "options": [
          {
            "key": "A",
            "text": "إِسْمِيْ عُمَرٌ"
          },
          {
            "key": "B",
            "text": "إِسْمِيْ فَاطِمَةٌ"
          },
          {
            "key": "C",
            "text": "نَعَمْ، إِسْمِيْ عُمَرٌ"
          },
          {
            "key": "D",
            "text": "لاَ، إِسْمِيْ فَاطِمَةٌ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 4,
        "text": "أَناَ تِلْمِيْذَةٌ جَدِيْدَةٌ ، إِسْمِي ...",
        "options": [
          {
            "key": "A",
            "text": "عُمَرُ"
          },
          {
            "key": "B",
            "text": "حَلِيْمَةُ"
          },
          {
            "key": "C",
            "text": "أَحْمَدٌ"
          },
          {
            "key": "D",
            "text": "حَسَنُ"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "context": "الحِوَارُ لِلنَّمْرَةِ ٥ – ٦ :\nأحْمَدُ : اِسْمِي أَحْمَدُ أَنَا مِنْ فَنْدِغْلاَنْج (Pandeglang). مَا اسْمُكَ وَ مِنْ اَيْنَ اَنْتَ ؟\nعُمَرُ : اِسْمِي عُمَرُ أَنَا مِنْ جَاكَرْتا (Jakarta).",
        "text": "مِنْ اَيْنَ أحْمَدُ ؟",
        "options": [
          {
            "key": "A",
            "text": "هُوَ مِنْ فَنْدِغْلاَنْج"
          },
          {
            "key": "B",
            "text": "هُوَ مِنْ جَاكَرْتا"
          },
          {
            "key": "C",
            "text": "هُوَ مِنْ بَنْدُنجْ"
          },
          {
            "key": "D",
            "text": "هُوَ مِنْ سُوْرَاكَرْتَا"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 6,
        "context": "الحِوَارُ لِلنَّمْرَةِ ٥ – ٦ :\nأحْمَدُ : اِسْمِي أَحْمَدُ أَنَا مِنْ فَنْدِغْلاَنْج (Pandeglang). مَا اسْمُكَ وَ مِنْ اَيْنَ اَنْتَ ؟\nعُمَرُ : اِسْمِي عُمَرُ أَنَا مِنْ جَاكَرْتا (Jakarta).",
        "text": "هَلْ عُمَرُ مِنْ فَنْدِغْلاَنْج ؟",
        "options": [
          {
            "key": "A",
            "text": "نَعَمْ هُوَ مِنْ فَنْدِغْلاَنْج"
          },
          {
            "key": "B",
            "text": "نَعَمْ هُوَ مِنْ جَاكَرْتَا"
          },
          {
            "key": "C",
            "text": "لاَ، هُوَ مِنْ جَاكَرْتَا"
          },
          {
            "key": "D",
            "text": "لاَ، هُوَ مِنْ سُوْرَاكَرْتَا"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 7,
        "text": "<u>هُوَ طَالِبٌ وَهُوَ صَدِيْقِيْ</u> . التَرْجَمَةُ الصَّحِيْحَةُ هِيَ ...",
        "options": [
          {
            "key": "A",
            "text": "Dia seorang siswa dan dia temanku"
          },
          {
            "key": "B",
            "text": "Ini seorang siswa dan dia temanku"
          },
          {
            "key": "C",
            "text": "Dia saudaraku dan dia seorang siswa"
          },
          {
            "key": "D",
            "text": "Ini temanku dan dia seorang siswa"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 8,
        "text": "هَذِهِ صَدِيْقَتِي ... طَالِبَةٌ",
        "options": [
          {
            "key": "A",
            "text": "هُوَ"
          },
          {
            "key": "B",
            "text": "هِيَ"
          },
          {
            "key": "C",
            "text": "هَذَا"
          },
          {
            "key": "D",
            "text": "أَنْتَ"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "..... هَذِهِ ؟ هَذِهِ عَائِشَةٌ",
        "options": [
          {
            "key": "A",
            "text": "هَلْ"
          },
          {
            "key": "B",
            "text": "مَا"
          },
          {
            "key": "C",
            "text": "أَيْنَ"
          },
          {
            "key": "D",
            "text": "مَنْ"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "..... عُمَرٌ .... مُوَظَّفٌ",
        "options": [
          {
            "key": "A",
            "text": "هَذِهِ – هِيَ"
          },
          {
            "key": "B",
            "text": "هَذِهِ – هُوَ"
          },
          {
            "key": "C",
            "text": "هَذاَ – أَنْتِ"
          },
          {
            "key": "D",
            "text": "هَذَا – هُوَ"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 11,
        "context": "هَذَا - إِبْرَاهِيْم - تِلْمِيْذٌ - هُوَ – صَدِيْقِي - إِسْمُهُ",
        "text": "رَتِّب الكَلِمَات لِتَكُوْنَ جُمْلَةً مُفِيْدَة !",
        "options": [
          {
            "key": "A",
            "text": "هَذَا صَدِيْقِي إِسْمُهُ إِبْرَاهِيْم هُوَ تِلْمِيْذٌ"
          },
          {
            "key": "B",
            "text": "إِبْرَاهِيْم صَدِيْقِي هُوَ تِلْمِيْذٌ هَذَا إِسْمُهُ"
          },
          {
            "key": "C",
            "text": "إِسْمُهُ إِبْرَاهِيْم هُوَ تِلْمِيْذٌ صَدِيْقِي هَذَا"
          },
          {
            "key": "D",
            "text": "هُوَ تِلْمِيْذٌ إِبْرَاهِيْم إِسْمُهُ هَذَا صَدِيْقِي"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 12,
        "imageUrl": "/exam-media/ba7-student.jpg",
        "text": "اُنْظُرْ إِلَى الصُّوْرَة ! هَلْ هِيَ تِلْمِيْذَةٌ ؟ ...",
        "options": [
          {
            "key": "A",
            "text": "نَعَمْ، هِيَ تِلْمِيْذَةٌ"
          },
          {
            "key": "B",
            "text": "لاَ، هِيَ تِلْمِيْذَةٌ"
          },
          {
            "key": "C",
            "text": "نَعَمْ، هُوَ تِلْمِيْذٌ"
          },
          {
            "key": "D",
            "text": "لاَ، هُوَ تِلْمِيْذٌ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 13,
        "imageUrl": "/exam-media/ba7-doctor.png",
        "text": "مَنْ هَذَا ؟ ...",
        "options": [
          {
            "key": "A",
            "text": "هَذَا خَادِمٌ"
          },
          {
            "key": "B",
            "text": "هَذَا مُدَرِّسٌ"
          },
          {
            "key": "C",
            "text": "هَذَا طَبِيْبٌ"
          },
          {
            "key": "D",
            "text": "هَذَا تِلْمِيْذٌ"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": ".......... ؟ نَعَمْ، أَنَا تِلْمِيْذَةٌ",
        "options": [
          {
            "key": "A",
            "text": "هَلْ أَنْتِ تِلْمِيْذَةٌ"
          },
          {
            "key": "B",
            "text": "هَلْ أَنْتَ تِلْمِيْذَةٌ"
          },
          {
            "key": "C",
            "text": "هَلْ أَنْتِ أُسْتَاذَةٌ"
          },
          {
            "key": "D",
            "text": "مَنْ أَنْتِ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 15,
        "text": "<u>هُوَ</u> تِلْمِيْذٌ. اَلَّتِى تَحْتَهَا خَطٌّ تَدُلُّ عَلى ...",
        "options": [
          {
            "key": "A",
            "text": "مُبْتَدَأٌ"
          },
          {
            "key": "B",
            "text": "خَبَرٌ"
          },
          {
            "key": "C",
            "text": "نَعَتْ"
          },
          {
            "key": "D",
            "text": "مَفْعُوْل بِهْ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "هَذِهِ <u>تِلْمِيْذَةٌ</u>. اَلَّتِى تَحْتَهَا خَطٌّ تَدُلُّ عَلى ...",
        "options": [
          {
            "key": "A",
            "text": "مُبْتَدَأٌ"
          },
          {
            "key": "B",
            "text": "خَبَرٌ"
          },
          {
            "key": "C",
            "text": "نَعَتْ"
          },
          {
            "key": "D",
            "text": "مَفْعُوْل بِهْ"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "context": "هَذِهِ مَكْتَبَةٌ، الْمَكْتَبَةُ كَبِيْرَةٌ وَهِيَ مُنَظَّمَةٌ وَجَمِيْلَةٌ أَيْضًا، الْفَصْلُ وَاسِعٌ وَجَمِيْلٌ.\nهَذِهِ صُوْرَةٌ هِيَ عَلَى الْحَائِطِ. وَهَذِهِ سَاعَةٌ ، السَّاعَةُ فَوْقَ السَبُّوْرَةِ.",
        "text": "اَيْنَ سَاعَةٌ ؟ هِيَ ...",
        "options": [
          {
            "key": "A",
            "text": "فِى الْفَصْلِ"
          },
          {
            "key": "B",
            "text": "فَوْقَ السَبُّوْرَة"
          },
          {
            "key": "C",
            "text": "وَرَاء الْمَكْتَب"
          },
          {
            "key": "D",
            "text": "اَمَامَ الْفَصْلِ"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "context": "هَذِهِ مَكْتَبَةٌ، الْمَكْتَبَةُ كَبِيْرَةٌ وَهِيَ مُنَظَّمَةٌ وَجَمِيْلَةٌ أَيْضًا، الْفَصْلُ وَاسِعٌ وَجَمِيْلٌ.\nهَذِهِ صُوْرَةٌ هِيَ عَلَى الْحَائِطِ. وَهَذِهِ سَاعَةٌ ، السَّاعَةُ فَوْقَ السَبُّوْرَةِ.",
        "text": "هَلْ الْفَصْلُ وَاسِعٌ ؟",
        "options": [
          {
            "key": "A",
            "text": "لاَ، الْفَصْلُ ضَيِّقٌ"
          },
          {
            "key": "B",
            "text": "لاَ، الْفَصْلُ وَاسِعٌ"
          },
          {
            "key": "C",
            "text": "نَعَمْ ، الْفَصْلُ كَبِيْرٌ"
          },
          {
            "key": "D",
            "text": "نَعَمْ ، الْفَصْلُ وَاسِعٌ"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 19,
        "text": "<u>هَذَا مَلْعَب، الْمَلْعَب وَاسِعٌ</u>، التَرْجَمَةُ الصَحِيْحَة هِيَ ...",
        "options": [
          {
            "key": "A",
            "text": "Ini lapangan, lapangan itu luas"
          },
          {
            "key": "B",
            "text": "Itu lapangan, lapangan itu luas"
          },
          {
            "key": "C",
            "text": "Ini lapangan, lapangan itu besar"
          },
          {
            "key": "D",
            "text": "Ini lapangan, lapangan itu sempit"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "“Kantin itu di samping laboratorium bahasa” التَرْجَمَةُ الصَحِيْحَة هِيَ ...",
        "options": [
          {
            "key": "A",
            "text": "اْلَمعْمَلُ وَرَاءَ اْلَمقْصَفِ"
          },
          {
            "key": "B",
            "text": "اْلَمقْصَفُ بِجِوَار اْلَمعْمَلِ"
          },
          {
            "key": "C",
            "text": "اْلَمقْصَفُ بِجِوَار اْلَمعْمَلِ اللُغَةِ"
          },
          {
            "key": "D",
            "text": "الاِدَارَةُ أَمَامَ اْلَمقْصَفِ"
          }
        ],
        "answerKey": "C"
      }
    ],
    "dayOrder": 5,
    "dayLabel": "Hari Ke-5 • Jum’at, 27 Nov 2026",
    "sessionOrder": 1
  },
  {
    "id": "exam-ba-viii",
    "code": "ASAS-BA-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Arab Kelas VIII",
    "subject": "Bahasa Arab",
    "classLevel": "VIII",
    "scheduleText": "Jum’at, 27 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "imageUrl": "/exam-media/ba8-clock.jpeg",
        "text": "كَمِ السَّاعَةُ الآنَ ؟ (Perhatikan gambar jam di atas)",
        "options": [
          {
            "key": "A",
            "text": "السَّاعَةُ الْعَاشِرَة وَعَشْرُ دَقَائِقَ"
          },
          {
            "key": "B",
            "text": "السَّاعَةُ الْعَاشِرَة وَعِشْرِيْنَ دَقَائِقَ"
          },
          {
            "key": "C",
            "text": "السَّاعَةُ الْعَاشِرَة وَخَمْسُ دَقَائِقَ"
          },
          {
            "key": "D",
            "text": "السَّاعَةُ الْعَاشِرَة وَاَرْبَعَة دَقَائِقَ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 2,
        "text": "الآنَ السَّاعَة : <u>05.15</u>",
        "options": [
          {
            "key": "A",
            "text": "الخَمْسَةُ وَالنِّصْف"
          },
          {
            "key": "B",
            "text": "الخَامِسَةُ وَالنِّصْف"
          },
          {
            "key": "C",
            "text": "الخَامِسَةُ وَالرُّبْع"
          },
          {
            "key": "D",
            "text": "الخَمْسَةُ وَالرُّبْع"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "text": "..... يَذْهَبُ أَحْمَدُ إِلَى اْلَمْدَرَسَةِ ؟ يَذْهَبُ أَحْمَدُ إِلَى اْلَمْدَرَسَةِ فِي السَّاعَةِ السَّادِسَةِ صَبَاحًا",
        "options": [
          {
            "key": "A",
            "text": "كَمِ السَّاعَة الأَن"
          },
          {
            "key": "B",
            "text": "فِى اَيِّ سَاعَةٍ"
          },
          {
            "key": "C",
            "text": "فِى كَمْ سَاعَة"
          },
          {
            "key": "D",
            "text": "كَمْ سَاعَة"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "...... ؟ السَّاعَةُ اْلأَنَ السَّابِعَةُ",
        "options": [
          {
            "key": "A",
            "text": "كَمِ السَّاعَة الأَن"
          },
          {
            "key": "B",
            "text": "فِى اَيِّ سَاعَةٍ"
          },
          {
            "key": "C",
            "text": "فِى كَمْ سَاعَة"
          },
          {
            "key": "D",
            "text": "كَمْ سَاعَة"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 5,
        "text": "تُصَلِّى أُخْتِيْ الصُّبْحَ في السَّاعَةِ <u>(04.30)</u>",
        "options": [
          {
            "key": "A",
            "text": "الرَّابِعَة وَالرُّبْع"
          },
          {
            "key": "B",
            "text": "الرَّابِعَة إِلاَّ النِّصْف"
          },
          {
            "key": "C",
            "text": "الرَّابِعَة إِلاَّ الرُّبْع"
          },
          {
            "key": "D",
            "text": "الرَّابِعَة وَالنِّصْف"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 6,
        "text": "بَعْدَ أَنْ يُّذَاكِرَ أَحْمَد الدَّرْسَ, هُوَ ... فِي السَّاعَةِ التَّاسِعَة تَمَامًا فِى غُرْفَةِ النَّوْمِ",
        "options": [
          {
            "key": "A",
            "text": "يَقُوْمُ"
          },
          {
            "key": "B",
            "text": "يَطْبَخُ"
          },
          {
            "key": "C",
            "text": "يَكْتُبُ"
          },
          {
            "key": "D",
            "text": "يَنَامُ"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 7,
        "text": "الْمُدَرِّس : .......... ؟\nالطَّالِب : تَبْتَدِأُ الإِسْتِرَاحَة مِنَ الدِّرَاسَةِ فِي السَّاعَةِ التَّاسِعَةِ وَالنِّصْفِ",
        "options": [
          {
            "key": "A",
            "text": "أَيِّ سَاعَةِ مِنَ الدِّرَاسَةِ فِي السَّاعَةِ وَالنِّصْف"
          },
          {
            "key": "B",
            "text": "فِي أَيِّ سَاعَةٍ تَبْتَدِأُ الإِسْتِرَاحَةِ مِنَ الدِّرَاسَةِ"
          },
          {
            "key": "C",
            "text": "كَمْ السَّاعَة تَبْتَدِأُ الإِسْتِرَاحَة"
          },
          {
            "key": "D",
            "text": "أَيْنَ السَّاعَة الإِسْتِرَاحَة مِنَ الدِّرَاسَةِ"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "تُصَلِّي الْعَصْرَ فِي السَّاعَةِ الثّاَلِثَة <u>وَالرُّبْع</u>. اَلْعِبَارَةُ الأُخْرَى لِكَلِمَةِ الَّتِي تَحْتَهَا خَطٌّ هٍيَ : ...",
        "options": [
          {
            "key": "A",
            "text": "ثَلاَثَة دَقَائِق"
          },
          {
            "key": "B",
            "text": "خَمْسَة عَشَر دَقِيْقَة"
          },
          {
            "key": "C",
            "text": "أَرْبَع عَشَر دَقَائِقَ"
          },
          {
            "key": "D",
            "text": "عَشْرَة دَقِيْقَةً"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 9,
        "text": "يَتَنَاوَلُ أَحْمَد الْفُطُوْرَ فِى السَّاعَةِ السَّادِسَةِ وَالرُّبْعِ، التَّرْجَمَةُ الصَّحِيْحَة هٍيَ ...",
        "options": [
          {
            "key": "A",
            "text": "Ahmad sarapan pagi pada pukul 06.15"
          },
          {
            "key": "B",
            "text": "Ahmad sarapan pagi pada pukul 06.05"
          },
          {
            "key": "C",
            "text": "Ahmad sarapan pagi pada pukul 06.10"
          },
          {
            "key": "D",
            "text": "Ahmad sarapan pagi pada pukul 06.20"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 10,
        "text": "... ؟ الطُّلاَّب يَدْرُسُوْنَ فِى الْمَدْرَسَة ثَمَانِي حِصَصٍ",
        "options": [
          {
            "key": "A",
            "text": "كَمْ سَاعَةً يَدْرُسُ الطُّلاَّب فِى الْمَدْرَسَة ؟"
          },
          {
            "key": "B",
            "text": "فِى اَيِّ سَاعَةٍ يَدْرُسُ الطُّلاَّب فِى الْمَدْرَسَة ؟"
          },
          {
            "key": "C",
            "text": "كَمْ سَاعَةً يَدْرُسُ الطُّلاَّب فِى الْبَيْتِ ؟"
          },
          {
            "key": "D",
            "text": "فِى اَيِّ سَاعَةٍ يَدْرُسُ الطُّلاَّب فِى الْبَيْتِ ؟"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 11,
        "text": "“Muhammad pergi ke Sekolah pada pukul 06.30” — Terjemahan bahasa Arab yang tepat adalah ...",
        "options": [
          {
            "key": "A",
            "text": "يَذْهَبُ مُحَمَّدٌ إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ السَّادِسَةِ وَالرُّبْع"
          },
          {
            "key": "B",
            "text": "يَذْهَبُ مُحَمَّدٌ إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ"
          },
          {
            "key": "C",
            "text": "يَذْهَبُ مُحَمَّدٌ إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ الْخَامِسَةِ وَالنِّصْفِ"
          },
          {
            "key": "D",
            "text": "يَذْهَبُ مُحَمَّدٌ إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ الْخَامِسَةِ وَالرُّبْعِ"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "الجُمْلَة الصَحِيْحَة هي ...",
        "options": [
          {
            "key": "A",
            "text": "التِلْمِيْذَةُ تَقْرَأُ الْقُرْآن فِى السَّاعَةِ السَّابِعَة لَيْلاً"
          },
          {
            "key": "B",
            "text": "التِلْمِيْذَةُ تَقْرَأُ الْقُرْآن فِى السَّاعَةِ السَبْعَة لَيْلاً"
          },
          {
            "key": "C",
            "text": "التِلْمِيْذَةُ تَقْرَأُ الْقُرْآن فِى السَّاعَةِ التِسْعَة لَيْلاً"
          },
          {
            "key": "D",
            "text": "التِلْمِيْذَةُ تَقْرَأُ الْقُرْآن فِى السَّاعَةِ العَسَرَة لَيْلاً"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 13,
        "text": "Susunlah kata-kata berikut menjadi kalimat yang benar:\n(1) فِى — (2) الدُّرُوْسَ — (3) السَّابِعَة — (4) السَّاعَةِ — (5) اُذَاكِرُ — (6) أَنَا — (7) لَيْلاً",
        "options": [
          {
            "key": "A",
            "text": "6 - 5 - 1 - 2 - 4 - 3 - 7"
          },
          {
            "key": "B",
            "text": "6 - 5 - 2 - 1 - 4 - 3 - 7"
          },
          {
            "key": "C",
            "text": "5 - 6 - 2 - 1 - 4 - 3 - 7"
          },
          {
            "key": "D",
            "text": "5 - 6 - 1 - 2 - 4 - 3 - 7"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "text": "<u>يَتَعَلَّمُ</u> الطَّالِب فِيْ السَّاعَةِ السَّابِعَةِ حَتَّى السَّاعَةِ الرَّابِعَةِ مَسَاءً. مَعْنَى لِكَلِمَةِ الَّتِي تَحْتَهَا خَطٌّ هٍيَ : ...",
        "options": [
          {
            "key": "A",
            "text": "Pergi"
          },
          {
            "key": "B",
            "text": "Istirahat"
          },
          {
            "key": "C",
            "text": "Pulang"
          },
          {
            "key": "D",
            "text": "Belajar"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "text": "... أَحْمَد وَأَصْدِقَائُهُ اللُّغَةَ الْعَرَبِيَّة فِى السَّاعَةِ التَّاسِعَة",
        "options": [
          {
            "key": "A",
            "text": "يَقُوْمُ"
          },
          {
            "key": "B",
            "text": "يَذْهَبُ"
          },
          {
            "key": "C",
            "text": "يَشْرَبُ"
          },
          {
            "key": "D",
            "text": "يَدْرُسُ"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 16,
        "text": "يَتَنَاوَلُ أَحْمَد الْفُطُوْرَ فِى السَّاعَةِ السَّادِسَةِ <u>صَبَاحًا</u> . مَعْنَى لِكَلِمَةِ الَّتِي تَحْتَهَا خَطٌّ هٍيَ : ...",
        "options": [
          {
            "key": "A",
            "text": "Pagi / Pagi-pagi (Pergi berangkat)"
          },
          {
            "key": "B",
            "text": "Siang"
          },
          {
            "key": "C",
            "text": "Sore"
          },
          {
            "key": "D",
            "text": "Malam"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 17,
        "text": "يَرْجِعُ الطَّالِب مِنَ اْلمدْرَسَةِ ، التَّرْجَمَةُ هذِهِ الْكَلِمَات ...",
        "options": [
          {
            "key": "A",
            "text": "Guru itu pergi ke sekolah"
          },
          {
            "key": "B",
            "text": "Guru itu pulang dari sekolah"
          },
          {
            "key": "C",
            "text": "Siswa itu pergi ke sekolah"
          },
          {
            "key": "D",
            "text": "Siswa itu pulang dari sekolah"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 18,
        "context": "هَذِهِ الْقِرَاءَة لِرَقْمِ 18 وَ 19 :\nيَقُوْمُ حَسَنْ مِنَ النَّوْمِ فِى السَّاعَةِ الرَّابِعَة , وَيُصَلِّى الصُّبْحَ فِى السَّاعَةِ الرَّابِعَة وَالنِّصْفِ , وَيَتَنَاوَلُ الْفُطُوْرَ فِى السَّاعَةِ السَّادِسَةِ ثُمَّ يَذْهَبُ إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ",
        "text": "مَاذَا يَعْمَلُ حَسَنْ فِى السَّاعَة الرَّابِعَة وَالنِّصْفِ ؟ ...",
        "options": [
          {
            "key": "A",
            "text": "يَقُوْمُ مِنَ النَّوْمِ"
          },
          {
            "key": "B",
            "text": "يَتَنَاوَلُ الْفُطُوْرَ"
          },
          {
            "key": "C",
            "text": "يُصَلِّى الصُّبْحَ"
          },
          {
            "key": "D",
            "text": "يَذْهَبُ إِلَى الْمَدْرَسَةٍ"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 19,
        "context": "هَذِهِ الْقِرَاءَة لِرَقْمِ 18 وَ 19 :\nيَقُوْمُ حَسَنْ مِنَ النَّوْمِ فِى السَّاعَةِ الرَّابِعَة , وَيُصَلِّى الصُّبْحَ فِى السَّاعَةِ الرَّابِعَة وَالنِّصْفِ , وَيَتَنَاوَلُ الْفُطُوْرَ فِى السَّاعَةِ السَّادِسَةِ ثُمَّ يَذْهَبُ إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ السَّادِسَةِ وَالنِّصْفِ",
        "text": "فِى اَيِّ سَاعَةٍ يَذْهَبُ حَسَنْ إِلَى الْمَدْرَسَةِ ؟",
        "options": [
          {
            "key": "A",
            "text": "فِى السَّاعَةِ الرَّابِعَة"
          },
          {
            "key": "B",
            "text": "فِى السَّاعَةِ السَّادِسَة"
          },
          {
            "key": "C",
            "text": "فِى السَّاعَةِ الرَّابِعَة وَالنِّصْف"
          },
          {
            "key": "D",
            "text": "فِى السَّاعَةِ السَّادِسَة وَالنِّصْف"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 20,
        "text": "أُمِّيْ <u>تَطْبَخُ الطَّعَامَ فِى الْمَطْبَخِ</u>. الترْجَمَة الصحيحة .....",
        "options": [
          {
            "key": "A",
            "text": "Ibuku menyediakan makanan di dapur"
          },
          {
            "key": "B",
            "text": "Ibuku memasak makanan di dapur"
          },
          {
            "key": "C",
            "text": "Ibuku menyediakan minuman di dapur"
          },
          {
            "key": "D",
            "text": "Ibuku memasak minuman di dapur"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 21,
        "text": "هُوَ يَكْتُبُ الدَّرْسَ وَ ... شَرْحَ الْاُسْتَاذِ",
        "options": [
          {
            "key": "A",
            "text": "يَقْرَأُ"
          },
          {
            "key": "B",
            "text": "يَجْلِسُ"
          },
          {
            "key": "C",
            "text": "يَسْتَمِعُ"
          },
          {
            "key": "D",
            "text": "يَدْرُسُ"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "هَلْ يَذْهَبُ خَالِد إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ السَّادِسَةِ ؟",
        "options": [
          {
            "key": "A",
            "text": "نَعَمْ، هُوَ يَذْهَبُ إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ السَّادِسَةِ"
          },
          {
            "key": "B",
            "text": "لَا، هُوَ يَذْهَبُ إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ السَّادِسَةِ"
          },
          {
            "key": "C",
            "text": "نَعَمْ، هُوَ يَذْهَبُ إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ السَّابِعَةِ"
          },
          {
            "key": "D",
            "text": "نَعَمْ، هُوَ يَذْهَبُ إِلَى الْمَدْرَسَةِ فِى السَّاعَةِ السَّابِعَةِ وَالنِّصْف"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 23,
        "context": "الْعَمّ : كَمْ ..(23).. تَدْرُسُ فِى اْلاُسْبُوْعِ ؟\nالطَّالِب : ..(24).. فِى اْلاُسْبُوْعِ سِتَّةَ اَيَّامٍ",
        "text": "Kata yang tepat untuk mengisi nomor (23) adalah ...",
        "options": [
          {
            "key": "A",
            "text": "لَيْلاً"
          },
          {
            "key": "B",
            "text": "يَوْمًا"
          },
          {
            "key": "C",
            "text": "صَبَاحًا"
          },
          {
            "key": "D",
            "text": "نَهَارًا"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "context": "الْعَمّ : كَمْ ..(23).. تَدْرُسُ فِى اْلاُسْبُوْعِ ؟\nالطَّالِب : ..(24).. فِى اْلاُسْبُوْعِ سِتَّةَ اَيَّامٍ",
        "text": "Kata yang tepat untuk mengisi nomor (24) adalah ...",
        "options": [
          {
            "key": "A",
            "text": "اَدْرُسُ"
          },
          {
            "key": "B",
            "text": "يَدْرُسُ"
          },
          {
            "key": "C",
            "text": "تَدْرُسُ"
          },
          {
            "key": "D",
            "text": "نَدْرُسُ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 25,
        "text": "كَمْ دَقِيْقَةً فِى السَّاعَةِ ؟",
        "options": [
          {
            "key": "A",
            "text": "فِى السَاعَةِ عِشْرُوْنَ دَقِيْقَة"
          },
          {
            "key": "B",
            "text": "فِى السَاعَةِ ثَلاَثُوْنَ دَقِيْقَة"
          },
          {
            "key": "C",
            "text": "فِى السَّاعَةِ سِتُّوْنَ دَقِيْقَة"
          },
          {
            "key": "D",
            "text": "فِى السَّاعَةِ سَبْعُوْنَ دَقِيْقَة"
          }
        ],
        "answerKey": "C"
      }
    ],
    "dayOrder": 5,
    "dayLabel": "Hari Ke-5 • Jum’at, 27 Nov 2026",
    "sessionOrder": 1
  },
  {
    "id": "exam-ips-vii",
    "code": "ASAS-IPS-VII",
    "title": "Asesmen Sumatif Akhir Semester — IPS Kelas VII",
    "subject": "Ilmu Pengetahuan Sosial (IPS)",
    "classLevel": "VII",
    "scheduleText": "Sabtu, 28 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 6,
    "dayLabel": "Hari Ke-6 • Sabtu, 28 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Indonesia terletak di antara dua benua, yaitu….",
        "options": [
          {
            "key": "A",
            "text": "Asia dan Afrika"
          },
          {
            "key": "B",
            "text": "Asia dan Australia"
          },
          {
            "key": "C",
            "text": "Asia dan Amerika"
          },
          {
            "key": "D",
            "text": "Afrika dan Eropa"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Garis lintang berfungsi untuk menentukan….",
        "options": [
          {
            "key": "A",
            "text": "Zona waktu"
          },
          {
            "key": "B",
            "text": "Iklim"
          },
          {
            "key": "C",
            "text": "Musim"
          },
          {
            "key": "D",
            "text": "Suhu permukaan laut"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "Batas wilayah Indonesia di sebelah barat adalah negara….",
        "options": [
          {
            "key": "A",
            "text": "Filipina"
          },
          {
            "key": "B",
            "text": "India"
          },
          {
            "key": "C",
            "text": "Malaysia"
          },
          {
            "key": "D",
            "text": "Papua Nugini"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "Peta yang menggambarkan kenampakan alam disebut peta….",
        "options": [
          {
            "key": "A",
            "text": "Umum"
          },
          {
            "key": "B",
            "text": "Tematik"
          },
          {
            "key": "C",
            "text": "Khusus"
          },
          {
            "key": "D",
            "text": "Lingkungan"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 5,
        "text": "Berikut yang termasuk kenampakan buatan adalah….",
        "options": [
          {
            "key": "A",
            "text": "Danau"
          },
          {
            "key": "B",
            "text": "Sungai"
          },
          {
            "key": "C",
            "text": "Waduk"
          },
          {
            "key": "D",
            "text": "Gunung"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Alat untuk mengukur derajat kemiringan permukaan bumi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Kompas"
          },
          {
            "key": "B",
            "text": "Altimeter"
          },
          {
            "key": "C",
            "text": "Klinometer"
          },
          {
            "key": "D",
            "text": "Barometer"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 7,
        "text": "Proses pengikisan permukaan bumi oleh angin atau air disebut….",
        "options": [
          {
            "key": "A",
            "text": "Erosi"
          },
          {
            "key": "B",
            "text": "Abrasi"
          },
          {
            "key": "C",
            "text": "Sedimentasi"
          },
          {
            "key": "D",
            "text": "Korosi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 8,
        "text": "Berikut yang termasuk bencana alam geologis adalah….",
        "options": [
          {
            "key": "A",
            "text": "Gempa bumi"
          },
          {
            "key": "B",
            "text": "Banjir"
          },
          {
            "key": "C",
            "text": "Kekeringan"
          },
          {
            "key": "D",
            "text": "Angin puting beliung"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 9,
        "text": "Gunung yang masih aktif disebut….",
        "options": [
          {
            "key": "A",
            "text": "Gunung mati"
          },
          {
            "key": "B",
            "text": "Gunung berapi"
          },
          {
            "key": "C",
            "text": "Gunung tegak"
          },
          {
            "key": "D",
            "text": "Gunung lipat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 10,
        "text": "Wilayah dengan curah hujan tinggi biasanya memiliki vegetasi….",
        "options": [
          {
            "key": "A",
            "text": "Sabana"
          },
          {
            "key": "B",
            "text": "Hutan hujan tropis"
          },
          {
            "key": "C",
            "text": "Stepa"
          },
          {
            "key": "D",
            "text": "Tundra"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 11,
        "text": "Manusia purba yang ditemukan di Sangiran adalah….",
        "options": [
          {
            "key": "A",
            "text": "Homo sapiens"
          },
          {
            "key": "B",
            "text": "Homo erectus"
          },
          {
            "key": "C",
            "text": "Homo soloensis"
          },
          {
            "key": "D",
            "text": "Homo wajakensis"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Zaman batu tua disebut zaman….",
        "options": [
          {
            "key": "A",
            "text": "Neolitikum"
          },
          {
            "key": "B",
            "text": "Paleolitikum"
          },
          {
            "key": "C",
            "text": "Megalitikum"
          },
          {
            "key": "D",
            "text": "Mesolitikum"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Alat zaman neolitikum yang terkenal adalah….",
        "options": [
          {
            "key": "A",
            "text": "Kapak perimbas"
          },
          {
            "key": "B",
            "text": "Kapak genggam"
          },
          {
            "key": "C",
            "text": "Kapak lonjong"
          },
          {
            "key": "D",
            "text": "Alat serpih"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "Kerajaan Hindu-Buddha tertua di Indonesia adalah….",
        "options": [
          {
            "key": "A",
            "text": "Majapahit"
          },
          {
            "key": "B",
            "text": "Sriwijaya"
          },
          {
            "key": "C",
            "text": "Kutai"
          },
          {
            "key": "D",
            "text": "Mataram"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Kerajaan Sriwijaya berkembang di daerah….",
        "options": [
          {
            "key": "A",
            "text": "Sumatra Utara"
          },
          {
            "key": "B",
            "text": "Jawa Timur"
          },
          {
            "key": "C",
            "text": "Sumatra Selatan"
          },
          {
            "key": "D",
            "text": "Kalimantan Timur"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 16,
        "text": "Pendiri Kerajaan Majapahit adalah….",
        "options": [
          {
            "key": "A",
            "text": "Ken Arok"
          },
          {
            "key": "B",
            "text": "Gajah Mada"
          },
          {
            "key": "C",
            "text": "Raden Wijaya"
          },
          {
            "key": "D",
            "text": "Hayam Wuruk"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 17,
        "text": "Sumpah Palapa berasal dari tokoh….",
        "options": [
          {
            "key": "A",
            "text": "Hayam Wuruk"
          },
          {
            "key": "B",
            "text": "Raden Wijaya"
          },
          {
            "key": "C",
            "text": "Ken Dedes"
          },
          {
            "key": "D",
            "text": "Gajah Mada"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 18,
        "text": "Masuknya Islam ke Indonesia dipermudah oleh kegiatan….",
        "options": [
          {
            "key": "A",
            "text": "Politik"
          },
          {
            "key": "B",
            "text": "Perdagangan"
          },
          {
            "key": "C",
            "text": "Perang"
          },
          {
            "key": "D",
            "text": "Penjajahan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "Tokoh penting dari Kesultanan Demak adalah….",
        "options": [
          {
            "key": "A",
            "text": "Sultan Malik As-Saleh"
          },
          {
            "key": "B",
            "text": "Raden Patah"
          },
          {
            "key": "C",
            "text": "Sultan Iskandar Muda"
          },
          {
            "key": "D",
            "text": "Sultan Agung"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 20,
        "text": "Penulisan sejarah secara ilmiah harus menggunakan….",
        "options": [
          {
            "key": "A",
            "text": "Imajinasi"
          },
          {
            "key": "B",
            "text": "Cerita rakyat"
          },
          {
            "key": "C",
            "text": "Sumber sejarah"
          },
          {
            "key": "D",
            "text": "Ramalan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Ketika seseorang belajar norma dan nilai masyarakat, proses itu disebut….",
        "options": [
          {
            "key": "A",
            "text": "Interaksi sosial"
          },
          {
            "key": "B",
            "text": "Asimilasi"
          },
          {
            "key": "C",
            "text": "Sosialisasi"
          },
          {
            "key": "D",
            "text": "Akulturasi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "Contoh interaksi sosial adalah….",
        "options": [
          {
            "key": "A",
            "text": "Duduk sendiri"
          },
          {
            "key": "B",
            "text": "Membaca buku"
          },
          {
            "key": "C",
            "text": "Bertukar informasi"
          },
          {
            "key": "D",
            "text": "Tidur di rumah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 23,
        "text": "Norma yang memiliki sanksi paling tegas adalah….",
        "options": [
          {
            "key": "A",
            "text": "Adat"
          },
          {
            "key": "B",
            "text": "Mores"
          },
          {
            "key": "C",
            "text": "Folkways"
          },
          {
            "key": "D",
            "text": "Hukum"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 24,
        "text": "Proses masuknya budaya asing tanpa menghilangkan budaya asli disebut….",
        "options": [
          {
            "key": "A",
            "text": "Asimilasi"
          },
          {
            "key": "B",
            "text": "Akulturasi"
          },
          {
            "key": "C",
            "text": "Difusi"
          },
          {
            "key": "D",
            "text": "Integrasi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Penyebab konflik sosial adalah….",
        "options": [
          {
            "key": "A",
            "text": "Perbedaan pendapat"
          },
          {
            "key": "B",
            "text": "Kerjasama"
          },
          {
            "key": "C",
            "text": "Integrasi"
          },
          {
            "key": "D",
            "text": "Toleransi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 26,
        "text": "Bentuk kerja sama antara dua kelompok disebut….",
        "options": [
          {
            "key": "A",
            "text": "Koalisi"
          },
          {
            "key": "B",
            "text": "Akomodasi"
          },
          {
            "key": "C",
            "text": "Kompetisi"
          },
          {
            "key": "D",
            "text": "Asimilasi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 27,
        "text": "Contoh mobilitas sosial vertikal naik adalah….",
        "options": [
          {
            "key": "A",
            "text": "Pindah rumah"
          },
          {
            "key": "B",
            "text": "Naik jabatan"
          },
          {
            "key": "C",
            "text": "Mutasi"
          },
          {
            "key": "D",
            "text": "Turun pangkat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 28,
        "text": "Masyarakat pedesaan biasanya memiliki ciri….",
        "options": [
          {
            "key": "A",
            "text": "Mobilitas tinggi"
          },
          {
            "key": "B",
            "text": "Hubungan sosial renggang"
          },
          {
            "key": "C",
            "text": "Solidaritas kuat"
          },
          {
            "key": "D",
            "text": "Individualisme kuat"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 29,
        "text": "Contoh nilai sosial adalah….",
        "options": [
          {
            "key": "A",
            "text": "Menjaga kebersihan"
          },
          {
            "key": "B",
            "text": "Bermain bola"
          },
          {
            "key": "C",
            "text": "Mengerjakan PR"
          },
          {
            "key": "D",
            "text": "Berbelanja"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 30,
        "text": "Perilaku yang bertentangan dengan norma disebut….",
        "options": [
          {
            "key": "A",
            "text": "Konsensus"
          },
          {
            "key": "B",
            "text": "Deviasi"
          },
          {
            "key": "C",
            "text": "Integrasi"
          },
          {
            "key": "D",
            "text": "Kooperasi"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-ips-viii",
    "code": "ASAS-IPS-VIII",
    "title": "Asesmen Sumatif Akhir Semester — IPS Kelas VIII",
    "subject": "Ilmu Pengetahuan Sosial (IPS)",
    "classLevel": "VIII",
    "scheduleText": "Sabtu, 28 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 6,
    "dayLabel": "Hari Ke-6 • Sabtu, 28 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Interaksi antarnegara dapat terjadi karena adanya….",
        "options": [
          {
            "key": "A",
            "text": "Perbedaan mata uang"
          },
          {
            "key": "B",
            "text": "Kesamaan budaya"
          },
          {
            "key": "C",
            "text": "Perbedaan kebutuhan dan sumber daya"
          },
          {
            "key": "D",
            "text": "Persaingan penduduk"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Bentuk interaksi antarnegara dalam bidang ekonomi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Pertukaran pelajar"
          },
          {
            "key": "B",
            "text": "Kerjasama militer"
          },
          {
            "key": "C",
            "text": "Perdagangan internasional"
          },
          {
            "key": "D",
            "text": "Perjanjian batas wilayah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 3,
        "text": "Penyebab utama terjadinya perdagangan internasional adalah….",
        "options": [
          {
            "key": "A",
            "text": "Semakin sedikit barang"
          },
          {
            "key": "B",
            "text": "Kebutuhan negara berbeda-beda"
          },
          {
            "key": "C",
            "text": "Negara ingin bersaing"
          },
          {
            "key": "D",
            "text": "Semua negara sama kebutuhannya"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 4,
        "text": "Ekspor adalah kegiatan….",
        "options": [
          {
            "key": "A",
            "text": "Menjual barang dari luar negeri"
          },
          {
            "key": "B",
            "text": "Membeli barang dari luar negeri"
          },
          {
            "key": "C",
            "text": "Menjual barang ke luar negeri"
          },
          {
            "key": "D",
            "text": "Menyimpan barang di dalam negeri"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Impor dilakukan jika….",
        "options": [
          {
            "key": "A",
            "text": "Barang di luar negeri mahal"
          },
          {
            "key": "B",
            "text": "Barang dibutuhkan tetapi tidak ada di dalam negeri"
          },
          {
            "key": "C",
            "text": "Produksi nasional berlimpah"
          },
          {
            "key": "D",
            "text": "Negara ingin menghemat devisa"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 6,
        "text": "Contoh barang ekspor Indonesia adalah….",
        "options": [
          {
            "key": "A",
            "text": "Pesawat udara"
          },
          {
            "key": "B",
            "text": "Padi"
          },
          {
            "key": "C",
            "text": "Kelapa sawit"
          },
          {
            "key": "D",
            "text": "Kapal selam"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 7,
        "text": "Perjanjian kerja sama dua negara disebut….",
        "options": [
          {
            "key": "A",
            "text": "Multilateral"
          },
          {
            "key": "B",
            "text": "Bilateral"
          },
          {
            "key": "C",
            "text": "Regional"
          },
          {
            "key": "D",
            "text": "Universal"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "Kerjasama ekonomi yang melibatkan banyak negara disebut kerja sama….",
        "options": [
          {
            "key": "A",
            "text": "Internasional"
          },
          {
            "key": "B",
            "text": "Regional"
          },
          {
            "key": "C",
            "text": "Nasional"
          },
          {
            "key": "D",
            "text": "Domestik"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 9,
        "text": "Bantuan yang diberikan suatu negara kepada negara lain disebut….",
        "options": [
          {
            "key": "A",
            "text": "Ekspor"
          },
          {
            "key": "B",
            "text": "Impor"
          },
          {
            "key": "C",
            "text": "Donasi"
          },
          {
            "key": "D",
            "text": "Hibah"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 10,
        "text": "Interaksi negara dalam bidang pendidikan berbentuk….",
        "options": [
          {
            "key": "A",
            "text": "Bantuan bahan pangan"
          },
          {
            "key": "B",
            "text": "Pertukaran pelajar"
          },
          {
            "key": "C",
            "text": "Bantuan militer"
          },
          {
            "key": "D",
            "text": "Ekspor tekstil"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 11,
        "text": "ASEAN didirikan pada tahun….",
        "options": [
          {
            "key": "A",
            "text": "1955"
          },
          {
            "key": "B",
            "text": "1967"
          },
          {
            "key": "C",
            "text": "1978"
          },
          {
            "key": "D",
            "text": "1990"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Negara pendiri ASEAN kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Indonesia"
          },
          {
            "key": "B",
            "text": "Laos"
          },
          {
            "key": "C",
            "text": "Thailand"
          },
          {
            "key": "D",
            "text": "Malaysia"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Markas besar ASEAN terletak di….",
        "options": [
          {
            "key": "A",
            "text": "Jakarta"
          },
          {
            "key": "B",
            "text": "Bangkok"
          },
          {
            "key": "C",
            "text": "Manila"
          },
          {
            "key": "D",
            "text": "Kuala Lumpur"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 14,
        "text": "Tujuan pembentukan ASEAN adalah….",
        "options": [
          {
            "key": "A",
            "text": "Menciptakan konflik negara"
          },
          {
            "key": "B",
            "text": "Memperluas penjajahan"
          },
          {
            "key": "C",
            "text": "Meningkatkan kesejahteraan bersama"
          },
          {
            "key": "D",
            "text": "Menghapus kerja sama"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Kerja sama ASEAN dalam bidang pendidikan adalah….",
        "options": [
          {
            "key": "A",
            "text": "Pameran dagang"
          },
          {
            "key": "B",
            "text": "Program beasiswa"
          },
          {
            "key": "C",
            "text": "Latihan militer"
          },
          {
            "key": "D",
            "text": "Pengurangan tarif impor"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 16,
        "text": "Produk unggulan Thailand dalam ASEAN adalah….",
        "options": [
          {
            "key": "A",
            "text": "Tekstil"
          },
          {
            "key": "B",
            "text": "Beras"
          },
          {
            "key": "C",
            "text": "Timah"
          },
          {
            "key": "D",
            "text": "Karet"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Negara anggota ASEAN yang tidak memiliki laut adalah….",
        "options": [
          {
            "key": "A",
            "text": "Singapura"
          },
          {
            "key": "B",
            "text": "Laos"
          },
          {
            "key": "C",
            "text": "Kamboja"
          },
          {
            "key": "D",
            "text": "Myanmar"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "AFTA merupakan kerja sama ASEAN dalam bidang….",
        "options": [
          {
            "key": "A",
            "text": "Militer"
          },
          {
            "key": "B",
            "text": "Ekonomi"
          },
          {
            "key": "C",
            "text": "Pendidikan"
          },
          {
            "key": "D",
            "text": "Politik"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "Indonesia berperan sebagai “Poros Maritim Dunia” karena….",
        "options": [
          {
            "key": "A",
            "text": "Negara kepulauan strategis"
          },
          {
            "key": "B",
            "text": "Penduduk paling sedikit"
          },
          {
            "key": "C",
            "text": "Tidak memiliki laut"
          },
          {
            "key": "D",
            "text": "Daerahnya tandus"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "Arti semboyan ASEAN “One Vision, One Identity, One Community” adalah….",
        "options": [
          {
            "key": "A",
            "text": "Negara bersaing bebas"
          },
          {
            "key": "B",
            "text": "Negara bekerja sama untuk kesejahteraan"
          },
          {
            "key": "C",
            "text": "Negara menutup diri"
          },
          {
            "key": "D",
            "text": "Negara bebas berkonflik"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 21,
        "text": "Tujuan utama imperialisme kuno adalah….",
        "options": [
          {
            "key": "A",
            "text": "Penyebaran agama"
          },
          {
            "key": "B",
            "text": "Mencari kekayaan dan rempah-rempah"
          },
          {
            "key": "C",
            "text": "Menyatukan dunia"
          },
          {
            "key": "D",
            "text": "Mengurangi perdagangan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 22,
        "text": "Politik yang memecah belah bangsa Indonesia disebut….",
        "options": [
          {
            "key": "A",
            "text": "Devide et impera"
          },
          {
            "key": "B",
            "text": "Benteng"
          },
          {
            "key": "C",
            "text": "Etis"
          },
          {
            "key": "D",
            "text": "Agraria"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 23,
        "text": "Kedatangan bangsa Eropa ke Indonesia dipicu oleh….",
        "options": [
          {
            "key": "A",
            "text": "Kemiskinan di Eropa"
          },
          {
            "key": "B",
            "text": "Jatuhnya Konstantinopel"
          },
          {
            "key": "C",
            "text": "Banyaknya bencana alam"
          },
          {
            "key": "D",
            "text": "Kekurangan rempah-rempah di Asia"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "text": "VOC didirikan oleh bangsa….",
        "options": [
          {
            "key": "A",
            "text": "Portugis"
          },
          {
            "key": "B",
            "text": "Belanda"
          },
          {
            "key": "C",
            "text": "Inggris"
          },
          {
            "key": "D",
            "text": "Spanyol"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Tugas utama VOC adalah….",
        "options": [
          {
            "key": "A",
            "text": "Membangun sekolah"
          },
          {
            "key": "B",
            "text": "Menguasai perdagangan rempah"
          },
          {
            "key": "C",
            "text": "Membantu petani"
          },
          {
            "key": "D",
            "text": "Mengembangkan pendidikan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 26,
        "text": "Tokoh yang memimpin Perang Diponegoro adalah….",
        "options": [
          {
            "key": "A",
            "text": "Pangeran Antasari"
          },
          {
            "key": "B",
            "text": "Diponegoro"
          },
          {
            "key": "C",
            "text": "Tuanku Imam Bonjol"
          },
          {
            "key": "D",
            "text": "Pattimura"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 27,
        "text": "Sistem tanam paksa dikenal dengan istilah….",
        "options": [
          {
            "key": "A",
            "text": "Cultuurstelsel"
          },
          {
            "key": "B",
            "text": "Rodi"
          },
          {
            "key": "C",
            "text": "Etische Politiek"
          },
          {
            "key": "D",
            "text": "Labelling"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 28,
        "text": "Penyebab utama penderitaan rakyat saat tanam paksa adalah….",
        "options": [
          {
            "key": "A",
            "text": "Bebas memilih tanaman"
          },
          {
            "key": "B",
            "text": "Tidak ada pajak"
          },
          {
            "key": "C",
            "text": "Kerja berat dan hasil tani dirampas"
          },
          {
            "key": "D",
            "text": "Perdagangan meningkat"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 29,
        "text": "Politik etis berisi tiga program kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Migrasi"
          },
          {
            "key": "B",
            "text": "Edukasi"
          },
          {
            "key": "C",
            "text": "Irigasi"
          },
          {
            "key": "D",
            "text": "Militerisasi"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 30,
        "text": "Tujuan kolonialisme adalah….",
        "options": [
          {
            "key": "A",
            "text": "Memajukan negara jajahan"
          },
          {
            "key": "B",
            "text": "Menguasai sumber daya"
          },
          {
            "key": "C",
            "text": "Membantu perdagangan"
          },
          {
            "key": "D",
            "text": "Memberi kemerdekaan"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-ips-ix",
    "code": "ASAS-IPS-IX",
    "title": "Asesmen Sumatif Akhir Semester — IPS Kelas IX",
    "subject": "Ilmu Pengetahuan Sosial (IPS)",
    "classLevel": "IX",
    "scheduleText": "Sabtu, 28 November 2026 • Jam Ke-1 (07.30 – 09.30 WIB)",
    "dayOrder": 6,
    "dayLabel": "Hari Ke-6 • Sabtu, 28 Nov 2026",
    "sessionOrder": 1,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Globalisasi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Penyempitan ruang gerak negara"
          },
          {
            "key": "B",
            "text": "Hilangnya hubungan antarnegara"
          },
          {
            "key": "C",
            "text": "Mendunianya informasi, teknologi, dan hubungan antarnegara"
          },
          {
            "key": "D",
            "text": "Penutupan diri dari negara lain"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Faktor utama pendorong globalisasi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Pendidikan rendah"
          },
          {
            "key": "B",
            "text": "Kemajuan teknologi transportasi dan komunikasi"
          },
          {
            "key": "C",
            "text": "Perang antarnegara"
          },
          {
            "key": "D",
            "text": "Ketergantungan pada impor"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "Dampak positif globalisasi dalam bidang ekonomi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Produk lokal tidak laku"
          },
          {
            "key": "B",
            "text": "Kompetisi tidak sehat"
          },
          {
            "key": "C",
            "text": "Investasi asing meningkat"
          },
          {
            "key": "D",
            "text": "Perdagangan macet"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 4,
        "text": "Salah satu dampak negatif globalisasi pada budaya adalah….",
        "options": [
          {
            "key": "A",
            "text": "Semakin cinta produk lokal"
          },
          {
            "key": "B",
            "text": "Masuknya budaya asing yang buruk"
          },
          {
            "key": "C",
            "text": "Melestarikan budaya bangsa"
          },
          {
            "key": "D",
            "text": "Hidup lebih hemat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "Contoh kerjasama internasional di bidang pendidikan adalah….",
        "options": [
          {
            "key": "A",
            "text": "Ekspor hasil tambang"
          },
          {
            "key": "B",
            "text": "Impor barang elektronik"
          },
          {
            "key": "C",
            "text": "Pertukaran pelajar"
          },
          {
            "key": "D",
            "text": "Kerja sama militer"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Lembaga internasional yang menangani masalah perdamaian dunia adalah….",
        "options": [
          {
            "key": "A",
            "text": "ASEAN"
          },
          {
            "key": "B",
            "text": "PBB"
          },
          {
            "key": "C",
            "text": "WTO"
          },
          {
            "key": "D",
            "text": "IMF"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 7,
        "text": "WTO bergerak di bidang….",
        "options": [
          {
            "key": "A",
            "text": "Perdamaian dunia"
          },
          {
            "key": "B",
            "text": "Perdagangan internasional"
          },
          {
            "key": "C",
            "text": "Keuangan pendidikan"
          },
          {
            "key": "D",
            "text": "Olahraga"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "Kerja sama dua negara disebut kerja sama….",
        "options": [
          {
            "key": "A",
            "text": "Regional"
          },
          {
            "key": "B",
            "text": "Universal"
          },
          {
            "key": "C",
            "text": "Bilateral"
          },
          {
            "key": "D",
            "text": "Multilateral"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 9,
        "text": "ASEAN dibentuk pada tanggal….",
        "options": [
          {
            "key": "A",
            "text": "17 Agustus 1945"
          },
          {
            "key": "B",
            "text": "10 November 1947"
          },
          {
            "key": "C",
            "text": "8 Agustus 1967"
          },
          {
            "key": "D",
            "text": "5 Oktober 1965"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Indonesia termasuk negara pendiri ASEAN bersama….",
        "options": [
          {
            "key": "A",
            "text": "Laos"
          },
          {
            "key": "B",
            "text": "Brunei"
          },
          {
            "key": "C",
            "text": "Myanmar"
          },
          {
            "key": "D",
            "text": "Thailand"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 11,
        "text": "Perdagangan internasional terjadi karena….",
        "options": [
          {
            "key": "A",
            "text": "Negara sama kebutuhan"
          },
          {
            "key": "B",
            "text": "Semua negara punya sumber daya sama"
          },
          {
            "key": "C",
            "text": "Perbedaan sumber daya dan kemampuan produksi"
          },
          {
            "key": "D",
            "text": "Negara tidak membutuhkan barang"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 12,
        "text": "Ekspor adalah kegiatan….",
        "options": [
          {
            "key": "A",
            "text": "Membeli barang dari luar negeri"
          },
          {
            "key": "B",
            "text": "Menjual barang ke luar negeri"
          },
          {
            "key": "C",
            "text": "Menimbun barang di dalam negeri"
          },
          {
            "key": "D",
            "text": "Mengirim barang antarprovinsi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Impor artinya….",
        "options": [
          {
            "key": "A",
            "text": "Menjual ke luar negeri"
          },
          {
            "key": "B",
            "text": "Membuang barang sisa produksi"
          },
          {
            "key": "C",
            "text": "Membeli barang dari luar negeri"
          },
          {
            "key": "D",
            "text": "Menimbun barang"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "Berikut contoh barang ekspor Indonesia adalah….",
        "options": [
          {
            "key": "A",
            "text": "Telepon genggam"
          },
          {
            "key": "B",
            "text": "Mobil mewah"
          },
          {
            "key": "C",
            "text": "Kelapa sawit"
          },
          {
            "key": "D",
            "text": "Pesawat jet"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Tujuan perdagangan internasional adalah….",
        "options": [
          {
            "key": "A",
            "text": "Membatasi perdagangan"
          },
          {
            "key": "B",
            "text": "Mengurangi hubungan negara"
          },
          {
            "key": "C",
            "text": "Memenuhi kebutuhan yang tidak bisa diproduksi sendiri"
          },
          {
            "key": "D",
            "text": "Mengurangi devisa"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 16,
        "text": "Devisa adalah….",
        "options": [
          {
            "key": "A",
            "text": "Uang yang dipakai di pasar lokal"
          },
          {
            "key": "B",
            "text": "Cadangan beras negara"
          },
          {
            "key": "C",
            "text": "Alat pembayaran luar negeri"
          },
          {
            "key": "D",
            "text": "Pajak perdagangan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 17,
        "text": "Impor yang terlalu besar dapat menyebabkan….",
        "options": [
          {
            "key": "A",
            "text": "Devisa meningkat"
          },
          {
            "key": "B",
            "text": "Mata uang menguat"
          },
          {
            "key": "C",
            "text": "Industri lokal tertekan"
          },
          {
            "key": "D",
            "text": "Produk lokal berkembang"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 18,
        "text": "Hambatan perdagangan internasional disebut….",
        "options": [
          {
            "key": "A",
            "text": "Tarif"
          },
          {
            "key": "B",
            "text": "Kredit"
          },
          {
            "key": "C",
            "text": "Produksi"
          },
          {
            "key": "D",
            "text": "Pendapatan"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Negara yang mengekspor hasil industri maju disebut negara….",
        "options": [
          {
            "key": "A",
            "text": "Berkembang"
          },
          {
            "key": "B",
            "text": "Terbelakang"
          },
          {
            "key": "C",
            "text": "Industri"
          },
          {
            "key": "D",
            "text": "Agraris"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 20,
        "text": "Contoh kerja sama internasional Indonesia adalah….",
        "options": [
          {
            "key": "A",
            "text": "Membeli barang dari tetangga"
          },
          {
            "key": "B",
            "text": "Gotong royong"
          },
          {
            "key": "C",
            "text": "Ekspor gas ke Jepang"
          },
          {
            "key": "D",
            "text": "Kerja bakti"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 21,
        "text": "Sensus penduduk dilakukan setiap….",
        "options": [
          {
            "key": "A",
            "text": "3 tahun"
          },
          {
            "key": "B",
            "text": "5 tahun"
          },
          {
            "key": "C",
            "text": "10 tahun"
          },
          {
            "key": "D",
            "text": "15 tahun"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 22,
        "text": "Kepadatan penduduk adalah….",
        "options": [
          {
            "key": "A",
            "text": "Banyaknya kelahiran"
          },
          {
            "key": "B",
            "text": "Banyaknya penduduk per km²"
          },
          {
            "key": "C",
            "text": "Banyaknya pendatang"
          },
          {
            "key": "D",
            "text": "Pertumbuhan industri"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "text": "Urbanisasi adalah perpindahan penduduk dari….",
        "options": [
          {
            "key": "A",
            "text": "Kota ke desa"
          },
          {
            "key": "B",
            "text": "Desa ke kota"
          },
          {
            "key": "C",
            "text": "Kota ke luar negeri"
          },
          {
            "key": "D",
            "text": "Luar negeri ke desa"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "text": "Faktor pendorong urbanisasi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Fasilitas desa lengkap"
          },
          {
            "key": "B",
            "text": "Lapangan kerja di desa sedikit"
          },
          {
            "key": "C",
            "text": "Pendapatan kota rendah"
          },
          {
            "key": "D",
            "text": "Pendidikan desa tinggi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Masalah yang timbul akibat urbanisasi berlebihan adalah….",
        "options": [
          {
            "key": "A",
            "text": "Kota semakin sepi"
          },
          {
            "key": "B",
            "text": "Lahan pertanian meningkat"
          },
          {
            "key": "C",
            "text": "Munculnya pemukiman kumuh"
          },
          {
            "key": "D",
            "text": "Desa semakin maju"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 26,
        "text": "Piramida penduduk muda menunjukkan….",
        "options": [
          {
            "key": "A",
            "text": "Penduduk tua dominan"
          },
          {
            "key": "B",
            "text": "Angka kelahiran tinggi"
          },
          {
            "key": "C",
            "text": "Angka kelahiran rendah"
          },
          {
            "key": "D",
            "text": "Angka kematian tinggi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 27,
        "text": "Piramida penduduk stasioner menunjukkan….",
        "options": [
          {
            "key": "A",
            "text": "Laju pertumbuhan tinggi"
          },
          {
            "key": "B",
            "text": "Pertumbuhan penduduk rendah"
          },
          {
            "key": "C",
            "text": "Jumlah anak sangat besar"
          },
          {
            "key": "D",
            "text": "Jumlah penduduk tua lebih banyak"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 28,
        "text": "Transmigrasi adalah perpindahan penduduk dari….",
        "options": [
          {
            "key": "A",
            "text": "Desa ke kota"
          },
          {
            "key": "B",
            "text": "Pulau padat ke pulau jarang penduduk"
          },
          {
            "key": "C",
            "text": "Kota ke luar negeri"
          },
          {
            "key": "D",
            "text": "Negara ke negara"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 29,
        "text": "Bonus demografi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Penduduk tua mendominasi"
          },
          {
            "key": "B",
            "text": "Penduduk produktif lebih banyak dari nonproduktif"
          },
          {
            "key": "C",
            "text": "Laju kelahiran menurun"
          },
          {
            "key": "D",
            "text": "Banyak pengangguran"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 30,
        "text": "Dampak positif bonus demografi adalah….",
        "options": [
          {
            "key": "A",
            "text": "Berkurangnya tenaga kerja"
          },
          {
            "key": "B",
            "text": "Produktivitas meningkat"
          },
          {
            "key": "C",
            "text": "Tingkat kemiskinan naik"
          },
          {
            "key": "D",
            "text": "Pendidikan menurun"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-pjok-vii",
    "code": "ASAS-PJOK-VII",
    "title": "Asesmen Sumatif Akhir Semester — PJOK Kelas VII",
    "subject": "PJOK",
    "classLevel": "VII",
    "scheduleText": "Sabtu, 28 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "dayOrder": 6,
    "dayLabel": "Hari Ke-6 • Sabtu, 28 Nov 2026",
    "sessionOrder": 2,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Start yang digunakan untuk perlombaan lari jarak pendek adalah….",
        "options": [
          {
            "key": "A",
            "text": "Start jongkok"
          },
          {
            "key": "B",
            "text": "Start berdiri"
          },
          {
            "key": "C",
            "text": "Start melayang"
          },
          {
            "key": "D",
            "text": "Start bebas"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 2,
        "text": "Pada perlombaan lari jarak pendek, pelari boleh berlari pada saat….",
        "options": [
          {
            "key": "A",
            "text": "Aba-aba atlet “Bersedia Siap”"
          },
          {
            "key": "B",
            "text": "Aba-aba “Siap”"
          },
          {
            "key": "C",
            "text": "Aba-aba “Bersedia”"
          },
          {
            "key": "D",
            "text": "Aba-aba “Ya” / bunyi pistol start"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 3,
        "text": "Gerakan seorang pelari jarak pendek saat memasuki garis finish adalah….",
        "options": [
          {
            "key": "A",
            "text": "Melompat ke depan"
          },
          {
            "key": "B",
            "text": "Menengok lawannya ke belakang"
          },
          {
            "key": "C",
            "text": "Kecepatan lari diperlambat"
          },
          {
            "key": "D",
            "text": "Lari secepat-cepatnya"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 4,
        "text": "Seorang pelari dinyatakan sebagai pemenang apabila….",
        "options": [
          {
            "key": "A",
            "text": "Melakukan start dengan baik"
          },
          {
            "key": "B",
            "text": "Berlari dengan cepat"
          },
          {
            "key": "C",
            "text": "Sikap yang baik"
          },
          {
            "key": "D",
            "text": "Memasuki garis finish pertama"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 5,
        "text": "Seorang atlet lari jarak pendek disebut juga dengan….",
        "options": [
          {
            "key": "A",
            "text": "Starter"
          },
          {
            "key": "B",
            "text": "Pelari"
          },
          {
            "key": "C",
            "text": "Sprinter"
          },
          {
            "key": "D",
            "text": "Finisher"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Dalam lompat jauh, teknik yang digunakan untuk mendapatkan kecepatan saat melompat adalah….",
        "options": [
          {
            "key": "A",
            "text": "Teknik awalan"
          },
          {
            "key": "B",
            "text": "Teknik tumpuan"
          },
          {
            "key": "C",
            "text": "Teknik sikap di udara"
          },
          {
            "key": "D",
            "text": "Teknik mendarat"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 7,
        "text": "Nomor lari 5.000 m dan 10.000 m termasuk lari….",
        "options": [
          {
            "key": "A",
            "text": "Jarak menengah"
          },
          {
            "key": "B",
            "text": "Marathon"
          },
          {
            "key": "C",
            "text": "Jarak jauh"
          },
          {
            "key": "D",
            "text": "Jarak pendek"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Nilai-nilai yang terkandung di dalam pencak silat adalah….",
        "options": [
          {
            "key": "A",
            "text": "Seni budaya"
          },
          {
            "key": "B",
            "text": "Keilmuan"
          },
          {
            "key": "C",
            "text": "Pendekatan"
          },
          {
            "key": "D",
            "text": "Kesenangan"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 9,
        "text": "Bagian tubuh yang dapat dijadikan sasaran dan bernilai dalam pertandingan silat adalah….",
        "options": [
          {
            "key": "A",
            "text": "Tangan"
          },
          {
            "key": "B",
            "text": "Leher"
          },
          {
            "key": "C",
            "text": "Dada"
          },
          {
            "key": "D",
            "text": "Lengan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Induk organisasi pencak silat nasional adalah….",
        "options": [
          {
            "key": "A",
            "text": "IPSI"
          },
          {
            "key": "B",
            "text": "PSSI"
          },
          {
            "key": "C",
            "text": "PASI"
          },
          {
            "key": "D",
            "text": "IAAF"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 11,
        "text": "Gerakan yang berfungsi untuk melatih kekuatan otot tangan dan dada adalah….",
        "options": [
          {
            "key": "A",
            "text": "Lompat jauh"
          },
          {
            "key": "B",
            "text": "Sit-up"
          },
          {
            "key": "C",
            "text": "Back-up"
          },
          {
            "key": "D",
            "text": "Push-up"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 12,
        "text": "Gerakan “sit-up” merupakan latihan untuk meningkatkan kekuatan otot….",
        "options": [
          {
            "key": "A",
            "text": "Tangan"
          },
          {
            "key": "B",
            "text": "Perut"
          },
          {
            "key": "C",
            "text": "Punggung"
          },
          {
            "key": "D",
            "text": "Kaki"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Saat melakukan sit-up yang baik adalah bagian kaki….",
        "options": [
          {
            "key": "A",
            "text": "Harus diluruskan"
          },
          {
            "key": "B",
            "text": "Harus ditekuk"
          },
          {
            "key": "C",
            "text": "Harus dibuka"
          },
          {
            "key": "D",
            "text": "Diangkat tinggi"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "text": "Latihan sikap lilin dilakukan dari posisi….",
        "options": [
          {
            "key": "A",
            "text": "Berlari"
          },
          {
            "key": "B",
            "text": "Berdiri"
          },
          {
            "key": "C",
            "text": "Duduk"
          },
          {
            "key": "D",
            "text": "Terlentang"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "text": "Renang gaya bebas sering disebut dengan istilah….",
        "options": [
          {
            "key": "A",
            "text": "Back crawl"
          },
          {
            "key": "B",
            "text": "Breaststroke"
          },
          {
            "key": "C",
            "text": "Crawl"
          },
          {
            "key": "D",
            "text": "Dolphin"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 16,
        "text": "Dalam permainan sepak bola agar tendangan bola yang dihasilkan melambung maka perkenaan kaki pada bola harus di bagian….",
        "options": [
          {
            "key": "A",
            "text": "Bawah bola"
          },
          {
            "key": "B",
            "text": "Samping bola"
          },
          {
            "key": "C",
            "text": "Atas bola"
          },
          {
            "key": "D",
            "text": "Tengah bola"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 17,
        "text": "Bagian yang digunakan untuk menghentikan bola yang menyusur tanah dalam permainan sepak bola adalah….",
        "options": [
          {
            "key": "A",
            "text": "Kaki bagian luar"
          },
          {
            "key": "B",
            "text": "Kaki bagian dalam"
          },
          {
            "key": "C",
            "text": "Lutut"
          },
          {
            "key": "D",
            "text": "Paha"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Tendangan bebas dalam permainan sepak bola disebut….",
        "options": [
          {
            "key": "A",
            "text": "Free kick"
          },
          {
            "key": "B",
            "text": "Corner kick"
          },
          {
            "key": "C",
            "text": "Throw in"
          },
          {
            "key": "D",
            "text": "Outside"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Apabila seorang penjaga/pemain bertahan melakukan pelanggaran di dalam daerah gawang maka akan diadakan hukuman tendangan….",
        "options": [
          {
            "key": "A",
            "text": "Sudut"
          },
          {
            "key": "B",
            "text": "Gawang"
          },
          {
            "key": "C",
            "text": "Penalti"
          },
          {
            "key": "D",
            "text": "Bebas"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 20,
        "text": "Satu regu dalam permainan bola voli berjumlah….",
        "options": [
          {
            "key": "A",
            "text": "6 orang"
          },
          {
            "key": "B",
            "text": "5 orang"
          },
          {
            "key": "C",
            "text": "4 orang"
          },
          {
            "key": "D",
            "text": "12 orang"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 21,
        "text": "Pukulan pertama kali untuk memulai permainan dalam bola voli disebut….",
        "options": [
          {
            "key": "A",
            "text": "Passing"
          },
          {
            "key": "B",
            "text": "Servis"
          },
          {
            "key": "C",
            "text": "Smash"
          },
          {
            "key": "D",
            "text": "Spike"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 22,
        "text": "Smash dalam permainan bola voli berarti….",
        "options": [
          {
            "key": "A",
            "text": "Mengumpan bola"
          },
          {
            "key": "B",
            "text": "Pukulan keras"
          },
          {
            "key": "C",
            "text": "Sajian pertama"
          },
          {
            "key": "D",
            "text": "Membendung lawan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "text": "Dalam permainan bola voli, kita mengenal istilah blocking, yang artinya….",
        "options": [
          {
            "key": "A",
            "text": "Pukulan keras"
          },
          {
            "key": "B",
            "text": "Pergeseran tempat"
          },
          {
            "key": "C",
            "text": "Membendung serangan lawan"
          },
          {
            "key": "D",
            "text": "Pergeseran pemain"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 24,
        "text": "Latihan kekuatan untuk tujuan melatih kekuatan otot kaki adalah….",
        "options": [
          {
            "key": "A",
            "text": "Back Up"
          },
          {
            "key": "B",
            "text": "Squat Jump"
          },
          {
            "key": "C",
            "text": "Sit-up"
          },
          {
            "key": "D",
            "text": "Push up"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Latihan kekuatan untuk tujuan menguatkan otot punggung adalah….",
        "options": [
          {
            "key": "A",
            "text": "Push Up"
          },
          {
            "key": "B",
            "text": "Back Up"
          },
          {
            "key": "C",
            "text": "Squat jump"
          },
          {
            "key": "D",
            "text": "Sit-up"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 26,
        "text": "Operan dalam permainan bola basket disebut….",
        "options": [
          {
            "key": "A",
            "text": "Pivot"
          },
          {
            "key": "B",
            "text": "Lay-up shot"
          },
          {
            "key": "C",
            "text": "Dribble"
          },
          {
            "key": "D",
            "text": "Passing"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 27,
        "text": "Memasukkan bola ke ring basket sambil berlari melangkah lebar dan melompat disebut….",
        "options": [
          {
            "key": "A",
            "text": "Pivot"
          },
          {
            "key": "B",
            "text": "Dribble"
          },
          {
            "key": "C",
            "text": "Lay-up shoot"
          },
          {
            "key": "D",
            "text": "Passing"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 28,
        "text": "Menggiring bola dalam permainan bola basket disebut….",
        "options": [
          {
            "key": "A",
            "text": "Pivot"
          },
          {
            "key": "B",
            "text": "Lay-up shot"
          },
          {
            "key": "C",
            "text": "Dribble"
          },
          {
            "key": "D",
            "text": "Passing"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 29,
        "text": "Alat pemukul bola (kok) dalam permainan bulu tangkis disebut….",
        "options": [
          {
            "key": "A",
            "text": "Bet"
          },
          {
            "key": "B",
            "text": "Raket"
          },
          {
            "key": "C",
            "text": "Stik"
          },
          {
            "key": "D",
            "text": "Glove"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 30,
        "text": "Latihan senam kayang bertujuan untuk melatih….",
        "options": [
          {
            "key": "A",
            "text": "Kelenturan"
          },
          {
            "key": "B",
            "text": "Kekuatan"
          },
          {
            "key": "C",
            "text": "Endurance"
          },
          {
            "key": "D",
            "text": "Kelincahan"
          }
        ],
        "answerKey": "A"
      }
    ]
  },
  {
    "id": "exam-pjok-viii",
    "code": "ASAS-PJOK-VIII",
    "title": "Asesmen Sumatif Akhir Semester — PJOK Kelas VIII",
    "subject": "PJOK",
    "classLevel": "VIII",
    "scheduleText": "Sabtu, 28 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "dayOrder": 6,
    "dayLabel": "Hari Ke-6 • Sabtu, 28 Nov 2026",
    "sessionOrder": 2,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Kaki yang digunakan untuk menahan bola diputar ke luar, sehingga kaki bagian dalam menghadap ke arah datangnya bola. Teknik ini merupakan cara menahan bola menggunakan….",
        "options": [
          {
            "key": "A",
            "text": "Kura-kura kaki"
          },
          {
            "key": "B",
            "text": "Punggung kaki"
          },
          {
            "key": "C",
            "text": "Kaki bagian dalam"
          },
          {
            "key": "D",
            "text": "Kaki bagian luar"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Badan bagian atas dicondongkan ke belakang dengan dada ditarik ke depan. Teknik ini merupakan cara menahan bola menggunakan….",
        "options": [
          {
            "key": "A",
            "text": "Paha"
          },
          {
            "key": "B",
            "text": "Dada"
          },
          {
            "key": "C",
            "text": "Kepala"
          },
          {
            "key": "D",
            "text": "Kaki bagian luar"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "Berikut ini adalah gerakan menghentikan bola dalam permainan sepak bola, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Menghentikan bola dengan telapak kaki"
          },
          {
            "key": "B",
            "text": "Menghentikan bola dengan dada"
          },
          {
            "key": "C",
            "text": "Menghentikan bola dengan paha"
          },
          {
            "key": "D",
            "text": "Menghentikan bola dengan tumit"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 4,
        "text": "Permainan bola voli diciptakan pada tahun 1895 oleh orang berkebangsaan Amerika, yaitu….",
        "options": [
          {
            "key": "A",
            "text": "James A. Naismith"
          },
          {
            "key": "B",
            "text": "William G. Morgan"
          },
          {
            "key": "C",
            "text": "George Handcock"
          },
          {
            "key": "D",
            "text": "W.C. Wingfield"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 5,
        "text": "Dalam permainan bola voli, gerakan kedua kaki terbuka, lutut ditekuk, kedua lengan lurus dijulurkan ke depan bawah dan tangan satu sama lain dikaitkan atau berpegangan, ini merupakan gerakan….",
        "options": [
          {
            "key": "A",
            "text": "Servis"
          },
          {
            "key": "B",
            "text": "Smash"
          },
          {
            "key": "C",
            "text": "Passing bawah"
          },
          {
            "key": "D",
            "text": "Passing atas"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "context": "Perhatikan urutan servis di bawah ini!\n(1) Telapak tangan menghadap bola dan tangan ditegangkan atau tangan menggenggam untuk mendapat pantulan yang sempurna\n(2) Bola dipegang dengan salah satu tangan\n(3) Setelah bola melambung kira-kira setinggi pinggang, lengan diayunkan lurus ke depan untuk memukul bola\n(4) Berdiri di daerah servis dengan salah satu kaki lebih ke depan daripada kaki yang lain\n(5) Bola dilambungkan tidak terlalu tinggi, tangan yang lain ditarik ke bawah belakang",
        "text": "Urutan yang sesuai untuk melakukan teknik dasar servis bawah bola voli adalah….",
        "options": [
          {
            "key": "A",
            "text": "(4)-(5)-(2)-(3)-(1)"
          },
          {
            "key": "B",
            "text": "(4)-(2)-(5)-(1)-(3)"
          },
          {
            "key": "C",
            "text": "(4)-(5)-(2)-(1)-(3)"
          },
          {
            "key": "D",
            "text": "(4)-(2)-(5)-(3)-(1)"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 7,
        "text": "Dalam suatu pertandingan bola basket, Dikri melakukan tembakan sebanyak 2x dari luar garis three points, 4x dalam garis three points (2 poin) dan 3x lemparan bebas (1 poin). Berapa poin yang didapatkannya?",
        "options": [
          {
            "key": "A",
            "text": "15 poin"
          },
          {
            "key": "B",
            "text": "16 poin"
          },
          {
            "key": "C",
            "text": "17 poin"
          },
          {
            "key": "D",
            "text": "18 poin"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Ukuran lapangan bola basket standar adalah….",
        "options": [
          {
            "key": "A",
            "text": "9 x 15 meter"
          },
          {
            "key": "B",
            "text": "30 x 15 meter"
          },
          {
            "key": "C",
            "text": "28 x 15 meter"
          },
          {
            "key": "D",
            "text": "10 x 20 meter"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 9,
        "text": "Operan ke teman seregu dengan cara operan melalui depan dada dalam permainan bola basket disebut….",
        "options": [
          {
            "key": "A",
            "text": "Chest Pass"
          },
          {
            "key": "B",
            "text": "Bounce Pass"
          },
          {
            "key": "C",
            "text": "Over Head Pass"
          },
          {
            "key": "D",
            "text": "Base Pass"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 10,
        "text": "Yang tidak termasuk alat yang digunakan dalam permainan bola kasti adalah….",
        "options": [
          {
            "key": "A",
            "text": "Pemukul"
          },
          {
            "key": "B",
            "text": "Bola kasti"
          },
          {
            "key": "C",
            "text": "Tiang hinggap"
          },
          {
            "key": "D",
            "text": "Bola tenis"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 11,
        "text": "Di bawah ini adalah gerakan dasar bermain kasti, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Melempar bola"
          },
          {
            "key": "B",
            "text": "Shooting"
          },
          {
            "key": "C",
            "text": "Menangkap bola"
          },
          {
            "key": "D",
            "text": "Memukul bola"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Jenis lemparan yang digunakan untuk melempar bola ke arah pemukul dalam permainan kasti adalah….",
        "options": [
          {
            "key": "A",
            "text": "Lemparan melambung"
          },
          {
            "key": "B",
            "text": "Lemparan mendatar"
          },
          {
            "key": "C",
            "text": "Lemparan menyusur tanah"
          },
          {
            "key": "D",
            "text": "Lemparan samping"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 13,
        "text": "Cara melakukan permainan bulu tangkis dengan tujuan menerbangkan shuttlecock pada awal permainan menuju bidang lapangan lawan disebut….",
        "options": [
          {
            "key": "A",
            "text": "Jenis pukulan"
          },
          {
            "key": "B",
            "text": "Teknik pukulan"
          },
          {
            "key": "C",
            "text": "Pukulan servis"
          },
          {
            "key": "D",
            "text": "Variasi pukulan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "Pukulan dalam permainan bulu tangkis yang dilakukan dengan tujuan untuk menerbangkan shuttlecock setinggi mungkin mengarah jauh ke belakang garis lapangan dinamakan….",
        "options": [
          {
            "key": "A",
            "text": "Pukulan servis"
          },
          {
            "key": "B",
            "text": "Pukulan drive"
          },
          {
            "key": "C",
            "text": "Pukulan dropshot"
          },
          {
            "key": "D",
            "text": "Pukulan lob"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "text": "Induk organisasi nasional permainan bulu tangkis adalah….",
        "options": [
          {
            "key": "A",
            "text": "PBVSI"
          },
          {
            "key": "B",
            "text": "PBTSI"
          },
          {
            "key": "C",
            "text": "PSSI"
          },
          {
            "key": "D",
            "text": "PBSI"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 16,
        "text": "Gerakan memukul bola dengan mendorong dan sikap bet terbuka dalam permainan tenis meja adalah….",
        "options": [
          {
            "key": "A",
            "text": "Push"
          },
          {
            "key": "B",
            "text": "Drive"
          },
          {
            "key": "C",
            "text": "Block"
          },
          {
            "key": "D",
            "text": "Stance"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 17,
        "text": "Induk organisasi nasional permainan tenis meja adalah….",
        "options": [
          {
            "key": "A",
            "text": "PTSI"
          },
          {
            "key": "B",
            "text": "PTMSI"
          },
          {
            "key": "C",
            "text": "ATMSI"
          },
          {
            "key": "D",
            "text": "FTMSI"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 18,
        "text": "Ukuran panjang dan lebar meja pada permainan tenis meja adalah….",
        "options": [
          {
            "key": "A",
            "text": "3,74 x 1,52 meter"
          },
          {
            "key": "B",
            "text": "4,74 x 1,52 meter"
          },
          {
            "key": "C",
            "text": "2,74 x 1,52 meter"
          },
          {
            "key": "D",
            "text": "2,74 x 2,52 meter"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 19,
        "text": "Perbedaan antara jalan dengan lari terletak pada….",
        "options": [
          {
            "key": "A",
            "text": "Cara kaki menapak"
          },
          {
            "key": "B",
            "text": "Kecondongan badan"
          },
          {
            "key": "C",
            "text": "Panjang langkah"
          },
          {
            "key": "D",
            "text": "Memasuki garis finish"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 20,
        "text": "Start yang digunakan dalam lari jarak pendek adalah….",
        "options": [
          {
            "key": "A",
            "text": "Start melayang"
          },
          {
            "key": "B",
            "text": "Start jongkok"
          },
          {
            "key": "C",
            "text": "Start berdiri"
          },
          {
            "key": "D",
            "text": "Start berlari"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 21,
        "text": "Yang termasuk nomor lari jarak pendek dalam cabang olahraga atletik adalah….",
        "options": [
          {
            "key": "A",
            "text": "100 m, 200 m, 300 m"
          },
          {
            "key": "B",
            "text": "100 m, 200 m, 400 m"
          },
          {
            "key": "C",
            "text": "200 m, 400 m, 800 m"
          },
          {
            "key": "D",
            "text": "200 m, 400 m, 1600 m"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 22,
        "text": "Gaya tolak peluru di mana awalan menyamping sudut lemparan dinamakan….",
        "options": [
          {
            "key": "A",
            "text": "Gaya Ortodoks"
          },
          {
            "key": "B",
            "text": "Gaya O'Brien"
          },
          {
            "key": "C",
            "text": "Gaya Side arm"
          },
          {
            "key": "D",
            "text": "Gaya Butterfly"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 23,
        "text": "Cara memegang peluru yang benar adalah peluru diletakkan pada….",
        "options": [
          {
            "key": "A",
            "text": "Ibu jari dan kelingking"
          },
          {
            "key": "B",
            "text": "Pangkal jari-jari tangan"
          },
          {
            "key": "C",
            "text": "Telapak tangan"
          },
          {
            "key": "D",
            "text": "Ujung jari-jari tangan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "text": "Gaya tolak peluru di mana awalan membelakangi sudut lemparan dinamakan….",
        "options": [
          {
            "key": "A",
            "text": "Gaya Ortodoks"
          },
          {
            "key": "B",
            "text": "Gaya O'Brien"
          },
          {
            "key": "C",
            "text": "Gaya Glide"
          },
          {
            "key": "D",
            "text": "Gaya Butterfly"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Cara pembelaan dengan mengadakan kontak langsung terhadap serangan lawan dalam pencak silat dinamakan….",
        "options": [
          {
            "key": "A",
            "text": "Serangan"
          },
          {
            "key": "B",
            "text": "Pembelaan"
          },
          {
            "key": "C",
            "text": "Tangkisan"
          },
          {
            "key": "D",
            "text": "Elakan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 26,
        "text": "Induk organisasi pencak silat di Indonesia ialah….",
        "options": [
          {
            "key": "A",
            "text": "PPSI"
          },
          {
            "key": "B",
            "text": "IPSI"
          },
          {
            "key": "C",
            "text": "Tapak Suci"
          },
          {
            "key": "D",
            "text": "TTKKDH"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 27,
        "text": "Gerakan menjatuhkan lawan yang dilakukan dengan menjepit kedua tungkai kaki pada sasaran leher, pinggang, atau tungkai lawan sehingga lawan terjatuh dalam pencak silat dinamakan….",
        "options": [
          {
            "key": "A",
            "text": "Tendangan"
          },
          {
            "key": "B",
            "text": "Bantingan"
          },
          {
            "key": "C",
            "text": "Guntingan"
          },
          {
            "key": "D",
            "text": "Pukulan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 28,
        "text": "Kemampuan tubuh melakukan penyesuaian terhadap pembebanan fisik yang diberikan kepadanya dari kerja yang dilakukan sehari-hari tanpa menimbulkan kelelahan yang berlebihan disebut….",
        "options": [
          {
            "key": "A",
            "text": "Kebugaran jasmani"
          },
          {
            "key": "B",
            "text": "Ketahanan tubuh"
          },
          {
            "key": "C",
            "text": "Daya tahan tubuh"
          },
          {
            "key": "D",
            "text": "Kekuatan tubuh"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 29,
        "text": "Kemampuan untuk melakukan perpindahan tempat dari satu tempat ke tempat yang lainnya dalam waktu yang sesingkat-singkatnya dinamakan….",
        "options": [
          {
            "key": "A",
            "text": "Daya tahan"
          },
          {
            "key": "B",
            "text": "Kecepatan"
          },
          {
            "key": "C",
            "text": "Kelenturan"
          },
          {
            "key": "D",
            "text": "Kelincahan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 30,
        "text": "Kemampuan tubuh melakukan aktivitas secara berulang-ulang tanpa merasa letih dalam jangka waktu lama disebut….",
        "options": [
          {
            "key": "A",
            "text": "Kebugaran jasmani"
          },
          {
            "key": "B",
            "text": "Stamina"
          },
          {
            "key": "C",
            "text": "Daya tahan"
          },
          {
            "key": "D",
            "text": "Kekuatan"
          }
        ],
        "answerKey": "C"
      }
    ]
  },
  {
    "id": "exam-pjok-ix",
    "code": "ASAS-PJOK-IX",
    "title": "Asesmen Sumatif Akhir Semester — PJOK Kelas IX",
    "subject": "PJOK",
    "classLevel": "IX",
    "scheduleText": "Sabtu, 28 November 2026 • Jam Ke-2 (10.00 – 11.30 WIB)",
    "dayOrder": 6,
    "dayLabel": "Hari Ke-6 • Sabtu, 28 Nov 2026",
    "sessionOrder": 2,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Dalam sebuah pertandingan sepak bola, tugas dan tanggung jawab pemain sesuai dengan posisi masing-masing. Tugas pemain bertahan adalah menjaga daerah pertahanan agar tidak mudah ditembus lawan, tugas penjaga gawang adalah menjaga gawang agar tidak bisa dibobol oleh lawan, adapun membobol gawang lawan adalah tugas utama dari….",
        "options": [
          {
            "key": "A",
            "text": "Pemain gelandang"
          },
          {
            "key": "B",
            "text": "Pemain tengah"
          },
          {
            "key": "C",
            "text": "Pemain penyerang"
          },
          {
            "key": "D",
            "text": "Pemain cadangan"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "context": "Berikut ini adalah daftar istilah dalam olahraga permainan:\n- Kick off – Throw in – Goal kick – Corner kick – Free kick – Off side – Passing – Pivot",
        "text": "Manakah kelompok yang memuat istilah yang BUKAN berasal dari permainan sepak bola….",
        "options": [
          {
            "key": "A",
            "text": "Kick off, throw in, goal kick"
          },
          {
            "key": "B",
            "text": "Corner kick, free kick, off side"
          },
          {
            "key": "C",
            "text": "Goal kick, free kick, passing"
          },
          {
            "key": "D",
            "text": "Off side, throw in, pivot"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 3,
        "text": "Jika dalam suatu kejuaraan sepak bola dengan menggunakan sistem kompetisi, nilai yang diperoleh setiap tim jika berhasil mengalahkan tim lawan adalah 3 (tiga), dan tim yang kalah mendapatkan nilai 0 (nol), berapakah nilai yang diperoleh tim jika hasil pertandingan imbang (draw)….",
        "options": [
          {
            "key": "A",
            "text": "Satu"
          },
          {
            "key": "B",
            "text": "Dua"
          },
          {
            "key": "C",
            "text": "Tiga"
          },
          {
            "key": "D",
            "text": "Empat"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 4,
        "context": "Perhatikan daftar bola permainan bola besar berikut!\n(1) Bola Voli\n(2) Bola Basket\n(3) Bola Sepak (bercorak segi lima hitam-putih)\n(4) Bola Rugby / American Football",
        "text": "Manakah nomor bola yang dipakai untuk olahraga permainan sepak bola….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Pemain penyerang berada lebih dekat ke garis gawang lawan dibanding pemain bertahan lawan saat bola akan dioper kepadanya adalah pengertian dari pelanggaran ..., di mana wasit akan menghentikan permainan kemudian memulai lagi dengan cara….",
        "options": [
          {
            "key": "A",
            "text": "Out side, memulai lagi dengan free kick di tempat kejadian untuk tim bertahan"
          },
          {
            "key": "B",
            "text": "In side, memulai lagi dengan free kick di tempat kejadian untuk tim bertahan"
          },
          {
            "key": "C",
            "text": "On side, memulai lagi dengan free kick di tempat kejadian untuk tim bertahan"
          },
          {
            "key": "D",
            "text": "Off side, memulai kembali dengan free kick di tempat kejadian untuk tim bertahan"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 6,
        "text": "Tugas seorang wasit 1 dalam sebuah pertandingan bola voli di antaranya yaitu memimpin pertandingan, menghentikan dan memulai kembali permainan. Adapun salah satu tugas seorang wasit 2 adalah….",
        "options": [
          {
            "key": "A",
            "text": "Memberi sinyal ke wasit 1 jika terjadi salah posisi pemain"
          },
          {
            "key": "B",
            "text": "Memberi sinyal ke wasit 1 jika terjadi bola keluar"
          },
          {
            "key": "C",
            "text": "Memberi sinyal ke wasit 1 jika terjadi bola masuk"
          },
          {
            "key": "D",
            "text": "Memberi sinyal ke wasit 1 jika terjadi keributan"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 7,
        "text": "Permainan bola basket pertama kali diciptakan oleh Dr. James Naismith pada tahun 1891, sedangkan permainan bola voli pertama kali diciptakan oleh William George Morgan pada tahun 1895 di YMCA. Sebelum menjadi nama bola voli, apakah nama olahraga permainan ini pada awal diciptakan….",
        "options": [
          {
            "key": "A",
            "text": "Softball"
          },
          {
            "key": "B",
            "text": "Mintonette"
          },
          {
            "key": "C",
            "text": "Baseball"
          },
          {
            "key": "D",
            "text": "Badminton"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "Pemain yang bertugas untuk menerima bola pertama (bertahan) dalam permainan bola voli adalah libero, adapun yang mengatur penyerangan dan memberi umpan kepada pemain untuk melakukan smash adalah tugas dari pemain….",
        "options": [
          {
            "key": "A",
            "text": "Tosser / Set-upper"
          },
          {
            "key": "B",
            "text": "Blocker"
          },
          {
            "key": "C",
            "text": "Spiker"
          },
          {
            "key": "D",
            "text": "Server"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 9,
        "text": "Dalam permainan bola basket, skor tertinggi saat memasukkan bola ke ring lawan adalah saat tembakannya dilakukan dari luar garis daerah pertahanan lawan (luar busur three point). Tembakan tersebut bernilai ... poin.",
        "options": [
          {
            "key": "A",
            "text": "1 poin"
          },
          {
            "key": "B",
            "text": "3 poin"
          },
          {
            "key": "C",
            "text": "2 poin"
          },
          {
            "key": "D",
            "text": "4 poin"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 10,
        "text": "Jika dalam sebuah pertandingan bola basket seorang pemain penyerang berada di daerah bersyarat (keyhole) pertahanan lawan terlalu lama tanpa proses tembakan, maka akan dikenakan peraturan….",
        "options": [
          {
            "key": "A",
            "text": "1 detik"
          },
          {
            "key": "B",
            "text": "5 detik"
          },
          {
            "key": "C",
            "text": "3 detik"
          },
          {
            "key": "D",
            "text": "7 detik"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 11,
        "text": "Di suatu pertandingan bola basket salah seorang pemain sedang melakukan dribbling yang tidak benar (double/travelling), maka wasit akan menghentikan permainan serta memulai lagi dengan cara….",
        "options": [
          {
            "key": "A",
            "text": "Tembakan bebas untuk tim lawan"
          },
          {
            "key": "B",
            "text": "Lemparan ke dalam diambil dari garis samping lapangan yang paling dekat oleh tim lawan"
          },
          {
            "key": "C",
            "text": "Tembakan bebas di tempat kejadian pelanggaran"
          },
          {
            "key": "D",
            "text": "Lemparan ke dalam oleh pemain yang melakukan pelanggaran"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "context": "Perhatikan tabel skor cabang olahraga berikut!\n• Tenis meja : Skor 11 poin (3 set kemenangan)\n• Bulu tangkis : Skor [ ?? ] (2 set kemenangan)\n• Bola voli : Skor 25 poin (3 set kemenangan)",
        "text": "Berapakah skor standar tiap set pada permainan bulu tangkis….",
        "options": [
          {
            "key": "A",
            "text": "21 poin"
          },
          {
            "key": "B",
            "text": "22 poin"
          },
          {
            "key": "C",
            "text": "23 poin"
          },
          {
            "key": "D",
            "text": "24 poin"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 13,
        "context": "Perhatikan daftar bola/alat permainan bola kecil berikut!\n(1) Bola Tenis Lapangan\n(2) Bola Kasti / Baseball\n(3) Kok (Shuttlecock)\n(4) Bola Tenis Meja (Pingpong)",
        "text": "Manakah nomor bola/alat yang dipakai untuk permainan bulu tangkis….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 14,
        "text": "Setiap cabang olahraga memiliki induk organisasi masing-masing. Adapun induk organisasi cabang olahraga bulu tangkis di Indonesia adalah….",
        "options": [
          {
            "key": "A",
            "text": "PERBASI"
          },
          {
            "key": "B",
            "text": "PBVSI"
          },
          {
            "key": "C",
            "text": "PSSI"
          },
          {
            "key": "D",
            "text": "PBSI"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 15,
        "context": "Perhatikan tabel partai pertandingan bulu tangkis berikut!\n1. Putra — Tunggal (Single)\n2. Putra — Ganda (Double)\n3. Putri — Tunggal (Single)\n4. Putri — Ganda (Double)\n5. [ ??? ] — Ganda (Double)",
        "text": "Kategori yang tepat untuk melengkapi tanda [ ??? ] pada partai kelima bulu tangkis adalah….",
        "options": [
          {
            "key": "A",
            "text": "Putra"
          },
          {
            "key": "B",
            "text": "Putri"
          },
          {
            "key": "C",
            "text": "Campuran / Mix"
          },
          {
            "key": "D",
            "text": "Tunggal"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 16,
        "text": "Tugas seorang pitcher (pelambung) adalah sebagai pelempar bola bagi pemukul, di mana bola yang dilempar idealnya paling tinggi sejajar dengan bahu dan paling rendah setinggi lutut pemukul. Adapun pelambung (pitcher) dalam olahraga softball dilakukan oleh….",
        "options": [
          {
            "key": "A",
            "text": "Diri sendiri"
          },
          {
            "key": "B",
            "text": "Pemain satu tim"
          },
          {
            "key": "C",
            "text": "Pemain lawan"
          },
          {
            "key": "D",
            "text": "Wasit"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 17,
        "context": "Daftar istilah olahraga:\nMenendang – memukul – pelambung – menangkap – pitcher – catcher – short stop – first baseman – second baseman – third baseman – melempar – mendorong – berguling – smash – blocking – sliding – lob – guling perut.",
        "text": "Manakah yang seluruhnya merupakan istilah-istilah dalam olahraga softball….",
        "options": [
          {
            "key": "A",
            "text": "Menangkap, memukul, mendorong"
          },
          {
            "key": "B",
            "text": "Melempar, menendang, berguling"
          },
          {
            "key": "C",
            "text": "Pitcher, catcher, memukul"
          },
          {
            "key": "D",
            "text": "First baseman, second baseman, smash"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 18,
        "text": "Permainan sepak bola dan bola basket dibatasi oleh waktu bermain, sedangkan bola voli dan bulu tangkis dibatasi oleh poin. Jika dalam permainan softball satu tim melakukan giliran memukul (menyerang) satu kali serta bertahan (menjaga) satu kali, maka disebut satu….",
        "options": [
          {
            "key": "A",
            "text": "Inning"
          },
          {
            "key": "B",
            "text": "Menyerang-bertahan"
          },
          {
            "key": "C",
            "text": "Strike"
          },
          {
            "key": "D",
            "text": "Defensive-offensive"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 19,
        "text": "Berdasarkan jarak yang diperlombakan, nomor lari dalam atletik dibagi menjadi tiga kategori utama yaitu lari jarak….",
        "options": [
          {
            "key": "A",
            "text": "Dekat, tanggung, jauh"
          },
          {
            "key": "B",
            "text": "Pendek, menengah, jauh"
          },
          {
            "key": "C",
            "text": "Lari santai, lari menengah, lari jauh"
          },
          {
            "key": "D",
            "text": "Jogging, running, speed"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 20,
        "text": "Teknik start dalam perlombaan lari jarak pendek adalah menggunakan start jongkok, sedangkan untuk lari jarak jauh menggunakan start….",
        "options": [
          {
            "key": "A",
            "text": "Berdiri"
          },
          {
            "key": "B",
            "text": "Guling"
          },
          {
            "key": "C",
            "text": "Melayang"
          },
          {
            "key": "D",
            "text": "Lompat"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 21,
        "text": "Untuk nomor lari jarak menengah, jarak yang dilombakan antara lain….",
        "options": [
          {
            "key": "A",
            "text": "1.500 m"
          },
          {
            "key": "B",
            "text": "10.000 m"
          },
          {
            "key": "C",
            "text": "400 m"
          },
          {
            "key": "D",
            "text": "100 m"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 22,
        "context": "Perhatikan tabel teknik start Lari Estafet (4 x 100 m / 4 x 400 m) berikut!\n• Pelari 1 : Start Jongkok\n• Pelari 2 : [ ?? ]\n• Pelari 3 : Start Melayang\n• Pelari 4 : Start Melayang",
        "text": "Dalam lari estafet (lari sambung), Pelari 1 menggunakan start jongkok, sedangkan Pelari 2 menggunakan….",
        "options": [
          {
            "key": "A",
            "text": "Start berdiri"
          },
          {
            "key": "B",
            "text": "Start melayang"
          },
          {
            "key": "C",
            "text": "Start jongkok"
          },
          {
            "key": "D",
            "text": "Start lompat"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 23,
        "text": "Posisi badan yang membuat pelari dapat berlari semakin cepat yaitu….",
        "options": [
          {
            "key": "A",
            "text": "Menunduk"
          },
          {
            "key": "B",
            "text": "Condong ke depan"
          },
          {
            "key": "C",
            "text": "Tegak"
          },
          {
            "key": "D",
            "text": "Membungkuk"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 24,
        "text": "Ketika menerima tongkat estafet dengan cara tidak melihat (non-visual), maka penerima harus menjulurkan tangannya ke arah….",
        "options": [
          {
            "key": "A",
            "text": "Samping kiri"
          },
          {
            "key": "B",
            "text": "Belakang"
          },
          {
            "key": "C",
            "text": "Depan"
          },
          {
            "key": "D",
            "text": "Samping kanan"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 25,
        "text": "Cara pemindahan tongkat estafet di mana pelari penerima tongkat menerima tanpa menoleh ke belakang dinamakan cara….",
        "options": [
          {
            "key": "A",
            "text": "Non-visual"
          },
          {
            "key": "B",
            "text": "Visual"
          },
          {
            "key": "C",
            "text": "Non-blind"
          },
          {
            "key": "D",
            "text": "Blind"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 26,
        "text": "Induk organisasi pencak silat nasional adalah….",
        "options": [
          {
            "key": "A",
            "text": "PSI"
          },
          {
            "key": "B",
            "text": "PSSI"
          },
          {
            "key": "C",
            "text": "PERSILAT"
          },
          {
            "key": "D",
            "text": "IPSI"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 27,
        "text": "Program latihan fisik harus direncanakan dengan baik dan sistematis serta ditujukan untuk….",
        "options": [
          {
            "key": "A",
            "text": "Meningkatkan pertumbuhan badan"
          },
          {
            "key": "B",
            "text": "Meningkatkan kesegaran jasmani dan kemampuan fungsional organ tubuh"
          },
          {
            "key": "C",
            "text": "Pencegahan terhadap wabah penyakit"
          },
          {
            "key": "D",
            "text": "Menanggulangi serangan penyakit"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 28,
        "text": "Di bawah ini merupakan bentuk-bentuk latihan kelincahan (agility), kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Shuttle run"
          },
          {
            "key": "B",
            "text": "Lari bolak-balik"
          },
          {
            "key": "C",
            "text": "Zig-zag run"
          },
          {
            "key": "D",
            "text": "Lari naik turun tangga"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 29,
        "text": "Gerakannya dimulai dari posisi badan telungkup, kaki rapat dan kedua tangan berpasangan di belakang kepala kemudian mengangkat badan bagian atas hingga dada tidak menyentuh lantai. Gerakan tersebut merupakan latihan….",
        "options": [
          {
            "key": "A",
            "text": "Push up"
          },
          {
            "key": "B",
            "text": "Sit up"
          },
          {
            "key": "C",
            "text": "Back up"
          },
          {
            "key": "D",
            "text": "Pull up"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 30,
        "text": "Latihan kebugaran jasmani yang dilakukan secara teratur akan membantu seseorang mengurangi risiko penyakit….",
        "options": [
          {
            "key": "A",
            "text": "HIV/AIDS"
          },
          {
            "key": "B",
            "text": "Jantung"
          },
          {
            "key": "C",
            "text": "Liver"
          },
          {
            "key": "D",
            "text": "Paru-paru"
          }
        ],
        "answerKey": "B"
      }
    ]
  },
  {
    "id": "exam-nahwu-vii",
    "code": "ASAS-NAHWU-VII",
    "title": "Asesmen Sumatif Akhir Semester — Nahwu Shorof Kelas VII",
    "subject": "Nahwu Shorof",
    "classLevel": "VII",
    "scheduleText": "Sabtu, 28 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 6,
    "dayLabel": "Hari Ke-6 • Sabtu, 28 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Ucapan yang mengandung sebagian huruf hijaiyah merupakan pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Lafadz"
          },
          {
            "key": "B",
            "text": "Kalam"
          },
          {
            "key": "C",
            "text": "Murokkab"
          },
          {
            "key": "D",
            "text": "Mufid"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 2,
        "text": "Menjadikan lafadz agar menunjukkan suatu makna dengan disengaja (menggunakan bahasa Arab) merupakan pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Lafadz"
          },
          {
            "key": "B",
            "text": "Murokkab"
          },
          {
            "key": "C",
            "text": "Mufid"
          },
          {
            "key": "D",
            "text": "Wadho’ / Kalam"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 3,
        "text": "Kalimah (unsur penyusun kalam) terbagi menjadi tiga bagian di bawah ini, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Isim"
          },
          {
            "key": "B",
            "text": "Fi’il"
          },
          {
            "key": "C",
            "text": "Huruf"
          },
          {
            "key": "D",
            "text": "Wadho’"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 4,
        "text": "Kalimah yang menunjukkan makna mandiri (dengan dirinya sendiri) dan tidak disertai dengan pengertian zaman (waktu) adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Isim"
          },
          {
            "key": "B",
            "text": "Fi’il"
          },
          {
            "key": "C",
            "text": "Huruf"
          },
          {
            "key": "D",
            "text": "Semua salah"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 5,
        "text": "Di bawah ini contoh kalimah fi’il, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "كَتَبَ"
          },
          {
            "key": "B",
            "text": "يَكْتُبُ"
          },
          {
            "key": "C",
            "text": "اُكْتُبْ"
          },
          {
            "key": "D",
            "text": "كِتَابٌ"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 6,
        "text": "Ada berapakah pembagian I’rob dalam ilmu Nahwu….",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "5"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 7,
        "text": "Lafadz ضَرَبَ - يَضْرِبُ (Fathun - Kasrun) termasuk tsulatsi mujarrod bab ke….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "2"
          },
          {
            "key": "C",
            "text": "3"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 8,
        "text": "Apa shighotnya lafadz لَا تَنْصُرْ ….",
        "options": [
          {
            "key": "A",
            "text": "Fi’il Madhi"
          },
          {
            "key": "B",
            "text": "Fi’il Mudhore’"
          },
          {
            "key": "C",
            "text": "Fi’il Amr"
          },
          {
            "key": "D",
            "text": "Fi’il Nahi"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 9,
        "text": "Apa shighotnya lafadz وَعَدَ ….",
        "options": [
          {
            "key": "A",
            "text": "Fi’il Madhi"
          },
          {
            "key": "B",
            "text": "Fi’il Mudhore’"
          },
          {
            "key": "C",
            "text": "Fi’il Amr"
          },
          {
            "key": "D",
            "text": "Fi’il Nahi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 10,
        "text": "Apa isim fa’ilnya lafadz وَجَبَ ….",
        "options": [
          {
            "key": "A",
            "text": "وَاجِبٌ"
          },
          {
            "key": "B",
            "text": "يَجِبُ"
          },
          {
            "key": "C",
            "text": "وُجُوْبًا"
          },
          {
            "key": "D",
            "text": "جِبْ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 11,
        "text": "Pengertian tasyrif (تَصْرِيْف) menurut bahasa adalah….",
        "options": [
          {
            "key": "A",
            "text": "Perubahan akhir kalimah"
          },
          {
            "key": "B",
            "text": "Perubahan bentuk"
          },
          {
            "key": "C",
            "text": "Perubahan lafadz"
          },
          {
            "key": "D",
            "text": "Semua salah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Perubahan dengan memindah asal yang satu kepada contoh-contoh yang berbeda dengan memandang makna yang dikehendaki adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Tashrif menurut istilah"
          },
          {
            "key": "B",
            "text": "Tashrif menurut lughowi"
          },
          {
            "key": "C",
            "text": "Wazan"
          },
          {
            "key": "D",
            "text": "Mauzun"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 13,
        "text": "Ada berapa bab fi’il dalam tsulatsi mujarrod….",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "6"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "8"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "text": "Ada berapa jumlah huruf mudhoro’ah (أ ن ي ت)….",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "6"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "8"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Difathahkan ‘ain fi’il madhinya dan didhommahkan ‘ain fi’il mudhorenya (فَعَلَ - يَفْعُلُ) adalah ciri dari fi’il tsulatsi mujarrod bab ke….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Menentukan kalimah dengan memandang huruf, harokat dan sukunnya kalimah adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Tashrif"
          },
          {
            "key": "B",
            "text": "Bina’"
          },
          {
            "key": "C",
            "text": "Wazan"
          },
          {
            "key": "D",
            "text": "Muthobaqoh"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Bina’ apa yang terdapat pada lafadz فَعَلَ / نَصَرَ….",
        "options": [
          {
            "key": "A",
            "text": "Shohih"
          },
          {
            "key": "B",
            "text": "Ajwaf"
          },
          {
            "key": "C",
            "text": "Mudho’af"
          },
          {
            "key": "D",
            "text": "Mitsal"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Ada berapakah jumlah huruf ‘illat (و ا ي)….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "Di bawah ini adalah ciri dari bab tsulatsi mujarrod dari bab 1 sampai dengan bab 6, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Fathun - Dhommun"
          },
          {
            "key": "B",
            "text": "Fathun - Fathun (Fathatani)"
          },
          {
            "key": "C",
            "text": "Fathun - Kasrun"
          },
          {
            "key": "D",
            "text": "Kasrun - Dhommun"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 20,
        "text": "Di bawah ini yang termasuk huruf mudhoro’ah, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Nun (ن)"
          },
          {
            "key": "B",
            "text": "Ya (ي)"
          },
          {
            "key": "C",
            "text": "Wawu (و)"
          },
          {
            "key": "D",
            "text": "Ta (ت)"
          }
        ],
        "answerKey": "C"
      }
    ]
  },
  {
    "id": "exam-nahwu-viii",
    "code": "ASAS-NAHWU-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Nahwu Shorof Kelas VIII",
    "subject": "Nahwu Shorof",
    "classLevel": "VIII",
    "scheduleText": "Sabtu, 28 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 6,
    "dayLabel": "Hari Ke-6 • Sabtu, 28 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Perubahan akhir kalimah karena perbedaan ‘amil yang memasukinya, baik secara lafadz atau perkiraan (taqdir) adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Kalam"
          },
          {
            "key": "B",
            "text": "I’rob"
          },
          {
            "key": "C",
            "text": "Isim"
          },
          {
            "key": "D",
            "text": "Fi’il"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 2,
        "text": "Lafadz yang berubah dari bentuk mufradnya untuk menunjukkan arti banyak (tiga atau lebih) adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Isim Mufrad"
          },
          {
            "key": "B",
            "text": "Jamak Taksir"
          },
          {
            "key": "C",
            "text": "Jamak Muannats Salim"
          },
          {
            "key": "D",
            "text": "Semua salah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "Di bawah ini adalah pembagian i’rob, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Rofa’"
          },
          {
            "key": "B",
            "text": "Nashab"
          },
          {
            "key": "C",
            "text": "Lafadz"
          },
          {
            "key": "D",
            "text": "Jazm"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 4,
        "text": "Tanda-tanda kalimah isim disebutkan di bawah ini, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Khafadh / Jer"
          },
          {
            "key": "B",
            "text": "Tanwin"
          },
          {
            "key": "C",
            "text": "Alif Lam (ال)"
          },
          {
            "key": "D",
            "text": "Lafadz"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 5,
        "text": "Di bawah ini contoh kalimah fi’il, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "كَتَبَ"
          },
          {
            "key": "B",
            "text": "يَكْتُبُ"
          },
          {
            "key": "C",
            "text": "اُكْتُبْ"
          },
          {
            "key": "D",
            "text": "كِتَابٌ"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 6,
        "text": "Ada berapakah pembagian I’rob….",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "5"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 7,
        "text": "Ada berapakah tanda-tanda bagi I’rob Rofa’ (Dhommah, Wawu, Alif, Nun)….",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "5"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Apa shighotnya lafadz لَا تَنْصُرْ ….",
        "options": [
          {
            "key": "A",
            "text": "Fi’il Madhi"
          },
          {
            "key": "B",
            "text": "Fi’il Mudhore’"
          },
          {
            "key": "C",
            "text": "Fi’il Amr"
          },
          {
            "key": "D",
            "text": "Fi’il Nahi"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 9,
        "text": "Apa shighotnya lafadz وَعَدَ ….",
        "options": [
          {
            "key": "A",
            "text": "Fi’il Madhi"
          },
          {
            "key": "B",
            "text": "Fi’il Mudhore’"
          },
          {
            "key": "C",
            "text": "Fi’il Amr"
          },
          {
            "key": "D",
            "text": "Fi’il Nahi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 10,
        "text": "Apa isim fa’ilnya lafadz وَجَبَ ….",
        "options": [
          {
            "key": "A",
            "text": "وَاجِبٌ"
          },
          {
            "key": "B",
            "text": "يَجِبُ"
          },
          {
            "key": "C",
            "text": "وُجُوْبًا"
          },
          {
            "key": "D",
            "text": "جِبْ"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 11,
        "text": "Pengertian tasyrif (تَصْرِيْف) menurut bahasa adalah….",
        "options": [
          {
            "key": "A",
            "text": "Perubahan akhir kalimah"
          },
          {
            "key": "B",
            "text": "Perubahan bentuk"
          },
          {
            "key": "C",
            "text": "Perubahan lafadz"
          },
          {
            "key": "D",
            "text": "Semua salah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Perubahan dengan memindah asal yang satu kepada contoh-contoh yang berbeda dengan memandang makna yang dikehendaki adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Tashrif menurut istilah"
          },
          {
            "key": "B",
            "text": "Tashrif menurut lughowi"
          },
          {
            "key": "C",
            "text": "Wazan"
          },
          {
            "key": "D",
            "text": "Mauzun"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 13,
        "text": "Ada berapa bab fi’il dalam tsulatsi mujarrod….",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "6"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "8"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "text": "Ada berapa jumlah huruf mudhoro’ah (أ ن ي ت)….",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "6"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "8"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Difathahkan ‘ain fi’il madhinya dan didhommahkan ‘ain fi’il mudhorenya (فَعَلَ - يَفْعُلُ) adalah ciri dari fi’il tsulatsi mujarrod bab ke….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Menentukan kalimah dengan memandang huruf, harokat dan sukunnya kalimah adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Tashrif"
          },
          {
            "key": "B",
            "text": "Bina’"
          },
          {
            "key": "C",
            "text": "Wazan"
          },
          {
            "key": "D",
            "text": "Muthobaqoh"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Bina’ apa yang terdapat pada lafadz فَعَلَ / نَصَرَ….",
        "options": [
          {
            "key": "A",
            "text": "Shohih"
          },
          {
            "key": "B",
            "text": "Ajwaf"
          },
          {
            "key": "C",
            "text": "Mudho’af"
          },
          {
            "key": "D",
            "text": "Mitsal"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Ada berapakah jumlah huruf ‘illat (و ا ي)….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "Di bawah ini adalah ciri dari bab tsulatsi mujarrod dari bab 1 sampai dengan bab 6, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Fathun - Dhommun"
          },
          {
            "key": "B",
            "text": "Fathun - Fathun (Fathatani)"
          },
          {
            "key": "C",
            "text": "Fathun - Kasrun"
          },
          {
            "key": "D",
            "text": "Kasrun - Dhommun"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 20,
        "text": "Di bawah ini yang termasuk huruf mudhoro’ah, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Nun (ن)"
          },
          {
            "key": "B",
            "text": "Ya (ي)"
          },
          {
            "key": "C",
            "text": "Wawu (و)"
          },
          {
            "key": "D",
            "text": "Ta (ت)"
          }
        ],
        "answerKey": "C"
      }
    ]
  },
  {
    "id": "exam-nahwu-ix",
    "code": "ASAS-NAHWU-IX",
    "title": "Asesmen Sumatif Akhir Semester — Nahwu Shorof Kelas IX",
    "subject": "Nahwu Shorof",
    "classLevel": "IX",
    "scheduleText": "Sabtu, 28 November 2026 • Jam Ke-3 (11.30 – 13.00 WIB)",
    "dayOrder": 6,
    "dayLabel": "Hari Ke-6 • Sabtu, 28 Nov 2026",
    "sessionOrder": 3,
    "durationMin": 90,
    "status": "published",
    "shuffleQuestions": true,
    "shuffleOptions": true,
    "questions": [
      {
        "no": 1,
        "text": "Lafadz yang tersusun dan memberikan faidah dengan disengaja dengan menggunakan bahasa Arab adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Lafadz"
          },
          {
            "key": "B",
            "text": "Murokkab"
          },
          {
            "key": "C",
            "text": "Kalam"
          },
          {
            "key": "D",
            "text": "Mufid"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 2,
        "text": "Setiap ucapan yang membatalkan shalat yang berupa satu huruf yang memahamkan atau dua huruf walaupun tidak memberi paham adalah pengertian kalam menurut….",
        "options": [
          {
            "key": "A",
            "text": "Istilah"
          },
          {
            "key": "B",
            "text": "Ulama fiqh"
          },
          {
            "key": "C",
            "text": "Ulama nahwu"
          },
          {
            "key": "D",
            "text": "Ulama ahli ushul"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 3,
        "text": "Kalimah yang menunjukkan makna dengan membutuhkan kalimah lain disebut….",
        "options": [
          {
            "key": "A",
            "text": "Kalam"
          },
          {
            "key": "B",
            "text": "Isim"
          },
          {
            "key": "C",
            "text": "Fi’il"
          },
          {
            "key": "D",
            "text": "Huruf"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 4,
        "text": "Di bawah ini contoh kalimah isim, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "اللهُ"
          },
          {
            "key": "B",
            "text": "مُحَمَّدٌ"
          },
          {
            "key": "C",
            "text": "فَعَلَ"
          },
          {
            "key": "D",
            "text": "بَيْتٌ"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 5,
        "text": "Susunan lafadz yang terdiri dari mudhof dan mudhof ilaihi disebut….",
        "options": [
          {
            "key": "A",
            "text": "Tarkib mazji"
          },
          {
            "key": "B",
            "text": "Tarkib taushifi"
          },
          {
            "key": "C",
            "text": "Tarkib idhofi"
          },
          {
            "key": "D",
            "text": "Tarkib taqyidi"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 6,
        "text": "Dua kalimah yang disusun dan dijadikan satu kalimah disebut….",
        "options": [
          {
            "key": "A",
            "text": "Tarkib mazji"
          },
          {
            "key": "B",
            "text": "Tarkib taushifi"
          },
          {
            "key": "C",
            "text": "Tarkib idhofi"
          },
          {
            "key": "D",
            "text": "Tarkib taqyidi"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 7,
        "text": "Kalimah yang menunjukkan makna dengan dirinya sendiri disertai salah satu dari 3 zaman adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Isim"
          },
          {
            "key": "B",
            "text": "Huruf"
          },
          {
            "key": "C",
            "text": "Fi’il"
          },
          {
            "key": "D",
            "text": "Lafadz"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 8,
        "text": "Kalimah terbagi menjadi 3 bagian, yaitu….",
        "options": [
          {
            "key": "A",
            "text": "Isim, fi’il dan huruf"
          },
          {
            "key": "B",
            "text": "Fi’il, huruf dan mufid"
          },
          {
            "key": "C",
            "text": "Isim, fi’il dan lafadz"
          },
          {
            "key": "D",
            "text": "Isim, huruf dan murokkab"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 9,
        "text": "Hukum asal dalam kalimah isim adalah….",
        "options": [
          {
            "key": "A",
            "text": "Mabni"
          },
          {
            "key": "B",
            "text": "Muhmal"
          },
          {
            "key": "C",
            "text": "Mu’rob"
          },
          {
            "key": "D",
            "text": "Semua salah"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 10,
        "text": "Ada berapa zaman yang terdapat pada fi’il mudhore’….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 11,
        "text": "Pengertian tasyrif (تَصْرِيْف) menurut bahasa adalah….",
        "options": [
          {
            "key": "A",
            "text": "Perubahan akhir kalimah"
          },
          {
            "key": "B",
            "text": "Perubahan bentuk"
          },
          {
            "key": "C",
            "text": "Perubahan lafadz"
          },
          {
            "key": "D",
            "text": "Semua salah"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 12,
        "text": "Perubahan dengan memindah asal yang satu kepada contoh-contoh yang berbeda dengan memandang makna yang dikehendaki adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Tashrif menurut istilah"
          },
          {
            "key": "B",
            "text": "Tashrif menurut lughowi"
          },
          {
            "key": "C",
            "text": "Wazan"
          },
          {
            "key": "D",
            "text": "Mauzun"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 13,
        "text": "Ada berapa bab fi’il dalam tsulatsi mujarrod….",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "6"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "8"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 14,
        "text": "Ada berapa jumlah huruf mudhoro’ah (أ ن ي ت)….",
        "options": [
          {
            "key": "A",
            "text": "2"
          },
          {
            "key": "B",
            "text": "6"
          },
          {
            "key": "C",
            "text": "4"
          },
          {
            "key": "D",
            "text": "8"
          }
        ],
        "answerKey": "C"
      },
      {
        "no": 15,
        "text": "Difathahkan ‘ain fi’il madhinya dan didhommahkan ‘ain fi’il mudhorenya (فَعَلَ - يَفْعُلُ) adalah ciri dari fi’il tsulatsi mujarrod bab ke….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 16,
        "text": "Menentukan kalimah dengan memandang huruf, harokat dan sukunnya kalimah adalah pengertian dari….",
        "options": [
          {
            "key": "A",
            "text": "Tashrif"
          },
          {
            "key": "B",
            "text": "Bina’"
          },
          {
            "key": "C",
            "text": "Wazan"
          },
          {
            "key": "D",
            "text": "Muthobaqoh"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 17,
        "text": "Bina’ apa yang terdapat pada lafadz فَعَلَ / نَصَرَ….",
        "options": [
          {
            "key": "A",
            "text": "Shohih"
          },
          {
            "key": "B",
            "text": "Ajwaf"
          },
          {
            "key": "C",
            "text": "Mudho’af"
          },
          {
            "key": "D",
            "text": "Mitsal"
          }
        ],
        "answerKey": "A"
      },
      {
        "no": 18,
        "text": "Ada berapakah jumlah huruf ‘illat (و ا ي)….",
        "options": [
          {
            "key": "A",
            "text": "1"
          },
          {
            "key": "B",
            "text": "3"
          },
          {
            "key": "C",
            "text": "2"
          },
          {
            "key": "D",
            "text": "4"
          }
        ],
        "answerKey": "B"
      },
      {
        "no": 19,
        "text": "Di bawah ini adalah ciri dari bab tsulatsi mujarrod dari bab 1 sampai dengan bab 6, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Fathun - Dhommun"
          },
          {
            "key": "B",
            "text": "Fathun - Fathun (Fathatani)"
          },
          {
            "key": "C",
            "text": "Fathun - Kasrun"
          },
          {
            "key": "D",
            "text": "Kasrun - Dhommun"
          }
        ],
        "answerKey": "D"
      },
      {
        "no": 20,
        "text": "Di bawah ini yang termasuk huruf mudhoro’ah, kecuali….",
        "options": [
          {
            "key": "A",
            "text": "Nun (ن)"
          },
          {
            "key": "B",
            "text": "Ya (ي)"
          },
          {
            "key": "C",
            "text": "Wawu (و)"
          },
          {
            "key": "D",
            "text": "Ta (ت)"
          }
        ],
        "answerKey": "C"
      }
    ]
  }
];
