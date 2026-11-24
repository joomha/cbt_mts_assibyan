# Arsitektur Teknis Sistem CBT dengan Proctoring (Next.js + Vercel)

Dokumen brief arsitektur untuk implementasi oleh developer atau AI coding agent - Versi 1.0 - 21 November 2026

## 1. Tujuan, Konteks, dan Ruang Lingkup

**Tujuan.** Aplikasi web Computer Based Test (CBT) tempat siswa mengerjakan ujian dari browser HP, sementara guru atau pengawas memantau secara real-time dari aplikasi yang sama dengan login role berbeda. Sistem mendeteksi siswa yang keluar dari halaman ujian, merekam snapshot kamera, mengunci sesi otomatis sesuai kebijakan, dan menyerahkan keputusan akhir kepada guru.

**Sumber daya yang sudah ada:** Next.js, domain sendiri, hosting Vercel, Google Apps Script, dan Google Spreadsheet.

**Pengguna:** siswa (mayoritas HP Android, sebagian mungkin iPhone), guru/pengawas, dan admin.

**Di luar ruang lingkup:** lockdown total perangkat, pencegahan HP kedua, dan pengganti pengawasan fisik. Sistem ini mendeteksi, menyulitkan, dan mengumpulkan bukti. Jangan menjanjikan lebih dari itu kepada pengguna.

## 2. Batasan Teknis yang Menentukan Desain

Bagian ini wajib dibaca sebelum implementasi karena seluruh keputusan arsitektur di bawah berasal dari sini.

1. **Browser tidak bisa mencegah siswa pindah tab atau aplikasi.** Sistem hanya bisa mendeteksi lalu bereaksi (kunci layar, peringatan, auto-submit).
2. **Vercel bersifat serverless dan tidak menjalankan server WebSocket yang persisten.** Komunikasi real-time memakai layanan terkelola (Supabase Realtime), bukan Socket.IO di dalam Next.js.
3. **Google Sheets dan Apps Script bukan database operasional.** Latensi, kuota, dan konkurensinya tidak cocok untuk heartbeat, autosave jawaban, atau log pelanggaran. Keduanya hanya dipakai sebagai pintu impor soal dan ekspor rekap nilai.
4. **Browser HP menangguhkan halaman yang masuk background.** JavaScript melambat atau berhenti dan stream kamera bisa mati. Klien tidak boleh menjadi satu-satunya sumber laporan; server memakai heartbeat dan lease untuk mendeteksi siswa yang menghilang.
5. **Screenshot layar tidak mungkin di browser HP** (getDisplayMedia tidak tersedia). Bukti visual hanya berasal dari kamera depan.
6. **Split-screen, floating window, dan overlay di Android bisa membuat halaman tetap terlihat aktif.** Mitigasi di web: pantau perubahan ukuran viewport dan blur. Penutupan penuh baru tercapai dengan aplikasi pembungkus Android (Fase 4).
7. **Semua keputusan diambil di server.** Klien hanya melaporkan kejadian dan menjalankan perintah. Event dari klien dianggap petunjuk yang bisa dipalsukan.
8. **Kamera butuh HTTPS dan izin pengguna.** Browser bawaan aplikasi lain (WebView di WhatsApp, Instagram, dan sejenisnya) sering memblokir kamera. Deteksi in-app browser dan wajibkan Chrome atau Safari.
9. **Fullscreen API tidak tersedia untuk elemen biasa di iPhone Safari**, jadi pelanggaran fullscreen hanya berlaku di platform yang mendukung.

## 3. Stack yang Direkomendasikan

- **Next.js (App Router, TypeScript)** untuk UI siswa, dashboard guru, dan API (Route Handlers), di-deploy ke Vercel dengan domain yang ada.
- **Supabase** (Postgres, Auth, Realtime, Storage) sebagai tulang punggung data. Cocok dengan Vercel, menggantikan server WebSocket, dan Row Level Security membantu isolasi data antar peran.
- **Upstash Redis** (opsional, akses via REST) untuk rate limiting dan state panas yang sering ditulis.
- **MediaPipe Tasks Vision** (WASM, di klien) untuk deteksi wajah hilang atau lebih dari satu wajah.
- **LiveKit Cloud** (opsional, Fase 3) untuk video live ke guru atas permintaan.
- **Google Apps Script + Spreadsheet** sebagai jembatan impor soal dan ekspor rekap (bagian 10).
- **zod** untuk validasi input dan **Sentry** (opsional) untuk monitoring error.

