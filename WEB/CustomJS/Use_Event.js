
var image = document.getElementById("myImage");
EventUtil.addHandler(image, "load", function(event){
event = EventUtil.getEvent(event);
alert(EventUtil.getTarget(event).src);
});

EventUtil.addHandler(window, "load", function(){
var image = document.createElement("img");
EventUtil.addHandler(image, "load", function(event){
event = EventUtil.getEvent(event);
alert(EventUtil.getTarget(event).src);
});
document.body.appendChild(image);
image.src = "smile.gif";
});

//Please try it out. just put an image in the dir, link the the file to page and link the image.

//DOM LEVEL 0 way but same thing
EventUtil.addHandler(window, "load", function(){
var image = new Image();
EventUtil.addHandler(image, "load", function(event){
alert("Image loaded!");
});
image.src = "smile.gif";
});


EventUtil.addHandler(window, "load", function(){
var script = document.createElement("script");
script.type = "text/javascript";
EventUtil.addHandler(script, "load", function(event){
alert("Loaded");
});
script.src = "example.js";
document.body.appendChild(script);
});
//load event on script is not suported in opera and explorer < 8. they support it on link to use it to determin if the css
//has been fully loaded but on script, no. so you might want to use another event like click inplace of the script.
//
EventUtil.addHandler(window, "load", function(){
var link = document.createElement("link");
link.type = "text/css";
link.rel= "stylesheet";
EventUtil.addHandler(link, "load", function(event){
alert("css loaded");
});
link.href = "example.css";
document.getElementsByTagName("head")[0].appendChild(link);
});

///////////////
EventUtil.addHandler(window, "scroll", function(event){
if (document.compatMode == "CSS1Compat"){
alert(document.documentElement.scrollTop);
} else {
alert(document.body.scrollTop);
}
});

var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
event = EventUtil.getEvent(event);
alert("Screen coordinates: " + event.screenX + "," + event.screenY);
});


/////////////////
//key presses
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
event = EventUtil.getEvent(event);
var keys = new Array();
if (event.shiftKey){
keys.push("shift");
}
if (event.ctrlKey){
keys.push("ctrl");
}
if (event.altKey){
keys.push("alt");
}
if (event.metaKey){
keys.push("meta");
}
alert("Keys: " + keys.join(","));
});


var EventUtil = {
//more code here
getRelatedTarget: function(event){
if (event.relatedTarget){
return event.relatedTarget;
} else if (event.toElement){
return event.toElement;
} else if (event.fromElement){
return event.fromElement;
} else {
return null;
}
},
//more code here
};
