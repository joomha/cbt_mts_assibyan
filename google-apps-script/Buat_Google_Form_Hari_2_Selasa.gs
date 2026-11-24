/**
 * ============================================================================
 * GENERATOR GOOGLE FORM HARI KE-2 (SELASA, 24 NOVEMBER 2026) — MTs ASSIBYAN
 * ============================================================================
 * Jadwal Hari Ini:
 *   - Sesi 1 (07.30 - 09.30): MATEMATIKA         (Kelas VII, VIII, IX)
 *   - Sesi 2 (10.00 - 11.30): AKIDAH AKHLAK      (Kelas VII, VIII, IX)
 *   - Sesi 3 (11.30 - 13.00): BTQ / BACA TULIS QUR'AN (Kelas VII, VIII, IX)
 *
 * SUDAH DIPERBAIKI 100%:
 * - Urutan setDestination() diletakkan di PALING AKHIR setelah semua soal & poin
 *   selesai dibuat, sehingga kolom "Score" (Nilai Akhir 0-100) LANGSUNG MUNCUL
 *   otomatis di Google Spreadsheet!
 * - Gambar grafik & diagram panah Matematika VII dan VIII otomatis dimasukkan
 *   langsung ke dalam Google Form!
 * - Tersedia juga fungsi "hitungRekapNilaiHari2()" untuk menarik tabel rekap
 *   nilai rapi kapan saja.
 * ============================================================================
 */

// --- 1. PILIH SALAH SATU FUNGSI DI BAWAH INI LALU KLIK "Run" ---

function buatSesi1_Matematika_SemuaKelas() {
  buatFormBerdasarkanMapel('Matematika');
}

function buatSesi2_AkidahAkhlak_SemuaKelas() {
  buatFormBerdasarkanMapel('Akidah Akhlak');
}

function buatSesi3_BTQ_SemuaKelas() {
  buatFormBerdasarkanMapel('Baca Tulis Qur’an');
}

// --- 2. ATAU BUAT PER KELAS ---
function buatHari2_KelasVII()  { buatFormBerdasarkanKelas('VII'); }
function buatHari2_KelasVIII() { buatFormBerdasarkanKelas('VIII'); }
function buatHari2_KelasIX()   { buatFormBerdasarkanKelas('IX'); }

// --- 3. ATAU BUAT SATU FORM SPESIFIK ---
function buatSatu_Matematika_VII()   { buatFormBerdasarkanId('mtk_vii'); }
function buatSatu_Matematika_VIII()  { buatFormBerdasarkanId('mtk_viii'); }
function buatSatu_Matematika_IX()    { buatFormBerdasarkanId('mtk_ix'); }
function buatSatu_AkidahAkhlak_VII() { buatFormBerdasarkanId('aa_vii'); }
function buatSatu_AkidahAkhlak_VIII(){ buatFormBerdasarkanId('aa_viii'); }
function buatSatu_AkidahAkhlak_IX()  { buatFormBerdasarkanId('aa_ix'); }
function buatSatu_BTQ_VII()          { buatFormBerdasarkanId('btq_vii'); }
function buatSatu_BTQ_VIII()         { buatFormBerdasarkanId('btq_viii'); }
function buatSatu_BTQ_IX()           { buatFormBerdasarkanId('btq_ix'); }

// --- 4. BUAT SEMUA 9 FORM HARI KE-2 SEKALIGUS ---
function buatSemua9FormHari2Selasa() {
  prosesPembuatanForm(EXAMS_DATA);
}

// ============================================================================
// KODE INTI PEMBUAT GOOGLE FORM KUIS + OTOMATIS KOLOM SCORE (0-100)
// ============================================================================

function stripHtmlTags(str) {
  if (!str) return '';
  return String(str).replace(/<[^>]+>/g, '');
}

