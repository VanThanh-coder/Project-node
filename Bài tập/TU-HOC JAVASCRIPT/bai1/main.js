// có thể dùng javascript thay đổi HTML và CSS
document.getElementById("demo").innerHTML = "Hello javascript";
document.getElementById("demo").style = "color:red;font-size:20pt;";
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
// var: Phạm vi hàm, có thể hoisting, cho phép tái khai báo.
// let: Phạm vi khối, có thể hoisting (nhưng không sử dụng trước khai báo), không cho phép tái khai báo.
// const: Phạm vi khối, có thể hoisting (nhưng không sử dụng trước khai báo), giá trị không thể thay đổi sau khi gán, không cho phép tái khai báo.
