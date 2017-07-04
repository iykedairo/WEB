var EventUtil = {
addHandler: function(element, type, handler){
//code removed for printing
},
getEvent: function(event){
return event ? event : window.event;
},
getTarget: function(event){
return event.target || event.srcElement;
},
preventDefault: function(event){
if (event.preventDefault){
event.preventDefault();
} else {
event.returnValue = false;
}
},
removeHandler: function(element, type, handler){
//code removed for printing
},
stopPropagation: function(event){
if (event.stopPropagation){
event.stopPropagation();
} else {
event.cancelBubble = true;
}
}
}

var EventUtil = {
addHandler: function(element, type, handler){
if (element.addEventListener){
element.addEventListener(type, handler, false);
} else if (element.attachEvent){
element.attachEvent(“on” + type, handler);
} else {
element[“on” + type] = handler;
}
},
removeHandler: function(element, type, handler){
if (element.removeEventListener){
element.removeEventListener(type, handler, false);
} else if (element.detachEvent){
element.detachEvent(“on” + type, handler);
} else {
element[“on” + type] = null;
}
}
}


/////////////////////////
EventUtil.addHandler(window, “load”, function(event){
alert(“Loaded!”);
});
//////////////
<img src=”smile.gif” onload=”alert(‘Image loaded.’)”>

<body onload=”alert(‘Loaded!’)”>
/////////////
var image = document.getElementById(“myImage”);
EventUtil.addHandler(image, “load”, function(event){
event = EventUtil.getEvent(event);
alert(EventUtil.getTarget(event).src);
});
/////
EventUtil.addHandler(window, “load”, function(){
var image = document.createElement(“img”);
EventUtil.addHandler(image, “load”, function(event){
event = EventUtil.getEvent(event);
alert(EventUtil.getTarget(event).src);
});
document.body.appendChild(image);
image.src = “smile.gif”;
});
///////////////
var script = document.createElement(“script”);
script.type = “text/javascript”;
EventUtil.addHandler(script, “load”, function(event){
alert(“Loaded”);
});
script.src = “example.js”;
document.body.appendChild(script);
});
////////////////
EventUtil.addHandler(window, “load”, function(){
var link = document.createElement(“link”);
link.type = “text/css”;
link.rel= “stylesheet”;
EventUtil.addHandler(link, “load”, function(event){
alert(“css loaded”);
});
link.href = “example.css”;
document.getElementsByTagName(“head”)[0].appendChild(link);
});
//////
EventUtil.addHandler(window, “unload”, function(event){
alert(“Unloaded!”);
});
////
EventUtil.addHandler(window, “resize”, function(event){
alert(“Resized”);
});