function LoadFiles(files, fn) {
    "use strict";
    var toString = Object.prototype.toString;
    var hasRun = false; var index = 1, loaded = {};
    if (toString.call(files) != "[object Array]") { files = [files];}
files.forEach(function(file_source, TechieJs){
TechieJs = document.createElement("script");
TechieJs.setAttribute("type","text/javascript");
TechieJs.setAttribute("defer","true");
TechieJs.setAttribute("async","false");
TechieJs.setAttribute("src", file_source);
if (!hasRun) {hasRun = true;
if (TechieJs.onreadystatechange) {
	TechieJs.onreadystatechange = function(){
if (TechieJs.readyState==="loaded"||TechieJs.readyState==="complete") {
fn(TechieJs);}}}else{TechieJs.onload = function(){fn(TechieJs);}}
}
var timer = setTimeout(function(x){
    clearTimeout(timer);
document.getElementsByTagName('head').item(0).appendChild(TechieJs);

}, 500);
});
}var stack = [
"../Commit/jQuery.js","Text.js","Temp.js"
];
LoadFiles(stack, function(){
    pt("#main").ready = function(t, doc, body, head, prize, w){

var l = t.element.getLastChild(this[0]);
f = pt("#main").each(function(x){
   t.element.eachChild(function(){
Log(this, false)

   }  , this)
})
    }
});


