<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer classes
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';




if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['attachment'])) {
    $fileType = $_FILES['attachment']['type'];
    $allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!in_array($fileType, $allowedTypes)) {
        echo "Unsupported file type. Only PDF and Word documents are allowed.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'iccetconf2026@gmail.com'; // Your Gmail address
        $mail->Password = 'juyq dfox zyod jvxn';   // Gmail App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Email Content
        $mail->setFrom('iccetconf2026@gmail.com', 'Conference Form');

        $mail->addAddress('iccetconf@gmail.com'); // Recipient

        // Attach uploaded file
        $mail->addAttachment($_FILES['attachment']['tmp_name'], $_FILES['attachment']['name']);

        $mail->isHTML(false);
        $mail->Subject = 'New Conference Registration';
        $mail->Body = "Name: " . $_POST['name'] . "\n"
                    . "Email: " . $_POST['email'] . "\n"
                    . "Mobile: " . $_POST['mobile_number'] . "\n"
                    . "Institution: " . $_POST['institution'] . "\n"
                    . "Country: " . $_POST['country'] . "\n"
                    . "Category: " . $_POST['category'];

        $mail->send();
        echo "Registration submitted successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>