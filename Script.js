document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    let currentIndex = 0;

    function showNextBox() {
        boxes.forEach(box => box.classList.remove("active"));

        currentIndex = (currentIndex + 1) % boxes.length;
        let nextIndex = (currentIndex + 1) % boxes.length;

        boxes[currentIndex].classList.add("active");
        boxes[nextIndex].classList.add("active");
    }

    // Tampilkan 2 box pertama saat halaman dimuat
    boxes[0].classList.add("active");
    boxes[1].classList.add("active");

    setInterval(showNextBox, 3000); // Ubah setiap 3 detik
});
