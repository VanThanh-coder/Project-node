// element.innerHTML	Thay đổi hoặc lấy nội dung HTML của phần tử.
// element.textContent	Thay đổi hoặc lấy nội dung văn bản của phần tử (bỏ qua HTML).
// element.style.property	Thay đổi CSS inline của phần tử.
// element.setAttribute(attr, value)	Thay đổi hoặc gán giá trị thuộc tính cho phần tử.
// element.removeAttribute(attr)	Xóa một thuộc tính HTML của phần tử.

const element = document.getElementById("demo");
// innerHTML, innerText, textContent đều dùng để thay đổi văn bản
element.innerHTML = "Tôi đã học xong rồi";
element.style.color = "blue";
element.style.backgroundColor = "red";

function doi() {
  const link = document.getElementById("link");
  link.textContent = "facebook";
  link.setAttribute("href", "https://www.facebook.com");
}
const img1 = document.querySelector("img");
img1.setAttribute("alt", "dổi ảnh nhé");
const removeimg = document.querySelector("img");
// removeimg.removeAttribute("alt")

// document.title	Lấy hoặc thay đổi tiêu đề của trang.
// document.URL	Lấy URL hiện tại của tài liệu.
// document.domain	Lấy tên miền của tài liệu.
// document.body	Truy cập phần <body> của tài liệu.
// document.head	Truy cập phần <head> của tài liệu.
// document.documentElement	Truy cập phần <html> (root của tài liệu).
const inTT = document.getElementById("in");
inTT.innerHTML =
  "title: " +
  document.title +
  "<br>" +
  "URL: " +
  document.URL +
  "<br>" +
  "body: " +
  document.body +
  "<br>" +
  "head: " +
  document.head +
  "<br>" +
  "documentElement:" +
  document.documentElement;

// document.cookie	Truy cập và quản lý cookie.
// document.forms	Trả về danh sách các biểu mẫu (<form>) trên trang.
// document.images	Trả về danh sách các hình ảnh (<img>) trên trang.
// document.links	Trả về danh sách các liên kết (<a>) trên trang.

// max-age: Thời gian tồn tại của cookie (tính bằng giây).
// path: Quy định đường dẫn mà cookie có hiệu lực (thường là / để áp dụng cho toàn bộ trang web).
// secure: Chỉ gửi cookie qua kết nối HTTPS.
// domain: Chỉ định tên miền mà cookie có hiệu lự
// Bảo mật: Dễ bị đánh cắp nếu không dùng HTTPS (secure) hoặc HttpOnly.
document.cookie = "username=JohnDoe; max-age=3600; path=/; secure"; // thêm
document.cookie = "theme=dark; path=/;"; // thêm
// document.cookie = "username=; max-age=; path=/"; // xóa
const inthongtin = document.getElementById("inthongtin");
inthongtin.innerHTML = document.cookie;

// truy cập image
// thay đổi và tìm
let sc = (document.images[2].src = "com-tam-thit-nuong.jpg");
let al = document.images[2].alt;
let anh3 = (document.images[3].alt = "bún đậu mắm tôm");
const inimg = document.getElementById("inimg");
inimg.innerHTML = sc + "-----" + al + "-----" + anh3;

/// link
// thay đổi và tìm
let Link = document.links[1].href;
let kt = document.links.length - 1;
let link2 = (document.links.href = "Link mới");
//

var Mylink = document.getElementById("inLink");
Mylink.innerHTML = Link + "kich thuoc" + kt + link2;

// document.forms	Trả về danh sách các biểu mẫu (<form>) trên trang.
let form = document.forms["loginForm"]; // Truy cập form có name="loginForm"
let username = form.elements["username"]; // Truy cập input có name="username"
let password = form.elements["password"]; // Truy cập input có name="password"

form.addEventListener("submit", function (event) {
  event.preventDefault(); // ngăn chặn gửi đi để kiểm tra
  document.getElementById("outform").innerHTML =
    "username: " + username.value + "password: " + password.value;
});

// window.open()- mở một cửa sổ mới
// window.close()- đóng cửa sổ hiện tại
// window.moveTo()- di chuyển cửa sổ hiện tại
// window.resizeTo()- thay đổi kích thước cửa sổ hiện tại

// windowName gồm:
// _blank - Sefl vv...

// windowFeatures gồm:
// width và height: Kích thước cửa sổ.
// top và left: Vị trí của cửa sổ trên màn hình.
// resizable: Có cho phép thay đổi kích thước không (yes hoặc no).
// scrollbars: Có hiển thị thanh cuộn không (yes hoặc no).
// menubar, toolbar, location, status: Hiển thị hay ẩn các thanh công cụ tương ứng.

// window.open(URL, windowName, windowFeatures);
// window.open(
//   "index.html",
//   "_blabk",
//   "width=800,height=600,top=150,left=250,resizable=yes"
// );
// window.close(); // đóng cửa sổ hiện tại

//
let intt = document.getElementById("window");
intt.innerHTML =
  screen.width +
  "PX" +
  " x " +
  screen.height +
  "PX" +
  "URL: " +
  window.location.href +
  ", tên miền: " +
  window.location.hostname +
  ", tên tệp hiện tại: " +
  window.location.pathname +
  " ,giao thức trang web:" +
  window.location.protocol +
  ", tên máy chủ hiện tại: " +
  window.location.port;

// window.location.assign("https://www.facebook.com");// chuyển sang trang mới
