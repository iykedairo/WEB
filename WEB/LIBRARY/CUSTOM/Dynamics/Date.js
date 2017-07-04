(function(){
	"use strict";

 var getNow = function(){
var DateToday = new Date();
 	return DateToday;
 }();
//alert(getNow);
//DATE DIV
var dateDiv = document.createElement("h5");
var dateDivPos = document.body.appendChild(dateDiv);
dateDiv.innerHTML = getNow;



//CREATE CSS FILE
var styleText = document.createElement("link");

var DateStylePos = document.body.appendChild(styleText);
styleText.href = "DateStyle.css";
styleText.type = "text/css";
styleText.rel = "stylesheet";
})();
 
 //CREATE SCRIPT FILE
var scripts = 10;
var sources = ["Build.js", "crossBrEvents.js", "custom.js", "Test.js", "Use_Event.js"];

for(var i = 0; i < scripts && i < sources.length; i++){
	var j = scripts[i];
	j = document.createElement("script");
	j.type = "text/javascript";
	j.defer = true;
	j.src = "../" + sources[i];
	
	//j.src = "checkS.js";
	//..
	var poSItion = document.body.appendChild(j);
}


/*

function selectScript(x, y, z){
	var scripts = 10;
	var souces = [x, y, z];
	for(var i = 0; i < scripts && i < sources.length; i++){
	var j = scripts[i];
	j = document.createElement("script");
	j.type = "text/javascript";
	j.defer = true;
	j.src = sources[i];
	return scripts;
	}
	}
}
 
later.getFullYear() // => 2010
later.getMonth() // => 0: zero-based months
later.getDate() // => 1: one-based days
later.getDay() // => 5: day of week. 0 is Sunday 5 is Friday.
later.getHours() // => 17: 5pm, local time
later.getUTCHours()
*/