// có thể dùng javascript thay đổi HTML và CSS
document.getElementById("demo").innerHTML = "Hello javascript";
document.getElementById("demo").style = "color:red;font-size:20pt;";
function hello() {
  document.getElementById("hello").innerHTML = "Hello tôi mới học javascript";
}
document.getElementById("cong").innerHTML = 5 + 6;
/////////////////////////////////////////////
var xin_chao = function () {
  var ten = document.getElementById("xinchao").value; // lấy giá trị từ input
  //localStorage để lưu trữ DL và luu là tên biến mình đặt
  //"giutrang" là id của the div trong html
  //.innerHTML là toàn bộ bên trong của thẻ div giu_trang
  // gán giá ten từ xinchao trong input
  localStorage.luu = document.getElementById("giutrang").innerHTML = ten; // giữ trang
};
var thong_bao = function () {
  document.getElementById("giutrang").innerHTML = " hết giờ";
};
// thong_bao tên biến của function
setTimeout(thong_bao, 3000); // 3000 tương đương với 3s
localStorage.ten = "Văn Thanh coder";

////////////////////////////////////////////
// 4 câu lệnh đầu ra
let Name = "Lò Văn Thành";
document.write(Name + "<br>");
console.log(Name);
window.alert(Name);
//////////////////////////////////////////
let a = 10,
  b = 11;
c = a + b;
document.write(" c   = " + c + "<br>");

//biến
// Từ khóa này var được sử dụng trong toàn bộ mã JavaScript từ năm 1995 đến năm 2015.
// Từ khóa letvà const đã được thêm vào JavaScript vào năm 2015.
// Từ khóa này var chỉ nên được sử dụng trong mã được viết cho các trình duyệt cũ hơn.
// var: Phạm vi hàm, có thể hoisting, cho phép tái khai báo.
// let: Phạm vi khối, có thể hoisting (nhưng không sử dụng trước khai báo), không cho phép tái khai báo.
// const: Phạm vi khối, có thể hoisting (nhưng không sử dụng trước khai báo), giá trị không thể thay đổi sau khi gán, không cho phép tái khai báo.

function ham() {
  var a = 20;
  function bien() {
    a = 10;
    document.write(a + "<br>");
  }
  bien();
  // let và const không thể khai báo lại .
  // let ko cho khai báo ngoài hàm
  function goi() {
    let b = 200;
    document.write(b + "<br>");
  }
  goi();

  if (true) {
    let x = 10;
    const y = 20;
    document.write(x + "<br>"); // In ra 10
    document.write(y + "<br>"); // In ra 20
  }
  // console.log(x); // Lỗi, vì x không tồn tại ngoài khối if
  // console.log(y); // Lỗi, vì y không tồn tại ngoài khối if

  // Lỗi, vì không thể thay đổi giá trị của `x` sau khi gán lần đầu
  // đc phép thay đổi giá trị mảng và đối tượng;
  const f = 500;
  f = 2233;
  document.write(f);
  // const PI = 3.14159265359;chính xác

  //   const PI;
  // PI = 3.14159265359;lỗi ko đc khai báo
}
ham();
