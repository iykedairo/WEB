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
//Read in the entire file.
//Each order becomes an element in the array
$orders= file("$DOCUMENT_ROOT/Bob/orders/orders.txt");
// count the number of orders in the array
$number_of_orders = count($orders);
if ($number_of_orders == 0) {
echo "<p><strong>No orders pending.
Please try again later.</strong></p>";
}

echo "<table border=\"1\">\n";
echo "<tr><th bgcolor=\"#CCCCFF\">Order Date</th>
<th bgcolor=\"#CCCCFF\">Tires</th>
<th bgcolor=\"#CCCCFF\">Oil</th>
<th bgcolor=\"#CCCCFF\">Spark Plugs</th>
<th bgcolor=\"#CCCCFF\">Total</th>
<th bgcolor=\"#CCCCFF\">Address</th>
<tr>";
for ($i=0; $i<$number_of_orders; $i++) {
//split up each line
/*

This code “explodes” the passed-in string into parts. Each tab character becomes a break
between two elements. For example, the string
"20:43, 31st March 2008\t0 tires\t1 oil\t4 spark plugs\t$26.00\t127 Acacia St,
Springfield
is exploded into the parts “20:43, 31st March 2008”, “0 tires”, “1 oil”, “4 spark
plugs”, “$26.00”, and “127 Acacia St, Springfield”.
*/
$line = explode("\t", $orders[$i]);
// keep only the number of items ordered
$line[1] = intval($line[1]);
$line[2] = intval($line[2]);
$line[3] = intval($line[3]);
// output each order
echo "<tr>
<td>".$line[0]."</td>
<td align=\"right\">".$line[1]."</td>
<td align=\"right\">".$line[2]."</td>
<td align=\"right\">".$line[3]."</td>
<td align=\"right\">".$line[4]."</td>
<td>".$line[5]."</td>
</tr>";
}
echo "</table>";
?>
</body>
