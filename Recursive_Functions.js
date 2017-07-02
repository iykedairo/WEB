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

 