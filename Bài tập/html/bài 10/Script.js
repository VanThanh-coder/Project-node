function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("vui lòng nhập tên đăng nhập và mật khẩu");
    return;
  }

  if (username.length < 5 || password.length < 5) {
    alert("tên đăng nhập và mật khẩu có ít nhất 5 ký tự");
    return;
  }
}
function thongtin() {
  // tạo mảng sinh viên trống
  let sinhVien = [];
  let sLSV = parseInt(prompt("Số lượng sinh viên:"));
  for (let i = 0; i < sLSV; i++) {
    let ds;
    let thuTu = i + 1;
    let id = prompt("ID:");
    let name = prompt("names:");
    let age = parseInt(prompt("Age:"));
    let weight = prompt("weight:");
    let hometown = prompt("homeetown:");
    // Thêm đối tượng sinh viên vào mảng
    sinhVien.push({ ds, thuTu, id, name, age, weight, hometown });
  }

  sinhVien.forEach((SV) => {
    // document.write() câu lệnh hiển thị trong trang web
    document.write("........DANH SÁCH SINH VIÊN........" + "<br>");
    document.writeln("Sinh viên thứ: " + SV.thuTu + "<br>");
    document.writeln("ID: " + SV.id + "<br>");
    document.writeln("Name: " + SV.name + "<br>");
    document.writeln("Age:" + SV.age + "<br>");
    document.writeln("Weight: " + SV.weight + "<br>");
    document.writeln("Hometown:" + SV.hometown + "<br>");
  });
  sinhVien.forEach((sv) => {
    //console.log() câu lệnh hiển thị trong console.write();
    console.log(".......DANH SÁCH SINH VIÊN........");
    console.log("Sinh Viên thứ: ", sv.thuTu);
    console.log("ID:", sv.id);
    console.log("NAME:", sv.name);
    console.log("AGE:", sv.age);
    console.log("WEIGHT:", sv.weight);
    console.log("HOMETOWN:", sv.hometown);
  });
}
function bam() {
  //ép kiểu chuỗi sang số
  let a = parseInt(prompt("nhap a"));
  console.log(typeof a);
  b = parseInt(prompt("nhap b = "));
  console.log(typeof b);
  c = Number(prompt("nhap c ="));
  console.log(typeof c);
  sum = a + b + c;
  console.log(a + " + " + b + " + " + c + " = ", sum);
  let x = 1;
  // isnan kiểu tra xem chuyển đổi kiểu dữ liệu đc ko
  console.log(isNaN(x));
  y = 2;
  z = x++ - ++y + 1;
  console.log("x", x);
  console.log("y", y);
  console.log("z", z);
}

function Tinh() {
  let dai = parseFloat(prompt("chiều dai"));
  let rong = parseFloat(prompt("chiều rông"));
  let r = parseFloat(prompt("nhap r ="));

  let chuvi = (dai + rong) * 2;
  dientich = dai * rong;
  console.log("dien tích:", dientich);
  console.log("chu vi:", chuvi);
  let PI = Math.PI;

  Chuvi = 2 * PI * r;
  Dientich = r * r * PI;
  console.log("Chu vi hình tròn", Chuvi);
  console.log("Diện tích hình tròn", Dientich);

  let a = 3;
  b = 3;
  // hàm mũ
  c = Math.pow(a, b);
  // hàm căn bậc
  d = Math.sqrt(9);
  // chuyển đổi âm thành dương
  e = Math.abs(-10);
  console.log("c = " + c);
  console.log("d = " + d);
  console.log("e = " + e);
  let x = 3.9;
  //làm tròn lên
  y = Math.ceil(x);
  // hàm floor làm tròn xuống
  z = Math.floor(x);
  console.log("y = " + y);
  console.log("z = " + z);

  let f = 3.1459;
  // làm tròn f số phần tử đơn vị
  j = f.toFixed(2);
  console.log("f = " + j);
  // tìm max
  max = Math.max(1, 4, 3, 2, 7, 5, 9, 4, 3);
  // tìm min
  min = Math.min(3, 6, 9, 3, 1, 8, 3, 7, 4, 2);
  console.log("Max = " + max);
  console.log("min = " + min);
}
// hàm chạy ngẫu nhiên
let rd = Math.random() * 3;
console.log(rd);
//ép kiểu nguyên
rd1 = parseInt(Math.random() * 10);
console.log("chay ngẫu nhiên 1 đến 10: ", rd1);
