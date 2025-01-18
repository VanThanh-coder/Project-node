// day / month/ year
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

let d = new Date(); // Hôm nay
document.write(d.toDateString() + "<br>"); // todatestring sẽ dễ đọc hơn
let d1 = new Date("2024-11-05");
document.write(d1 + "<br>");
let d2 = new Date(2022, 3);
document.write(d2 + "<br>");
let d3 = new Date(2021, 15, 23);
document.write(d3.toUTCString() + "<br>");
let d4 = new Date(2019, 24, 12, 12);
document.write(d4 + "<br>");
let d5 = new Date(2013, 5, 17, 6, 45);
document.write(d5 + "<br>");
let d6 = new Date(2015, 2, 8, 12, 45, 67);
document.write("Giờ quốc tế:" +d6.toISOString() +"<br>");

// định dạnh ngày tháng
// Ngày ISO	"2015-03-25" (Tiêu chuẩn quốc tế)
// Ngày ngắn	"25/03/2015"
// Ngày dài	"25 tháng 3 năm 2015" hoặc "25 tháng 3 năm 2015"

// getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	Get month as a number (0-11)
// getDate()	Get day as a number (1-31)
// getDay()	Get weekday as a number (0-6)
// getHours()	Get hour (0-23)
// getMinutes()	Get minute (0-59)
// getSeconds()	Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	Get time (milliseconds since January 1, 1970)
let today = new Date();
document.write("Hôm nay: " + today.getDate() + "<br>"); // hôm nay
document.write(
  "Hà Nội Hôm Nay Ngày " +
    today.getDate() +
    " Tháng " +
    today.getMonth() +
    " Năm " +
    today.getFullYear() +
    " Giờ " +
    today.getHours() +
    " Phút " +
    today.getMinutes() +
    "Giây" +
    today.getSeconds() +
    "<br>"
);
let day = new Date("2024-11-23");
let month = new Date("2024-11-23");
let year = new Date("2024-11-23");
document.write(
  "Ngày " +
    day.getDate() +
    " Tháng " +
    month.getMonth()  +
    " Năm " +
    year.getFullYear() +
    "<br>"
);

// phương pháp thiết lập Ngày

// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)

const today1 = new Date();
document.write(today1.getDate(11) + "<br>");
document.write(today1.getMonth(11) + 1 + "<br>");
const td = today1.getFullYear(2020, 11, 2);
document.write(td + "<br>");
document.write(today1.setDate(15));
document.write("<br>");
// Math
// hằng số toán học có thể được truy cập như các thuộc tính Toán học:
// lôgarthmic:
document.write("Math.E: " + Math.E + "<br>"); // 2.7
document.write("Math.PI: " + Math.PI + "<br>"); // 3.14
document.write("Math.SQRT2: " + Math.SQRT2 + "<br>");
document.write("Math.LN2:" + Math.LN10 + "<br>");
document.write("Math.LOG2E: " + Math.LOG2E + "<br>");
document.write("Math.Log10E: " + Math.LOG10E + "<br>");
// hàm logarit
document.write("Math.Log: " + Math.log(2) + "<br>"); //logarit
document.write("Math.log2" + Math.log2(4) + "<br>"); // logarit cơ số 2
document.write("math.log10: " + Math.log10(10) + "<br>"); //logarit cơ số 10
document.write("Math.log1p: " + Math.log1p(3) + "<br>");

