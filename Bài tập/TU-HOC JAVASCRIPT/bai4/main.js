// kiểm tra số nguyên tối thiểu và tốt đa
// -(2 53 - 1) đến +(2 53 - 1).
document.getElementById("demo").innerHTML = Number.MAX_SAFE_INTEGER;
// KT xem có phải kiểu Number hay ko
let x = Number.isInteger(10);
document.write(x);

// phương pháp số
document.write("<br>");
var a = 500;
b = a.toString();
document.write(typeof b);
document.write("<br>");
let c = 39434;
// toExponential()trả về một chuỗi, với số được làm tròn và viết theo ký hiệu mũ.
document.write(c.toExponential(20));
document.write("<br>");
document.write(c.toFixed(4));
document.write("<br>");
let d = 38.43;
document.write(d.valueOf());

// Array

const SV = ["Huy", "Linh", "Dũng"];
SV[1] = "Linh ra ngoài";
document.write(SV + "<br>");
// tạo mảng
const sinhVien = [];
sinhVien[0] = "Phương Thảo";
sinhVien[1] = "Lương Thủy";
sinhVien[2] = "Mai Yến";
sinhVien.push("Nam");
sinhVien.pop();
sinhVien[sinhVien.length + 10] = "Huy";
document.write(sinhVien + "<br>");
for (var i in sinhVien) {
  document.write(sinhVien[i]);
}
// tạo một Mảng và gán giá trị cho nó:
document.write("<br>");
const cars = new Array("BWM", "Volvo", "saab");
cars[4] = "Vinfast"; // thay thế và thêm
document.write(cars);
document.write("<br>");

///////////////////////////////////////////////
// mảng đối tương
const SINHVIEN = ["Lò", "Thành", 20];
document.write(SINHVIEN);

const SINHVIEN1 = {
  firstName: "Dương",
  lastName: "Linh",
  Age: 19,
  Hometown: "Phú Thọ",
};
const A = SINHVIEN1["Age"];
document.write("<br>");
document.write(SINHVIEN1["firstName"] + " " + SINHVIEN1.lastName + " " + A);
document.write("<br>");

// phương pháp cơ bản của mảng
const xemay = ["Phanh", "biển số", "Bánh xe", "bô di"];
document.write("Ban đầu: " + xemay + "<br>");

document.write("Dộ dài mảng: " + xemay.length + "<br>");
xemay.push("Bô xe"); // thêm phần thử và cuối
document.write("Thêm phần tử: " + xemay + "<br>");
xemay.shift(); //xóa phần tử đầu
document.write("xóa phần tử đầu: " + xemay + "<br>");
xemay.pop(); //Xóa phần tử cuối
document.write("Xóa phần tử cuối: " + xemay + "<br>");
xemay.unshift("xi nhan"); //Thêm phần tử mới vào đầu
document.write("Thêm phần tử mới vào đầu: " + xemay + "<br>");

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
document.write("Tạo array mới: " + myChildren + "<br>");

// tìm kiếm array

const search = ["Linh", "Huy", "Thảo", "Thủy", "Kiệt"];
const tim = search.indexOf("Thủy");
document.write("Huy đc tìm thấy ở VT số: " + tim + "<br>");
const tim1 = search.includes("Thảo", 2);
document.write(tim1 + "<br>");

let search1 = [14, 36, 20, 16];
var tim2 = search1.find(kt);
var tim3 = search1.findIndex(kt);
var tim4 = search1.findLastIndex((x) => x > 30);
document.write(tim2 + "<br>");
document.write(tim3 + "<br>");
document.write("nhiệt đô trên 30 ở VT:" + tim4);
function kt(value, index, array) {
  return value > 18;
}
// Math.max.applyđể tìm số cao nhất trong một mảng
// document.write("Max:" + Math.Max.apply(null, search1));
document.write("min: " + Math.min.apply(null, search1));
let TD = search1.sort();
document.write("mảng tăng dần:" + TD);
document.write("Đảo ngược:" + TD.reverse());

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted(); // sắp xếp theo chuỗi
document.write(sorted);
///////////////////////////////////////////

const numbers = [45, 4, 9, 16, 25];
let txt = "";
function myNumber(value, index, array) {
  txt += value;
}
numbers.forEach(myNumber);
document.write(txt);
function myNumber1(value, index, array) {
  return value * 2;
}
let nb = numbers.map(myNumber1);
document.write(nb);

function myNumber2(tal, value, index, array) {
  return tal + value;
}
let sum = numbers.reduce(myNumber2);
document.write("sum: " + sum);
