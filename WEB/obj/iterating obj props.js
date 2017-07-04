var obj = {
		a : "one",
		b : "two",
		c : "three",
		d : "four",
		e : "five"
};

var properties = Object.keys(obj);
// if you want to mimic for-in behavior
var i, len;
for (i=0, len=properties.length; i < len; i++){
	var props = "Name: " + properties[i];
	var vals = "Value: " + obj[properties[i]];
//alert( props + ": " + vals);
var addAll = [];
addAll.push(props + ": " + vals);
//alert(addAll);
	//document.getElementById("objectTest").innerHTML = props + ": " + vals;
	//console.log("Name: " + properties[i]);

	//console.log("Value: " + object[properties[i]]);
	}



	var object = {
		a : "one",
		b : "two",
		c : "three",
		d : "four",
		e : "five"
};

var properties = Object.keys(object);
// if you want to mimic for-in behavior
var i, len;
for (i=0, len=properties.length; i < len; i++){
	var props = "Name: " + properties[i];
	var vals = "Value: " + object[properties[i]];
//alert( props + ": " + vals);
var addAll = [];
addAll.push(props + ": " + vals);
//alert(addAll);
	//document.getElementById("objectTest").innerHTML = props + ": " + vals;
	var bb = "Name: " + properties[i];

	var aa = "Value: " + object[properties[i]];
	console.log(bb + " " + aa);
	}
	function Person(name) {
if (this instanceof Person) {
this.name = bb;
} else {
return new Person(bb);
}
}




//Main.NewArray = Main;