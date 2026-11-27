/**
 * ============================================================================
 * GENERATOR OTOMATIS GOOGLE FORM — JADWAL HARI KE-6 (SABTU, 28 NOVEMBER 2026)
 * MTs ASSIBYAN (KELAS VII, VIII, IX)
 * ============================================================================
 * Daftar 9 Paket Soal Hari Ke-6 (Sabtu, 28 November 2026):
 * 1. Jam Ke-1 (07.30 - 09.30) : IPS (Kelas VII, VIII, IX) — @30 Soal PG
 * 2. Jam Ke-2 (10.00 - 11.30) : PJOK (Kelas VII, VIII, IX) — @30 Soal PG
 * 3. Jam Ke-3 (11.30 - 13.00) : Nahwu Shorof (Kelas VII, VIII, IX) — @20 Soal PG
 *
 * CARA PAKAI (ANTI-TIMEOUT 6 MENIT GOOGLE):
 * Jalankan salah satu fungsi per mapel di bawah ini secara bergantian:
 * - buat1_IPS_Kelas7_8_9
 * - buat2_PJOK_Kelas7_8_9
 * - buat3_NahwuShorof_Kelas7_8_9
 * ============================================================================
 */

const SPREADSHEET_PROP_KEY_HARI_6 = 'ASAS_HARI_6_SPREADSHEET_ID';

function buat1_IPS_Kelas7_8_9() {
  jalankanBatchMapelHari6(['IPS-VII', 'IPS-VIII', 'IPS-IX']);
}

function buat2_PJOK_Kelas7_8_9() {
  jalankanBatchMapelHari6(['PJOK-VII', 'PJOK-VIII', 'PJOK-IX']);
}

function buat3_NahwuShorof_Kelas7_8_9() {
  jalankanBatchMapelHari6(['NAHWU-VII', 'NAHWU-VIII', 'NAHWU-IX']);
}

function buatSemuaGoogleFormHari6() {
  jalankanBatchMapelHari6([
    'IPS-VII', 'IPS-VIII', 'IPS-IX',
    'PJOK-VII', 'PJOK-VIII', 'PJOK-IX',
    'NAHWU-VII', 'NAHWU-VIII', 'NAHWU-IX'
  ]);
}

function getOrCreateMasterSpreadsheetHari6() {
  const props = PropertiesService.getScriptProperties();
  const savedId = props.getProperty(SPREADSHEET_PROP_KEY_HARI_6);
  if (savedId) {
    try {
      return SpreadsheetApp.openById(savedId);
    } catch (e) {}
  }
  const ss = SpreadsheetApp.create('REKAP JAWABAN & NILAI ASAS — HARI 6 (SABTU) MTs ASSIBYAN');
  props.setProperty(SPREADSHEET_PROP_KEY_HARI_6, ss.getId());
  return ss;
}

