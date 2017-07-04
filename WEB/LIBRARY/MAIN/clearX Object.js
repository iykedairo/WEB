
var
default = {
color :  function (){
 this.style.color = "#444";
return this;
}
};
 sapi = {};
sapi.qs  = function (x){
return document.querySelector(x);
};

sapi.create  = function (x){
return document.createElement(x);
};

var

input = sapi.qs("#search"),
inputVal = input.value,
inputPlaceHolder = input.placeholder,
X = sapi.create("span");
//find a way to make this input.value or placeholder.value
X.textContent = a || "X";


function ClearX(a){

X.style.cssText = "font-weight:bold, position:relative, right:2, width:1em, color:red";
//created but not existing anywhere on the tree

input.addEventListener("focus", function(){
input.innerHTL.appendChild(X("C")); }, false);

X.addEventListener("click", function(){
input.textContent = " ", inputVal = " ", inputPlaceHolder = "well cleard";
}, false);

if(X.focus){
X.textContent.style.color = "blue";

}
else{
X.textContent.style.color = default["color"];
}