Catatan hosting: periksa ketentuan plan Vercel (plan gratis ditujukan untuk penggunaan non-komersial) serta kuota function, bandwidth, Supabase Realtime, dan Storage terbaru sebelum hari ujian.

## 4. Arsitektur Tingkat Tinggi

```
Siswa (browser HP)                        Guru (browser)
  Next.js client (UI ujian)                 Next.js client (dashboard)
  - Kamera + MediaPipe                      - Grid snapshot
  - Detektor visibilitas/viewport           - Feed event realtime
  - Realtime channel + HTTP                 - Kontrol kunci/buka/akhiri
        |            ^                            |           ^
        v            | perintah                   v           |
  +-------------------------------------------------------------+
  |  Vercel: Next.js Route Handlers (pemegang keputusan)        |
  +-----------+----------------------+-----------------+--------+
              v                      v                 v
      Supabase Postgres      Supabase Realtime    Supabase Storage
      (state, jawaban, log)  (presence/broadcast) (snapshot)
              |
              v  (job batch)
      Google Apps Script <-> Google Spreadsheet (soal masuk, rekap keluar)
```

Prinsip: (1) state ujian disimpan di Postgres; (2) Realtime hanya untuk notifikasi cepat, bukan sumber kebenaran; (3) respons heartbeat selalu membawa status terbaru dan perintah tertunda, sehingga perintah kunci tetap sampai walaupun channel Realtime terputus.

## 5. Alur Kerja Inti

### 5.1 Mulai ujian

1. Siswa login (Supabase Auth). Server memeriksa kelas, jadwal, dan token ujian bila ada.
2. Pra-cek perangkat: bukan in-app browser, izin kamera aktif, koneksi stabil, persetujuan privasi sudah diterima, Wake Lock aktif jika didukung.
3. Klien memanggil POST /api/exams/\[id\]/start. Server membuat attempt dengan started\_at, ends\_at (started\_at + durasi, dibatasi closes\_at), seed pengacakan, dan session\_token. Token wajib dikirim di setiap request berikutnya. Login dari perangkat lain mengganti token dan memicu event DUPLICATE\_SESSION.
4. Soal dikirim tanpa kunci jawaban, diacak berdasarkan seed (urutan soal dan opsi berbeda per siswa, stabil saat reload).

### 5.2 Selama ujian

- **Autosave:** jawaban masuk antrean lokal (memori + IndexedDB) dan dikirim batch dengan debounce sekitar 2 detik lewat PUT /api/attempts/\[id\]/answers. Setiap jawaban membawa version agar urutan penulisan aman. Gagal kirim diulang otomatis dan tidak dianggap pelanggaran.
- **Timer:** waktu otoritatif ada di server (ends\_at). Klien menampilkan sisa waktu dari remainingSec yang dikembalikan heartbeat. Jawaban yang masuk setelah ends\_at ditambah toleransi kecil (mis. 10 detik) ditolak.
- Heartbeat dan lease (5.3), snapshot kamera (5.4), dan event pelanggaran (bagian 8) berjalan paralel.

### 5.3 Deteksi keluar halaman (tiga lapis)

- **Lapis 1, event klien (cepat):** visibilitychange, pagehide, blur/focus window, perubahan visualViewport/resize (indikasi split-screen), fullscreenchange (jika didukung), track kamera ended/mute, online/offline. Dikirim dengan fetch keepalive atau sendBeacon. Bisa gagal terkirim saat halaman dibekukan.
- **Lapis 2, heartbeat dan lease (andal):** klien mengirim ping ringan lewat channel Realtime sekitar tiap 5 detik (untuk tampilan guru) dan POST /api/attempts/\[id\]/heartbeat sekitar tiap 10 detik. Server memperbarui last\_seen\_at dan membalas {status, commands, remainingSec, serverTime}.
- **Lapis 3, evaluasi di server:** (a) saat heartbeat berikutnya tiba, jika selisih dari last\_seen\_at melebihi awayThresholdSec, server mencatat HEARTBEAT\_GAP beserta durasinya (deteksi retroaktif); (b) job terjadwal (pg\_cron di Supabase atau Vercel Cron, sesuaikan frekuensi dengan batas plan) menandai attempt AWAY bila lease habis dan belum ada heartbeat; (c) dashboard guru menghitung status diduga keluar dari last\_seen\_at secara lokal sehingga tampil cepat tanpa menunggu job.

