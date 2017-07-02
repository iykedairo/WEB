function $( cssquery ) { var t = document.querySelectorAll(cssquery); return (t.length === 0) ? false : (t.length === 1) ? t[0] : t; }

function each(fn, arg){ 
arg = arg || this;
var length = arg.length;
var store = [];
return (function each(index){
return (index < length)  ? 
(function(){
fn.call(arg, arg[index], index, arg);
store.push(index);
each(++index);}()) : false;
}(0));}


function EACH(fn, args){
args = args || this;
var length = args.length;
var store = [], index = 0;
while(index < length){
fn.call(args,args[index],index, args);
}
}


function _$(e) {
this.elements = [];var obj;
PT.forEach.call(e, fn,e);
function fn(e, i, array){
obj = e;
if(typeof obj ==='string'){
obj = sapi.qs(obj);
//obj = sapi.qs(obj);
}
this.elements.push(obj);
}
return this.elements;
}
