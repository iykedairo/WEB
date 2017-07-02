
/*
<form method="post" action="signup.php" novalidate>
<!-- form elements here -->
</form>
document.forms[0].noValidate = true; turn off validation

*/
pt.ready = function(){var
EventUtil = {
/**
*Techie API updated Event
* Utility Object.
* version: 1.00;
**/
  
 EventTarget: EventTarget,
target: new EventTarget(),
getClipboardText: function(event){
var clipboardData = (event.clipboardData || window.clipboardData);
return clipboardData.getData("text");
},

setClipboardText: function(event, value){
if (event.clipboardData){
return event.clipboardData.setData("text/plain", value);
} else if (window.clipboardData){
return window.clipboardData.setData("text", value);
}
},

getWheelDelta: function(event){
if (event.wheelDelta){
return (client.engine.opera && client.engine.opera < 9.5 ?
-event.wheelDelta : event.wheelDelta);
} else {
return -event.detail * 40;
}
},
getCharCode: function(event){
if (typeof event.charCode == "number"){
return event.charCode;
} else {
return event.keyCode;
}
},
//used to get mouse click right, left, midle wheel
getButton: function(event){
if (document.implementation.hasFeature("MouseEvents", "2.0")){
return event.button;
} else {
switch(event.button){
case 0: case 1: case 3:
case 5: case 7: return 0;
case 2: case 6: return 2;
case 4: return 1; }}
},
on: function(ev,fn,el){
el = el || this;
if(!isNode(el)){
throw new TypeError();
}forEach(function(){
Events.addHandler(this,ev,fn);},el); return this;
 },
	
addHandler: function(element, type, handler){
if(element.addEventListener){
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
tabForward: function(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
if (target.value.length == target.maxLength){
var form = target.form;
for (var i=0, len=form.elements.length; i < len; i++) {
if (form.elements[i] == target) {
if (form.elements[i+1]){
form.elements[i+1].focus();
}
return;}}}
},
empty: function(e){
var isRequired = e.required;
var isRequiredSupported = "required" in document.createElement("input");
if(isRequired && isRequiredSupported){
	return true;}
},


function getSelectedOptions(selectbox){
var result = new Array();
var option = null;
for (var i=0, len=selectbox.options.length; i < len; i++){
option = selectbox.options[i];
if (option.selected){
result.push(option);
}
}
return result;
}

function serialize(form){var
parts = [],field = null,i,
len,j,optLen,option,optValue;
for (i=0, len=form.elements.length; i < len; i++){
field = form.elements[i];
switch(field.type){
case "select-one":
case "select-multiple":
if (field.name.length){
 for (j=0, optLen = field.options.length; j < optLen; j++){
option = field.options[j];
if (option.selected){
optValue = "";
if (option.hasAttribute){
optValue = (option.hasAttribute("value") ?
option.value : option.text);
} else {
optValue = (option.attributes["value"].specified ?
option.value : option.text);
}
parts.push(encodeURIComponent(field.name) + "=" +
encodeURIComponent(optValue));
}
}
}
break;
case undefined: //fieldset
case "file": //file input
case "submit": //submit button
case "reset": //reset button
case "button": //custom button
break;
case "radio": //radio button
case "checkbox": //checkbox
if (!field.checked){
break;
}
// falls through 
default:
//don’t include form fields without names
if (field.name.length){
parts.push(encodeURIComponent(field.name) + "=" +
encodeURIComponent(field.value));
}}}return parts.join("&");
},
	




function selectText(textbox, startIndex, stopIndex){
if(textbox.setSelectionRange){
textbox.setSelectionRange(startIndex, stopIndex);
} else if (textbox.createTextRange){
var range = textbox.createTextRange();
range.collapse(true);
range.moveStart("character", startIndex);
range.moveEnd("character", stopIndex - startIndex);
range.select();
}
textbox.focus();
},

};


//EventTarget object
function EventTarget(){}
EventTarget.prototype  =  {
constructor: EventTarget,
addListener:  function(type, listener){
if (!this.hasOwnProperty("_listeners")) {this._listeners  =  [];} if (typeof this._listeners[type] == "undefined"){ this._listeners[type]  =  [];         } this._listeners[type].push(listener);},
 fire: function(event){
 if(!event.target){             event.target  =  this;         } if (!event.type){//falsy
throw new Error("Event object missing 'type' property.");         } if(this._listeners && this._listeners[event.type] instanceof Array){ var listeners = this._listeners[event.type]; 
var i,len = listeners.length;
for(i = 0; i  <  len; i++){                 listeners[i].call(this,event);}}},

removeListener: function(type, listener){ if (this._listeners && this._listeners[type] instanceof Array){ 
//corrected listeners 's'
var listener = this._listeners[type];
var i,len = listeners.length;
for(i = 0; i < len; i++){
if(listeners[i]=== listener){                     listeners.splice(i, 1); break; }}}}


};

}











/* Usage guide for Event

var  target  =  new  EventTarget();
target.addListener("message",  function(event) {     console.log("Message is "  +  event.data); });
 target.fire({type:"message",
 data:  "Hello world!" });
 
var  person  =  new  EventTarget();
 person.name  =  "Nicholas"; person.sayName  = function(){     console.log(this.name); this.fire({type: "namesaid",
name:  name }); };

function Person(name) { this.name  =  name; }
 Person.prototype  =  Object.create(EventTarget.prototype);
  Person.prototype.constructor  =  Person;
Person.prototype.sayName =  function(){     console.log(this.name);
 this.fire({ type:  "namesaid", name:  name });
}; 
var  person  =  new  Person("Nicholas");
 console.log(person  instanceof  Person);      // true console.log(person  instanceof  EventTarget);  // true
EventUtil.addHandler(textbox, "keypress", function(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
//Retrieve charcode of key
var charCode = EventUtil.getCharCode(event);
//convert code to string and test at the same time
if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 &&
!event.ctrlKey){
EventUtil.preventDefault(event);
}
});


EventUtil.addHandler(textbox, "paste", function(event){
event = EventUtil.getEvent(event);
var text = EventUtil.getClipboardText(event);
if (!(/^\d*$/).test(text)){
EventUtil.preventDefault(event);
}
});
var textbox1 = document.getElementById("txtTel1");
var textbox2 = document.getElementById("txtTel2");
var textbox3 = document.getElementById("txtTel3");
EventUtil.addHandler(textbox1, "keyup", tabForward);
EventUtil.addHandler(textbox2, "keyup", tabForward);
EventUtil.addHandler(textbox3, "keyup", tabForward);
})


*/