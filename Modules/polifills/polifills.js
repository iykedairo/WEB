//GENERIC Polifil for all objects covered in all Techie Modules.

//FUNCTION SHIMS
//EVERY
function Every(callbackfn,thisArg) {
var len = this.length;k = 0;
while (k < len) {
if (k in this) {
if (!callbackfn.call(thisArg, this[k], k, this)) {
return false;
}}k = k + 1;
}return true;
}








//FILTER
function Filter(callbackfn,thisArg){
var k = 0, result = [],
len = this.length;
while (k < len) {
if (k in this) {
if (callbackfn.call(thisArg, this[k], k, this)) {
result.push(this[k]); }}
k = k + 1;
}return result;
}








//FOREACH
function ForEach(callbackfn,thisArg){
var len = this.length, k = 0;
while (k < len) {
if (k in this) {
callbackfn.call(thisArg, this[k], k, this);}
k = k + 1;}
}






// INDEXOF
function IndexOf(searchElement,fromIndex){
var n, k, len = this.length;
if (this.len === 0) {
return -1;
}
n = +fromIndex || 0;
if (n != n) {
n = 0;
}
if (n >= len) {
return -1;
}
if (n < 0) {
n = len + n;
if (n < 0) {
n = 0;
}}
while (n < len) {
if (n in this && this[n] === searchElement) {
return n;
}
n = n + 1;
}
return -1;
}








//LAST_INDEX_OF()
function Last_Index_Of(searchElement,fromIndex){
var n, k,len = this.length;
if (this.len === 0){
return -1;
}
n = +fromIndex || len - 1;
if (n != n) {
n = len - 1;
if (n >= len) {
n = len - 1;}
if (n < 0) {
n = len - 1 + n;
if (n < 0) {
return -1;
}}
while (n > 0) {
if (n in this && this[n] === searchElement) {
return n;}
n = n - 1;}
return -1;
}






//MAP()  MAP()   MAP()
function Map(callbackfn, thisArg) {
var k, len, result = [];
len = this.length;
k = 0;
while (k < len) {
if (k in this) {
result.push(callbackfn.call(thisArg, this[k], k, this));}
k = k + 1;
}return result;
}

//REDUCE()
function Reduce(callbackfn, initialValue) {var value,
len = this.length,k = 0;
if (arguments.length == 2) {
value = arguments[1];} else {
while (k < len && !(k in this)) {k = k + 1;}
if (k >= len) {
value = this[k];
k = k + 1;}
for (; k < len; k = k + 1) {
if (k in this) {
value = callbackfn(value, this[k], k, this);
}}return value;
}


//REDUCE_RIGHT()
function Reduce_Right(callbackfn, initialValue) {
var len, value, k;
len = this.length;
k = len - 1;
if (arguments.length >= 2) {
value = arguments[1];
} else {
while(k >= 0 &&!(k in this)){
k = k - 1;}
if (k < 0) {
value = this[k];
k = k - 1;}
for (; k >= 0; k = k - 1) {
if (k in this) {
value = callbackfn(value, this[k], k, this);
 }} return value;
}







//SOME()
function some(callbackfn, thisArg) {var 
len = this.length; k = 0;
while(k < len){if(k in this){
if(callbackfn.call(thisArg, this[k], k, this)) {
return true; }
}
k = k + 1;
}
return false;
}