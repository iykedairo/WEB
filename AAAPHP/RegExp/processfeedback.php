<?php
//create short variable names
$name=$_POST['name'];
$email=$_POST['email'];
$feedback=$_POST['feedback'];

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$feedback = trim($_POST['feedback'); 


//set up some static information
$toaddress = "feedback@example.com";
$subject = "Feedback from web site";
$mailcontent = "Customer name: ".$name."\n".
"Customer email: ".$email."\n".
"Customer comments:\n".$feedback."\n";
$fromaddress = "From: webserver@example.com"; 

//invoke mail() function to send mail
mail($toaddress, $subject, $mailcontent, $fromaddress);
$additional_headers="From: webserver@example.com\r\n "
.'Reply-To: bob@example.com"; 
if (!eregi(‘^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$’, $email)) {
echo "<p>That is not a valid email address.</p>".
<p>Please return to the previous page and try again.</p>";
exit;
}
$toaddress = “feedback@example.com”; // the default value
if (eregi(“shop|customer service|retail”, $feedback)) 
$toaddress = “retail@example.com”;
} else if (eregi(“deliver|fulfill”, $feedback)) {
$toaddress = “fulfillment@example.com”;
} else if (eregi(“bill|account”, $feedback)) {
$toaddress = “accounts@example.com”;
}
if (eregi(“bigcustomer\.com”, $email)) {
$toaddress = “bob@example.com”;
}
?>
<html>
<head>
<title>Bob's Auto Parts - Feedback Submitted</title>
</head>
<body>
<h1>Feedback submitted</h1>
<p>Your feedback has been sent.</p>
<p>Your feedback (shown below) has been sent.</p>
<p><?php echo nl2br($mailcontent); ?> </p> 


</body>
</html> 