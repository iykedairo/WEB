/*(function(){
	function foo(){
		var drink = "Energy Drink"; 
		var lyrics = "";
		var cans = 99; 
		while (cans > 0) {

		lyrics = lyrics + cans + " cans of "

		+ drink + " on the wall <br>"; 
		lyrics = lyrics + cans + " cans of " 
		+ drink + "<br>";
		lyrics = lyrics + "Take one down, pass it around,<br>";

		if (cans > 1) { 
			lyrics = lyrics + (cans-1) + " cans of "
			+ drink + " on the wall <br>";
		}
		else { 
			lyrics = lyrics + "No more cans of " 
			+ drink + " on the wall <br>";
		}
		cans = cans - 1; 
		}
	}
document.write(foo);

(function(){
var now = new Date();
if (now.getMonth() == 0 && now.getDate() == 1){
alert("Happy new year!");
}
})();


});
*/
/*(function(){

var foo = function(){
var person1 = new person;
person1.getName();
};

document.addEventListener("keypress", foo, false);

function person(name){
 this.getName = function(){
	name = "Michael Iyke";
	document.body.innerHTML += name;
	//return this;
};

this.setName = function (value) {
name = value;
};
return name;
};
})();*/
