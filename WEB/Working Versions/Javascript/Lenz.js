!(function(window){
	alert = a = PT.a;
var input = sapi.id("input"),
button = sapi.id("button"),
h = sapi.id("h"),
el = sapi.create("h2"),
body = sapi.body;
body.appendChild(el);

PT.EventUtil.addHandler(button, "click", function(e){
	var val = input.value;
el.textContent = Lenz(val);
});
function check(){
pr = prompt("Incorrect input. Type a number without space or comas");
return pr;
}
function serve(){
el.textContent = pr;
}
a(bool)
function bool(x){
return !!(typeof x === "number") ? true : false;
}/*
while(true){
	
	if(pr != "Michael"){
		alert("if states")
		check();
	}
else if(pr == "Michael"){
	alert("Evaluation else")
		serve();
		break;
	}
}
*/
PT.a()

function Lenz(n){
var store = [],
emty = /\S+/,
tst = /^\d+$/;
if(!tst.test(n)){
	
	return null;
}
function operation(n){
	do{
	if(n % 2 == 0){
  store.push(n);
n = n/2;
}
else{
store.push(n);
n = (n*3) + 1;
}
}while(n > 1);
store.push(n);
}
operation(n);
return store;
}


}(window));
