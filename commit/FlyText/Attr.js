
function css ( element, style, options ) {
if (arguments.length == 3) {
//support css(div, "color", "green")
if(!isHTML(element) || typeof style !== "string" || typeof(options) !== "string") {    return;  }
element.style[style] = options;
ret = this;
}
return ret;
}



function css ( element, style ) {
    var temp1, temp2, temp3, ret;
if (arguments.length == 2) {
if (isHTML(this)) {
    if (typeof element === "string" && typeof style === "string") {
        this.style[element] = style; ret = this;
    }
     else if (typeof style === "string" && typeof options === "string") {
    temp1 = this; temp2 = element; temp3 = style;
    this.style[element] = style; ret = this;//div.css("color", "cyan");
}}

if (isHTML(element) && !ret){ 
        temp1 = element; temp2 = style;
        // css(div, []), css(div, {}), css(div, "ab:c;cd:y")
if (typeof style === "string"){element.style.cssText = style;}
else if (toString.call(style) == "[object Array]") {
    if (style.length != 1) {
       forEach (function(index, style) {
element.style.cssText += style;

    }, style); 
   }else{ element.style.cssText = style[0];}
    
} else if (toString.call(style) == "[object Object]"){
    forEach(function(prop, style){
        element.style[prop] = style;
    }, style);
}
ret = this;
    }


} return ret;
}


function css ( element ) {
if (arguments.length == 1) {
var temp1, temp2, temp3, ret;
var cssTextblob = /(\w+[-]{0,1}\w+\s*:\s*\w+[-]{0,1}\w+\s*[;]{0,1})+/g;
var propReg = /^(\s*\w+[-]{0,1}\w+\s*)$/g;

temp1 = isHTML(element) ? element : isHTML(this) ? this : temp1;
if (!temp1) { throw new Error("Techie.css -- no element provided. ");}
temp2 = temp1 == this ? element : temp2;


if(!temp2){//gets
ret = computedStyle(temp1);
}else{//sets
    if (typeof temp2 === "string") {
        if (temp2.match(propReg)) {
ret =   computedStyle(temp1) ?  computedStyle(temp1)[temp2] : null;
        } else if (temp2.match(cssTextblob)) {temp1.style.cssText = temp2;}
    }
    else if (toString.call(temp2) == "[object Array]") {
        if (temp2.length < 2) {temp1.style.cssText = temp2[0];}
    else{
forEach(function(index, style){
temp1.style.cssText += style;
}, temp2);
    }} else if(toString.call(temp2) == "[object Object]"){
forEach(function(index, style){
temp1.style[index] = style;
}, temp2);
    }
ret = ret || this;
}
}return ret;
}
 function  style ( element, style, options )    {
var temp1, temp2, temp3, ret, string, object, array, elements,
styleError = "Techie.css:- the style specified is invalid. It should be a plain object, array or string",
elementError = "Techie.css:- the element specified is invalid. It should be a HTMLObject or a collection of elements",
cssTextblob =  /(\w+[-]{0,1}\w+\s*:\s*\w+[-]{0,1}\w+\s*[;]{0,1})+/g, propReg = /^(\s*\w+[-]{0,1}\w+\s*)$/g;
temp1 = isHTML(element) ? element : isHTML(this) ? this : temp1;
if (!temp1) { throw new Error("Techie.css -- no element provided. ");}
temp2 = temp1 == this ? element : style;
temp3 = temp2 == style ? options : style;
// if (typeof temp2 === "string" && temp2.match(propRag)) { ret = computedStyle(temp1) ? computedStyle(temp1)[temp2] : null;}
if(!arguments.length && tempt1){
 ret = computedStyle(temp1);
}
else if (arguments.length == 3) {
if(!isHTML(element) || typeof style !== "string" || typeof(options) !== "string") { 
throw new Error(styleError);
 } element = element;  string =   style +": "+ options;        //all parameters are the same and unchanged
}
else if (arguments.length == 2) {
if (isHTML(this)) {
    if (typeof element === "string" && typeof style === "string") {
        // options = style ; style = element;
         element = this;  string = element + ": " + style;
    } 
} if (isHTML(element)){
    element = element;
if (typeof style === "string") {
    if (style.match(propReg)) { ret = computedStyle(element);
    }     else if (style.match(cssTextblob)) {string = style;
    }
}   else if (toString.call(style) == "[object Array]") {
        if (style.length < 2) {
            string = style[0];
        }else {
            array = style;
        }
    }        else if (toString.call(style) == "[object Object]") { 
        object = style;
    }           else {throw new Error(styleError);}
}
if(!element)   {   throw new Error(elementError);}
}   else if (arguments.length == 1) {
element = isHTML(element) ? element : isHTML(this) ? this : element;
if (!element) { throw new Error("Techie.css -- no element provided. ");}
temp2 = temp1 == this ? element : temp2;
if (!temp2) { ret = computedStyle(tempt1);
}
    else {
        if  (typeof temp2 === "string")  {
            if (temp2.match(propReg)) {
                ret =   computedStyle(temp1) ?  computedStyle(temp1)[temp2] : null;
            }   else if (temp2.match(cssTextblob)) {
                array = temp2; element = temp1;
            } else{
                throw new Error(styleError);
            }
        } else if (toString.call(temp2) == "[object Array]")    {
            if (temp2.length < 2) {
                string = temp2[0];
            } else{
                array = temp2;
            }
        } else if (toString.call(temp2) == "[object Object]") {
            object = temp2;
        } else {
            throw new Error(styleError);
        }
    }
}
if (string) {
element.style.cssText = string; ret = this;
}else if (array) { 
    forEach (function ( index, style ){
        element.style.cssText += style; ret = this;
    }, array, this);
    }
    else if (object) {
        forEach (function ( prop, style ){
            element.style[prop] = style; ret = this;
        }, object, this);
    }
return ret;
 }



function sib(node, fn){if (node == null) {return;}
if (node.nodeType == 2) {fn(node);} sib(node.nextSibling, fn);
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