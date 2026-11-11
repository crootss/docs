# crootss docs

Situs dokumentasi [crootss](https://github.com/crootss/crootss), tayang di https://crootss.if.co.id/docs/ (GitHub Pages dari branch `main`).

## Struktur

| Path | Isi |
| :-- | :-- |
| `index.html` | Pengantar dan mulai cepat |
| `big-picture/` | Konvensi big picture, memilih diagram, kelas diagram dan animasi |
| `markup/` | Struktur HTML, atribut `data-croot-*`, urutan langkah, node bersarang |
| `navigasi/` | Keyboard, klik, swipe, overview, URL, kamera 3D, aksesibilitas |
| `api/` | `croot()`, opsi, method, properti, event |
| `css/` | Variabel CSS, class status, tips 3D |
| `tema/` | Tema dari [crootss/themes](https://github.com/crootss/themes): class, token, membuat tema |
| `lokal/` | Menjalankan slide lewat PowerShell (`serve.ps1`) atau Python |
| `docs.css`, `docs.js` | Gaya dan tombol salin, dipakai semua halaman |
| `sitemap.xml` | Daftar halaman untuk mesin pencari |

Tanpa build: setiap halaman adalah HTML biasa. Menu samping dan tombol sebelumnya/berikutnya ditulis di setiap halaman, jadi saat menambah halaman perbarui menu di **semua** halaman, `sitemap.xml`, dan tabel di atas.

## Aturan

- Ikuti [konvensi CrootJS](https://croot.js.org/docs/conventions): HTML, CSS, dan JS di file terpisah; tanpa `style=""` atau `onclick`. JSON-LD inline diizinkan karena berisi data.
- Setiap halaman punya satu `h1`, `title` dan `meta description` sendiri, `canonical`, dan JSON-LD `TechArticle`.
- Isi harus sesuai dengan kode yang dirilis. Saat atribut, API, atau class berubah di `crootss/crootss` atau `crootss/themes`, perbarui halaman yang bersangkutan.
- Versi CDN di contoh kode (`crootss@vX.Y.Z`, `themes@vX.Y.Z`) diperbarui otomatis oleh `.github/workflows/update-crootss.yml` (harian, atau dispatch dari workflow rilis).
- Perintah di `lokal/` (PowerShell `serve.ps1` dan Python) harus sama dengan `crootss/README.md` dan slide "Buka di komputermu" di landing.

## Menjalankan lokal

Halaman memakai path relatif, jadi bisa dibuka dari root repo ini:

```sh
python3 -m http.server 8080
```

Lalu buka `http://localhost:8080/`.
