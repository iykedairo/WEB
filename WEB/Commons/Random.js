var gotten = prompt("Amout", "Please Contribute Your Token");
var num = parseFloat (10);
num += parseFloat(gotten);
alert(num);
var num1 = 2;
var num2 = 1;
var max = (num1 < num2) ? alert("Yes!") : alert("NOOO");

function diff(){
/*
This is to demonstrate that named arguments are a convenience, not a necessity.
*/
  if(arguments[0] < arguments[1]){
    return arguments[1] / arguments[0];
  }
  else{
    return arguments[0] * arguments[1];
  }
}
diff(20000, 2500);


function sayHi(){
/*
This is to demonstrate that 
*/
 var greetings = console.log(arguments[0] + " " + arguments[1] + ", " + arguments[2]);
  return greetings;
}
var name = prompt("Please fill you name");
var designation = prompt("Please fill your designation in the form: MR or MRS etc");
if(name && designation){
sayHi("Hi" + " " + designation, name, "how are you today?");
}
else{
  sayHi("Hi Guest, we understand you want to remain anonimous.");
}


function howManyArgs() {
alert(arguments.length);
}
howManyArgs("string", 45); //2
howManyArgs(); //0
howManyArgs(12);
function doAdd() {
if(arguments.length == 1) {
alert(arguments[0] + 10);
} else if (arguments.length == 2) {
alert(arguments[0] + arguments[1]);
}
}
doAdd(10); //20
doAdd(30, 20); //50

var person1 = {
	//first property and value;
	toLocaleString : function(){
		return "Nicholaos";		
		},
	//second property and value;
	toString : function(){
		return "Nicholas";
		}
	};

var person2 = {
	toLocaleString : function(){
		return "Grigorios";
		},
	toString : function(){
		return "Greg";
		}
	
	};

var people = [person1, person2];
alert(people); //Nicholas Greg
alert(people.toString()); //Nicholas, Greg
alert(people.valueOf()); //Nicholas, Greg
alert(people.toLocaleString()); //Nicholaos, Gregorios
var colors = ["red", "green", "blue"];
alert(colors.join(","));
alert(colors.join("||"));
alert(colors.join ());


var person1 = {
	//first property and value;
	toLocaleString : function(){
		return "Nicholaos";		
		},
	//second property and value;
	toString : function(){
		return "Nicholas";
		}
	};

var person2 = {
	toLocaleString : function(){
		return "Grigorios";
		},
	toString : function(){
		return "Greg";
		}
	
	};

var people = [person1, person2];
alert(people); //Nicholas Greg
alert(people.toString()); //Nicholas, Greg
alert(people.valueOf()); //Nicholas, Greg
alert(people.toLocaleString()); //Nicholaos, Gregorios