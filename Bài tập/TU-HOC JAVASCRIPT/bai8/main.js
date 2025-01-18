// Tạo một đối tượng JavaScript trống bằng cách sử dụng {}
document.write("<h1>Định nghĩa đối tượng</h1>");
const sinhVien = { firstName: "Lò" };
sinhVien.lastName = "Thành";
sinhVien["Age"] = 20;
sinhVien[3] = "Sơn La";

document.write(
  sinhVien["firstName"] +
    sinhVien.lastName +
    sinhVien["Age"] +
    sinhVien[3] +
    "<br>"
);
//Tạo một đối tượng JavaScript trống bằng cách sử dụng new Object()
const sinhVien1 = new Object();
sinhVien1[0] = "Huy";
sinhVien1.Age = 19;
sinhVien1.Hometown = "Hà Nội";
document.write(sinhVien1[0] + sinhVien1.Age + sinhVien1["Hometown"] + "<br>");

///hàm đối tượng
const sinhVien2 = function (first, last, age, Hometown) {
  this.firstName = first;
  this.lastName = last;
  this.Age = age;
  this.Hometown = Hometown;
};

const Linh = new sinhVien2("Dương", "Linh", 19, "Phú Thọ");
const Thao = new sinhVien2("Phương", "Thảo", 19, "Hà Nội");
document.write(
  Thao["firstName"] + Thao.lastName + Thao.Age + Thao.Hometown + "<br>"
);
document.write(
  Linh.firstName + Linh.lastName + Linh.Age + Linh.Hometown + "<br>"
);

// mẫu đối tượng sử dụng từ khóa prototype
document.write("<h1> mẫu đối tượng</h1>");
sinhVien2.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
const Dung = new sinhVien2("Minh", "Dũng", 19, "Hà Nội");
document.write(Dung.fullName());

document.write("<h1>Phương pháp đối tượng JavaScript</h1>");
//Phương pháp đối tượng JavaScript

// sao chép các thuộc tính từ một hoặc nhiều đối tượng nguồn sang một đối tượng đích.
const sv1 = {
  firstName: "Tuấn",
  lastName: "Kiệt",
  Age: 22,
  Hometown: "Hà Nội",
};

// vòng lặp for in
for (let i in sv1) {
  document.write(sv1[i] + "<br>");
}
const sv2 = { firstName: "Nguyễn", lastName: "Nghĩa" };
Object.assign(sv1, sv2); // copy sv2 sang sv1
//Object.entries()trả về một mảng các cặp khóa/giá trị trong một đối tượng:
const thongTin = Object.entries(sv1, sv2);
document.write(thongTin + "<br>");

// Object.values()tương tự như Object.entries()
const thongTin1 = Object.values(sv2);
document.write(thongTin1 + "<br>");

// return array chứa từ khóa đối tượng
const key = Object.keys(sv1);
document.write(key + "<br>");

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
document.write(text + "<br>");

const fruits1 = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500],
];
// Phương pháp này fromEntries()tạo ra một đối tượng từ danh sách các cặp khóa/giá trị.
const thongTin2 = Object.fromEntries(fruits1);
document.write(thongTin2.apples + "<br>");

document.write("<h1>Thuộc tính đối tượng JavaScript</h1>");
//Phương pháp quản lý tài sản
// Object.defineProperty(object, property, descriptor)

const sv3 = {
  lastName: " Khánh",
  firstName: "Lường",
  Age: 20,
  weight: "69kg",
  language: "VI",
};
// Thêm một Thuộc tính mới
Object.defineProperty(sv3, "Height", { value: "1.65m" });
document.write(
  sv3.firstName + sv3.lastName + sv3.Height + sv3.language + "<br>"
);
// Object.defineProperty()cũng có thể được sử dụng để thêm Getter và Setter:

Object.defineProperty(sv3, "fullName", {
  get: function () {
    return this.firstName + " " + this.lastName;
  },
});
document.write(sv3.fullName + "<br>");

// Liệt kê tất cả các thuộc tính đối tượng
const txt = Object.getOwnPropertyNames(sv3);
document.write(txt + "<br>");