### 5.4 Snapshot kamera

Klien menggambar frame video ke canvas, mengompres JPEG kualitas 0.5 sampai 0.6 dengan lebar sekitar 320 sampai 480 px, lalu mengunggah langsung ke Supabase Storage lewat signed upload URL (POST /api/attempts/\[id\]/snapshot-url), diikuti pencatatan metadata. Interval acak 20 sampai 40 detik agar tidak bisa diprediksi. Deteksi wajah (MediaPipe) berjalan di klien pada frekuensi rendah (sekitar 1 sampai 2 kali per detik) dan hanya mengirim event, bukan video.

### 5.5 Kunci, peringatan, dan buka kunci

Server mengubah status attempt menjadi LOCKED saat kebijakan terpenuhi atau guru memberi perintah. Klien mengetahuinya dari respons heartbeat atau channel Realtime attempt:{id}, lalu menampilkan layar penutup yang menyembunyikan soal. Guru membuka kunci atau mengakhiri sesi dari dashboard. Kunci otomatis tidak pernah menjadi sanksi final; keputusan akhir ada pada guru.

### 5.6 Submit dan penilaian

Submit dari klien, atau auto-submit oleh server saat ends\_at lewat (dijalankan job finalisasi dan juga secara lazy saat request terakhir tiba). Soal objektif dinilai di server dari answer\_key. Essay masuk antrean penilaian manual.

### 5.7 Dashboard guru

- **Grid siswa:** snapshot terbaru (refresh tiap 10 sampai 15 detik), status berwarna (aktif, diduga keluar, terkunci, selesai), skor pelanggaran, progres soal.
- **Feed event real-time** dari channel exam:{id}.
- **Kontrol:** kunci, buka kunci, kirim peringatan, tambah waktu, akhiri ujian siswa, tandai untuk tinjauan.
- **Panel siswa:** riwayat event, galeri snapshot, keputusan akhir dengan catatan.
- **Live video** (Fase 3) hanya untuk satu siswa yang dipilih guru, resolusi rendah.

## 6. State Machine Attempt

```
NOT_STARTED -> IN_PROGRESS   (start)
IN_PROGRESS -> AWAY          (lease habis / event keluar halaman)
AWAY        -> IN_PROGRESS   (heartbeat kembali, skor di bawah ambang)
AWAY        -> LOCKED        (skor melewati ambang kunci)
IN_PROGRESS -> LOCKED        (kebijakan atau perintah guru)
LOCKED      -> IN_PROGRESS   (guru membuka kunci)
IN_PROGRESS | AWAY | LOCKED -> SUBMITTED (siswa submit)
                             | AUTO_SUBMITTED (waktu habis)
                             | TERMINATED (guru mengakhiri)
```

Setiap transisi dicatat di proctor\_events dan hanya boleh dilakukan oleh kode server.

## 7. Skema Data (Postgres / Supabase)

```
profiles        id (= auth.users.id), role [student|teacher|admin], full_name, nis, class_id
classes         id, name
exams           id, title, created_by, duration_min, opens_at, closes_at,
                shuffle_questions, shuffle_options, policy (jsonb),
                access_token_hash, status [draft|published|closed]
exam_classes    exam_id, class_id
questions       id, exam_id, type [mcq|multi|essay], body (jsonb), options (jsonb),
                answer_key (jsonb, tidak pernah dikirim ke klien), points, tags, source_row
attempts        id, exam_id, student_id, status, started_at, ends_at, submitted_at,
                seed, last_seen_at, session_token_hash, violation_score, lock_reason,
                device_info (jsonb), score
answers         attempt_id, question_id, value (jsonb), version, updated_at
                PK (attempt_id, question_id)
proctor_events  id, attempt_id, type, severity, payload (jsonb), client_ts, server_ts
snapshots       id, attempt_id, storage_path, taken_at, flags (jsonb)
commands        id, attempt_id, issued_by, type [lock|unlock|warn|extend|terminate],
                payload, created_at, acked_at
consents        id, student_id, guardian_name, version, accepted_at, ip
audit_log       id, actor_id, action, target, meta, created_at
```

Indeks penting: proctor\_events (attempt\_id, server\_ts), attempts (exam\_id, status), unique attempts (exam\_id, student\_id) kecuali mode remedial.

