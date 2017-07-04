
<?php 
// domain.com/page.php
// domain.com/page.php?name=brad&email=brad@domain.com
// PHPandMySQL.inmotiontesting.com/page1.php?id=1
// PHPandMySQL.inmotiontesting.com/page2.php?id=2

if (isset($_REQUEST['submitted'])) {
// Initialize error array.
  $errors = array();
  // Check for a proper First name
  if (!empty($_REQUEST['firstName'])) {
  $firstName = $_REQUEST['firstName'];
  $pattern = "/^[a-zA-Z0-9\_]{2,20}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$firstName)){ $firstName = $_REQUEST['firstName'];}
  else{ $errors[] = 'Your Name can only contain _, 1-9, A-Z or a-z 2-20 long.';}
  } else {$errors[] = 'You forgot to enter your First Name.';}
  
  // Check for a proper Last name
  if (!empty($_REQUEST['lastName'])) {
  $lastName = $_REQUEST['lastName'];
  $pattern = "/^[a-zA-Z0-9\_]{2,20}/";// This is a regular expression that checks if the name is valid characters
  if (preg_match($pattern,$lastName)){ $lastName = $_REQUEST['lastName'];}
  else{ $errors[] = 'Your Name can only contain _, 1-9, A-Z or a-z 2-20 long.';}
  } else {$errors[] = 'You forgot to enter your Last Name.';}
  
  //Check for a valid phone number
  if (!empty($_REQUEST['phone'])) {
  $phone = $_REQUEST['phone'];
  $pattern = "/^[0-9\_]{7,20}/";
  if (preg_match($pattern,$phone)){ $phone = $_REQUEST['phone'];}
  else{ $errors[] = 'Your Phone number can only be numbers.';}
  } else {$errors[] = 'You forgot to enter your Phone number.';}
  
  if (!empty($_REQUEST['redmapleacer']) || !empty($_REQUEST['chinesepistache']) || !empty($_REQUEST['raywoodash'])) {
  $check1 = $_REQUEST['redmapleacer'];
  if (empty($check1)){$check1 = 'Unchecked';}else{$check1 = 'Checked';}
  $check2 = $_REQUEST['chinesepistache'];
  if (empty($check2)){$check2 = 'Unchecked';}else{$check2 = 'Checked';}
  $check3 = $_REQUEST['raywoodash'];
  if (empty($check3)){$check3 = 'Unchecked';}else{$check3 = 'Checked';}
  } else {$errors[] = 'You forgot to enter your Phone number.';}
  }
  //check for a proper email id
  if (!empty($_REQUEST['email'])) {
  $email = $_REQUEST['email'];

  $pattern = '/^(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){255,})(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){65,}@)(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22))(?:\\.(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-+[a-z0-9]+)*\\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-+[a-z0-9]+)*)|(?:\\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\\]))$/iD';

  if (preg_match($pattern,$email)){ $email = $_REQUEST['email'];}
  else{ $errors[] = 'Sorry you entered an invalid Email Id';}
  }
  //End of validation 


// Sends the email if validation passes

// The following code is what sends the email. The inputs must pass the previous validation in order for the email to send. You will need to replace the "to" email address with the email address you want to receive the email to.
// if (isset($_REQUEST['submitted'])) {
  if (empty($errors)) { 
  $from = "http://www.michaeliyke.info"; //Site name
  // Change this to your email address you want to form sent to
  $to = "me@michaeliyke.info"; 
  $subject = "Admin - htttp://www.michaeliyke.info! Comment from " . $firstName . "";
  
  $message = "Message from " . $firstName . " " . $lastName . " 
  Email: " . $email . " 
  Red Maple Acer: " . $check1 ."
  Chinese Pistache: " . $check2 ."
  Raywood Ash: " . $check3 ."";
  mail($to,$subject,$message,$from);
  }


// Error Reporting Code

// This code will print any errors that occurs such as an empty input.
  //Print Errors
  if (isset($_REQUEST['submitted'])) {
  // Print any error messages. 
  if (!empty($errors)) { 
  echo '<hr /><h3>The following occurred:</h3><ul>'; 
  // Print each error. 
  foreach ($errors as $msg) { echo '<li>'. $msg . '</li>';}
  echo '</ul><h3>Your mail could not be sent due to input errors.</h3><hr />';}
   else{echo '<hr /><h3 align="center">Thanks for commenting! I will take time to go through your comment.</h3>';
  }
  }


