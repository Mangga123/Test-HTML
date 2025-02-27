document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlides() {
        slides.forEach((slide, i) => {
            slide.style.opacity = "0"; // Sembunyikan semua slide
        });

        slides[index].style.opacity = "1"; // Tampilkan slide aktif
        index = (index + 1) % slides.length;
    }

    setInterval(showSlides, 3000); // Ganti gambar setiap 3 detik
    showSlides(); // Tampilkan slide pertama saat halaman dimuat
});
