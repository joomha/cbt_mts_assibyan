/**
 * ============================================================================
 * PENarik & PENGHITUNG SKOR AKHIR OTOMATIS (0-100) DARI 9 GOOGLE FORM HARI INI
 * ============================================================================
 * Mengapa di Spreadsheet sebelumnya kolom Score/Nilai tidak muncul?
 * Karena Google Forms memiliki bug saat setDestination() dipanggil sebelum
 * soal selesai ditambahkan.
 *
 * SOLUSI INSTAN (1 KLIK LANGSUNG KELUAR SEMUA NILAI AKHIR 0-100):
 * Script ini langsung membuka ke-9 Google Form ujian hari ini berdasarkan ID-nya,
 * mengambil seluruh jawaban siswa yang sudah masuk, menghitung SKOR AKHIR (0-100),
 * Jumlah Benar, dan Jumlah Salah, lalu membuatkan tabel:
 *   1. Sheet "REKAP NILAI SEMUA KELAS" (Gabungan seluruh siswa hari ini)
 *   2. Sheet per Mapel & Kelas (misal: "Nilai - B.Indonesia VII", dll.)
 *
 * CARA PAKAI:
 * 1. Buka Google Spreadsheet Anda -> Extensions -> Apps Script
 * 2. Buat file script baru (klik tanda + di samping Files -> Script) atau
 *    tempel kode ini di paling bawah Code.gs lalu tekan Ctrl+S (Save)
 * 3. Pilih fungsi "hitungDanTampilkanSemuaSkorHariIni" di dropdown atas
 * 4. Klik tombol "Run"
 * ============================================================================
 */

