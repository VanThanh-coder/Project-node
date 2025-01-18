const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput1 = document.getElementById("password1");
const passwordInput2 = document.getElementById("password2");
const phoneInput = document.getElementById("phone");
const InTT = document.getElementById("InTT");
const clearButton = document.getElementById("clear");

function Register(e) {
  if (usernameInput.value != "") {
    if (usernameInput.value.length < 8) {
      alert("tên đăng nhập có ít nhất 8 ký tự!");
      usernameInput.focus();
      return false;
    }
  } else {
    alert("vui lòng nhập lại tên đăng nhập");
    usernameInput.focus();
    return false;
  }
  // Mật khẩu
  if (passwordInput1.value != "") {
    if (passwordInput1.value.length < 8) {
      alert("Mật khẩu có ít nhất 8 ký tự");
      passwordInput1.focus();
      return false;
    }
  } else {
    alert("vui lòng nhập lại mật khẩu!");
    passwordInput1.focus();
    return false;
  }
  // nhập lại mật khẩu
  if (passwordInput2 != "") {
    if (passwordInput1.value != passwordInput2.value) {
      alert("Mật khẩu không khớp");
      passwordInput2.focus();
      return false;
    }
  } else {
    alert("Vui lòng nhập lại mật khẩu!");
    passwordInput2.focus();
    return false;
  }
  // số điệ thoại
  if (phoneInput.value != "") {
    if (phoneInput.value.length < 10) {
      alert("có ít nhất 9 số");
      phoneInput.focus();
      return false;
    }
  } else {
    alert("vui lòng nhập vào số điện thoại");
    phoneInput.focus();
    return false;
  }
  const username = usernameInput.value;
  const password = passwordInput1.value;
  const phone = phoneInput.value;
  // Kiểm tra nếu tất cả trường đều được điền
  if (username && password && phone) {
    // Lưu vào localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("phone", phone);
    // Hiển thị lời chào
    updateGreeting();
  } else {
    alert("Vui lòng điền đầy đủ thông tin!");
    return false;
  }
  e.preeventDefault();
}
// Hàm hiển thị lời chào từ localStorage
function updateGreeting() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  const savedPhone = localStorage.getItem("phone");

  if (savedUsername && savedPassword && savedPhone) {
    InTT.innerHTML = `Tên đăng nhập:${savedUsername}Số điện thoại:${savedPhone} mật khẩu ${savedPassword} đã được lưu trữ an toàn.`;
  } else {
    InTT.textContent = "Vui lòng nhập thông tin chi tiết của bạn ở trên";
  }
}
// Xóa dữ liệu trong localStorage
clearButton.addEventListener("click", () => {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  localStorage.removeItem("phone");
  InTT.textContent = "dữ liệu đã được xóa";
});
// Hiển thị lời chào khi tải trang
updateGreeting();
