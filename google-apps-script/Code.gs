/**
 * ============================================================================
 * GOOGLE APPS SCRIPT — JEMBATAN REKAP NILAI CBT MTs ASSIBYAN
 * ============================================================================
 * Cara pasang:
 * 1. Buat Google Spreadsheet baru untuk Rekap Nilai CBT MTs Assibyan.
 * 2. Klik menu Extensions (Ekstensi) -> Apps Script.
 * 3. Hapus semua kode di Code.gs, lalu tempel (paste) seluruh kode ini.
 * 4. Klik tombol Save (ikon disket).
 * 5. Klik tombol Deploy -> New deployment (Deployment baru).
 * 6. Pilih tipe: "Web app".
 *    - Execute as: "Me" (Saya)
 *    - Who has access: "Anyone" (Siapa saja)
 * 7. Klik Deploy, salin "Web app URL" (berakhiran /exec).
 * 8. Tempel URL tersebut di halaman Admin -> Pengaturan Spreadsheet pada Web CBT
 *    (atau di variabel environment APPS_SCRIPT_EXPORT_URL di Vercel).
 * ============================================================================
 */

const WEBHOOK_SECRET = 'mts-assibyan-cbt-secret-2026'; // Samakan dengan di Web CBT
const SHEET_REKAP_NAME = 'Rekap Nilai CBT';

const HEADERS = [
  'ID Sesi',
  'Waktu Pengumpulan (WIB)',
  'Nomor Peserta',
  'Nama Siswa (KAPITAL)',
  'Kelas',
  'Mata Pelajaran',
  'Judul Ujian',
  'Nilai Akhir',
  'Benar',
  'Salah',
  'Kosong',
  'Total Soal',
  'Waktu Mulai (WIB)',
  'Waktu Selesai (WIB)',
  'Lama Waktu Mengerjakan',
  'Durasi (Detik)',
  'Jumlah Pelanggaran',
  'Status Pengumpulan',
  'Riwayat Detail Pelanggaran'
];

function ensureSheetReady() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_REKAP_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_REKAP_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#2457D6');
    headerRange.setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ status: 'error', message: 'Payload kosong' });
    }

    const body = JSON.parse(e.postData.contents);
    const configuredSecret =
      PropertiesService.getScriptProperties().getProperty('SHEETS_WEBHOOK_SECRET') ||
      WEBHOOK_SECRET;

    if (body.secret !== configuredSecret) {
      return jsonResponse({ status: 'error', message: 'Secret tidak cocok' });
    }

    const rows = Array.isArray(body.rows) ? body.rows : [];
    if (rows.length === 0) {
      return jsonResponse({ status: 'ok', synced: 0 });
    }

    const sheet = ensureSheetReady();
    const lastRow = sheet.getLastRow();
    const existingIds = new Map();

    if (lastRow > 1) {
      const idValues = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
      for (let i = 0; i < idValues.length; i++) {
        const idVal = String(idValues[i][0] || '').trim();
        if (idVal) {
          existingIds.set(idVal, i + 2); // baris ke-(i+2)
        }
      }
    }

    const newRowsToAppend = [];

    for (let i = 0; i < rows.length; i++) {
      const r = rows[i];
      const rowValues = [
        r.attemptId,
        r.submittedAtWib,
        "'" + String(r.participantNumber || ''), // tanda petik agar angka 0 di depan nomor peserta tidak hilang
        r.studentName,
        r.className,
        r.subject,
        r.examTitle,
        Number(r.score || 0),
        Number(r.correctCount || 0),
        Number(r.wrongCount || 0),
        Number(r.emptyCount || 0),
        Number(r.totalQuestions || 0),
        r.startedAtWib,
        r.endedAtWib,
        r.durationFormatted,
        Number(r.durationSeconds || 0),
        r.violationCount + '/' + r.maxViolations,
        r.statusLabel,
        r.violationSummary
      ];

      if (existingIds.has(r.attemptId)) {
        const targetRowIdx = existingIds.get(r.attemptId);
        sheet.getRange(targetRowIdx, 1, 1, rowValues.length).setValues([rowValues]);
      } else {
        newRowsToAppend.push(rowValues);
      }
    }

    if (newRowsToAppend.length > 0) {
      const startRow = sheet.getLastRow() + 1;
      sheet
        .getRange(startRow, 1, newRowsToAppend.length, HEADERS.length)
        .setValues(newRowsToAppend);
    }

    // Buat juga sheet rekap per Mata Pelajaran secara otomatis
    updatePerSubjectSheets(rows);

    return jsonResponse({
      status: 'ok',
      synced: rows.length,
      appended: newRowsToAppend.length
    });
  } catch (err) {
    return jsonResponse({
      status: 'error',
      message: err && err.message ? err.message : String(err)
    });
  } finally {
    lock.releaseLock();
  }
}

function updatePerSubjectSheets(rows) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    const tabName = ('Mapel - ' + r.subject + ' (' + r.className + ')').substring(0, 31);
    let sheet = ss.getSheetByName(tabName);
    if (!sheet) {
      sheet = ss.insertSheet(tabName);
      sheet.appendRow(HEADERS);
      const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#16845B');
      headerRange.setFontColor('#FFFFFF');
      sheet.setFrozenRows(1);
    }

    const lastRow = sheet.getLastRow();
    let foundRow = -1;
    if (lastRow > 1) {
      const ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
      for (let j = 0; j < ids.length; j++) {
        if (String(ids[j][0]) === String(r.attemptId)) {
          foundRow = j + 2;
          break;
        }
      }
    }

    const rowValues = [
      r.attemptId,
      r.submittedAtWib,
      "'" + String(r.participantNumber || ''),
      r.studentName,
      r.className,
      r.subject,
      r.examTitle,
      Number(r.score || 0),
      Number(r.correctCount || 0),
      Number(r.wrongCount || 0),
      Number(r.emptyCount || 0),
      Number(r.totalQuestions || 0),
      r.startedAtWib,
      r.endedAtWib,
      r.durationFormatted,
      Number(r.durationSeconds || 0),
      r.violationCount + '/' + r.maxViolations,
      r.statusLabel,
      r.violationSummary
    ];

    if (foundRow > 0) {
      sheet.getRange(foundRow, 1, 1, rowValues.length).setValues([rowValues]);
    } else {
      sheet.appendRow(rowValues);
    }
  }
}

function doGet() {
  return jsonResponse({
    status: 'ok',
    service: 'CBT MTs Assibyan Google Spreadsheet Bridge',
    sheetName: SHEET_REKAP_NAME
  });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
