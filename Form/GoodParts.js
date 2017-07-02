// JavaScript Document
Techie.ready(
function(){
alert = a = [].a;
var walk_the_DOM = function walk(node, func) {     
func(node);     
node = node.firstChild;     
while (node) {         
walk(node, func);         
node = node.nextSibling;
} };
	var nodes = [];
	walk_the_DOM(sapi.body, function(node){
		if(node.nodeType == 1){
		nodes.push(node.tagName);
		}
	});
	sapi.Log(nodes)
var fade = function (node) {
var level = 1;    
 var step = function () {
 var hex = level.toString(16);
node.style.backgroundColor = '#FFFF' + hex + hex;         if (level < 15) {
level += 1;  
 setTimeout(step, 100);  
}};     
setTimeout(step, 100); };
 fade(document.body);
 

})