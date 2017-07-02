var divs = document.getElementsByTagName("div"); 
//divs now contain each and every div element on the page 
var selectionDiv = document.getElementById("MySecondDiv");
for(var i = 0; i < divs.length;i++) {
 if(divs[i] == selectionDiv) { 
 	var previous = divs[i - 1]; 
 	var next = divs[i + 1]; 
 } 
}