function hitungDanTampilkanSemuaSkorHariIni() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    ss = SpreadsheetApp.create('REKAP NILAI AKHIR ASAS HARI 1 — MTs ASSIBYAN');
    Logger.log('Spreadsheet baru dibuat: ' + ss.getUrl());
  }

  // 1. Siapkan Sheet Rekap Gabungan
  var masterSheetName = 'REKAP NILAI AKHIR (0-100)';
  var masterSheet = ss.getSheetByName(masterSheetName);
  if (!masterSheet) {
    masterSheet = ss.insertSheet(masterSheetName, 0);
  } else {
    masterSheet.clearContents();
  }

  var headers = [
    'No',
    'Waktu Submit',
    'Kelas',
    'Mata Pelajaran',
    'Nomor Peserta',
    'Nama Lengkap Siswa (KAPITAL)',
    'SKOR AKHIR (0-100)',
    'Jumlah Benar',
    'Jumlah Salah',
    'Total Soal',
    'Rincian Jawaban Siswa'
  ];

  masterSheet.appendRow(headers);
  masterSheet
    .getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#2457D6')
    .setFontColor('#FFFFFF');
  masterSheet.setFrozenRows(1);

  var allMasterRows = [];
  var globalNo = 1;

  for (var i = 0; i < TODAY_FORMS_CONFIG.length; i++) {
    var cfg = TODAY_FORMS_CONFIG[i];
    var form = null;
    try {
      form = FormApp.openById(cfg.formId);
    } catch (err) {
      Logger.log('Gagal membuka Form ' + cfg.title + ': ' + err);
      continue;
    }

    var responses = form.getResponses();
    Logger.log(cfg.subject + ' Kelas ' + cfg.classLevel + ': ' + responses.length + ' siswa sudah mengumpulkan.');

    // Siapkan Sheet per Mapel & Kelas
    var tabName = ('Nilai ' + cfg.subject + ' ' + cfg.classLevel).substring(0, 31);
    var classSheet = ss.getSheetByName(tabName);
    if (!classSheet) {
      classSheet = ss.insertSheet(tabName);
    } else {
      classSheet.clearContents();
    }

    classSheet.appendRow(headers);
    classSheet
      .getRange(1, 1, 1, headers.length)
      .setFontWeight('bold')
      .setBackground('#16845B')
      .setFontColor('#FFFFFF');
    classSheet.setFrozenRows(1);

    var classRows = [];

    for (var rIdx = 0; rIdx < responses.length; rIdx++) {
      var resp = responses[rIdx];
      var timestamp = resp.getTimestamp();
      var itemResponses = resp.getItemResponses();

      var studentName = '-';
      var participantNo = '-';
      var studentClass = cfg.classLevel;

      var totalScore = 0;
      var correctCount = 0;
      var wrongCount = 0;
      var answerDetails = [];

      for (var irIdx = 0; irIdx < itemResponses.length; irIdx++) {
        var ir = itemResponses[irIdx];
        var itemTitle = String(ir.getItem().getTitle() || '').trim();
        var val = ir.getResponse();

        if (itemTitle.indexOf('NAMA LENGKAP') !== -1) {
          studentName = String(val || '').trim().toUpperCase();
          continue;
        }
        if (itemTitle.indexOf('NOMOR PESERTA') !== -1) {
          participantNo = "'" + String(val || '').trim();
          continue;
        }
        if (itemTitle === 'KELAS') {
          studentClass = String(val || cfg.classLevel).trim();
          continue;
        }

        // Cek nomor soal di awal judul pertanyaan ("1. ...", "2. ...", dst.)
        var numMatch = /^(\d{1,2})\.\s*/.exec(itemTitle);
        if (!numMatch) continue;

        var qNo = Number(numMatch[1]);
        var qMeta = cfg.answerMap[qNo];
        if (!qMeta) continue;

        if (qMeta.type === 'CHECKBOX') {
          // Pilihan Ganda Kompleks (2 jawaban benar)
          var arrVal = Array.isArray(val) ? val : [val];
          var chosenLetters = arrVal
            .map(function(v) {
              return String(v || '').trim().charAt(0).toUpperCase();
            })
            .filter(Boolean)
            .sort();

          var expectedLetters = String(qMeta.key)
            .split(',')
            .map(function(k) {
              return k.trim().toUpperCase();
            })
            .sort();

          var chosenStr = chosenLetters.join(',');
          var expectedStr = expectedLetters.join(',');

          if (chosenStr === expectedStr) {
            totalScore += qMeta.points;
            correctCount += 1;
            answerDetails.push(qNo + ':' + chosenStr + '(✓)');
          } else {
            // Cek jika benar 1 dari 2 (dan tidak memilih lebih dari 2 opsi)
            var matchCnt = 0;
            for (var c = 0; c < chosenLetters.length; c++) {
              if (expectedLetters.indexOf(chosenLetters[c]) !== -1) {
                matchCnt++;
              }
            }
            if (matchCnt === 1 && chosenLetters.length <= 2) {
              totalScore += qMeta.points / 2;
              correctCount += 0.5;
              wrongCount += 0.5;
              answerDetails.push(qNo + ':' + chosenStr + '(½)');
            } else {
              wrongCount += 1;
              answerDetails.push(qNo + ':' + chosenStr + '(✗)');
            }
          }
        } else {
          // Pilihan Ganda Biasa (1 jawaban benar)
          var chosenLetter = String(val || '').trim().charAt(0).toUpperCase();
          var expectedLetter = String(qMeta.key || '').trim().toUpperCase();

          if (chosenLetter === expectedLetter) {
            totalScore += qMeta.points;
            correctCount += 1;
            answerDetails.push(qNo + ':' + chosenLetter + '(✓)');
          } else {
            wrongCount += 1;
            answerDetails.push(qNo + ':' + chosenLetter + '(✗)');
          }
        }
      }

      var finalRoundedScore = Math.round(totalScore * 10) / 10;

      var rowData = [
        rIdx + 1,
        timestamp,
        cfg.classLevel,
        cfg.subject,
        participantNo,
        studentName,
        finalRoundedScore,
        correctCount,
        wrongCount,
        cfg.totalQuestions,
        answerDetails.join(' | ')
      ];

      classRows.push(rowData);

      var masterRow = rowData.slice();
      masterRow[0] = globalNo++;
      allMasterRows.push(masterRow);
    }

    if (classRows.length > 0) {
      // Urutkan berdasarkan Nama Siswa A-Z
      classRows.sort(function(a, b) {
        return String(a[5]).localeCompare(String(b[5]));
      });
      for (var cr = 0; cr < classRows.length; cr++) {
        classRows[cr][0] = cr + 1;
      }
      classSheet
        .getRange(2, 1, classRows.length, headers.length)
        .setValues(classRows);
    }
  }

  if (allMasterRows.length > 0) {
    masterSheet
      .getRange(2, 1, allMasterRows.length, headers.length)
      .setValues(allMasterRows);
  }

  Logger.log('====================================================');
  Logger.log('SELESAI! Total ' + allMasterRows.length + ' nilai siswa berhasil dihitung dan ditampilkan di tab "REKAP NILAI AKHIR (0-100)".');
}

