document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    let currentIndex = 0;

    function showBox(index) {
        boxes.forEach((box, i) => {
            if (i === index) {
                box.classList.add("active"); // Fade in
            } else {
                box.classList.remove("active"); // Fade out
            }
        });
    }

    function nextBox() {
        boxes[currentIndex].classList.remove("active"); // Hilangkan kotak sekarang
        currentIndex = (currentIndex + 1) % boxes.length; // Pindah ke kotak berikutnya
        boxes[currentIndex].classList.add("active"); // Munculkan kotak baru
    }

    showBox(currentIndex); // Tampilkan kotak pertama saat halaman dimuat
    setInterval(nextBox, 3000); // Ganti kotak setiap 3 detik
});
