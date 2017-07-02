/*
Welcome to PT NIGERIA JavaScript Application Programming Interface. All Rights Reserved.
*/
var main = {
sub : function(){
return alert("Well played!");
},
etc :  function(){


}
};


var surge =  {
	PTAPI: 12,
 PT_API:22,
  ptapi : 53, 
  Ptapi:504,
  pt_api:547,
  pt:69},
   i, leng = surge.length, store = [];
var s = Object.keys(surge);
for(i in surge){
if(surge.hasOwnProperty(s[i]))
var a = i, // prop
b = surge[i]; //val
//alert(i+":"+surge[i]);
window.i = i;
window.i[surge[i]] = main;
store.push(i+": "+surge[i]) ;
alert(window.pt)
		}
alert(store)
