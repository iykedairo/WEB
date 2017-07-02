// Production steps of ECMA-262, Edition 5, 15.4.4.18 // Reference: http://es5.github.io/#x15.4.4.18 
if (!Array.prototype.forEach) { 
Array.prototype.forEach = function(callback, thisArg) { var T, k; 
if (this == null) { 
throw new TypeError('this is null or not defined'); 
}
var O = Object(this); 
 var len = O.length >>> 0; 
if(typeof callback !== 'function'){ 
throw new TypeError(callback + ' is not a function'); } 
 if (arguments.length > 1) { T = arguments[1]; }
 k = 0;
while(k < len) {
var kValue;
  if (k in O){ 
 kValue = O[k];  
callback.call(T, kValue, k, O); }
 k++; } 
  }; }
  
  function Each(fn, arr) { 
arr = arr || this;
var length = arr.length;
return (function Each(index){
return (index < length) ?
(function(){
fn.call(arr, arr[index], index, arr); 
Each(++index); 
}()) : false;
 }(0));
 };

  