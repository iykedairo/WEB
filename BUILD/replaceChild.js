// Create a new text node called "Water"
var textnode = document.createTextNode("Water");

// Get the first child node of an <ul> element
var item = document.getElementById("myList").childNodes[0];

// Replace the first child node of <ul> with the newly created text node
item.replaceChild(textnode, item.childNodes[0]);

// Note: This example replaces only the Text node "Coffee" with a Text node "Water" 