// When someone submits a comment, they "POST" the comment to the server.
// Therefore, we only want to insert a comment to the database if there
// is POST data. The if statement below checks to see if someone has
// posted data to the page
if( $_POST )
{
  // At this point in the code, we know someone has posted data and
  // is trying to post a comment. We therefore need to now connect
  // to the database

  // Below we are setting up our connection to the server. Because
  // the database lives on the same physical server as our php code,
  // we are connecting to "localhost". inmoti6_myuser and mypassword
  // are the username and password we setup for our database when
  // using the "MySQL Database Wizard" within cPanel
  $con = mysql_connect("localhost","okeysajogwuoke","iykesMan22");

  // The statement above has just tried to connect to the database.
  // If the connection failed for any reason (such as wrong username
  // and or password, we will print the error below and stop execution
  // of the rest of this php script
  if (!$con)
  {
    die('Could not connect: ' . mysql_error());
  }

  // We now need to select the particular database that we are working with
  // In this example, we setup (using the MySQL Database Wizard in cPanel) a
  // database named inmoti6_mysite
  mysql_select_db("michael_db", $con);

  // We now need to create our INSERT command to insert the user's
  // comment into the database.
  //
  // Let's first take a look at the sample INSERT code we received when we
  // used phpMyAdmin to create a test comment:
  //
  // INSERT INTO `inmoti6_mysite`.`comments` (`id`, `name`, `email`, `website`,
  // `comment`, `timestamp`, `articleid`) VALUES (NULL, 'John Smith',
  // 'johns@domain.com', 'johnsmith.com', 'This is a test comment.',
  // CURRENT_TIMESTAMP, '1');
  //
  // If we ran this command, it would insert the same exact comment from John
  // Smith every time. What we need to do is update this query so that it
  // includes all of the data that the user typed in.
  //
  // When we setup our HTML Form, some of the text boxes we used were:
  // <input type='text' name='name' id='name' />
  // <input type='text' name='email' id='email' />
  // The important information we need from this is the "id" that is set.
  // For example, to get the user's name, we can grab the 'name'. To
  // get their email address, we need to get the value of 'email'.
  //
  // Using the $_POST variable, we can get this data. This is what we're
  // doing below
  $users_firstName = $_POST['firstName'];
   $users_lastName = $_POST['lastName'];
 $users_email = $_POST['email'];
  $users_comment = $_POST['comment'];

  // We now have all of the data that the user inputed. What you don't want
  // to do is trust the user's input. Savy users / hackers may attempt to use
  // an sql injection attack in order to run sql statements that you did not
  // intend to run. For example, the following is a basic query for checking
  // someone's username and password:
  //
  // SELECT * FROM users WHERE user='USERNAME' AND password='PASSWORD'
  //
  // In the above, we're assuming the user typed USERNAME as their username and
  // PASSWORD as their PASSWORD. But, what if the user typed the following as
  // their password?
  //
  // ' OR ''='
  //
  // The new query would then be the following:
  //
  // SELECT * FROM users WHERE user='USERNAME' AND password='' OR ''=''
  //
  // Running the above query would allow anyone to login as any user! We can use
  // the mysql_real_escape_string function to escape the user's input. If used in
  // the above example, the new query would read:
  //
  // SELECT * FROM users WHERE user='USERNAME' AND password='\' OR \'\'=\''
  //
  // Because the single quotes are "escaped" (i.e. appended with a backslash), the
  // hackers attempt would fail.
  $users_firstName = mysql_real_escape_string($users_firstName);
   $users_lastName = mysql_real_escape_string($users_lastName);
 $users_email = mysql_real_escape_string($users_email);
  $users_comment = mysql_real_escape_string($users_comment);
  
  // We also need to get the article id, so we know if the comment belongs
  // to page 1 or if it belongs to page 2. The article id is going to be
  // passed in the URL. For example, looking at this URL:
  //
  // http://phpandmysql.inmotiontesting.com/page1.php?id=1
  //
  // The article id is 1. To get data from the url, use the $_GET variable,
  // as in:
  $articleid = $_GET['id'];

  // We also want to add a bit of security here as well. We assume that the $article_id
  // is a number, but if someone changes the URL, as in this manner:
  // http://phpandmysql.inmotiontesting.com/page2.php?id=malicious_code_goes_here
  // ... then they will have the potential to run any code they want in your
  // database. The following code will check to ensure that $article_id is a number.
  // If it is not a number (IE someone is trying to hack your website), it will tell
  // the script to stop executing the page
  if( ! is_numeric($articleid) )
    die('invalid article id');

  // At this point, we've grabbed all of the data that we need. We now need
  // to update our SQL query. For example, instead of "John Smith", we'll
  // use $users_name. Below is our updated SQL command:
  $query = "
  INSERT INTO 'michael_db'.'visitors_comments' ('id', 'firstName', 'lastName', 'email',
        'comment', 'articleid', 'timestamp') VALUES (NULL, '$users_firstName',
        '$users_lastName', '$users_email', '$users_comment',
        CURRENT_TIMESTAMP, '$articleid');";

  // Our SQL stated is stored in a variable called $query. To run the SQL command
  // we need to execute what is in the $query variable.
  mysql_query($query);

  // We can inform the user to what's going on by printing a message to
  // the screen using php's echo function
  echo "<h2>Thank you for your Comment!</h2>";

  // At this point, we've added the user's comment to the database, and we can
  // now close our connection to the database:
  mysql_close($con);
}








// Prints the contact form

// This is the form that will display for the visitor to fill out.
//   <h2>Contact us</h2>
//   <p>Fill out the form below.</p>
//   <form action="" method="post">
//   <label>First Name: <br />
//   <input name="firstName" type="text" value="- Enter First Name -" /><br /></label>
//   <label>Last Name: <br />
//   <input name="lastName" type="text" value="- Enter Last Name -" /><br /></label>
//   <label>Phone Number: <br />
//   <input name="phone" type="text" value="- Enter Phone Number -" /><br /></label>
//   <label>Red Maple Acer: 
//   <input name="redmapleacer" type="checkbox" value="Red Maple Acer" /><br /></label>
//   <label>Chinese Pistache: 
//   <input name="chinesepistache" type="checkbox" value="Chinese Pistache" /><br /></label>
//   <label>Raywood Ash: 
//   <input name="raywoodash" type="checkbox" value="Raywood Ash" /><br /></label>
//   <input name="" type="reset" value="Reset Form" /><input name="submitted" type="submit" value="Submit" />
//   </form>




//End of errors array
  ?>

