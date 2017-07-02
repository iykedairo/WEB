<?php 

//set up some static information
$toaddress = "feedback@example.com";
$subject = "Feedback from web site";
$mailcontent = "Customer name: ".$name."+AFw-n".
"Customer email: ".$email."+AFw-n".
"Customer comments:+AFw-n".$feedback."+AFw-n";
$fromaddress = "From: webserver@example.com";+AAA

//invoke mail() function to send mail
mail($toaddress, $subject, $mailcontent, $fromaddress);
/*
The first three parameters are compulsory and represent the address to send email to, the
subject line, and the message contents, respectively.The fourth parameter can be used to
send any additional valid email headers.

bool mail(string to, string subject, string message,
string [additional_headers [, string additional_parameters]]);+AAA


The optional fifth parameter can be used to pass a parameter to whatever program= you
have configured to send mail.+AAA

*/

$additional_headers="From: webserver@example.com+AFw-r+AFw-n "
.'Reply-To: bob@example.com';+AAA


/*

 Trimming Strings: chop(), ltrim(), and trim()+AAA
trim off trailingspaces start and end
The characters it strips by default are newlines and carriage returns (+AFw-n
and +AFw-r), horizontal and vertical tabs (+AFw-t and +AFw-x0B), end-of-string characters (+AFw-0), and
spaces.You can also pass it a second parameter containing a list of characters to strip
instead of this defaul+AAA-t.
rtrim, ltrim trims at the end and start resp.

   Formatting Strings for Presentation+AAA
The nl2br() function takes a string as a parameter and replaces all the newlines in it with
the XHTML <br /> tag.This capability is useful for echoing a long string to the browser.
For example, you can use this function to format the customer's feedback to echo it back:

print()-
printf()-prints formatted str
sprintf()-returns frmtted str


+IBg-hgghhg    +IBk,ggjjjf

+IBw-hhhjhh  +IB0;+AAA-hjhjj
*/
echo "Total amount of order is $total.";+AAA
printf ("Total amount of order is %s.", $total);+AAA
//%s replace string wt nxt arg
printf ("Total amount of order is %.2f", $total);+AAA
//%.2f nxt arg is a float to 2 decimal places

printf ("Total amount of order is %.2f (with shipping %.2f) ",
$total, $total_shipping);
//substitute %.2f respectvly

printf ("Total amount of order is %2+AFw$.2f (with shipping %1+AFw$.2f) ",
$total_shipping, $total);
//2+AFw$ after % means position of the arg in the stack.

Variants printf():
vprintf() & vsprintf().
They accept two args, the string, & an args array(I dont know..)

STRING CASE FORMATTING
ucfirst($str) First is capitl
ucwords() Each Is Capital
strtoupper ALL IS CAPITAL
strtolower() all is lowercase

FORMATTING FOR DATABASE
$feedback = addslashes(trim($_POST['feedback']));
 use the function 
get_magic_quotes_gpc() to determine whether addslashes is turned on by default in your configutation. If it is, use 
stripslashes($str) before presenting to recover data

Joining and Splitting Strings with String
Functions+AAA 
Using explode(), implode(), and join()+AAA

$email_array = explode('@', $email);
//bigCustomer.com
if (strtolower($email_array[1]) == "bigcustomer.com") {
$toaddress = "bob@example.com";
} else {
$toaddress = "feedback@example.com";
}

$new_email = implode('@', $email_array);//joins the elements in $email_array with @

$token = strtok($feedback, '" ");
echo $token."<br />";
while ($token != "") {
$token = strtok(" ");
echo $token."<br />";
}+AAA
//works like explode but is a bit more useful
preceding code prints each token from the customer's feedback on a separate
line and loops until there are no more tokens.
/*
Using substr();

string substr(string string, int start[, int length] );

$test = +IBg-Your customer service is excellent+IBk;+AAA

substr($test, 1);
//our cstmer srvc is xlent
substr($test, -9);
// excellent

substr($test, 0, 4);
//Your-4 xters from 0
echo substr($test, 5, -13);+AAA
//customer care
*/


COMPARING STRINGS
Performing String Ordering:
<string-compare>
 strcmp(), strcasecmp(), and
strnatcmp()
The strcmp(), strcasecmp(), and strnatcmp(). strlen();
if (strlen($email) < 6){
echo +IBg-That email address is not valid+IBk;
exit; // force execution of PHP script
}


FINDING STRING IN STRINGS
strstr() == strchr();
//to find str or xter in str
$toaddress = +IBg-feedback@example.com+IBk; // the default value
// Change the $toaddress if the criteria are met
if (strstr($feedback, +IBg-shop+IBk))
$toaddress = +IBg-retail@example.com+IBk;
else if (strstr($feedback, +IBg-delivery+IBk))
$toaddress = +IBg-fulfillment@example.com+IBk;
else if (strstr($feedback, +IBg-bill+IBk))
$toaddress = +IBg-accounts@example.com+IBk;
strrchr()//strts mtching frm last occur
stristr() == strstr() but better for case insensitivity [delivery == DeLiverY]

FINDING THE POSITION OF A SUBSTRING
strpos(),//pos of 1st occur
strrpos();//pos of last occur
$tst = 'Hello world';
strpos($tst, 'o');
//4 ie 01234 pos of 'o' is 4
strpos($tst, 'o', 5);
//looking for o from pos 5
// 7
$result = strpos($test, +IBw-H+IB0);
if ($result === false) {
echo +IBw-Not found+IB0;
} else {
echo +IBw-Found at position ".$result;
}+AAA

REPLACING STRINGS
str_replace()
$feedback = str_replace($offcolor, +IBg%!@*+IBk, $feedback);


substr_replace()

?>