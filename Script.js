let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlides() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

setInterval(showSlides, 3000); // Ganti gambar setiap 3 detik
showSlides(); // Tampilkan slide pertama saat halaman dimuat
