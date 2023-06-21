<?php 
include 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

$f = fopen('f1c570aa-1882-461a-b0e6-93cc02bdba87', 'r');
$password = fgets($f);
fclose($f);

$sender = $_POST['email'];
$subject = $_POST['subject'];
$body = $_POST['object'];

try {
    $mail = new PHPMailer(true);

    /* Mail parameters */
    $mail->setFrom($sender);
    $mail->addAddress('decillis.web@gmail.com');
    $mail->Subject = $subject;
    $mail->Body = $body;

    /* SMTP parameters */
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com';
    $mail->Username = 'giacinto.cardunco@gmail.com';
    $mail->Password = $password;
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    if(!$mail->Send()) {
        echo "errore nella spedizione: ".$mail->ErrorInfo;
    } else {
        echo "messaggio inviato correttamente";
    }
} catch (Exception $e) {
    echo $e->getMessage();
}

?>