function ensureSummarySheetHari6(masterSS) {
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

function jalankanBatchMapelHari6(targetCodes) {
  const masterSS = getOrCreateMasterSpreadsheetHari6();
  const summarySheet = ensureSummarySheetHari6(masterSS);
  const selectedExams = EXAMS_HARI_6.filter(function (ex) {
    return targetCodes.indexOf(ex.code) !== -1;
  });

  for (var i = 0; i < selectedExams.length; i++) {
    var exam = selectedExams[i];
    var linkInfo = createSingleExamFormHari6(exam, masterSS);

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
  Logger.log('MASTER SPREADSHEET REKAP NILAI HARI 6 (SABTU): ' + masterSS.getUrl());
}

function createSingleExamFormHari6(exam, masterSS) {
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
    '2. Isi Nama Lengkap dengan HURUF KAPITAL dan Nomor Peserta sesuai Kartu Peserta.\n' +
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
    .setHelpText('Contoh: AHMAD RIPALDI')
    .setRequired(true);

  const numItem = form.addTextItem();
  numItem
    .setTitle('NOMOR PESERTA')
    .setHelpText('Contoh: PAS-2026-001')
    .setRequired(true);

  const classItem = form.addMultipleChoiceItem();
  classItem
    .setTitle('KELAS & RUANG UJIAN')
    .setChoiceValues([
      'VII (Tujuh) — RUANG 01',
      'VIII (Delapan) — RUANG 02',
      'IX (Sembilan) — RUANG 03'
    ])
    .setRequired(true);

  form
    .addPageBreakItem()
    .setTitle('SOAL PILIHAN GANDA — ' + exam.subject.toUpperCase() + ' KELAS ' + exam.classLevel)
    .setHelpText('Pilihlah satu jawaban yang paling tepat!');

  const pts = Math.round(exam.pointsPerQuestion || 3);
  const keyMap = { A: 0, B: 1, C: 2, D: 3 };

  for (let i = 0; i < exam.questions.length; i++) {
    const q = exam.questions[i];
    const mc = form.addMultipleChoiceItem();

    let titleText = q.no + '. ';
    if (q.context) {
      titleText += '[Perhatikan informasi berikut]\n' + q.context + '\n\nPertanyaan:\n';
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

  // PENTING: Hubungkan ke Spreadsheet SETELAH semua soal & poin selesai ditambahkan
  // agar kolom "Score" otomatis terbuat di Google Sheets!
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

const EXAMS_HARI_6 = [
  {
    "code": "IPS-VII",
    "title": "IPS KELAS VII — ASAS MTs Assibyan",
    "subject": "Ilmu Pengetahuan Sosial (IPS)",
    "classLevel": "VII",
    "schedule": "Sabtu, 28 November 2026, Jam Ke-1 (07.30 – 09.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 3,
    "questions": [
      {
        "no": 1,
        "text": "Indonesia terletak di antara dua benua, yaitu….",
        "options": [
          "Asia dan Afrika",
          "Asia dan Australia",
          "Asia dan Amerika",
          "Afrika dan Eropa"
        ],
        "key": "B"
      },
      {
        "no": 2,
        "text": "Garis lintang berfungsi untuk menentukan….",
        "options": [
          "Zona waktu",
          "Iklim",
          "Musim",
          "Suhu permukaan laut"
        ],
        "key": "B"
      },
      {
        "no": 3,
        "text": "Batas wilayah Indonesia di sebelah barat adalah negara….",
        "options": [
          "Filipina",
          "India",
          "Malaysia",
          "Papua Nugini"
        ],
        "key": "B"
      },
      {
        "no": 4,
        "text": "Peta yang menggambarkan kenampakan alam disebut peta….",
        "options": [
          "Umum",
          "Tematik",
          "Khusus",
          "Lingkungan"
        ],
        "key": "A"
      },
      {
        "no": 5,
        "text": "Berikut yang termasuk kenampakan buatan adalah….",
        "options": [
          "Danau",
          "Sungai",
          "Waduk",
          "Gunung"
        ],
        "key": "C"
      },
      {
        "no": 6,
        "text": "Alat untuk mengukur derajat kemiringan permukaan bumi adalah….",
        "options": [
          "Kompas",
          "Altimeter",
          "Klinometer",
          "Barometer"
        ],
        "key": "C"
      },
      {
        "no": 7,
        "text": "Proses pengikisan permukaan bumi oleh angin atau air disebut….",
        "options": [
          "Erosi",
          "Abrasi",
          "Sedimentasi",
          "Korosi"
        ],
        "key": "A"
      },
      {
        "no": 8,
        "text": "Berikut yang termasuk bencana alam geologis adalah….",
        "options": [
          "Gempa bumi",
          "Banjir",
          "Kekeringan",
          "Angin puting beliung"
        ],
        "key": "A"
      },
      {
        "no": 9,
        "text": "Gunung yang masih aktif disebut….",
        "options": [
          "Gunung mati",
          "Gunung berapi",
          "Gunung tegak",
          "Gunung lipat"
        ],
        "key": "B"
      },
      {
        "no": 10,
        "text": "Wilayah dengan curah hujan tinggi biasanya memiliki vegetasi….",
        "options": [
          "Sabana",
          "Hutan hujan tropis",
          "Stepa",
          "Tundra"
        ],
        "key": "B"
      },
      {
        "no": 11,
        "text": "Manusia purba yang ditemukan di Sangiran adalah….",
        "options": [
          "Homo sapiens",
          "Homo erectus",
          "Homo soloensis",
          "Homo wajakensis"
        ],
        "key": "B"
      },
      {
        "no": 12,
        "text": "Zaman batu tua disebut zaman….",
        "options": [
          "Neolitikum",
          "Paleolitikum",
          "Megalitikum",
          "Mesolitikum"
        ],
        "key": "B"
      },
      {
        "no": 13,
        "text": "Alat zaman neolitikum yang terkenal adalah….",
        "options": [
          "Kapak perimbas",
          "Kapak genggam",
          "Kapak lonjong",
          "Alat serpih"
        ],
        "key": "C"
      },
      {
        "no": 14,
        "text": "Kerajaan Hindu-Buddha tertua di Indonesia adalah….",
        "options": [
          "Majapahit",
          "Sriwijaya",
          "Kutai",
          "Mataram"
        ],
        "key": "C"
      },
      {
        "no": 15,
        "text": "Kerajaan Sriwijaya berkembang di daerah….",
        "options": [
          "Sumatra Utara",
          "Jawa Timur",
          "Sumatra Selatan",
          "Kalimantan Timur"
        ],
        "key": "C"
      },
      {
        "no": 16,
        "text": "Pendiri Kerajaan Majapahit adalah….",
        "options": [
          "Ken Arok",
          "Gajah Mada",
          "Raden Wijaya",
          "Hayam Wuruk"
        ],
        "key": "C"
      },
      {
        "no": 17,
        "text": "Sumpah Palapa berasal dari tokoh….",
        "options": [
          "Hayam Wuruk",
          "Raden Wijaya",
          "Ken Dedes",
          "Gajah Mada"
        ],
        "key": "D"
      },
      {
        "no": 18,
        "text": "Masuknya Islam ke Indonesia dipermudah oleh kegiatan….",
        "options": [
          "Politik",
          "Perdagangan",
          "Perang",
          "Penjajahan"
        ],
        "key": "B"
      },
      {
        "no": 19,
        "text": "Tokoh penting dari Kesultanan Demak adalah….",
        "options": [
          "Sultan Malik As-Saleh",
          "Raden Patah",
          "Sultan Iskandar Muda",
          "Sultan Agung"
        ],
        "key": "B"
      },
      {
        "no": 20,
        "text": "Penulisan sejarah secara ilmiah harus menggunakan….",
        "options": [
          "Imajinasi",
          "Cerita rakyat",
          "Sumber sejarah",
          "Ramalan"
        ],
        "key": "C"
      },
      {
        "no": 21,
        "text": "Ketika seseorang belajar norma dan nilai masyarakat, proses itu disebut….",
        "options": [
          "Interaksi sosial",
          "Asimilasi",
          "Sosialisasi",
          "Akulturasi"
        ],
        "key": "C"
      },
      {
        "no": 22,
        "text": "Contoh interaksi sosial adalah….",
        "options": [
          "Duduk sendiri",
          "Membaca buku",
          "Bertukar informasi",
          "Tidur di rumah"
        ],
        "key": "C"
      },
      {
        "no": 23,
        "text": "Norma yang memiliki sanksi paling tegas adalah….",
        "options": [
          "Adat",
          "Mores",
          "Folkways",
          "Hukum"
        ],
        "key": "D"
      },
      {
        "no": 24,
        "text": "Proses masuknya budaya asing tanpa menghilangkan budaya asli disebut….",
        "options": [
          "Asimilasi",
          "Akulturasi",
          "Difusi",
          "Integrasi"
        ],
        "key": "B"
      },
      {
        "no": 25,
        "text": "Penyebab konflik sosial adalah….",
        "options": [
          "Perbedaan pendapat",
          "Kerjasama",
          "Integrasi",
          "Toleransi"
        ],
        "key": "A"
      },
      {
        "no": 26,
        "text": "Bentuk kerja sama antara dua kelompok disebut….",
        "options": [
          "Koalisi",
          "Akomodasi",
          "Kompetisi",
          "Asimilasi"
        ],
        "key": "A"
      },
      {
        "no": 27,
        "text": "Contoh mobilitas sosial vertikal naik adalah….",
        "options": [
          "Pindah rumah",
          "Naik jabatan",
          "Mutasi",
          "Turun pangkat"
        ],
        "key": "B"
      },
      {
        "no": 28,
        "text": "Masyarakat pedesaan biasanya memiliki ciri….",
        "options": [
          "Mobilitas tinggi",
          "Hubungan sosial renggang",
          "Solidaritas kuat",
          "Individualisme kuat"
        ],
        "key": "C"
      },
      {
        "no": 29,
        "text": "Contoh nilai sosial adalah….",
        "options": [
          "Menjaga kebersihan",
          "Bermain bola",
          "Mengerjakan PR",
          "Berbelanja"
        ],
        "key": "A"
      },
      {
        "no": 30,
        "text": "Perilaku yang bertentangan dengan norma disebut….",
        "options": [
          "Konsensus",
          "Deviasi",
          "Integrasi",
          "Kooperasi"
        ],
        "key": "B"
      }
    ]
  },
  {
    "code": "IPS-VIII",
    "title": "IPS KELAS VIII — ASAS MTs Assibyan",
    "subject": "Ilmu Pengetahuan Sosial (IPS)",
    "classLevel": "VIII",
    "schedule": "Sabtu, 28 November 2026, Jam Ke-1 (07.30 – 09.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 3,
    "questions": [
      {
        "no": 1,
        "text": "Interaksi antarnegara dapat terjadi karena adanya….",
        "options": [
          "Perbedaan mata uang",
          "Kesamaan budaya",
          "Perbedaan kebutuhan dan sumber daya",
          "Persaingan penduduk"
        ],
        "key": "C"
      },
      {
        "no": 2,
        "text": "Bentuk interaksi antarnegara dalam bidang ekonomi adalah….",
        "options": [
          "Pertukaran pelajar",
          "Kerjasama militer",
          "Perdagangan internasional",
          "Perjanjian batas wilayah"
        ],
        "key": "C"
      },
      {
        "no": 3,
        "text": "Penyebab utama terjadinya perdagangan internasional adalah….",
        "options": [
          "Semakin sedikit barang",
          "Kebutuhan negara berbeda-beda",
          "Negara ingin bersaing",
          "Semua negara sama kebutuhannya"
        ],
        "key": "B"
      },
      {
        "no": 4,
        "text": "Ekspor adalah kegiatan….",
        "options": [
          "Menjual barang dari luar negeri",
          "Membeli barang dari luar negeri",
          "Menjual barang ke luar negeri",
          "Menyimpan barang di dalam negeri"
        ],
        "key": "C"
      },
      {
        "no": 5,
        "text": "Impor dilakukan jika….",
        "options": [
          "Barang di luar negeri mahal",
          "Barang dibutuhkan tetapi tidak ada di dalam negeri",
          "Produksi nasional berlimpah",
          "Negara ingin menghemat devisa"
        ],
        "key": "B"
      },
      {
        "no": 6,
        "text": "Contoh barang ekspor Indonesia adalah….",
        "options": [
          "Pesawat udara",
          "Padi",
          "Kelapa sawit",
          "Kapal selam"
        ],
        "key": "C"
      },
      {
        "no": 7,
        "text": "Perjanjian kerja sama dua negara disebut….",
        "options": [
          "Multilateral",
          "Bilateral",
          "Regional",
          "Universal"
        ],
        "key": "B"
      },
      {
        "no": 8,
        "text": "Kerjasama ekonomi yang melibatkan banyak negara disebut kerja sama….",
        "options": [
          "Internasional",
          "Regional",
          "Nasional",
          "Domestik"
        ],
        "key": "A"
      },
      {
        "no": 9,
        "text": "Bantuan yang diberikan suatu negara kepada negara lain disebut….",
        "options": [
          "Ekspor",
          "Impor",
          "Donasi",
          "Hibah"
        ],
        "key": "D"
      },
      {
        "no": 10,
        "text": "Interaksi negara dalam bidang pendidikan berbentuk….",
        "options": [
          "Bantuan bahan pangan",
          "Pertukaran pelajar",
          "Bantuan militer",
          "Ekspor tekstil"
        ],
        "key": "B"
      },
      {
        "no": 11,
        "text": "ASEAN didirikan pada tahun….",
        "options": [
          "1955",
          "1967",
          "1978",
          "1990"
        ],
        "key": "B"
      },
      {
        "no": 12,
        "text": "Negara pendiri ASEAN kecuali….",
        "options": [
          "Indonesia",
          "Laos",
          "Thailand",
          "Malaysia"
        ],
        "key": "B"
      },
      {
        "no": 13,
        "text": "Markas besar ASEAN terletak di….",
        "options": [
          "Jakarta",
          "Bangkok",
          "Manila",
          "Kuala Lumpur"
        ],
        "key": "A"
      },
      {
        "no": 14,
        "text": "Tujuan pembentukan ASEAN adalah….",
        "options": [
          "Menciptakan konflik negara",
          "Memperluas penjajahan",
          "Meningkatkan kesejahteraan bersama",
          "Menghapus kerja sama"
        ],
        "key": "C"
      },
      {
        "no": 15,
        "text": "Kerja sama ASEAN dalam bidang pendidikan adalah….",
        "options": [
          "Pameran dagang",
          "Program beasiswa",
          "Latihan militer",
          "Pengurangan tarif impor"
        ],
        "key": "B"
      },
      {
        "no": 16,
        "text": "Produk unggulan Thailand dalam ASEAN adalah….",
        "options": [
          "Tekstil",
          "Beras",
          "Timah",
          "Karet"
        ],
        "key": "B"
      },
      {
        "no": 17,
        "text": "Negara anggota ASEAN yang tidak memiliki laut adalah….",
        "options": [
          "Singapura",
          "Laos",
          "Kamboja",
          "Myanmar"
        ],
        "key": "B"
      },
      {
        "no": 18,
        "text": "AFTA merupakan kerja sama ASEAN dalam bidang….",
        "options": [
          "Militer",
          "Ekonomi",
          "Pendidikan",
          "Politik"
        ],
        "key": "B"
      },
      {
        "no": 19,
        "text": "Indonesia berperan sebagai “Poros Maritim Dunia” karena….",
        "options": [
          "Negara kepulauan strategis",
          "Penduduk paling sedikit",
          "Tidak memiliki laut",
          "Daerahnya tandus"
        ],
        "key": "A"
      },
      {
        "no": 20,
        "text": "Arti semboyan ASEAN “One Vision, One Identity, One Community” adalah….",
        "options": [
          "Negara bersaing bebas",
          "Negara bekerja sama untuk kesejahteraan",
          "Negara menutup diri",
          "Negara bebas berkonflik"
        ],
        "key": "B"
      },
      {
        "no": 21,
        "text": "Tujuan utama imperialisme kuno adalah….",
        "options": [
          "Penyebaran agama",
          "Mencari kekayaan dan rempah-rempah",
          "Menyatukan dunia",
          "Mengurangi perdagangan"
        ],
        "key": "B"
      },
      {
        "no": 22,
        "text": "Politik yang memecah belah bangsa Indonesia disebut….",
        "options": [
          "Devide et impera",
          "Benteng",
          "Etis",
          "Agraria"
        ],
        "key": "A"
      },
      {
        "no": 23,
        "text": "Kedatangan bangsa Eropa ke Indonesia dipicu oleh….",
        "options": [
          "Kemiskinan di Eropa",
          "Jatuhnya Konstantinopel",
          "Banyaknya bencana alam",
          "Kekurangan rempah-rempah di Asia"
        ],
        "key": "B"
      },
      {
        "no": 24,
        "text": "VOC didirikan oleh bangsa….",
        "options": [
          "Portugis",
          "Belanda",
          "Inggris",
          "Spanyol"
        ],
        "key": "B"
      },
      {
        "no": 25,
        "text": "Tugas utama VOC adalah….",
        "options": [
          "Membangun sekolah",
          "Menguasai perdagangan rempah",
          "Membantu petani",
          "Mengembangkan pendidikan"
        ],
        "key": "B"
      },
      {
        "no": 26,
        "text": "Tokoh yang memimpin Perang Diponegoro adalah….",
        "options": [
          "Pangeran Antasari",
          "Diponegoro",
          "Tuanku Imam Bonjol",
          "Pattimura"
        ],
        "key": "B"
      },
      {
        "no": 27,
        "text": "Sistem tanam paksa dikenal dengan istilah….",
        "options": [
          "Cultuurstelsel",
          "Rodi",
          "Etische Politiek",
          "Labelling"
        ],
        "key": "A"
      },
      {
        "no": 28,
        "text": "Penyebab utama penderitaan rakyat saat tanam paksa adalah….",
        "options": [
          "Bebas memilih tanaman",
          "Tidak ada pajak",
          "Kerja berat dan hasil tani dirampas",
          "Perdagangan meningkat"
        ],
        "key": "C"
      },
      {
        "no": 29,
        "text": "Politik etis berisi tiga program kecuali….",
        "options": [
          "Migrasi",
          "Edukasi",
          "Irigasi",
          "Militerisasi"
        ],
        "key": "D"
      },
      {
        "no": 30,
        "text": "Tujuan kolonialisme adalah….",
        "options": [
          "Memajukan negara jajahan",
          "Menguasai sumber daya",
          "Membantu perdagangan",
          "Memberi kemerdekaan"
        ],
        "key": "B"
      }
    ]
  },
  {
    "code": "IPS-IX",
    "title": "IPS KELAS IX — ASAS MTs Assibyan",
    "subject": "Ilmu Pengetahuan Sosial (IPS)",
    "classLevel": "IX",
    "schedule": "Sabtu, 28 November 2026, Jam Ke-1 (07.30 – 09.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 3,
    "questions": [
      {
        "no": 1,
        "text": "Globalisasi adalah….",
        "options": [
          "Penyempitan ruang gerak negara",
          "Hilangnya hubungan antarnegara",
          "Mendunianya informasi, teknologi, dan hubungan antarnegara",
          "Penutupan diri dari negara lain"
        ],
        "key": "C"
      },
      {
        "no": 2,
        "text": "Faktor utama pendorong globalisasi adalah….",
        "options": [
          "Pendidikan rendah",
          "Kemajuan teknologi transportasi dan komunikasi",
          "Perang antarnegara",
          "Ketergantungan pada impor"
        ],
        "key": "B"
      },
      {
        "no": 3,
        "text": "Dampak positif globalisasi dalam bidang ekonomi adalah….",
        "options": [
          "Produk lokal tidak laku",
          "Kompetisi tidak sehat",
          "Investasi asing meningkat",
          "Perdagangan macet"
        ],
        "key": "C"
      },
      {
        "no": 4,
        "text": "Salah satu dampak negatif globalisasi pada budaya adalah….",
        "options": [
          "Semakin cinta produk lokal",
          "Masuknya budaya asing yang buruk",
          "Melestarikan budaya bangsa",
          "Hidup lebih hemat"
        ],
        "key": "B"
      },
      {
        "no": 5,
        "text": "Contoh kerjasama internasional di bidang pendidikan adalah….",
        "options": [
          "Ekspor hasil tambang",
          "Impor barang elektronik",
          "Pertukaran pelajar",
          "Kerja sama militer"
        ],
        "key": "C"
      },
      {
        "no": 6,
        "text": "Lembaga internasional yang menangani masalah perdamaian dunia adalah….",
        "options": [
          "ASEAN",
          "PBB",
          "WTO",
          "IMF"
        ],
        "key": "B"
      },
      {
        "no": 7,
        "text": "WTO bergerak di bidang….",
        "options": [
          "Perdamaian dunia",
          "Perdagangan internasional",
          "Keuangan pendidikan",
          "Olahraga"
        ],
        "key": "B"
      },
      {
        "no": 8,
        "text": "Kerja sama dua negara disebut kerja sama….",
        "options": [
          "Regional",
          "Universal",
          "Bilateral",
          "Multilateral"
        ],
        "key": "C"
      },
      {
        "no": 9,
        "text": "ASEAN dibentuk pada tanggal….",
        "options": [
          "17 Agustus 1945",
          "10 November 1947",
          "8 Agustus 1967",
          "5 Oktober 1965"
        ],
        "key": "C"
      },
      {
        "no": 10,
        "text": "Indonesia termasuk negara pendiri ASEAN bersama….",
        "options": [
          "Laos",
          "Brunei",
          "Myanmar",
          "Thailand"
        ],
        "key": "D"
      },
      {
        "no": 11,
        "text": "Perdagangan internasional terjadi karena….",
        "options": [
          "Negara sama kebutuhan",
          "Semua negara punya sumber daya sama",
          "Perbedaan sumber daya dan kemampuan produksi",
          "Negara tidak membutuhkan barang"
        ],
        "key": "C"
      },
      {
        "no": 12,
        "text": "Ekspor adalah kegiatan….",
        "options": [
          "Membeli barang dari luar negeri",
          "Menjual barang ke luar negeri",
          "Menimbun barang di dalam negeri",
          "Mengirim barang antarprovinsi"
        ],
        "key": "B"
      },
      {
        "no": 13,
        "text": "Impor artinya….",
        "options": [
          "Menjual ke luar negeri",
          "Membuang barang sisa produksi",
          "Membeli barang dari luar negeri",
          "Menimbun barang"
        ],
        "key": "C"
      },
      {
        "no": 14,
        "text": "Berikut contoh barang ekspor Indonesia adalah….",
        "options": [
          "Telepon genggam",
          "Mobil mewah",
          "Kelapa sawit",
          "Pesawat jet"
        ],
        "key": "C"
      },
      {
        "no": 15,
        "text": "Tujuan perdagangan internasional adalah….",
        "options": [
          "Membatasi perdagangan",
          "Mengurangi hubungan negara",
          "Memenuhi kebutuhan yang tidak bisa diproduksi sendiri",
          "Mengurangi devisa"
        ],
        "key": "C"
      },
      {
        "no": 16,
        "text": "Devisa adalah….",
        "options": [
          "Uang yang dipakai di pasar lokal",
          "Cadangan beras negara",
          "Alat pembayaran luar negeri",
          "Pajak perdagangan"
        ],
        "key": "C"
      },
      {
        "no": 17,
        "text": "Impor yang terlalu besar dapat menyebabkan….",
        "options": [
          "Devisa meningkat",
          "Mata uang menguat",
          "Industri lokal tertekan",
          "Produk lokal berkembang"
        ],
        "key": "C"
      },
      {
        "no": 18,
        "text": "Hambatan perdagangan internasional disebut….",
        "options": [
          "Tarif",
          "Kredit",
          "Produksi",
          "Pendapatan"
        ],
        "key": "A"
      },
      {
        "no": 19,
        "text": "Negara yang mengekspor hasil industri maju disebut negara….",
        "options": [
          "Berkembang",
          "Terbelakang",
          "Industri",
          "Agraris"
        ],
        "key": "C"
      },
      {
        "no": 20,
        "text": "Contoh kerja sama internasional Indonesia adalah….",
        "options": [
          "Membeli barang dari tetangga",
          "Gotong royong",
          "Ekspor gas ke Jepang",
          "Kerja bakti"
        ],
        "key": "C"
      },
      {
        "no": 21,
        "text": "Sensus penduduk dilakukan setiap….",
        "options": [
          "3 tahun",
          "5 tahun",
          "10 tahun",
          "15 tahun"
        ],
        "key": "C"
      },
      {
        "no": 22,
        "text": "Kepadatan penduduk adalah….",
        "options": [
          "Banyaknya kelahiran",
          "Banyaknya penduduk per km²",
          "Banyaknya pendatang",
          "Pertumbuhan industri"
        ],
        "key": "B"
      },
      {
        "no": 23,
        "text": "Urbanisasi adalah perpindahan penduduk dari….",
        "options": [
          "Kota ke desa",
          "Desa ke kota",
          "Kota ke luar negeri",
          "Luar negeri ke desa"
        ],
        "key": "B"
      },
      {
        "no": 24,
        "text": "Faktor pendorong urbanisasi adalah….",
        "options": [
          "Fasilitas desa lengkap",
          "Lapangan kerja di desa sedikit",
          "Pendapatan kota rendah",
          "Pendidikan desa tinggi"
        ],
        "key": "B"
      },
      {
        "no": 25,
        "text": "Masalah yang timbul akibat urbanisasi berlebihan adalah….",
        "options": [
          "Kota semakin sepi",
          "Lahan pertanian meningkat",
          "Munculnya pemukiman kumuh",
          "Desa semakin maju"
        ],
        "key": "C"
      },
      {
        "no": 26,
        "text": "Piramida penduduk muda menunjukkan….",
        "options": [
          "Penduduk tua dominan",
          "Angka kelahiran tinggi",
          "Angka kelahiran rendah",
          "Angka kematian tinggi"
        ],
        "key": "B"
      },
      {
        "no": 27,
        "text": "Piramida penduduk stasioner menunjukkan….",
        "options": [
          "Laju pertumbuhan tinggi",
          "Pertumbuhan penduduk rendah",
          "Jumlah anak sangat besar",
          "Jumlah penduduk tua lebih banyak"
        ],
        "key": "B"
      },
      {
        "no": 28,
        "text": "Transmigrasi adalah perpindahan penduduk dari….",
        "options": [
          "Desa ke kota",
          "Pulau padat ke pulau jarang penduduk",
          "Kota ke luar negeri",
          "Negara ke negara"
        ],
        "key": "B"
      },
      {
        "no": 29,
        "text": "Bonus demografi adalah….",
        "options": [
          "Penduduk tua mendominasi",
          "Penduduk produktif lebih banyak dari nonproduktif",
          "Laju kelahiran menurun",
          "Banyak pengangguran"
        ],
        "key": "B"
      },
      {
        "no": 30,
        "text": "Dampak positif bonus demografi adalah….",
        "options": [
          "Berkurangnya tenaga kerja",
          "Produktivitas meningkat",
          "Tingkat kemiskinan naik",
          "Pendidikan menurun"
        ],
        "key": "B"
      }
    ]
  },
  {
    "code": "PJOK-VII",
    "title": "PJOK KELAS VII — ASAS MTs Assibyan",
    "subject": "PJOK",
    "classLevel": "VII",
    "schedule": "Sabtu, 28 November 2026, Jam Ke-2 (10.00 – 11.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 3,
    "questions": [
      {
        "no": 1,
        "text": "Start yang digunakan untuk perlombaan lari jarak pendek adalah….",
        "options": [
          "Start jongkok",
          "Start berdiri",
          "Start melayang",
          "Start bebas"
        ],
        "key": "A"
      },
      {
        "no": 2,
        "text": "Pada perlombaan lari jarak pendek, pelari boleh berlari pada saat….",
        "options": [
          "Aba-aba atlet “Bersedia Siap”",
          "Aba-aba “Siap”",
          "Aba-aba “Bersedia”",
          "Aba-aba “Ya” / bunyi pistol start"
        ],
        "key": "D"
      },
      {
        "no": 3,
        "text": "Gerakan seorang pelari jarak pendek saat memasuki garis finish adalah….",
        "options": [
          "Melompat ke depan",
          "Menengok lawannya ke belakang",
          "Kecepatan lari diperlambat",
          "Lari secepat-cepatnya"
        ],
        "key": "D"
      },
      {
        "no": 4,
        "text": "Seorang pelari dinyatakan sebagai pemenang apabila….",
        "options": [
          "Melakukan start dengan baik",
          "Berlari dengan cepat",
          "Sikap yang baik",
          "Memasuki garis finish pertama"
        ],
        "key": "D"
      },
      {
        "no": 5,
        "text": "Seorang atlet lari jarak pendek disebut juga dengan….",
        "options": [
          "Starter",
          "Pelari",
          "Sprinter",
          "Finisher"
        ],
        "key": "C"
      },
      {
        "no": 6,
        "text": "Dalam lompat jauh, teknik yang digunakan untuk mendapatkan kecepatan saat melompat adalah….",
        "options": [
          "Teknik awalan",
          "Teknik tumpuan",
          "Teknik sikap di udara",
          "Teknik mendarat"
        ],
        "key": "A"
      },
      {
        "no": 7,
        "text": "Nomor lari 5.000 m dan 10.000 m termasuk lari….",
        "options": [
          "Jarak menengah",
          "Marathon",
          "Jarak jauh",
          "Jarak pendek"
        ],
        "key": "C"
      },
      {
        "no": 8,
        "text": "Nilai-nilai yang terkandung di dalam pencak silat adalah….",
        "options": [
          "Seni budaya",
          "Keilmuan",
          "Pendekatan",
          "Kesenangan"
        ],
        "key": "A"
      },
      {
        "no": 9,
        "text": "Bagian tubuh yang dapat dijadikan sasaran dan bernilai dalam pertandingan silat adalah….",
        "options": [
          "Tangan",
          "Leher",
          "Dada",
          "Lengan"
        ],
        "key": "C"
      },
      {
        "no": 10,
        "text": "Induk organisasi pencak silat nasional adalah….",
        "options": [
          "IPSI",
          "PSSI",
          "PASI",
          "IAAF"
        ],
        "key": "A"
      },
      {
        "no": 11,
        "text": "Gerakan yang berfungsi untuk melatih kekuatan otot tangan dan dada adalah….",
        "options": [
          "Lompat jauh",
          "Sit-up",
          "Back-up",
          "Push-up"
        ],
        "key": "D"
      },
      {
        "no": 12,
        "text": "Gerakan “sit-up” merupakan latihan untuk meningkatkan kekuatan otot….",
        "options": [
          "Tangan",
          "Perut",
          "Punggung",
          "Kaki"
        ],
        "key": "B"
      },
      {
        "no": 13,
        "text": "Saat melakukan sit-up yang baik adalah bagian kaki….",
        "options": [
          "Harus diluruskan",
          "Harus ditekuk",
          "Harus dibuka",
          "Diangkat tinggi"
        ],
        "key": "B"
      },
      {
        "no": 14,
        "text": "Latihan sikap lilin dilakukan dari posisi….",
        "options": [
          "Berlari",
          "Berdiri",
          "Duduk",
          "Terlentang"
        ],
        "key": "D"
      },
      {
        "no": 15,
        "text": "Renang gaya bebas sering disebut dengan istilah….",
        "options": [
          "Back crawl",
          "Breaststroke",
          "Crawl",
          "Dolphin"
        ],
        "key": "C"
      },
      {
        "no": 16,
        "text": "Dalam permainan sepak bola agar tendangan bola yang dihasilkan melambung maka perkenaan kaki pada bola harus di bagian….",
        "options": [
          "Bawah bola",
          "Samping bola",
          "Atas bola",
          "Tengah bola"
        ],
        "key": "A"
      },
      {
        "no": 17,
        "text": "Bagian yang digunakan untuk menghentikan bola yang menyusur tanah dalam permainan sepak bola adalah….",
        "options": [
          "Kaki bagian luar",
          "Kaki bagian dalam",
          "Lutut",
          "Paha"
        ],
        "key": "B"
      },
      {
        "no": 18,
        "text": "Tendangan bebas dalam permainan sepak bola disebut….",
        "options": [
          "Free kick",
          "Corner kick",
          "Throw in",
          "Outside"
        ],
        "key": "A"
      },
      {
        "no": 19,
        "text": "Apabila seorang penjaga/pemain bertahan melakukan pelanggaran di dalam daerah gawang maka akan diadakan hukuman tendangan….",
        "options": [
          "Sudut",
          "Gawang",
          "Penalti",
          "Bebas"
        ],
        "key": "C"
      },
      {
        "no": 20,
        "text": "Satu regu dalam permainan bola voli berjumlah….",
        "options": [
          "6 orang",
          "5 orang",
          "4 orang",
          "12 orang"
        ],
        "key": "A"
      },
      {
        "no": 21,
        "text": "Pukulan pertama kali untuk memulai permainan dalam bola voli disebut….",
        "options": [
          "Passing",
          "Servis",
          "Smash",
          "Spike"
        ],
        "key": "B"
      },
      {
        "no": 22,
        "text": "Smash dalam permainan bola voli berarti….",
        "options": [
          "Mengumpan bola",
          "Pukulan keras",
          "Sajian pertama",
          "Membendung lawan"
        ],
        "key": "B"
      },
      {
        "no": 23,
        "text": "Dalam permainan bola voli, kita mengenal istilah blocking, yang artinya….",
        "options": [
          "Pukulan keras",
          "Pergeseran tempat",
          "Membendung serangan lawan",
          "Pergeseran pemain"
        ],
        "key": "C"
      },
      {
        "no": 24,
        "text": "Latihan kekuatan untuk tujuan melatih kekuatan otot kaki adalah….",
        "options": [
          "Back Up",
          "Squat Jump",
          "Sit-up",
          "Push up"
        ],
        "key": "B"
      },
      {
        "no": 25,
        "text": "Latihan kekuatan untuk tujuan menguatkan otot punggung adalah….",
        "options": [
          "Push Up",
          "Back Up",
          "Squat jump",
          "Sit-up"
        ],
        "key": "B"
      },
      {
        "no": 26,
        "text": "Operan dalam permainan bola basket disebut….",
        "options": [
          "Pivot",
          "Lay-up shot",
          "Dribble",
          "Passing"
        ],
        "key": "D"
      },
      {
        "no": 27,
        "text": "Memasukkan bola ke ring basket sambil berlari melangkah lebar dan melompat disebut….",
        "options": [
          "Pivot",
          "Dribble",
          "Lay-up shoot",
          "Passing"
        ],
        "key": "C"
      },
      {
        "no": 28,
        "text": "Menggiring bola dalam permainan bola basket disebut….",
        "options": [
          "Pivot",
          "Lay-up shot",
          "Dribble",
          "Passing"
        ],
        "key": "C"
      },
      {
        "no": 29,
        "text": "Alat pemukul bola (kok) dalam permainan bulu tangkis disebut….",
        "options": [
          "Bet",
          "Raket",
          "Stik",
          "Glove"
        ],
        "key": "B"
      },
      {
        "no": 30,
        "text": "Latihan senam kayang bertujuan untuk melatih….",
        "options": [
          "Kelenturan",
          "Kekuatan",
          "Endurance",
          "Kelincahan"
        ],
        "key": "A"
      }
    ]
  },
  {
    "code": "PJOK-VIII",
    "title": "PJOK KELAS VIII — ASAS MTs Assibyan",
    "subject": "PJOK",
    "classLevel": "VIII",
    "schedule": "Sabtu, 28 November 2026, Jam Ke-2 (10.00 – 11.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 3,
    "questions": [
      {
        "no": 1,
        "text": "Kaki yang digunakan untuk menahan bola diputar ke luar, sehingga kaki bagian dalam menghadap ke arah datangnya bola. Teknik ini merupakan cara menahan bola menggunakan….",
        "options": [
          "Kura-kura kaki",
          "Punggung kaki",
          "Kaki bagian dalam",
          "Kaki bagian luar"
        ],
        "key": "C"
      },
      {
        "no": 2,
        "text": "Badan bagian atas dicondongkan ke belakang dengan dada ditarik ke depan. Teknik ini merupakan cara menahan bola menggunakan….",
        "options": [
          "Paha",
          "Dada",
          "Kepala",
          "Kaki bagian luar"
        ],
        "key": "B"
      },
      {
        "no": 3,
        "text": "Berikut ini adalah gerakan menghentikan bola dalam permainan sepak bola, kecuali….",
        "options": [
          "Menghentikan bola dengan telapak kaki",
          "Menghentikan bola dengan dada",
          "Menghentikan bola dengan paha",
          "Menghentikan bola dengan tumit"
        ],
        "key": "D"
      },
      {
        "no": 4,
        "text": "Permainan bola voli diciptakan pada tahun 1895 oleh orang berkebangsaan Amerika, yaitu….",
        "options": [
          "James A. Naismith",
          "William G. Morgan",
          "George Handcock",
          "W.C. Wingfield"
        ],
        "key": "B"
      },
      {
        "no": 5,
        "text": "Dalam permainan bola voli, gerakan kedua kaki terbuka, lutut ditekuk, kedua lengan lurus dijulurkan ke depan bawah dan tangan satu sama lain dikaitkan atau berpegangan, ini merupakan gerakan….",
        "options": [
          "Servis",
          "Smash",
          "Passing bawah",
          "Passing atas"
        ],
        "key": "C"
      },
      {
        "no": 6,
        "context": "Perhatikan urutan servis di bawah ini!\n(1) Telapak tangan menghadap bola dan tangan ditegangkan atau tangan menggenggam untuk mendapat pantulan yang sempurna\n(2) Bola dipegang dengan salah satu tangan\n(3) Setelah bola melambung kira-kira setinggi pinggang, lengan diayunkan lurus ke depan untuk memukul bola\n(4) Berdiri di daerah servis dengan salah satu kaki lebih ke depan daripada kaki yang lain\n(5) Bola dilambungkan tidak terlalu tinggi, tangan yang lain ditarik ke bawah belakang",
        "text": "Urutan yang sesuai untuk melakukan teknik dasar servis bawah bola voli adalah….",
        "options": [
          "(4)-(5)-(2)-(3)-(1)",
          "(4)-(2)-(5)-(1)-(3)",
          "(4)-(5)-(2)-(1)-(3)",
          "(4)-(2)-(5)-(3)-(1)"
        ],
        "key": "D"
      },
      {
        "no": 7,
        "text": "Dalam suatu pertandingan bola basket, Dikri melakukan tembakan sebanyak 2x dari luar garis three points, 4x dalam garis three points (2 poin) dan 3x lemparan bebas (1 poin). Berapa poin yang didapatkannya?",
        "options": [
          "15 poin",
          "16 poin",
          "17 poin",
          "18 poin"
        ],
        "key": "C"
      },
      {
        "no": 8,
        "text": "Ukuran lapangan bola basket standar adalah….",
        "options": [
          "9 x 15 meter",
          "30 x 15 meter",
          "28 x 15 meter",
          "10 x 20 meter"
        ],
        "key": "C"
      },
      {
        "no": 9,
        "text": "Operan ke teman seregu dengan cara operan melalui depan dada dalam permainan bola basket disebut….",
        "options": [
          "Chest Pass",
          "Bounce Pass",
          "Over Head Pass",
          "Base Pass"
        ],
        "key": "A"
      },
      {
        "no": 10,
        "text": "Yang tidak termasuk alat yang digunakan dalam permainan bola kasti adalah….",
        "options": [
          "Pemukul",
          "Bola kasti",
          "Tiang hinggap",
          "Bola tenis"
        ],
        "key": "D"
      },
      {
        "no": 11,
        "text": "Di bawah ini adalah gerakan dasar bermain kasti, kecuali….",
        "options": [
          "Melempar bola",
          "Shooting",
          "Menangkap bola",
          "Memukul bola"
        ],
        "key": "B"
      },
      {
        "no": 12,
        "text": "Jenis lemparan yang digunakan untuk melempar bola ke arah pemukul dalam permainan kasti adalah….",
        "options": [
          "Lemparan melambung",
          "Lemparan mendatar",
          "Lemparan menyusur tanah",
          "Lemparan samping"
        ],
        "key": "B"
      },
      {
        "no": 13,
        "text": "Cara melakukan permainan bulu tangkis dengan tujuan menerbangkan shuttlecock pada awal permainan menuju bidang lapangan lawan disebut….",
        "options": [
          "Jenis pukulan",
          "Teknik pukulan",
          "Pukulan servis",
          "Variasi pukulan"
        ],
        "key": "C"
      },
      {
        "no": 14,
        "text": "Pukulan dalam permainan bulu tangkis yang dilakukan dengan tujuan untuk menerbangkan shuttlecock setinggi mungkin mengarah jauh ke belakang garis lapangan dinamakan….",
        "options": [
          "Pukulan servis",
          "Pukulan drive",
          "Pukulan dropshot",
          "Pukulan lob"
        ],
        "key": "D"
      },
      {
        "no": 15,
        "text": "Induk organisasi nasional permainan bulu tangkis adalah….",
        "options": [
          "PBVSI",
          "PBTSI",
          "PSSI",
          "PBSI"
        ],
        "key": "D"
      },
      {
        "no": 16,
        "text": "Gerakan memukul bola dengan mendorong dan sikap bet terbuka dalam permainan tenis meja adalah….",
        "options": [
          "Push",
          "Drive",
          "Block",
          "Stance"
        ],
        "key": "A"
      },
      {
        "no": 17,
        "text": "Induk organisasi nasional permainan tenis meja adalah….",
        "options": [
          "PTSI",
          "PTMSI",
          "ATMSI",
          "FTMSI"
        ],
        "key": "B"
      },
      {
        "no": 18,
        "text": "Ukuran panjang dan lebar meja pada permainan tenis meja adalah….",
        "options": [
          "3,74 x 1,52 meter",
          "4,74 x 1,52 meter",
          "2,74 x 1,52 meter",
          "2,74 x 2,52 meter"
        ],
        "key": "C"
      },
      {
        "no": 19,
        "text": "Perbedaan antara jalan dengan lari terletak pada….",
        "options": [
          "Cara kaki menapak",
          "Kecondongan badan",
          "Panjang langkah",
          "Memasuki garis finish"
        ],
        "key": "A"
      },
      {
        "no": 20,
        "text": "Start yang digunakan dalam lari jarak pendek adalah….",
        "options": [
          "Start melayang",
          "Start jongkok",
          "Start berdiri",
          "Start berlari"
        ],
        "key": "B"
      },
      {
        "no": 21,
        "text": "Yang termasuk nomor lari jarak pendek dalam cabang olahraga atletik adalah….",
        "options": [
          "100 m, 200 m, 300 m",
          "100 m, 200 m, 400 m",
          "200 m, 400 m, 800 m",
          "200 m, 400 m, 1600 m"
        ],
        "key": "B"
      },
      {
        "no": 22,
        "text": "Gaya tolak peluru di mana awalan menyamping sudut lemparan dinamakan….",
        "options": [
          "Gaya Ortodoks",
          "Gaya O'Brien",
          "Gaya Side arm",
          "Gaya Butterfly"
        ],
        "key": "A"
      },
      {
        "no": 23,
        "text": "Cara memegang peluru yang benar adalah peluru diletakkan pada….",
        "options": [
          "Ibu jari dan kelingking",
          "Pangkal jari-jari tangan",
          "Telapak tangan",
          "Ujung jari-jari tangan"
        ],
        "key": "B"
      },
      {
        "no": 24,
        "text": "Gaya tolak peluru di mana awalan membelakangi sudut lemparan dinamakan….",
        "options": [
          "Gaya Ortodoks",
          "Gaya O'Brien",
          "Gaya Glide",
          "Gaya Butterfly"
        ],
        "key": "B"
      },
      {
        "no": 25,
        "text": "Cara pembelaan dengan mengadakan kontak langsung terhadap serangan lawan dalam pencak silat dinamakan….",
        "options": [
          "Serangan",
          "Pembelaan",
          "Tangkisan",
          "Elakan"
        ],
        "key": "C"
      },
      {
        "no": 26,
        "text": "Induk organisasi pencak silat di Indonesia ialah….",
        "options": [
          "PPSI",
          "IPSI",
          "Tapak Suci",
          "TTKKDH"
        ],
        "key": "B"
      },
      {
        "no": 27,
        "text": "Gerakan menjatuhkan lawan yang dilakukan dengan menjepit kedua tungkai kaki pada sasaran leher, pinggang, atau tungkai lawan sehingga lawan terjatuh dalam pencak silat dinamakan….",
        "options": [
          "Tendangan",
          "Bantingan",
          "Guntingan",
          "Pukulan"
        ],
        "key": "C"
      },
      {
        "no": 28,
        "text": "Kemampuan tubuh melakukan penyesuaian terhadap pembebanan fisik yang diberikan kepadanya dari kerja yang dilakukan sehari-hari tanpa menimbulkan kelelahan yang berlebihan disebut….",
        "options": [
          "Kebugaran jasmani",
          "Ketahanan tubuh",
          "Daya tahan tubuh",
          "Kekuatan tubuh"
        ],
        "key": "A"
      },
      {
        "no": 29,
        "text": "Kemampuan untuk melakukan perpindahan tempat dari satu tempat ke tempat yang lainnya dalam waktu yang sesingkat-singkatnya dinamakan….",
        "options": [
          "Daya tahan",
          "Kecepatan",
          "Kelenturan",
          "Kelincahan"
        ],
        "key": "B"
      },
      {
        "no": 30,
        "text": "Kemampuan tubuh melakukan aktivitas secara berulang-ulang tanpa merasa letih dalam jangka waktu lama disebut….",
        "options": [
          "Kebugaran jasmani",
          "Stamina",
          "Daya tahan",
          "Kekuatan"
        ],
        "key": "C"
      }
    ]
  },
  {
    "code": "PJOK-IX",
    "title": "PJOK KELAS IX — ASAS MTs Assibyan",
    "subject": "PJOK",
    "classLevel": "IX",
    "schedule": "Sabtu, 28 November 2026, Jam Ke-2 (10.00 – 11.30 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 3,
    "questions": [
      {
        "no": 1,
        "text": "Dalam sebuah pertandingan sepak bola, tugas dan tanggung jawab pemain sesuai dengan posisi masing-masing. Tugas pemain bertahan adalah menjaga daerah pertahanan agar tidak mudah ditembus lawan, tugas penjaga gawang adalah menjaga gawang agar tidak bisa dibobol oleh lawan, adapun membobol gawang lawan adalah tugas utama dari….",
        "options": [
          "Pemain gelandang",
          "Pemain tengah",
          "Pemain penyerang",
          "Pemain cadangan"
        ],
        "key": "C"
      },
      {
        "no": 2,
        "context": "Berikut ini adalah daftar istilah dalam olahraga permainan:\n- Kick off – Throw in – Goal kick – Corner kick – Free kick – Off side – Passing – Pivot",
        "text": "Manakah kelompok yang memuat istilah yang BUKAN berasal dari permainan sepak bola….",
        "options": [
          "Kick off, throw in, goal kick",
          "Corner kick, free kick, off side",
          "Goal kick, free kick, passing",
          "Off side, throw in, pivot"
        ],
        "key": "D"
      },
      {
        "no": 3,
        "text": "Jika dalam suatu kejuaraan sepak bola dengan menggunakan sistem kompetisi, nilai yang diperoleh setiap tim jika berhasil mengalahkan tim lawan adalah 3 (tiga), dan tim yang kalah mendapatkan nilai 0 (nol), berapakah nilai yang diperoleh tim jika hasil pertandingan imbang (draw)….",
        "options": [
          "Satu",
          "Dua",
          "Tiga",
          "Empat"
        ],
        "key": "A"
      },
      {
        "no": 4,
        "context": "Perhatikan daftar bola permainan bola besar berikut!\n(1) Bola Voli\n(2) Bola Basket\n(3) Bola Sepak (bercorak segi lima hitam-putih)\n(4) Bola Rugby / American Football",
        "text": "Manakah nomor bola yang dipakai untuk olahraga permainan sepak bola….",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "key": "C"
      },
      {
        "no": 5,
        "text": "Pemain penyerang berada lebih dekat ke garis gawang lawan dibanding pemain bertahan lawan saat bola akan dioper kepadanya adalah pengertian dari pelanggaran ..., di mana wasit akan menghentikan permainan kemudian memulai lagi dengan cara….",
        "options": [
          "Out side, memulai lagi dengan free kick di tempat kejadian untuk tim bertahan",
          "In side, memulai lagi dengan free kick di tempat kejadian untuk tim bertahan",
          "On side, memulai lagi dengan free kick di tempat kejadian untuk tim bertahan",
          "Off side, memulai kembali dengan free kick di tempat kejadian untuk tim bertahan"
        ],
        "key": "D"
      },
      {
        "no": 6,
        "text": "Tugas seorang wasit 1 dalam sebuah pertandingan bola voli di antaranya yaitu memimpin pertandingan, menghentikan dan memulai kembali permainan. Adapun salah satu tugas seorang wasit 2 adalah….",
        "options": [
          "Memberi sinyal ke wasit 1 jika terjadi salah posisi pemain",
          "Memberi sinyal ke wasit 1 jika terjadi bola keluar",
          "Memberi sinyal ke wasit 1 jika terjadi bola masuk",
          "Memberi sinyal ke wasit 1 jika terjadi keributan"
        ],
        "key": "A"
      },
      {
        "no": 7,
        "text": "Permainan bola basket pertama kali diciptakan oleh Dr. James Naismith pada tahun 1891, sedangkan permainan bola voli pertama kali diciptakan oleh William George Morgan pada tahun 1895 di YMCA. Sebelum menjadi nama bola voli, apakah nama olahraga permainan ini pada awal diciptakan….",
        "options": [
          "Softball",
          "Mintonette",
          "Baseball",
          "Badminton"
        ],
        "key": "B"
      },
      {
        "no": 8,
        "text": "Pemain yang bertugas untuk menerima bola pertama (bertahan) dalam permainan bola voli adalah libero, adapun yang mengatur penyerangan dan memberi umpan kepada pemain untuk melakukan smash adalah tugas dari pemain….",
        "options": [
          "Tosser / Set-upper",
          "Blocker",
          "Spiker",
          "Server"
        ],
        "key": "A"
      },
      {
        "no": 9,
        "text": "Dalam permainan bola basket, skor tertinggi saat memasukkan bola ke ring lawan adalah saat tembakannya dilakukan dari luar garis daerah pertahanan lawan (luar busur three point). Tembakan tersebut bernilai ... poin.",
        "options": [
          "1 poin",
          "3 poin",
          "2 poin",
          "4 poin"
        ],
        "key": "B"
      },
      {
        "no": 10,
        "text": "Jika dalam sebuah pertandingan bola basket seorang pemain penyerang berada di daerah bersyarat (keyhole) pertahanan lawan terlalu lama tanpa proses tembakan, maka akan dikenakan peraturan….",
        "options": [
          "1 detik",
          "5 detik",
          "3 detik",
          "7 detik"
        ],
        "key": "C"
      },
      {
        "no": 11,
        "text": "Di suatu pertandingan bola basket salah seorang pemain sedang melakukan dribbling yang tidak benar (double/travelling), maka wasit akan menghentikan permainan serta memulai lagi dengan cara….",
        "options": [
          "Tembakan bebas untuk tim lawan",
          "Lemparan ke dalam diambil dari garis samping lapangan yang paling dekat oleh tim lawan",
          "Tembakan bebas di tempat kejadian pelanggaran",
          "Lemparan ke dalam oleh pemain yang melakukan pelanggaran"
        ],
        "key": "B"
      },
      {
        "no": 12,
        "context": "Perhatikan tabel skor cabang olahraga berikut!\n• Tenis meja : Skor 11 poin (3 set kemenangan)\n• Bulu tangkis : Skor [ ?? ] (2 set kemenangan)\n• Bola voli : Skor 25 poin (3 set kemenangan)",
        "text": "Berapakah skor standar tiap set pada permainan bulu tangkis….",
        "options": [
          "21 poin",
          "22 poin",
          "23 poin",
          "24 poin"
        ],
        "key": "A"
      },
      {
        "no": 13,
        "context": "Perhatikan daftar bola/alat permainan bola kecil berikut!\n(1) Bola Tenis Lapangan\n(2) Bola Kasti / Baseball\n(3) Kok (Shuttlecock)\n(4) Bola Tenis Meja (Pingpong)",
        "text": "Manakah nomor bola/alat yang dipakai untuk permainan bulu tangkis….",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "key": "C"
      },
      {
        "no": 14,
        "text": "Setiap cabang olahraga memiliki induk organisasi masing-masing. Adapun induk organisasi cabang olahraga bulu tangkis di Indonesia adalah….",
        "options": [
          "PERBASI",
          "PBVSI",
          "PSSI",
          "PBSI"
        ],
        "key": "D"
      },
      {
        "no": 15,
        "context": "Perhatikan tabel partai pertandingan bulu tangkis berikut!\n1. Putra — Tunggal (Single)\n2. Putra — Ganda (Double)\n3. Putri — Tunggal (Single)\n4. Putri — Ganda (Double)\n5. [ ??? ] — Ganda (Double)",
        "text": "Kategori yang tepat untuk melengkapi tanda [ ??? ] pada partai kelima bulu tangkis adalah….",
        "options": [
          "Putra",
          "Putri",
          "Campuran / Mix",
          "Tunggal"
        ],
        "key": "C"
      },
      {
        "no": 16,
        "text": "Tugas seorang pitcher (pelambung) adalah sebagai pelempar bola bagi pemukul, di mana bola yang dilempar idealnya paling tinggi sejajar dengan bahu dan paling rendah setinggi lutut pemukul. Adapun pelambung (pitcher) dalam olahraga softball dilakukan oleh….",
        "options": [
          "Diri sendiri",
          "Pemain satu tim",
          "Pemain lawan",
          "Wasit"
        ],
        "key": "C"
      },
      {
        "no": 17,
        "context": "Daftar istilah olahraga:\nMenendang – memukul – pelambung – menangkap – pitcher – catcher – short stop – first baseman – second baseman – third baseman – melempar – mendorong – berguling – smash – blocking – sliding – lob – guling perut.",
        "text": "Manakah yang seluruhnya merupakan istilah-istilah dalam olahraga softball….",
        "options": [
          "Menangkap, memukul, mendorong",
          "Melempar, menendang, berguling",
          "Pitcher, catcher, memukul",
          "First baseman, second baseman, smash"
        ],
        "key": "C"
      },
      {
        "no": 18,
        "text": "Permainan sepak bola dan bola basket dibatasi oleh waktu bermain, sedangkan bola voli dan bulu tangkis dibatasi oleh poin. Jika dalam permainan softball satu tim melakukan giliran memukul (menyerang) satu kali serta bertahan (menjaga) satu kali, maka disebut satu….",
        "options": [
          "Inning",
          "Menyerang-bertahan",
          "Strike",
          "Defensive-offensive"
        ],
        "key": "A"
      },
      {
        "no": 19,
        "text": "Berdasarkan jarak yang diperlombakan, nomor lari dalam atletik dibagi menjadi tiga kategori utama yaitu lari jarak….",
        "options": [
          "Dekat, tanggung, jauh",
          "Pendek, menengah, jauh",
          "Lari santai, lari menengah, lari jauh",
          "Jogging, running, speed"
        ],
        "key": "B"
      },
      {
        "no": 20,
        "text": "Teknik start dalam perlombaan lari jarak pendek adalah menggunakan start jongkok, sedangkan untuk lari jarak jauh menggunakan start….",
        "options": [
          "Berdiri",
          "Guling",
          "Melayang",
          "Lompat"
        ],
        "key": "A"
      },
      {
        "no": 21,
        "text": "Untuk nomor lari jarak menengah, jarak yang dilombakan antara lain….",
        "options": [
          "1.500 m",
          "10.000 m",
          "400 m",
          "100 m"
        ],
        "key": "A"
      },
      {
        "no": 22,
        "context": "Perhatikan tabel teknik start Lari Estafet (4 x 100 m / 4 x 400 m) berikut!\n• Pelari 1 : Start Jongkok\n• Pelari 2 : [ ?? ]\n• Pelari 3 : Start Melayang\n• Pelari 4 : Start Melayang",
        "text": "Dalam lari estafet (lari sambung), Pelari 1 menggunakan start jongkok, sedangkan Pelari 2 menggunakan….",
        "options": [
          "Start berdiri",
          "Start melayang",
          "Start jongkok",
          "Start lompat"
        ],
        "key": "B"
      },
      {
        "no": 23,
        "text": "Posisi badan yang membuat pelari dapat berlari semakin cepat yaitu….",
        "options": [
          "Menunduk",
          "Condong ke depan",
          "Tegak",
          "Membungkuk"
        ],
        "key": "B"
      },
      {
        "no": 24,
        "text": "Ketika menerima tongkat estafet dengan cara tidak melihat (non-visual), maka penerima harus menjulurkan tangannya ke arah….",
        "options": [
          "Samping kiri",
          "Belakang",
          "Depan",
          "Samping kanan"
        ],
        "key": "B"
      },
      {
        "no": 25,
        "text": "Cara pemindahan tongkat estafet di mana pelari penerima tongkat menerima tanpa menoleh ke belakang dinamakan cara….",
        "options": [
          "Non-visual",
          "Visual",
          "Non-blind",
          "Blind"
        ],
        "key": "A"
      },
      {
        "no": 26,
        "text": "Induk organisasi pencak silat nasional adalah….",
        "options": [
          "PSI",
          "PSSI",
          "PERSILAT",
          "IPSI"
        ],
        "key": "D"
      },
      {
        "no": 27,
        "text": "Program latihan fisik harus direncanakan dengan baik dan sistematis serta ditujukan untuk….",
        "options": [
          "Meningkatkan pertumbuhan badan",
          "Meningkatkan kesegaran jasmani dan kemampuan fungsional organ tubuh",
          "Pencegahan terhadap wabah penyakit",
          "Menanggulangi serangan penyakit"
        ],
        "key": "B"
      },
      {
        "no": 28,
        "text": "Di bawah ini merupakan bentuk-bentuk latihan kelincahan (agility), kecuali….",
        "options": [
          "Shuttle run",
          "Lari bolak-balik",
          "Zig-zag run",
          "Lari naik turun tangga"
        ],
        "key": "D"
      },
      {
        "no": 29,
        "text": "Gerakannya dimulai dari posisi badan telungkup, kaki rapat dan kedua tangan berpasangan di belakang kepala kemudian mengangkat badan bagian atas hingga dada tidak menyentuh lantai. Gerakan tersebut merupakan latihan….",
        "options": [
          "Push up",
          "Sit up",
          "Back up",
          "Pull up"
        ],
        "key": "C"
      },
      {
        "no": 30,
        "text": "Latihan kebugaran jasmani yang dilakukan secara teratur akan membantu seseorang mengurangi risiko penyakit….",
        "options": [
          "HIV/AIDS",
          "Jantung",
          "Liver",
          "Paru-paru"
        ],
        "key": "B"
      }
    ]
  },
  {
    "code": "NAHWU-VII",
    "title": "NAHWU SHOROF KELAS VII — ASAS MTs Assibyan",
    "subject": "Nahwu Shorof",
    "classLevel": "VII",
    "schedule": "Sabtu, 28 November 2026, Jam Ke-3 (11.30 – 13.00 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 5,
    "questions": [
      {
        "no": 1,
        "text": "Ucapan yang mengandung sebagian huruf hijaiyah merupakan pengertian dari….",
        "options": [
          "Lafadz",
          "Kalam",
          "Murokkab",
          "Mufid"
        ],
        "key": "A"
      },
      {
        "no": 2,
        "text": "Menjadikan lafadz agar menunjukkan suatu makna dengan disengaja (menggunakan bahasa Arab) merupakan pengertian dari….",
        "options": [
          "Lafadz",
          "Murokkab",
          "Mufid",
          "Wadho’ / Kalam"
        ],
        "key": "D"
      },
      {
        "no": 3,
        "text": "Kalimah (unsur penyusun kalam) terbagi menjadi tiga bagian di bawah ini, kecuali….",
        "options": [
          "Isim",
          "Fi’il",
          "Huruf",
          "Wadho’"
        ],
        "key": "D"
      },
      {
        "no": 4,
        "text": "Kalimah yang menunjukkan makna mandiri (dengan dirinya sendiri) dan tidak disertai dengan pengertian zaman (waktu) adalah pengertian dari….",
        "options": [
          "Isim",
          "Fi’il",
          "Huruf",
          "Semua salah"
        ],
        "key": "A"
      },
      {
        "no": 5,
        "text": "Di bawah ini contoh kalimah fi’il, kecuali….",
        "options": [
          "كَتَبَ",
          "يَكْتُبُ",
          "اُكْتُبْ",
          "كِتَابٌ"
        ],
        "key": "D"
      },
      {
        "no": 6,
        "text": "Ada berapakah pembagian I’rob dalam ilmu Nahwu….",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "key": "C"
      },
      {
        "no": 7,
        "text": "Lafadz ضَرَبَ - يَضْرِبُ (Fathun - Kasrun) termasuk tsulatsi mujarrod bab ke….",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "key": "B"
      },
      {
        "no": 8,
        "text": "Apa shighotnya lafadz لَا تَنْصُرْ ….",
        "options": [
          "Fi’il Madhi",
          "Fi’il Mudhore’",
          "Fi’il Amr",
          "Fi’il Nahi"
        ],
        "key": "D"
      },
      {
        "no": 9,
        "text": "Apa shighotnya lafadz وَعَدَ ….",
        "options": [
          "Fi’il Madhi",
          "Fi’il Mudhore’",
          "Fi’il Amr",
          "Fi’il Nahi"
        ],
        "key": "A"
      },
      {
        "no": 10,
        "text": "Apa isim fa’ilnya lafadz وَجَبَ ….",
        "options": [
          "وَاجِبٌ",
          "يَجِبُ",
          "وُجُوْبًا",
          "جِبْ"
        ],
        "key": "A"
      },
      {
        "no": 11,
        "text": "Pengertian tasyrif (تَصْرِيْف) menurut bahasa adalah….",
        "options": [
          "Perubahan akhir kalimah",
          "Perubahan bentuk",
          "Perubahan lafadz",
          "Semua salah"
        ],
        "key": "B"
      },
      {
        "no": 12,
        "text": "Perubahan dengan memindah asal yang satu kepada contoh-contoh yang berbeda dengan memandang makna yang dikehendaki adalah pengertian dari….",
        "options": [
          "Tashrif menurut istilah",
          "Tashrif menurut lughowi",
          "Wazan",
          "Mauzun"
        ],
        "key": "A"
      },
      {
        "no": 13,
        "text": "Ada berapa bab fi’il dalam tsulatsi mujarrod….",
        "options": [
          "2",
          "6",
          "4",
          "8"
        ],
        "key": "B"
      },
      {
        "no": 14,
        "text": "Ada berapa jumlah huruf mudhoro’ah (أ ن ي ت)….",
        "options": [
          "2",
          "6",
          "4",
          "8"
        ],
        "key": "C"
      },
      {
        "no": 15,
        "text": "Difathahkan ‘ain fi’il madhinya dan didhommahkan ‘ain fi’il mudhorenya (فَعَلَ - يَفْعُلُ) adalah ciri dari fi’il tsulatsi mujarrod bab ke….",
        "options": [
          "1",
          "3",
          "2",
          "4"
        ],
        "key": "A"
      },
      {
        "no": 16,
        "text": "Menentukan kalimah dengan memandang huruf, harokat dan sukunnya kalimah adalah pengertian dari….",
        "options": [
          "Tashrif",
          "Bina’",
          "Wazan",
          "Muthobaqoh"
        ],
        "key": "B"
      },
      {
        "no": 17,
        "text": "Bina’ apa yang terdapat pada lafadz فَعَلَ / نَصَرَ….",
        "options": [
          "Shohih",
          "Ajwaf",
          "Mudho’af",
          "Mitsal"
        ],
        "key": "A"
      },
      {
        "no": 18,
        "text": "Ada berapakah jumlah huruf ‘illat (و ا ي)….",
        "options": [
          "1",
          "3",
          "2",
          "4"
        ],
        "key": "B"
      },
      {
        "no": 19,
        "text": "Di bawah ini adalah ciri dari bab tsulatsi mujarrod dari bab 1 sampai dengan bab 6, kecuali….",
        "options": [
          "Fathun - Dhommun",
          "Fathun - Fathun (Fathatani)",
          "Fathun - Kasrun",
          "Kasrun - Dhommun"
        ],
        "key": "D"
      },
      {
        "no": 20,
        "text": "Di bawah ini yang termasuk huruf mudhoro’ah, kecuali….",
        "options": [
          "Nun (ن)",
          "Ya (ي)",
          "Wawu (و)",
          "Ta (ت)"
        ],
        "key": "C"
      }
    ]
  },
  {
    "code": "NAHWU-VIII",
    "title": "NAHWU SHOROF KELAS VIII — ASAS MTs Assibyan",
    "subject": "Nahwu Shorof",
    "classLevel": "VIII",
    "schedule": "Sabtu, 28 November 2026, Jam Ke-3 (11.30 – 13.00 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 5,
    "questions": [
      {
        "no": 1,
        "text": "Perubahan akhir kalimah karena perbedaan ‘amil yang memasukinya, baik secara lafadz atau perkiraan (taqdir) adalah pengertian dari….",
        "options": [
          "Kalam",
          "I’rob",
          "Isim",
          "Fi’il"
        ],
        "key": "B"
      },
      {
        "no": 2,
        "text": "Lafadz yang berubah dari bentuk mufradnya untuk menunjukkan arti banyak (tiga atau lebih) adalah pengertian dari….",
        "options": [
          "Isim Mufrad",
          "Jamak Taksir",
          "Jamak Muannats Salim",
          "Semua salah"
        ],
        "key": "B"
      },
      {
        "no": 3,
        "text": "Di bawah ini adalah pembagian i’rob, kecuali….",
        "options": [
          "Rofa’",
          "Nashab",
          "Lafadz",
          "Jazm"
        ],
        "key": "C"
      },
      {
        "no": 4,
        "text": "Tanda-tanda kalimah isim disebutkan di bawah ini, kecuali….",
        "options": [
          "Khafadh / Jer",
          "Tanwin",
          "Alif Lam (ال)",
          "Lafadz"
        ],
        "key": "D"
      },
      {
        "no": 5,
        "text": "Di bawah ini contoh kalimah fi’il, kecuali….",
        "options": [
          "كَتَبَ",
          "يَكْتُبُ",
          "اُكْتُبْ",
          "كِتَابٌ"
        ],
        "key": "D"
      },
      {
        "no": 6,
        "text": "Ada berapakah pembagian I’rob….",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "key": "C"
      },
      {
        "no": 7,
        "text": "Ada berapakah tanda-tanda bagi I’rob Rofa’ (Dhommah, Wawu, Alif, Nun)….",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "key": "C"
      },
      {
        "no": 8,
        "text": "Apa shighotnya lafadz لَا تَنْصُرْ ….",
        "options": [
          "Fi’il Madhi",
          "Fi’il Mudhore’",
          "Fi’il Amr",
          "Fi’il Nahi"
        ],
        "key": "D"
      },
      {
        "no": 9,
        "text": "Apa shighotnya lafadz وَعَدَ ….",
        "options": [
          "Fi’il Madhi",
          "Fi’il Mudhore’",
          "Fi’il Amr",
          "Fi’il Nahi"
        ],
        "key": "A"
      },
      {
        "no": 10,
        "text": "Apa isim fa’ilnya lafadz وَجَبَ ….",
        "options": [
          "وَاجِبٌ",
          "يَجِبُ",
          "وُجُوْبًا",
          "جِبْ"
        ],
        "key": "A"
      },
      {
        "no": 11,
        "text": "Pengertian tasyrif (تَصْرِيْف) menurut bahasa adalah….",
        "options": [
          "Perubahan akhir kalimah",
          "Perubahan bentuk",
          "Perubahan lafadz",
          "Semua salah"
        ],
        "key": "B"
      },
      {
        "no": 12,
        "text": "Perubahan dengan memindah asal yang satu kepada contoh-contoh yang berbeda dengan memandang makna yang dikehendaki adalah pengertian dari….",
        "options": [
          "Tashrif menurut istilah",
          "Tashrif menurut lughowi",
          "Wazan",
          "Mauzun"
        ],
        "key": "A"
      },
      {
        "no": 13,
        "text": "Ada berapa bab fi’il dalam tsulatsi mujarrod….",
        "options": [
          "2",
          "6",
          "4",
          "8"
        ],
        "key": "B"
      },
      {
        "no": 14,
        "text": "Ada berapa jumlah huruf mudhoro’ah (أ ن ي ت)….",
        "options": [
          "2",
          "6",
          "4",
          "8"
        ],
        "key": "C"
      },
      {
        "no": 15,
        "text": "Difathahkan ‘ain fi’il madhinya dan didhommahkan ‘ain fi’il mudhorenya (فَعَلَ - يَفْعُلُ) adalah ciri dari fi’il tsulatsi mujarrod bab ke….",
        "options": [
          "1",
          "3",
          "2",
          "4"
        ],
        "key": "A"
      },
      {
        "no": 16,
        "text": "Menentukan kalimah dengan memandang huruf, harokat dan sukunnya kalimah adalah pengertian dari….",
        "options": [
          "Tashrif",
          "Bina’",
          "Wazan",
          "Muthobaqoh"
        ],
        "key": "B"
      },
      {
        "no": 17,
        "text": "Bina’ apa yang terdapat pada lafadz فَعَلَ / نَصَرَ….",
        "options": [
          "Shohih",
          "Ajwaf",
          "Mudho’af",
          "Mitsal"
        ],
        "key": "A"
      },
      {
        "no": 18,
        "text": "Ada berapakah jumlah huruf ‘illat (و ا ي)….",
        "options": [
          "1",
          "3",
          "2",
          "4"
        ],
        "key": "B"
      },
      {
        "no": 19,
        "text": "Di bawah ini adalah ciri dari bab tsulatsi mujarrod dari bab 1 sampai dengan bab 6, kecuali….",
        "options": [
          "Fathun - Dhommun",
          "Fathun - Fathun (Fathatani)",
          "Fathun - Kasrun",
          "Kasrun - Dhommun"
        ],
        "key": "D"
      },
      {
        "no": 20,
        "text": "Di bawah ini yang termasuk huruf mudhoro’ah, kecuali….",
        "options": [
          "Nun (ن)",
          "Ya (ي)",
          "Wawu (و)",
          "Ta (ت)"
        ],
        "key": "C"
      }
    ]
  },
  {
    "code": "NAHWU-IX",
    "title": "NAHWU SHOROF KELAS IX — ASAS MTs Assibyan",
    "subject": "Nahwu Shorof",
    "classLevel": "IX",
    "schedule": "Sabtu, 28 November 2026, Jam Ke-3 (11.30 – 13.00 WIB)",
    "duration": "90 Menit",
    "pointsPerQuestion": 5,
    "questions": [
      {
        "no": 1,
        "text": "Lafadz yang tersusun dan memberikan faidah dengan disengaja dengan menggunakan bahasa Arab adalah pengertian dari….",
        "options": [
          "Lafadz",
          "Murokkab",
          "Kalam",
          "Mufid"
        ],
        "key": "C"
      },
      {
        "no": 2,
        "text": "Setiap ucapan yang membatalkan shalat yang berupa satu huruf yang memahamkan atau dua huruf walaupun tidak memberi paham adalah pengertian kalam menurut….",
        "options": [
          "Istilah",
          "Ulama fiqh",
          "Ulama nahwu",
          "Ulama ahli ushul"
        ],
        "key": "B"
      },
      {
        "no": 3,
        "text": "Kalimah yang menunjukkan makna dengan membutuhkan kalimah lain disebut….",
        "options": [
          "Kalam",
          "Isim",
          "Fi’il",
          "Huruf"
        ],
        "key": "D"
      },
      {
        "no": 4,
        "text": "Di bawah ini contoh kalimah isim, kecuali….",
        "options": [
          "اللهُ",
          "مُحَمَّدٌ",
          "فَعَلَ",
          "بَيْتٌ"
        ],
        "key": "C"
      },
      {
        "no": 5,
        "text": "Susunan lafadz yang terdiri dari mudhof dan mudhof ilaihi disebut….",
        "options": [
          "Tarkib mazji",
          "Tarkib taushifi",
          "Tarkib idhofi",
          "Tarkib taqyidi"
        ],
        "key": "C"
      },
      {
        "no": 6,
        "text": "Dua kalimah yang disusun dan dijadikan satu kalimah disebut….",
        "options": [
          "Tarkib mazji",
          "Tarkib taushifi",
          "Tarkib idhofi",
          "Tarkib taqyidi"
        ],
        "key": "A"
      },
      {
        "no": 7,
        "text": "Kalimah yang menunjukkan makna dengan dirinya sendiri disertai salah satu dari 3 zaman adalah pengertian dari….",
        "options": [
          "Isim",
          "Huruf",
          "Fi’il",
          "Lafadz"
        ],
        "key": "C"
      },
      {
        "no": 8,
        "text": "Kalimah terbagi menjadi 3 bagian, yaitu….",
        "options": [
          "Isim, fi’il dan huruf",
          "Fi’il, huruf dan mufid",
          "Isim, fi’il dan lafadz",
          "Isim, huruf dan murokkab"
        ],
        "key": "A"
      },
      {
        "no": 9,
        "text": "Hukum asal dalam kalimah isim adalah….",
        "options": [
          "Mabni",
          "Muhmal",
          "Mu’rob",
          "Semua salah"
        ],
        "key": "C"
      },
      {
        "no": 10,
        "text": "Ada berapa zaman yang terdapat pada fi’il mudhore’….",
        "options": [
          "1",
          "3",
          "2",
          "4"
        ],
        "key": "C"
      },
      {
        "no": 11,
        "text": "Pengertian tasyrif (تَصْرِيْف) menurut bahasa adalah….",
        "options": [
          "Perubahan akhir kalimah",
          "Perubahan bentuk",
          "Perubahan lafadz",
          "Semua salah"
        ],
        "key": "B"
      },
      {
        "no": 12,
        "text": "Perubahan dengan memindah asal yang satu kepada contoh-contoh yang berbeda dengan memandang makna yang dikehendaki adalah pengertian dari….",
        "options": [
          "Tashrif menurut istilah",
          "Tashrif menurut lughowi",
          "Wazan",
          "Mauzun"
        ],
        "key": "A"
      },
      {
        "no": 13,
        "text": "Ada berapa bab fi’il dalam tsulatsi mujarrod….",
        "options": [
          "2",
          "6",
          "4",
          "8"
        ],
        "key": "B"
      },
      {
        "no": 14,
        "text": "Ada berapa jumlah huruf mudhoro’ah (أ ن ي ت)….",
        "options": [
          "2",
          "6",
          "4",
          "8"
        ],
        "key": "C"
      },
      {
        "no": 15,
        "text": "Difathahkan ‘ain fi’il madhinya dan didhommahkan ‘ain fi’il mudhorenya (فَعَلَ - يَفْعُلُ) adalah ciri dari fi’il tsulatsi mujarrod bab ke….",
        "options": [
          "1",
          "3",
          "2",
          "4"
        ],
        "key": "A"
      },
      {
        "no": 16,
        "text": "Menentukan kalimah dengan memandang huruf, harokat dan sukunnya kalimah adalah pengertian dari….",
        "options": [
          "Tashrif",
          "Bina’",
          "Wazan",
          "Muthobaqoh"
        ],
        "key": "B"
      },
      {
        "no": 17,
        "text": "Bina’ apa yang terdapat pada lafadz فَعَلَ / نَصَرَ….",
        "options": [
          "Shohih",
          "Ajwaf",
          "Mudho’af",
          "Mitsal"
        ],
        "key": "A"
      },
      {
        "no": 18,
        "text": "Ada berapakah jumlah huruf ‘illat (و ا ي)….",
        "options": [
          "1",
          "3",
          "2",
          "4"
        ],
        "key": "B"
      },
      {
        "no": 19,
        "text": "Di bawah ini adalah ciri dari bab tsulatsi mujarrod dari bab 1 sampai dengan bab 6, kecuali….",
        "options": [
          "Fathun - Dhommun",
          "Fathun - Fathun (Fathatani)",
          "Fathun - Kasrun",
          "Kasrun - Dhommun"
        ],
        "key": "D"
      },
      {
        "no": 20,
        "text": "Di bawah ini yang termasuk huruf mudhoro’ah, kecuali….",
        "options": [
          "Nun (ن)",
          "Ya (ي)",
          "Wawu (و)",
          "Ta (ت)"
        ],
        "key": "C"
      }
    ]
  }
];
