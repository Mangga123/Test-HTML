document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    let index = 0;

    function showBoxes() {
        // Sembunyikan semua box dengan efek fade out
        boxes.forEach((box) => {
            box.classList.remove("active");
        });

        // Tampilkan 2 box dengan efek fade in
        boxes[index].classList.add("active");
        boxes[(index + 1) % boxes.length].classList.add("active");

        // Scroll animasi ke box yang sedang tampil
        document.querySelector(".scroll-container").scrollTo({
            left: boxes[index].offsetLeft - 50,
            behavior: "smooth",
        });

        // Update index untuk iterasi selanjutnya
        index = (index + 1) % boxes.length;
    }

    // Tampilkan 2 box pertama saat halaman dimuat
    showBoxes();

    // Jalankan efek setiap 3 detik
    setInterval(showBoxes, 3000);
});
