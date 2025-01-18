document.title = "Trang mới"; // đổi tiêu đề của trang

// document.body.style.background = "red"; // đổi nền thẻ body

document.body.style.color = "red"; // đổi màu chũ

const firstTitle = document.querySelector(".title"); // Chọn phần tử đầu tiên có class "title"
firstTitle.textContent = "Tiêu đề đã thay đổi!";

// thay đổi tất cả các danh sách
let items = document.querySelectorAll(".items");
items.forEach((item) => {
  item.style.background = "Black";
  item.style.color = "yellow";
});

// Tìm kiếm các phần tử HTML
// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name
//tìm phần tử theo tên thẻ
let tim = document.getElementsByTagName("span");
for (let i = 0; i < tim.length; i++) {
  tim[i].style.backgroundColor = "green"; // Đổi màu nền
}
let las = document.getElementsByClassName("lop");
for (let i = 0; i < las.length; i++) {
  las[i].style.background = "yellow"; // nền
  las[i].style.color = "red"; // mầu chữ
  las[i].textContent = "đây làm vàng"; // đổi tên trong lop
}

// Thay đổi các phần tử HTML
// element.innerHTML =  new html content	Change the inner HTML of an element
// element.attribute = new value	Change the attribute value of an HTML element
// element.style.property = new style	Change the style of an HTML element
// Method	Description
// element.setAttribute(attribute, value)	Change the attribute value of an HTML element
function ip() {
  let Name = document.getElementById("name").value; // lấy giá từ input
  document.getElementById("hienthi").innerHTML = Name;
}
// element.innerHTML =  new html content	Change the inner HTML of an element
function addToCart(product) {
  const cart = document.getElementById("cart");
  cart.innerHTML = `<li>${product}</li>`;
}
// element.attribute = new value	Change the attribute value of an HTML element
// phầntử.tên thuộc tính = Giá trị mới
function doi() {
  let linkelement = document.getElementById("link");
  linkelement.href = "https://www.facebook.com";
  linkelement.textContent = "đi đến facebook";
  let txt = document.getElementById("text");
  // classNam là thuộc tính class bên css
  txt.className = "highlight";
}
// thay đổi
function thay() {
  // const link = document.getElementById("thay");
  // element.setAttribute("tên thuộc tính", "new");
  link.setAttribute("href", "https://openai.com"); // Thay đổi liên kết
  link.textContent = "Đi đến OpenAI"; // Thay đổi nội dung liên kết
}

////////////////////////////////////////
// let newElement = document.createElement(new);
// dùng để tạo phần tử mới trong js
function add() {
  let content = document.getElementById("content");
  let p = document.createElement("p");
  p.textContent = "đoạn Văn bản";
  content.appendChild(p);
}
// tạo bảng
function tao() {
  const tao = document.getElementById("table");
  const table = document.createElement("table");
  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.textContent = "Tiêu đề";
  tr.appendChild(th);

  const td = document.createElement("td");
  td.textContent = "Lò Văn thành";
  tr.appendChild(td);
  table.appendChild(tr);
  tao.appendChild(table);
}

function remove() {
  const container = document.getElementById("container");
  const xoa = document.getElementById("text1");
  container.removeChild(xoa);
  // document.getElementById("text2").remove(); // xóa trực tiếp ko cần tham chiếu của cha
}

function thaythe() {
  const SinhVien = document.getElementById("sinhvien");
  const sv1 = document.getElementById("SV1"); // sinh viên cần thay thế
  const newsv = document.createElement("p");
  newsv.textContent = "Sinh viên mới";
  SinhVien.replaceChild(newsv, sv1);
  SinhVien.style.backgroundColor = "yellow";
}

const luu = document.getElementById("luu");
const iput = document.getElementById("fname");
luu.addEventListener("click", function () {
  localStorage.setItem("fname", iput.value);
  updateGreeting();
});
function updateGreeting() {
  const l = localStorage.getItem("fname");
  if (l) {
    document.getElementById("inttt").innerHTML = l;
  }
}
const xoa = document.querySelector("#xoa");
xoa.addEventListener("click", function () {
  localStorage.removeItem("fname");
  alert("du lieu da duoc xoa");
});

// navigator.geolocation.getCurrentPosition(
//   (position) => {
//     console.log(
//       `Vĩ độ: ${position.coords.latitude}, Kinh độ: ${position.coords.longitude}`
//     );
//   },
//   (error) => {
//     switch (error.code) {
//       case error.PERMISSION_DENIED:
//         console.error("Người dùng từ chối cấp quyền định vị.");
//         break;
//       case error.POSITION_UNAVAILABLE:
//         console.error("Không thể xác định vị trí hiện tại.");
//         break;
//       case error.TIMEOUT:
//         console.error("Quá thời gian yêu cầu định vị.");
//         break;
//       default:
//         console.error("Lỗi không xác định.");
//     }
//   }
// );
