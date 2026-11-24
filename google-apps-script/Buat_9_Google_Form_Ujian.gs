/**
 * ============================================================================
 * GENERATOR OTOMATIS GOOGLE FORM JADWAL HARI INI — MTs ASSIBYAN
 * Mata Pelajaran Hari Ini:
 *   1. BAHASA INDONESIA (Kelas VII, VIII, IX)
 *   2. AL-QUR'AN HADITS (Kelas VII, VIII, IX)
 *   3. PRAKARYA         (Kelas VII, VIII, IX)
 * Lengkap dengan Soal Pilihan Ganda, Pilihan Ganda Kompleks (2 Jawaban),
 * Kunci Jawaban Resmi, dan Skor Otomatis Total 100 Poin!
 * ============================================================================
 */

// --- PILIH SALAH SATU FUNGSI DI BAWAH INI PADA DROPDOWN LALU KLIK "Run" ---

// A. BUAT PER SESI MATA PELAJARAN (DIREKOMENDASIKAN — Selesai ~20 Detik)
function buatSesi1_BahasaIndonesia_SemuaKelas() {
  buatFormBerdasarkanMapel('Bahasa Indonesia');
}

function buatSesi2_AlQuranHadits_SemuaKelas() {
  buatFormBerdasarkanMapel('Al-Qur’an Hadits');
}

function buatSesi3_Prakarya_SemuaKelas() {
  buatFormBerdasarkanMapel('Prakarya');
}

// B. BUAT PER KELAS (VII, VIII, atau IX)
function buatHariIni_KelasVII() {
  buatFormBerdasarkanKelas('VII');
}

function buatHariIni_KelasVIII() {
  buatFormBerdasarkanKelas('VIII');
}

function buatHariIni_KelasIX() {
  buatFormBerdasarkanKelas('IX');
}

// C. BUAT SATU FORM SPESIFIK (Selesai ~7 Detik)
function buatSatu_BahasaIndonesia_VII()  { buatFormBerdasarkanId('bind_vii'); }
function buatSatu_BahasaIndonesia_VIII() { buatFormBerdasarkanId('bind_viii'); }
function buatSatu_BahasaIndonesia_IX()   { buatFormBerdasarkanId('bind_ix'); }

function buatSatu_AlQuranHadits_VII()    { buatFormBerdasarkanId('qh_vii'); }
function buatSatu_AlQuranHadits_VIII()   { buatFormBerdasarkanId('qh_viii'); }
function buatSatu_AlQuranHadits_IX()     { buatFormBerdasarkanId('qh_ix'); }

function buatSatu_Prakarya_VII()         { buatFormBerdasarkanId('prak_vii'); }
function buatSatu_Prakarya_VIII()        { buatFormBerdasarkanId('prak_viii'); }
function buatSatu_Prakarya_IX()          { buatFormBerdasarkanId('prak_ix'); }

// D. BUAT SEMUA 9 FORM SEKALIGUS
function buatSemua9FormJadwalHariIni() {
  prosesPembuatanForm(EXAMS_DATA);
}

// ============================================================================
// KODE INTI PEMBUAT GOOGLE FORM KUIS OTOMATIS
// ============================================================================

function stripHtmlTags(str) {
  if (!str) return '';
  return String(str).replace(/<[^>]+>/g, '');
}

