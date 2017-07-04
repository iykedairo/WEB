// Instead of alert, UserAgent on the screen corner
//All custom code will be here.
//These custom codes will be  called and used natively in the scripts pages.
//These codes are custom because they are made up of different fragments of self-made re-usable chunks of code
//The code is for the purpose of a self-made Library profitable for personal use.
//Therefore, there should be an expectation for upgrades and time-stamped changes that aims to match the liquxity of the web.
//EVENT UTILITY 

/* 
mozilla
parser=new DOMParser();
htmlDoc=parser.parseFromString(txt, "text/html");
//Do whatever you want with htmlDoc.getElementsByTagName('a');

Chrome
parser=new DOMParser();
htmlDoc=parser.parseFromString(txt, "text/xml");
//Do whatever you want with htmlDoc.getElementsByTagName('a');


The fastest way to parse HTML in Chrome and Firefox is Range#createContextualFragment:

var range = document.createRange();
range.selectNode(document.body); // required in Safari
var fragment = range.createContextualFragment('<h1>html...</h1>');
var firstNode = fragment.firstChild;




The following function parseHTML will return either :

    a Document when your file starts with a doctype.

    a DocumentFragment when your file doesn't start with a doctype.

The code :

function parseHTML(markup) {
    if (markup.toLowerCase().trim().indexOf('<!doctype') === 0) {
        var doc = document.implementation.createHTMLDocument("");
        doc.documentElement.innerHTML = markup;
        return doc;
    } else if ('content' in document.createElement('template')) {
       // Template tag exists!
       var el = document.createElement('template');
       el.innerHTML = markup;
       return el.content;
    } else {
       // Template tag doesn't exist!
       var docfrag = document.createDocumentFragment();
       var el = document.createElement('body');
       el.innerHTML = markup;
       for (i = 0; 0 < el.childNodes.length;) {
           docfrag.appendChild(el.childNodes[i]);
       }
       return docfrag;
    }
}

How to use :

var links = parseHTML('<!doctype html><html><head></head><body><a>Link 1</a><a>Link 2</a></body></html>').getElementsByTagName('a');

function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.cloneNode(true);
}

var documentFragment = parseHTML('<td>Test</td>');


jQuery's method

/** 
 * jQuery 2.1.3's parseHTML (without scripts options).
 * Unlike jQuery, this returns a DocumentFragment, which is more convenient to insert into DOM.
 * MIT license.
 * 
 * If you only support Edge 13+ then try this:
    function parseHTML(html, context) {
        var t = (context || document).createElement('template');
            t.innerHTML = html;
        return t.content.cloneNode(true);
    }
 
var parseHTML = (function() {
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        rtagName = /<([\w:]+)/,
        rhtml = /<|&#?\w+;/,
        // We have to close these tags to support XHTML (#13200)
        wrapMap = {
            // Support: IE9
            option: [1, "<select multiple='multiple'>", "</select>"],

            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

            _default: [0, "", ""]
        };
        
    /**
     * @param {String} elem A string containing html
     * @param {Document} context
     
    return function parseHTML(elem, context) {
        context = context || document;

        var tmp, tag, wrap, j,
            fragment = context.createDocumentFragment();

        if (!rhtml.test(elem)) {
            fragment.appendChild(context.createTextNode(elem));

            // Convert html into DOM nodes
        } else {
            tmp = fragment.appendChild(context.createElement("div"));

            // Deserialize a standard representation
            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

            // Descend through wrappers to the right content
            j = wrap[0];
            while (j--) {
                tmp = tmp.lastChild;
            }

            // Remove wrappers and append created nodes to fragment
            fragment.removeChild(fragment.firstChild);
            while (tmp.firstChild) {
                fragment.appendChild(tmp.firstChild);
            }
        }

        return fragment;
    };
}());




d.className += ' additionalClass'; //note the space

var element = document.getElementById("div1");
element.classList.add("otherclass");



Class

if (document.body.classList.contains('thatClass')) {
    // do some stuff
}

Other uses of classList:

document.body.classList.add('thisClass');
// $('body').addClass('thisClass');

document.body.classList.remove('thatClass');
// $('body').removeClass('thatClass');

document.body.classList.toggle('anotherClass');
// $('body').toggleClass('anotherClass');

Browser Support:

    Chrome 8.0
    Firefox 3.6
    IE 10
    Opera 11.50
    Safari 5.1

 */
;

alert();
Object.prototype.a = a;
 function a(a){
	if(a){
		alert(this+ " says "+a);
		}
		else{
			alert(this);
		}
		return this;
			};
