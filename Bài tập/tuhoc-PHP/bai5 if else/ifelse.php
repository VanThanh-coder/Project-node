<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

        <?php
            $tuoi = 20;
            $x = 12;
            $y = 11;
            if($tuoi >= 18){echo "trưởng thành<br>";}
            if($x > $y){echo "true<br>";}
    
            $t = 2;
            if($t == 1 or $t == 2 or $t == 3){echo "thang: ".$t."<br>";}
            
            $nam = 2016;
            if(($nam % 4 == 0 and $nam % 100 != 0 ) or ($nam % 400 == 0))
            {echo $nam." là Năm nhuận<br>";}
            else
            {echo $nam." ko phai năm nhuận<br>";}
    
    
            // switch case
            $color = "green";
            switch($color){
                case "red":{echo "màu đỏ<br>";}break;
                case "green":{echo "màu xanh<br>";}break;
                case "blank":{echo "màu đen<br>";} break;
                default:{echo "Màu không tồn tại<br>";}
            }
            
    
            // while và do while
            $i = 1;
            do{
               echo $i."<br>";
               $i++; 
            }
            while($i < 10); // do while thực hiện cv trc mới tính điều kiện
            // while
            $sum = 0;
            $j = 0;
            while($j <= 10){
                $sum += $j;
                $j++;  
            }
            echo "sum: ".$sum."<br>";
            
            $k = 0;
            while($k < 10) {
                if($k == 6){
                break;}
                $k++;
                echo $k."<br>"; }       
        ?>


        <?php
           for($i = 0; $i < 10;$i++)
           {
            if($i == 7)
            {break;}// chạy đến 7
            if($i == 5 or $i == 3)
            {continue;}// bỏ qua 5 và 3
             echo $i."<br>";
           }

           // tất cả số chính phương
           $n = 100;
           for($i = 2; $i <= sqrt($n);$i++)
           {
               if($i * $i % $n == 0)
               {   
               }      
                echo $i;   
           }

           // foreach
           $sinhvien = array("Lò Văn Thành", "Nguyễn Văn Huy", "Dương Mạnh Linh");
           foreach($sinhvien as $i)
           {
            echo $i."<br>";
           }
           // cú pháp array("X"=>"y");
           $sinhVien1 = array("Nam"=>21,"Huy"=>19,"Thành"=>20 );
           foreach($sinhVien1 as $x => $y)
           {
            echo " $x : $y <br>";
           }

           class sinhVien{
            public $name;
            public $age;
            // __construct đây là từ khóa
            public function __construct($name, $age)
            {
                $this->name = $name;
                $this->age = $age;
            }
           }
           $mySinhVien = new sinhVien("Kiệt", 22);
           foreach($mySinhVien as $x => $y)
           {
            echo "$x : $y <br>";
           }

           class nhanVien{
            public $name;
            public $age;
            public function __construct($name,$age)
            {
                $this->name = $name;
                $this->age = $age;
            }
            public function INNhanVien()
            {
                echo "Tên: ".$this->name;
                echo "Tuổi: ".$this->age;
               
            }
           }
           $myNhanVien = new nhanVien("Thủy " , 20);
           $myNhanVien->INNhanVien();
           
        ?>
  <br>
</body>
</html>