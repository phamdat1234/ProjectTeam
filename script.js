// Mảng chứa các đường dẫn ảnh
const images = [
    "https://cdn.tgdd.vn/Files/2021/03/09/1333700/cac-loai-banh-ngot-duoc-yeu-thich-nhat-tai-viet-nam-202103090937443232.jpg",
    "https://culacstudio.com/wp-content/uploads/chup-anh-san-pham-banh-kem-cai-lo-nuong-copy-1024x683.jpg",
    "https://daubepgiadinh.vn/wp-content/uploads/2018/05/hinh-banh-cupcake.jpg",
    "https://chupanh.vn/wp-content/uploads/2017/12/concept-chup-anh-mon-an-chum-anh-banh-ngot-nhin-la-me-ma00133.jpg",
    "https://anhquanbakery.com/uploads/images/banh-macaron-nhan-kem-socola-ganache-sieu-de-thuong.jpg"
  ];
 
let currentImageIndex = 0; // Mặc định ảnh đầu tiên sẽ được hiển thị

// Thay đổi ảnh khi click vào dot
function changeImage(index) {
    const mainImage = document.getElementById("main-image");
    const dots = document.querySelectorAll(".dot");

    // Mờ dần ảnh hiện tại
    mainImage.style.opacity = 0;

    // Chờ ảnh mờ hết rồi thay đổi ảnh
    setTimeout(() => {
        mainImage.src = images[index - 1]; // Chọn ảnh từ mảng dựa trên chỉ số
        mainImage.style.opacity = 1; // Hiển thị ảnh mới

        // Cập nhật trạng thái các dot
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index - 1].classList.add("active");
    }, 2000); // Thời gian đợi để ảnh mờ hết trước khi đổi ảnh
}

// Thêm sự kiện khi click vào ảnh
document.getElementById("main-image").addEventListener("click", () => {
    // Thay đổi ảnh tiếp theo khi click vào ảnh chính
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeImage(currentImageIndex + 1); // Index bắt đầu từ 1
});

// Cập nhật các chấm tròn để thay đổi ảnh khi click
const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        changeImage(index + 1); // Index bắt đầu từ 1
    });
});
  
  window.addEventListener("scroll", function () {
    const mainImage = document.getElementById("main-image");
    const scrollPosition = window.scrollY;
  
    // Khi cuộn, ảnh sẽ di chuyển lên dần
    if (scrollPosition < 300) {
      mainImage.style.transform = `translateY(-${scrollPosition / 3}px)`;
    } else {
      mainImage.style.transform = `translateY(-100%)`; // Ẩn ảnh khi cuộn qua một khoảng nhất định
    }
  });
  