/*
<form method="post" action="signup.php" novalidate>
<!-- form elements here -->
</form>
This value can
*/

document.forms[0].noValidate = true; //turn off validation


var EventUtil = {
//more code here
getClipboardText: function(event){
var clipboardData = (event.clipboardData || window.clipboardData);
return clipboardData.getData("text");
},
//more code here
setClipboardText: function(event, value){
if (event.clipboardData){
return event.clipboardData.setData("text/plain", value);
} else if (window.clipboardData){
return window.clipboardData.setData("text", value);
}
},
//more code here
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
//more code here
//used to get mouse click right, left, midle wheel
getButton: function(event){
if (document.implementation.hasFeature("MouseEvents", "2.0")){
return event.button;
} else {
switch(event.button){
case 0:
case 1:
case 3:
case 5:
case 7:
return 0;
case 2:
case 6:
return 2;
case 4:
return 1;
}
}
},
//more code here
};




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
/* falls through */
default:
//don’t include form fields without names
if (field.name.length){
parts.push(encodeURIComponent(field.name) + "=" +
encodeURIComponent(field.value));
}
}
}
return parts.join("&");
}
	




function selectText(textbox, startIndex, stopIndex){
if(textbox.setSelectionRange{
textbox.setSelectionRange(startIndex, stopIndex);
} else if (textbox.createTextRange){
var range = textbox.createTextRange();
range.collapse(true);
range.moveStart("character", startIndex);
range.moveEnd("character", stopIndex - startIndex);
range.select();
}
textbox.focus();
}

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


(function(){
function tabForward(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
if (target.value.length == target.maxLength){
var form = target.form;
for (var i=0, len=form.elements.length; i < len; i++) {
if (form.elements[i] == target) {
if (form.elements[i+1]){
form.elements[i+1].focus();
}
return;
}
}
}
}
var textbox1 = document.getElementById("txtTel1");
var textbox2 = document.getElementById("txtTel2");
var textbox3 = document.getElementById("txtTel3");
EventUtil.addHandler(textbox1, "keyup", tabForward);
EventUtil.addHandler(textbox2, "keyup", tabForward);
EventUtil.addHandler(textbox3, "keyup", tabForward);
})();

function empty(e){
var isRequired = e.required;
var isRequiredSupported = "required" in document.createElement("input");
if(isRequired && isRequiredSupported){
	return true;
}
//the  rest of the code
}