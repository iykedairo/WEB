
btn.attributes.removeNamedItem("type"); //Remove specified attribute
document.getElementsByTagName("H1")[0].removeAttribute("class");
elmnt.removeAttributeNode(attr);
var att = document.createAttribute("href");//Create attr href     
att.value = "https://www.w3schools.com";// Setting attribute
anchor.setAttributeNode(att); 
var attr = elmnt.getAttributeNode("target").value; //getting
attribute.value //gets
var x = document.getElementsByTagName("BUTTON")[0].attributes[0].name;
x.getAttributeNode("src").value = "pic_bulbon.gif"; 
btn.attributes.removeNamedItem("type"); //Remove specified attribute



function attrHooks(element, attr, value){
var isAttrSet = !element.getAttributeNode(attr) ? false : true;
if (!isAttrSet) {
var newAttr = document.createAttribute(attr);
newAttr.value = value;	
element.attributes.setNamedItem(newAttr);return;
}element.getAttributeNode(attr).value = value;}

var h = document.getElementsByTagName("H1")[0];
var typ = document.createAttribute("class");
typ.value = "democlass";
h.attributes.setNamedItem(typ);; 
typ.value = "democlass";
h.attributes.setNamedItem(typ);; 
/*
you can get the whole attribute text and delete the src. The create
a new one with the specified one missing.
*/
