    (function(){
alert("Ready to go!");
var script1 = document.createElement("script");
script1.type = "text/javascript";
script1.src = "CustomJS/custom.js";
document.getElementsByTagName("head")[1] = script1;
if(script1){
	EventUtil.alert();
	}


var script2 = document.createElement("script");
script2.type = "text/javascript";
script2.src = "tryCatch.js";
document.head.appendChild(script2);
script2.onload = function(){
alert(script2.src);
};
})();
	alert("Defered right!!");
var divH = getElement(".myDiv");
EventUtil.addHandler(divH, "mouseout", function(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
var relatedTarget = EventUtil.getRelatedTarget(event);
alert("Moused out of " + target.tagName + " to " + relatedTarget.tagName);
})


EventUtil.addHandler(window, "load", function(){
var link = document.createElement("link");
link.type = "text/css";
link.rel= "stylesheet";
EventUtil.addHandler(link, "load", function(event){
alert("css loaded");
});
link.href = "style.css";
document.getElementsByTagName("head")[0].appendChild(link);
});