/*
HTML
create a heading first, a single line heading

create html that has two input fields and a submit field

create a div where all details and values will go.

create a div below where Total : value should be contained.
create a paragraph to contain TOTAL: and a span to contain DYNAMIC VALUES

JavaScript
Grab the item detail and use it to create a paragraph 
Grab the value detail and use it to create a span against the paragraph
Nice Job!
*/
var inputContainer = Main.Selector("Input Container").firstChild;
var p = document.getElementsByTagName("p");
var pP = 10;
	
var p4 = document.getElementsByTagName("p")[3];
for (var i = pP.length - 1; i >= 0; i--) {
	p[0].innerHTML = "This is p[0]";

pP[i] = p[0].innerHTML;
p[1].appendChild(pP[i]);
	
}
var button1 = Main.Selector("submit");

button1.onclick = function(){
	var createP = document.createElement("p");

	var amountValue = Main.Selector("amountValue").value;
	var itemName = Main.Selector("itemName").value;
	createP.innerHTML = itemName + ":" + "  " + amountValue;
 p.appendChild(createP);

 //var Rel = this.reload(true);
}

var d = document.div;
for (var i = d.length - 1; i >= 0; i--) {
	alert(d[i]);
}


