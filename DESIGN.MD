# DESIGN.MD — Computer Based Test (CBT)

> Dokumen acuan desain visual, pengalaman pengguna (UX), komponen antarmuka, dan motion untuk aplikasi Computer Based Test berbasis web.
>
> **Arah utama:** bersih, fokus, modern, interaktif, tenang, dan nyaman digunakan dalam sesi ujian yang panjang.

---

## 1. Visi desain

Aplikasi CBT harus membantu peserta berkonsentrasi pada soal, bukan membuat mereka sibuk memahami antarmuka. Tampilan perlu terasa modern dan ramah, tetapi tetap formal serta dapat dipercaya sebagai sistem ujian.

### Prinsip utama

1. **Exam-first:** area soal, jawaban, dan waktu selalu menjadi prioritas visual.
2. **Calm interface:** gunakan ruang kosong yang cukup, warna latar lembut, dan elemen dekoratif secukupnya.
3. **Clear feedback:** setiap tindakan penting—memilih jawaban, menyimpan, menandai soal, berpindah nomor, dan mengakhiri ujian—harus memberi respons yang jelas.
4. **Predictable interaction:** tombol, navigasi, timer, serta status soal harus konsisten di seluruh halaman.
5. **Accessible by default:** teks mudah dibaca, kontras memadai, navigasi keyboard tersedia, dan animasi tidak mengganggu.
6. **Responsive:** antarmuka tetap fungsional pada desktop, laptop, tablet, dan ponsel. Pengalaman ujian terbaik tetap ditargetkan untuk layar laptop/desktop.

### Karakter visual

- Modern, minimal, dan rapi.
- Profesional seperti platform pendidikan digital, bukan seperti dashboard finansial yang padat.
- Sedikit playful melalui ilustrasi geometris, ikon, dan micro-interactions.
- Tidak menggunakan efek kaca (glassmorphism) berlebihan, neon, bayangan tebal, atau gradien mencolok.

---

## 2. Design direction

### Nama arah visual

**Quiet Focus — Learn Clearly, Test Confidently**

### Rasa yang ingin dibangun

- Sebelum ujian: terarah, siap, dan tidak cemas.
- Saat ujian: tenang, fokus, dan selalu tahu posisi serta progres pengerjaan.
- Setelah ujian: mendapat konfirmasi yang jelas dan memahami hasil atau status evaluasi.

### Aturan komposisi

- Gunakan latar abu-abu kebiruan yang sangat muda untuk area aplikasi.
- Gunakan surface putih untuk kartu, panel, dan area soal.
- Batasi satu layar pada satu tindakan utama.
- Gunakan satu warna aksen utama dan warna status yang konsisten.
- Berikan jarak antarelemen yang lapang; jangan memadatkan semua informasi dalam satu kartu.
- Hindari dekorasi di dalam area membaca soal yang dapat mengganggu konsentrasi.

---

## 3. Sistem warna

Gunakan palet berikut sebagai token awal. Nilainya boleh disesuaikan dengan identitas institusi, tetapi hierarki dan fungsi setiap warna harus dipertahankan.

| Token | Hex | Penggunaan |
|---|---|---|
| `--color-primary-700` | `#2457D6` | Tombol utama, link aktif, indikator pilihan |
| `--color-primary-600` | `#3267E8` | Hover tombol utama, elemen interaktif |
| `--color-primary-100` | `#EAF0FF` | Latar lembut untuk elemen aktif |
| `--color-primary-50` | `#F5F7FF` | Highlight area ringan |
| `--color-bg` | `#F5F7FB` | Latar utama aplikasi |
| `--color-surface` | `#FFFFFF` | Kartu, panel, modal, area soal |
| `--color-text` | `#172033` | Teks utama |
| `--color-text-secondary` | `#647089` | Deskripsi, label sekunder |
| `--color-text-muted` | `#8791A5` | Placeholder dan metadata non-esensial |
| `--color-border` | `#E5E9F2` | Garis batas dan divider |
| `--color-success` | `#16845B` | Tersimpan, benar, selesai |
| `--color-success-bg` | `#E8F7F0` | Latar status sukses |
| `--color-warning` | `#B7791F` | Peringatan waktu atau tindakan |
| `--color-warning-bg` | `#FFF6E5` | Latar peringatan |
| `--color-danger` | `#D64545` | Gagal, waktu kritis, tindakan berisiko |
| `--color-danger-bg` | `#FFF0F0` | Latar status bahaya |
| `--color-info` | `#2875C7` | Informasi dan bantuan |

### Aturan penggunaan warna

- Biru adalah warna aksi dan fokus, bukan warna untuk semua elemen.
- Warna status tidak boleh menjadi satu-satunya pembeda. Selalu sertakan teks, ikon, atau bentuk.
- Merah hanya digunakan untuk kondisi yang memang membutuhkan perhatian, seperti waktu hampir habis atau konfirmasi mengakhiri ujian.
- Hindari teks abu-abu terlalu pucat untuk informasi penting.
- Jangan menggunakan warna hijau untuk tombol utama secara umum; simpan untuk status berhasil/tersimpan.

