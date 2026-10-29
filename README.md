# Landing Page - PT RMW Dipta Nusantara

Repository ini berisi kode sumber (*source code*) untuk website landing page resmi **PT RMW Dipta Nusantara**. Project ini dibangun menggunakan HTML statis dan dipadukan dengan **Tailwind CSS v3** untuk menghasilkan desain yang modern, responsif, dan ringan.

## 🚀 Fitur Utama
- **Desain Modern & Responsif**: Optimal saat dibuka di perangkat *mobile* (HP) hingga komputer/laptop (*desktop*).
- **Katalog Produk Premium**: Menampilkan lini produk unggulan perusahaan seperti kopi robusta Dampit dan kemitraan wewangian Esplanade Perfume.
- **Akses Kontak Cepat**: Integrasi langsung dengan tautan resmi WhatsApp untuk mempermudah konversi klien.
- **Optimasi Build**: Menggunakan kompresi Tailwind CLI (`--minify`) untuk performa pemuatan web yang sangat cepat.

## 🛠️ Spesifikasi Teknologi
- **HTML5 & Vanilla JavaScript**
- **Tailwind CSS v3.3.1** (Tailwind CLI)
- **Node.js & NPM** (Package Manager)

## 💻 Cara Menjalankan Project di Lokal

Jika Anda meng-clone project ini ke komputer lokal, ikuti langkah-langkah berikut untuk menjalankannya:

### 1. Install Dependensi
Pastikan Node.js sudah terinstall di perangkat Anda, lalu unduh library Tailwind melalui terminal:
```bash
npm install
```

### 2. Jalankan Mode Pengembangan (Development)
Untuk mulai mengedit kode dan memantau perubahan CSS secara otomatis (*auto-compile*), jalankan perintah:
```bash
npm run dev
```

### 3. Membuka di Browser
Buka file `index.html` menggunakan Google Chrome, atau rekomendasinya menggunakan *extension* **Live Server** di VS Code (`http://127.0.0.1:5500`) atau via local server **Laragon** (`http://landing.test`).

## 📦 Cara Membuat Production Build
Sebelum mengunggah website ke server hosting (*production*), jalankan perintah berikut untuk mengompresi file CSS agar ukurannya seminimal mungkin:
```bash
npm run build
```
Hasil file CSS akhir yang optimal akan diperbarui di dalam folder `./dist/rmw.css`.

---
*Dikembangkan dengan penuh dedikasi untuk PT RMW Dipta Nusantara.*