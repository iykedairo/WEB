// JavaScript Document
Techie.ready(
function(){
alert = a = [].a;

	var nodes = [];
	pt.walk_the_DOM(sapi.body, ;function(node){
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
/*

return{classes: classes,
	ids: ids,tags: tags,
	nodes: nodes, all: nodes};

if(node.nodeType == 1){
tags.push(node.tagName);
classes.push(node.className);
ids.push(node.id);
	}
	
	 /^[a-zA-Z0-9\_]{2,20}/
*/