---

## 4. Tipografi

### Font yang disarankan

Prioritaskan **Inter**. Alternatif: `Plus Jakarta Sans` atau font sans-serif sistem.

```css
font-family: Inter, "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
```

### Skala tipografi

| Peran | Ukuran desktop | Weight | Catatan |
|---|---:|---:|---|
| Display / hero | 40–48 px | 700 | Hanya untuk landing page |
| Page title | 28–32 px | 700 | Judul halaman |
| Section title | 20–24 px | 600 | Judul panel atau bagian |
| Card title | 16–18 px | 600 | Judul kartu |
| Body | 15–16 px | 400 | Teks umum |
| Question text | 18–21 px | 500 | Soal harus sangat mudah dibaca |
| Label | 13–14 px | 500 | Label, metadata, status |
| Caption | 12 px | 400 | Informasi tambahan, bukan informasi kritis |

### Aturan keterbacaan

- `line-height` teks isi: 1.5–1.7.
- `line-height` soal: 1.55–1.7.
- Hindari paragraf soal yang terlalu lebar; batasi lebar bacaan sekitar 70–80 karakter per baris jika memungkinkan.
- Jangan menggunakan font tipis (`300`) untuk teks isi atau soal.
- Opsi jawaban harus memiliki ukuran teks minimal 15–16 px.
- Angka timer dan nomor soal sebaiknya memakai angka tabular agar tidak bergeser saat nilainya berubah.

---

## 5. Layout, grid, dan bentuk komponen

### Ukuran dan spacing

Gunakan sistem kelipatan 4 px.

| Token | Nilai |
|---|---:|
| `space-1` | 4 px |
| `space-2` | 8 px |
| `space-3` | 12 px |
| `space-4` | 16 px |
| `space-5` | 20 px |
| `space-6` | 24 px |
| `space-8` | 32 px |
| `space-10` | 40 px |
| `space-12` | 48 px |
| `space-16` | 64 px |

### Radius

- Input dan tombol: 10–12 px.
- Kartu: 16 px.
- Modal / dialog: 18–20 px.
- Badge / chip: 999 px.
- Hindari radius yang berbeda-beda tanpa alasan.

### Shadow

Gunakan bayangan halus hanya untuk memisahkan lapisan.

- Kartu default: `0 2px 10px rgba(22, 34, 58, 0.04)`.
- Popover / dropdown: `0 8px 28px rgba(22, 34, 58, 0.12)`.
- Modal: `0 18px 60px rgba(22, 34, 58, 0.18)`.

Sebagian besar kartu cukup memakai border tipis tanpa shadow.

### Grid halaman

- Desktop: konten utama maksimal sekitar 1240 px, berada di tengah.
- Dashboard: sidebar 240–260 px, konten fleksibel.
- Workspace ujian: area soal sekitar 70–75%, panel navigasi soal sekitar 25–30% pada layar lebar.
- Tablet: sidebar dapat menjadi drawer.
- Mobile: semua panel menjadi satu kolom; panel navigasi soal dibuka melalui bottom sheet atau drawer.

---

## 6. Navigasi dan struktur aplikasi

### Area peserta

1. **Login / akses ujian** — masuk menggunakan akun, kode peserta, atau mekanisme autentikasi yang ditentukan sistem.
2. **Dashboard peserta** — ringkasan ujian yang tersedia, terjadwal, sedang berlangsung, dan riwayat.
3. **Detail ujian** — informasi ujian, jadwal, durasi, jumlah soal, dan instruksi.
4. **Konfirmasi kesiapan** — pemeriksaan data peserta dan kesiapan memulai.
5. **Ruang ujian** — halaman pengerjaan soal.
6. **Konfirmasi selesai** — ringkasan jawaban sebelum dikirim.
7. **Hasil ujian** — nilai/status hasil sesuai kebijakan publikasi.
8. **Riwayat ujian** — daftar ujian yang sudah pernah diikuti.

### Area admin / pengelola

1. **Overview** — ringkasan ujian aktif, jumlah peserta, status pengerjaan, dan aktivitas terbaru.
2. **Manajemen ujian** — membuat, mengubah, menjadwalkan, menduplikasi, dan mengarsipkan ujian.
3. **Bank soal** — mengelola soal, kategori, tingkat kesulitan, media, dan kunci jawaban.
4. **Manajemen peserta** — data peserta, kelompok/kelas, impor data, dan status akses.
5. **Sesi ujian** — memantau peserta yang sedang mengerjakan dan status koneksi/penyimpanan.
6. **Hasil dan analitik** — nilai, distribusi hasil, rekap per soal, dan ekspor laporan.
7. **Pengaturan** — identitas institusi, aturan ujian, role pengguna, dan preferensi sistem.

> Catatan: struktur menu dapat disesuaikan dengan ruang lingkup produk. Jangan menampilkan menu admin kepada peserta.