const obj = {};
// từ chatgpt
Object.defineProperty(obj, "name", {
  value: "JavaScript",
  writable: false,
  enumerable: true,
  configurable: false,
});
document.write(obj.name); // Output: JavaScript
obj.name = "Python"; // Không thay đổi được giá trị (do writable: false)
document.write(obj.name); // Output: JavaScript

document.write("<h1>Bộ truy cập đối tượng</h1>");
// Bộ truy cập đối tượng
const sinhVien3 = {
  firstName: "Lương",
  lastName: "Thủy",
  Age: 19,
  Hometown: "Nam Định",
  language: "En",
  ID: "",
  get lang() {
    return this.language;
  },
  set truycap(id) {
    return (this.ID = id);
  },
  get fullName() {
    return (
      this.firstName +
      " - " +
      this.lastName.toUpperCase() +
      " - " +
      this.Age +
      " - " +
      this.Hometown +
      " - " +
      this.language +
      " - " +
      this.ID
    );
  },
};

sinhVien3.truycap = "014802007139";
document.write("truy cap vao id cua SV: " + sinhVien3.ID + "<br>");
document.write(sinhVien3.lang + "<br>");
for (let [bien, giatri] of Object.entries(sinhVien3)) {
  document.write(bien.toUpperCase() + ":" + " " + giatri + "  " + "<br>");
}
document.write(sinhVien3.fullName.toUpperCase());

///////////////////////////////////
document.write("<h1>Phương pháp bảo vệ đối tượng</h1>");
//Phương pháp bảo vệ đối tượng

//Ngăn chặn việc thêm thuộc tính đối tượng
// Object.preventExtensions(object)

//Trả về true nếu thuộc tính có thể được thêm vào một đối tượng
//Object.isExtensible(object);

//Ngăn chặn việc thêm và xóa thuộc tính đối tượng
// Object.isSealed(object)

// ngăn chặn mọi thay đổi đối thượng
// Object.freeze(object)

//trả về đối tượng bị đóng băng
// Object.isFrozen(object)

const sinhVien4 = ["Nam", "Huy", "Linh", "kiệt", "Thảo"];
//Ngăn chặn việc thêm thuộc tính đối tượng
//có thể xóa sửa thay đổi
Object.preventExtensions(sinhVien4);
// check xem sv có thể truy cập dc hay ko
let check = Object.isExtensible(sinhVien4);
document.write(check + "<br>");
try {
  sinhVien4.push("Thành");
  // delete sinhVien4[3];
  document.write(sinhVien4);
} catch (error) {
  document.write(error + "<br>");
}

var color = { do: "Red", xanh: "Blue", vang: "Yellow", tim: "Pink" };
// Object.seal()ngăn chặn việc thêm hoặc xóa các thuộc tính mới.
// ko thể xóa thêm thay đổi cấu hình có thể T đổi giá trị
Object.seal(color);
let check1 = Object.isExtensible(color);
let text1 = "";
document.write(check1 + "<br>");
// code đang gặp lỗi chx xác đinh đc
try {
  delete color["xanh"];
  text1 = Object.values(color);
} catch (error) {
  text1 += error;
}
document.write(text1 + "<br>");

const sinhVien5 = { firstName: "Nguyễn", lastName: "Huy", Age: 19 };
// ko thể xóa thêm thay đổi cấu hình có thể T đổi giá trị
Object.seal(sinhVien5);

let check2 = Object.isSealed(sinhVien5);
document.write(check2 + "<br>");
sinhVien5.firstName = "Vũ"; // có thể T đổi
document.write("ĐƯợc: " + sinhVien5.firstName + "<br>");
sinhVien5.Hometown = "Hà Nội"; // ko thể thêm đc
document.write("KO được: " + sinhVien5.Hometown + "<br>");
delete sinhVien5.Age; // ko thể xóa giữ nguyên đc
document.write("ko xóa đc: " + sinhVien5.Age + "<br>");

// Create Object
const person = { firstName: "John", lastName: "Doe" };
// ko thể hết
Object.freeze(person);
// Object.isFrozen()có thể được sử dụng để kiểm tra xem một vật
//  thể có bị đóng băng hay không.
//Object.isFrozen()về giá trị true nếu đối tượng bị đóng băng.
let answer = Object.isFrozen(person);
document.write(answer);
