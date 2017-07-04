//All custom code will be here.
//These custom codes will called and use natively in the scripts pages.
//These codes are custom because they are made up of different fragments of self-made re-usable chunks of code
//The code is for the purpose of a self-made Library profitable for personal use.
//Therefore there should be an expectation for upgrades and time-stamped changes that aims to match the liquidity of the web.
//EVENT UTILITY 
alert("Load Starts!");

var EventUtil = {
	
	addHandler: function(element, type, handler){
if (element.addEventListener){
element.addEventListener(type, handler, false);
} else if (element.attachEvent){
element.attachEvent("on" + type, handler);
} else {
element["on" + type] = handler;
}
},

removeHandler: function(element, type, handler){
if (element.removeEventListener){
element.removeEventListener(type, handler, false);
} else if (element.detachEvent){
element.detachEvent("on" + type, handler);
} else {
element["on" + type] = null;
}
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



stopPropagation: function(event){
if (event.stopPropagation){
event.stopPropagation();
} else {
event.cancelBubble = true;
}
},
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
}


//more code here
};



//SELECTORS API
//A Cross Browser Selector
var Qselectors = {
Qselect: function(id){
	if (document.querySelector) {
return document.querySelector(id);
	}
	else if(document.querySelectorAll){
		return document.querySelectorAll(id);
	}
},

Qid: function(id){
	return document.getElementById(id);
},

Qclass: function(a){
	return document.getElementsByTagName(a);
}

};
alert("Loaded right!");
