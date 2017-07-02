ready(foo, food, fruit);
function foo(){a(this.SAPI)};
function food(){a("Food")}
function fruit(){a("Fruit")}
function bar(){a("Bar")}
function baz(){a("Baz")}
var num = 50, obj = {},
arr = [], bool = !0;



arr.push(foo, bar, baz);
arr.forEach(function(i,e,ar){
	var fn = ar[e];
	//a(typeof fn)
})


var DomReadyState = false;
function ready(fn){var stk = [].slice.call(arguments);
pt.addHandler(sapi, "DOMContentLoaded", function ev(){pt.removeHandler(sapi, "DOMContentLoaded", ev);
var T=setInterval(function(){
if( DOMISREADY() ){var Arr;
stk.forEach(function(fn,i){
Arr = stk.splice(i);});
Arr.forEach(function(fn,i){
	if( pt.isArrayLike(fn) ){
fn.forEach(function(f, j){
fnCheck(f);
 f.call(Techie, sapi);
});}else{fnCheck(fn);
fn.call(Techie, sapi);}
});clearInterval(T);}},0);});
function fnCheck(fn){
if(typeof fn !== 'function'){
a(fn+": Mess from an adult!!");
	throw new TypeError();
}}function DOMISREADY(){
if(sapi.readyState === "complete"){DomReadyState=!0;
}else{DomReadyState = false;}
return DomReadyState;
}}


