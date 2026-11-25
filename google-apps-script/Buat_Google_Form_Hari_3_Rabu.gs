/**
 * ============================================================================
 * GENERATOR OTOMATIS GOOGLE FORM — JADWAL HARI KE-3 (RABU, 25 NOVEMBER 2026)
 * MTs ASSIBYAN (KELAS VII, VIII, IX)
 * ============================================================================
 * Daftar 9 Paket Soal Hari Ke-3 (Rabu, 25 November 2026):
 * 1. Jam Ke-1 (07.30 - 09.30) : Bahasa Inggris (Kelas VII, VIII, IX) — @40 Soal PG
 * 2. Jam Ke-2 (10.00 - 11.30) : Fiqih (Kelas VII @25 Soal, VIII @25 Soal, IX @30 Soal)
 * 3. Jam Ke-3 (11.30 - 13.00) : Informatika (Kelas VII, VIII, IX) — @30 Soal PG
 *
 * CARA PAKAI (ANTI-TIMEOUT):
 * Jalankan salah satu fungsi per mapel di bawah ini:
 * - buat1_BahasaInggris_Kelas7_8_9
 * - buat2_Fiqih_Kelas7_8_9
 * - buat3_Informatika_Kelas7_8_9
 * ============================================================================
 */

const SPREADSHEET_PROP_KEY_HARI_3 = 'ASAS_HARI_3_SPREADSHEET_ID';

function buat1_BahasaInggris_Kelas7_8_9() {
  jalankanBatchMapelHari3(['BING-VII', 'BING-VIII', 'BING-IX']);
}

function buat2_Fiqih_Kelas7_dan_8_Saja() {
  jalankanBatchMapelHari3(['FIQIH-VII', 'FIQIH-VIII']);
}

function buat2_Fiqih_Kelas7_8_9() {
  jalankanBatchMapelHari3(['FIQIH-VII', 'FIQIH-VIII', 'FQH-IX']);
}

function buat3_Informatika_Kelas7_8_9() {
  jalankanBatchMapelHari3(['INF-VII', 'INF-VIII', 'INF-IX']);
}

function buatSemuaGoogleFormHari3() {
  jalankanBatchMapelHari3([
    'BING-VII', 'BING-VIII', 'BING-IX',
    'FIQIH-VII', 'FIQIH-VIII', 'FQH-IX',
    'INF-VII', 'INF-VIII', 'INF-IX'
  ]);
}

function getOrCreateMasterSpreadsheetHari3() {
  const props = PropertiesService.getScriptProperties();
  const savedId = props.getProperty(SPREADSHEET_PROP_KEY_HARI_3);
  if (savedId) {
    try {
      return SpreadsheetApp.openById(savedId);
    } catch (e) {}
  }
  const ss = SpreadsheetApp.create('REKAP JAWABAN & NILAI ASAS — HARI 3 (RABU) MTs ASSIBYAN');
  props.setProperty(SPREADSHEET_PROP_KEY_HARI_3, ss.getId());
  return ss;
}

function ensureSummarySheetHari3(masterSS) {
  let summarySheet = masterSS.getSheetByName('DAFTAR LINK FORM');
  if (!summarySheet) {
    summarySheet = masterSS.getSheets()[0];
    summarySheet.setName('DAFTAR LINK FORM');
    summarySheet.appendRow([
      'No',
      'Kode Ujian',
      'Mata Pelajaran',
      'Kelas',
      'Jadwal',
      'Jumlah Soal',
      'Link Siswa (Published URL)',
      'Link Edit Guru'
    ]);
    summarySheet
      .getRange(1, 1, 1, 8)
      .setFontWeight('bold')
      .setBackground('#2457D6')
      .setFontColor('#FFFFFF');
    summarySheet.setFrozenRows(1);
  }
  return summarySheet;
}

function jalankanBatchMapelHari3(targetCodes) {
  const masterSS = getOrCreateMasterSpreadsheetHari3();
  const summarySheet = ensureSummarySheetHari3(masterSS);
  const selectedExams = EXAMS_HARI_3.filter(function (ex) {
    return targetCodes.indexOf(ex.code) !== -1;
  });

  for (var i = 0; i < selectedExams.length; i++) {
    var exam = selectedExams[i];
    var linkInfo = createSingleExamFormHari3(exam, masterSS);

    summarySheet.appendRow([
      summarySheet.getLastRow(),
      exam.code,
      exam.subject,
      'Kelas ' + exam.classLevel,
      exam.schedule,
      exam.questions.length + ' Soal PG',
      linkInfo.publishedUrl,
      linkInfo.editUrl
    ]);

    Logger.log('====================================');
    Logger.log('BERHASIL DIBUAT: ' + exam.title);
    Logger.log('Link Siswa : ' + linkInfo.publishedUrl);
    Logger.log('Link Guru  : ' + linkInfo.editUrl);
  }

  Logger.log('====================================');
  Logger.log('MASTER SPREADSHEET REKAP NILAI HARI 3: ' + masterSS.getUrl());
}

function createSingleExamFormHari3(exam, masterSS) {
  const form = FormApp.create(exam.title);

  form.setIsQuiz(true);
  form.setTitle(exam.title);
  form.setDescription(
    'ASESMEN SUMATIF AKHIR SEMESTER (ASAS) MTs ASSIBYAN\n' +
    'Mata Pelajaran : ' + exam.subject + '\n' +
    'Kelas : ' + exam.classLevel + '\n' +
    'Jadwal : ' + exam.schedule + ' (' + exam.duration + ')\n\n' +
    'PETUNJUK PENGERJAAN:\n' +
    '1. Berdoalah sebelum dan sesudah mengerjakan soal ujian.\n' +
    '2. Isi Nama Lengkap dengan HURUF KAPITAL dan Nomor Peserta dengan benar.\n' +
    '3. Pilihlah salah satu jawaban yang paling tepat.'
  );
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setShowLinkToRespondAgain(false);
  form.setShuffleQuestions(false);
  form.setConfirmationMessage(
    'Alhamdulillah, jawaban Anda untuk mata pelajaran ' +
    exam.subject + ' Kelas ' + exam.classLevel +
    ' telah berhasil direkam. Terima kasih.'
  );

  const nameItem = form.addTextItem();
  nameItem
    .setTitle('NAMA LENGKAP SISWA (HURUF KAPITAL)')
    .setHelpText('Contoh: AHMAD KHOWARIQIL ADI')
    .setRequired(true);

  const numItem = form.addTextItem();
  numItem
    .setTitle('NOMOR PESERTA / PASSWORD')
    .setHelpText('Contoh: 7-001 atau Assibyan7001')
    .setRequired(true);

  const classItem = form.addMultipleChoiceItem();
  classItem
    .setTitle('KELAS')
    .setChoiceValues(['VII (Tujuh)', 'VIII (Delapan)', 'IX (Sembilan)'])
    .setRequired(true);

  form
    .addPageBreakItem()
    .setTitle('SOAL PILIHAN GANDA — ' + exam.subject.toUpperCase() + ' KELAS ' + exam.classLevel)
    .setHelpText('Pilihlah satu jawaban yang paling tepat!');

  const pts = Math.round(exam.pointsPerQuestion || 4);
  const keyMap = { A: 0, B: 1, C: 2, D: 3 };

  for (let i = 0; i < exam.questions.length; i++) {
    const q = exam.questions[i];
    const mc = form.addMultipleChoiceItem();

    let titleText = q.no + '. ';
    if (q.context) {
      titleText += '[Bacalah teks/label berikut]\n' + q.context + '\n\nPertanyaan:\n';
    }
    titleText += q.text;

    mc.setTitle(titleText);
    mc.setRequired(true);
    mc.setPoints(pts);

    const correctIndex = keyMap[q.key] !== undefined ? keyMap[q.key] : 0;
    const labels = ['A. ', 'B. ', 'C. ', 'D. '];
    const choices = [];

    for (let c = 0; c < q.options.length; c++) {
      const isCorrect = c === correctIndex;
      const optText = labels[c] + q.options[c];
      choices.push(mc.createChoice(optText, isCorrect));
    }

    mc.setChoices(choices);
  }

  // Hubungkan ke Spreadsheet SETELAH semua soal & poin selesai ditambahkan agar kolom Score otomatis terbuat
  try {
    form.setDestination(FormApp.DestinationType.SPREADSHEET, masterSS.getId());
  } catch (e) {
    Logger.log('Info: Gagal menautkan ke spreadsheet: ' + e);
  }

  return {
    publishedUrl: form.getPublishedUrl(),
    editUrl: form.getEditUrl()
  };
}