---

## 7. Spesifikasi layar peserta

### 7.1 Login / akses ujian

**Tujuan:** membuat peserta masuk tanpa distraksi.

Komposisi:
- Panel kiri atau bagian atas berisi logo, nama platform, dan satu kalimat pengantar.
- Panel form berisi input identitas/login dan tombol masuk.
- Ilustrasi dekoratif cukup berada di sisi yang tidak mengganggu form.
- Tautan bantuan atau kontak pengelola ditempatkan di bagian bawah.

Elemen:
- Logo institusi/platform.
- Input dengan label permanen, bukan placeholder saja.
- Tombol utama `Masuk`.
- Pesan kesalahan tampil dekat input yang bermasalah.
- Loading state pada tombol ketika proses masuk berlangsung.

Hindari:
- Form terlalu panjang.
- Slideshow atau animasi yang terus bergerak.
- Foto stok orang sedang belajar yang terasa generik.

### 7.2 Dashboard peserta

**Tujuan:** peserta segera mengetahui apa yang perlu dilakukan.

Susunan:
1. Header dengan sapaan singkat dan profil peserta.
2. Kartu ujian terdekat atau ujian yang perlu dikerjakan.
3. Daftar ujian tersedia/terjadwal.
4. Riwayat ujian terbaru.
5. Bantuan singkat atau panduan penggunaan.

Kartu ujian harus menampilkan:
- Nama ujian.
- Mata pelajaran/kategori.
- Jadwal atau periode akses.
- Durasi.
- Jumlah soal bila tersedia.
- Status: `Tersedia`, `Akan datang`, `Sedang berlangsung`, `Selesai`, atau `Ditutup`.
- CTA sesuai status, misalnya `Lihat detail`, `Mulai ujian`, atau `Lihat hasil`.

Jangan menyembunyikan informasi jadwal atau batas waktu di tooltip.

### 7.3 Detail dan instruksi ujian

**Tujuan:** menghindari kesalahan sebelum peserta memulai ujian.

Tampilkan informasi dalam kelompok yang mudah dipindai:
- Identitas ujian.
- Jadwal dan durasi.
- Jumlah soal dan tipe soal.
- Aturan navigasi soal.
- Aturan penyimpanan jawaban.
- Kebijakan ketika koneksi terputus.
- Kebijakan ketika waktu habis.
- Keterangan apakah peserta boleh kembali ke soal sebelumnya.

Gunakan checklist kesiapan yang tidak menghalangi peserta membaca instruksi. Tombol `Mulai ujian` harus menjadi aksi paling menonjol dan meminta konfirmasi sebelum sesi benar-benar dimulai jika ujian memiliki batas waktu ketat.

### 7.4 Ruang ujian (exam workspace)

Ini adalah layar paling penting. Prioritaskan keterbacaan dan stabilitas layout.

