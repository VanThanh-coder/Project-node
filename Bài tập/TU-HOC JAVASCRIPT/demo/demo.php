<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
      
      $servername = "localhost"; // Tên máy chủ
      $username = "root";        // Tên người dùng MySQL
      $password = "592002";            // Mật khẩu
      $dbname = "user"; // Tên cơ sở dữ liệu
      
      // Tạo kết nối
      $conn = new mysqli($servername, $username, $password, $dbname);
      
      // Kiểm tra kết nối
      if ($conn->connect_error) {
          die("Kết nối không thành công: " . $conn->connect_error);
      }
      echo "Kết nối thành công";
      ?>
      
    
</body>
</html>