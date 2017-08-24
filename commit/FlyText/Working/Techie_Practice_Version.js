function LoadFiles(files, fn) {
    "use strict";
    var toString = Object.prototype.toString;
    var hasRun = false;
    if (toString.call(files) !== "[object Array]") { files = [files];}
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
document.getElementsByTagName('head').item(0).appendChild(TechieJs);

}, 500);
});
}
var stack = [
"Techie.js","../Commit/jQuery.js","Text.js","flyingText.js",
"Temp.js"
];
LoadFiles(stack, function Temp(m){
// Techie Methods and functions here

pt.ready = function(P, S, Body, Head, T, W){
    var isHTML = pt.isHTML, stringify =     Techie.stringify;
var isCollection = pt.isCollection;
var isList = pt.isList; var isNode = pt.isNode;
	T.extend({
        // Overload Techie here.
Techno: "Techie Group"

});
// Techie methods and functions here
window.Techno = pt.Techno;

//pt("li").addClass("Michael").addClass("Iyke").Attr("id", "vals of vials");
//var mike = pt(".Michael");
};
});