**Desktop layout yang disarankan:**

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Logo / Nama Ujian          Progres / Status simpan       Timer        │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  AREA SOAL (70–75%)                         NAVIGASI SOAL (25–30%)    │
│  ┌───────────────────────────────────┐     ┌──────────────────────┐  │
│  │ Bagian / kategori                 │     │ Nomor soal           │  │
│  │                                   │     │ [01][02][03][04]     │  │
│  │ 01. Teks pertanyaan               │     │ [05][06][07][08]     │  │
│  │                                   │     │                      │  │
│  │ ○ Opsi jawaban A                  │     │ Legenda status       │  │
│  │ ○ Opsi jawaban B                  │     │ Belum dijawab        │  │
│  │ ○ Opsi jawaban C                  │     │ Dijawab              │  │
│  │ ○ Opsi jawaban D                  │     │ Ditandai             │  │
│  │                                   │     │                      │  │
│  │ [Tandai untuk ditinjau]           │     │                      │  │
│  └───────────────────────────────────┘     └──────────────────────┘  │
│                                                                      │
│  [Sebelumnya]                            [Berikutnya] / [Selesaikan] │
└──────────────────────────────────────────────────────────────────────┘
```

#### Header ujian

- Nama ujian / nama sesi.
- Status penyimpanan, misalnya `Jawaban tersimpan` atau `Menyimpan...`.
- Timer dengan angka tabular.
- Tombol bantuan kecil bila memang tersedia.
- Jangan menampilkan navigasi situs yang tidak relevan ketika ujian berlangsung.

#### Area soal

- Nomor soal dan label bagian.
- Teks soal dengan ukuran nyaman.
- Media soal (gambar, tabel, audio, atau video) jika ada.
- Opsi jawaban dengan area klik yang besar.
- Tombol `Tandai untuk ditinjau`.
- Navigasi `Sebelumnya` dan `Berikutnya`.

#### Panel navigasi soal

Setiap nomor harus memiliki state yang mudah dikenali:

| State | Visual | Makna |
|---|---|---|
| Belum dijawab | Latar putih, border abu-abu | Belum ada jawaban |
| Sedang dibuka | Border/outline biru dan latar biru muda | Nomor yang sedang tampil |
| Sudah dijawab | Latar biru solid atau aksen yang jelas | Jawaban sudah dipilih |
| Ditandai | Ikon bookmark kecil atau penanda pojok | Perlu ditinjau kembali |
| Dijawab + ditandai | Status terjawab dengan ikon penanda | Sudah dijawab, tetapi ingin diperiksa lagi |

State harus tetap dapat dibedakan oleh pengguna dengan buta warna; jangan mengandalkan warna saja.

#### Perilaku opsi jawaban

- Seluruh baris opsi dapat diklik, bukan hanya radio kecil.
- Ketika dipilih, tampilkan border aksen, latar lembut, dan indikator terpilih.
- Jangan memunculkan animasi besar setiap kali jawaban dipilih.
- Pilihan harus tetap terlihat setelah pengguna berpindah nomor dan kembali.
- Untuk soal multi-select, jelaskan bahwa peserta dapat memilih lebih dari satu jawaban.

#### Tipe soal yang perlu didukung secara visual

- Pilihan ganda satu jawaban.
- Pilihan ganda kompleks / beberapa jawaban.
- Benar atau salah.
- Isian singkat.
- Esai.
- Menjodohkan.
- Mengurutkan jawaban.
- Soal berbasis gambar, tabel, audio, atau video.

Setiap tipe soal harus memakai pola kontrol yang konsisten. Hindari membuat tipe soal baru terasa seperti halaman aplikasi yang berbeda.

### 7.5 Timer dan kondisi waktu

Timer merupakan informasi kritis.

- Kondisi normal: tampil netral dengan angka jelas.
- Waktu menipis: tampilkan aksen peringatan dan teks yang menjelaskan sisa waktu.
- Kondisi kritis: gunakan warna bahaya secara proporsional; jangan membuat seluruh layar berkedip.
- Jangan menggunakan suara peringatan secara default. Bila tersedia, suara harus dapat dimatikan.
- Ketika waktu habis, tampilkan proses pengiriman otomatis secara jelas dan jangan meminta peserta mengulang tindakan yang sudah berjalan.

### 7.6 Konfirmasi menyelesaikan ujian

Sebelum pengiriman final, tampilkan dialog yang menjelaskan konsekuensi tindakan.

Dialog perlu memuat:
- Jumlah soal terjawab.
- Jumlah soal belum dijawab.
- Jumlah soal yang ditandai untuk ditinjau.
- Peringatan jika masih ada soal kosong.
- Tombol sekunder `Kembali ke ujian`.
- Tombol utama/destruktif `Ya, akhiri ujian`.

Jangan menggunakan teks yang ambigu seperti `Submit` tanpa penjelasan.

### 7.7 Halaman hasil

Tampilkan hanya data yang memang diizinkan oleh konfigurasi ujian.

Kemungkinan informasi:
- Status pengumpulan.
- Nilai akhir jika langsung dipublikasikan.
- Jumlah benar/salah/kosong jika kebijakan mengizinkan.
- Keterangan bahwa hasil masih menunggu penilaian untuk soal esai.
- Waktu mulai dan selesai.
- Tombol kembali ke dashboard atau melihat pembahasan jika dibuka oleh pengelola.

Jangan menampilkan kunci jawaban atau pembahasan sebelum diizinkan oleh pengaturan ujian.

---

## 8. Spesifikasi layar admin

Admin menggunakan sistem yang sama, tetapi kebutuhan utamanya adalah efisiensi dan kepadatan informasi yang terkontrol.

### Dashboard admin

- Ringkasan jumlah ujian aktif, peserta, sesi berjalan, dan hasil menunggu penilaian.
- Grafik sederhana untuk aktivitas atau distribusi nilai jika datanya tersedia.
- Daftar ujian terbaru dan aktivitas terakhir.
- Aksi cepat `Buat ujian` dan `Tambah soal`.

Jangan memenuhi halaman dengan terlalu banyak grafik dekoratif. Setiap visualisasi harus menjawab pertanyaan operasional.

### Manajemen ujian

Tabel/list ujian menampilkan:
- Nama ujian.
- Periode/jadwal.
- Jumlah peserta.
- Durasi.
- Status publikasi.
- Terakhir diperbarui.
- Menu tindakan.

Status ujian: `Draft`, `Terjadwal`, `Berlangsung`, `Selesai`, dan `Diarsipkan`.

### Form builder ujian

Kelompokkan pengaturan menjadi beberapa langkah atau tab:
1. Informasi dasar.
2. Jadwal dan durasi.
3. Peserta/kelompok.
4. Pengaturan pengerjaan.
5. Pengaturan penilaian dan publikasi hasil.
6. Tinjau dan terbitkan.

Gunakan indikator langkah agar admin mengetahui bagian yang belum lengkap. Simpan draft secara berkala dan jelaskan status penyimpanannya.

### Bank soal

- Daftar soal dengan filter kategori, topik, tipe, dan tingkat kesulitan.
- Editor soal dengan preview.
- Pemilihan tipe soal yang jelas.
- Form kunci jawaban dan pembobotan nilai.
- Dukungan media dengan preview dan validasi ukuran/format.
- Konfirmasi sebelum menghapus soal yang telah dipakai pada ujian.

### Monitoring sesi ujian

Tampilkan informasi yang membantu pengawas mengambil tindakan:
- Nama/kode peserta.
- Ujian yang dikerjakan.
- Waktu mulai dan sisa waktu jika tersedia.
- Progres jawaban.
- Status koneksi/aktivitas terakhir bila sistem benar-benar menyediakan data tersebut.

Jangan menampilkan status teknis seolah-olah real-time apabila datanya hanya diperbarui secara berkala. Cantumkan waktu pembaruan data.

---

## 9. Komponen UI dan state

Komponen perlu dibuat konsisten dan dapat digunakan ulang.

### Komponen dasar

- `Button`: primary, secondary, outline, ghost, danger, loading, disabled.
- `Input`: default, focus, filled, error, disabled.
- `Select` / `Combobox`.
- `Checkbox`, `Radio`, `Switch`.
- `Badge` / `StatusPill`.
- `Card`.
- `Tabs`.
- `Tooltip`.
- `Popover`.
- `Dialog` / `ConfirmationModal`.
- `Toast` / `InlineAlert`.
- `Skeleton`.
- `EmptyState`.
- `Pagination`.
- `DataTable`.
- `QuestionNavigator`.
- `QuestionOption`.
- `ExamTimer`.
- `SaveStatus`.

### Prinsip state

Setiap komponen interaktif sekurang-kurangnya memiliki state:

- Default.
- Hover.
- Focus-visible.
- Active/pressed.
- Disabled.
- Loading jika melakukan proses asynchronous.
- Error jika input/proses gagal.

Jangan mengandalkan hover sebagai satu-satunya cara mengakses fungsi karena perangkat sentuh tidak memilikinya.

---

## 10. Motion dan micro-interactions

Animasi harus terasa responsif dan halus, bukan menjadi tontonan. Prioritaskan transisi yang memberi konteks perubahan UI.

### Motion tokens

| Token | Durasi | Kegunaan |
|---|---:|---|
| `motion-fast` | 120 ms | Hover, pressed, perubahan ikon |
| `motion-normal` | 180–220 ms | Dropdown, tab, pilihan jawaban |
| `motion-slow` | 260–320 ms | Dialog, drawer, perubahan panel |
| `motion-emphasis` | 400–500 ms | Ilustrasi/empty state tertentu, hanya sesekali |

Kurva yang disarankan:

```css
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-enter: cubic-bezier(0, 0, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
```

### Interaksi yang direkomendasikan

| Interaksi | Animasi | Ketentuan |
|---|---|---|
| Hover tombol | Warna dan elevasi berubah sedikit | 120–160 ms |
| Klik tombol | Scale sangat ringan, misalnya `0.98` | Kembali normal segera |
| Pilih jawaban | Border/latar berubah dan indikator muncul | 140–180 ms; tanpa bounce besar |
| Pindah nomor soal | Konten berganti dengan fade singkat | 120–180 ms; jangan menggeser layout secara berlebihan |
| Buka navigator mobile | Bottom sheet slide-up | 220–280 ms |
| Buka modal | Fade + scale ringan | 180–240 ms |
| Simpan jawaban | Ikon/status berganti `Menyimpan...` ke `Tersimpan` | Hindari toast yang muncul berulang |
| Progres ujian | Progress bar berubah halus | Jangan membuat angka progres terlambat |
| Toast | Fade/slide pendek | Otomatis hilang untuk pesan non-kritis |
| Skeleton | Shimmer sangat halus | Hanya ketika data benar-benar sedang dimuat |

### Animasi dekoratif

- Boleh ada bentuk abstrak mengambang perlahan pada hero/login.
- Gerakan dekoratif harus lambat, amplitudo kecil, dan tidak berada di belakang teks penting.
- Jangan menggunakan partikel, confetti, parallax, atau animasi loop yang ramai di ruang ujian.
- Confetti hanya boleh dipertimbangkan pada halaman penyelesaian non-ujian, dan harus bisa dimatikan; bukan pada layar saat tes berlangsung.

### Reduced motion

Wajib menghormati preferensi sistem:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Jangan menghilangkan feedback penting ketika animasi dinonaktifkan; gunakan perubahan warna, ikon, atau teks sebagai pengganti.

---

## 11. Ornamen, ilustrasi, dan gambar yang disarankan

Gunakan aset visual untuk memberi identitas dan kehangatan, bukan untuk memenuhi ruang kosong. Utamakan ilustrasi vektor/SVG buatan sendiri agar ringan, konsisten, dan mudah diubah warnanya.

### A. Abstract geometric shapes — dekorasi hero/login


**Bentuk yang disarankan:**
- Lingkaran besar dengan opacity rendah.
- Rounded blob tidak simetris.
- Half-circle atau arc berbentuk garis.
- Rounded rectangle yang diputar 10–20 derajat.
- Titik-titik kecil dalam pola grid.

**Penempatan:** area kosong di belakang/samping ilustrasi login atau hero dashboard, tidak berada di belakang teks input.

**Warna:** biru muda, lavender pucat, dan cyan yang sangat lembut. Opacity sekitar 8–18%.

**Gerakan:** satu atau dua bentuk bergerak perlahan beberapa piksel atau melakukan rotasi sangat kecil. Matikan/kurangi animasi pada `prefers-reduced-motion`.

### B. Ilustrasi peserta sedang mengerjakan ujian — empty state

**Bentuk visual:** ilustrasi flat/vector dengan satu karakter sederhana duduk di meja, laptop terbuka, lembar checklist, dan tanaman kecil. Gunakan bentuk geometris membulat, outline tipis, tanpa detail wajah berlebihan.

**Penempatan:** dashboard ketika belum ada ujian, halaman riwayat kosong, atau halaman tidak menemukan data.

**Catatan:** ilustrasi tidak perlu menjadi gambar besar di setiap halaman. Hindari ilustrasi pada ruang ujian.

### C. Progress pathway — visual progres

**Bentuk visual:** garis horizontal/vertikal dengan titik checkpoint berbentuk lingkaran, beberapa titik terisi, dan satu titik aktif dengan ring tipis.

**Penempatan:** kartu ringkasan progres atau halaman instruksi multi-bagian. Jangan menggantikan progress bar yang lebih mudah dipahami.

### D. Pattern dot-grid — tekstur latar

**Bentuk visual:** susunan titik kecil teratur, misalnya 5×5 atau 8×8, dengan jarak lega.

**Penempatan:** sudut hero, sisi kartu promosi, atau area kosong pada halaman login.

**Aturan:** opacity rendah dan tidak ditempatkan di belakang teks panjang.

### E. Abstract open-book / graduation motif — identitas pendidikan

**Bentuk visual:** gabungan dua rounded rectangle atau dua bidang lengkung menyerupai halaman buku terbuka; bisa ditambah garis kecil menyerupai sinar/arah.

**Penempatan:** logo sekunder, ilustrasi header, atau banner informasi.

**Aturan:** buat sederhana dan abstrak. Jangan memakai ikon topi wisuda terlalu besar sebagai motif utama karena terlalu generik.

### F. Iconography

Gunakan ikon satu keluarga, misalnya Lucide, dengan stroke konsisten.

Ikon yang berguna:
- `clock` / `timer` untuk durasi.
- `book-open` untuk materi/ujian.
- `bookmark` untuk tandai soal.
- `check-circle-2` untuk status selesai.
- `circle-help` untuk bantuan.
- `wifi` / `wifi-off` untuk status koneksi bila tersedia.
- `flag` untuk penanda.
- `layout-grid` untuk navigator soal.
- `shield-check` untuk informasi keamanan.

Ukuran ikon umum 16–20 px; ikon navigasi utama 20–22 px. Jangan mencampur ikon outline, solid, dan emoji dalam satu sistem.

### Batasan penggunaan gambar

- Hindari foto stok orang tersenyum di depan laptop.
- Jangan memasang gambar sebagai background di ruang ujian.
- Jangan menggunakan gambar beresolusi besar jika SVG/CSS sudah cukup.
- Seluruh gambar informatif harus memiliki teks alternatif.
- Pastikan aset ilustrasi tidak menyerupai tombol atau status interaktif.

---

## 12. Responsivitas

### Desktop (≥ 1200 px)

- Dashboard memakai sidebar tetap dan area konten fleksibel.
- Ruang ujian memakai dua kolom: soal dan navigator.
- Timer serta status simpan selalu terlihat.
- Jangan membuat area soal terlalu lebar.

### Laptop kecil / tablet landscape (768–1199 px)

- Sidebar dapat dipersempit atau diubah menjadi drawer.
- Panel navigator dapat dibuat lebih ringkas.
- Area soal tetap menjadi fokus utama.
- Pertahankan ukuran kontrol yang nyaman disentuh.

### Mobile (< 768 px)

- Gunakan satu kolom.
- Header ujian dibuat ringkas: nama ujian, timer, status simpan.
- Navigator soal dibuka melalui tombol `Daftar soal` dan tampil sebagai bottom sheet/drawer.
- Tombol sebelumnya/berikutnya tetap mudah dijangkau.
- Opsi jawaban ditampilkan vertikal dengan area sentuh minimal sekitar 44×44 px.
- Jangan membuat peserta harus melakukan horizontal scrolling untuk membaca soal.
- Untuk soal dengan tabel lebar, sediakan area scroll khusus dengan petunjuk yang terlihat.

### Target viewport untuk pengujian

- 1440×900
- 1366×768
- 1024×768
- 768×1024
- 390×844
- 360×800

---

## 13. Aksesibilitas dan kenyamanan ujian

- Semua fungsi dapat digunakan dengan keyboard.
- Tampilkan focus ring yang jelas pada elemen yang sedang fokus.
- Gunakan label form yang selalu terlihat.
- Pastikan kontras teks dan kontrol memenuhi WCAG 2.2 AA sebagai target implementasi.
- Gunakan elemen semantik: heading berurutan, button untuk aksi, link untuk navigasi, dan label untuk input.
- Radio/checkbox harus memiliki label yang dapat diklik.
- Jangan menyampaikan status hanya melalui warna.
- Berikan teks alternatif untuk gambar soal dan ilustrasi yang informatif.
- Sediakan ukuran teks soal yang nyaman dan jangan memaksa peserta membaca teks kecil.
- Hindari animasi berkedip atau perubahan visual yang mendadak.
- Jangan mengunci zoom browser pada perangkat mobile.
- Berikan pesan koneksi dan penyimpanan yang mudah dipahami, bukan istilah teknis saja.

---

## 14. UX penting: autosave, koneksi, dan keandalan

Desain harus mengomunikasikan status penyimpanan secara jujur. Jangan menunjukkan `Tersimpan` sebelum server mengonfirmasi penyimpanan, kecuali labelnya secara eksplisit menyatakan bahwa jawaban baru tersimpan secara lokal.

### Status penyimpanan yang disarankan

1. `Belum ada perubahan` — belum ada jawaban baru.
2. `Menyimpan...` — jawaban sedang dikirim.
3. `Tersimpan` — server telah mengonfirmasi penyimpanan.
4. `Koneksi terputus` — sistem tidak dapat memastikan penyimpanan ke server.
5. `Gagal menyimpan` — proses gagal; tampilkan tindakan yang dapat dilakukan.

### Prinsip perilaku

- Simpan jawaban setelah perubahan dengan mekanisme yang sesuai.
- Cegah klik ganda pada tindakan submit.
- Ketika koneksi terputus, tampilkan banner status yang tidak menutupi soal.
- Jika penyimpanan lokal/offline didukung, jelaskan bahwa jawaban perlu disinkronkan kembali.
- Ketika koneksi pulih, tampilkan status sinkronisasi.
- Jangan menghapus jawaban hanya karena peserta melakukan refresh atau berpindah nomor.
- Sediakan dialog sebelum peserta meninggalkan ujian jika ada perubahan yang belum tersimpan.
- Waktu dan status akhir harus berasal dari sumber waktu yang konsisten di sistem, bukan sekadar jam perangkat peserta.

### Contoh microcopy

| Kondisi | Teks |
|---|---|
| Menyimpan | `Menyimpan jawaban...` |
| Tersimpan | `Semua perubahan tersimpan` |
| Koneksi hilang | `Koneksi terputus. Jawaban terbaru mungkin belum tersinkron.` |
| Sinkronisasi ulang | `Koneksi kembali. Menyinkronkan jawaban...` |
| Gagal simpan | `Jawaban belum berhasil disimpan. Periksa koneksi dan coba lagi.` |
| Waktu hampir habis | `Waktu tersisa 5 menit` |
| Konfirmasi selesai | `Setelah ujian diakhiri, jawaban tidak dapat diubah lagi.` |

---

## 15. Konten dan microcopy

Gunakan Bahasa Indonesia yang lugas, konsisten, dan tidak mengintimidasi peserta.

### Pilihan istilah

| Gunakan | Hindari |
|---|---|
| `Mulai ujian` | `Start` |
| `Berikutnya` | `Next` |
| `Sebelumnya` | `Prev` |
| `Tandai untuk ditinjau` | `Flag` tanpa penjelasan |
| `Jawaban tersimpan` | `Saved` |
| `Akhiri ujian` | `Submit` tanpa konteks |
| `Belum dijawab` | `Empty` |
| `Waktu tersisa` | `Countdown` |

Pertahankan istilah yang sama di seluruh aplikasi. Jangan berganti-ganti antara `ujian`, `tes`, dan `asesmen` tanpa alasan produk.

---

## 16. Empty, loading, error, dan success states

Setiap halaman harus dirancang untuk kondisi selain data normal.

### Empty state

Contoh: belum ada ujian tersedia.
- Ilustrasi kecil di atas pesan.
- Judul: `Belum ada ujian tersedia`.
- Deskripsi singkat yang menjelaskan apa yang dapat dilakukan peserta.
- Tombol bantuan atau kembali ke dashboard jika relevan.

### Loading state

- Gunakan skeleton untuk area yang bentuknya sudah diketahui.
- Pertahankan ukuran komponen agar layout tidak meloncat.
- Untuk aksi tombol, ubah tombol menjadi loading state dan cegah pengiriman berulang.

### Error state

- Jelaskan apa yang gagal dan langkah berikutnya.
- Jangan hanya menampilkan `Terjadi kesalahan`.
- Beri opsi `Coba lagi` jika tindakan aman untuk diulang.
- Jangan menghapus data form ketika terjadi error.

### Success state

- Gunakan ikon dan teks yang jelas.
- Hindari toast untuk hasil penting yang perlu dibaca lebih lama.
- Setelah ujian terkirim, tampilkan status final pada halaman khusus.

---

## 17. Aturan desain untuk menghindari distraksi

Khusus ruang ujian:

- Tidak ada carousel.
- Tidak ada video latar.
- Tidak ada ilustrasi dekoratif bergerak.
- Tidak ada animasi looping di dekat timer atau soal.
- Tidak ada pop-up promosi atau notifikasi non-esensial.
- Tidak ada perubahan layout besar ketika jawaban dipilih.
- Tidak ada suara otomatis.
- Jangan menyembunyikan kontrol penting di menu tiga titik.
- Jangan menampilkan statistik yang tidak relevan selama ujian.

Ruang ujian harus terasa lebih sederhana daripada dashboard.

---

## 18. Kriteria penerimaan desain (Design QA)

Desain dianggap siap diimplementasikan jika:

- [ ] Peserta dapat membedakan ujian tersedia, terjadwal, berlangsung, dan selesai.
- [ ] Peserta memahami instruksi dan durasi sebelum memulai.
- [ ] Timer mudah terlihat tanpa mendominasi layar.
- [ ] Teks soal nyaman dibaca pada semua viewport target.
- [ ] Opsi jawaban mudah dipilih dengan mouse, keyboard, dan sentuhan.
- [ ] Status nomor soal dapat dibedakan tanpa mengandalkan warna saja.
- [ ] Peserta dapat mengetahui apakah jawaban sedang disimpan, sudah tersimpan, atau gagal tersimpan.
- [ ] Konfirmasi akhir menjelaskan jumlah soal yang belum dijawab.
- [ ] Navigasi soal tetap nyaman pada layar kecil.
- [ ] Loading, empty, error, disabled, dan success states sudah dirancang.
- [ ] Animasi singkat, konsisten, dan tidak mengganggu konsentrasi.
- [ ] Preferensi `prefers-reduced-motion` dihormati.
- [ ] Focus state keyboard terlihat jelas.
- [ ] Tidak ada elemen dekoratif yang mengganggu area membaca soal.
- [ ] Tidak ada status sukses palsu ketika proses penyimpanan belum dikonfirmasi.

---

## 19. Arahan implementasi untuk developer / AI coding agent

1. Baca dokumen ini sebelum membuat komponen atau halaman.
2. Bangun design tokens (warna, typography, spacing, radius, shadow, motion) sebagai variabel terpusat.
3. Buat komponen dasar yang reusable sebelum merakit halaman.
4. Pisahkan layout peserta dan admin, tetapi gunakan design system yang sama.
5. Ruang ujian harus mempunyai layout khusus yang memprioritaskan soal, timer, status penyimpanan, dan navigator.
6. Implementasikan semua state interaktif, bukan hanya tampilan default.
7. Gunakan ikon dari satu library yang konsisten.
8. Gunakan SVG/CSS untuk ornamen geometris ringan; jangan menambahkan gambar stok tanpa alasan desain yang jelas.
9. Jangan menambahkan animasi baru yang tidak memberi feedback atau konteks.
10. Uji seluruh halaman pada ukuran viewport yang tercantum di bagian responsivitas.
11. Periksa aksesibilitas keyboard, kontras, reduced motion, dan ukuran target sentuh.
12. Jangan mengubah aturan bisnis ujian (misalnya kapan timer dimulai, kapan jawaban dikunci, atau bagaimana nilai dihitung) hanya berdasarkan asumsi desain. Minta spesifikasi produk jika aturan tersebut belum ditentukan.

### Prioritas pengerjaan

**P0 — Wajib**
- Design tokens.
- Login dan dashboard peserta.
- Detail/instruksi ujian.
- Exam workspace desktop dan mobile.
- Question navigator dan state jawaban.
- Timer dan status autosave.
- Dialog akhiri ujian.
- Loading/error/empty states.

**P1 — Penting**
- Halaman hasil dan riwayat peserta.
- Dashboard admin.
- Manajemen ujian dan bank soal.
- Responsive refinement.

**P2 — Penyempurnaan**
- Ilustrasi custom.
- Motion tambahan pada halaman non-ujian.
- Grafik analitik admin.
- Tema gelap bila memang menjadi kebutuhan produk.

---

## 20. Ringkasan visual yang harus diingat

**Buat aplikasi yang terasa seperti ruang ujian digital yang tenang dan modern.** Dashboard boleh memiliki sedikit karakter visual melalui bentuk abstrak dan ilustrasi vektor. Namun, begitu peserta masuk ke ruang ujian, seluruh ornamen harus menghilang dan antarmuka berubah menjadi sederhana, stabil, mudah dibaca, serta sangat jelas dalam memberikan feedback.

Prinsip akhirnya: **visual menarik sebelum ujian, fokus maksimal saat ujian, dan informasi jelas setelah ujian.**
