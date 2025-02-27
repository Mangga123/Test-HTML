document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    let index = 0;

    function showBoxes() {
        // Sembunyikan semua box dengan efek fade out
        boxes.forEach(box => {
            box.classList.remove("active");
        });

        // Tampilkan 2 box saat ini dengan efek fade in
        boxes[index].classList.add("active");
        boxes[(index + 1) % boxes.length].classList.add("active");

        // Update index untuk iterasi selanjutnya
        index = (index + 1) % boxes.length;
    }

    // Tampilkan 2 box pertama saat halaman dimuat
    showBoxes();

    // Ubah tampilan setiap 3 detik
    setInterval(showBoxes, 3000);
});
