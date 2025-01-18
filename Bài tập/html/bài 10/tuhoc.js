// cách 1 đặt button trong sscrip luôn
// câu lệnh in ra để hiển thị trong trang web
// document.write("<button onclick=helo()>Bấm</button>");
// // cách 2
// document.getElementById("demo").innerHTML = "Lò Văn Thành";
// function helo() {
//   alert("thôi đi ông ơi");
// }

// cách 1
/*
function GioiThieuBanThan(name, year) {
  document.write("Tôi là " + name + " sinh năm " + year + "<br>");
}
GioiThieuBanThan("Lò Văn Thành", 2004);
GioiThieuBanThan("Lê Quyền Linh", 2005);
GioiThieuBanThan("Vũ Minh Dũng"); //undefined
*/
// cách 2
/*
function GioiThieu(name = "Thành", year = 2004) {
  document.write("Tôi là " + name + " sinh năm " + year + "<br>");
}
GioiThieu();
GioiThieu("Huy", 2005);
GioiThieu("Linh");
*/
// cách 3
/*
function ham(name, year) {
  name = prompt("Name:");
  year = parseInt(prompt("year: "));
  document.write("Name: " + name);
  document.write("Year: " + year + "<br>");
}
let slsv = parseInt(prompt("nhap so luong"));
for (let i = 0; i < slsv; i++) {
  ham();
}*/

// [object] chức năng
//cách 4
/*var SinhVien = {
  name: "Thành",
  year: 2004,
  intro: function () {
    document.write(this.name);
    document.write(this.year);
  },
};
SinhVien.intro();
*/
// length	Trả về số lượng ký tự của chuỗi
// toUpperCase()	Chuyển toàn bộ ký tự của chuỗi về dạng chữ in hoa
// toLowerCase()	Chuyển toàn bộ ký tự của chuỗi về dạng chữ thường
// concat()	Nối các chuỗi lại với nhau
// indexOf()	Trả về chỉ số của chuỗi trùng khớp được tìm thấy đầu tiên
// (Khi bạn muốn tìm một chuỗi con nào đó trong chuỗi)
// lastIndexOf()	Trả về chỉ số của chuỗi trùng khớp được tìm thấy sau cùng
// (Khi bạn muốn tìm một chuỗi con nào đó trong chuỗi)
// charAt()	Trích xuất một ký tự trong chuỗi
// substring()	Trích xuất một chuỗi con trong chuỗi
// substr()	Trích xuất một chuỗi con trong chuỗi
// replace()	Thay thế một nội dung nào đó trong chuỗi bằng nội dung mới
// var a = "Lập ";
// var b = "trình";
// var c = " web";
// var str1 = a.concat(b, c); //Tương tự "Lập " + "trình" + " web"
// var str2 = a.concat(b, " di động"); //Tương tự "Lập " + "trình" + " di động"
// var str3 = "Java".concat("Script"); //Tương tự "Java" + "Script"
// document.write(str1 + "<br>");

// var bien = "anh yêu em 1 lần thôi";
// var map = bien.match("em"); // phân biệt chữ hoa chữ thường
// document.write("dã tìm thấy em ở đây rồi ", map + "<br>");

// onclick	Sự kiện xảy ra khi người dùng click chuột vào phần tử
// ondblclick	Sự kiện xảy ra khi người dùng click kép chuột vào phần tử
// onmouseenter	Sự kiện xảy ra khi người dùng di chuyển con trỏ vào phần tử
// onmouseleave	Sự kiện xảy ra khi người dùng di chuyển con trỏ ra khỏi phần tử.
// onkeydown	Sự kiện xảy ra khi người dùng đang nhấn một phím
// onkeyup	Sự kiện xảy ra khi người dùng nhả phím ra
// oncopy	Sự kiện xảy ra khi người dùng sao chép nội dung của phần tử
// oncut	Sự kiện xảy ra khi người dùng cắt nội dung của phần tử
// onpaste	Sự kiện xảy ra khi người dùng dán nội dung vào phần tử
// onchange	Sự kiện xảy ra khi người dùng thay đổi giá trị của phần tử

// function kq() {
//   let x = 30;
//   y = 100;
//   z = (x + y) * 2;
//   alert("kết quả là: " + z);
// }
// document.write("145e+2 sẽ bằng với: " + 145e2 + "<br>"); // = 14500
// var c = 35 - "5";
// var d = "35" / "5";
// console.log(d);

