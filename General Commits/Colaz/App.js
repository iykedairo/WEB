a = a.a;
Techie.ready = function(){
var s = pt.stringify;
var count = {}, store = [],
Garbage = [], total,first,
last,least,highest, App = {},
num = /^\d+$/, val,
Box = sapi.id("inputBox"),
submit = sapi.id("sbmtButton"),
header = sapi.id("header")
logPanei = sapi.id("i"),
logPaneii = sapi.id("ii"),
logPaneiii = sapi.id("iii"),
errorPane= sapi.create('h3'),
default_ =sapi.id("default"),
Colaz = sapi.id("Colaz"),
Fact = sapi.id("fact"),
select = sapi.id("select");
pt.body.appendChild(errorPane);
Box.autofocus = true;
Box.focus;



App = {
	Colaz: function(n){
function operation(n){
do{if(n % 2 == 0){
	store.push(n);	n = n/2;
}else{
store.push(n);n = (n*3) + 1;
}}while(n > 1);
store.push(n);}operation(n);
store.forEach(function(e,i,obj){Garbage.push(i);
total = obj.length;
last = function(){
if(obj.indexOf(obj.length - 1)){
	return e;
}
};
first = obj[0];
highest = 0;
least = 0; 
}, store);return [
"First: "+first,
 " Last: "+last(),
 "<br>Least: "+least,
 " Highest: "+highest

];
	},
	
Counter: function( ){
		
	},

Fact: function fact(x){
 if(x == 0){store.push(x);
return 1;}else{store.push(x);
x = x * fact(x-1);
 }var b = x;Garbage.push(x);
return x;	
	},

TimesTable: function( ){
		
	}
};






//App utils
//Fire,serve,Empty,Valid,Clear,msg
App.util = { 
Clear: function( ){
	Box.value = "";
 logPanei.textContent = "";
logPaneii.textContent = "";
logPaneiii.textContent = "";
errorPane.textContent = "";
	},

CheckEmpty: function(val){
 if(pt.Bool.empty(val)){
 App.util.Clear(); var e = "Please supply some digits";
App.util.msg(e);
throw new Error(e);
}
 },


CheckValid: function(input){
	if(!num.test(input)){
App.util.Clear(); var e = "Invalid input. Only numbers are supported.";App.util.msg(e);
 throw new Error(e);
	}
},
	 Fire: function(){
App.util.CheckEmpty(Box.value);
App.util.CheckValid(Box.value);
if(default_.selected){
App.util.msg("Please select a program.");return null;
	}else if(Colaz.selected){	
	App.util.Serve(App.Colaz);
App.util.msg("Colaz Congestion");
return;
	}else if(Fact.selected){
	App.util.Serve(App.Fact);
App.util.msg("Factorial of Numbers");return;}
App.util.msg();
	},
	msg: function(msg){
msg = msg || "<small>Sorry, the feature isn't supported yet.</small>";
errorPane.innerHTML = msg;
	},
	
	Serve: function(fn){
 val = Box.value;
App.util.Clear();
logPanei.innerHTML = fn(val);
logPaneiii.textContent = store;
logPaneii.textContent = Garbage;
store = [], Garbage = [];
	}
};


App.util.msg("What is this")


//Plug N Play!
this.addHandler(submit, 'click', App.util.Fire);

};