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
      $x = 10; $y = 5; 
      echo $x + $y."<br>";//cộng
      echo $x%$y."<br>";
      
      if($x===$y){echo "x bằng y<br>";}else{echo "Ko bang y<br>";}//toán tử so sánh
      if($x > $y){echo "x lớn hơn y<br>";}else{echo "x nhỏ hơn y<br>";}
      
      if($x == 10 and $y==5){echo "x == 10 và y == 5";}else{echo "ko bằng 10 và 5";}// and
      if($x == 4 or $y==5){echo "true<br>";}else{echo "false<br>";}// or
      if($x == 7 xor $y==5){echo "true<br>";}else{echo "false<br>";}// xor tương tự như or
      if($x == 8 && $y==5){echo "true<br>";}else{echo "false<br>";}
      if($x == 7 || !$y==5){echo "true<br>";}else{echo "false<br>";}

      $text1 = "Lò Văn ";
      $text2 = "Thành";
      echo $text1.=$text2."<br>";

      $tuoi = 18;
      echo $tuoi >= 18 ? "bn đã trưởng thành" : "ban chưa truongr thành";
      




     
        
    ?>
    </pre>
</body>
</html>