**RLS:** siswa hanya membaca dan menulis attempt serta answers miliknya dan tidak bisa membaca answer\_key; guru hanya melihat ujian dan attempt di kelasnya; operasi sensitif (start, penilaian, command) lewat Route Handler dengan service role. Bucket snapshot privat, akses lewat signed URL berumur pendek.

## 8. Kontrak API dan Event

| Endpoint | Peran | Fungsi |
| --- | --- | --- |
| POST /api/exams/\[id\]/start | siswa | Membuat attempt, mengembalikan sesi dan session\_token |
| GET /api/attempts/\[id\]/questions | siswa | Soal terurut sesuai seed, tanpa kunci |
| PUT /api/attempts/\[id\]/answers | siswa | Upsert jawaban batch dengan version |
| POST /api/attempts/\[id\]/heartbeat | siswa | Perbarui last\_seen\_at; balas status, commands, remainingSec |
| POST /api/attempts/\[id\]/events | siswa | Kirim event pelanggaran |
| POST /api/attempts/\[id\]/snapshot-url | siswa | Signed upload URL, lalu catat metadata |
| POST /api/attempts/\[id\]/submit | siswa | Kumpulkan jawaban |
| POST /api/proctor/attempts/\[id\]/command | guru | lock, unlock, warn, extend, terminate |
| GET /api/proctor/exams/\[id\]/overview | guru | Ringkasan status semua siswa |
| POST /api/integrations/sheets/import-questions | Apps Script | Impor soal (autentikasi secret/HMAC) |
| POST /api/cron/finalize | Cron | Auto-submit, evaluasi lease, retensi (CRON\_SECRET) |

Tipe event dan bobot poin default:

| Event | Pemicu | Poin |
| --- | --- | --- |
| PAGE\_HIDDEN | visibilitychange hidden atau pagehide | 2 |
| WINDOW\_BLUR | blur tanpa hidden (overlay, notification shade, split-screen) | 1 |
| VIEWPORT\_SHRINK | visualViewport mengecil tiba-tiba | 2 |
| FULLSCREEN\_EXIT | keluar fullscreen (jika didukung) | 1 |
| HEARTBEAT\_GAP | lease habis, membawa durasi | 3 |
| CAMERA\_LOST | track kamera ended atau muted | 3 |
| FACE\_MISSING | tidak ada wajah lebih dari N detik | 1 |
| MULTI\_FACE | lebih dari satu wajah | 3 |
| DUPLICATE\_SESSION | login dari perangkat lain | 3 |
| CLIPBOARD / CONTEXTMENU | salin, tempel, klik kanan | 0 (info) |
| NETWORK\_OFFLINE | koneksi putus | 0 (info) |
| CLOCK\_SKEW | selisih jam klien dan server besar | 0 (info) |

## 9. Kebijakan Pelanggaran (Dapat Dikonfigurasi per Ujian)

```
awayThresholdSec: 25
heartbeatSec: 10
snapshotIntervalSec: [20, 40]
faceMissingAfterSec: 8
dedupeWindowSec: 15
points:
  PAGE_HIDDEN: 2
  HEARTBEAT_GAP: 3
  MULTI_FACE: 3
  CAMERA_LOST: 3
actions:
  - atScore: 3
    do: warn
  - atScore: 6
    do: lock            # dibuka oleh guru
  - atScore: 12
    do: flag_for_review
autoSubmitOnTerminate: false
```

Prinsip: skor naik per event berbobot; ambang memicu aksi bertahap (peringatan, kunci, tandai tinjauan); tidak ada sanksi final otomatis tanpa peninjauan guru; gangguan teknis (offline, error kamera sesaat) tidak menambah poin atau bobotnya kecil; event sejenis dalam jendela waktu pendek digabung (dedupe) agar satu insiden tidak berlipat.

## 10. Integrasi Google Spreadsheet dan Apps Script

**Impor soal (Spreadsheet ke aplikasi).** Guru menyusun soal di spreadsheet dengan kolom: no, tipe, pertanyaan, opsi A sampai E, kunci, poin, tag, url\_gambar. Menu kustom Apps Script (mis. CBT > Kirim soal) membaca baris lalu memanggil UrlFetchApp ke POST /api/integrations/sheets/import-questions. Server memvalidasi, melakukan upsert berdasarkan source\_row (idempoten), dan mengembalikan laporan error per baris yang ditulis kembali ke sheet.