function getPointsForQuestion(totalQuestions, questionIndex) {
  if (totalQuestions === 25) return 4; // 25 x 4 = 100 poin
  if (totalQuestions === 30) {
    // 20 soal x 3 poin (60) + 10 soal x 4 poin (40) = 100 poin
    return questionIndex < 20 ? 3 : 4;
  }
  return Math.max(1, Math.round(100 / totalQuestions));
}

function buatFormBerdasarkanMapel(subjectName) {
  var targetExams = EXAMS_DATA.filter(function(e) {
    return e.subject === subjectName;
  });
  prosesPembuatanForm(targetExams);
}

function buatFormBerdasarkanKelas(classLevel) {
  var targetExams = EXAMS_DATA.filter(function(e) {
    return e.classLevel === classLevel;
  });
  prosesPembuatanForm(targetExams);
}

function buatFormBerdasarkanId(examId) {
  var targetExams = EXAMS_DATA.filter(function(e) {
    return e.id === examId;
  });
  prosesPembuatanForm(targetExams);
}

function prosesPembuatanForm(targetExams) {
  var sheet = null;
  var ss = null;
  try {
    ss = SpreadsheetApp.getActiveSpreadsheet();
    if (ss) {
      sheet =
        ss.getSheetByName('Daftar Link Google Form Hari 2') ||
        ss.insertSheet('Daftar Link Google Form Hari 2');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          'Waktu Dibuat',
          'Kelas',
          'Mata Pelajaran',
          'Judul Google Form',
          'Jumlah Soal',
          'Link Ujian Siswa (Bagikan ke Siswa)',
          'Link Edit Guru',
          'Form ID'
        ]);
        sheet
          .getRange(1, 1, 1, 8)
          .setFontWeight('bold')
          .setBackground('#2457D6')
          .setFontColor('#FFFFFF');
        sheet.setFrozenRows(1);
      }
    }
  } catch (e) {}

  for (var i = 0; i < targetExams.length; i++) {
    var ex = targetExams[i];
    var formTitle =
      ex.subject.toUpperCase() +
      ' KELAS ' +
      ex.classLevel +
      ' — ASAS MTs Assibyan';
    var form = FormApp.create(formTitle);

    form.setDescription(
      'MADRASAH TSANAWIYAH ASSIBYAN\n' +
        'ASESMEN SUMATIF AKHIR SEMESTER (ASAS) TAHUN PELAJARAN 2026/2027\n' +
        'Hari/Tanggal: Selasa, 24 November 2026\n' +
        'Mata Pelajaran: ' +
        ex.subject +
        ' | Kelas: ' +
        ex.classLevel +
        ' | Waktu: ' +
        ex.durationMin +
        ' Menit\n\n' +
        'Petunjuk: Isi Nama Lengkap dengan HURUF KAPITAL dan Nomor Peserta dengan benar, kemudian pilih jawaban yang paling tepat.'
    );

    // WAJIB: Aktifkan mode Kuis sejak awal
    form.setIsQuiz(true);
    form.setCollectEmail(false);
    form.setLimitOneResponsePerUser(false);
    form.setShowLinkToRespondAgain(false);
    form.setConfirmationMessage(
      'Alhamdulillah, jawaban ujian ' +
        ex.subject +
        ' (Kelas ' +
        ex.classLevel +
        ') Anda telah berhasil dikirim dan dinilai. Terima kasih.'
    );

    // Bagian 1: Identitas Peserta
    var nameItem = form.addTextItem();
    nameItem
      .setTitle('NAMA LENGKAP SISWA (HURUF KAPITAL)')
      .setHelpText('Tuliskan nama lengkap Anda dengan HURUF KAPITAL (Contoh: AHMAD FAUZI)')
      .setRequired(true);

    var noItem = form.addTextItem();
    noItem
      .setTitle('NOMOR PESERTA')
      .setHelpText('Masukkan Nomor Peserta Ujian Anda')
      .setRequired(true);

    var classItem = form.addMultipleChoiceItem();
    classItem
      .setTitle('KELAS')
      .setChoices([
        classItem.createChoice('VII (Tujuh)'),
        classItem.createChoice('VIII (Delapan)'),
        classItem.createChoice('IX (Sembilan)')
      ])
      .setRequired(true);

    // Bagian 2: Soal Pilihan Ganda
    form
      .addPageBreakItem()
      .setTitle(
        'SOAL PILIHAN GANDA — ' +
          ex.subject.toUpperCase() +
          ' KELAS ' +
          ex.classLevel
      )
      .setHelpText('Pilihlah salah satu jawaban A, B, C, atau D yang paling benar!');

    var totalQ = ex.questions.length;
    for (var qIdx = 0; qIdx < totalQ; qIdx++) {
      var q = ex.questions[qIdx];

      // Jika soal memiliki gambar grafik/diagram, sisipkan gambarnya tepat di atas soal!
      if (q.imageKey && IMAGES_BASE64[q.imageKey]) {
        try {
          var imgObj = IMAGES_BASE64[q.imageKey];
          var decoded = Utilities.base64Decode(imgObj.b64);
          var blob = Utilities.newBlob(decoded, imgObj.mime, q.imageKey + '.png');
          var imgItem = form.addImageItem();
          imgItem
            .setTitle('Gambar untuk Soal Nomor ' + q.no)
            .setImage(blob);
        } catch (imgErr) {
          Logger.log('Info gambar soal ' + q.no + ': ' + imgErr);
        }
      }

      var mc = form.addMultipleChoiceItem();
      var fullQuestionTitle = q.no + '. ';
      if (q.context) {
        fullQuestionTitle += stripHtmlTags(q.context) + '\n\n';
      }
      fullQuestionTitle += stripHtmlTags(q.text);

      var pts = getPointsForQuestion(totalQ, qIdx);

      var choices = [];
      for (var oIdx = 0; oIdx < q.options.length; oIdx++) {
        var opt = q.options[oIdx];
        var isCorrect = opt.key === q.answerKey;
        choices.push(
          mc.createChoice(opt.key + '. ' + stripHtmlTags(opt.text), isCorrect)
        );
      }

      mc.setTitle(fullQuestionTitle)
        .setRequired(true)
        .setChoices(choices)
        .setPoints(pts);
    }

    // PENTING: Hubungkan ke Spreadsheet SETELAH semua soal & poin selesai dibuat
    // agar kolom "Score" (Nilai Akhir 0-100) otomatis muncul di tab Responses!
    if (ss) {
      try {
        Utilities.sleep(800);
        form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
        Utilities.sleep(500);
      } catch (errDest) {
        Logger.log('Gagal setDestination: ' + errDest);
      }
    }

    var publishedUrl = form.getPublishedUrl();
    var editUrl = form.getEditUrl();
    var formId = form.getId();

    Logger.log('====================================');
    Logger.log('BERHASIL DIBUAT: ' + formTitle);
    Logger.log('Link Siswa : ' + publishedUrl);
    Logger.log('Link Guru  : ' + editUrl);

    if (sheet) {
      sheet.appendRow([
        new Date(),
        ex.classLevel,
        ex.subject,
        formTitle,
        totalQ,
        publishedUrl,
        editUrl,
        formId
      ]);
    }
  }
}

