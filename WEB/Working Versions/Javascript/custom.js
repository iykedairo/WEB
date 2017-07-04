
// Instead of alert, UserAgent on the screen corner
//All custom code will be here.
//These custom codes will be  called and used natively in the scripts pages.
//These codes are custom because they are made up of different fragments of self-made re-usable chunks of code
//The code is for the purpose of a self-made Library profitable for personal use.
//Therefore, there should be an expectation for upgrades and time-stamped changes that aims to match the liquxity of the web.
//EVENT UTILITY 
var EventUtil = {
	CreateTable : function(){
		
			var fragment = document.createDocumentFragment();
			var temp = document.createElement("hr");
temp.innerHTML = 
"<table id=table width=50% border=1px><tr width=100%><td width=50%><td> <td width=50%></td></tr></table>";
var table = temp.firstChild;

				document.body.insertBefore(table, document.body.children[0]);
				console.log( temp + "craeted with id: ");
		},

	create : function(a, b){
	var elem = document.createElement(a);
	b.insertBefore(elem, b[0]);
	},
//Instead of an alert, full date at the page's end
today : (function(){
"use strict";
 var getNow = function(){
var DateToday = new Date();
 	return DateToday;
 }();
var dateSpan = document.createElement("small");
dateSpan.id = "dateid";
dateSpan.class = "dateclass";
var footer = document.getElementById("footer");
footer.insertBefore(dateSpan, footer[1]);
dateSpan.innerHTML = getNow;
dateSpan.style.cssText = "color:#5d66cc; font-style:oblique; text-align:center;font-style: Impact;";
//call it in your document script thus:
//EventUtil.today();
//works with both inline and external scripts same way.

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



