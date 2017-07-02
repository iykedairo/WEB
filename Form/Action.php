<?php

$date = date('H:i, jS F Y');
$Root = $_SERVER['DOCUMENT_ROOT'];
$firstName = $_POST['firstName']; 
$lastName = $_POST['lastName'];
$middleName = $_POST['middleName'];
$user = $_POST['userName'];
$password = $_POST['password'];
$email = $_POST['email'];
$phone = $_POST['mobile'];
$path = "$Root/Form/Data";
$datas = "
<!DOCTYPE html>
<html lang=\"en\">
   <head>
<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
<meta charset=\"UTF-8\" />
<script type='text/javascript' src='../../Techie.js'></script>
<script type='text/javascript' src='bnkGoodParts.js'></script>
<title>Automatic Page</title>
   </head>
  <body>
 <p id='bd'>
<table>
<thead><h2>Form Details</h2></thead>
<tbody>
<p id='p'>$date</p>
<tr>
<td>First Name: </td> <td>$firstName</td> 
</tr>

<tr>
<td>Last Name: </td> <td>$lastName</td> 
</tr>

<tr>
<td>Middle Name: </td> <td>$middleName</td> 
</tr>

<tr>
<td>Full Name: </td> <td>$firstName $middleName $lastName</td> 
</tr>

<tr>
<td>User Name: </td> <td>$user</td> 
</tr>

<tr>
<td>Password: </td> <td>$password</td> 
</tr>

<tr>
<td>E-mail: </td> <td>$email</td> 
</tr>

<tr>
<td>Mobile Phone: </td> <td>$phone</td> 
</tr>

</tbody>
</table>
</p>
<p align='center'>Generated Page!</p>

<p align='center'> 
<a href='Data/$user.html'><button>visit page</button></a>
</p>

<style>
body{width: 22em;}
h2{
 padding-top: 15px;
 text-align: center;
}
#bd{
	 	background-color:#ccc;
}
table{
	padding: 5px;
	margin: 0 auto;
	border-radius: 4px;
	font-size: 1em;
	text-align: center;
}
#p{
	font-size: 1.25em;
	margin-bottom: -.5em;
	text-align: center;
}
</style>
</body>
</html>
";
echo $datas;
$fp = fopen("$path/$user.html", 'ab');
flock($fp, LOCK_EX);
if (!$fp) {
echo "<p><strong> Your order could not be processed at this time.
Please try again later.</strong></p></body></html>";
exit;
}
fwrite($fp, $datas, strlen($datas));
flock($fp, LOCK_UN);
fclose($fp);



?>