var IMAGES_BASE64 = {
  "MTK7_Q9": {
    "mime": "image/jpeg",
    "b64": "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"
  },
  "MTK7_Q24": {
    "mime": "image/png",
    "b64": "iVBORw0KGgoAAAANSUhEUgAAAgcAAAFgCAMAAAAYZip2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURf////f39+bv7xkZECEhIQAAAObm5tbe1s7FzggQCNbO1oyMjAgICCkpKTExMcXFvToxOkpCSkpSUjoQUoRanMWMnMVazq1aUlJazlJahIxazq1aGRlazhlahGtjY7WtrUI6QpylpVIZpZzvpYzvYxmtY3MxGRneMYwZpYwZ784ZGRkZ7xkZpRnvY0re5lLOY62Uawje5hnOY1pjWpSclFpSWoSla4SEe3Nrc8Va785aUlJa71JapYxa785aGRla7xlapa2tpcWU7+9aQnNaMRBjGRljUu8ZQu+cQpSU7+9aEO8ZEO+cEO9ac+8Zc++cc729vcXOEFKMEJTO5ozOEBmMEHN7e+/eQu/eEO/ec+9ape8Zpe+cpWuMpSmMpUqMpQiMpToQCO/epcWlOkJaKYylOsWlEIylEMXOMVKMMZTv5ozOMRmMMcXOc85ahGuM5lKMcymM5oQQUlLvEMUphMUpzq0pUlIpzlIphJzOtYzOcxmMc4QQGRnvEIwphIwpzq0pGRkpzhkphMXvEFKtEO9SzrXO5ozvEBmtEO8Zzu+MzsWEOkJaCIyEOsWEEIyEEMXOUq1ahEqM5lKMUgiM5mMQUlLOEMUIhMUIzq0IUlIIzlIIhJzOlIzOUhmMUmMQGRnOEIwIhIwIzq0IGRkIzhkIhGutpSmtpWvvpSnvpUrvpQjvpUqtpQitpWvOpSnOpUrOpQjOpYRaWs7mtRAQWsWlzoRaEBBCKSlCUpSlzu+9zs7mlBAQOsWEzmNaEBBCCAhCUpSEzsXvc2vv5lLvc86la85apWut5lKtc8XvMVKtMSmt5oQxUlLvMSnv5sUppcUp784pUlIp7+9S77Xv5ozvMRmtMe8Z7++M78XvUmvO5lLvUs6Ea61apUqt5lKtUgit5mMxUlLOMSnO5sUIpcUI784IUlII7++970IQKc7FnISEY4RSe5SEpe/mzu//Otbv7+//vdbF70IxEBAIIRkICObm9wghISkQKffm9/fm7+be7+/////39/f3/wAAAOp8SmsAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAACHVAAAh1QEEnLSdAABNq0lEQVR4Xu19a3LiPvQllmxsQjBxFkDCGmKKfKVqFuBPrGAW2bOmqd9UV/2TSpcbp+acKwEGbGODzaO7TwjIL1n36uo+JFnudQE/0m44m8xm4Wyhej18Locs6Px26qIE3TPUy3L24/Vt2H2dHGClMpv6h1tAJtXxr07+aqhe5jj4OHb7H/5WrDKnh79/gvB3AwqBYmC3/uEf/uEf/uFEqF5qU/9wG7ilroJ/3RbXw3XaZbqyiTz+icE1cR1ft7Df5Z+tuBLQAq8jBpt4W36NIkAgzu8iTfEPXYPR7xWw7XfJ3X4lSuKfUrgGVuwIuTzWcmBUgNR9duGCGKmrDUQ40FT4vwa7OoGiDkhBWL9PIVB+Aw8NF64aaxBq+vU/s8D1pgsOOzJUh9lvLULD6jkRCvQ3UjzkkEpR6D/ImVU9pYLhLHTdcLZ4GM782rrYcRbLrDEnmHtqWj1rHRVte2IrqrxrdjvZYoIGUBsofaZ8H8VqJD43jVSNZ1pPFi+LxSR0tUuFULONryaecxYjHFwOo2DvV/Ou7UP1/Mhb2I06UJCcwB12L6CXg1Kx1lGioIa/VRJ64UNt4lI/9IbNK4/t3qiATMnwHHTysbig62aXuF74bdN1ACW68J771Gt/CFT86/PHOIXjA08BQq4DJ8tqsh3cGwWNBQFVvrnGcbZCh0ZmU5eE6HY10YPHmLVr9x5BmmX+qzca95zLODCdAm4hPoHr6bVKBB+GkAPnSOMEUH34mw08Ha/gMDVSj8I5x7ak/Hc5OhaQbKojaMIANNVsAQ7bwOBdOfcvBlbZzgdeaF0k0OQEz2Mnq0EdzsgCrV3vNeDpd8sOBoBo26Nk5ulhXSnIoMaWn1qHEjPcPRwnU8r1vMl6m3EbAsHj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"
  },
  "MTK8_Q6": {
    "mime": "image/png",
    "b64": "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"
  },
  "MTK8_Q7": {
    "mime": "image/png",
    "b64": "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"
  },
  "MTK8_Q10": {
    "mime": "image/png",
    "b64": "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"
  }
};

