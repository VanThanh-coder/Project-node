<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
        Nhâp tên: <input type="text" id="xinchao" value>
        <button onclick="xin_chao()">bấm</button>
        <div id="giutrang"></div>

         <script src="main.js"> </script>
           
        


        <?php
        echo "<br>";
         // gia đình cùng 1 Họ
         function giadinh($Ho)
         {
              echo "Lò Văn ".$Ho."<br>";
         }
         giadinh("Xôm");
         giadinh("Chung");
         giadinh("Hiền");
         giadinh("Thành");

         //
         function Gđ($name, $age)
         {
              echo "Lò Văn ".$name. "Tuổi: ".$age."<br>";
         }
         Gđ("Xôm ", 1982);
         Gđ("Chung ", 1984);
         Gđ("Hiền ", 2002);
         Gđ("Thành ", 2004);


         function sinhVien($name = "Thành", $age = 20)
         {
            echo "Tôi tên là ".$name." năm nay tôi ".$age." Tuổi<br>";
         }
         sinhVien("Huy", 19);
         sinhVien("Linh", 19);
         sinhVien();
         sinhVien("Kiệt", 22);
        

         // tính tổng
         function sum($x, $y)
         {
            $z = $x + $y;
            return $z;
         }
        echo "5 + 10 = " . sum(5, 10) . "<br>";
        echo "7 + 13 = " . sum(7, 13) . "<br>";
        echo "2 + 4 = " . sum(2, 4) . "<br>";

        function sumnumber(...$x)
        {
            $sum = 0;
            $len = count($x);
            for($i = 0 ; $i < $len ; $i++)
            {
                $sum += $x[$i];
            }
            return $sum;
        }
        $tong = sumnumber(3,7,4,9,22,6);
        echo "Tong: " . $tong."<br>";


        function sum1($a, $b, $c) {
            return $a + $b + $c;
        }
        // ...Dùng để gộp các phần tử của mảng này vào một mảng khác.
        $args = [2, 3, 5];
        echo sum1(...$args)."<br>"; // Output: 10

        function canbolop($lastName, ...$firstName)
        {
            $txt = "";
            $len = count($firstName);
            for($i = 0; $i < $len; $i++)
            {
                $txt = $txt." $firstName[$i] $lastName. <br>"; 
            }
            return $txt;
        }
        $thongtin = canbolop("LTMT-CD5", "Thảo", "Kiệt", "Dũng");
        echo $thongtin;
    ?>
</body>
</html>