// Hàm làm tròn số nguyên
document.write("Math.Round: " + Math.round(4.4) + "<br>"); //làm tròn số gần nhất output 4
document.write("Math.celie: " + Math.ceil(2.3) + "<br>"); //làm tròn lên output 3
document.write("Math.foot" + Math.floor(7.9) + "<br>"); // làm tròn xuống output 7
document.write(Math.trunc(3.9)); // làm tròn xuống output 3
/////////////////////////
// hàm thường sử dụng phổ biến nhất
document.write("Math.Pow: " + Math.pow(2, 3) + "<br>"); //bình phương
document.write("Math.sqrt: " + Math.sqrt(16) + "<br>"); // Căn bậc 2
document.write("Math.Random: " + Math.random() * 12 + "<br>"); // ngẫu nhiên
document.write("Math.abs: " + Math.abs(-10) + "<br>");
document.write("Math.Max: " + Math.max(8, 63, 8, 3, 4, 5, 2, 88, 9) + "<br>"); // tìm số lớn nhất
document.write(
  "Math.min: " + Math.min(5, 44, 66, 22, 33, 11, 99, 55, 33) + "<br>"
); // tìm số nhỏ nhất
document.write("Math.sin: " + Math.sin(23) + "<br>");
document.write("Math.cos:" + Math.cos(12) + "<br>");
document.write("Math.tans:" + Math.tan(3) + "<br>");

let rd = Math.random() * 5 + 1;
document.write("Ngẫu nhiên 1 đến 5: " + rd + "<br>"); // ngẫu nhiêu 1 đến 6

let nam = 17;
let x = Boolean(nam >= 18);
if (x) {
  document.write("ba da du tuoi" + "<br>");
} else {
  document.write("ban chua du tuoi" + "<br>");
}
//Toán Tử 3 ngôi
let bangoi = 5 > 3 ? "True" : "False";
document.write("Toán tử ngôi: " + bangoi + "<br>");
// if else
if (7 > 3) {
  document.write("7 Lớn hơn 3" + "<br>");
} else {
  document.write("7 Nhỏ hơn 3" + "<br>");
}
// if, else if, else
var DTB = 7;
if (DTB >= 8) {
  document.write("Giỏi" + "<br>");
} else if (DTB >= 6.5) {
  document.write("khá" + "<br>");
} else if (DTB >= 5) {
  document.write("Trun bình" + "<br>");
} else {
  document.write("Kém" + "<br>");
}
// Swicth case:
let chon = "B";
switch (chon) {
  case "A": {
    document.write("Chon: " + chon);
    break;
  }
  case "B": {
    document.write("Chon: " + chon);
    break;
  }
  case "C": {
    document.write("Chon: " + chon);
    break;
  }
  default: {
    document.write("Chọn ko hợp lệ");
  }
}
document.write("<br>");
// for- lặp qua một khối mã nhiều lần
// for/in- lặp qua các thuộc tính của một đối tượng
// for/of- lặp qua các giá trị của một đối tượng có thể lặp lại
// while- lặp qua một khối mã trong khi điều kiện được chỉ định là đúng
// do/while- cũng lặp qua một khối mã trong khi điều kiện được chỉ định là đúng

// for- lặp qua một khối mã nhiều lần
for (let i = 0; i <= 10; i++) {
  document.write(i + "<br>");
}
document.write("for: ");
const sinhVien = ["Linh", "Nam", "Thuy", "Kiệt"];
for (let i = 0; i <= sinhVien.length - 1; i++) {
  if (sinhVien[i] == "Nam" || sinhVien[i] == "Linh") {
    continue;
  }
  document.write(sinhVien[i]);
}
document.write("<br>");
document.write("For in: ");
// for/in- lặp qua các thuộc tính của một đối tượng
for (let i in sinhVien) {
  if (sinhVien[i] == "Thuy") {
    break;
  }

  document.write(sinhVien[i]);
}
document.write("<br>");
document.write("For: of: ");
// for/of- lặp qua các giá trị của một đối tượng có thể lặp lại
for (let i of sinhVien) {
  document.write(i);
}
document.write("<br>");
document.write("Foreach: ");
// foreach
sinhVien.forEach((element) => {
  document.write(element);
});

document.write("<br>");
document.write(" do while: ");
let i = 0;
do {
  document.write(sinhVien[i]);
  i++;
} while (sinhVien[i]);
