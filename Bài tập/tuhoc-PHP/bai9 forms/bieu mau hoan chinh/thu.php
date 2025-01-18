<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tải lên Tệp</title>
</head>
<body>
    <h2>Tải lên Tệp PHP Script</h2>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        <label for="file">Chọn tệp để tải lên:</label>
        <input type="file" name="file" id="file">
        <input type="submit" name="submit" value="Tải lên Tệp">
    </form>
    <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Kiểm tra xem tệp có được tải lên không
    if (isset($_FILES["file"]) && $_FILES["file"]["error"] == 0) {
        $file = $_FILES["file"];

        // Các thông số tệp
        $fileName = basename($file["name"]);
        $fileSize = $file["size"];
        $fileTmp = $file["tmp_name"];
        $fileType = $file["type"];
        
        // Các loại tệp hợp lệ
        $allowedTypes = ["image/jpeg", "image/png", "image/gif"];
        
        // Giới hạn kích thước tệp (ví dụ: 2MB)
        $maxSize = 2 * 1024 * 1024;

        // Kiểm tra loại tệp
        if (!in_array($fileType, $allowedTypes)) {
            echo "Chỉ cho phép tải lên các tệp JPEG, PNG, hoặc GIF.";
            exit;
        }

        // Kiểm tra kích thước tệp
        if ($fileSize > $maxSize) {
            echo "Kích thước tệp vượt quá giới hạn cho phép (2MB).";
            exit;
        }

        // Đường dẫn lưu tệp
        $uploadDir = "uploads/";
        $uploadPath = $uploadDir . $fileName;

        // Tạo thư mục nếu chưa tồn tại
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        // Di chuyển tệp từ thư mục tạm đến thư mục đích
        if (move_uploaded_file($fileTmp, $uploadPath)) {
            echo "Tệp đã được tải lên thành công: <a href='$uploadPath'>$fileName</a>";
        } else {
            echo "Có lỗi xảy ra khi tải lên tệp.";
        }
    } else {
        echo "Không có tệp nào được chọn hoặc có lỗi khi tải lên tệp.";
    }
}
// Giải thích mã PHP:
// Kiểm tra Phương thức Gửi Dữ liệu (POST):

// Chỉ xử lý tải lên khi dữ liệu được gửi bằng phương thức POST.
// Kiểm tra Lỗi Tệp:

// Sử dụng $_FILES["file"]["error"] == 0 để đảm bảo không có lỗi nào xảy ra trong quá trình tải lên.
// Kiểm tra Loại Tệp và Kích Thước Tệp:

// Chỉ cho phép các tệp ảnh (JPEG, PNG, GIF).
// Giới hạn kích thước tệp là 2MB.
// Di chuyển Tệp từ Thư mục Tạm Thời:

// Sử dụng move_uploaded_file() để chuyển tệp từ thư mục tạm đến thư mục uploads/.
// Hiển thị Thông báo Kết Quả:

// Nếu quá trình tải lên thành công, hiển thị liên kết đến tệp đã tải lên.
// Nếu thất bại, thông báo lỗi.
// Bước 3: Tạo Thư mục Tải lên
// Trong thư mục gốc của dự án (nơi chứa upload.php), tạo một thư mục uploads/ để lưu trữ các tệp được tải lên. Đảm bảo rằng thư mục này có quyền ghi (thường là 0777 trên các máy chủ UNIX).

// Tổng kết:
// Script trên là một giải pháp đơn giản và đầy đủ cho việc tải lên tệp với PHP. Nó xử lý cả việc kiểm tra lỗi, kiểm tra loại và kích thước tệp, di chuyển tệp, và hiển thị thông báo về kết quả tải lên.
?>

</body>
</html>