/**
 * Fungsi tambahan: Menyegarkan link destination ke-9 Google Form hari ini
 * agar tab bawaan "Form Responses" juga menampilkan kolom Score (X / 100).
 */
function sinkronkanKolomScoreNativeGoogleForm() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) return;

  for (var i = 0; i < TODAY_FORMS_CONFIG.length; i++) {
    var cfg = TODAY_FORMS_CONFIG[i];
    try {
      var form = FormApp.openById(cfg.formId);
      form.setIsQuiz(true);
      try {
        form.removeDestination();
        Utilities.sleep(400);
      } catch (eRem) {}
      form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());
      Utilities.sleep(400);
      Logger.log('Berhasil menyinkronkan kolom Score untuk: ' + cfg.title);
    } catch (err) {
      Logger.log('Gagal sinkron ' + cfg.title + ': ' + err);
    }
  }
}

var TODAY_FORMS_CONFIG = [
  {
    "id": "bind_vii",
    "formId": "1UDys-XoFwCuC6Y6SD7ehoHESYefhk8VNqNKmLdiT8wg",
    "subject": "Bahasa Indonesia",
    "classLevel": "VII",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Indonesia Kelas VII",
    "totalQuestions": 40,
    "answerMap": {
      "1": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "2": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "3": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "4": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "5": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "6": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "7": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "8": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "9": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "10": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "11": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "12": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "13": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "14": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "15": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "16": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "17": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "18": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "19": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "20": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "21": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "22": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "23": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "24": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "25": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "26": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "27": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "28": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "29": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "30": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "31": {
        "type": "CHECKBOX",
        "key": "B,D",
        "points": 3
      },
      "32": {
        "type": "CHECKBOX",
        "key": "A,B",
        "points": 3
      },
      "33": {
        "type": "CHECKBOX",
        "key": "A,C",
        "points": 3
      },
      "34": {
        "type": "CHECKBOX",
        "key": "A,C",
        "points": 3
      },
      "35": {
        "type": "CHECKBOX",
        "key": "A,B",
        "points": 3
      },
      "36": {
        "type": "CHECKBOX",
        "key": "C,D",
        "points": 3
      },
      "37": {
        "type": "CHECKBOX",
        "key": "C,D",
        "points": 3
      },
      "38": {
        "type": "CHECKBOX",
        "key": "C,D",
        "points": 3
      },
      "39": {
        "type": "CHECKBOX",
        "key": "B,C",
        "points": 3
      },
      "40": {
        "type": "CHECKBOX",
        "key": "C,D",
        "points": 3
      }
    }
  },
  {
    "id": "bind_viii",
    "formId": "13tRR_9eqGa1EW9RZyzMN71tEmM6XizQCf5M6TngdNT8",
    "subject": "Bahasa Indonesia",
    "classLevel": "VIII",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Indonesia Kelas VIII",
    "totalQuestions": 40,
    "answerMap": {
      "1": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "2": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "3": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "4": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "5": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "6": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "7": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "8": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "9": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "10": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "11": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "12": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "13": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "14": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "15": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "16": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "17": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "18": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "19": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "20": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "21": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "22": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "23": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "24": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "25": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "26": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "27": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "28": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "29": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "30": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "31": {
        "type": "CHECKBOX",
        "key": "B,D",
        "points": 3
      },
      "32": {
        "type": "CHECKBOX",
        "key": "A,C",
        "points": 3
      },
      "33": {
        "type": "CHECKBOX",
        "key": "C,D",
        "points": 3
      },
      "34": {
        "type": "CHECKBOX",
        "key": "A,B",
        "points": 3
      },
      "35": {
        "type": "CHECKBOX",
        "key": "B,C",
        "points": 3
      },
      "36": {
        "type": "CHECKBOX",
        "key": "A,D",
        "points": 3
      },
      "37": {
        "type": "CHECKBOX",
        "key": "A,D",
        "points": 3
      },
      "38": {
        "type": "CHECKBOX",
        "key": "A,C",
        "points": 3
      },
      "39": {
        "type": "CHECKBOX",
        "key": "B,C",
        "points": 3
      },
      "40": {
        "type": "CHECKBOX",
        "key": "B,D",
        "points": 3
      }
    }
  },
  {
    "id": "bind_ix",
    "formId": "1tUZ9ogs62We4FlVtFdrPMHcLVildu0-xCDB4L6uZQ6w",
    "subject": "Bahasa Indonesia",
    "classLevel": "IX",
    "title": "Asesmen Sumatif Akhir Semester — Bahasa Indonesia Kelas IX",
    "totalQuestions": 40,
    "answerMap": {
      "1": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "2": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "3": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "4": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "5": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "6": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "7": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "8": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "9": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "10": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "11": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "12": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "13": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "14": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "15": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "16": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "17": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "18": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "19": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "20": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "21": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "22": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "23": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "24": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "25": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "26": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "27": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "28": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "29": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "30": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "31": {
        "type": "CHECKBOX",
        "key": "A,C",
        "points": 3
      },
      "32": {
        "type": "CHECKBOX",
        "key": "B,C",
        "points": 3
      },
      "33": {
        "type": "CHECKBOX",
        "key": "C,D",
        "points": 3
      },
      "34": {
        "type": "CHECKBOX",
        "key": "A,B",
        "points": 3
      },
      "35": {
        "type": "CHECKBOX",
        "key": "A,D",
        "points": 3
      },
      "36": {
        "type": "CHECKBOX",
        "key": "C,D",
        "points": 3
      },
      "37": {
        "type": "CHECKBOX",
        "key": "B,C",
        "points": 3
      },
      "38": {
        "type": "CHECKBOX",
        "key": "C,D",
        "points": 3
      },
      "39": {
        "type": "CHECKBOX",
        "key": "A,B",
        "points": 3
      },
      "40": {
        "type": "CHECKBOX",
        "key": "C,D",
        "points": 3
      }
    }
  },
  {
    "id": "qh_vii",
    "formId": "1jrudnkcIWLf17PWKBMzpX4B6eTRmKneeTxoOglnUdEc",
    "subject": "Al-Qur’an Hadits",
    "classLevel": "VII",
    "title": "Asesmen Sumatif Akhir Semester — Al-Qur’an Hadits Kelas VII",
    "totalQuestions": 40,
    "answerMap": {
      "1": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "2": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "3": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "4": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "5": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "6": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "7": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "8": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "9": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "10": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "11": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "12": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "13": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "14": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "15": {
        "type": "MC",
        "key": "A",
        "points": 2
      },
      "16": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "17": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "18": {
        "type": "MC",
        "key": "B",
        "points": 2
      },
      "19": {
        "type": "MC",
        "key": "D",
        "points": 2
      },
      "20": {
        "type": "MC",
        "key": "C",
        "points": 2
      },
      "21": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "22": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "23": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "24": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "25": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "26": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "27": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "28": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "29": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "30": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "31": {
        "type": "CHECKBOX",
        "key": "A,B",
        "points": 3
      },
      "32": {
        "type": "CHECKBOX",
        "key": "B,D",
        "points": 3
      },
      "33": {
        "type": "CHECKBOX",
        "key": "B,C",
        "points": 3
      },
      "34": {
        "type": "CHECKBOX",
        "key": "C,D",
        "points": 3
      },
      "35": {
        "type": "CHECKBOX",
        "key": "A,B",
        "points": 3
      },
      "36": {
        "type": "CHECKBOX",
        "key": "A,D",
        "points": 3
      },
      "37": {
        "type": "CHECKBOX",
        "key": "B,C",
        "points": 3
      },
      "38": {
        "type": "CHECKBOX",
        "key": "A,B",
        "points": 3
      },
      "39": {
        "type": "CHECKBOX",
        "key": "B,D",
        "points": 3
      },
      "40": {
        "type": "CHECKBOX",
        "key": "A,B",
        "points": 3
      }
    }
  },
  {
    "id": "qh_viii",
    "formId": "1-guDb69ag6WQXU7UwowxykARmmuAE8FGc7g3m3r8tNo",
    "subject": "Al-Qur’an Hadits",
    "classLevel": "VIII",
    "title": "Asesmen Sumatif Akhir Semester — Al-Qur’an Hadits Kelas VIII",
    "totalQuestions": 25,
    "answerMap": {
      "1": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "2": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "3": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "4": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "5": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "6": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "7": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "8": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "9": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "10": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "11": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "12": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "13": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "14": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "15": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "16": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "17": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "18": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "19": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "20": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "21": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "22": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "23": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "24": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "25": {
        "type": "MC",
        "key": "B",
        "points": 4
      }
    }
  },
  {
    "id": "qh_ix",
    "formId": "19SEmOqXTnNeyTtmRNIIBD86wiV86OpZivnGa6JHKLUY",
    "subject": "Al-Qur’an Hadits",
    "classLevel": "IX",
    "title": "Asesmen Sumatif Akhir Semester — Al-Qur’an Hadits Kelas IX",
    "totalQuestions": 25,
    "answerMap": {
      "1": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "2": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "3": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "4": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "5": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "6": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "7": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "8": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "9": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "10": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "11": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "12": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "13": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "14": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "15": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "16": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "17": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "18": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "19": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "20": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "21": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "22": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "23": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "24": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "25": {
        "type": "MC",
        "key": "A",
        "points": 4
      }
    }
  },
  {
    "id": "prak_vii",
    "formId": "1eiLGqGkOn_Xfq9-A1U9AXxC-dIPE3jknAchZm0tAi2Q",
    "subject": "Prakarya",
    "classLevel": "VII",
    "title": "Asesmen Sumatif Akhir Semester — Prakarya Kelas VII",
    "totalQuestions": 30,
    "answerMap": {
      "1": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "2": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "3": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "4": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "5": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "6": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "7": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "8": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "9": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "10": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "11": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "12": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "13": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "14": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "15": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "16": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "17": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "18": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "19": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "20": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "21": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "22": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "23": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "24": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "25": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "26": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "27": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "28": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "29": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "30": {
        "type": "MC",
        "key": "B",
        "points": 4
      }
    }
  },
  {
    "id": "prak_viii",
    "formId": "1JRBl671Vd7h8NEXF_-PP-6YZAz4E_jR24FzevMa2CvE",
    "subject": "Prakarya",
    "classLevel": "VIII",
    "title": "Asesmen Sumatif Akhir Semester — Prakarya Kelas VIII",
    "totalQuestions": 30,
    "answerMap": {
      "1": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "2": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "3": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "4": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "5": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "6": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "7": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "8": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "9": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "10": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "11": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "12": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "13": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "14": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "15": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "16": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "17": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "18": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "19": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "20": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "21": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "22": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "23": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "24": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "25": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "26": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "27": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "28": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "29": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "30": {
        "type": "MC",
        "key": "C",
        "points": 4
      }
    }
  },
  {
    "id": "prak_ix",
    "formId": "1OZXnCPs5w35MPIMU36RSKcrbk4AkLOo8KbskkekZTIk",
    "subject": "Prakarya",
    "classLevel": "IX",
    "title": "Asesmen Sumatif Akhir Semester — Prakarya Kelas IX",
    "totalQuestions": 30,
    "answerMap": {
      "1": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "2": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "3": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "4": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "5": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "6": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "7": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "8": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "9": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "10": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "11": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "12": {
        "type": "MC",
        "key": "D",
        "points": 3
      },
      "13": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "14": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "15": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "16": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "17": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "18": {
        "type": "MC",
        "key": "A",
        "points": 3
      },
      "19": {
        "type": "MC",
        "key": "B",
        "points": 3
      },
      "20": {
        "type": "MC",
        "key": "C",
        "points": 3
      },
      "21": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "22": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "23": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "24": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "25": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "26": {
        "type": "MC",
        "key": "D",
        "points": 4
      },
      "27": {
        "type": "MC",
        "key": "C",
        "points": 4
      },
      "28": {
        "type": "MC",
        "key": "A",
        "points": 4
      },
      "29": {
        "type": "MC",
        "key": "B",
        "points": 4
      },
      "30": {
        "type": "MC",
        "key": "B",
        "points": 4
      }
    }
  }
];