// var date = new Date();
// date.setHours(17);
// document.write(date);
/*
var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];
document.write(mobile);

var SinhVien = [];
SinhVien["name"] = "Nguyễn Thành Nhân";
SinhVien["year"] = 1993;
SinhVien["city"] = "Cần Thơ";
document.write(SinhVien["name"]);

var motorbike = [
  "Honda",
  ["Jupiter", "Exciter", "Sirius", "Nouvo"],
  "Suzuki",
  "SYM",
  "Piaggio",
];
document.write(motorbike[1][3]);

var motorbike = [
  "Honda",
  ["Jupiter", "Exciter", ["Sirius phanh cơ", "Sirius phanh đĩa"], "Nouvo"],
  "Suzuki",
  "SYM",
  "Piaggio",
];
document.write(motorbike[1][2][0]);

var motorbike = ["Honda", "Yamaha", "Suzuki", "SYM", "Piaggio"];
for (var i = 0; i < motorbike.length; i++) {
  document.write("- " + motorbike[i] + "<br>");
}

var data = [
  ["HTC", "Nokia", "SamSung", "LG", "Apple"],
  ["Honda", "Suzuki", "Yamaha"],
  ["Nguyễn Thành Nhân", "Nam", 1993, "Cần Thơ"],
];
for (var i = 0; i < data.length; i++) {
  for (var j = 0; j < data[i].length; j++) {
    document.write("- " + data[i][j] + "<br>");
  }
  document.write("<hr>");
}
  var SinhVien = {
  name: "Nguyễn Thành Nhân",
  year: 1993,
  city: "Cần Thơ",
  phone: 2421,
};
document.write(SinhVien["name"]);
document.write(SinhVien["year"]);
document.write(SinhVien["city"]);
document.write(SinhVien["phone"]);
*/
// var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple"];
// var x = mobile.push("PFT"); //Biến x sẽ có giá trị là 6
// document.write("x = " + x + "</br>");
// var y = mobile.pop(); // xóa cuối  Biến y sẽ có giá trị là chuỗi FPT
// document.write("y = " + y + "</br>");
// var z = mobile.shift(); // xóa đầu
// document.write("z = " + z + "</br>");
// var e = mobile.slice(0, 4); //start đến end var tên mảng = array.slice(start, end);
// document.write("e = " + e + "</br>");
// var i = mobile.splice(1); //dùng để thêm hoặc xóa "một hoặc nhiều phần tử" ở vị trí bất kỳ trong mảng.
// document.write("i = " + i + "</br>");

// var day = new Date().getDay();
// if (day == 0) {
//   document.write("Hôm nay là Chủ Nhật");
// } else if (day == 1) {
//   document.write("Hôm nay là Thứ Hai");
// } else if (day == 2) {
//   document.write("Hôm nay là Thứ Ba");
// } else if (day == 3) {
//   document.write("Hôm nay là Thứ Tư");
// } else if (day == 4) {
//   document.write("Hôm nay là Thứ Năm");
// } else if (day == 5) {
//   document.write("Hôm nay là Thứ Sáu");
// } else {
//   document.write("Hôm nay là Thứ Bảy");
// }

// for (var i = 0; i < 10; i++) {
//   for (j = 0; j < 14; j++) {
//     document.write("<button>Nut</button>");
//   }
//   document.write("<div style='clear:both'></div>");
// }

// for (var i = 1; i <= 10; i++) {
//   if (i == 2 || i == 5 || i == 9) {
//     continue;
//   }
//   document.write(i + "<br>");
// }

// var mobile = ["HTC", "Nokia", "SamSung", "LG", "Apple", "Lenovo"];
// for (var i = 0; i < mobile.length; i++) {
//   document.write(mobile[i] + "<br>");
// }

// để thông báo lỗi
// try
// {
//   // công việc
// }
// catch(tên)
// {
//    //thông báo lỗi
// }
// try {
//   aaaleert("<p>Tài liệu học JavaScript</p>");
//   document.write(text);
// } catch (err) {
//   document.write(err + "<br>");
//   document.write("Loại lỗi: " + err.name + "<br>");
//   document.write("Thông báo lỗi: " + err.message + "<br>");
// }

// document.write("<div id=demo></div>");
// document.getElementById("demo").innerHTML = "Hello".charAt(4); // o
// document.getElementById("demo").innerHTML = "aello".charCodeAt(0); //97
// var a = String.fromCharCode(65); //A
// document.write(a + "<br>");
// var ten = "lo van thanh";
// ten1 = ten.toUpperCase(); // chuyên tất cả thành chữ in hoa
// ten2 = ten.toLowerCase(); // chuyển tất cả thành in thường
// document.write(ten1 + "<br>");
// document.write(ten2 + "<br>");
console.log(Date);