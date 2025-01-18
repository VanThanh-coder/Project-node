<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        // gọi hàm bằng mảng
        function TThuy()
        {
            echo "<h1>Thông tin sinh viên</h1><br>";
            $name = "Nguyễn Văn Huy";
            $age = 19;
            $gender = "Nam";
            $homeTown = "Hà Nội";
            echo $name . "<br>"; 
            echo $age . "<br>";
            echo $gender . "<br>";
            echo $homeTown . "<br>";

        }
        function TTLinh()
        { 
            echo "<h1>Thông tin sinh viên</h1><br>";
            $name = "Dương Mạnh Linh";
            $age = 19;
            $gender = "Nam";
            $homeTown = "Phú Thọ";
            echo $name  . "<br>";
            echo $age . "<br>";
            echo $gender . "<br>";
            echo $homeTown . "<br>";
        }
         $sinhVien = array(TTHuy(), TTLinh());
         foreach($sinhVien as $i)
         {
            echo $i;
         }
//////////////////////////////////////////////////////////
        // mảng chỉ số
        $car = array("Honda", "vinfast", "Yamaha", "Toyota");
        // thay thế tại vị trí;
        $car[2] = "BMW"."<br>";
        // thêm vào vị trí cuối cùng
        array_push($car, "Volvo");
        // check kiểu dữ liệu 
        var_dump($car);
        // in car tại vị trí index
        echo "<br>".$car[3]."<br>";
        // in tất cả array ra màn hình
        foreach($car as $i)
        {
            echo "<br>".$i."<br>";
        }
        echo "<br>";
        /////////////////////////
        $sinhVien1 = array("Nam"=>21,"Huy"=>19,"Thành"=>20 );
        foreach($sinhVien1 as $x => $y)
        {
         echo " $x : $y <br>";
        }
        ///////////////////////////
        $sinhvien = array("Lò Văn Thành", "Nguyễn Văn Huy", "Dương Mạnh Linh");
        foreach($sinhvien as $i)
        {
         echo $i."<br>";
        }
      
       $SV = ["Thành"=>20, "Nam"=>19, "Linh"=>19];
       var_dump($SV);
       echo"<br>";
       foreach($SV as $i => $j)
       {
        echo "$i : $j<br>";
       }
///////////////////////////////////////////
        $cars = [];
        $cars[0] = "Volvo";
        $cars[1] = "BMW";
        $cars[2] = "Toyota";
        var_dump($cars);
         echo"<br>";
        //Thêm hai mục vào carsmảng:
        $cars1 = array("brand" => "Ford", "model" => "Mustang");
        $cars1 += ["color" => "red", "year" => 1964];
       
         // xóa
          array_pop($cars1); //xóa phần tử cuối cùng của array
          array_shift($cars1);// xóa phần tử đầu cùng của array
           var_dump($cars1);
          echo"<br>";
          $cars2 = array("Volvo", "BMW", "Toyota");
          unset($cars2[0],$cars2[1]);// xóa phần tử tại vị trí
          var_dump($cars2);
          echo"<br>";
       ?>

       <?php
        // sort()- sắp xếp mảng theo thứ tự tăng dần
        // rsort()- sắp xếp các mảng theo thứ tự giảm dần
        // asort()- sắp xếp các mảng liên kết theo thứ tự tăng dần, theo giá trị
        // ksort()- sắp xếp các mảng liên kết theo thứ tự tăng dần, theo khóa
        // arsort()- sắp xếp các mảng liên kết theo thứ tự giảm dần, theo giá trị
        // krsort()- sắp xếp các mảng liên kết theo thứ tự giảm dần, theo khóa
        $number = array(22,2,5,4,8,7,10);
        sort($number); // sort()- sắp xếp mảng theo thứ tự tăng dần
        $arr = count($number);
        for($i = 0;$i< $arr; $i++){ echo $number[$i]; } 

        rsort($number); // sort()- sắp xếp mảng theo thứ tự giảm dần
        for($i = 0;$i< $arr; $i++){ echo $number[$i]; }

        echo"<br>";
        $sinhVien = array("Lò Văn Thành"=>20, "Lê Quyền Linh"=>19, "Vũ Tuấn Kiệt"=>22);
         asort($sinhVien); // asort()- sắp xếp các mảng liên kết theo thứ tự tăng dần, theo giá trị
         foreach($sinhVien as $ten => $tuoi)
         {
            echo "Tên: $ten : Tuổi: $tuoi<br>";
         }

         arsort($sinhVien); // arsort()- sắp xếp các mảng liên kết theo thứ tự giảm dần, theo giá trị
         foreach($sinhVien as $ten => $tuoi)
         {
            echo "Tên: $ten : Tuổi: $tuoi<br>";
         } 
       ?>

       <?php
    //    Cú pháp cho mảng có chỉ mục:

    //    array(value1, value2, value3, etc.)
    //    Cú pháp cho mảng kết hợp: 
       
    //    array(key=>value,key=>value,key=>value,etc.)
       // mảng đa chiều
       $sinhVien = array(
        array( "Lò Văn Thành",20,"Sơn La"),
        array("Nguyễn Văn Huy", 19,"Hà Nội"),
        array("Dương Mạnh Linh",19,"Phú Thọ")
       );
       echo "Họ tên: ".$sinhVien[0][0]." Tuổi: ".$sinhVien[0][1]." Quê quán: ".$sinhVien[0][2]."<br>";
       echo "Họ tên: ".$sinhVien[1][0]." Tuổi: ".$sinhVien[1][1]." Quê quán: ".$sinhVien[1][2]."<br>"; 
       echo "Họ tên: ".$sinhVien[2][0]." Tuổi: ".$sinhVien[2][1]." Quê quán: ".$sinhVien[2][2]."<br>";

       for($row = 0; $row < 3; $row++)
       {
        echo"<p><b>row number: $row</b></p>";
        echo "<ul>";
        for($col = 0; $col < 3; $col++)
        {
            echo"<li>" . $sinhVien[$row][$col] ."</li>"; 
            ;
           
        }
        echo"</ul>";
       }
       ?>
       
       <?php
       
       ?>

       
        
</body>
</html>