<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bieumauhoanchinh</title>
    <link rel="stylesheet" href="bieumau.css">
</head>
<body>

    <?php 
    $name = $email = $website = $comment = $gender = "";
    $nameErr = $emailErr = $websiteErr = $genderErr ="";

    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        if(empty($_POST["name"])){
            $nameErr = "Name is required";
        }
        else {
             $name = test_input($_POST["name"]);
            if(!preg_match("/^[a-z-A-Z ]*$/", $name)){
                $nameErr = "Chỉ cho phép chữ cái và khoảng trắng";
            }
        }
        if(empty($_POST["email"]))
        {
            $emailErr = "Email is required";
        }else{
             $email = test_input($_POST["email"]);
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                  $emailErr = "Email không hợp lệ";
            }  
        }
        if(empty($_POST["website"])){
            $website = " ";
        } else{
            $website = test_input($_POST["website"]);
            if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
                $websiteErr = "URL không hợp lệ"; }
        }
        if(empty($_POST["comment"]))
        {
            $comment = "";
        }else{
            $comment = test_input($_POST["comment"]);
        }
        
        if(empty($_POST["gender"]))
        {
            $genderErr = "Gender is required";
        }else{
            $gender = test_input($_POST["gender"]);
        }
    }
        function test_input($Data){
            $Data = trim($Data);
            $Data = stripcslashes($Data);
            $Data = htmlspecialchars($Data);
            return $Data;
        }
    ?>
    
     <!-- Đây $_SERVER["PHP_SELF"]là biến siêu toàn cục trả về tên tệp của tập lệnh đang thực thi. -->
    <form action=" <?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <!-- <script>alert("Hacked")</script> cảnh báo -->
        <h1>THÔNG TIN</h1>
        <label for="name">Name:</label>
        <input type="text" name = "name" value="<?php echo $name?>">
        <span class="Error"> * <?php echo $nameErr;?></span>
        <br>
        <label for="email">Email:</label>
        <input type="text" name="email" value="<?php echo $email;?>">
        <span class="Error">* <?php echo $emailErr;?></span>
        <br>
        <label for="website">Website:</label>
        <input type="text" name = "website" value="<?php echo $website;?>">
        <span class="Error">* <?php echo $websiteErr;?></span>
        <br>
        <label for="comment">Comment:</label>
        <textarea name="comment" rows = "5" cols="40"></textarea>
        <br>
        <label for="Gender">Gender:</label>
        <input type="radio" name="gender" value="male"<?php if(isset($gender) and $gender == "male"){echo "checked";}?>>Male:
       
        <input type="radio" name="gender" value ="female"<?php if(isset($gender) and $gender == "female"){echo "checked";}?>>Female:
       
        <input type="radio" name="gender" value="other" <?php if(isset($gender) and  $gender == "other"){echo "checked";}?>>Other:
       
        <br>
        <input type="submit" name="submit" value="Gửi">
    </form>
    
    <?php
    echo "<h1>THÔNG TIN NGƯỜI DÙNG</h1>";
   
    echo "
    <table border=1px >
    <tr><th>Name</th> <td>$name</td><tr>
    <tr><th>Email</th> <td>$email</td> <tr>
    <tr><th>Website</th> <td>$website</td> <tr>
    <tr><th>Comment</th> <td>$comment</td> <tr>
    <tr><th>Gender</th> <td>$gender</td> <tr>
    </table>";
   
   
    ?>
   
</body>
</html>