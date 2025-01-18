const sv = new Map([
  ["Linh", 19],
  ["Nam", 20],
  ["Huy", 19],
]);
sv.delete("Nam"); // xóa Nam

sv.set("Linh", 30); // thay đổi mảng trong map
const numb = sv.get("Linh");
document.write(numb + "<br>"); // 30
document.write(sv.get("Nam") + "<br>"); // 20
document.write(sv.has("Huy") + "<br>"); // true
sv.clear(); // xóa sạch
document.write(sv.size + "<br>");

// kiểm tra kiểu dữ liệu
document.write(typeof "Thành" + "<br>"); // tring
document.write(typeof 23 + "<br>"); // number
document.write(typeof 3.14 + "<br>"); // number
document.write(typeof Boolean + "<br>"); // function
document.write(typeof true + "<br>"); // boolean
document.write(typeof false + "<br>"); //boolean
document.write(typeof null + "<br>"); // object
document.write(typeof 1234n + "<br>"); //bigint
document.write(typeof new Array(2, 3) + "<br>"); // object
document.write(typeof new Date() + "<br>"); // object
document.write(typeof new Map() + "<br>"); // object
document.write(typeof new Set() + "<br>"); // object
document.write(typeof function () {} + "<br>"); // function
document.write(typeof [] + "<br>"); // object
document.write(typeof {} + "<br>"); // object
+"<br>";
document.write(typeof x + "<br>"); //undefined

// chuyển đổi kiểu
var x = "10";
y = parseInt(x);
document.write(typeof y + "<br>");
var nb = 30;
nber = nb.toString();
document.write(typeof nber + "<br>");

//Cú pháp gán phân rã
//Phân hủy đối tượng
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};
// Destructuring
let { firstName, lastName, country = "US" } = person;
document.write(firstName + "" + lastName + country + "<br>");

const numbers = [10, 20, 30, 40, 50, 60, 70];
// Destructuring
const [a, b, ...rest] = numbers;
document.write(a + b + rest + "<br>");

const numbers1 = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers1);

// biểu thức chính quy dùng tìm kiếm văn bản
let txt1 = "My Name is Thanh";
txt2 = txt1.search(/tHaNh/i);
document.write("Tìm thấy Thanh ở vt:" + txt2 + "<br>");
txt3 = txt1.replace(/ThANh/i, "Linh");
document.write(txt3 + "<br>");
txt4 = txt1.match(/[h]/g);
document.write(txt4 + "<br>");
txt5 = "red, yellow, green, pink, red, blue, red, blue";
txt6 = txt5.match(/(red|blue)/g);
document.write(txt6 + "<br>");
document.write(/nAme/i.test(txt1) + "<br>"); //output true tìm kiếm một chuỗi ký tự "s":
document.write(/thanh/i.exec(txt1) + "<br>"); //output Thanh ko thấy trả về null

// Câu lệnh này try định nghĩa một khối mã để chạy (để thử).
// Câu lệnh này catch định nghĩa một khối mã để xử lý mọi lỗi.
// Câu lệnh này finally định nghĩa một khối mã chạy bất kể kết quả ra sao.
// Câu lệnh này throw định nghĩa một lỗi tùy chỉnh.
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }
try {
  const a = 10;
  a = 11;
  document.write(a);
} catch (err) {
  document.write("Đã xảy ra lỗi" + err.name + "<br>");
} finally {
  let b = 10 + 10;
  document.write(b + "<br>");
  document.write("Khối finally luôn chạy!" + "<br>");
}

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
}

//
const SV_CDBK = {
  firstName: "Lò",
  lastName: "Thanh",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const SV_HUST = {
  firstName: "Lò",
  lastName: "Hiền",
};
const fname = SV_CDBK.fullName.bind(SV_HUST);
document.write(fname); // đg lỗi
