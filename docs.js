// Tombol "Salin" di setiap blok kode. Peningkatan progresif: tanpa JS, kode
// tetap bisa dipilih dan disalin manual.
const label = 'Salin';

// Tombol dipasang di pembungkus, bukan di <pre>, supaya tidak ikut tergeser
// saat kode panjang di-scroll horizontal.
for (const pre of document.querySelectorAll('pre')) {
  const wrap = document.createElement('div');
  wrap.className = 'code';
  pre.before(wrap);
  wrap.append(pre);
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'copy';
  btn.textContent = label;
  btn.setAttribute('aria-label', 'Salin kode');
  wrap.append(btn);
}

// Di ponsel menu berupa strip horizontal; geser supaya halaman aktif terlihat.
const side = document.querySelector('.side ul');
const active = side?.querySelector('[aria-current="page"]');
if (side && active && side.scrollWidth > side.clientWidth) {
  side.scrollLeft = active.offsetLeft - (side.clientWidth - active.offsetWidth) / 2;
}

document.addEventListener('click', async (e) => {
  const btn = e.target.closest('.copy');
  if (!btn) return;
  const text = btn.parentElement.querySelector('code').textContent;
  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = 'Tersalin';
  } catch {
    btn.textContent = 'Gagal';
  }
  setTimeout(() => { btn.textContent = label; }, 1600);
});
