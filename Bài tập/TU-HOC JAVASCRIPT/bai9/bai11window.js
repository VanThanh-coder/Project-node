document.write("<h1>1.Dối tượng window</h1>");

// Mở, đóng, kiểm soát cửa sổ:
// window.open(URL, name, specs);    // Mở cửa sổ/tab mới
// window.close();                  // Đóng cửa sổ/tab hiện tại
// window.moveTo(x, y);             // Di chuyển cửa sổ đến tọa độ (x, y)
// window.resizeTo(width, height);  // Thay đổi kích thước cửa sổ

// windowName gồm:
// _blank - Sefl vv...

// windowFeatures gồm:
// width và height: Kích thước cửa sổ.
// top và left: Vị trí của cửa sổ trên màn hình.
// resizable: Có cho phép thay đổi kích thước không (yes hoặc no).
// scrollbars: Có hiển thị thanh cuộn không (yes hoặc no).
// menubar, toolbar, location, status: Hiển thị hay ẩn các thanh công cụ tương ứng.

// window.open(URL, windowName, windowFeatures);

// window.open(
//   "bai10.html",
//   "_Sefl",
//   "width=200; height=300; top=30;left=30;resizable=yes "
// );

// Thông báo và xác nhận:
// window.alert("Hello!"); // Hiển thị hộp thoại cảnh báo
// window.confirm("Are you sure?"); // Hộp thoại xác nhận (OK/Cancel)
// window.prompt("Your name:"); // Hộp thoại nhập dữ liệu
window.confirm("bạn có đồng ý hay ko");

// kích thước tọa độ:
// console.log(window.innerWidth);   // Chiều rộng cửa sổ nội dung
// console.log(window.innerHeight);  // Chiều cao cửa sổ nội dung
// console.log(window.screenX);      // Tọa độ x của cửa sổ
// console.log(window.screenY);      // Tọa độ y của cửa sổ
document.write("chiều rộng nội dung : " + window.innerWidth);
document.write("chiều cao: " + innerHeight);
document.write(
  "tọa độ của cửa sổ: X =  " + window.screenX + "y = " + window.screenY
);

document.write("<h1>2.Navigator</h1>");
// Thông tin về trình duyệt:
// console.log(navigator.userAgent);   // Chuỗi nhận diện trình duyệt
// console.log(navigator.language);   // Ngôn ngữ trình duyệt (vd: 'en-US')
// console.log(navigator.platform);   // Nền tảng (vd: 'Win32', 'MacIntel')
document.write("chuỗi nhận diện trình duyệt: " + navigator.userAgent + "<br>");
document.write("Ngôn ngữ trình duyệt: " + navigator.language + "<br>");
document.write("nền tảng: " + navigator.platform + "<br>");

//kiểm tra hỗ trợ tính năng:
// console.log(navigator.onLine);     // Kiểm tra nếu trình duyệt đang online
// console.log(navigator.geolocation); // Hỗ trợ định vị địa lý
document.write(
  "Kiểm tra nếu trình duyệt đang online: " + navigator.onLine + "<br>"
);
document.write("hỗ trợ vị trí địa lý: " + navigator.geolocation + "<br>");
//.đối tượng srceen
document.write("<h1>3.đối tượng srceen</h1>");
// console.log(screen.width);          // Chiều rộng màn hình
// console.log(screen.height);         // Chiều cao màn hình
// console.log(screen.availWidth);     // Chiều rộng khả dụng (trừ thanh taskbar)
// console.log(screen.availHeight);    // Chiều cao khả dụng
// console.log(screen.colorDepth);     // Số bit đại diện độ sâu màu (vd: 24)
// console.log(screen.pixelDepth);     // Độ sâu pixel (thường là 24 hoặc 32)
document.write("width màn hình: " + screen.width + "<br>");
document.write("height: " + screen.height + "<br>");
document.write(
  " Chiều rộng khả dụng (trừ thanh taskbar): " + screen.availWidth
);
document.write("số bít độ sâu màu: " + screen.colorDepth + "<br>");
document.write("độ sau PX: " + screen.pixelDepth + "<br>");

document.write("<h1>4.locattion</h1>");
// console.log(location.href);       // URL đầy đủ (vd: https://example.com/page)
// console.log(location.protocol);   // Giao thức (vd: 'https:')
// console.log(location.hostname);   // Tên miền (vd: 'example.com')
// console.log(location.pathname);   // Đường dẫn (vd: '/page')
// console.log(location.search);     // Chuỗi query string (vd: '?id=123')
// console.log(location.hash);       // Phần hash (vd: '#section1')
document.write("URL: " + location.href + "<br>");
document.write("gia thức: " + location.protocol + "<br>");
document.write("Tên miền: " + location.hostname + "<br>");
document.write("đường dẫn: " + location.pathname + "<br>");
document.write(" Chuỗi query string: " + location.search + "<br>");
// location.assign("https://example.com"); // Điều hướng đến URL mới
// location.reload();                      // Tải lại trang
// location.replace("https://example.com"); // Thay thế URL hiện tại
//
document.write("<h1>5.Đối tượng History:</h1>");
// history.back();   // Quay lại trang trước
// history.forward(); // Tiến đến trang sau
// history.go(-1);   // Quay lại n bước (vd: -1 quay lại, 1 đi tới)

// Quản lý cookie hoặc lưu trữ thông tin trình duyệt.
// Theo dõi thông tin thiết bị và tối ưu giao diện (dựa trên screen).
// Điều hướng giữa các trang hoặc tải lại URL (location và history).
// Mở cửa sổ popup quảng cáo hoặc hộp thoại thông báo (window.open, alert).
// Kiểm tra tính năng trình duyệt để hỗ trợ các ứng dụng phức tạp (navigator).
document.write("<h1>thoi gian</h1>");
function myfunc() {
  let d = new Date();
  document.getElementById("Date").innerHTML = d.toLocaleTimeString();
}
let stop = setInterval(myfunc, 1000);

function settout() {
  document.getElementById("hetgio").innerHTML = "hết giờ sau 3 giây";
}
setTimeout(settout, 3000);
// // setTimeout(settout, 3000);// 3000 tương đương 3s
