
// Instead of alert, UserAgent on the screen corner
//All custom code will be here.
//These custom codes will be  called and used natively in the scripts pages.
//These codes are custom because they are made up of different fragments of self-made re-usable chunks of code
//The code is for the purpose of a self-made Library profitable for personal use.
//Therefore, there should be an expectation for upgrades and time-stamped changes that aims to match the liquxity of the web.
//EVENT UTILITY 


/*
key presses
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
*/


var EventUtil = {
//Instead of an alert, full date at the page's end
today : (function(){
"use strict";
 var getNow = function(){
var DateToday = new Date();
 	return DateToday;//.toUTCString();
 }();
var dateDiv = document.createElement("h3");
var dateDivPos = document.body.appendChild(dateDiv);
dateDiv.innerHTML = getNow;
dateDiv.style.cssText = "background: #000000; color: #ebebeb; text-align:center;font-style: Impact;font-weight:bold;font-size:100%;border-radius:4%;width:20%;position:absolute;right:0;top:0";
//call it in your document script thus:
//EventUtil.today();
//works with both inline and external scripts same way.
}),

clone : (function(object){
	if (object === null || typeof object !== "object" || "isActiveClone" in object) {
		return object;
		if (object instanceof Date) {
			var temp = new object.constructor();
		}
		else{
			var temp = object.constructor();
		}
		for (var key in object) {
			if (Object.prototype.hasOwnProperty.call(object, key)) {
				object["isActiveClone"] = null;
				temp[key] = clone(object[key]);
				delete object["isActiveClone"];
			}
		}
		return temp;
	}

}),

 prepend : (function(tag, elem){
		var x = SAPI.tag(tag)[0];
		//select a tag where to inserbefore
		x.insertBefore(elem, x.children[0]);
		//x.insertBefore(elem, x.firstChild) and it'd work same way
		//put elem @ the 0-th position of the selected tag
	}),

 appendTo : (function(x, y){// i.e newNode, refferenceNode
	y.parentNode.inserbefore(x, y.nextSibling);
		 }),

	selectScript: function(){
	var scripts = 10;
	var sources = arguments;
	for(var i = 0; i < scripts && i < sources.length; i++){
	var j = scripts[i];
	j = document.createElement("script");
	j.type = "text/javascript";
	j.defer = true;
	j.src = "../" + sources[i];
	var poSItion = document.head.appendChild(j);
			}
		},
	
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
},


//more code here

//Set Inner Text Really Quick
setInnerText: function(element, text){
if (typeof element.textContent == "string"){
element.textContent = text;
} else {
element.innerText = text;
}
},
//setInnerText(div, "Hello world!");


//Get Inner text really Quick
getInnerText: function(element){
return (typeof element.textContent == "string") ?
element.textContent : element.innerText;
}
//alert(getInnerText(div)); //"Hello world!"

};




/*SELECTORS API
A Cross Browser Selector
*/
 var SAPI = {

	//Query Selectors
qs: (function(x){
	if (document.querySelector) {
return document.querySelector(x);
	}
	else if(document.querySelectorAll){
		return document.querySelectorAll(x);
	}
}),

//Element By id
id: (function(x){
	return document.getElementById(x);
}),

//Elements By Tagname
tag: (function(a){
	return document.getElementsByTagName(a);
}),
//OTHERS {getElementsByClass, etc	}
names : (function(x){
	return document.getElementsByName(x);
}),
class : (function(x){
	return document.getElementsByClass(x);
})

//END   END   END   END   END   END   END   END   END   END   END   END


};