a.a();

(function(window, undefined){
var
root = window, sapi = {},
document = window.document, sapi.sapi = document, 
html = sapi.sapi.documentElement, head = sapi.sapi.head,
url = sapi.sapi.URL, ;
BaseURI = sapi.sapi.baseURI, 
URI = sapi.sapi.documentURI,
e = html,
//e = typeof document.nodeType === 2;

SAPI = sapi.sapi,
auto = 1, enhanced = 0, 
HTML = html,
body = sapi.sapi.body || sapi.sapi.createElement("body"), Garbage = {},
Store = {}, array = [];

slice = array.slice, 
indexOf = array.indexOf,
sapi.sapi.create = sapi.sapi.createElement,
sapi.sapi.tagName = sapi.sapi.getElementsByTagName,
sapi.sapi.className = sapi.sapi.getElementsByClassName,
sapi.sapi.id = sapi.sapi.getElementById,
sapi.sapi.name = sapi.sapi.getElementsByName;

sapi.sapi.qs = function(x){
	x =
sapi.sapi.querySelector ?
 sapi.sapi.querySelector(x) :
 sapi.sapi.querySelectorAll(x);
return x;
	};
	
	function SaPi(){
		
	}
	
	mixi(SaPi, document);
	alert(SaPi.createElement);
function _pt(){
	
-}
function _sapi.sapi(){
	
}
_pt.prototype += _sap.prototype;
 _sapi.sapi.prototype = {
	
};


			
		function _PT(){
			
		}
	//	_pt.proto += sapi;
	//_pt.proto += {};
	_PT.prototype = {
		page : true,

isElement : true,
//e will be parsed first after which determining wether e isElement or no will be easy.
isAbsent : function(e){
	if(!e.length){
	if(e.parentNode === null || typeof e.parentNode === "object"){
		console.log(e + "is existing on the tree");
		return false;
	}
	else{
		return true
	}
	}
	else if(e.length){
		
		
	e = e[0];
	if(e.parentNode === null || typeof e.parentNode === "object"){
		console.log(e + "is existing on the tree");
		return false;
	}
	else{
		return true
	}
		
	} 
	return this;
		},
		isPresent : function(e){
if(typeof e === "object" && element.ownerDocument.body.contains(e) != undefined){
				return true;
			}

			return false;
		},
		isBool : function(arg){
			return (typeof arg === "boolean" && !!arg === true || !!arg === false) ? true : false;
		},
		isFunction : function(e){
			return (typeof element === "function") ? true : false;
		},
		isObject : function(element){
			return (typeof element === "object" && element !== null) ? true : false;
		},
		isArray : function(e){
return (e.length && typeof e !== "function") ? true : false;

		},
isPrimitive : function(arg){
var 
prim = [],i, l = prim.length;
prim.push("string", "number", "boolean", "NaN", "null", "undefined");
for(i = 0; i < l; i++){
	var prims = prim[i];
if(typeof arg === prims){
	return true;
}
}
return false;
		},
isNumber : function(arg){
	return (typeof arg === "number" || parseInt(arg) !== NaN) ? true : false;
		},
isString : function(arg){
	return (typeof arg === "string") ? true : false;
		},
		isNAN : function(arg){
			return (arg === NaN || typeof arg == "NaN")
		},
		isNUL : function(e){
return (e === null) ? true : false;
		},
		isUndefined : function(e){
return (typeof e === undefined) ? true : false;
		},
isEmpty : function(e){
			return (!isUndefined(e) && e.value === "") ? true : fasle;
		},
		log : function(log){
			console.log(log);
			return this;
		},

mixin : mixin,

	Cookie : (function(checkFirstVisit){
				if (document.cookie.indexOf("mycookie") == -1) {
					//cookie doesn't exist, create it
					document.cookie = "mycookie = 1";
				}
					else{
						//not first visit, so fire your weapon.
						alert("You just refreshed. Why?");
					}
				
			}),


Clear : function(){
			item.value = " ";
				item.placeholder = "New item";
				value.value = " ";
				value.placeholder = "The vlaue";
				item.focus();
		},

Clean : function(){ 
			//reset all fields here
				
	      var clear = (function(){
				Total = 0;
			total.innerHTML = "Total: " + Total;
			Results.innerHTML = " ";
			prompt("You must write something now.")
			});
			return [clear(), Clear()];
		},

EnterKeyPress : function(event){
		event = event || window.event;
		if(event.keyCode == 13){
		console.log("Session submitted. . .");
		if( !value.value || !item.value){
			console.log("Please supply the values.");
		}
		else { 
			Foo();
			console.log("Session values computed.");
			}
}},

	
Keypress : function(evt) {                
        evt = evt || window.event;
        switch (evt.keyCode) {
                case 13: //enter
                //alert("Enter key pressed. Be careful!");
                Foo();
                //leftArrowPressed(nextUrl);
                break;

                case 96: //esc .. .NOT WORKING YET
                alert("esc key just got a message");
                Clean();
                break;

                 case 32: //space bar
                //rightArrowPressed(prevUrl);
                break;

				case 16: //shift
                //rightArrowPressed(prevUrl);
                break;

                case 8: //backspace
                //downArrowPressed(prevUrl);
                break;

        }
    }
		
		
	};

	Function.prototype.FN = function(fn){
		PT.mixin(this.prototype, fn)
		return this;
	};

var SAPI = PT.SAPI = PT.prototype = {

	Create : function(element){
		element	= document.createElement(element);
			return this;
		},
		CreateElement : function(a, b){
	var elem = Create(a);
		b.insertBefore(elem, b[0]);
	},

CreateToBody : function(e){
		var element = Create(e);
		body.appendChild(element);
		return this;
	},

CreateRow : function(x){
		var temp = Create("table");
		temp.innerHTML = "<tr width=100%> <td width=50%></td> <td width=50%></td></tr>";
		var RowData = temp.firstChild;
		x.insertBefore(RowData, x[0]);
		console.log("Done!");
	},

CreateTable : function(){	
	var fragment = document.createDocumentFragment();
	var temp = Create("hr");
	temp.innerHTML = 
	"<table id=table width=50% border=1px><tr width=100%><td width=50%></td> <td width=50%></td></tr></table>";
	var table = temp.firstChild;
		body.insertBefore(table, body.children[0]);
		console.log( temp + "craeted with id: ");
		},
Table : function(a){
	console.clear();
		console.log("Table initializes . . . start");
	var table = document.createElement("table"),
    Row = document.createElement("tr"),
    Cell = document.createElement("td"),
    anotherCell = document.createElement("td"),
    body = document.body;	
	 Cell.id = "cell 1", anotherCell.id = "cell 2";
	 Cell.innerHTML = "Cell One", anotherCell.innerHTML = "Cell Two";

table.id = "table";
this.Cell = Cell, this.Row = Row, this.anotherCell = anotherCell;
console.log("....end");
!function(){
		console.log("Insert initializes . . . start");
	if(a){
		console.clear();
		console.log("We have argument " + a + " supplied. Good to go!");
		if(arguments.length == 0){
		 a.insertBefore(Row, a.children[0]);
		 //table.insertBefore(Row, table[0]);
		 Row.insertBefore(Cell, Row[0]);
		 Row.insertBefore(anotherCell, Row[1]);
		 console.log("Success!"+ table + "created with these information:- id:" + table.id + ", " + Row + " " + Cell + ": " + Cell.id + " " + anotherCell + ": " + anotherCell.id );

return table;
		}
	else if(arguments.length != 0){
		console.log("Please, only one arguments are required.");
	}
	else{
		console.log("Your arguments :" + arguments[0] + arguments[1] + "are not applicable in this context.");
}
	}
	else{
		console.clear();
		console.log("No values . . . default values will be submitted instead");
			!function(){
		 body.insertBefore(table, body[0]);
			table.insertBefore(Row, table[0]);
			Row.insertBefore(Cell, Row[0]);
//			Row(Cell, Row[1]);
			Cell.parentNode.insertBefore(anotherCell, Cell[1]);

			return table;
			}();
	}
 }();	 
},

appendBeforeParent : function(parent, element){//test
			return (parent !== null) ? parent.parentNode.insertBefore(element, parent[0]) : console.log(parent + "is null");
		},

append : function(element, child){//test
			var e = (element !== null) ? 	element.parentNode.insertBefore(child, element.nextSibling) :
			 console.log(element.constructor + " is null here.");
			 return this;
		},

prepend : function(parent, child){//test
			return (parent !== null) ? parent.insertBefore(child, parent.children[0]) : console.log(parent+ "is null");
		},
	
qs : function(id){//good
		return(document.querySelector) ? document.querySelector(id) : (document.querySelectorAll) ? document.querySelectorAll(id) :
		document.all(id);
	},

id : function(id){//good
		return document.getElementById(id);
	},

className : function(className){
		return document.getElementsByClassName(className);
	},

addClass : function(element, name){
	//return element.className += " " + name;
	//element.classList.add("otherclass");
	return SAPI.setAttr(element, "class", name);

},

removeClass : function(element, name){
	return element.classList.remove(name);
},

toggleClass : function(element, name){
	return element.classList.toggle(name);
},

hasClass : function(element, name){
	return (element.classList.contains(name)) ? true : false;
},

ElementName : function(elementName){
		return document.getElementsByName(elementName);
	},

setAttr : function(e, attr, value){
	var plusAttr = e.getAttribute(attr);
	plusAttr = plusAttr + " " + value + " ";
		return e.setAttribute(attr, plusAttr);
	},

getAttr : function(element, attr){ 
			var a = element.getAttribute(attr);
		return a;     
		},

hasAttr : function(element, attr){
		return element.hasAttribute(attr);
	},

removeAttr : function(element, attr){
		return element.removeAttribute(attr);
	},

tagName : function(tag){
		tag = document.getElementsByTagName(tag);
			return tag;
	},

	
removeChild(element, child){
		return element.removeChild(child);
	},

addChild(element, child){
		return (typeof SAPI.append(element, child) !== undefined) ? SAPI.append(element, child) : SAPI.CreateTo(element, child);
	},

replaceChild : function(element, child, replacement){//test
		return element.replaceChild(child, replacement);
	},

each : function(list, fn){
		var i, length = list.length;
		for(i = 0; i < length; i++){
			fn.call(list[i], i);
		}
		return true;
	},

today : (function(){
"use strict";
 var getNow = function(){
var DateToday = new Date();
 	return DateToday;//.toUTCString();
 }();
var dateDiv = document.createElement("h3");
var dateDivPos = document.body.appendChild(dateDiv);
dateDiv.innerHTML = getNow;
dateDiv.style.cssText = "background: #000000; color: #ebebeb; text-align:center;font-style: Impact;font-weight:bold;font-size:100%;border-radius:4%;width:20%;position:absolute;right:0;top:0";
//call it in your document script thus:
//EventUtil.today();
//works with both inline and external scripts same way.
}),

clone : (function(object){
	if (object === null || typeof object !== "object" || "isActiveClone" in object) {
		//return object;
		if (object instanceof Date) {
			var temp = new object.constructor();
		}
		else{
			var temp = object.constructor();
		}
		for (var key in object) {
			if (Object.prototype.hasOwnProperty.call(object, key)) {
				object["isActiveClone"] = null;
				temp[key] = clone(object[key]);
				delete object["isActiveClone"];
			}

		}
		return temp;
	}

}),

setInnerText: function(element, text){
if (typeof element.textContent == "string"){
element.textContent = text;
} else {
element.innerText = text;
}
},

getInnerText: function(element){
return (typeof element.textContent == "string") ?
element.textContent : element.innerText;
},//alert(getInnerText(div)); //"Hello world!"

nthChild : function(parent, pos, childPos) {
	if(parent.nodeType == 2){
		parent = document.getElementsByTagName(parent)[pos];
-		return parent.children[childPos];
	}

	
},
	loadScripts : function(){
var s = arguments.length, i, _s, pos;
for(i = 0; i < s; i++){
	_s = doc.create("script");
_s.type = "text/javascript";
	_s.defer = true;
_s.src = arguments[i];
 pos = head.appendChild(_s); 
return 
			}
			
			return 
		}

};

//PT.loadScripts("s.js", "custom.js", "BluePrints.js", "Create Table.js", "NEW.js", "ProJS.js");
alert(typeof PT.isFunction);
var EventUtil = PT.EventUtil = {
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
},


getEvent: function(event){
return event ? event : window.event;
},


getTarget: function(event){
return event.target || event.srcElement;
},


preventDefault: function(event){
if (event.preventDefault){
event.preventDefault();
} else {
event.returnValue = false;
}
},



stopPropagation: function(event){
if (event.stopPropagation){
event.stopPropagation();
} else {
event.cancelBubble = true;
}
},
//more code here
getRelatedTarget: function(event){
if (event.relatedTarget){
return event.relatedTarget;
} else if (event.toElement){
return event.toElement;
} else if (event.fromElement){
return event.fromElement;
} else {
return null;
}
}


//more code here

};
//console.log(PT.SAPI.tagName());
//PT.log();
window.SAPI = SAPI;
window.PT = PT;
return PT;
}(window));
alert("PT!");