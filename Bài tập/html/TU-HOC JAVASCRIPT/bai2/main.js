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
var Nber = 13;
document.write(typeof Nber + "<br>");
var undef;
document.write(typeof undef + "<br>");
var a = null;
document.write(a);

//function
var sum = function (a, b) {
  return a + b;
};
document.write("sum: " + sum(5, 45) + "<br>");

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
