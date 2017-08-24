

function sib(node, fn){if (node == null) {return;}
if (node.nodeType == 1) {fn(node);} node = node.nextSibling;

sib(node, fn);
}

function nextSiblingOf(element){if (element == null) {return;}
	var node = element.nextSibling;
	if(node.nodeType == 1){return node;}
		else{
			node = node.nextSibling;
			nextSiblingOf(node);
		}
}

function contains(refNode, otherNode){
if (typeof refNode.contains === "function" &&
(!client.engine.webkit || client.engine.webkit >= 522)){
return refNode.contains(otherNode);
} else if (typeof refNode.compareDocumentPosition === "function"){
return !!(refNode.compareDocumentPosition(otherNode) & 16);
} else {
var node = otherNode.parentNode;
do {if (node === refNode){
return true;
} else {
node = node.parentNode;
}
} while (node != null);
return false;
}
}




function matchesSelector(element, selector){
if (element.matchesSelector){
return element.matchesSelector(selector);
} else if (element.msMatchesSelector){
return element.msMatchesSelector(selector);
} else if (element.mozMatchesSelector){
return element.mozMatchesSelector(selector);
Selectors API ❘ 359
360 ❘ CHAPTER 11 DOM EXTENSIONS
} else if (element.webkitMatchesSelector){
return element.webkitMatchesSelector(selector);
} else {
throw new Error(“Not supported.”);
}
}
if (matchesSelector(document.body, “body.page1”)){
//do something
}








var h = document.getElementsByTagName("H1")[0];
var typ = document.createAttribute("class");
typ.value = "democlass";
h.attributes.setNamedItem(typ);; 

/*The setNamedItem() method adds the specified node to the NamedNodeMap.

If the node already exists, it will be replaced, and the replaced 
node will be the return value, otherwise the return value will be null.*/

var x = document.getElementsByTagName("BUTTON")[0].attributes.length; 

var txt = "";
var x = document.getElementById("myBtn").attributes;

var i;
for (i = 0; i < x.length; i++) {
    txt += "Attribute name: " + x[i].name + "<br>";
} 

var x = 
document.getElementsByTagName("BUTTON")[0].attributes.item(0).nodeName;
document.getElementsByTagName("BUTTON")[0].attributes.item(1); 
  // The 2nd attribute
document.getElementsByTagName("BUTTON")[0].attributes[1];       
 // The 2nd attribute
var x = document.getElementsByTagName("BUTTON")[0].attributes.length;

attr.value == the txt
attr.parentNode == This is the HTML element you used to access the attribute
attr.ownerElement==This is the HTML element you used to access the attribute
attr.name == attr.nodeName
attr.isId == true if attr is id type
attr.isSpecified ==
nodemap.getNamedItem()
var diff = document.getAttributeNode()
attr.specified

















// Remove the type attribute from an input button:
var btn = document.getElementsByTagName("INPUT")[0];
btn.attributes.removeNamedItem("type"); 

Find out if an attribute has been specified or not:
var x = document.getElementById("demo").attributes[0].specified;
document.getElementById("myAnchor").removeAttribute("href"); 
Remove the classS attribute from an <h1> element:
document.getElementsByTagName("H1")[0].removeAttribute("class");
Before removing the attribute:
element.removeAttribute(attributename) 





The result of x will be:element.removeAttributeNode(attributenode)
var elmnt = document.getElementsByTagName("H1")[0];  
// Get the first <h1> element in the document
var attr = elmnt.getAttributeNode("class");          
// Get the class attribute node from <h1>
elmnt.removeAttributeNode(attr);                    
 // Remove the class attribute node from <h1> 
var anchor = document.getElementById("myAnchor");  
// Get the <a> element with id="myAnchor"
var att = document.createAttribute("href");       
 // Create a "href" attribute
att.value = "https://www.w3schools.com";            // Set the value of the href attribute
anchor.setAttributeNode(att);  

                    // Add the href attribute to <a> 
var h1 = document.getElementsByTagName("H1")[0];   // Get the first <h1> element in the document
var att = document.createAttribute("class");       // Create a "class" attribute
att.value = "democlass";                           // Set the value of the class attribute
h1.setAttributeNode(att); 


                         // Add the class attribute to <h1>
attribute.value //gets
attribute.value = false //sets
element.getAttributeNode(attributename)
var elmnt = document.getElementById("myAnchor");
var attr = elmnt.getAttributeNode("target").value; 




// Get the name of an attribute:
var x = document.getElementsByTagName("IMG")[0];
x.getAttributeNode("src").value = "pic_bulbon.gif"; 
var x = document.getElementsByTagName("BUTTON")[0].attributes[0].name; 
Property / Method   Description
attr.isId   Returns true if the attribute is of type Id, otherwise it returns false
attr.name   Returns the name of an attribute
attr.value  Sets or returns the value of the attribute
attr.specified  Returns true if the attribute has been specified, otherwise it returns false
     
nodemap.getNamedItem()  
Returns a specified attribute node from a NamedNodeMap

nodemap.item()  
Returns the attribute node at a specified index in a NamedNodeMap

nodemap.length  Returns the number of attribute nodes in a NamedNodeMap
nodemap.removeNamedItem()   Removes a specified attribute node
nodemap.setNamedItem()  Sets the specified attribute node (by name)