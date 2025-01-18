const images = ["./img/chao-hen-xoa-cay.jpg", "./img/com-tam-dac-biet.webp", "./img/com-tam-suong-nuong-dac-biet.jpg"]; // Danh sách ảnh
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length; // Chuyển sang ảnh kế tiếp
        document.getElementById("slider").src = images[currentIndex];
    }

    // Tự động chuyển ảnh mỗi 3 giây
    setInterval(changeImage, 3000);