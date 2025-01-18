// Phương pháp tìm kiếm
// document.getElementById(id)	Tìm phần tử bằng ID (trả về một phần tử duy nhất).
// document.getElementsByTagName(name)	Tìm phần tử bằng tên thẻ (trả về HTMLCollection).
// document.getElementsByClassName(name)	Tìm phần tử bằng tên lớp (trả về HTMLCollection).
// document.querySelector(selector)	Tìm phần tử bằng CSS selector (trả về phần tử đầu tiên).
// document.querySelectorAll(selector)	Tìm tất cả phần tử khớp với CSS selector (trả về NodeList).

// tìm kiếm bằng id
const myid = document.getElementById("myid");
myid.style.color = "red";
myid.style.background = "green";
// tìm kiếm thẻ
const the = document.getElementsByTagName("p");
for (let i = 0; i < the.length; i++) {
  console.log(the[i].innerHTML);
}
// tìm kiếm class lỗi vì trùng vói tìm kiếm thẻ
const cl = document.getElementsByClassName("highlight");
for (let i = 0; i < cl.length; i++) {
  cl[i].style.color = "red";
  cl[i].textContent = "anh đã quay trở lại và tệ hại hơn xưa";
}

// document.querySelector: Trả về phần tử đầu tiên phù hợp.
// document.querySelectorAll: Trả về tất cả phần tử phù hợp dưới dạng NodeList.
// đầu tiên
const qrst = document.querySelector(".item");
qrst.innerHTML = "Mục mới";
// tác động tất cả
const tc = document.querySelectorAll(".item");
tc.forEach((element) => {
  element.innerHTML = "đổi mục mới";
});

const watchId = navigator.geolocation.watchPosition(
  (position) => {
    console.log(
      `Vĩ độ: ${position.coords.latitude}, Kinh độ: ${position.coords.longitude}`
    );
  },
  (error) => {
    console.error("Lỗi:", error.message);
  }
);

// Hủy theo dõi khi không cần thiết
// navigator.geolocation.clearWatch(watchId);
