
//lert("loaded!!!!!");// Instead of alert, UserAgent on the screen corner
//All custom code will be here.
//These custom codes will be  called and used natively in the scripts pages.
//These codes are custom because they are made up of different fragments of self-made re-usable chunks of code
//The code is for the purpose of a self-made Library profitable for personal use.
//Therefore, there should be an expectation for upgrades and time-stamped changes that aims to match the liquidity of the web.
//EVENT UTILITY 
var EventUtil = {
	
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
},
//alert(getInnerText(div)); //"Hello world!"


/*SELECTORS API
A Cross Browser Selector
*/
SAPI: {

	//Query Selectors
qS: function(id){
	if (document.querySelector) {
return document.querySelector(id);
	}
	else if(document.querySelectorAll){
		return document.querySelectorAll(id);
	}
},

//Element By id
idS: function(id){
	return document.getElementById(id);
},

//Elements By Tagname
tagS: function(a){
	return document.getElementsByTagName(a);
}
//OTHERS {getElementsByClass, etc	}
},

//END   END   END   END   END   END   END   END   END   END   END   END
alert : (function(){return alert("Loaded right!!!!!");})//CUSTOM ALERT EventUtil.alert(); as below
//Instead of an alert, full date at the page's end

};

//EventUtil.alert();


