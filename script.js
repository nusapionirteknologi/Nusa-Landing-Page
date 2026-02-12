// Mengambil elemen hamburger dan menu navigasi
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Event Listener untuk klik tombol hamburger
hamburger.addEventListener("click", () => {
    // Toggle class 'active' untuk memunculkan/menyembunyikan menu
    navLinks.classList.toggle("active");
});

// Menutup menu jika salah satu link diklik (UX yang lebih baik di mobile)
document.querySelectorAll(".nav-links li a").forEach(n => n.addEventListener("click", () => {
    navLinks.classList.remove("active");
}));