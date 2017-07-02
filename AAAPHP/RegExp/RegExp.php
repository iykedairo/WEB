<?php
 NOTE: USE SINGLE QUOTES WHEN  NOT DOUBLE.
[a-z]//xter class
[^a-z]//anything except a-z
^[a-z]$//single xter b/w a-z
com|edu|net//a or b or c

$email = 
^[a-zA-Z0-9_+AFw--.]+-@[a-zA-Z0-9+AFw--]+-+AFw.[a-zA-Z0-9+AFw--.]+-$+AAA;

FINDING SUBSTRINGS WITH REGULAR EXPRESSIONS
ereg()//case sensitive
eregi()//case insensitive
//the only difference b/w 'em
ereg_replace(),
eregi_replace()
SPLITTING TEXT WITH REGEXP
split();
splits a str and returns the array of splitted substrings

r example,
$address = +IBw-username@example.com+IB0;
$arr = split (+IBwAXA.|@+IB0, $address);
while (list($key, $value) = each ($arr)) {
echo +IBw<br />+IB0.$value;
}

username
@
example
.
com+AAA
?>