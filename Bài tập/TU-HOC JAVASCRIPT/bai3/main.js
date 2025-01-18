// phương pháp chuỗi string
var text1 = "ddddddd";
document.write(text1.length + "<br>"); // kích thước

var text2 = "  Lò Văn Thành     ";
document.write(text2.length + "<br>");
var text3 = text2.trim(); // xóa khoảng trống
document.write(text3 + "<br>");
document.write(text3.length + "<br>");

var text4 = "NGUYÊN CÔNG NGHĨA";
document.write(text4.toLowerCase() + "<br>"); // in thường
var text5 = "dương mạnh linh";
document.write(text5.toUpperCase() + "<br>"); // in hoa

var text6 = "My is facebook";
var text7 = text6.replace("facebook", "google"); // thay đổi đ tượng
document.write(text7 + "<br>");
text7 = text6.replace(/FACEBOOK/i, "Shopee"); // /FACEBOOK/i ko phân biệt hoa và thường
document.write(text7 + "<br>"); // /FACEBOOK/g phải khớp toàn cục

var text8 = "Hello Tiktok";
var text9 = text8.repeat(10); // trả về bản sao của text đó
document.write(text9 + "<br>");
// Lấy chữ cái thứ sáu của text8:
document.write(text8.at(6) + "<br>");
////////////////////////////////////////////////////////////
//Phương pháp tìm kiếm chuỗi
// Hai phương pháp indexOf()và search(), có bằng nhau không?
// indexOf()không thể sử dụng các giá trị tìm kiếm mạnh
// search()không thể sử dụng đối số vị trí bắt đầu thứ hai.
var text10 = "I love you";
var text11 = text10.indexOf("you"); // hàm tìm kiếm indexof
// tìm thấy "you" ở vị trí sô 7 nếu ko tìm thấy trả về -1
document.write('Tìm thấy "you" ở VT số: ' + text11 + "<br>");

var text12 = "anh da ko giu duoc nhieu hanh phuc cho em";
var text13 = text12.search("giu"); //ko tìm thấy trả về -1
document.write(text13 + "<br>");
// nếu ko khớp sẽ vê Null
var text14 = text12.match("hanh phuc");
document.write(text14 + "<br>");
// tìm kiếm toàn cục ko phân biệt hoa và thường
var text15 = text12.match(/DuoC NHiEU HanH PHUc/i);
document.write(text15 + "<br>");
//////////////////////////////////////////////////////////
// mẫu chuỗi

// Chuỗi mẫu cho phép các biến trong chuỗi:
var firstName = "Vũ";
var lastName = "Kiệt";
var fullName = `${firstName} Tuấn ${lastName}`;
document.write(fullName);

var str1 = "Danh sách";
str2 = ["Lò Văn Thành", "Dương Mạnh Linh", "Nguyễn Văn Huy"];
var str3 = `<h1>${str1}<h1><ul>`;
for (var i of str2) {
  str3 += `<li>${i}</li>`;
}
str3 += `</ul>`;
document.write(str3);
