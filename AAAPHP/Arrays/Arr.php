<?php
   

function count_back($arr){
	//i = last element in arr
	$i = end($arr);
	while($i){
echo "$i<br />"
;
$i = prev($array);
}
}


$_n=array(1,36,20,3,4,14,8);

count_back($_n);



array_walk($arr,'fn',$fn_args);
array_walk($_n, 'count_back', $_n);


function my_print($value){
echo "$value<br />";
}
array_walk($array,'my_print');
function my_multiply(&$value, $key, $factor){
//[item, index, user_defined]
//&$value mean the variable is passed by refference so the array itself can be altered
$value *= $factor;
}
array_walk(&$array, 'my_multiply', 3);



/*
count(), sizeof(), array_count_values()

count() and sizeOf() are same
they return the nunber of elements in array but array_count_values() is different. it returns an associative array representing elements' frequency of occurence
*/
$array = array(4, 5, 1, 2, 3, 1, 2, 1);
$ac = array_count_values($array);
/*creates an associative array called $ac that contains
Key Value
4 1
5 1
1 3
2 2
3 1
*/

/*Converting Arrays to Scalar Variables: extract()If you have a non-numerically indexed array with a number of key value pairs, you canturn them into a set of scalar variables using the function extract().The prototype forextract() is as follows:extract(array var_array [, int extract_type] [, string prefix] );

The purpose of extract() is to take an array and create scalar variables with the names
of the keys in the array.The values of these variables are set to the values in the array.
Here is a simple example

*/
$array = array( 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3');
extract($array);
echo "$key1 $key2 $key3";
//This code produces the following output:value1 value2 value3
/*

3.2 Allowed extract_type Parameters for extract()
Type Meaning
EXTR_OVERWRITE Overwrites the existing variable when a collision occurs.
EXTR_SKIP Skips an element when a collision occurs.
EXTR_PREFIX_SAME Creates a variable named $prefix_key when a collision
occurs.You must supply prefix.
EXTR_PREFIX_ALL Prefixes all variable names with prefix.You must supply 
prefix.
EXTR_PREFIX_INVALID Prefixes variable names that would otherwise be invalid (for
example, numeric variable names) with prefix.You must sup-
ply prefix.
EXTR_IF_EXISTS Extracts only variables that already exist (that is, writes existingvariables with values from the array).This parameter is usefulfor converting, for example, $_REQUEST to a set of valid vari-
ables.
EXTR_PREFIX_IF_EXISTS Creates a prefixed version only if the nonprefixed version
already exists.
EXTR_REFS Extracts variables as references.
*/

$array = array( 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3');
extract($array, EXTR_PREFIX_ALL, 'my_prefix');
echo “$my_prefix_key1 $my_prefix_key2 $my_prefix_key3”;


?>