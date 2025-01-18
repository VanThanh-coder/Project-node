const images = [
  "./img/bat-chao-dac-biet.jpg",
  "./img/chao-sieu-dac-dac-biet.jpg",
  "./img/com-tam-co-gi-dac-biet-ma-tro-thanh-dac-san-cua-sai-gon-2.webp",
  "./img/com-tam-dac-biet.webp",
  "./img/com-tam-suong-nuong-dac-biet.jpg",
]; // Danh sách ảnh
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Chuyển sang ảnh kế tiếp
  document.getElementById("slider").src = images[currentIndex];
}

// Tự động chuyển ảnh mỗi 3 giây
setInterval(changeImage, 2000);

function Register() {
  alert("Chúc mừng bạn đã đăng tài khoản thành công");
}

function buy() {
  alert("Bạn đã thanh toán thành công");
}

// Hàm thêm sản phẩm vào localStorage
function addToCart(name, price, imageUrl) {
  // Lấy giỏ hàng hiện tại từ localStorage (nếu có)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Kiểm tra nếu sản phẩm đã có, tăng số lượng
  const existingProduct = cart.find((item) => item.name === name);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    // Thêm sản phẩm mới
    cart.push({ name, price, quantity: 1, imageUrl });
  }

  // Lưu lại giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} Bạn đã thêm vào giỏ hàng thành công!`);
}

//////////////////////////////////////////////////////////////////////////////
// Lấy giỏ hàng từ home
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartBody = document.getElementById("cart-body");
const cartTotal = document.getElementById("cart-total");

// Hàm hiển thị giỏ hàng
function renderCart() {
  cartBody.innerHTML = ""; // Xóa nội dung cũ
  let total = 0;

  if (cart.length === 0) {
    cartBody.innerHTML = "<p>Không có sản phầm nào</p>";
  } else {
    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
                 <div>
                  <img src="${item.imageUrl}" alt="${item.name}" style="width:200px;">
                     <p class="mota">${item.name}</p>
                     <p class="price">Giá:${item.price}VNĐ</p>
                     <p class="quantity">Số Lượng: ${item.quantity}</p>
                 </div>
                 <button class="remove-btn" onclick="removeItem(${index})">Xóa</button>
             `;
      cartBody.appendChild(cartItem);
    });
  }

  cartTotal.textContent = `${total}VNĐ`; // Cập nhật tổng tiền
}

// Hàm xóa sản phẩm
function removeItem(index) {
  cart.splice(index, 1); // Xóa sản phẩm khỏi mảng
  localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật localStorage
  renderCart(); // Vẽ lại giỏ hàng
}

// Hiển thị giỏ hàng khi tải trang
renderCart();
