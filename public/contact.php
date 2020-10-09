<?php
// NAME SECTION > REQUIRED
if (isset ($_POST['name']) && !empty ($_POST['name'])) {
	$name = $_POST['name'];
} else {
	$name = NULL;
}

//EMAIL SECTION > REQUIRED + BASIC VALIDATION
if (isset ($_POST['email']) && !empty ($_POST['email'])) {
	$email = $_POST['email'];
	$pattern = "/\b[\w. -]+@[\w. -]+.[A-Za-z]{2,6}\b/";

	if (!preg_match($pattern, $email)) {
		$email = NULL;
	}	
} else {
	$email = NULL;
}

//MESSAGE SECTION > NOT REQUIRED
if (!empty ($_POST['message'])) {
	$message = $_POST['message'];
} else {
	$message = NULL;
}

// PROCESSING DATA
		
if (($name != NULL) && ($email != NULL)) {
	echo '<hr><h4 class="pt-1">Thank you, ' . $name . '. The message was successfully sent.</h4><hr>';
	date_default_timezone_set('Israel');

	$mail_to = "admin@webmarie.com"; // your email here!
	$subject = "New email from Portfolio";
	$created = date('Y-m-d | H:i');
	$email_message = "Details: \r\n";


	if ($_SERVER['REQUEST_METHOD'] != 'POST') {
		echo 'Somethimg went wrong, please try again later.';
	} else {
		$email_message .= "Name: ".$name."\r\n";
		$email_message .= "From: ".$email."\r\n";
		$email_message .= "Message: \r\n".$message."\r\n";
		$email_message .= "Received at: ". $created;
	}
	
		mail($mail_to, $subject, $email_message);	
} else {
	echo '<hr><h4 class="pt-1">Sorry, something went wrong... Please, try again later!</h4><hr>';
}

?>