a = a.a;
Techie.ready = function(){
var s = pt.stringify;
var count = {}, store = [],
Garbage = [],
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
//s(Box)
var App = {
	
	Clear: function( ){
	Box.value = "";
 logPanei.textContent = "";
logPaneii.textContent = "";
logPaneiii.textContent = "";
errorPane.textContent = "";
	},
	
CheckEmpty: function(val){
 if(pt.Bool.empty(val)){
 	a()
 App.Clear(); var e = "Please supply some digits";
App.msg(e);
throw new Error(e);
}
 },


CheckValid: function(input){
	if(!num.test(input)){
App.Clear(); var e = "Invalid input. Only numbers are supported.";App.msg(e);
 throw new Error(e);
	}
},

	Colaz: function(n){

function operation(n){
do{if(n % 2 == 0){
	store.push(n);	n = n/2;
}
else{
store.push(n);n = (n*3) + 1;
}}while(n > 1);
store.push(n);
}operation(n);
store.forEach(function(e,i,obj){
Garbage.push(i);

count.Total = obj.length;
count.Last = obj.length - 1;
count.First = obj[0];
count.Highest = 0;
count.Lowest = 0; 

}, store);
a(Garbage)
return count;
	},
	
	
	Counter: function( ){
		
	},


Fact: function fact(x){
 if(x == 0){store.push(x);
 return 1;
 } else{
store.push(x);
x = x * fact(x-1);
 }
var b = x;
Garbage.push(x);
return x;	
	},


	Fire: function(){
App.CheckEmpty(Box.value);
App.CheckValid(Box.value);
if(default_.selected){
	App.Clear();
App.msg("Please select a program.");return null;
	}else if(Colaz.selected){	
	App.Serve(App.Colaz);
App.msg("Colaz Congestion");
return;
	}else if(Fact.selected){
	App.Serve(App.Fact);
App.msg("Factorial of Numbers");return;}
App.Clear();
App.msg();
	},
	msg: function(msg){
msg = msg || "Sorry, the feature isn't supported yet.";
errorPane.textContent = msg;
	},
	
	Serve: function(fn){
 val = Box.value;
App.Clear();
logPanei.innerHTML = fn(val);
logPaneiii.textContent = store;
logPaneii.textContent = Garbage;
store = [], Garbage = [];
	},
	
	
	TimesTable: function( ){
		
	}
	
	
};


App.msg("What is this")


//Plug N Play!
this.addHandler(submit, 'click', App.Fire);

};