function getPointsForQuestion(totalQuestions, questionIndex) {
  if (totalQuestions === 25) return 4; // 25 x 4 = 100 poin
  if (totalQuestions === 30) {
    // 20 soal x 3 poin + 10 soal x 4 poin = 100 poin
    return questionIndex < 20 ? 3 : 4;
  }
  if (totalQuestions === 40) {
    // 20 soal x 2 poin (40) + 20 soal x 3 poin (60) = 100 poin
    return questionIndex < 20 ? 2 : 3;
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
        ss.getSheetByName('Daftar Link Google Form') ||
        ss.insertSheet('Daftar Link Google Form');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          'Waktu Dibuat',
          'Kelas',
          'Mata Pelajaran',
          'Judul Google Form',
          'Jumlah Soal',
          'Link Ujian Siswa (Bagikan ke Siswa)',
          'Link Edit Guru'
        ]);
        sheet
          .getRange(1, 1, 1, 7)
          .setFontWeight('bold')
          .setBackground('#2457D6')
          .setFontColor('#FFFFFF');
        sheet.setFrozenRows(1);
      }
    }
  } catch (e) {
    // Jika dijalankan langsung dari script.google.com tanpa Spreadsheet
  }

  for (var i = 0; i < targetExams.length; i++) {
    var ex = targetExams[i];
    var formTitle = ex.subject.toUpperCase() + ' KELAS ' + ex.classLevel + ' — ASAS MTs Assibyan';
    var form = FormApp.create(formTitle);

    form.setDescription(
      'MADRASAH TSANAWIYAH ASSIBYAN\n' +
        'ASESMEN SUMATIF AKHIR SEMESTER (ASAS) TAHUN PELAJARAN 2025/2026\n' +
        'Mata Pelajaran: ' +
        ex.subject +
        ' | Kelas: ' +
        ex.classLevel +
        ' | Waktu: ' +
        ex.durationMin +
        ' Menit\n\n' +
        'Petunjuk: Isi Nama Lengkap dengan HURUF KAPITAL dan Nomor Peserta dengan benar, kemudian kerjakan seluruh soal dengan teliti.'
    );
    form.setIsQuiz(true);
    form.setCollectEmail(false);
    form.setLimitOneResponsePerUser(false);
    form.setShowLinkToRespondAgain(false);
    form.setConfirmationMessage(
      'Alhamdulillah, jawaban ujian ' +
        ex.subject +
        ' (Kelas ' +
        ex.classLevel +
        ') Anda telah berhasil dikirim. Terima kasih.'
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

    // Bagian 2: Soal Pilihan Ganda (1 Jawaban Benar)
    form
      .addPageBreakItem()
      .setTitle('BAGIAN I: PILIHAN GANDA — ' + ex.subject.toUpperCase() + ' KELAS ' + ex.classLevel)
      .setHelpText('Pilihlah 1 (SATU) jawaban A, B, C, atau D yang paling benar!');

    var addedPgkHeader = false;
    var totalQ = ex.questions.length;

    for (var qIdx = 0; qIdx < totalQ; qIdx++) {
      var q = ex.questions[qIdx];
      var pts = getPointsForQuestion(totalQ, qIdx);
      var fullQuestionTitle = q.no + '. ' + stripHtmlTags(q.text);

      if (q.type === 'CHECKBOX') {
        if (!addedPgkHeader) {
          form
            .addSectionHeaderItem()
            .setTitle('BAGIAN II: PILIHAN GANDA KOMPLEKS (PILIH 2 JAWABAN BENAR)')
            .setHelpText(
              'Untuk soal nomor ' +
                q.no +
                ' sampai ' +
                totalQ +
                ', pilihlah 2 (DUA) kotak jawaban yang paling benar!'
            );
          addedPgkHeader = true;
        }

        var cb = form.addCheckboxItem();
        cb.setTitle(fullQuestionTitle)
          .setHelpText('Pilih 2 (DUA) jawaban yang benar')
          .setRequired(true)
          .setPoints(pts);

        var correctKeys = String(q.answerKey || 'A,B')
          .split(',')
          .map(function(k) {
            return k.trim();
          });

        var cbChoices = [];
        for (var cIdx = 0; cIdx < q.options.length; cIdx++) {
          var optC = q.options[cIdx];
          var isKeyC = correctKeys.indexOf(optC.key) !== -1;
          cbChoices.push(
            cb.createChoice(optC.key + '. ' + stripHtmlTags(optC.text), isKeyC)
          );
        }
        cb.setChoices(cbChoices);
      } else {
        var mc = form.addMultipleChoiceItem();
        mc.setTitle(fullQuestionTitle)
          .setRequired(true)
          .setPoints(pts);

        var mcChoices = [];
        for (var oIdx = 0; oIdx < q.options.length; oIdx++) {
          var opt = q.options[oIdx];
          var isCorrect = opt.key === q.answerKey;
          mcChoices.push(
            mc.createChoice(opt.key + '. ' + stripHtmlTags(opt.text), isCorrect)
          );
        }
        mc.setChoices(mcChoices);
      }
    }

    // Hubungkan ke Spreadsheet SETELAH semua soal & poin selesai ditambahkan agar kolom Score otomatis terbuat!
    if (ss) {
      try {
        Utilities.sleep(500);
        form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
      } catch (errDest) {}
    }

    var publishedUrl = form.getPublishedUrl();
    var editUrl = form.getEditUrl();
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
        editUrl
      ]);
    }
  }
}

