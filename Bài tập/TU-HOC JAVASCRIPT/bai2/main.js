// toán tử
var a = 10;
document.write("a^2 = " + a ** 2 + "<br>"); // tương tự như pow(a, 2)
var x = 10;
y = 30;
if ((x &= y)) {
  // x = x & y
  document.write("bằng" + "<br>");
} else {
  document.write("ko bằng" + "<br>");
}
// =	x = y	x = y
// +=	x += y	x = x + y
// -=	x -= y	x = x - y
// *=	x *= y	x = x * y
// /=	x /= y	x = x / y
// %=	x %= y	x = x % y
// **=	x **= y	x = x ** y

// &=	x &= y	x = x & y
// ^=	x ^= y	x = x ^ y
// |=	x |= y	x = x | y

//kiểm tra kiểu dữ liệu typeof
var Name = "mesi";
document.write(typeof Name + "<br>");
// biến cục bộ
function TThong() {
  let lasname = "Lò Văn";
  document.write(lasname + "<br>");
}
TThong();
// biến toàn cục
var name = "Thành";
function TT() {
  document.write(name + "<br>");
}
TT();

// Đối tượng
const sinhVien = { Name: "Thành", Age: 20, Hometown: "Sơn La" };
document.write(
  "Name: " +
    sinhVien.Name +
    " Age: " +
    sinhVien.Age +
    " Hometown: " +
    sinhVien.Hometown +
    "<br>"
);

const CBlop = {};
CBlop.Name = "Phương Thảo";
CBlop.Age = 19;
CBlop.Hometown = "Hà Nội";
document.write(
  "Name: " +
    CBlop.Name +
    " Age: " +
    CBlop.Age +
    " Hometown: " +
    CBlop.Hometown +
    "<br>"
);
// var x = CBlop; // copy
// x.Age = 30;

//chưa xử lý xong
const lopTruong = {
  lastName: "Vũ",
  firstName: "Kiệt",
  Age: 22,
  Hometown: "Hà Nội",
  fullName: function () {
    return this.lastName + " " + this.firstName;
  },
};
// Cú pháp để truy cập thuộc tính của một đối tượng là:

// // objectName.property
// let age = person.age;
// hoặc
// //objectName["property"]
// let age = person["age"];
// hoặc
//objectName[expression]
// let age = person[x];

// đây là 3 cách gọi đối tượngdelete lopTruong["Hometown"];
document.write(lopTruong.lastName);

document.write((lopTruong.them = "Tuấn")); //thêm thuộc tính mới vào đối tượng

document.write(lopTruong["firstName"]);

var x = "Age";
document.write(lopTruong[x]);

delete lopTruong["Hometown"]; // xóa đối tượng
document.write(lopTruong["Hometown"] + "<br>");

// Bạn có thể truy cập các đối tượng lồng nhau
// bằng cách sử dụng ký hiệu dấu chấm hoặc ký hiệu
// ví dụ

const giaDinh = {
  Bo: "Xôm",
  Me: "Chung",
  Anh: "Hiền",
  Tui: "Thành",
  cars: {
    Moto1: "HONDA",
    Moto2: "YAMAHA",
    Moto3: "BMW",
    job: {
      job1: "Nông Dân",
      job2: "Sinh Viên",
    },
  },
};

document.write(
  "Bố: " + giaDinh.Bo + giaDinh.cars.Moto1 + giaDinh.cars.job.job1 + "<br>"
);

const TTME = giaDinh["Me"] + giaDinh["cars"]["Moto2"] + giaDinh["cars"]["job"]["job1"];
document.write("Mẹ:" + TTME.toUpperCase() + "<br>");

const lopPho = {
  Name: "Dũng",
  Age: 19,
  Hometown: "Hà Nội",
  student: "Sinh viên",
};
// gọi đối tượng foreach
// cách 1
for (let SV in lopPho) {
  document.write(lopPho[SV] + "<br>");
}
// cách 2
const SV = Object.values(lopPho);
document.write("Object.values: " + SV + "<br>");

// cách 3
for (let [bien, giatri] of Object.entries(lopPho)) {
  document.write(
    "object.entries: " + bien.toUpperCase() + ": " + " " + giatri + ",  "
  );
}
document.write("<br>");
// cách 4
const SV1 = JSON.stringify(lopPho);
document.write("JSON.tringify: " + SV1 + "<br>");

// hàm tạo đối tương;
function SinhVien(fName, lName, age, id, HT, fullName) {
  this.firstName = fName;
  this.lastName = lName;
  this.Age = age;
  this.ID = id;
  this.Hometown = HT;
  this.them = "thêm vào";
  this.fullName = function () {
    return this.firstName + this.lastName;
  };
}
document.write("<br>");
const Thanh = new SinhVien("Lò", "Thành", 20, 145802007136, "Sơn La");
for (let [bien, giatri] of Object.entries(Thanh)) {
  document.write(bien + ": " + " " + giatri + ";");
}
document.write("<br>");
document.write("<br>");
const Huy = new SinhVien("Nguyễn", "Huy", 19, 154802007137, "Hà Nội");
document.write(
  "firstName: " +
    Huy.lastName +
    ", Hometown: " +
    Huy.Hometown +
    "Add: " +
    Huy.them
);
document.write("<br>");
document.write("<br>");
document.write(Huy.fullName());
document.write("<br>");