const EXAMS_HARI_3 = [
  {
    "code": "BING-VII",
    "title": "BAHASA INGGRIS KELAS VII — ASAS MTs Assibyan",
    "subject": "Bahasa Inggris",
    "classLevel": "VII",
    "schedule": "Rabu, 25 November 2026, Jam Ke-1 (07.30 – 09.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 2.5,
    "questions": [
      {
        "no": 1,
        "text": "Jack : Hi, Lisa. How are you?\nLisa : …. And you?\nJack : I’m OK",
        "options": [
          "How do you do?",
          "Fine, thanks.",
          "Goodbye",
          "yes, I am"
        ],
        "key": "B"
      },
      {
        "no": 2,
        "text": "Son   : Good morning, mom.",
        "options": [
          "Hello, dear",
          "hi, son",
          "I’m fine, dear",
          "Good morning, dear"
        ],
        "key": "D"
      },
      {
        "no": 3,
        "text": "Titin : Sorry, Devi. I’m just be going now. See you again\nDevi : ……..",
        "options": [
          "Okay. Very well",
          "it’s okay, Titin",
          "Okay. Until next time",
          "Okay, Titin thank you"
        ],
        "key": "C"
      },
      {
        "no": 4,
        "text": "Fred   : …….\nTom   : Hi, Fred. Fine with me. And you?\nFred   : Fine too, Thanks.",
        "options": [
          "Hi, Tom. Good morning.",
          "Hi, Tom. Are you okay?",
          "Hi, Tom. And what about you?",
          "Hi, Tom. How are things with you?"
        ],
        "key": "D"
      },
      {
        "no": 5,
        "text": "Nadia   : What is your name?\nBadu    :  ……..",
        "options": [
          "My name is Badu",
          "I study in Kebagusan Junior High School",
          "I’m fine",
          "See you"
        ],
        "key": "A"
      },
      {
        "no": 6,
        "text": "A   : How old are you?\nB   : ………….",
        "options": [
          "I am Catherine",
          "I am 12",
          "I am fine",
          "I am student"
        ],
        "key": "B"
      },
      {
        "no": 7,
        "text": "A   : Where are you from?\nB   : ………..",
        "options": [
          "I am in the seventh grade",
          "I am from malang",
          "I live at Sagan Regency no.5",
          "I am student"
        ],
        "key": "B"
      },
      {
        "no": 8,
        "text": "Kamal : What time does your school start everyday?\nFajar    : At ……..",
        "options": [
          "Seven o’clock",
          "five o’clock",
          "twenty past twelve",
          "quarter past nine"
        ],
        "key": "A"
      },
      {
        "no": 9,
        "text": "Son      :What time is it?\nMother : ……….",
        "options": [
          "Six and twenty five",
          "Twenty past six",
          "Twenty to six",
          "Twenty five past six"
        ],
        "key": "D"
      },
      {
        "no": 10,
        "text": "We usually hold a flag ceremony on …",
        "options": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday"
        ],
        "key": "A"
      },
      {
        "no": 11,
        "text": "Teacher : It is July. Do you know what the next month is?\nStudent : Yes, Sir. It is.",
        "options": [
          "January",
          "June",
          "August",
          "December"
        ],
        "key": "C"
      },
      {
        "no": 12,
        "text": "Tian : Do you know when we commemorate Kartini day?\nDevi : of course. It is on ….",
        "options": [
          "March 25th",
          "April 21st",
          "May 2nd",
          "October 10th"
        ],
        "key": "B"
      },
      {
        "no": 13,
        "text": "Yuni : When was the youth pledge ( Sumpah  Pemuda) proclaimed?",
        "options": [
          "October 28, 1928",
          "August 17, 1945",
          "July 5, 1959",
          "October 1, 1966"
        ],
        "key": "A"
      },
      {
        "no": 14,
        "text": "Andi : What is it?\nReno : It is a ….",
        "options": [
          "Bank",
          "Hospital",
          "Post office",
          "Market"
        ],
        "key": "D"
      },
      {
        "no": 15,
        "text": "Randi : what do we usually do in this room?\nMona  : we ……\nRandi  : Is it a kitchen?\nMona  : Yes, you’re right",
        "options": [
          "Take a bath",
          "cook",
          "store things",
          "sleep"
        ],
        "key": "B"
      },
      {
        "no": 16,
        "text": "Where do people relax with their family",
        "options": [
          "Police station",
          "airport",
          "city park",
          "traditional market"
        ],
        "key": "C"
      },
      {
        "no": 17,
        "text": "How many book are there?",
        "options": [
          "Six",
          "Four",
          "Five",
          "Three"
        ],
        "key": "A"
      },
      {
        "no": 18,
        "text": "Teacher : what is the ….\nStudent : it is the building that people save their money",
        "options": [
          "Hospital",
          "Bank",
          "Post office",
          "Market"
        ],
        "key": "B"
      },
      {
        "no": 19,
        "text": "What do you say when you meet someone in the morning?",
        "options": [
          "Good night",
          "Good morning",
          "Good evening",
          "Goodbye"
        ],
        "key": "B"
      },
      {
        "no": 20,
        "text": "Rina: \"Hello, my name is Rina. What is your name?\"\nSiti: \"....\"",
        "options": [
          "I am fine",
          "Good morning",
          "My name is Siti",
          "Thank you"
        ],
        "key": "C"
      },
      {
        "no": 21,
        "text": "The correct response to \"How are you?\" is ....",
        "options": [
          "I am fine, thank you",
          "Good night",
          "See you",
          "My name is Budi"
        ],
        "key": "A"
      },
      {
        "no": 22,
        "text": "What is the English word for \"Buku\"?",
        "options": [
          "Pencil",
          "Table",
          "Book",
          "Chair"
        ],
        "key": "C"
      },
      {
        "no": 23,
        "text": "There are ... days in a week.",
        "options": [
          "Five",
          "Six",
          "Seven",
          "Eight"
        ],
        "key": "C"
      },
      {
        "no": 24,
        "text": "What is the English word for \"Merah\"?",
        "options": [
          "Blue",
          "Red",
          "Green",
          "Yellow"
        ],
        "key": "B"
      },
      {
        "no": 25,
        "text": "My father is a teacher. He works at a ....",
        "options": [
          "Hospital",
          "School",
          "Market",
          "Restaurant"
        ],
        "key": "B"
      },
      {
        "no": 26,
        "text": "Complete the sentence!\n\"This is my mother. ... name is Mrs. Ani.\"",
        "options": [
          "His",
          "Her",
          "Their",
          "My"
        ],
        "key": "B"
      },
      {
        "no": 27,
        "text": "What is the correct plural form of \"Apple\"?",
        "options": [
          "Apples",
          "Applees",
          "Apple",
          "Applese"
        ],
        "key": "A"
      },
      {
        "no": 28,
        "text": "Arrange the words into a correct sentence!\n\"Is – name – My – Andi\"",
        "options": [
          "Is my Andi name",
          "Andi is name my",
          "My name is Andi",
          "Name my is Andi"
        ],
        "key": "C"
      },
      {
        "no": 29,
        "text": "Rina: \"Hello, my name is Rina. What is your name?\"\nSita: \"Hi, Rina. ___ is Sita.\"",
        "options": [
          "My name",
          "Your name",
          "Her name",
          "His name"
        ],
        "key": "A"
      },
      {
        "no": 30,
        "text": "Teacher: \"Good morning, students!\"\nStudents: \"___ , Ma'am!\"",
        "options": [
          "Good night",
          "Good afternoon",
          "Good morning",
          "Good evening"
        ],
        "key": "C"
      },
      {
        "no": 31,
        "text": "Andi: \"How are you today, Budi?\"\nBudi: \"___ , thank you. And you?\"",
        "options": [
          "I am fine",
          "I am Budi",
          "I am ten years old",
          "I am from Jakarta"
        ],
        "key": "A"
      },
      {
        "no": 32,
        "text": "Look at the picture. This is a ___ for writing on the whiteboard.",
        "options": [
          "Book",
          "Ruler",
          "Marker",
          "Eraser"
        ],
        "key": "C"
      },
      {
        "no": 33,
        "text": "Sinta has two ___. She uses them to read books.",
        "options": [
          "Ear",
          "Eyes",
          "Nose",
          "Hand"
        ],
        "key": "B"
      },
      {
        "no": 34,
        "text": "There are seven days in a week. Today is Monday. Tomorrow is ___.",
        "options": [
          "Sunday",
          "Tuesday",
          "Friday",
          "Saturday"
        ],
        "key": "B"
      },
      {
        "no": 35,
        "text": "My mother is a teacher. My father is a doctor. They are my ___.",
        "options": [
          "Friends",
          "Parents",
          "Cousins",
          "Classmates"
        ],
        "key": "B"
      },
      {
        "no": 36,
        "text": "Lisa: \"What is your hobby, Dina?\"\nDina: \"I like ___ in my free time.\"",
        "options": [
          "Reading books",
          "Sleeping in class",
          "Crying loudly",
          "Eating chalk"
        ],
        "key": "A"
      },
      {
        "no": 37,
        "text": "Count it: 10 + 5 = ___",
        "options": [
          "Twelve",
          "Thirteen",
          "Fourteen",
          "Fifteen"
        ],
        "key": "D"
      },
      {
        "no": 38,
        "text": "This is my brother. ___ name is Fajar. He is 12 years old.",
        "options": [
          "My",
          "Your",
          "His",
          "Her"
        ],
        "key": "C"
      },
      {
        "no": 39,
        "text": "A cat has four ___ to walk.",
        "options": [
          "Wings",
          "Legs",
          "Tails",
          "Fins"
        ],
        "key": "B"
      },
      {
        "no": 40,
        "text": "The sky is blue and the grass is ___.",
        "options": [
          "Green",
          "Black",
          "Red",
          "White"
        ],
        "key": "A"
      }
    ]
  },
  {
    "code": "BING-VIII",
    "title": "BAHASA INGGRIS KELAS VIII — ASAS MTs Assibyan",
    "subject": "Bahasa Inggris",
    "classLevel": "VIII",
    "schedule": "Rabu, 25 November 2026, Jam Ke-1 (07.30 – 09.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 2.5,
    "questions": [
      {
        "no": 1,
        "text": "When you want to ask people’s opinion about someone , you ask?",
        "options": [
          "What do you think of our new teacher ?",
          "What does our new teacher look like?",
          "Where is our new teacher from ?",
          "What is our teacher’s name?"
        ],
        "key": "A"
      },
      {
        "no": 2,
        "text": "I Had a terrible day yesterday. First, I woke up an hour late because my alarm clock didn't go off. Then, I was in such a hurry that I burned my hand when I was making breakfast. After breakfast, I got dressed so quickly that I forgot to wear socks.\nWhat happened to the writer yesterday?",
        "options": [
          "He has a terrible day",
          "He gets a terrible day",
          "He had a terrible day",
          "He got a terrible day"
        ],
        "key": "C"
      },
      {
        "no": 3,
        "text": "Johan: Excuse me, sir. What time the library close, yesterday ?\nMr. Damar : It ….  at 2 p.m",
        "options": [
          "closes",
          "close",
          "closes",
          "closed"
        ],
        "key": "D"
      },
      {
        "no": 4,
        "text": "Miss Ina : Did you Understand\nJohan : Yes, I …",
        "options": [
          "do",
          "Did",
          "Is",
          "Does"
        ],
        "key": "B"
      },
      {
        "no": 5,
        "text": "She … my cake last day.",
        "options": [
          "Eaten",
          "Am",
          "eat",
          "ate"
        ],
        "key": "D"
      },
      {
        "no": 6,
        "text": "They ... the animal’s Cage last morning.",
        "options": [
          "Cleaning",
          "Clean",
          "Cleaned",
          "Cleanses"
        ],
        "key": "C"
      },
      {
        "no": 7,
        "text": "Look! The horse and the donkey look alike. But, the horse ... than the donkey.",
        "options": [
          "Younger",
          "Bigger",
          "Older",
          "Smaller"
        ],
        "key": "B"
      },
      {
        "no": 8,
        "text": "Lina is ...than her older sister, Salsa. Lina is 148 centimeters tall and Salsa is 145centimeters tall.",
        "options": [
          "Plumper",
          "Shorter",
          "Fatter",
          "Taller"
        ],
        "key": "D"
      },
      {
        "no": 9,
        "text": "An Airplane can fly 150 km/hour. A Bus can run 120km/hour. A Bicycle can run 40 km/ hour. A bicycle is ........... than a bus",
        "options": [
          "Faster",
          "slow",
          "Slower",
          "Fast"
        ],
        "key": "C"
      },
      {
        "no": 10,
        "text": "Keep off the grass. From the text above we know that …",
        "options": [
          "We may cut the grass",
          "We may walk on the grass",
          "We may not walk on the grass",
          "We may not keep the grass"
        ],
        "key": "C"
      },
      {
        "no": 11,
        "text": "Ten years ago, she . . .only a baby",
        "options": [
          "Was",
          "Am",
          "Were",
          "Is"
        ],
        "key": "A"
      },
      {
        "no": 12,
        "text": "Mario and Dono .....an active student last year",
        "options": [
          "Am",
          "Were",
          "Is",
          "Was"
        ],
        "key": "B"
      },
      {
        "no": 13,
        "text": ".....he read novel last night?",
        "options": [
          "Are",
          "Do",
          "Did",
          "Done"
        ],
        "key": "C"
      },
      {
        "no": 14,
        "text": "Hendra : Did the boys study after class ?\nAyu : No\nHendra : What did they do?\nAyu : They … football",
        "options": [
          "Played",
          "Will play",
          "Playing",
          "Play"
        ],
        "key": "A"
      },
      {
        "no": 15,
        "text": "Ma’am, I borrowed a black suede clutch and two side pockets. I need it for Bima’s birthday party tonight. Thank you very much.  Daughter.  Who wrote the short message?",
        "options": [
          "Daughter",
          "Bima",
          "Princess",
          "Mother"
        ],
        "key": "A"
      },
      {
        "no": 16,
        "text": "Teacher       :  “I’ve got some information about English Contest. Don’t be noisy…..”\nStudents      : “Yes, sir.”",
        "options": [
          "Can I have your attention, please?",
          "I got it",
          "You are with me",
          "I don’t understand"
        ],
        "key": "A"
      },
      {
        "no": 17,
        "text": "Ryan           :  “Do you understand Mrs. Hanna’s story?”\nSintya         :  “...................She speaks very fast.”",
        "options": [
          "Not really",
          "I don’t know what you mean",
          "I’d love to",
          "I think so"
        ],
        "key": "A"
      },
      {
        "no": 18,
        "text": "Aulia    :  “Did you watch “Tjimanoek Carnival” yesterday?”\nNanda     :  “Yes, I watched it with my younger brother.”\nAulia        :  “........................... “Tjimanoek carnival”?\nNanda : “I think it was so amazing . it makes me so proud of being Indonesian.”",
        "options": [
          "Can I see",
          "Can you watch",
          "What is",
          "What do you think of"
        ],
        "key": "D"
      },
      {
        "no": 19,
        "text": "Which the following expression shows giving instruction?",
        "options": [
          "I am studying",
          "Oh sorry",
          "I don’t know",
          "Hi, turn down the television"
        ],
        "key": "D"
      },
      {
        "no": 20,
        "text": "Marry :“............. to Lina’s birthday party?\nPutri : “Of course. I will go there, Marry.”\nMarry : “Ok. Thanks a lot.”",
        "options": [
          "don’t you come",
          "can you come",
          "will you come",
          "may you come"
        ],
        "key": "C"
      },
      {
        "no": 21,
        "text": "Zidan       :  “..................... Don’t be lazy. Get up and have some exercise outside.”\nAldi : “Okay,  a little bit more, Wait a minute, please.”",
        "options": [
          "Aldi, let’s go out",
          "Let’s sleep",
          "Aldi, will you go?",
          "May I go with you?"
        ],
        "key": "A"
      },
      {
        "no": 22,
        "text": "Mrs. Diana:  “Ayu, have a seat. Go back to your group!”\nAyu:  “Sorry, Maam. ...................... return this dictionary to the library?”",
        "options": [
          "Will you",
          "Can you",
          "May I",
          "Let’s"
        ],
        "key": "C"
      },
      {
        "no": 23,
        "text": "Mr Harry : “ Look at your class! What a messy class! ....................................!”\nAlvin : “ Yes sir, I will clean it up after I’ve finished eating these snacks “",
        "options": [
          "I will clean it up!",
          "Clean up your classroom!",
          "Go to your class!",
          "Don’t enter your class!"
        ],
        "key": "B"
      },
      {
        "no": 24,
        "text": "Edo says “We can learn well if the classroom is clean and tidy. So, we must keep our classroom clean and tidy.”\nThe underlined word shows .......",
        "options": [
          "An obligation",
          "A suggestion",
          "An opinion",
          "An agreement"
        ],
        "key": "A"
      },
      {
        "no": 25,
        "text": "Afifah : “ what do you usually see in Ragunan zoo?”\nNayla : “ ……… many animals in the zoo”",
        "options": [
          "There was",
          "There were",
          "There is",
          "There are"
        ],
        "key": "D"
      },
      {
        "no": 26,
        "text": "................. an elephant in the zoo.",
        "options": [
          "There was",
          "There were",
          "There is",
          "There are"
        ],
        "key": "C"
      },
      {
        "no": 27,
        "text": "“YOU SHOULD TAKE A REST FOR FEELING BETTER”\nWe send this card when …",
        "options": [
          "We win the competition",
          "We visit sick people",
          "We celebrate new year",
          "We celebrate people birthday"
        ],
        "key": "B"
      },
      {
        "no": 28,
        "text": "Handy : “ it’s me. May I come in?”\nWhat is the expression of underline word above?",
        "options": [
          "Give invitation",
          "Greeting",
          "Leave taking",
          "Asking permission"
        ],
        "key": "D"
      },
      {
        "no": 29,
        "text": "Please ........... your cell phone when you are in mosque",
        "options": [
          "Turn in",
          "Turn on",
          "Turn out",
          "Turn off"
        ],
        "key": "D"
      },
      {
        "no": 30,
        "text": "Don't smoke here. this is the expression of ....",
        "options": [
          "Prohibition",
          "Command",
          "Necessity",
          "Suggestion"
        ],
        "key": "A"
      },
      {
        "no": 31,
        "text": "She _____ to school every day.",
        "options": [
          "go",
          "goes",
          "went",
          "going"
        ],
        "key": "B"
      },
      {
        "no": 32,
        "text": "They _____ football every Sunday.",
        "options": [
          "plays",
          "played",
          "play",
          "playing"
        ],
        "key": "C"
      },
      {
        "no": 33,
        "text": "My mother _____ delicious food every morning.",
        "options": [
          "cook",
          "cooked",
          "cooking",
          "cooks"
        ],
        "key": "D"
      },
      {
        "no": 34,
        "text": "He _____ coffee every morning.",
        "options": [
          "drink",
          "drinks",
          "drank",
          "drinking"
        ],
        "key": "B"
      },
      {
        "no": 35,
        "text": "We _____ English at school.",
        "options": [
          "studies",
          "studied",
          "study",
          "studying"
        ],
        "key": "C"
      },
      {
        "no": 36,
        "text": "I _____ a movie last night.",
        "options": [
          "watch",
          "watches",
          "watched",
          "watching"
        ],
        "key": "C"
      },
      {
        "no": 37,
        "text": "She _____ to the market yesterday.",
        "options": [
          "go",
          "goes",
          "going",
          "went"
        ],
        "key": "D"
      },
      {
        "no": 38,
        "text": "They _____ basketball last weekend.",
        "options": [
          "played",
          "play",
          "plays",
          "playing"
        ],
        "key": "A"
      },
      {
        "no": 39,
        "text": "My father _____ a new car two days ago.",
        "options": [
          "buy",
          "buys",
          "bought",
          "buying"
        ],
        "key": "C"
      },
      {
        "no": 40,
        "text": "We _____ dinner at a restaurant last night.",
        "options": [
          "eat",
          "eats",
          "eating",
          "ate"
        ],
        "key": "D"
      }
    ]
  },
  {
    "code": "BING-IX",
    "title": "BAHASA INGGRIS KELAS IX — ASAS MTs Assibyan",
    "subject": "Bahasa Inggris",
    "classLevel": "IX",
    "schedule": "Rabu, 25 November 2026, Jam Ke-1 (07.30 – 09.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 2.5,
    "questions": [
      {
        "no": 1,
        "text": "I …. At five o’clock every morning.",
        "options": [
          "Wakes up",
          "Woke Up",
          "Waking up",
          "Wake up"
        ],
        "key": "D"
      },
      {
        "no": 2,
        "text": "My sister and brother seldom …. Shirt",
        "options": [
          "wears",
          "wearing",
          "wear",
          "weared"
        ],
        "key": "C"
      },
      {
        "no": 3,
        "context": "This text is for questions number 3 and 4.\nDear Esther\nCONGRATULATIONS!\nEver since I heard about your success as the first winner of singing contest of FLS2N, I know how long and how hard you practiced. We are all very proud of you. We wish you all the best in pursuing your dream to be a popular singer some day.\nRudy\nChairperson of Class 9 A",
        "text": "The text above shows that . . .",
        "options": [
          "The writer is one of the contestants",
          "Esther is the best student",
          "Esther is the first winner of singing contest",
          "Rudy is Esther's special friend"
        ],
        "key": "C"
      },
      {
        "no": 4,
        "context": "This text is for questions number 3 and 4.\nDear Esther\nCONGRATULATIONS!\nEver since I heard about your success as the first winner of singing contest of FLS2N, I know how long and how hard you practiced. We are all very proud of you. We wish you all the best in pursuing your dream to be a popular singer some day.\nRudy\nChairperson of Class 9 A",
        "text": "The text is for . . . of FL2SN.",
        "options": [
          "The best student",
          "The best teacher",
          "The best singer",
          "The best graduate student"
        ],
        "key": "C"
      },
      {
        "no": 5,
        "text": "I told him I ……something to show to his brother last week.",
        "options": [
          "had",
          "Has",
          "Have",
          "Haven’t"
        ],
        "key": "A"
      },
      {
        "no": 6,
        "text": "One day last year, john …… off his bike.",
        "options": [
          "falls",
          "Fell",
          "Has been falling",
          "Is falling"
        ],
        "key": "B"
      },
      {
        "no": 7,
        "context": "The following dialog is for questions 7 and 8.\nZalfa  : I will study English in London this year. I’ll be missing you so much.\nMaula: I’ll give you my number.(7) . . you can call me whenever you want.\nZalfa  :Ok. I promise I will study hard(8)  . . . graduate soon.",
        "text": "Complete blank number (7) in the dialog above!",
        "options": [
          "in order to",
          "but",
          "so that",
          "and"
        ],
        "key": "C"
      },
      {
        "no": 8,
        "context": "The following dialog is for questions 7 and 8.\nZalfa  : I will study English in London this year. I’ll be missing you so much.\nMaula: I’ll give you my number.(7) . . you can call me whenever you want.\nZalfa  :Ok. I promise I will study hard(8)  . . . graduate soon.",
        "text": "Complete blank number (8) in the dialog above!",
        "options": [
          "so",
          "in order to",
          "so that",
          "because of"
        ],
        "key": "B"
      },
      {
        "no": 9,
        "text": "Yesterday, the student ….. the map of Indonesia.",
        "options": [
          "learn",
          "Are learning",
          "learns",
          "Learned"
        ],
        "key": "D"
      },
      {
        "no": 10,
        "text": "Rendy: Is Puncak Pass resort near here?\nMona : Yes, it is.\nJack : … it's about 100 kilometers from here.\nRendy : Oh, really?\nThe suitable expression to complete the dialogue is …",
        "options": [
          "I don’t think so",
          "I quite agree",
          "It certainly is",
          "You are right"
        ],
        "key": "A"
      },
      {
        "no": 11,
        "text": "Ryan : The government plans to raise the electricity bill next month.\nHani :  …… It will increase the amount of poor people.\nThe suitable expression to complete the dialogue is …",
        "options": [
          "I agree with you",
          "I totally disagree",
          "I don't disagree",
          "I agree"
        ],
        "key": "B"
      },
      {
        "no": 12,
        "text": "Mother : You know that Tamara always takes sleeping pills to solve her problems.\nFather : That's wrong. It can be dangerous for her life if she doesn't change her bad habit. She should go to a specialist or share her problems with someone she trusts.\nThe underlined expression expresses ....",
        "options": [
          "Possibility",
          "Agreement",
          "Disagreement",
          "Uncertainty"
        ],
        "key": "C"
      },
      {
        "no": 13,
        "context": "The following dialog is for questions 13 to 15\nRendy:“I don’t feel well. I’m cathing a cold.”\nRose:“You should go to the doctor.\nRima: “ (13) . . . . Just take a good rest and drink a lot of water, Rendy.”\nRanty: “(14) . . . . You should go to the doctor. I think you need to take medicine.”\nRirin: “(15) . . . , Ranty. Too much medicine is not good.\nRahma: “I think the best to do is going home. Your mom and dad know better what should you do.”",
        "text": "Complete blank number (13) in the dialog above!",
        "options": [
          "I couldn’t agree with you more",
          "I disagree with you",
          "I agree with you",
          "That’s right"
        ],
        "key": "B"
      },
      {
        "no": 14,
        "context": "The following dialog is for questions 13 to 15\nRendy:“I don’t feel well. I’m cathing a cold.”\nRose:“You should go to the doctor.\nRima: “ (13) . . . . Just take a good rest and drink a lot of water, Rendy.”\nRanty: “(14) . . . . You should go to the doctor. I think you need to take medicine.”\nRirin: “(15) . . . , Ranty. Too much medicine is not good.\nRahma: “I think the best to do is going home. Your mom and dad know better what should you do.”",
        "text": "Complete blank number (14) in the dialog above!",
        "options": [
          "I agree with Rose",
          "I don’t agree with Rose",
          "I don’t think Rose is right",
          "I’m not sure about Rose’s opinion"
        ],
        "key": "A"
      },
      {
        "no": 15,
        "context": "The following dialog is for questions 13 to 15\nRendy:“I don’t feel well. I’m cathing a cold.”\nRose:“You should go to the doctor.\nRima: “ (13) . . . . Just take a good rest and drink a lot of water, Rendy.”\nRanty: “(14) . . . . You should go to the doctor. I think you need to take medicine.”\nRirin: “(15) . . . , Ranty. Too much medicine is not good.\nRahma: “I think the best to do is going home. Your mom and dad know better what should you do.”",
        "text": "Complete blank number (15) in the dialog above!",
        "options": [
          "I don’t think so",
          "you are right",
          "That’s true",
          "I guess so"
        ],
        "key": "A"
      },
      {
        "no": 16,
        "text": "Mom : Get up, please. Riko.\nRiko : In a minute, Mom. I'm still sleepy.\nMom : Come on. Have a shower right now, or you'll be late for school.\nWhere does the dialogue take place?",
        "options": [
          "In the office",
          "At home",
          "In class",
          "In the library"
        ],
        "key": "B"
      },
      {
        "no": 17,
        "text": "Mr. Wilman   : Mr. Enoch, do you mind having dinner at my house this evening?\nMr. Enoch : That sounds good.\nMr. Wilman : Are you sure?\nMr. Enoch : …",
        "options": [
          "Of course",
          "Fine, go ahead",
          "I'm afraid I can't",
          "No, I can't"
        ],
        "key": "A"
      },
      {
        "no": 18,
        "text": "Rita : Hi, friends! Tomorrow is a holiday. What shall we do?\nRatih : How about going to Ramayana Department store?\nEmi : ... What about swimming?\nRita : OK, so what time shall we go?\nEmi : Nine o'clock.",
        "options": [
          "That’s not a good idea",
          "I agree with you",
          "That's fine",
          "You're right"
        ],
        "key": "A"
      },
      {
        "no": 19,
        "text": "Dony : ... do you go fishing?\nDeni : Once a week.",
        "options": [
          "How far",
          "How long",
          "How often",
          "How many"
        ],
        "key": "C"
      },
      {
        "no": 20,
        "text": "Lidya  : What a lovely purse!\nAnne : Thank you, I made it myself.\nLidya : Did you?\nAnne  : Yes, I did.\nRiska : Ssst! Please be quiet! The baby ...",
        "options": [
          "sleeping",
          "was sleeping",
          "is sleeping",
          "slept"
        ],
        "key": "C"
      },
      {
        "no": 21,
        "context": "NUTRITION INFORMATION\nServing per package: Avg 2 / Serving size: 30 g\n- Energy: 709 kJ (169 Cal) per serving | 2360 kJ per 100 g\n- Protein: 3,6 g per serving | 12,0 g per 100 g\n- Fat total: 10,5 g per serving | 35,9 g per 100 g\n- Saturated: 4,8 g per serving | 15,9 g per 100 g\n- Carbohydrate: 14,4 g per serving | 47,6 g per 100 g\n- Sugars: 11,9 g per serving | 39,6 g per 100 g\n- Sodium: 45 mg per serving | 148 mg per 100 g\nIngredients: Sugar, Cashew, Milk Solid, Cocoa Mass, Cocoa Butter, Vegetable Fat, Emulsifier (322: Soy), Salt, Flavour.",
        "text": "How much sodium does the product contain per 100 g?",
        "options": [
          "45 mg",
          "148 mg",
          "565 mg",
          "709 mg"
        ],
        "key": "B"
      },
      {
        "no": 22,
        "context": "NUTRITION INFORMATION\nServing per package: Avg 2 / Serving size: 30 g\n- Energy: 709 kJ (169 Cal) per serving | 2360 kJ per 100 g\n- Protein: 3,6 g per serving | 12,0 g per 100 g\n- Fat total: 10,5 g per serving | 35,9 g per 100 g\n- Saturated: 4,8 g per serving | 15,9 g per 100 g\n- Carbohydrate: 14,4 g per serving | 47,6 g per 100 g\n- Sugars: 11,9 g per serving | 39,6 g per 100 g\n- Sodium: 45 mg per serving | 148 mg per 100 g\nIngredients: Sugar, Cashew, Milk Solid, Cocoa Mass, Cocoa Butter, Vegetable Fat, Emulsifier (322: Soy), Salt, Flavour.",
        "text": "“Ingredients: sugar, cashew, milk solids…etc.”\nThe underlined word means: …. needed to make something.",
        "options": [
          "The steps",
          "The goals",
          "The materials",
          "The methods"
        ],
        "key": "C"
      },
      {
        "no": 23,
        "context": "NUTRITION INFORMATION\nServing per package: Avg 2 / Serving size: 30 g\n- Energy: 709 kJ (169 Cal) per serving | 2360 kJ per 100 g\n- Protein: 3,6 g per serving | 12,0 g per 100 g\n- Fat total: 10,5 g per serving | 35,9 g per 100 g\n- Saturated: 4,8 g per serving | 15,9 g per 100 g\n- Carbohydrate: 14,4 g per serving | 47,6 g per 100 g\n- Sugars: 11,9 g per serving | 39,6 g per 100 g\n- Sodium: 45 mg per serving | 148 mg per 100 g\nIngredients: Sugar, Cashew, Milk Solid, Cocoa Mass, Cocoa Butter, Vegetable Fat, Emulsifier (322: Soy), Salt, Flavour.",
        "text": "The label is telling us about … of a product.",
        "options": [
          "The steps",
          "The goals",
          "The materials",
          "The nutrition information"
        ],
        "key": "D"
      },
      {
        "no": 24,
        "context": "COLD BREAKER — LIKE YOU NEVER FEEL ANY COLD\nFast relief for:\n- Congestion\n- Runny nose\n- Coughs\n- Headache\n- Fever\nContent: 100 tablets | USP | 200 mg\nAVAILABLE IN EVERY STORE IN INDONESIA",
        "text": "Which of the following sickness cannot be relieved by this medicine?",
        "options": [
          "Headache",
          "Coughs",
          "Cancer",
          "Fever"
        ],
        "key": "C"
      },
      {
        "no": 25,
        "context": "COLD BREAKER — LIKE YOU NEVER FEEL ANY COLD\nFast relief for:\n- Congestion\n- Runny nose\n- Coughs\n- Headache\n- Fever\nContent: 100 tablets | USP | 200 mg\nAVAILABLE IN EVERY STORE IN INDONESIA",
        "text": "What's the writer's purpose to write the text above?",
        "options": [
          "To inform the process of making Cold Breaker",
          "To persuade people to use the product",
          "To explain the ingredients of the product",
          "To describe the illnesses that can be cured"
        ],
        "key": "B"
      },
      {
        "no": 26,
        "context": "COLD BREAKER — LIKE YOU NEVER FEEL ANY COLD\nFast relief for:\n- Congestion\n- Runny nose\n- Coughs\n- Headache\n- Fever\nContent: 100 tablets | USP | 200 mg\nAVAILABLE IN EVERY STORE IN INDONESIA",
        "text": "Which information is NOT available in the text?",
        "options": [
          "The function of medicine",
          "The medicine availability in drugstore.",
          "The medicine expiration date",
          "The content of medicine"
        ],
        "key": "C"
      },
      {
        "no": 27,
        "context": "DRUG FACTS — Uses:\n• Temporarily relieves nasal congestion due to the common cold, hay fever or other upper respiratory allergies, or associated with sinusitis.\n• Temporarily relieves these symptoms due to hay fever (allergic rhinitis): runny nose, sneezing, itching of the nose or throat, itchy, watery eyes.\n• Temporarily restores freer breathing through the nose.\nDirections (Do not take more than 4 doses in any 24-hour period):\n- Adults and children over 12 years: 4 tsp (teaspoons) every 4 hours\n- Children 6 to under 12 years: 2 tsp (teaspoons) every 4 hours\n- Children under 6 years: ask a doctor.",
        "text": "From the label above we know that ....",
        "options": [
          "This medicine is only for adult",
          "This medicine is in the form of syrup",
          "Stomachache can be cured with this medicine",
          "Children under 12 cannot take this medicine"
        ],
        "key": "B"
      },
      {
        "no": 28,
        "context": "DRUG FACTS — Uses:\n• Temporarily relieves nasal congestion due to the common cold, hay fever or other upper respiratory allergies, or associated with sinusitis.\n• Temporarily relieves these symptoms due to hay fever (allergic rhinitis): runny nose, sneezing, itching of the nose or throat, itchy, watery eyes.\n• Temporarily restores freer breathing through the nose.\nDirections (Do not take more than 4 doses in any 24-hour period):\n- Adults and children over 12 years: 4 tsp (teaspoons) every 4 hours\n- Children 6 to under 12 years: 2 tsp (teaspoons) every 4 hours\n- Children under 6 years: ask a doctor.",
        "text": "Who must be consulted to the doctor before taking this medicine?",
        "options": [
          "Adult",
          "Children under 6 years",
          "Children 12 years and over",
          "Children 6 to under 12 years"
        ],
        "key": "B"
      },
      {
        "no": 29,
        "context": "DRUG FACTS — Uses:\n• Temporarily relieves nasal congestion due to the common cold, hay fever or other upper respiratory allergies, or associated with sinusitis.\n• Temporarily relieves these symptoms due to hay fever (allergic rhinitis): runny nose, sneezing, itching of the nose or throat, itchy, watery eyes.\n• Temporarily restores freer breathing through the nose.\nDirections (Do not take more than 4 doses in any 24-hour period):\n- Adults and children over 12 years: 4 tsp (teaspoons) every 4 hours\n- Children 6 to under 12 years: 2 tsp (teaspoons) every 4 hours\n- Children under 6 years: ask a doctor.",
        "text": "\"Temporarily relieves these symptoms due to hay fever.\"\nWhat does the underlined word mean?",
        "options": [
          "Increase",
          "Ease",
          "Repeat",
          "Believe"
        ],
        "key": "B"
      },
      {
        "no": 30,
        "context": "SUPPLEMENTS FACTS\nServing size: 1 tablet | Servings per container: 30\n- Vitamin C (as non acidic calcium ascorbate): 250 mg (416,67% DV)\n- Calcium (as calcium ascorbate): 50 mg (7,14% DV)\n- Citrus bioflavonoid*: 50 mg | Rutin*: 25 mg | Hesperidin*: 25 mg | Rose hips*: 125 mg | Acerola*: 5 mg\nSuggested use: 1 tablet after meal.\nThis product contains no artificial colors, flavors, preservatives, milk, egg, sugar, chemical solvent, starch or gluten.",
        "text": "What is the purpose of the text?",
        "options": [
          "To advertise a supplement for woman",
          "To describe a product for adult",
          "To give detailed information about the supplement",
          "To tell the value of a supplement"
        ],
        "key": "C"
      },
      {
        "no": 31,
        "text": "She _____ to school every day.",
        "options": [
          "go",
          "goes",
          "went",
          "going"
        ],
        "key": "B"
      },
      {
        "no": 32,
        "text": "They _____ football every Sunday.",
        "options": [
          "plays",
          "played",
          "play",
          "playing"
        ],
        "key": "C"
      },
      {
        "no": 33,
        "text": "My mother _____ delicious food every morning.",
        "options": [
          "cook",
          "cooked",
          "cooking",
          "cooks"
        ],
        "key": "D"
      },
      {
        "no": 34,
        "text": "He _____ coffee every morning.",
        "options": [
          "drink",
          "drinks",
          "drank",
          "drinking"
        ],
        "key": "B"
      },
      {
        "no": 35,
        "text": "We _____ English at school.",
        "options": [
          "studies",
          "studied",
          "study",
          "studying"
        ],
        "key": "C"
      },
      {
        "no": 36,
        "text": "I _____ a movie last night.",
        "options": [
          "watch",
          "watches",
          "watched",
          "watching"
        ],
        "key": "C"
      },
      {
        "no": 37,
        "text": "She _____ to the market yesterday.",
        "options": [
          "go",
          "goes",
          "going",
          "went"
        ],
        "key": "D"
      },
      {
        "no": 38,
        "text": "They _____ basketball last weekend.",
        "options": [
          "played",
          "play",
          "plays",
          "playing"
        ],
        "key": "A"
      },
      {
        "no": 39,
        "text": "My father _____ a new car two days ago.",
        "options": [
          "buy",
          "buys",
          "bought",
          "buying"
        ],
        "key": "C"
      },
      {
        "no": 40,
        "text": "We _____ dinner at a restaurant last night.",
        "options": [
          "eat",
          "eats",
          "eating",
          "ate"
        ],
        "key": "D"
      }
    ]
  },
  {
    "code": "FIQIH-VII",
    "title": "FIQIH KELAS VII — ASAS MTs Assibyan",
    "subject": "Fiqih",
    "classLevel": "VII",
    "schedule": "Rabu, 25 November 2026, Jam Ke-2 (10.00 – 11.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 4,
    "questions": [
      {
        "no": 1,
        "text": "Menyucikan diri dari hadats dan najis ketika akan mengerjakan ibadah disebut….",
        "options": [
          "Tayamum",
          "Thaharah",
          "Wudhu",
          "Istinja’"
        ],
        "key": "B"
      },
      {
        "no": 2,
        "text": "إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِين — Ayat tersebut menjelaskan tentang....",
        "options": [
          "Thaharah (Bersuci)",
          "Najis",
          "Shalat",
          "Puasa"
        ],
        "key": "A"
      },
      {
        "no": 3,
        "text": "Ditinjau dari segi hukumnya, air dibagi menjadi empat macam, yaitu...",
        "options": [
          "Air mutlak, air musyammas, air mutanajjis, air zam-zam",
          "Air mutlak, air musyammas, air musta’mal, air mutanajjis",
          "Air mutlak, air musyammas, air mutanajjis, air sumur",
          "Air mutlak, air musyammas, air mutanajjis, air hujan"
        ],
        "key": "B"
      },
      {
        "no": 4,
        "text": "Air panas akibat terkena sinar matahari (air musyammas) makruh dipergunakan apabila disimpan di dalam….",
        "options": [
          "Penampungan ember plastik",
          "Penampungan kendi tanah",
          "Penampungan yang terbuat dari besi, baja, atau tembaga (logam berkarat)",
          "Bak kamar mandi keramik"
        ],
        "key": "C"
      },
      {
        "no": 5,
        "text": "Air suci sedikit yang kurang dari dua qullah dan sudah dipergunakan untuk bersuci (menghilangkan hadats), sehingga tidak dapat dipakai bersuci kembali disebut…",
        "options": [
          "Air thahir",
          "Air musta’mal",
          "Air musyammas",
          "Air mutanajjis"
        ],
        "key": "B"
      },
      {
        "no": 6,
        "text": "Najis berasal dari bahasa Arab yang artinya....",
        "options": [
          "Suci",
          "Kotor",
          "Bersih",
          "Hitam"
        ],
        "key": "B"
      },
      {
        "no": 7,
        "text": "Suatu najis yang cara menyucikannya cukup dipercikkan dengan air pada tempat yang terkena najis disebut najis ….",
        "options": [
          "Mughallazhah",
          "Mutawassithah",
          "Mukhaffafah",
          "Hukmiyah"
        ],
        "key": "C"
      },
      {
        "no": 8,
        "text": "Najis mutawassithah yang masih tampak wujud, bau, ataupun rasanya disebut...",
        "options": [
          "Najis hukmiyah",
          "Najis ‘ainiyah",
          "Najis ringan",
          "Najis berat"
        ],
        "key": "B"
      },
      {
        "no": 9,
        "text": "Yang termasuk najis mughallazhah (najis berat) ialah….",
        "options": [
          "Muntah",
          "Darah",
          "Khamar",
          "Babi dan anjing"
        ],
        "key": "D"
      },
      {
        "no": 10,
        "text": "Suatu najis yang cara menyucikannya dengan membasuh air sebanyak tujuh kali dan salah satunya dicampur dengan tanah disebut najis....",
        "options": [
          "Mughallazhah",
          "Mutawassithah",
          "Mukhaffafah",
          "Hukmiyah"
        ],
        "key": "A"
      },
      {
        "no": 11,
        "text": "Keadaan tidak suci pada diri seseorang sehingga menjadikannya tidak sah dalam melakukan ibadah shalat disebut…",
        "options": [
          "Najis",
          "Kotor",
          "Hadats",
          "Thaharah"
        ],
        "key": "C"
      },
      {
        "no": 12,
        "context": "1) Keluar sesuatu dari qubul dan dubur\n2) Karena hilang akal (tidur/pingsan)\n3) Haid\n4) Persentuhan kulit laki-laki dan perempuan bukan mahram\n5) Nifas\n6) Menyentuh kemaluan dengan telapak tangan",
        "text": "Manakah yang termasuk hal-hal yang menyebabkan seseorang berhadats kecil…",
        "options": [
          "1), 2), 4), 5)",
          "1), 2), 3), 4)",
          "1), 2), 4), 6)",
          "3), 4), 5), 6)"
        ],
        "key": "C"
      },
      {
        "no": 13,
        "text": "Bersuci membersihkan qubul atau dubur sesudah buang air besar atau buang air kecil disebut....",
        "options": [
          "Istinja’",
          "Thaharah",
          "Najis",
          "Suci"
        ],
        "key": "A"
      },
      {
        "no": 14,
        "context": "1) Mencuci tangan — 2) Niat — 3) Mandi — 4) Kumur-kumur — 5) Membasuh muka — 6) Membasuh kedua tangan sampai siku — 7) Mengusap sebagian kepala — 8) Membasuh telinga — 9) Membasuh kedua kaki sampai mata kaki — 10) Tertib",
        "text": "Manakah yang termasuk rukun wudhu…",
        "options": [
          "1), 2), 3), 4), 5), 6)",
          "2), 3), 4), 5), 6), 7)",
          "2), 5), 6), 7), 9), 10)",
          "4), 5), 6), 7), 8), 9)"
        ],
        "key": "C"
      },
      {
        "no": 15,
        "text": "Cara menyucikan hadats kecil yaitu harus berwudhu, apabila tidak ada air maka diganti dengan tayamum. Lafadz niat tayamum yaitu…",
        "options": [
          "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا ِللهِ تَعَالَى",
          "نَوَيْتُ التَّيَمُّمَ لِاسْتِبَاحَةِ الصَّلَاةِ فَرْضًا للهِ تَعَالَى",
          "نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ اْلاَكْبَرِ فَرْضًا ِللهِ تَعَالَى",
          "اَللّٰهُمَّ حَسِّنْ فَرْجِىْ مِنَ الْفَوَاحِشِ وَطَهِّرْ قَلْبِيْ مِنَ النِّفَاقِ"
        ],
        "key": "B"
      },
      {
        "no": 16,
        "text": "نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ اْلاَكْبَرِ مِنَ الحَيْضِ فَرْضًا ِللهِ تَعَالَى — Lafadz niat tersebut adalah….",
        "options": [
          "Niat mandi nifas",
          "Niat mandi wiladah",
          "Niat mandi haid",
          "Niat mandi sunnah"
        ],
        "key": "C"
      },
      {
        "no": 17,
        "text": "Shalat adalah kewajiban yang telah ditentukan waktunya atas orang-orang yang beriman. Menurut bahasa, shalat artinya...",
        "options": [
          "Selamat",
          "Doa",
          "Menyembah",
          "Memohon"
        ],
        "key": "B"
      },
      {
        "no": 18,
        "text": "Ibadah yang terdiri dari perkataan dan perbuatan tertentu, yang dimulai dengan takbiratul ihram dan diakhiri dengan salam disebut…",
        "options": [
          "Do’a",
          "Pidato",
          "Shalat",
          "Khutbah"
        ],
        "key": "C"
      },
      {
        "no": 19,
        "text": "Dalil وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ وَارْكَعُوْا مَعَ الرّٰكِعِيْنَ merupakan perintah…",
        "options": [
          "Ruku",
          "Sujud",
          "Zakat dan sadaqah",
          "Shalat dan zakat"
        ],
        "key": "D"
      },
      {
        "no": 20,
        "text": "<u>وَاَقِيْمُوا الصَّلٰوةَ وَاٰتُوا الزَّكٰوةَ</u> وَارْكَعُوْا مَعَ الرّٰكِعِيْنَ — Arti ayat yang bergaris bawah adalah….",
        "options": [
          "Dan dirikanlah shalat dan tunaikanlah zakat",
          "Dan ruku’lah bersama orang-orang yang ruku",
          "Laksanakanlah shalat atas perintah Allah",
          "Shalat dan zakat adalah kewajiban umat muslim"
        ],
        "key": "A"
      },
      {
        "no": 21,
        "context": "1. Suci dari hadats besar dan kecil\n2. Suci badan, pakaian, dan tempat dari najis\n3. Menutup aurat\n4. Telah masuk waktu shalat\n5. Menghadap kiblat",
        "text": "Pernyataan-pernyataan tersebut di atas merupakan…",
        "options": [
          "Syarat wajib shalat",
          "Syarat sah shalat",
          "Sunnah-sunnah shalat",
          "Rukun shalat"
        ],
        "key": "B"
      },
      {
        "no": 22,
        "context": "1) Islam — 2) Baligh — 3) Berakal — 4) Anak kecil — 5) Niat — 6) Berdiri",
        "text": "Perhatikan pernyataan di atas, manakah yang termasuk syarat wajib shalat…",
        "options": [
          "3), 4), 5)",
          "1), 2), 3)",
          "1), 3), 5)",
          "2), 4), 6)"
        ],
        "key": "B"
      },
      {
        "no": 23,
        "text": "Amalan sunnah dalam shalat yang apabila terlupakan dianjurkan untuk diganti dengan sujud sahwi disebut....",
        "options": [
          "Sunnah hai’at",
          "Sunnah yang dianjurkan",
          "Sunnah ab’adh",
          "Sunnah muakkad"
        ],
        "key": "C"
      },
      {
        "no": 24,
        "text": "<u>صَلاَةُ الجَمَاعَةِ تَفْضُلُ صَلاَة الفَذِّ</u> بِسَبْعٍ وعِشْرِينَ دَرَجَةً — Arti dalil yang digarisbawahi adalah…",
        "options": [
          "Shalat berjamaah merupakan kewajiban bagi umat muslim",
          "Shalat di hari Jum’at adalah wajib",
          "Shalat berjamaah itu lebih utama daripada shalat sendirian",
          "Shalat berjamaah itu harus lebih dari satu orang"
        ],
        "key": "C"
      },
      {
        "no": 25,
        "text": "Banyak manfaat yang dapat kita peroleh dengan selalu berzikir kepada Allah, kecuali…",
        "options": [
          "Menenteramkan hati",
          "Menimbulkan kesabaran",
          "Selalu dekat dengan Allah",
          "Menjadi sombong"
        ],
        "key": "D"
      }
    ]
  },
  {
    "code": "FIQIH-VIII",
    "title": "FIQIH KELAS VIII — ASAS MTs Assibyan",
    "subject": "Fiqih",
    "classLevel": "VIII",
    "schedule": "Rabu, 25 November 2026, Jam Ke-2 (10.00 – 11.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 4,
    "questions": [
      {
        "no": 1,
        "text": "Pada zaman Nabi Muhammad SAW dan para sahabat, sujud syukur ketika mendengar kabar kematian Musailamah Al-Kadzab dilakukan oleh ...",
        "options": [
          "Nabi Muhammad SAW",
          "Abu Bakar Ash-Shiddiq",
          "Ali bin Abi Thalib",
          "Ka’ab bin Malik"
        ],
        "key": "B"
      },
      {
        "no": 2,
        "text": "Sesuai dengan sabda Rasulullah SAW yang diriwayatkan oleh Imam Muslim, keutamaan sujud tilawah adalah ...",
        "options": [
          "Akan diampuni dosa",
          "Akan dimudahkan rizki",
          "Terhindar dari gangguan setan dan masuk surga",
          "Terhindar dari bencana"
        ],
        "key": "C"
      },
      {
        "no": 3,
        "text": "Salah satu rukun sujud syukur dan sujud tilawah adalah ...",
        "options": [
          "Sujud satu kali",
          "Suci dari hadats dan nifas",
          "Sujud dua kali",
          "Membaca doa qunut"
        ],
        "key": "A"
      },
      {
        "no": 4,
        "text": "Sujud tilawah dilakukan ketika ...",
        "options": [
          "Mendapat nikmat",
          "Mendengar atau membaca ayat sajdah",
          "Terhindar dari bahaya",
          "Ada yang lupa dalam shalat"
        ],
        "key": "B"
      },
      {
        "no": 5,
        "text": "Di dalam Al-Qur’an terdapat .... ayat sajdah.",
        "options": [
          "12 ayat",
          "13 ayat",
          "14 atau 15 ayat",
          "17 ayat"
        ],
        "key": "C"
      },
      {
        "no": 6,
        "text": "Potongan ayat Al-Qur’an yang merupakan ayat sajdah (QS. Al-‘Alaq: 19) adalah ...",
        "options": [
          "سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ",
          "فَسَجَدَ اعْتَزَلَ الشَّيْطَانُ",
          "كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِبْ",
          "يَا أَيُّهَا النَّاسُ إِنَّا لَمْ نُؤْمَرْ بِالسُّجُودِ"
        ],
        "key": "C"
      },
      {
        "no": 7,
        "text": "Berikut ini yang merupakan ayat sajdah adalah ...",
        "options": [
          "Q.S. Al-A’raf ayat 203",
          "Q.S. Al-A’raf ayat 204",
          "Q.S. Al-A’raf ayat 205",
          "Q.S. Al-A’raf ayat 206"
        ],
        "key": "D"
      },
      {
        "no": 8,
        "text": "سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ — Adalah bacaan ....",
        "options": [
          "Sujud sahwi",
          "Sujud tilawah / syukur",
          "I’tidal",
          "Sujud ampunan"
        ],
        "key": "B"
      },
      {
        "no": 9,
        "text": "Ahmad sedang membaca Al-Qur’an, tiba-tiba saat sampai pada ayat sajdah ia melakukan sujud. Sujud yang dilakukan Ahmad disebut sujud...",
        "options": [
          "Syukur",
          "Tilawah",
          "Sahwi",
          "Qiro’ah"
        ],
        "key": "B"
      },
      {
        "no": 10,
        "text": "Sujud yang dikerjakan karena lupa atau ragu jumlah rakaat dalam shalat adalah ...",
        "options": [
          "Sujud syukur",
          "Sujud tilawah",
          "Sujud sahwi",
          "Sujud ampunan"
        ],
        "key": "C"
      },
      {
        "no": 11,
        "text": "Wanita yang sedang berhadats besar (haid atau nifas) maka ... berpuasa.",
        "options": [
          "Wajib",
          "Boleh",
          "Dilarang / Haram",
          "Sah"
        ],
        "key": "C"
      },
      {
        "no": 12,
        "text": "Ibadah puasa diberikan langsung balasan pahalanya oleh ...",
        "options": [
          "Malaikat",
          "Rasul",
          "Nabi",
          "Allah SWT"
        ],
        "key": "D"
      },
      {
        "no": 13,
        "text": "Shaum atau shiyam menurut istilah syariat artinya ...",
        "options": [
          "Shalat",
          "Puasa (Menahan diri)",
          "Zakat",
          "Syahadat"
        ],
        "key": "B"
      },
      {
        "no": 14,
        "text": "Rukun puasa ada … macam (yaitu niat dan menahan diri dari hal yang membatalkan puasa).",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "key": "B"
      },
      {
        "no": 15,
        "text": "Syarat sah puasa salah satunya adalah tamyiz atau mumayyiz, yaitu ...",
        "options": [
          "Dapat membedakan yang baik dan buruk",
          "Laki-laki",
          "Bayi yang baru lahir",
          "Perempuan"
        ],
        "key": "A"
      },
      {
        "no": 16,
        "text": "Muntah secara disengaja dalam keadaan berpuasa menyebabkan ...",
        "options": [
          "Puasa sah",
          "Boleh",
          "Batalnya puasa",
          "Tidak dilarang"
        ],
        "key": "C"
      },
      {
        "no": 17,
        "text": "Orang yang dalam perjalanan jauh boleh tidak berpuasa Ramadhan tetapi wajib mengganti (qadha) di hari lain. Orang ini disebut sebagai ...",
        "options": [
          "Mukallaf",
          "Musafir",
          "Muallim",
          "Muslim"
        ],
        "key": "B"
      },
      {
        "no": 18,
        "text": "Hukum melaksanakan puasa Arafah (9 Dzulhijjah) disunnahkan bagi ...",
        "options": [
          "Umat Islam yang sedang wukuf menunaikan ibadah haji",
          "Orang-orang Islam yang sudah pernah haji saja",
          "Anak kecil yang belum baligh",
          "Orang mukallaf yang tidak sedang menunaikan ibadah haji"
        ],
        "key": "D"
      },
      {
        "no": 19,
        "text": "Bagi orang tua renta (jompo) yang sudah tidak mampu menjalankan puasa Ramadhan, maka baginya wajib ...",
        "options": [
          "Membayar fidyah",
          "Mengeluarkan zakat mal",
          "Membayar kafarat",
          "Mengeluarkan wakaf"
        ],
        "key": "A"
      },
      {
        "no": 20,
        "text": "Berikut adalah hal-hal yang membatalkan puasa, kecuali ...",
        "options": [
          "Menangis",
          "Muntah disengaja",
          "Makan dan minum dengan sengaja",
          "Haid atau nifas"
        ],
        "key": "A"
      },
      {
        "no": 21,
        "text": "Niat melaksanakan puasa wajib Ramadhan dilakukan pada waktu ...",
        "options": [
          "Sore hari",
          "Siang hari",
          "Pagi hari setelah terbit matahari",
          "Malam hari sampai sebelum terbit fajar shadiq"
        ],
        "key": "D"
      },
      {
        "no": 22,
        "text": "Puasa yang apabila dikerjakan mendapat pahala dan apabila ditinggalkan tidak mendapat dosa adalah ...",
        "options": [
          "Puasa wajib",
          "Puasa sunnah",
          "Puasa nazar",
          "Puasa haram"
        ],
        "key": "B"
      },
      {
        "no": 23,
        "text": "Macam-macam puasa wajib ada 3 yaitu ...",
        "options": [
          "Arafah, Ramadhan, Daud",
          "Sunnah, Arafah, Kifarat",
          "Ramadhan, Nazar, Kifarat (Kafarat)",
          "Nazar, Sunnah, Syawal"
        ],
        "key": "C"
      },
      {
        "no": 24,
        "text": "Kewajiban puasa menurut Surat Al-Baqarah ayat 183 ditujukan bagi ...",
        "options": [
          "Musafir",
          "Mualaf",
          "Orang-orang yang beriman",
          "Seluruh manusia"
        ],
        "key": "C"
      },
      {
        "no": 25,
        "text": "Yang merupakan Hari Tasyrik (hari yang diharamkan berpuasa) adalah ...",
        "options": [
          "Tanggal 11, 12, 13 Dzulhijjah",
          "Tanggal 9, 10 Dzulhijjah",
          "Tanggal 12, 13, 14 Dzulhijjah",
          "Tanggal 1, 2, 3 Syawal"
        ],
        "key": "A"
      }
    ]
  },
  {
    "code": "FQH-IX",
    "title": "FIQIH KELAS IX — ASAS MTs Assibyan",
    "subject": "Fiqih",
    "classLevel": "IX",
    "schedule": "Rabu, 25 November 2026, Jam Ke-2 (10.00 – 11.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 3,
    "questions": [
      {
        "no": 1,
        "text": "Memutuskan saluran makanan dan minuman, saluran pernafasan, saluran darah dari jantung ke otak (urat nadi) dengan menggunakan alat yang tajam selain kuku, gigi atau tulang agar menjadi halal disebut....",
        "options": [
          "Penyiksaan",
          "Penyembelihan",
          "Membunuh",
          "Mematika"
        ],
        "key": "B"
      },
      {
        "no": 2,
        "text": "Perhatikan pernyataan berikut.\n1) Memukuli hewan sampai mati  5) Memotong kerongkongan, tenggorokan, dan dua urat nadi hewan\n2) Membaringkan hewan ke kiri   6) Membaca basmalah dan niat karena Allah SWT\n3) Menghadap kiblat                     7) Membiarkan darah segar mengalir dari urat nadi leher yang putus\n4) Memotong anggota hewan        8) Memutuskan leher hewan\nTata cara menyembelih hewan yang baik menurut ajaran Islam dutunjukkan oleh nomor....",
        "options": [
          "1) 3) 5) 7)",
          "1) 4) 5) 6)",
          "2) 3) 5) 6)",
          "3) 4) 5) 7)"
        ],
        "key": "C"
      },
      {
        "no": 3,
        "text": "Penyembelihan harus memenuhi beberapa syarat sehingga hewan sembelihannya menjadi halal. Diantara syarat syah penyembelihan hewan adalah....",
        "options": [
          "Islam, mumayyiz dan berakal",
          "Islam, balig, berakal dan laki-laki",
          "Islam, balig, berakal, suci dari hadast dan najis",
          "Islam, berakal, laki-laki dan dilakukan dengan cepat"
        ],
        "key": "A"
      },
      {
        "no": 4,
        "text": "Perhatikan beberapa ketentuan berikut ini.\n1) Membaringkan hewan ke sebelah kanan4)Menyakiti hewan sebelum disembelih\n2) Menghadapkan hewan ke arah kiblat5)Mempercepat proses penyembelihan\n3) Menyembelih hewan dengan pisau tumpul6) Menajamkan pisau untuk menyembel\nDari beberapa ketentuan tersebut, yang termasuk sunnah dalam penyembelihan hewan ditunjukkan oleh nomor...",
        "options": [
          "1), 2) dan 6)",
          "2), 5) dan 6)",
          "3), 4) dan 7)",
          "5), 6) dan 7)"
        ],
        "key": "B"
      },
      {
        "no": 5,
        "text": "Dalam hal penyembelihan harus mengikuti pedoman atau tata cara yang telah ditentukan oleh Rasulullah SAW Karena pasti semua itu mengandung hikmah, diantaranya....",
        "options": [
          "Memperoleh daging yang halal dan sehat",
          "Mengikuti budaya Islam",
          "Menjalankan dakwah Rasaulullah SAW",
          "Mengikuti ajaran Nabi Ibrahim AS"
        ],
        "key": "A"
      },
      {
        "no": 6,
        "text": "Amatilah pernyataan di bawah ini.\n1) Menyakiti hewan sebelum disembelih4) Membaca shalawat\n2) Memunjukkan alat potong kepada hewan 5) Menyembelih sampai putus batang lehernya\n3) Membaca baslamah6) Menyembelih dengan alat tumpul\nHal-hal yang makruh dalam penyembelihan ditunjukkan oleh nomor....",
        "options": [
          "2) 3) 4) dan 5)",
          "1) 2 ) 5) dan 6)",
          "1) 3) 4) dan 5)",
          "2) 4) 5) dan 6)"
        ],
        "key": "B"
      },
      {
        "no": 7,
        "text": "Pak Rudi memotong hewan dengan menggunakan tulang yang amat tajam. Maka daging dari hewan tersebut apabila dimakan hukumnya....",
        "options": [
          "Halal",
          "Boleh",
          "Haram",
          "Makruh"
        ],
        "key": "C"
      },
      {
        "no": 8,
        "text": "Penyembelihan hewan ternak yang memeneuhi syarat tertentu pada waktu tertentu dengan niat mendekatkan diri kepada Allah SWT. Adalah pengertian dari....",
        "options": [
          "Akikah",
          "Penyembelihan",
          "Qurban",
          "Pemotongan"
        ],
        "key": "C"
      },
      {
        "no": 9,
        "text": "Pak Asep diminta oleh masyarakat untuk menyembelih hewan kurban dengan dibantu oleh beberapa panitia kurban. Pada pelaksanaan penyembelihan hewan kurban satu persatu disembelih dengan memposisikan hewan kurban dihadapkan ke arah kiblat. Hukum menghadapkan binatang ke arah kiblat ketika menyembelih adalah...",
        "options": [
          "Wajib ‘ain",
          "Wajib kifayah",
          "Mubah",
          "Sunnah"
        ],
        "key": "D"
      },
      {
        "no": 10,
        "text": "Qurban merupakan bentuk mendekatkan diri kepada Allah dengan cara menyembelih binatang ternak yang waktunya telah ditentukan, yaitu....",
        "options": [
          "Tanggal 8, 9, 10 dan 11 Dzulhijjah",
          "Tanggal lO, 11,12 dan 13 Dzulhijjah",
          "Tanggal 9, 10, 11 dan 12 Dzulhijjah",
          "Tanggal 11, 12, 13 dan 14 Dzulhijjah"
        ],
        "key": "B"
      },
      {
        "no": 11,
        "text": "Ayat Al-Qur'an yang menjadi dasar hukum perintah berkurban adalah....",
        "options": [
          "فَصَلِّ لِرَبِّكَ وَانْحَرْۗ",
          "وَيَمْنَعُونَ ٱلْمَاعُونَ",
          "اِنَّآ اَعْطَيْنٰكَ الْكَوْثَرَۗ",
          "وَاَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبٰواۗ"
        ],
        "key": "A"
      },
      {
        "no": 12,
        "text": "Perbedaan kurban dan akikah yang tepat adalah....",
        "options": [
          "Qurban: Dagingnya diberikan setelah dimasak terlebih dahulu | Akikah: Dagingnya sebaiknya diberikan sebelum dimasak",
          "Qurban: Disyariatkan untuk dilaksanakan setiap tahun | Akikah: Disyariatkan satu kali seumur hidup",
          "Qurban: Hanya binatang ternak seperti kambing atau domba | Akikah: Binatang ternak seperti sapi, unta, kambing dan domba",
          "Qurban: Hukum melaksanakannya wajib bagi setiap muslim | Akikah: Hukum melaksanakannya sunnah bagi setiap muslim"
        ],
        "key": "B"
      },
      {
        "no": 13,
        "text": "Perhatikan pernyataan berikut.\n1) Dagingnya dibagikan dalam keadaan sudah masak3) Dagingnya tidak diperjual belikan\n2) Dagingnya hanya diberikan kepada fakir miskin4) Diberikan kepada saudara, keluarga dan tetangga\nBerdasarkan pernyataan tersebut, ketentuan pembagian daging akikah yang tepat terdapat pada nomor....",
        "options": [
          "1), 2) dan 3)",
          "1), 2) dan 4)",
          "1), 3) dan 4)",
          "2), 3) dan 4)"
        ],
        "key": "C"
      },
      {
        "no": 14,
        "text": "Do’a  بِسْمِ اللهِ وَاللهُ أَكْبَرُاللهم مِنْكَ وَلَكَ اللهم تَقَبَّلْ مِنِّي هَذِهِ عَقِيْقَةُ  adalah do’a....",
        "options": [
          "Penyembelihan qurban",
          "Penyembelihan akikah",
          "Penyembelihan hewan",
          "Penyembelihan binatang ternak"
        ],
        "key": "B"
      },
      {
        "no": 15,
        "text": "Arti dari ayat al-qur'an tersebut وَاَحَلَّ اللّٰهُ الْبَيْعَ وَحَرَّمَ الرِّبٰواۗ...",
        "options": [
          "Dan Allah telah menghalalkan jual beli dan mengharamkan riba",
          "Dan Allah telah menghalalkan pinjam meminjam dan mengharamkan riba",
          "Padahal Allah telah menghalalkan utang piutang dan mengharamkan riba",
          "Ingatlah Allah telah menghalalkan jual beli dan janganlah mendekati riba"
        ],
        "key": "A"
      },
      {
        "no": 16,
        "text": "Cermatilah pernyataan berikut\n1) Ada penjual dan pembeli4)  Suka sama suka\n2) Ada barang yang diperjual belikan5)  Ada ijab qabul\n3) Ada alat tukar\nRukun jual beli ditunjukkan pada nomor....",
        "options": [
          "1),  2), 3) dan 5)",
          "2),  3), 4) dan 5)",
          "1),  3), 4) dan 5)",
          "1), 2),  4), dan 5)"
        ],
        "key": "A"
      },
      {
        "no": 17,
        "text": "Suci, bermanfaat, milik sendiri, jelas dan diketahu serta barang dapat langsung diserahkan. Merupakan syarat....",
        "options": [
          "Sah barang yang diperjual belikan",
          "Sah penjual dan pembeli",
          "Sah tukar menukar barang",
          "Sah ijab dan qabul"
        ],
        "key": "A"
      },
      {
        "no": 18,
        "text": "Contoh jual beli yang sah tetapi dilarang oleh agama adalah....",
        "options": [
          "Jual beli di pasar, jual beli dengan menghadang di jalan sebelum sampai ke pasar, jual beli barang haram",
          "Jual beli di halaman masjid, jual beli dengan niat menimbun, jual beli anak binatang dalam kandungan induknya",
          "Jual beli ketika khutbah/shalat Jum'at, jual beli menimbun barang, jual beli masih dalam tawaran orang lain, jual beli menipu dan subrah",
          "Jual beli ketika berlangsung shalat berjamaah, jual beli dengan cara mengecoh, dan jual beli barang yang belum jelas"
        ],
        "key": "C"
      },
      {
        "no": 19,
        "text": "Salah satu jual beli yang terlarang dalam ketentuan syar'i (hukum Islam) adalah jual beli dengan sistem ijon, yaitu....",
        "options": [
          "Jual belinya dilakukan dengan cara mengurangi ukuran atau timbangan",
          "Jual belinya tidak dilakukan berdasarkan atas dasar suka sama suka",
          "Jual beli buah-buahan yang masih ada di atas pohon yang kualitasnya belum diketahui pastti.",
          "Rukun dan syarat jual beli semuanya tidak terpenuhi dalam jual beli tersebut"
        ],
        "key": "C"
      },
      {
        "no": 20,
        "text": "Nadiya dan teman-temannya pergi berekreasi ke Bali. Sebelum pulang, dia ingin membeli baju di sebuah toko. Setelah memilih-milih baju yang cocok ternyata baju pilihannya sedang ditawar orang lain. Karena sudah merasa cocok, ia langsung membayar sesuai harga yang ditawarkan penjualnnya, dan tidak menghiraukan pembeli lain yang sedang menawarnya. Praktik jual beli dalam ilustrasi ini termasuk....",
        "options": [
          "Jual beli garar",
          "Jual beli yang terlarang",
          "Jual beli yang sah tapi terlarang",
          "Jual beli dengan sistem ijon"
        ],
        "key": "C"
      },
      {
        "no": 21,
        "text": "Penjual dan pembeli boleh memilih antara meneruskan atau menangguhkan jual beli selama keduanya masih dalam satu tempat jual beli. Hal ini adalah pengertian dari...",
        "options": [
          "Jual beli",
          "Khiyar ‘aib",
          "Khiyar majlis",
          "Khiyar syarat"
        ],
        "key": "C"
      },
      {
        "no": 22,
        "text": "Syakirah hendak membeli sebuah televisi di sebuah toko elektronik. Sebelumnya dia berkata kepada penjualnya, “Saya mau beli TV ini dengan syarat mencoba terlebih dahulu, apabila cocok maka jual beli saya lanjutkan, tetapi apabila tidak cocok maka jual beli saya batalkan, dan TV saya kembalikan dalam keadaan seperti semula.” Ilustrasi tersebut termasuk jenis khiyar....",
        "options": [
          "Majlis",
          "Syarat",
          "‘Aib",
          "Ru’yah"
        ],
        "key": "B"
      },
      {
        "no": 23,
        "text": "Khiyar adalah hak memilih untuk meneruskan atau membatalkan jual beli. Ada hikmah yang terkandung dalam khiyar tersebut, yaitu....",
        "options": [
          "Mendaptkan barang pilihan",
          "Mendapatkan barang yang mewah",
          "Mendapatkan keuntungan yang besar",
          "Menghindari penyesalan dari pihak penjual dan pembeli"
        ],
        "key": "D"
      },
      {
        "no": 24,
        "text": "Bu Mira memberikan pinjaman tanpa bunga kepada temannya sebesar Rp 10.000.000 untuk usaha membuat kue dengan perjanjian bagi hasil yang telah disepakati. Transaksi seperti itu disebut....",
        "options": [
          "Qiradh",
          "Jual beli",
          "Gadai",
          "Hiwalah"
        ],
        "key": "A"
      },
      {
        "no": 25,
        "text": "Qiradh merupakan bentuk muamalah yang mengandung unsur tolong-menolong, diperlukan syarat-syarat tertentu dalam qiradh. Di bawah ini yang merupakan syarat qiradh adalah....",
        "options": [
          "Pemilik dan pengelola modal harus seagama serta pemilik modal ikut melakukan usaha",
          "Pemilik dan pengelola modal sudah balig, berakal, dan merdeka",
          "Pemilik dan pengelola modal beragama Islam serta modal tidak perlu diketahui jenisnya",
          "Pemilik dan pengelola modal semuanya terlibat dalam usaha serta keuntungan dibagi rata"
        ],
        "key": "B"
      },
      {
        "no": 26,
        "text": "Berikut yang merupakan contoh qirad modern, yaitu seseorang....",
        "options": [
          "Diberi modal orang lain untuk menjalankan usaha",
          "Meminjam modal kepada bank keliling",
          "Mendapatkan pinjaman modal dari bank syariah untuk menjalankan usaha",
          "Orang mendapatkan pinjaman modal dari renternir untuk menjalankan usaha"
        ],
        "key": "C"
      },
      {
        "no": 27,
        "text": "Najma meminjam uang keapada Frea. Ketika Najma melunasinya, ia diminta menambahkan pokok pinjamannya oleh Frea. Tindakan Frea termasuk perbuatan....",
        "options": [
          "Hiwalah",
          "Riba",
          "Ta’awun",
          "Qirad"
        ],
        "key": "B"
      },
      {
        "no": 28,
        "text": "Jesika meminjam uang kepada Nia sebesar Rp. 10.000.000. pada waktu yang telah ditentukan, ia (Jesika) belum dapat melunasinya. Kemudian Nia (orang yang memberikan utang) mengatakan, “Kamu harus bayar utangnya sekarang, kalua lewat waktu yang telah ditentukan maka kamu harus membayarnya sebear Rp. 10.500.000.” Ilustrasi tersebut termasuk jenis riba....",
        "options": [
          "Fadl",
          "Nasiah",
          "Qard",
          "Yad"
        ],
        "key": "B"
      },
      {
        "no": 29,
        "text": "Gibran mengutang uang kepada temannya Rp 275.000 untuk suatu keperluan keluarganya. Temannyapun memberikan utang sejumlah uang yang diperlukam Gibran dengan perjanjian ketika mengembalikan harus Rp.300.000. Praktik utang piutang tersebut termasuk jenis riba....",
        "options": [
          "Fadl",
          "Qardh",
          "Yad",
          "Nashi'ah"
        ],
        "key": "B"
      },
      {
        "no": 30,
        "text": "Arti dari ayat al-Qur'an وَتَعَاوَنُوا۟ عَلَى ٱلْبِرِّ وَٱلتَّقْوَىٰ ۖ وَلَا تَعَاوَنُوا۟ عَلَى ٱلْإِثْمِ وَٱلْعُدْوَٰنِ yaitu....",
        "options": [
          "Hai orang-orang yang beriman, janganlah kamu melanggar syi'ar-syi'ar Allah, dan jangan melanggar kehormatan bulan-bulan haram.",
          "Dan janganlah sekali-kali kebencian (mu) kepada sesuatu kaum kamu mendorongmu berbuat aniaya (kepada mereka).",
          "Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan pelanggaran.",
          "Dan bertakwalah kamu kepada Allah, sesungguhnya Allah amat berat siksa-Nya."
        ],
        "key": "C"
      }
    ]
  },
  {
    "code": "INF-VII",
    "title": "INFORMATIKA KELAS VII — ASAS MTs Assibyan",
    "subject": "Informatika",
    "classLevel": "VII",
    "schedule": "Rabu, 25 November 2026, Jam Ke-3 (11.30 – 13.00 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 3,
    "questions": [
      {
        "no": 1,
        "text": "Pernyataan berikut yang tidak sesuai dengan konsep berfikir komputasional adalah ....",
        "options": [
          "Memberikan digital training pada komputer agar bekerja lebih cepat.",
          "Membagi masalah yang komplek agar menjadi lebih sederhana.",
          "Memilih informasi yang tidak penting dan yang penting",
          "Menyusun penyelesaian dengan langkah – langkah yang logis dan sesuai"
        ],
        "key": "A"
      },
      {
        "no": 2,
        "text": "Proses berikut yang merupakan proses dekomposisi adalah ...",
        "options": [
          "Membagi perangkat komputer ke dalam beberapa komponen",
          "Melihat kesamaan urutan angka – angka",
          "Menguraikan sifat – sifat bola",
          "Membuat langkah – langkah untuk menyelesaikan persamaan elastisitas pantulan bola"
        ],
        "key": "A"
      },
      {
        "no": 3,
        "text": "Fokus pada Informasi yang penting merupakan contoh dari proses ...",
        "options": [
          "Abstraksi",
          "Algoritma",
          "Dekomposisi",
          "Pengenalan pola"
        ],
        "key": "A"
      },
      {
        "no": 4,
        "text": "Teknisi melakukan proses scanning kondisi  mobil konsumen. Data hasil scanning tersebut di bandingkan dengan data base model sejenis yang dimiliki oleh teknisi. Proses yang dilakukan oleh teknisi tersebut adalah...",
        "options": [
          "Dekomposisi",
          "Abstraksi",
          "Pengenalan Pola",
          "Algoritma"
        ],
        "key": "C"
      },
      {
        "no": 5,
        "text": "Proses berikut yang merupakan dekomposisi adalah ...",
        "options": [
          "Seorang teknisi memeriksa kondisi mesin mobil dan komponen utamanya",
          "Teknisi mobil melaporkan permaslah dan solusinya kepada pemilik mobil",
          "Seorang teknisi mobil memberikan penjelasan mengenai kerusakan mobil konsumennya",
          "Seorang teknisi mobil membuat technical report hasil pengecekan mobil konsumen"
        ],
        "key": "A"
      },
      {
        "no": 6,
        "text": "Pola dapat muncul dalam bentuk ....",
        "options": [
          "Perilaku",
          "Angka",
          "Gejala alam",
          "Perilaku, angka, dan gejala alam"
        ],
        "key": "D"
      },
      {
        "no": 7,
        "text": "Ketika menggambar flowchart, persegi panjang digunakan untuk mengambarkan ...",
        "options": [
          "Input dari pengguna",
          "Output kepada pengguna",
          "Pengambilan keputusan",
          "Proses dalam program"
        ],
        "key": "D"
      },
      {
        "no": 8,
        "text": "Pernyataan berikut yang bukan merupakan etika ber-email adalah ...",
        "options": [
          "Sering mengirimkan file – file promosi produk tertentu yang bersifat spam",
          "Mengguanakan tata cara penulisan yang benar",
          "Sebelum masuk ke inti surat memberikan salam pembukaan yang santun",
          "Memilih kalimat – kalimat yang efektif dan santun"
        ],
        "key": "A"
      },
      {
        "no": 9,
        "text": "File berikut yang secara otomatis akan di – uploud oleh Gmail ke Google Drive sebelum dikirim adalah ...",
        "options": [
          "File, docx, berukuran 2 MB",
          "File, indd, berukuran 10 MB",
          "File, mp4, berukuran 20 MB",
          "File, rar, berukuran 25 MB"
        ],
        "key": "D"
      },
      {
        "no": 10,
        "text": "Tipe file yang pasti memicu respon antivirus secara spontan ketika desertakan ke email adalah ...",
        "options": [
          "zip",
          "rar",
          "docx",
          "exe"
        ],
        "key": "D"
      },
      {
        "no": 11,
        "text": "Cloud storge gratis One Drive menyediakan ruang penyimpanan sebesar ...",
        "options": [
          "25 GB",
          "15 GB",
          "10 GB",
          "5 GB"
        ],
        "key": "D"
      },
      {
        "no": 12,
        "text": "Berikut yang bukan merupakan mesin pencarian ...",
        "options": [
          "Google",
          "Bing",
          "Yahoo",
          "Friendster"
        ],
        "key": "D"
      },
      {
        "no": 13,
        "text": "Format file gambar yang tidak dapat diuploud search engine untuk melakukan pencarian dengan gambar adalah ....",
        "options": [
          "jpg",
          "png",
          "tif",
          "psd"
        ],
        "key": "D"
      },
      {
        "no": 14,
        "text": "Ketika melakukan pencarian dengan kata kunci “Cara membuat robot Line Follower dengan Arduino” google juga akan menampilkan “langkah – langkah merakit robot Line Follower”. Dukungan teknolog Google yang dapat melakukan hal tersebut adalah ....",
        "options": [
          "Freshness",
          "Mochine learning",
          "Computer vision",
          "NL"
        ],
        "key": "B"
      },
      {
        "no": 15,
        "text": "Semakin banyak kata kunci yang di gunakan dalam suatu pencarian, maka hasil pencarian akan ...",
        "options": [
          "Semakin banyak",
          "Semakin spesifik",
          "ditampilkan semakin lambat",
          "ditampilkan cepat"
        ],
        "key": "B"
      },
      {
        "no": 16,
        "text": "Menggunakan aplikasi berbasis cloud akan lebih menarik karena ...",
        "options": [
          "Lebih aman",
          "Fitur aplikasi lebih banyak",
          "Dapat diakses menggunakan browser",
          "Dapat digunakan untuk membuka file di internet tanpa di download terlebeih dahulu"
        ],
        "key": "D"
      },
      {
        "no": 17,
        "text": "Aplikasi berikut yang menyimpan sebagai memori file web yang telah dibuka ke cache memory adalah ...",
        "options": [
          "Outlook",
          "Chrome",
          "Firefox",
          "Opera"
        ],
        "key": "B"
      },
      {
        "no": 18,
        "text": "Microsoft Word, Micrsoft Excel, Microsoft Power Point merupakan contoh  dari ....",
        "options": [
          "Ram",
          "Software",
          "Hardware",
          "Hardisk"
        ],
        "key": "B"
      },
      {
        "no": 19,
        "text": "Dalam sistem komputer, RAM merupakan salah satu komponen penting dalam menjalankan program. Berikut yang merupakan fungsi utama RAM adalah ...",
        "options": [
          "Menyimpan program dan data",
          "Mengantisipasi bahaya virus di dalam komputer",
          "Menentukan seluruh kinerja sistem komputer",
          "Komponen pelengkap CPU pada komputer"
        ],
        "key": "A"
      },
      {
        "no": 20,
        "text": "Fungsi perangkat input komputer adalah ...",
        "options": [
          "Memasukan perintah dan data yang akan diproses oleh sistem komputer",
          "Menyimpan seluruh data komputer",
          "Menampilkan dan menyampaikan informasi kepada pengggunanya",
          "Mengidentifikasi file yang terdeteksi virus"
        ],
        "key": "A"
      },
      {
        "no": 21,
        "text": "Perangkat input yang memilki pointer dalam bentuk tanda panah adalah ...",
        "options": [
          "Keyboard",
          "Headset",
          "Mouse",
          "HDD"
        ],
        "key": "C"
      },
      {
        "no": 22,
        "text": "Perangkat lunak aplikasi di bawah ini yang tidak umum digunakan adalah ...",
        "options": [
          "Perangkat lunak multimedia",
          "Perangkat lunak database",
          "Pengolah angka",
          "Pengolah virus"
        ],
        "key": "D"
      },
      {
        "no": 23,
        "text": "Perangkat lunak yang sering di gunakan untuk membuat presentasi adalah ...",
        "options": [
          "Video Pad",
          "Microsoft SOL",
          "Open Office org",
          "Microsoft Power point"
        ],
        "key": "D"
      },
      {
        "no": 24,
        "text": "Fungsi utama dari perangkat lunak Microsoft Word adalah ...",
        "options": [
          "Pengolah angka",
          "Pengolah kata",
          "Perangkat lunak multimedia",
          "Pengolah database"
        ],
        "key": "B"
      },
      {
        "no": 25,
        "text": "Perusahaan farmasi ingin menghubungkan semua penjualannya di seluruh dunia dalam satu jaringan. Agar koneksinya aman dari gangguan pihak luar, jaringan yang baik digunakan adalah ...",
        "options": [
          "WAN",
          "MAN",
          "Intranet",
          "Internet"
        ],
        "key": "C"
      },
      {
        "no": 26,
        "text": "Nirmala akan membuka restoran yanh akan di lengkapi dengan layanan WiFi gratis kepada  pengunjungnya. Jaringan berikut yang sesuai untuk Nirmala adalah jaringan...",
        "options": [
          "Modem bluetooth",
          "LAN menggunakan kabel UTP",
          "LAN menggunakan serat optik",
          "WiFi dilengkapi password untuk koneksi"
        ],
        "key": "D"
      },
      {
        "no": 27,
        "text": "Salah satu dampak posotif dari kemajuan  tekhnologi dan internet adalah ...",
        "options": [
          "Bebas bermain game sepuasnya",
          "Menyontek jawaban ulang dari google",
          "Mudahnya komunikasi antar daerah",
          "Menghilangkan budaya asli leluhur"
        ],
        "key": "C"
      },
      {
        "no": 28,
        "text": "Sistem jaringan yang saling terinterkoneksi, yang menghubungkan komputer diseluruh dunia melalui Protocol PCP/IP adalah .....",
        "options": [
          "Data base",
          "Internet",
          "WiFi Access",
          "Intranet"
        ],
        "key": "B"
      },
      {
        "no": 29,
        "text": "Saat kita berada di kota besar, jaringan 4G begitu mudah untuk akses. Namun saat berpindah ke plosok daerah, jaringan 4G sulit sekali untuk diakses. Hal tersebut bisa terjadi..",
        "options": [
          "Pembangunan yang tidak merata",
          "Kondisi dan letak geografis daerah berpengaruh pada jaringan yang masuk",
          "Keterbatasan teknologi TIK di daerah",
          "Pengguna smartphone di daerah masih sedikit"
        ],
        "key": "B"
      },
      {
        "no": 30,
        "text": "Proses menyalin suatu file dari internet berupa gambar, vidio, atau dokumen ke dalam perangkat yang kita gunakan disebut...",
        "options": [
          "Copy paste",
          "Download",
          "rename",
          "shortcut"
        ],
        "key": "B"
      }
    ]
  },
  {
    "code": "INF-VIII",
    "title": "INFORMATIKA KELAS VIII — ASAS MTs Assibyan",
    "subject": "Informatika",
    "classLevel": "VIII",
    "schedule": "Rabu, 25 November 2026, Jam Ke-3 (11.30 – 13.00 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 3,
    "questions": [
      {
        "no": 1,
        "text": "Literasi digital adalah kemampuan untuk….",
        "options": [
          "Menggunakan komputer tanpa internet",
          "Memahami, menggunakan, dan membuat informasi melalui teknologi digital",
          "Mengoperasikan mesin fotokopi",
          "Menggambar hanya dengan komputer"
        ],
        "key": "B"
      },
      {
        "no": 2,
        "text": "Contoh etika digital yang baik adalah….",
        "options": [
          "Menyebarkan hoaks",
          "Menggunakan kata kasar saat berkomentar",
          "Menghargai privasi orang lain di dunia maya",
          "Mem-bully teman di media sosial"
        ],
        "key": "C"
      },
      {
        "no": 3,
        "text": "Aktivitas yang termasuk jejak digital adalah….",
        "options": [
          "Bermain bola",
          "Membersihkan rumah",
          "Komentar di media sosial",
          "Jalan-jalan"
        ],
        "key": "C"
      },
      {
        "no": 4,
        "text": "Yang dimaksud cyberbullying adalah….",
        "options": [
          "Menghapus data orang lain",
          "Mengganggu orang lain secara digital",
          "Meminjam laptop teman",
          "Belajar melalui internet"
        ],
        "key": "B"
      },
      {
        "no": 5,
        "text": "Password yang kuat ditandai dengan….",
        "options": [
          "Menggunakan tanggal lahir",
          "Menggunakan nama sendiri",
          "Kombinasi huruf, angka, dan simbol",
          "Satu kata saja"
        ],
        "key": "C"
      },
      {
        "no": 6,
        "text": "Perangkat yang termasuk perangkat keras adalah….",
        "options": [
          "Microsoft Word",
          "Mouse",
          "Google Drive",
          "Aplikasi kamera"
        ],
        "key": "B"
      },
      {
        "no": 7,
        "text": "Bagian otak komputer yang memproses instruksi adalah….",
        "options": [
          "RAM",
          "CPU",
          "Harddisk",
          "Monitor"
        ],
        "key": "B"
      },
      {
        "no": 8,
        "text": "Contoh perangkat input adalah….",
        "options": [
          "Proyektor",
          "Keyboard",
          "Printer",
          "Speaker"
        ],
        "key": "B"
      },
      {
        "no": 9,
        "text": "Fungsi RAM dalam komputer adalah….",
        "options": [
          "Menyimpan data permanen",
          "Menampilkan gambar",
          "Menyimpan data sementara ketika komputer bekerja",
          "Mengeluarkan suara"
        ],
        "key": "C"
      },
      {
        "no": 10,
        "text": "Sistem operasi berfungsi untuk….",
        "options": [
          "Menggambar",
          "Menghubungkan pengguna dengan perangkat keras komputer",
          "Menyimpan data di cloud",
          "Menghasilkan suara"
        ],
        "key": "B"
      },
      {
        "no": 11,
        "text": "WiFi adalah teknologi untuk….",
        "options": [
          "Mengedit video",
          "Menghubungkan perangkat tanpa kabel",
          "Mengetik dokumen",
          "Menghapus virus"
        ],
        "key": "B"
      },
      {
        "no": 12,
        "text": "Perangkat yang menghubungkan komputer ke internet disebut….",
        "options": [
          "Modem",
          "Printer",
          "Scanner",
          "Flashdisk"
        ],
        "key": "A"
      },
      {
        "no": 13,
        "text": "Kepanjangan dari URL adalah….",
        "options": [
          "User Relation Link",
          "Universal Rate Link",
          "Uniform Resource Locator",
          "United Resource Link"
        ],
        "key": "C"
      },
      {
        "no": 14,
        "text": "Browser digunakan untuk….",
        "options": [
          "Mengelola file",
          "Menjelajahi internet",
          "Merekam suara",
          "Mengedit gambar"
        ],
        "key": "B"
      },
      {
        "no": 15,
        "text": "Contoh browser adalah….",
        "options": [
          "Telegram",
          "Google Chrome",
          "Facebook",
          "Canva"
        ],
        "key": "B"
      },
      {
        "no": 16,
        "text": "Algoritma adalah….",
        "options": [
          "Bahasa computer",
          "Urutan langkah untuk menyelesaikan masalah",
          "Kode rahasia",
          "Virus komputer"
        ],
        "key": "B"
      },
      {
        "no": 17,
        "text": "Flowchart digunakan untuk….",
        "options": [
          "Mengetik paragraph",
          "Menggambar dekorasi",
          "Menggambarkan alur suatu algoritma",
          "Membuat presentasi"
        ],
        "key": "C"
      },
      {
        "no": 18,
        "text": "Bentuk simbol flowchart untuk keputusan adalah….",
        "options": [
          "Persegi Panjang",
          "Lingkaran",
          "Belah ketupat",
          "Segitiga"
        ],
        "key": "C"
      },
      {
        "no": 19,
        "text": "Bahasa pemrograman yang cocok untuk pemula adalah….",
        "options": [
          "Python",
          "Assembly",
          "Machine Language",
          "Binary"
        ],
        "key": "A"
      },
      {
        "no": 20,
        "text": "Perintah untuk mencetak teks pada Python adalah….",
        "options": [
          "echo()",
          "print()",
          "show()",
          "text()"
        ],
        "key": "B"
      },
      {
        "no": 21,
        "text": "Data adalah….",
        "options": [
          "Kesimpulan",
          "Fakta mentah yang belum diolah",
          "Hasil akhir analisis",
          "Informasi lengkap"
        ],
        "key": "B"
      },
      {
        "no": 22,
        "text": "Informasi adalah….",
        "options": [
          "Data yang sudah diolah",
          "File yang disimpan",
          "Dokumen rahasia",
          "Angka acak"
        ],
        "key": "A"
      },
      {
        "no": 23,
        "text": "Contoh data kuantitatif adalah….",
        "options": [
          "Warna baju",
          "Jumlah siswa",
          "Nama hewan",
          "Jenis tanaman"
        ],
        "key": "B"
      },
      {
        "no": 24,
        "text": "Grafik digunakan untuk….",
        "options": [
          "Menyembunyikan data",
          "Menyajikan data agar mudah dipahami",
          "Menghapus data",
          "Mengacak data"
        ],
        "key": "B"
      },
      {
        "no": 25,
        "text": "Excel digunakan untuk mengolah….",
        "options": [
          "Teks",
          "Video",
          "Data angka dan tabel",
          "Musik"
        ],
        "key": "C"
      },
      {
        "no": 26,
        "text": "Virus komputer adalah….",
        "options": [
          "Jaringan internet",
          "Program yang merusak sistem computer",
          "Aplikasi komunikasi",
          "Alat input"
        ],
        "key": "B"
      },
      {
        "no": 27,
        "text": "Anti-virus berfungsi untuk….",
        "options": [
          "Menggambar wallpaper",
          "Melindungi komputer dari virus",
          "Menghubungkan komputer ke internet",
          "Menghapus semua file"
        ],
        "key": "B"
      },
      {
        "no": 28,
        "text": "Phishing adalah usaha untuk….",
        "options": [
          "Mendaur ulang sampah digital",
          "Mengambil data pribadi secara illegal",
          "Memperbaiki komputer",
          "Mempercepat internet"
        ],
        "key": "B"
      },
      {
        "no": 29,
        "text": "Salah satu cara menjaga keamanan akun adalah….",
        "options": [
          "Memberikan password pada teman",
          "Menggunakan password yang sama untuk semua akun",
          "Mengaktifkan verifikasi dua langkah",
          "Login dari sembarang perangkat"
        ],
        "key": "C"
      },
      {
        "no": 30,
        "text": "File backup adalah….",
        "options": [
          "File sampah",
          "Cadangan data untuk keamanan",
          "File rusak",
          "File sementara"
        ],
        "key": "B"
      }
    ]
  },
  {
    "code": "INF-IX",
    "title": "INFORMATIKA KELAS IX — ASAS MTs Assibyan",
    "subject": "Informatika",
    "classLevel": "IX",
    "schedule": "Rabu, 25 November 2026, Jam Ke-3 (11.30 – 13.00 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 3,
    "questions": [
      {
        "no": 1,
        "text": "Jaringan komputer adalah….",
        "options": [
          "Perangkat yang digunakan untuk mengetik",
          "Kumpulan komputer yang saling terhubung untuk berbagi data",
          "Alat untuk mengedit video",
          "Sistem penyimpanan data"
        ],
        "key": "B"
      },
      {
        "no": 2,
        "text": "Jaringan yang cakupannya paling kecil adalah….",
        "options": [
          "WAN",
          "MAN",
          "LAN",
          "Internet"
        ],
        "key": "C"
      },
      {
        "no": 3,
        "text": "Alat yang berfungsi membagi koneksi internet ke beberapa perangkat disebut….",
        "options": [
          "Printer",
          "Router",
          "Flashdisk",
          "Proyektor"
        ],
        "key": "B"
      },
      {
        "no": 4,
        "text": "IP Address digunakan untuk….",
        "options": [
          "Menghapus data",
          "Mengidentifikasi perangkat dalam jaringan",
          "Menambah kecepatan komputer",
          "Menampilkan gambar"
        ],
        "key": "B"
      },
      {
        "no": 5,
        "text": "HTTP digunakan untuk….",
        "options": [
          "Menyimpan video",
          "Mengirim email",
          "Mengakses halaman web",
          "Memperbaiki jaringan"
        ],
        "key": "C"
      },
      {
        "no": 6,
        "text": "Sistem operasi adalah….",
        "options": [
          "Bahasa pemrograman",
          "Penghubung antara perangkat keras dan pengguna",
          "Perangkat input",
          "Penyimpanan data"
        ],
        "key": "B"
      },
      {
        "no": 7,
        "text": "Contoh sistem operasi adalah….",
        "options": [
          "Google",
          "Windows",
          "Facebook",
          "Word"
        ],
        "key": "B"
      },
      {
        "no": 8,
        "text": "File berekstensi .exe biasanya digunakan untuk….",
        "options": [
          "File video",
          "File instalasi aplikasi",
          "File musik",
          "File gambar"
        ],
        "key": "B"
      },
      {
        "no": 9,
        "text": "Perangkat lunak yang digunakan untuk mengolah angka adalah….",
        "options": [
          "PowerPoint",
          "Excel",
          "Word",
          "Paint"
        ],
        "key": "B"
      },
      {
        "no": 10,
        "text": "Perangkat yang berfungsi sebagai tempat penyimpanan permanen adalah….",
        "options": [
          "RAM",
          "Monitor",
          "Harddisk",
          "Mouse"
        ],
        "key": "C"
      },
      {
        "no": 11,
        "text": "Basis data adalah….",
        "options": [
          "Kumpulan informasi acak",
          "Kumpulan data yang terorganisir",
          "Tempat menyimpan foto",
          "Data yang sudah dibagikan"
        ],
        "key": "B"
      },
      {
        "no": 12,
        "text": "SQL digunakan untuk….",
        "options": [
          "Mengedit gambar",
          "Mengelola basis data",
          "Menghubungkan internet",
          "Menghapus file"
        ],
        "key": "B"
      },
      {
        "no": 13,
        "text": "Contoh data teks adalah….",
        "options": [
          "Suara burung",
          "Gambar pemandangan",
          "Nama siswa",
          "Video pembelajaran"
        ],
        "key": "C"
      },
      {
        "no": 14,
        "text": "Tujuan normalisasi data adalah….",
        "options": [
          "Memperbesar ukuran data",
          "Menghilangkan data",
          "Mengurangi redundansi dan meningkatkan efisiensi",
          "Menyulitkan proses pencarian"
        ],
        "key": "C"
      },
      {
        "no": 15,
        "text": "Fungsi utama tabel pada basis data adalah….",
        "options": [
          "Menampilkan wallpaper",
          "Menyimpan data dalam baris dan kolom",
          "Menghapus data",
          "Mengirim data ke internet"
        ],
        "key": "B"
      },
      {
        "no": 16,
        "text": "Malware adalah….",
        "options": [
          "Layanan email",
          "Program berbahaya",
          "Aplikasi editing",
          "Aplikasi musik"
        ],
        "key": "B"
      },
      {
        "no": 17,
        "text": "Contoh malware adalah….",
        "options": [
          "Antivirus",
          "Browser",
          "Worm",
          "Text editor"
        ],
        "key": "C"
      },
      {
        "no": 18,
        "text": "Phishing adalah kegiatan….",
        "options": [
          "Mengunduh aplikasi legal",
          "Mencuri data pribadi dengan berpura-pura menjadi pihak terpercaya",
          "Memperbaiki komputer",
          "Mengirim pesan biasa"
        ],
        "key": "B"
      },
      {
        "no": 19,
        "text": "Cara aman menjaga data pribadi adalah….",
        "options": [
          "Membagikan password ke teman dekat",
          "Menggunakan password sederhana",
          "Mengaktifkan verifikasi dua langkah",
          "Login dari perangkat publik"
        ],
        "key": "C"
      },
      {
        "no": 20,
        "text": "Tujuan firewall adalah….",
        "options": [
          "Mempercepat internet",
          "Menyimpan data",
          "Mengontrol lalu lintas jaringan",
          "Menampilkan gambar"
        ],
        "key": "C"
      },
      {
        "no": 21,
        "text": "Algoritma adalah….",
        "options": [
          "Program computer",
          "Urutan langkah untuk menyelesaikan masalah",
          "Gambar dekorasi",
          "Ikon aplikasi"
        ],
        "key": "B"
      },
      {
        "no": 22,
        "text": "Flowchart digunakan untuk….",
        "options": [
          "Mengedit video",
          "Menggambar pola",
          "Menggambarkan alur algoritma",
          "Mengelola jaringan"
        ],
        "key": "C"
      },
      {
        "no": 23,
        "text": "Simbol flowchart untuk proses adalah….",
        "options": [
          "Belah ketupat",
          "Lingkaran",
          "Persegi panjang",
          "Segitiga"
        ],
        "key": "C"
      },
      {
        "no": 24,
        "text": "Bahasa pemrograman tingkat tinggi berarti….",
        "options": [
          "Bahasa yang hanya dimengerti mesin",
          "Bahasa yang mirip bahasa manusia dan mudah dipahami",
          "Bahasa yang hanya digunakan robot",
          "Bahasa yang tidak bisa dipelajari pemula"
        ],
        "key": "B"
      },
      {
        "no": 25,
        "text": "Contoh bahasa pemrograman tingkat tinggi adalah….",
        "options": [
          "Python",
          "Binary",
          "Assembly",
          "Machine code"
        ],
        "key": "A"
      },
      {
        "no": 26,
        "text": "AI adalah kemampuan mesin untuk….",
        "options": [
          "Menyimpan makanan",
          "Membersihkan computer",
          "Meniru cara berpikir manusia",
          "Mengubah bentuk komputer"
        ],
        "key": "C"
      },
      {
        "no": 27,
        "text": "Contoh penerapan AI dalam kehidupan sehari-hari adalah….",
        "options": [
          "Sapu ijuk",
          "Mobil tanpa pengemudi",
          "Buku tulis",
          "Pensil"
        ],
        "key": "B"
      },
      {
        "no": 28,
        "text": "Machine Learning adalah….",
        "options": [
          "Mesin pembuat makanan",
          "Cabang AI yang membuat komputer belajar dari data",
          "Aplikasi chatting",
          "Sistem untuk menggambar otomatis"
        ],
        "key": "B"
      },
      {
        "no": 29,
        "text": "Chatbot adalah….",
        "options": [
          "Mesin cuci otomatis",
          "Program yang dapat berinteraksi menggunakan teks atau suara",
          "File suara",
          "Rumus matematika"
        ],
        "key": "B"
      },
      {
        "no": 30,
        "text": "Data training dalam AI digunakan untuk….",
        "options": [
          "Menghapus sistem",
          "Melatih model agar mengenali pola",
          "Menghentikan proses belajar",
          "Merusak data"
        ],
        "key": "B"
      }
    ]
  }
];
