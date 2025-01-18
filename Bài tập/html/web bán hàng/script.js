function addproduct(add) {
  alert("ban đã thêm điện thoại " + add + " vào giỏ hàng thành công");
}
function buy() {
  alert("bạn đã đặt hàng thành công");
}

const registerContainer = document.getElementById("dangky-container");
const showRegisterBtns = document.querySelectorAll(".buy-button");
const closeBtn = document.querySelector(".Close");

// Hiển thị bảng đăng ký khi nhấp vào bất kỳ nút nào
showRegisterBtns.forEach((button) => {
  button.addEventListener("click", () => {
    registerContainer.style.display = "flex";
  });
});

// Đóng bảng đăng ký khi nhấp vào nút đóng
closeBtn.addEventListener("click", () => {
  registerContainer.style.display = "none";
});
