<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php
         $x  = 100;
         function myfunctoion(){
            //biến toàn cục bắt buộc phải có global để gọi $x từ bên ngoài
            global $x;
            echo $x;
         }
         myfunctoion();

         echo $_SERVER['PHP_SELF']."<br>";//Trả về tên tệp của tập lệnh hiện đang thực thi
          echo $_SERVER['SCRIPT_NAME']."<br>";//Trả về đường dẫn của tập lệnh hiện tại
         echo $_SERVER['SERVER_ADDR']."<br>";//Trả về địa chỉ IP của máy chủ lưu trữ
        // echo $_SERVER['SCRIPT_URI']."<br>";//Trả về URI của trang hiện tại
       //  echo $_SERVER['REMOTE_HOST']."<br>";//
        echo $_SERVER['SERVER_NAME']."<br>";//
        echo $_SERVER['HTTP_HOST']."<br>";//Trả về tiêu đề Máy chủ từ re hiện tại
        echo $_SERVER['HTTP_REFERER']."<br>";//Trả về URL đầy đủ của trang hiện tại (không đáng tin cậy vì không phải tất cả tác nhân người dùng đều hỗ trợ
        echo $_SERVER['REQUEST_METHOD'];//Trả về phương thức yêu cầu được sử dụng để truy cập trang (chẳng hạn như POST)
        echo $_SERVER['HTTP_USER_AGENT']."<br>";//
        echo $_SERVER['SERVER_PORT'];//Trả về cổng trên máy chủ đang được máy chủ web sử dụng để liên lạc (chẳng hạn như 80)
        echo $_SERVER['REMOTE_ADDR'];//Trả về địa chỉ IP từ nơi người dùng đang xem trang hiện tại
    ?>

    <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
    Name: <input type="text" name="fname" >
    <input type="submit">
    </form>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_REQUEST['fname']);
    if (empty($name)) {
        echo "Name is empty<br>";
    } else {
        echo $name."<br>";
    }
    }

    // biêu mẫu trong php
    $txt = "vanthanh.com";
    $search = "/thanh/i";// i là ko phân biệt chữ hoa và thường
    echo preg_match($search,$txt)." True<br>";//preg_match()sẽ cho bạn biết liệu một chuỗi có chứa kết quả trùng khớp với một mẫu nào đó hay không.
    $search1 = "/n/i";// tìm thấy 2 chữ n
    //preg_match_all()sẽ cho bạn biết có bao nhiêu kết quả trùng khớp được tìm thấy trong một chuỗi.
    echo "đã tìm thấy bao nhiêu ký tự trùng với n: ".preg_match_all($search1, $txt)."<br>";

    $name = "facebook";
    $search = "/FACEBOOk/i";
    //preg_replace()sẽ thay thế tất cả các kết quả trùng khớp với mẫu trong một chuỗi bằng một chuỗi khác.
    echo preg_replace($search, "Google", $name)."<br>";
    echo preg_replace($search, "#" ,$name);
    ?>
  
  


    
</body>
</html>