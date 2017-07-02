Techie["ready"](function(window){
	alert = a = Techie.a;
var 
count = {},
Garbage = [],
store = [],
NotEmpty = /\S+/,
tst = /^\d+$/;
input = sapi.id("input"),
btn = sapi.id("button"),
bin = sapi.id("bin"),
times = sapi.id("times"),
counter = sapi.id("count"),
h = sapi.id("h"),
el = sapi.id("i"),
elll = sapi.id("ii"),
ell = sapi.id("iii"),
Lens= sapi.id("Lenz"),
fax = sapi.id("fact"),
select = sapi.id("select"),
err = sapi.create("h3");
Techie.body.appendChild(err);
  
function fact(x){
if(!tst.test(x)){
	clear();
	msg("Invalid input");
	return null;}
 if(x == 0){
 store.push(x);
 return 1;
 }
 else{
 store.push(x);
 x = x * fact(x-1);
 }
 //var b = x;
Garbage.push(x);
return x;
}

function clear(){
 el.textContent = "";
ell.textContent = "";
elll.textContent = "";
err.textContent = "";
}
function serve(fn){
var val = input.value;
this.val = val;
if(!NotEmpty.test(val)){
	msg("Please some digits");
	return null;
}
clear();
el.innerHTML = fn(val);
elll.textContent = store;
ell.textContent = Garbage;
store = [], Garbage = [];
}

function Lenz(n){
if(!tst.test(n)){
	clear();
	msg("Invalid input");
	return null;}
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
store.each(function(e,i,obj){
Garbage.push(i);
count.Total = this.length;
count.Last = this.length - 1;
count.First = this[0];
count.Highest = 0;
count.Lowest = 0; 
}, this);
return String(count);
//JSON.stringify(count);
}

Array.prototype.each = each;
function each(fn, obj){
obj = obj || this;
var len = obj.length, i;
for(i = 0; i < len; i++)
fn.call(obj, obj[i], i, obj);
return this;
}




	function msg(r){
r = r || "Sorry, the feature isn't supported yet.";
err.textContent = r;
}


Techie.EventUtil.addHandler(btn, "click", fn);


function fn(){
	 var Lz = Lens.selected;
	var fct = fax.selected,
	counter = counter.selected,
	times = times.selected,
	bin = bin.selected;
	if(!Lz && !fct){
	msg();
		return null;
	}
if(!NotEmpty.test(input.value)){
clear();
	msg("Please, supply some digits");
	return null;
}
else if(!tst.test(input.value)){
	clear();
	msg("Invalid input");
	return null;
}if(Lz){		
		serve(Lenz);
msg("Colaz Congestion");
	}else if(fct){
		serve(fact);
msg("Factorial of Numbers");
	}
}





});
