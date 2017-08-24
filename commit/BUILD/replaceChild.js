// Create a new text node called "Water"
var textnode = document.createTextNode("Water");

// Get the first child node of an <ul> element
var item = document.getElementById("myList").childNodes[0];

// Replace the first child node of <ul> with the newly created text node
item.replaceChild(textnode, item.childNodes[0]);

// Note: This example replaces only the Text node "Coffee" with a Text node "Water" 

Replace a <li> element in a list with a new <li> element:
// Create a new <li> element
var elmnt = document.createElement("li");

// Create a new text node called "Water"
var textnode = document.createTextNode("Water");

// Append the text node to <li>
elmnt.appendChild(textnode);

// Get the <ul> element with id="myList"
var item = document.getElementById("myList");

// Replace the first child node (<li> with index 0) in <ul> with the newly created <li> element
item.replaceChild(elmnt, item.childNodes[0]);

// Note: This example replaces the entire <li> element 