var E = "Are we here?";
function Err(x){
  x = x || E;
	//throw new Error(x);
	alert(x);
}

function Interface(a, b){
//[name, methods]
var args = arguments.length;
if(args != 2){
Err("Two arguments required")
 }
this.a = a; this.b = [];
var i, len = b.length;
for(i = 0; i < len; i++){
if(typeof b[i] !== "string"){
Err("['a','b','c','d']");
}
this.b["push"](b[i]);
Err(this.b);
}

}

Err();



Interface.ensureImplements =
function(ob){
	Err();
var args = arguments.length,
j, k, length;
	if(args < 2){
Err("Two arguments or more");
}
for(j = 0; j < args; j++){
var interface = arguments[j];
if(interface.constructor !== Interface){
 Err("Instance conflicts");
 }
length = interface.b.length;
for(k = 0; k < length; k++){
var b = interface.b[k];
if(!ob[b] || typeof ob[b] !== "function"){
Err(interface.a +" is not applicabel");
}

else if(object[method] || typeof object[method] === 'function') {
	Err("Good Job!");
	}
}
}
};

Erro("I need answers!!!");
