<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  if(isset($_POST['send']))
  {


      require 'vendor/phpmailer/phpmailer/src/Exception.php';
      require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
      require 'vendor/phpmailer/phpmailer/src/SMTP.php';
      require './vendor/autoload.php';

      // a parametrer
      $email = 'alban.melling75@gmail.com'; //email envoi
      $password = '#w3lc0m3' ;
      $smtp = 'smtp.gmail.com';//serveur d'envoi
      $to_email = 'albanmllg@gmail.com';//adresse email à qui envoyer le mail.


      $to_id = $email;
      $message = $_POST['message'];
      $subject = $_POST['subject'].' de '.$_POST['toid'];

      $mail = new PHPMailer;
      $mail->isSMTP();
      //$mail->SMTPDebug = 4;
      $mail->SetFrom($email);
      $mail->Host = $smtp;
      $mail->Port = 587;
      $mail->SMTPSecure = 'tls';
      $mail->SMTPAuth = true;
      $mail->Username = $email;
      $mail->Password = $password;
      $mail->addAddress($to_email);
      $mail->Subject = $subject;
      $mail->msgHTML($message);
      if (!$mail->send()) {
      $error = "Mailer Error: " . $mail->ErrorInfo;
      echo '<p id="para">'.$error.'</p>';
      }
      else {
      echo '<p id="para">Message sent!</p>';
      }
  }
  else {
    ?>
<?php } ?>
