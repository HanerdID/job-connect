# JobConnect — Job Board Platform (Frontend Only)

**JobConnect** adalah platform papan lowongan kerja modern, dirancang untuk mempertemukan pencari kerja dan perekrut secara efisien. Dibangun sepenuhnya dengan React + Ant Design, project ini mengedepankan tampilan elegan, UX profesional, dan arsitektur frontend-only tanpa backend.

---

## 🚀 Fitur Utama

### 🎯 Untuk Pencari Kerja (User)
- ✅ Jelajahi lowongan pekerjaan terkini
- ✅ Lamar pekerjaan & simpan favorit
- ✅ Lihat riwayat lamaran Anda
- ✅ Dashboard pengguna lengkap dengan navigasi terpisah

### 🧑‍💼 Untuk Perekrut (Recruiter)
- ✅ Posting lowongan baru
- ✅ Edit & hapus lowongan yang sudah ada
- ✅ Dashboard recruiter modern & ringan

### 🌐 Umum
- 🔒 Navigasi berbasis peran (user vs recruiter)
- 🔐 Proteksi halaman berdasarkan status login
- 💾 State persist via `localStorage`
- ⚡️ Tidak memerlukan backend — siap deploy ke Vercel

---

## 🛠️ Teknologi yang Digunakan

- **React 19 + Vite** ⚛️
- **Ant Design** sebagai UI Framework 🎨
- **React Router v7** untuk routing
- **React Context API** untuk state global (auth & job)
- **localStorage** untuk persistensi state tanpa backend

---

## 📦 Instalasi

```bash
git clone https://github.com/yourusername/jobconnect.git
cd jobconnect/client
npm install
npm run dev