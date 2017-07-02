<?php
   
class Car extends Vehicle{
public $speed;
public function __set($a,$b){
	//set $speed
	$this->a = $b;
	}
public function __get($x){
	return $x;
}
}
}



?>