**Ekspor rekap (aplikasi ke Spreadsheet).** Setelah ujian selesai, job di Next.js mengirim nilai dan ringkasan pelanggaran dalam satu batch ke Web App Apps Script (doPost), yang menulis sekali dengan setValues pada sheet Rekap. Jangan menulis per siswa saat ujian berlangsung.

**Keamanan jembatan.** Apps Script tidak bisa membaca header HTTP kustom pada doPost, jadi autentikasi dilakukan di body: secret bersama atau tanda tangan HMAC-SHA256 (Utilities.computeHmacSha256Signature) atas payload plus timestamp untuk mencegah replay. Simpan secret di Script Properties dan environment Vercel, bukan di kode. Uji perilaku redirect Web App saat dipanggil dari fetch server.

**Batas penggunaan.** Periksa kuota harian dan batas waktu eksekusi Apps Script serta batas API Sheets yang berlaku saat ini. Karena itu semua transfer dibuat batch dan tidak berada di jalur kritis ujian.

## 11. Fitur dan Prioritas

### Fase 1, MVP

- Login siswa/guru/admin, manajemen kelas dan ujian
- Soal pilihan ganda, pengacakan soal dan opsi per siswa, timer server, autosave
- Deteksi keluar halaman (3 lapis), heartbeat, lock/unlock oleh guru
- Snapshot kamera berkala, dashboard guru (grid, feed event, kontrol)
- Persetujuan privasi, rekap nilai, ekspor ke Spreadsheet, impor soal dari Spreadsheet

### Fase 2, penguatan

- Deteksi wajah hilang dan lebih dari satu wajah (MediaPipe), foto verifikasi awal
- Token ujian, lobby, dan mulai serentak berjendela acak (stagger)
- Mode linier (tanpa kembali ke soal sebelumnya) dan batas waktu per soal
- Watermark dinamis nama/NIS samar di layar soal untuk menyulitkan pemotretan soal
- Wake Lock agar layar tidak mati, pembatasan IP/jaringan sekolah (opsional)
- Tambah waktu individu, pesan siaran, soal essay dengan penilaian manual
- Tinjauan bukti dengan keputusan akhir dan catatan, laporan PDF per siswa, bank soal dan tag

### Fase 3, lanjutan

- Live video atas permintaan lewat LiveKit
- Analisis server (mis. deteksi HP di frame) sebagai tanda untuk ditinjau manusia
- Analitik butir soal, PWA dan antrean offline yang lebih tangguh

### Fase 4, aplikasi pembungkus

- Android (Kotlin atau Capacitor): lock task mode, FLAG\_SECURE, deteksi multi-window, Play Integrity
- iPhone: wajibkan Safe Exam Browser iOS dan verifikasi Browser Exam Key di server

## 12. Keamanan

- Kunci jawaban tidak pernah dikirim ke klien. Service role key hanya ada di server.
- Semua endpoint memeriksa role dan kepemilikan sumber daya; RLS sebagai lapis kedua.
- Rate limiting per attempt dan per IP (Upstash), validasi payload dengan zod, ukuran snapshot dibatasi.
- Satu sesi aktif per attempt (session\_token); login ganda tercatat sebagai event.
- Signed URL berumur pendek untuk unggah dan unduh snapshot; bucket privat.
- HTTPS saja, header keamanan (CSP, Permissions-Policy camera=(self)), cookie aman.
- Waktu klien tidak dipercaya; selisih jam dicatat sebagai informasi.
- Audit log untuk semua aksi guru/admin (kunci, buka kunci, ubah nilai, akses bukti).
- Pembatasan salin-tempel, klik kanan, dan seleksi teks hanya penghalang ringan, bukan kontrol keamanan.

## 13. Privasi dan Retensi Data

- Siswa dan orang tua/wali (bila siswa di bawah umur) menyetujui secara eksplisit sebelum kamera aktif. Halaman persetujuan menjelaskan apa yang direkam, tujuan, siapa yang bisa melihat, dan lama penyimpanan. Konfirmasikan kewajiban hukum (UU PDP No. 27/2022) dengan pihak sekolah atau penasihat hukum.
- Kumpulkan seminimal mungkin: snapshot beresolusi rendah, tanpa audio.
- Retensi dapat dikonfigurasi (mis. hapus snapshot 30 sampai 90 hari setelah nilai final) lewat job penghapusan terjadwal.
- Akses bukti hanya untuk guru terkait dan admin, tercatat di audit log.
- Siswa tidak dikenai sanksi hanya karena deteksi otomatis; ada proses tinjauan dan keberatan.

