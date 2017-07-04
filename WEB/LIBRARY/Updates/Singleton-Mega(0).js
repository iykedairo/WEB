// Instead of alert, UserAgent on the screen corner
//All custom code will be here.
//These custom codes will be  called and used natively in the scripts pages.
//These codes are custom because they are made up of different fragments of self-made re-usable chunks of code
//The code is for the purpose of a self-made Library profitable for personal use.
//Therefore, there should be an expectation for upgrades and time-stamped changes that aims to match the liquidity of the web. The industry is still a young guy.
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
    
    function isElement(e){
    	
    }
 */


alert("PT start");
Object.prototype.a = a;
 function a(a){
	if(a){
		alert(this+ " says "+a);
		}
		else{
			alert(this);
		}
		return this;
			}
	
(function(window, undefined){
	
var
root = window, EventUtil = null,
document = root.document, 
sapi = document, 
html = sapi.documentElement, head = sapi.head,
url = sapi.URL, BaseURI = sapi.baseURI, 
URI = sapi.documentURI, element,
//e = typeof document.nodeType === 2;
auto = 1, enhanced = 0, 
HTML = html,
body = sapi.body || sapi.createElement("body"), Garbage = {},
Store = {}, array = [];


function parseHTML(h, c) {
	//[html, context]
  var 
t =(c || sapi).create('tem');
t.innerHTML = h;
        return t.content.cloneNode(true);
    }


alert(sapi);

slice = array.slice, 
indexOf = array.indexOf,
sapi.create = sapi.createElement,

sapi.tagName = sapi.getElementsByTagName,
sapi.className = sapi.getElementsByClassName,
sapi.id = sapi.getElementById,
sapi.name = sapi.getElementsByName;
sapi.EventUtil = EventUtil;
PT.EventUtil = EventUtil;


sapi.removeClass = function(e, n){
	e.classList.remove(n);
	return this;
};

sapi.addClass  = function(c, n){
//[class, name]
n = " "+ n;
(c.classList) ? c.classList.add(n) : c.className += n;
	return this;
};

sapi.qs = function(x){
	x =
sapi.querySelector ?
 sapi.querySelector(x) :
 sapi.querySelectorAll(x)[0];
return x;
	};
	




function mixin(receiver, supplier) {
			Object.keys(supplier).forEach(function(property) {
			var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
			Object.defineProperty(receiver, property, descriptor);
			});
			return receiver;
			}
			


function SAPI(){}


function PT(){
return new PT.sapi.PT();
	
}


PT.sapi = PT.prototype = {
	constructor : PT,
	PT : function (s){
		
		return this;
	},
	sapi : PT,
	SAPI : SAPI,
		page : true,

isElement : true,
isAbsent : function(e){
var tag = sapi.tagName(e);
if(element === null || Object && !tag){
				return true;
			}

			return false;
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
isFunction : function(element){
 return (typeof element === "function") ? true : false;
		},
		isObject : function(element){
			return (typeof element === "object" && element !== null) ? true : false;
		},
		isArray : function(element){
			return (typeof element === "array" && element !== null) ? true : false;

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
  break;
  case 96: //esc ..
  break;
  case 32: //space bar
  break;
	case 16: //shift
  break;
  case 8: //backspace
  break;

        }
    },



	Create : function(e){
	e	= sapi.create(e);
			return this;
},
CreateElement : function(e, b){
e = sapi.create(e);
b.insertBefore(e, b[0]);
	},

CreateToBody : function(e){
		var element = Create(e);
		body.appendChild(element);
		return this;
	},

CreateRow : function(x){
		var temp = Create("table");
temp.innerHTML = "<tr width=100%> <td width=50%></td> <td width=50%></td></tr>";
		var 
	RowData = temp.firstChild;
		x.insertBefore(RowData, x[0]);
		console.log("Done!");
	},

CreateTable : function(){	
	var fragment = sapi.createDocumentFragment();
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
	var 
table = sapi.create("table"),
    Row = sapi.create("tr"),
    Cell = sapi.create("td"),
anotherCell = sapi.create("td"),
   body = body || sapi.body;	
	 Cell.id = "cell 1", anotherCell.id = "cell 2";
	 Cell.innerHTML = "Cell One", anotherCell.innerHTML = "Cell Two";

table.id = "table";
this.Cell = Cell, this.Row = Row, this.anotherCell = anotherCell;
console.log("....end");
!function(){
		console.log("Insert initializes . . . start");
	if(a){
		console.clear();
		console.log("We have argument " + a + " supplied. Good to go!");	if(arguments.length == 0){
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

appendBeforeParent : function(p, e){//test
//p[parentElement]
//e[element]
return (p !== null) ? p.parentNode.insertBefore(e, p[0]) : console.log(p + "is null");
		},
insert : function(){
	
},
		
append :function(e, c){//test
//[element, child]
var b = e.parentNode;
(e !== null) ? 	b.insertBefore(c, e.nextSibling) :
console.log(e + " is null.");
			 return this;
		},

prepend:function(p, c){//test
//[parent, child]
(p !== null) ? p.insertBefore(c, p.children[0]) : console.log(p+ "is null");
return this;
		},
	
qs : sapi.qs,

id : sapi.id,

className : sapi.className,

addClass : sapi.addClass,

removeClass : function(element, name){
	return element.classList.remove(name);
},

toggleClass : function(e, n){
	//[element, className]
 (e.classList.contains(n)) ? removeClass(n) : addClass(n);
 return this;
},


hasClass : function(e, n){
 return (e.classList.contains(n)) ? true : false;
 
},
 
 
 toggle : function(e, a, b){
//[element, class1, class2]
var A = hasClass(e, a);
var B = hasClass(e, b);
if(A || B){
	toggleClass(e, a);
	toggleClass(e, b);
}
else{
	addClass(e, a);
}
},

Name : sapi.name,

setAttr : function(e, attr, v){
	var 
plusAttr = e.getAttribute(attr);
plusAttr += " " + v + " ";
 e.setAttribute(attr, plusAttr);
 return this;
	},

getAttr : function(e, attr){ 
var 
a = e.getAttribute(attr);
return this;  
		},

hasAttr : function(e, attr){
return e.hasAttribute(attr);
	},

removeAttr : function(e, attr){
return e.removeAttribute(attr);
	},

tagName : sapi.tagName,

	
removeChild : function(e, c){
 e.removeChild(c);
 return this;
	},

addChild : auto,

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

nthChild : function(e, a, b) {
//[parent, pos, childPos]
	if(e.nodeType === 2){
e = sapi.tagName(e)[a];
 e.children[b];
 return this;
	}

	return this;
},


	loadScripts : function(){
var s = arguments.length, i, _s, pos;
for(i = 0; i < s; i++){
	_s = sapi.create("script");
_s.type = "text/javascript";
	_s.defer = true;
_s.src = arguments[i];
 pos = head.appendChild(_s); 
return this;
			}
			
			return 
		}


};

 PT.EventUtil = {
	
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



function mixin(receiver, supplier) {	Object.keys(supplier).forEach(function(property) {
			var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
			Object.defineProperty(receiver, property, descriptor);
			});
			return receiver;
			}


function isArray(e){
 if(Array.isArray(e)){
 	return true;
 }
 var r = Object.prototype.toString.call(e);
 if(r === "[objsct HTMLCollection]" || r === "[object NodeList]"){
 	return true;
 }

if(typeof e !== "object" || !e.hasOwnProperty("length") || e.length < 0){
	return false;
}
if(e.length === 0){
	return true;
}
else if(e[0] && e[0].nodeType){
	return true;
}
return false;
}



//console.log(PT.SAPI.tagName());
//PT.log();



	Function.prototype.FN = function(fn){
		mixin(this.prototype, fn)
		return this;
	};
	
	
//PT.loadScripts("s.js", "custom.js", "BluePrints.js", "Create Table.js", "NEW.js", "ProJS.js"
;


function mixin(receiver, supplier) {
			Object.keys(supplier).forEach(function(property) {
			var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
			Object.defineProperty(receiver, property, descriptor);
			});
			return receiver;
			}




PT.sapi.PT.prototype = PT.sapi;
mixin(PT, PT.sapi);

window.PT = PT;



}(window));

alert("PT! End");