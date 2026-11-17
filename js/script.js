// Klik menu di panel kiri -> kartu yang sesuai berubah jadi kuning.
// Klik lagi menu yang sama -> kembali putih. Klik "Home" -> semua kembali putih.

const menuLinks = document.querySelectorAll('.nav a[data-target]');
const kartu = {
  progres:   document.querySelector('.progres'),    // Kelas     -> Progres Kelas
  aktifitas: document.querySelector('.aktifitas'),  // Aktifitas -> Aktifitas Selanjutnya
  stat:      document.querySelector('.stat'),       // Statistik -> Statistik Mahasiswa
  lampiran:  document.querySelector('.lampiran')    // Dokumen   -> Lampiran Dokumen
};

function resetSemua() {
  Object.values(kartu).forEach(k => k.classList.remove('highlight'));
}

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // cegah loncat ke atas karena href="#"

    const target = link.dataset.target;

    if (target === 'home') {
      resetSemua();
      return;
    }

    const sudahKuning = kartu[target].classList.contains('highlight');
    resetSemua();
    if (!sudahKuning) kartu[target].classList.add('highlight');
  });
});