## 14. Skalabilitas dan Estimasi Beban

Rumus: beban per detik = jumlah peserta / interval. Contoh 300 peserta serentak:

- Heartbeat HTTP tiap 10 detik: sekitar 30 request/detik. Gunakan route ringan (pertimbangkan Edge runtime).
- Ping Realtime tiap 5 detik: sekitar 60 pesan/detik.
- Autosave (batch, rata-rata satu per 30 detik per siswa): sekitar 10 request/detik.
- Snapshot rata-rata tiap 30 detik dengan ukuran 30 sampai 60 KB: sekitar 10 unggahan/detik dan 1 sampai 2 GB per jam. Rencanakan kapasitas Storage dan retensi.
- Puncak terjadi saat mulai serentak: gunakan jendela mulai acak beberapa detik, prefetch soal, dan load test (mis. k6) sebelum hari H dengan skenario kamera aktif.
- Semua angka kuota vendor harus diverifikasi terhadap plan yang dipakai; jangan mengasumsikannya dari dokumen ini.

## 15. Struktur Proyek dan Environment

```
app/
  (auth)/login/
  exam/[attemptId]/        UI peserta (soal, kamera, detektor, lock overlay)
  proctor/[examId]/        dashboard guru
  admin/                   kelola kelas, ujian, impor, laporan
  api/
    exams/[id]/start/
    attempts/[id]/{questions,answers,heartbeat,events,snapshot-url,submit}/
    proctor/attempts/[id]/command/
    integrations/sheets/{import-questions,export-results}/
    cron/finalize/
lib/
  supabase/{client,server,admin}.ts
  proctoring/{detectors,policy,state-machine}.ts
  exam/{shuffle,grading,timer}.ts
  integrations/sheets.ts
  security/{rate-limit,hmac}.ts
```

Environment variable: NEXT\_PUBLIC\_SUPABASE\_URL, NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY, SUPABASE\_SERVICE\_ROLE\_KEY (hanya server), UPSTASH\_REDIS\_REST\_URL, UPSTASH\_REDIS\_REST\_TOKEN, SHEETS\_WEBHOOK\_SECRET, APPS\_SCRIPT\_EXPORT\_URL, CRON\_SECRET, dan LIVEKIT\_\* (Fase 3).

## 16. Pengujian dan Kriteria Penerimaan

Uji di perangkat nyata (Android Chrome dan iPhone Safari), bukan hanya emulator. Skenario wajib:

- Pindah tab/aplikasi, tarik bayangan notifikasi, panggilan masuk, layar mati, split-screen
- Jaringan putus lalu pulih, kamera ditutup atau izinnya dicabut, reload di tengah ujian
- Login dari dua perangkat, jam HP diubah, buka lewat in-app browser
- Waktu habis saat offline, submit ganda, request setelah ends\_at

Kriteria penerimaan:

- Jawaban tidak hilang saat reload atau offline singkat.
- Siswa yang menghilang lebih lama dari awayThresholdSec tercatat dan terlihat guru dalam waktu wajar.
- Perintah kunci sampai ke siswa walaupun channel Realtime putus (lewat heartbeat).
- Kunci jawaban tidak pernah muncul di response jaringan klien.
- Guru tidak bisa melihat data ujian yang bukan miliknya.
- Simulasi beban 300 peserta berjalan tanpa error berarti.

## 17. Risiko dan Keputusan Terbuka

**Risiko:** throttling background di browser HP; false positive yang merugikan siswa; celah split-screen Android; HP berspesifikasi rendah menjadi lambat karena kamera plus deteksi wajah (mitigasi: frekuensi dinamis, nonaktifkan deteksi wajah di perangkat lemah); perubahan kuota vendor.

**Keputusan yang perlu dikonfirmasi pemilik sistem:**

1. Ujian dilakukan di kelas dengan pengawasan fisik atau dari rumah? di kelas, dengan pengawasan fisik
2. Berapa peserta serentak dan seberapa sering ujian berlangsung? 51 peserta serentak, 120 menit x 3 perhari dan jeda antar sesi 10 menit
3. Jenis soal: pilihan ganda saja atau termasuk essay? PG semua
4. Plan Vercel dan Supabase apa yang akan dipakai? free tier
5. Apakah Fase 4 (aplikasi Android) dibutuhkan setelah evaluasi Fase 1? bisa saja, tapi paling pakai expo go. intinya PWA juga boleh

