<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    // mảng chỉ mục
    $sinhVien = array("Thành", "Nam", "Linh", "Huy");
    foreach($sinhVien as $i){ echo $i;}
    // mảng kết hợp
    $giaDinh  = array("Xôm"=>1982, "Chung"=> 1984);
    foreach($giaDinh as $ten=>$tuoi){ echo "Tên: $ten Tuổi: $tuoi<br>"; }
    // mang đa chiều
     $canBoLop = array(
        array("Vũ Tuấn Kiệt",22,"Hà Nội", "LTMT-CD5"),
        array("Vũ Minh Dũng", 19,"Hà Nội","LTMT-CD5"),
        array("Phạm Phương Thảo",19,"Hà Nội","LTMT-CD5")
     );
     echo "Tên: ".$canBoLop[0][0]." Tuổi: ".$canBoLop[0][1]." Quê quán: ".$canBoLop[0][2]." Lớp: ".$canBoLop[0][3]."<br>";
     echo "Tên: ".$canBoLop[1][0]." Tuổi: ".$canBoLop[1][1]." Quê quán: ".$canBoLop[1][2]." Lớp:".$canBoLop[1][3]."<br>";
     echo "Tên: ".$canBoLop[2][0]." Tuổi: ".$canBoLop[2][1]." Quê quán: ".$canBoLop[2][2]." Lớp:".$canBoLop[2][3]."<br>";
    ?>
    <?php
    //Đổi tất cả các khóa trong một mảng thành chữ thường:
    //array_change_key_case(array, case)
    $name = array("lo van thanh"=>19);
    print_r(array_change_key_case($name,CASE_UPPER));
    echo"<br>";
    $name1 = array("LO VAN THANH");
    print_r(array_change_key_case($name1, CASE_LOWER));
     echo "<br>";
     // Đếm tất cả các giá trị của một mảng:
     //array_count_values(array)
    print_r(array_count_values($name1));
    echo "<br>";
    
    //array_chunk(array, size, true and false)
    $name2 = array("lo van thanh"=>19, "nguyen van huy"=>20, "Linh"=>19,"Nam"=>21);
    print_r(array_chunk($name2,4,true));// size 4 gộp 4 đối tượng vào 1 mảng [0]
   
   
    ?>

    <?php
    echo "<br>";
    // Hàm array_column()
    // mảng cột
    $SV = array(
        array(
            'ID' => 33123,
            'Lastname' => 'Lò',
            'Firstname' => 'Thành',
        ),
        array(
            'ID' => 34344,
            'Lastname' => 'Nguyễn',
            'Firstname' => 'Huy',
        )
        );
    $TTSinhVien = array_column($SV, 'Firstname','ID' );
    print_r($TTSinhVien);
    echo"<br>";
    
    // array_fill(index, number, value)
     $name = array_fill(2,3,"Thanh");
     print_r($name);
     echo "<br>";
     //array_fill_keys(keys, value)
     $a = array("a", "b", "c", "d");
     print_r(array_fill_keys($a,"red"));
     echo "<br>";
     //array_flip(array)
     $a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
    $result=array_flip($a1);
    print_r($result);
   ?>
</body>
</html>