<?php
//create short variable name
$DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
?>
<html>
<head>
<title>Bob's Auto Parts - Customer Orders</title>
</head>
<body>
<h1>Bob's Auto Parts</h1>
<h2>Customer Orders</h2>
<?php
$Root = $_SERVER['DOCUMENT_ROOT'];

$orders = file("$Root/Bob/Orders/Orders.txt");
$number_of_orders = count($orders);
if($number_of_orders == 0){
	echo "<p><strong>No orders pending. Please try again later.</strong></p>";
}

for($i = 0; $i < $number_of_orders; $i++){
	echo $orders[$i].'<br />'."<h1>$i</h1>";
}
?>
</body> 