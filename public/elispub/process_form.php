<?php
session_start();

global $name, $tel, $email,$message, $reason, $performance_type, $performance_info, $email_message, $reason;

$mail_to = "chenziebenzie@gmail.com";
$subject = "New email from Elis` webpage.";
$reason = array();
$performance_type = array();
$song = NULL;
$author = NULL;
$instrument = NULL;
date_default_timezone_set('Israel');
$created = date('Y-m-d | H:i');
$email_message = "Details: \r\n";
$name = NULL;
$email = NULL;

function go_back_button () {

	echo "<button id='back' onClick='go_back()'
	class='btn mx-auto my-3'>Yes, Go Back</button><br>";

	echo '<script>
	function go_back () {
		$("#submit_msg").slideUp();
		$("section").css("opacity", 1);
		$("#submit_msg").html(\'<img id="close"src="media/icons/close.png" alt="close">\');
	}
	</script>';

}
	if (!empty ($_POST['name'])) {
		$name = $_POST['name'];
		$email_message .= "Name: ".$name."\r\n";
	}
		
	if (!empty ($_POST['email'])) {
		$email = $_POST['email'];
		$email_message .= "E-mail: ".$email."\r\n";
		$pattern = '/\b[\w. -]+@[\w. -]+.[A-Za-z]{2,6}\b/';
		
		if (!preg_match($pattern, $email)) {
			$email = NULL;
			echo "<p class='pt-2'>The entered e-mail doesn't seem to be valid.</p>";
		}	
	}
	
	//	it values "+" as a numeric, but not "-"
	if (!is_numeric($_POST['tel'])) {
			$tel = NULL;
			echo '<p class="pt-2">Please, enter a valid phone number.</p>';
	
	} else {
			$tel = $_POST['tel'];
			$email_message .= "Phone: ".$tel."\r\n";
	}
// SUBJECT
//reason
	if (!empty($_POST['reason'])) {
		
		$reason += $_POST['reason'];
		$email_message .= "Subject: \r\n".implode(', ', $reason)."\r\n";
		
	} else {

		$reason = NULL;
		echo "<p class='pt-2'>Please, check at least one of the checkboxes.</p><br>";
		go_back_button();
	}

	// performance info
if (!empty($_POST['day'])) {
	$day = $_POST['day'];
	$email_message .= "Performing day: " . $day ."; \r\n";
}
	if (!empty($_POST['song'])) {
		$song = $_POST['song'];
		$email_message .= "Song: " . $song ."; \r\n";
	} 
	if (!empty($_POST['author'])) {
		$author = $_POST['author'];
		$email_message .= "Author: " . $author ."; \r\n";
	}
	if (!empty($_POST['instrument'])) {
		$author = $_POST['instrument'];
		$email_message .= "Instrument: " . $author ."; \r\n";
	}

	if (!empty($_POST['message'])) {
		$message = $_POST['message'];

	}
			// Processing data
	if (($name != NULL) && ($email != NULL) && ($tel != NULL) && ($reason != NULL)) {
		echo '<h3 class="pt-2">Thank you, ' . $name . ',<br> for contacting us!</h3><hr><p class="pt-2">We will be in touch with you very soon.</p>';
	

	if (in_array("Performing", $reason)) {
		
		if (isset($_POST['performance_type'])) {
			
			$performance_type = $_POST['performance_type'];
			$email_message .= "Performance type: \r\n".implode(', ', $performance_type)."\r\n";

		} else {
			
			echo "<p class='pt-2'>It seems like you want to perform, that's great! 
			Would you like to tell us whether you sing or play?<br>";
			go_back_button();
		}
	}
		// dateTimePicker for table orders
		if (in_array("New table order", $reason)) {
			if (!empty($_POST['dateAndTime']) ) {
				$time = $_POST['dateAndTime'];
				$message .= "\r\n Booking time: ". $time. "(system)";
			} else {
				$message .= "\r\n No booking time selected (system)";
			}
		}

		if ($_SERVER['REQUEST_METHOD'] != 'POST') {

		echo '<p class="pt-2">
		There was a problem to process the form you submitted,<br>
		please, try again.</p>';
		
		} else {

			$email_message .= "Message: \r\n".$message."\r\n";
			$email_message .= "Received at: ". $created;
			mail($mail_to, $subject, $email_message);	

		}
	}

?>