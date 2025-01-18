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
        // 2 câu lệnh in 
        echo "hello mọi người <br>";
        print "Tôi mới học PHP<br>";
        $text = "Mong các bạn giúp đỡ";
        echo "<h1>$text</h1><br>";
        // biến
        $name = "Lò Văn Thành<br>";
        $tuoi = 20;
        echo $name;
        print $tuoi."<br>";
        // phạm vi biến
        // biến toàn cục
        $x = 10;
        function Tcuc() { 
        global $x;// biến toàn cục bắt buộc phải có global
        echo $x."<br>";
       }
        Tcuc();
        echo $x."<br>";
    
        // biến cục bộ
        function Cbo() {
           $y = 5;
          echo $y."<br>";
        }
        Cbo();
        
        // sự khác biệt giữa ngoặc kép và đơn
        $kep = "kep";
        echo "ngoặc $kep<br>";//Chuỗi ký tự được trích dẫn kép thực hiện các thao tác cho các ký tự đặc biệt:
        $don = "don";
        echo 'Ngoặc $don<br>';//Chuỗi ký tự được trích dẫn đơn trả về chuỗi nguyên bản:
    
        // Chuỗi trong PHP
        $str1 = "học chuỗi trong php";
        echo strtoupper($str1)."<br>";// strtoupper  chuyển tất cả thành in hoa
        $str2 = "HOC CHUOI";
        echo strtolower($str2)."<br>";// strtolower chuyển tất cả thành in thường
        $str3 = "anh yeu em";
        echo strrev($str3)."<br>";// strrev đảo ngược chữ
        $str4 = "anh   yêu     em";
        echo trim($str4)."<br>";// trim xóa khoảng trống
    
        // nối chuỗi
        $n = "nối";
        $m = "chuỗi";
        $noi = $n . $m;
        $noichuoi = "$n  $m";
        echo $noi."<br>";
        echo $noichuoi."<br>";
    
      // cắt chuỗi
      $catChuoi = "Hello world";
      echo substr($catChuoi, 1,6)."<br>";// substr(chuỗi cần cắt,Bắt đầu lát cắt ở vị trí thứ 1 và kết thúc lát cắt ở vị trí thứ 6 sau đó:)
    
      $string = "Lò Văn Thanh\"29\" tuôi";
      echo $string."<br>";
        ?>
    
        <?php
        // var_dump() để kiểm tra kiểu dữ liệu 
        $a = 10;var_dump($a);
        $b = 5.5;var_dump($b);
        $c = "120";var_dump($c);
        $d = true;var_dump($d);
        echo "<br>";
    
        $a = 10;var_dump(is_int($a));// check có phải là số nguyên hay ko - True
        $b = 5; print var_dump(is_float($b))."<br>";//check có phải là số thực hay ko -- false
    
        // ép kiểu
        $x = 100.245;
        $x1 = (int)$x;// thực sang nguyên
        echo $x1."<br>";
    
        $y = 10;
        $y1 = (float)$y;// nguyên sang thực
        echo $y1."<br>";
    
        // ép kiểu chuỗi sang số
        $z1 = "200";
       print var_dump($z1)."<br>";
        $z2 = (int)$z1;
       print var_dump($z2)."<br>";
    
        // ép kiểu array
        $e = 5;
        $e1 = (array)$e;
        print var_dump($e1)."<br>";
        
        // ép kiểu object
        $e2 = (object)$e;
        print var_dump($e2)."<br>";
    
        $sinhvien = array("Thanh"=> 20, "Linh"=>19,"Huy"=>19);
        print var_dump((object)$sinhvien);
        ?>
     </pre> 
</body>
</html>