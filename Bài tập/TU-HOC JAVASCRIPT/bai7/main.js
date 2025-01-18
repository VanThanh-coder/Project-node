SV = function () {
  document.getElementById("demo").innerHTML += "Hello tôi mới học";
};
window.addEventListener("load", SV);
document.getElementById("btn").addEventListener("click", SV);
document.write("<h1>hàm mũi tên</h1>");
// hàm mũi tên
const x = (x, y) => {
  return x * y;
};
document.write(x(12, 3));

let sum = (a, b) => a * b;
document.write("Sum:" + sum(4, 5));
hello = () => {
  return "Hello tôi mới học javascrpit";
};
document.write(hello() + "<br>");

// hàm mũi ko tham số
fullName = () => "Lò Văn Thành";
document.write(fullName() + "<br>");

//hàm mũi có tham số
sinhVien = (Age) => "Vũ Tuấn Kiệt" + Age;
document.write(sinhVien(22));

// tương tự như hàm trên có thể bỏ ngoặc đơn
sinhVien = (Age) => "Dương Mạnh Linh" + Age;
document.write(sinhVien(19) + "<br>");

////////////////////////////////////////////////////
document.write("<h1>function</h1>");
//hàm tạo JavaScript tích hợp có tên là Function()
const Tong = new Function("a", "b", "return a * b");
document.write("Tong: " + Tong(4, 5));

// hàm tự gọi
(function () {
  document.write("Tự gọi hàm" + "<br>");
})();
// tổng trong hàm
sum3 = 0;
function sum4(...sumArray) {
  for (let i of sumArray) sum3 += i;
  return sum3;
}
let s = sum4(12, 44, 55, 33, 44, 22);
document.write(s);

function maxfunction() {
  let max = [0];
  for (let i = 0; i <= arguments.length; i++) {
    if (max < arguments[i]) {
      max = arguments[i];
    }
  }
  return max;
}
document.write(maxfunction(3, 23, 8, 4, 5, 11));

document.write("<h1>học class</h1>");
// sử dung class
class SV1 {
  constructor(Name, Year) {
    this.Name = Name;
    this.Year = Year;
  }
  Age(x) {
    // let dt = new Date(); + "<br>"
    // return dt.getFullYear() - this.Year;
    return x - this.Year;
  }
}
const MySinhvien = new SV1("Dũng", 2005);
let dt = new Date();
let Year = dt.getFullYear();
document.write(
  MySinhvien.Name + MySinhvien.Year + MySinhvien.Age(Year) + "<br>"
);
MySinhvien.Name = "Thành";
MySinhvien.Year = 2004;
document.write(
  "Name: " +
    MySinhvien.Name +
    " Year: " +
    MySinhvien.Year +
    " Age: " +
    MySinhvien.Age(Year) +
    "<br>"
);

// class kế thừa
class cha {
  constructor(Name, Age, Hometown) {
    this.Name = Name;
    this.Age = Age;
    this.Hometown = Hometown;
  }
  bo() {
    document.write(this.Name + this.Age + this.Hometown);
  }
  toi() {
    document.write(this.Name + this.Age + this.Hometown);
  }
  me() {
    document.write(this.Name + this.Age + this.Hometown);
  }
}
class Anh extends cha {
  anh() {
    document.write(this.Name + this.Age + this.Hometown);
  }
}
const keThua = new Anh("Bo", 1982, "Sơn La");
keThua.bo();
document.write("<br>");
const me = new Anh("Mẹ", 1984, "Sơn La");
me.me();
document.write("<br>");
const anh = new Anh();
anh.Name = "Hiền";
anh.Age = 22;
anh.Hometown = "Sơn La";
anh.anh();
document.write("<br>");
const tui = new Anh("Thành", 20, "Sơn La");
tui.toi();
document.write("<br><H1>/////////////////////////////////////</H1>");
///////////////////////////////////////////////
const sinhVien1 = {
  firstName: "Vũ",
  lastName: "Kiệt",
  fullName: function (Age, Hometown) {
    return this.firstName + " " + this.lastName + Age + Hometown;
  },
};
const sinhVien2 = {
  firstName: "Lương",
  lastName: "Thủy",
};
const sinhVien3 = {
  firstName: "Lò",
  lastName: "Hiền",
};
const sinhVien4 = {
  firstName: "Nguyễn",
  lastName: "Huy",
};
// call lấy dạng riêng biệt
let thuy = sinhVien1.fullName.call(sinhVien2, 20, "Nam Định");
document.write(thuy + "<br>");
// apply lấy đối tượng mảng
let hien = sinhVien1.fullName.apply(sinhVien3, [22, "Sơn La"]);
document.write(hien + "<br>");
//bind()phương thức này, một đối tượng có thể mượn phương thức từ một đối tượng khác.
let huy = sinhVien1.fullName.bind(sinhVien4, 20);
doc;

let kiet = sinhVien1.fullName();
document.write(kiet);

ument.write(huy());

// Mảng JSON
const sv =
  '{"employees": [' +
  '{"firstName":"Nguyễn", "lastName": "Huy"},' +
  '{"firstName":"Phương", "lastName":"Thảo"} ]}';

const Mysv = JSON.parse(sv);
document.write(Mysv.employees[1].firstName + Mysv.employees[1].lastName);
