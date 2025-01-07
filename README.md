# CrootSS Documentation

<div align="center">
  <img src="crootss.png" alt="CrootSS Logo" width="200"/>
  
  [![GitHub stars](https://img.shields.io/github/stars/crootss/crootss.svg?style=social&label=Star&maxAge=2592000)](https://github.com/crootss/crootss/stargazers/)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
</div>

## 📖 Daftar Isi
- [Tentang CrootSS](#tentang-crootss)
- [Instalasi](#instalasi)
- [Komponen](#komponen)
  - [Header](#header)
  - [Slider](#slider)
  - [Feed](#feed)
  - [Event](#event)
  - [Flipcard](#flipcard)
  - [Footer](#footer)

## 🚀 Tentang CrootSS

CrootSS adalah library CSS yang dirancang khusus untuk pengembangan aplikasi mobile. Library ini menyediakan berbagai komponen siap pakai yang dapat membantu mempercepat proses pengembangan user interface mobile dengan fokus pada performa dan kemudahan penggunaan.

## ⚡ Instalasi

Tambahkan kode berikut ke dalam file HTML Anda:

```html
<!-- Font Awesome untuk ikon -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<!-- CSS CrootSS -->
<link rel="stylesheet" href="croot.css">
```

## 🎯 Komponen

### Header

CrootSS menyediakan dua jenis header yang dapat disesuaikan dengan kebutuhan aplikasi Anda:

#### 1. Header Plain (Sticky)

```html
<header class="header">
    <!-- Search Bar -->
    <div class="search-container">
        <i class="fas fa-search search-icon"></i>
        <input type="text" class="search-input" placeholder="Search">
    </div>
    
    <!-- Menu Icons -->
    <div class="menu-icons">
        <i class="fas fa-shopping-bag"></i>
        <i class="fas fa-bell"></i>
        <i class="fas fa-comment-dots"></i>
    </div>
</header>
```

**✨ Fitur:**
- Search bar responsif
- Menu icons dengan hover effect
- Posisi sticky saat scroll
- Background putih dengan border bottom
- Responsif untuk mobile devices

#### 2. Header Transparan (Scroll Effect)

```html
<header class="header" id="header">
    <!-- Logo dan Tagline -->
    <div class="logo">
        <img src="logo.png" alt="Logo" class="logo-img">
        <p class="tagline">Tagline Anda</p>
    </div>
    
    <!-- Menu Icons -->
    <div class="menu-icons">
        <i class="fas fa-search"></i>
        <i class="fas fa-bars"></i>
    </div>
</header>

<!-- Tambahkan JavaScript -->
<script src="croot.js"></script>
```

**✨ Fitur:**
- Background transparan yang berubah saat scroll
- Logo dan tagline
- Menu icons dengan hover effect
- Efek transisi halus
- Responsif untuk mobile devices

#### Kustomisasi Header

**Mengubah Warna Background Header Transparan:**
```css
.header.scrolled {
    background: rgba(0, 0, 0, 0.7); /* Sesuaikan opacity */
}
```

**Mengubah Warna Icon Hover:**
```css
.menu-icons i:hover {
    color: #YOUR_COLOR; /* Ganti dengan warna yang diinginkan */
}
```

**💡 Tips Penggunaan Header:**
1. Gunakan header plain untuk aplikasi dengan fokus pada fungsionalitas pencarian
2. Gunakan header transparan untuk landing page yang memerlukan tampilan lebih menarik
3. Pastikan konten di bawah header memiliki margin-top yang cukup
4. Sesuaikan ukuran logo dan icon sesuai kebutuhan mobile
5. Manfaatkan class yang sudah disediakan untuk konsistensi tampilan

### Slider
🚧 Dokumentasi akan datang

### Feed
🚧 Dokumentasi akan datang

### Event
🚧 Dokumentasi akan datang

### Flipcard
🚧 Dokumentasi akan datang

### Footer
🚧 Dokumentasi akan datang

## 🤝 Kontribusi

Kami sangat menghargai kontribusi Anda! Berikut langkah-langkah untuk berkontribusi:

## 📝 Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.

## 📮 Kontak

Project Link: [https://github.com/crootss](https://github.com/crootss)

---

<div align="center">
  Made with ❤️ by CrootSS Team
</div>