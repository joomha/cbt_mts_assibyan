# Panduan Lengkap Setup & Penggunaan CBT MTs Assibyan

Aplikasi **Computer Based Test (CBT) MTs Assibyan** ini telah dikonfigurasi penuh dengan:
- **9 Paket Soal Asli MTs Assibyan (Total 230 Soal Pilihan Ganda)** lengkap dengan teks Bahasa Arab berharakat jelas (`Amiri`), garis bawah soal, dan ilustrasi gambar:
  1. Bahasa Arab Kelas VII (20 Soal)
  2. Bahasa Arab Kelas VIII (25 Soal)
  3. Baca Tulis Qur'an / BTQ Kelas VII (30 Soal)
  4. Baca Tulis Qur'an / BTQ Kelas VIII (25 Soal)
  5. Aqidah Akhlak Kelas VII (30 Soal)
  6. Akidah Akhlak Kelas VIII (25 Soal)
  7. Fiqih Kelas VII (25 Soal)
  8. Fiqih Kelas VIII (25 Soal)
  9. Al-Qur'an Hadits Kelas VIII (25 Soal)
- **Login Siswa:** Menggunakan **NAMA SISWA (HURUF KAPITAL)** dan **NOMOR PESERTA** (sebagai password).
- **Sistem Proctoring 3-Pelanggaran (Tanpa Wajib Kamera):**
  - **Pelanggaran 1 (1/3):** Muncul **Peringatan Pertama (Kuning)** saat siswa keluar tab/buka aplikasi lain/split-screen.
  - **Pelanggaran 2 (2/3):** Muncul **Peringatan Keras "MERAH"** penuh layar (Kesempatan Terakhir).
  - **Pelanggaran 3 (3/3):** Soal **Submit Otomatis (Auto-Submit)** dan langsung dinilai.
- **Integrasi Google Spreadsheet:** Menyimpan Nilai Akhir, Jumlah Benar/Salah/Kosong, Waktu Mulai & Selesai, **Lama Waktu Mengerjakan**, serta Riwayat Pelanggaran secara otomatis.

---

## 1. Cara Menjalankan di Komputer Lokal

Buka terminal / PowerShell di folder proyek ini, lalu jalankan:

```bash
npm run dev
```

Kemudian buka browser ke **`http://localhost:3000`**.

### Akun Uji Coba Bawaan:
- **Login Siswa (Contoh):**
  - Nama Siswa: `AHMAD FAUZI` — Nomor Peserta: `202507001` (Kelas VII)
  - Nama Siswa: `MUHAMMAD RIZKI` — Nomor Peserta: `202508001` (Kelas VIII)
  - *(Catatan: Anda juga bisa langsung mengetik Nama Kapital & Nomor Peserta baru apa saja, sistem otomatis mendaftarkannya!)*
- **Login Pengawas / Admin:**
  - Klik tombol **"Akses Pengawas / Admin"** di pojok kanan atas
  - Username: `ADMIN`
  - Kata Sandi: `ASSIBYAN2026`

---

## 2. Tutorial Menghubungkan ke Google Spreadsheet (3 Menit)

Agar setiap siswa yang selesai ujian otomatis tercatat **Nilai**, **Lama Waktu Mengerjakan**, dan **Pelanggarannya** ke Google Spreadsheet:

1. Buka [Google Sheets](https://sheets.google.com) dan buat **Spreadsheet baru** (beri nama misal: `Rekap Nilai CBT MTs Assibyan 2025/2026`).
2. Di menu bagian atas Spreadsheet, klik **Extensions (Ekstensi)** → **Apps Script**.
3. Hapus kode kosong yang ada di `Code.gs`, lalu **salin dan tempel seluruh isi file [`google-apps-script/Code.gs`](./google-apps-script/Code.gs)** dari folder proyek ini.
4. Klik ikon **Save (Simpan / Disket)** di atas.
5. Klik tombol biru **Deploy** (di kanan atas) → pilih **New deployment (Deployment baru)**.
6. Klik ikon roda gigi di samping *Select type*, lalu pilih **Web app**:
   - **Description:** `Jembatan Rekap CBT MTs Assibyan`
   - **Execute as:** `Me` (Saya)
   - **Who has access:** **`Anyone` (Siapa saja)** *(Penting: wajib pilih Anyone agar server Vercel/Next.js bisa mengirim data nilai)*.
7. Klik **Deploy**. Jika diminta izin akses (*Authorize access*), klik *Review permissions* → pilih akun Google Anda → klik *Advanced* → *Go to project (unsafe)* → *Allow*.
8. Salin **Web app URL** yang muncul (formatnya: `https://script.google.com/macros/s/AKfycb.../exec`).
9. Masuk ke halaman **Admin CBT (`/admin`)** → buka menu **Pengaturan & Sheets** → tempel URL tersebut pada kolom **URL Web App Google Apps Script** → klik **Simpan Pengaturan**.

> **Selesai!** Setiap kali siswa selesai ujian (atau ter-auto-submit karena 3x pelanggaran), data otomatis masuk ke tab **`Rekap Nilai CBT`** sekaligus dibuatkan tab otomatis per Mata Pelajaran (misal `Mapel - Bahasa Arab (VII)`, `Mapel - Fiqih (VIII)`).

---

## 3. Tutorial Menghubungkan ke Supabase (Free Tier)

Aplikasi ini sudah dilengkapi penyimpanan lokal otomatis, namun untuk **deployment ke Vercel** agar data tersimpan permanen di cloud Supabase Free Tier:

1. Buka [https://supabase.com](https://supabase.com) dan login, lalu klik **New Project**.
2. Beri nama project `cbt-mts-assibyan`, buat database password, dan pilih region **Southeast Asia (Singapore)**.
3. Setelah project aktif, buka menu **SQL Editor** di sidebar kiri Supabase → klik **New Query**.
4. Salin seluruh isi file **[`supabase/schema.sql`](./supabase/schema.sql)** dari proyek ini, tempel ke SQL Editor, lalu klik **Run**.
5. Buka menu **Project Settings (ikon gerigi)** → **API**:
   - Salin **Project URL** (`https://xxxx.supabase.co`)
   - Salin **anon public key**
   - Salin **service_role secret key**
6. Buat file bernama `.env.local` di folder proyek ini (atau masukkan di Environment Variables Vercel):

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...
APPS_SCRIPT_EXPORT_URL=https://script.google.com/macros/s/AKfycb.../exec
SHEETS_WEBHOOK_SECRET=mts-assibyan-cbt-secret-2026
ADMIN_USERNAME=ADMIN
ADMIN_PASSWORD=ASSIBYAN2026
```

---

## 4. Tutorial Deploy ke Vercel + Domain Sendiri

1. Upload/push folder proyek ini ke repository **GitHub** Anda.
2. Buka [https://vercel.com](https://vercel.com) → klik **Add New...** → **Project** → pilih repository GitHub tersebut.
3. Pada bagian **Environment Variables**, masukkan variabel dari langkah ke-3 di atas (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `APPS_SCRIPT_EXPORT_URL`, `ADMIN_PASSWORD`).
4. Klik **Deploy**.
5. Setelah selesai deploy, buka tab **Settings** → **Domains** di Vercel untuk menghubungkan domain Anda sendiri.
