<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <pre>
        <?php
        echo "Lớn nhất:".max(12,33,55,11,44,33,22)."<br>";// tìm số lớn nhất
        echo "Nhỏ nhât:".min(16,22,55,44,10,55,33,56)."<br>";//tìm số nhỏ nhất
        echo "Pi = ".pi()."<br>";// pi
        echo "abs =".abs(-10)."<br>";// luôn luôn là số nguyên dương
        echo "sqrt = ". sqrt(49)."<br>";// hàm căn bậc 2
        echo "random = ".rand(10, 100)."<br>";// ngẫu nhiên từ 10 đến 100
        echo "round = " .round(5.4)."<br>";// hàm làm tròn
        echo "pow = ".pow(4,2)."<br>";//hàm bình phương

        // hàm 
       define("Sinhvien", ["Huy", "Linh", "Nam"]);//define("name gọi hàm" , [arrar])
       echo Sinhvien[1];

       // hàm
       define("GREETING", "Welcome to W3Schools.com!");
        function myTest() {
        echo GREETING;
        }
        myTest();
       
        
        ?>
    </pre>
</body>
</html>