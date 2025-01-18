<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
    <style>
      img {
  width: 20px;
}
* {
  margin: 0;
  padding: 0;
}
body {
  max-width: 960px;
  height: auto;
  margin: 10px auto;
  background: rgb(156, 147, 147);
}
header {
  border: 1px solid black;
  width: 960px;
  height: 130px;
  margin: 0px 0px 20px 0px;
  background: white;
}
header img {
  width: 80px;
  padding: 20px;
}
nav {
  float: right;
  margin: 110px 0px 0px 0px;
}
nav a {
  padding: 20px;
  text-decoration: none;
  color: rgb(86, 86, 247);
  font-weight: bold;
}
#container {
  width: auto;
  height: auto;
  border: 1px solid black;
}
.content {
  width: 630px;
  height: 450px;
  border: 1px solid black;
  float: left;
  background: white;
}
.content h1 {
  background: rgb(15, 15, 185);
  color: white;
}
table td {
  padding: 5px;
}
table td h2 {
  color: rgb(70, 70, 161);
}
table td img {
  width: 200px;
  height: 100px;
}
.form {
  width: 300px;
  height: 450px;
  border: 1px solid black;
  float: right;
  background: white;
}
form {
  text-align: center;
}
form h3 {
  background: blue;
  height: 35px;
  color: white;
}
form input[type="text"] {
  width: 250px;
  margin: 30px 0px 0px 0px;
  padding: 10px;
}
form select {
  width: 90px;
  padding: 10px;
  margin-top: 30px;
}
form p {
  text-align: left;
  padding-left: 15px;
}
form input[type="checkbox"] {
  margin-right: 30px;
}
form label {
  float: left;
  padding-left: 20px;
}
form button {
  padding: 5px 20px;
  color: white;
  background: rgb(95, 149, 13);
  margin: 15px;
}
    </style>
  </head>
  <body>
    <header>
      <img src=".//Sacred_lotus_Nelumbo_nucifera.jpg" alt="" />
      <nav>
        <a href="">TRANG CHỦ</a>
        <a href="">GIỚI THIỆU </a>
        <a href="">TIN TỨC</a>
        <a href="">DỊCH VỤ</a>
        <a href="">LIÊN HỆ</a>
      </nav>
    </header>
    <div id="contarner">
      <div class="content">
        <h1>📀 CÔNG NGHỆ</h1>
        <table>
          <tr>
            <td colspan="2"><h2>PHÁT TRIỂN VÀ THIẾT KẾ CỦA WEB</h2></td>
          </tr>
          <tr>
            <td><img src="./Sacred_lotus_Nelumbo_nucifera.jpg" alt="" /></td>
            <td>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad atque
              dolore vel est animi libero quae veritatis natus amet, tenetur at
              nemo in nulla! Voluptas temporibus mollitia inventore assumenda
              vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat magnam ipsa animi sit iusto accusantium reiciendis
              Repellat magnam ipsa animi sit iusto accusantium reiciendis
            </td>
          </tr>
          <tr>
            <td colspan="2"><h2>NỘI DUNG CHƯƠNG TRÌNH HỌC TẬP</h2></td>
          </tr>
          <tr>
            <td><img src="./Sacred_lotus_Nelumbo_nucifera.jpg" alt="" /></td>
            <td>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea magni
              rerum vel, sunt expedita asperiores animi dignissimos dolores
              debitis itaque quae qui molestiae molestias a nihil nemo suscipit,
              neque provident. Libero nemo velit id quasi consequatur, hic neque
              provident. Libero nemo velit id quasi consequatur, hic Repellat
              magnam ipsa animi sit iusto accusantium reiciendis
            </td>
          </tr>
        </table>
      </div>
      <div class="form">
        <form action="#">
          <h3>📀 THÔNG TIN ĐĂNG KÝ</h3>
          <input type="text" placeholder="Họ Và tên" /><br />
          <select name="" id="">
            <option value="">Ngày</option>
          </select>
          <select name="" id="">
            <option value="">Tháng</option>
          </select>
          <select name="" id="">
            <option value="">Năm</option></select
          ><br />
          <input type="text" placeholder="Địa chỉ" /><br />
          <input type="text" placeholder="Email" /><br />
          <p>Có thể tham gia được ca:</p>
          Sáng: <input type="checkbox" name="" id="" /> Chiều:
          <input type="checkbox" name="" id="" /> Tối:
          <input type="checkbox" name="" id="" /><br />
          <label for="">Giới tính: </label>
          Nam: <input type="radio" name="" id="" /> Nữ:
          <input type="radio" name="" id="" />
          <br />
          <button type="submit">Gửi đi</button>
          <button type="submit">Làm lại</button>
        </form>
      </div>
    </div>
    <footer>
      <p></p>
    </footer>
  </body>
</html>
