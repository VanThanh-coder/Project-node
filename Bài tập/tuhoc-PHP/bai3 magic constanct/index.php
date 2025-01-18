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
        echo __DIR__."<br>"; // thư mực của tập tin
        echo __FILE__."<br>"; //Tên tệp bao gồm đường dẫn đầy đủ.
        function myvalue()
        {
            return __FUNCTION__."<br>";//Nếu bên trong một hàm, tên hàm sẽ được trả về.
        }
        echo myvalue();

        echo __LINE__;// số dòng hiện tại
       
        class ExampleClass {
            public function exampleMethod() {
                echo "Đây là phương thức: " . __METHOD__;
            }
        }
        
        // Gọi hàm và phương thức
        exampleFunction(); // Output: Đây là hàm: exampleFunction
        $example = new ExampleClass();
        $example->exampleMethod(); 

        // __LINE__: Dòng hiện tại trong tệp.
        // __FILE__: Đường dẫn đầy đủ của tệp hiện tại.
        // __DIR__: Thư mục của tệp hiện tại.
        // __FUNCTION__: Tên của hàm hiện tại.
        // __CLASS__: Tên của lớp hiện tại.
        // __METHOD__: Tên của phương thức hiện tại.
        // __NAMESPACE__: Tên không gian hiện tại.
        ?>
        
    </pre>
</body>
</html> 

