var EventUtil = {
handler: function(){
	alert("Hey YegheY.....");
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
}
};
var demo = document.querySelector("#demo");

EventUtil.addHandler(document, "click", EventUtil.handler);
/*var select = function(id){
	if (document.querySelector) {
return document.querySelector(id);
	}
	else if(document.querySelectorAll){
		return document.querySelectorAll(id);
	}
};
var numz = select("#numz").cssText()
numz;
// var total = 0;
// function doAdd(iNum){
// this.iNum = prompt("Write an amount");
// total += iNum;
// return total;
// }

function callAnotherFunc(fnFunction, vArgument) {
	fnFunction(vArgument);
}
var doAdd = new Function(“iNum", “alert(iNum + 10)");
callAnotherFunc(doAdd, 10); //outputs “20"
*/