var EXAMS_DATA = [
  {
    "id": "bind_vii",
    "code": "ASAS-BIND-VII",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Indonesia Kelas VII",
    "subject": "Bahasa Indonesia",
    "classLevel": "VII",
    "scheduleText": "Senin (Jadwal Hari Ini)",
    "durationMin": 90,
    "questions": [
      {
        "no": 1,
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "CHECKBOX",
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
        "answerKey": "B,D"
      },
      {
        "no": 32,
        "type": "CHECKBOX",
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
        "answerKey": "A,B"
      },
      {
        "no": 33,
        "type": "CHECKBOX",
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
        "answerKey": "A,C"
      },
      {
        "no": 34,
        "type": "CHECKBOX",
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
        "answerKey": "A,C"
      },
      {
        "no": 35,
        "type": "CHECKBOX",
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
        "answerKey": "A,B"
      },
      {
        "no": 36,
        "type": "CHECKBOX",
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
        "answerKey": "C,D"
      },
      {
        "no": 37,
        "type": "CHECKBOX",
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
        "answerKey": "C,D"
      },
      {
        "no": 38,
        "type": "CHECKBOX",
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
        "answerKey": "C,D"
      },
      {
        "no": 39,
        "type": "CHECKBOX",
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
        "answerKey": "B,C"
      },
      {
        "no": 40,
        "type": "CHECKBOX",
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
        "answerKey": "C,D"
      }
    ]
  },
  {
    "id": "bind_viii",
    "code": "ASAS-BIND-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Indonesia Kelas VIII",
    "subject": "Bahasa Indonesia",
    "classLevel": "VIII",
    "scheduleText": "Senin (Jadwal Hari Ini)",
    "durationMin": 90,
    "questions": [
      {
        "no": 1,
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "CHECKBOX",
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
        "answerKey": "B,D"
      },
      {
        "no": 32,
        "type": "CHECKBOX",
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
        "answerKey": "A,C"
      },
      {
        "no": 33,
        "type": "CHECKBOX",
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
        "answerKey": "C,D"
      },
      {
        "no": 34,
        "type": "CHECKBOX",
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
        "answerKey": "A,B"
      },
      {
        "no": 35,
        "type": "CHECKBOX",
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
        "answerKey": "B,C"
      },
      {
        "no": 36,
        "type": "CHECKBOX",
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
        "answerKey": "A,D"
      },
      {
        "no": 37,
        "type": "CHECKBOX",
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
        "answerKey": "A,D"
      },
      {
        "no": 38,
        "type": "CHECKBOX",
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
        "answerKey": "A,C"
      },
      {
        "no": 39,
        "type": "CHECKBOX",
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
        "answerKey": "B,C"
      },
      {
        "no": 40,
        "type": "CHECKBOX",
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
        "answerKey": "B,D"
      }
    ]
  },
  {
    "id": "bind_ix",
    "code": "ASAS-BIND-IX",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Indonesia Kelas IX",
    "subject": "Bahasa Indonesia",
    "classLevel": "IX",
    "scheduleText": "Senin (Jadwal Hari Ini)",
    "durationMin": 90,
    "questions": [
      {
        "no": 1,
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "CHECKBOX",
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
        "answerKey": "A,C"
      },
      {
        "no": 32,
        "type": "CHECKBOX",
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
        "answerKey": "B,C"
      },
      {
        "no": 33,
        "type": "CHECKBOX",
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
        "answerKey": "C,D"
      },
      {
        "no": 34,
        "type": "CHECKBOX",
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
        "answerKey": "A,B"
      },
      {
        "no": 35,
        "type": "CHECKBOX",
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
        "answerKey": "A,D"
      },
      {
        "no": 36,
        "type": "CHECKBOX",
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
        "answerKey": "C,D"
      },
      {
        "no": 37,
        "type": "CHECKBOX",
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
        "answerKey": "B,C"
      },
      {
        "no": 38,
        "type": "CHECKBOX",
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
        "answerKey": "C,D"
      },
      {
        "no": 39,
        "type": "CHECKBOX",
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
        "answerKey": "A,B"
      },
      {
        "no": 40,
        "type": "CHECKBOX",
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
        "answerKey": "C,D"
      }
    ]
  },
  {
    "id": "qh_vii",
    "code": "ASAS-QH-VII",
    "title": "Asesmen Sumatif Akhir Semester — Al-Qur’an Hadits Kelas VII",
    "subject": "Al-Qur’an Hadits",
    "classLevel": "VII",
    "scheduleText": "Senin (Jadwal Hari Ini)",
    "durationMin": 90,
    "questions": [
      {
        "no": 1,
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "CHECKBOX",
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
        "answerKey": "A,B"
      },
      {
        "no": 32,
        "type": "CHECKBOX",
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
        "answerKey": "B,D"
      },
      {
        "no": 33,
        "type": "CHECKBOX",
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
        "answerKey": "B,C"
      },
      {
        "no": 34,
        "type": "CHECKBOX",
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
        "answerKey": "C,D"
      },
      {
        "no": 35,
        "type": "CHECKBOX",
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
        "answerKey": "A,B"
      },
      {
        "no": 36,
        "type": "CHECKBOX",
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
        "answerKey": "A,D"
      },
      {
        "no": 37,
        "type": "CHECKBOX",
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
        "answerKey": "B,C"
      },
      {
        "no": 38,
        "type": "CHECKBOX",
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
        "answerKey": "A,B"
      },
      {
        "no": 39,
        "type": "CHECKBOX",
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
        "answerKey": "B,D"
      },
      {
        "no": 40,
        "type": "CHECKBOX",
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
        "answerKey": "A,B"
      }
    ]
  },
  {
    "id": "qh_viii",
    "code": "ASAS-QH-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Al-Qur’an Hadits Kelas VIII",
    "subject": "Al-Qur’an Hadits",
    "classLevel": "VIII",
    "scheduleText": "Senin (Jadwal Hari Ini)",
    "durationMin": 90,
    "questions": [
      {
        "no": 1,
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
    "id": "qh_ix",
    "code": "ASAS-QH-IX",
    "title": "Asesmen Sumatif Akhir Semester — Al-Qur’an Hadits Kelas IX",
    "subject": "Al-Qur’an Hadits",
    "classLevel": "IX",
    "scheduleText": "Senin (Jadwal Hari Ini)",
    "durationMin": 90,
    "questions": [
      {
        "no": 1,
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
    "id": "prak_vii",
    "code": "ASAS-PRAK-VII",
    "title": "Asesmen Sumatif Akhir Semester — Prakarya Kelas VII",
    "subject": "Prakarya",
    "classLevel": "VII",
    "scheduleText": "Senin (Jadwal Hari Ini)",
    "durationMin": 90,
    "questions": [
      {
        "no": 1,
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
    "id": "prak_viii",
    "code": "ASAS-PRAK-VIII",
    "title": "Asesmen Sumatif Akhir Semester — Prakarya Kelas VIII",
    "subject": "Prakarya",
    "classLevel": "VIII",
    "scheduleText": "Senin (Jadwal Hari Ini)",
    "durationMin": 90,
    "questions": [
      {
        "no": 1,
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
    "id": "prak_ix",
    "code": "ASAS-PRAK-IX",
    "title": "Asesmen Sumatif Akhir Semester — Prakarya Kelas IX",
    "subject": "Prakarya",
    "classLevel": "IX",
    "scheduleText": "Senin (Jadwal Hari Ini)",
    "durationMin": 90,
    "questions": [
      {
        "no": 1,
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
        "type": "MC",
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
  }
];