var EXAMS_DATA = [
  {
    "id": "mtk_vii",
    "code": "ASAS-MTK-VII",
    "title": "Asesmen Sumatif Akhir Semester — Matematika Kelas VII",
    "subject": "Matematika",
    "classLevel": "VII",
    "durationMin": 120,
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
        "imageKey": "MTK7_Q9",
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
        "imageKey": "MTK7_Q24",
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
    "id": "mtk_viii",
    "code": "ASAS-MTK-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Matematika Kelas VIII",
    "subject": "Matematika",
    "classLevel": "VIII",
    "durationMin": 120,
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
        "imageKey": "MTK8_Q6",
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
        "imageKey": "MTK8_Q7",
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
        "imageKey": "MTK8_Q10",
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
    "id": "mtk_ix",
    "code": "ASAS-MTK-IX",
    "title": "Asesmen Sumatif Akhir Semester — Matematika Kelas IX",
    "subject": "Matematika",
    "classLevel": "IX",
    "durationMin": 120,
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
    "id": "aa_vii",
    "code": "ASAS-AA-VII",
    "title": "Asesmen Sumatif Akhir Semester — Akidah Akhlak Kelas VII",
    "subject": "Akidah Akhlak",
    "classLevel": "VII",
    "durationMin": 90,
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
    ]
  },
  {
    "id": "aa_viii",
    "code": "ASAS-AA-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Akidah Akhlak Kelas VIII",
    "subject": "Akidah Akhlak",
    "classLevel": "VIII",
    "durationMin": 90,
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
    ]
  },
  {
    "id": "aa_ix",
    "code": "ASAS-AA-IX",
    "title": "Asesmen Sumatif Akhir Semester — Akidah Akhlak Kelas IX",
    "subject": "Akidah Akhlak",
    "classLevel": "IX",
    "durationMin": 90,
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
    "id": "btq_vii",
    "code": "ASAS-BTQ-VII",
    "title": "Asesmen Sumatif Akhir Semester — Baca Tulis Qur’an (BTQ) Kelas VII",
    "subject": "Baca Tulis Qur’an",
    "classLevel": "VII",
    "durationMin": 90,
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
    "id": "btq_viii",
    "code": "ASAS-BTQ-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Baca Tulis Qur’an (BTQ) Kelas VIII",
    "subject": "Baca Tulis Qur’an",
    "classLevel": "VIII",
    "durationMin": 90,
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
        "text": "مِ<u>نْ</u> لَ<u>دُنْ</u>كَ kata yang digarisbawahi adalah contoh dari bacaan…",
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
        "text": "وَلَا أَنَا عَابِدٌ مَا <u>عَبَدْتُّمْ</u> — Pada kata yang digarisbawahi disebut bacaan….",
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
        "text": "وَلَ<u>كُمْ مَّا</u> سَأَلْتُمْ — Pada ayat yang digarisbawahi adalah bacaan….",
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
        "text": "لِيُ<u>حَآجُّوْ</u>كُمْ — Pada kata yang digarisbawahi adalah mad...",
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
    "id": "btq_ix",
    "code": "ASAS-BTQ-IX",
    "title": "Asesmen Sumatif Akhir Semester — Baca Tulis Qur’an (BTQ) Kelas IX",
    "subject": "Baca Tulis Qur’an",
    "classLevel": "IX",
    "durationMin": 90,
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
  }
];
