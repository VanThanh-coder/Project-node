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
