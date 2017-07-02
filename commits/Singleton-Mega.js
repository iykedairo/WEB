/*
PT API: 1.00.
Welcome to PT NIGERIA's JavaScript API. All Rights Reserved.
All custom code will be here.
These custom codes will be  called and used natively in the scripts pages.
The code is primarily for the purpose of a self-made Library profitable for personal use.
Therefore, there is bound to be upgrades and time-stamped changes that aims to reflect growth and proficiency.
*/

Object.prototype.a = a;
var lert = alert;
alert = a;
a = foo;
function foo(){return this}
a("Welcome To PT Nigeria's JavaScript API version 1.00. All rights reserved.");
a("This is PT. Take your time, explore the place; PT is a big place");
;(function(window,undefined){
	
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
Store = {}, array = [], 
str = "abc",
num = 0, bool = !true,
Reg = /\w/;
//RegExp = sapi.RegExp;

var search = str.search;

function match(name, obj){
var match = new RegExp ("\\ b(" + name + ") \\b", "gi "),
matched = match.match(obj);

	return matched;
}
var P$ = "sapi.getElementById",
m = P$.match(/getElement/);
//alert(m);





function matched(rgx, obj){
	obj = obj || this;
return (rgx.test(obj) === true) ? true : false;
}
var
match = match,
matched = matched,
search = str.search,
match = str.match,
lower = str.toLowerCase,
upper = str.toUpperCase,
float = parseFloat,
int = parseInt,
test = Reg.test,
tests = RegExp.test,
toString = Store.toString,
slice = array.slice,
split = array.split,
splice = array.splice,
join = array.join,
indexOf = array.indexOf;


sapi.create = sapi.createElement;
sapi.tagName = sapi.getElementsByTagName;
sapi.className = sapi.getElementsByClassName;
sapi.id = sapi.getElementById;
sapi.name = sapi.getElementsByName;
sapi.EventUtil = EventUtil;
PT.EventUtil = EventUtil;

function create(x){
x = sapi.createElement(x);
return x;
}
function createFrag(x){
var 
temp = sapi.create("temp");
temp.innerHTML = x;
return temp;
}
var t = "></h2></h2>";
//a("mike"+ !isunknownHTML(t));
function isUndefined(e){
return (typeof e === "undefined") ? true : false;
		}

function isEmpty(e){
var tst = /\S+/;
return tst.test(e) ? false : true;
		}
var i = sapi.create("p");
i.textContent = "Crazy you!";
body.appendChild(i);
var 
d = i.className="r",

m = /html/;
var ob = new RegExp("/\p/");
//alert(!isunknownHTML(ob));


var g = "  <title>UNTITLED</title>";
var is = isunknownHTML;
var comment = "<h1>Comment:<p>I am a nooby nerd in Javascropt</p></h1>";
//alert(is(comment));


 function isunknownHTML(e){
a = {}.a, alert = a;
var blob = /[\<\\>]+/,
html = /HTML/,
doc = window.document,
unknown = /UNKNOWN/,
b = upper.call(e);
function Html(a){
	return html.test(a);
	}function Blob(a){
	return blob.test(a);
}function Unknown(a){
	return unknown.test(a);
}
//Test for blobs
if(Blob(b)){
	b.a();
var b1 = createFrag(e);
var child = b1.children[0];
try{
child = upper.call(child);
return (Html(child) && !Unknown(child))? false:true;
}catch(r){
	a(r);
}
return true;
} //Test for string "h1"
if(!Blob(b) && typeof e === "string"){
var b = sapi.create(e)	;
b = upper.call(b);
return (Html(b) && !Unknown(b)) ? false : true;
}//objects & undefined terms
if(!Blob(b) && !(typeof e === "string")){
if(e.constructor === RegExp){
alert("trouble");
//need to extract & compare
throw new Error("Unrecognized input. Input must be in quotes e.g: \"div\" ");
}else{return (Html(b) && !Unknown(b)) ? false: true;
	}}else{
	return "Uncought Exception"
}
}
 

//isHTML(/body/);

function isHTML(e){
alert = a = {}.a;
var r = /[\<\\>]/,
str = /UNKNOWN/,
html = /HTML/;
	
if(typeof e === "string"){
	a(e+" is a string")
if(r.test(e) === false){
	a("r.test(e) === false");
e = sapi.create(e);
e = upper.call(e);
//a(e.search(str) === -1);
return (e.search(str) === -1) ? a(true+e+" is an element") : a(false+e+" is not an element");
}
else if(r.test(e) === true){
	a("r.test(e) === true");
var temp = sapi.create("p");
temp.innerHTML = e;
temp.content.cloneNode(true);
var child = temp.children[0],
Str = upper.call(child);
//a(Str.search(str) === -1);
return (child.nodeType !== undefined && Str.search(str) === -1) ? a(true+child+" is an element") : a(false+child+" is not valid");
}
}
else{
	a("We have an object");
	e = e || this;
	e = upper.call(e);
var htm = html.test(e),
unkn = str.test(e);
//it is element.
a("present: "+htm+"    absent: "+unkn);
	return (htm && !unkn) ?
a(true+e+" is an element") : a(false+e+" is no valid html");
}
}
var p = sapi.create("aside");
//isHTML(p);

function parseHTML(h, c) {
	//[html, context]
  var 
t =(c || sapi).create('tem');
//make it create value a ||
//tem 
t.innerHTML = h;
 return t.content.cloneNode(true);
    }


a("This is PT! Have fun.");


sapi.removeClass = function(e,n){
	e.classList.remove(n);
	return this;
};

sapi.addClass  = function(c, n){
//[class, name]
n = " "+ n;
(c.classList) ? c.classList.add(n) : c.className += n;
	return this;
};
sapi.All = function(x){
x = sapi.querySelectorAll(x)[0];
return (x.length === 0) ? x : (x.length === 1) ? x[0] : x;
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
//Welcome To PT JS API v:1.00
//PT constructor is internal
return new PT.sapi.PT();
	
}


PT.sapi = PT.prototype = {
	constructor : PT,
	PT : function (x){
 
x =  sapi.querySelectorAll(x)[0];
return (x.length === 0) ? x : (x.length === 1) ? x[0] : x;
 
 
 
 
	},
	sapi : PT,
	html : HTML,
	HTML: html,
	body : body,
	head : head,
	mixin : mixin,
	SAPI : SAPI,
	test : test,
	tests : tests,
	search : search,
	match : match,
	upper : upper,
	lower : lower,
		page : true,
		Store : Store,
		store : Store,
		array : array,
		

create : create,
createFrag : createFrag,
isElement : 0,
isHTML : isHTML,
styles: function(obj,option){
option =	option || this;
if(typeof obj === 'string' && typeof option === 'string'){
	this.style[obj] += option;
	return this;
}
if(typeof obj === 'string'){
option.style.cssText += obj;
return this;
}
if(obj.constructor === Object){
Object.keys(obj).forEach(fn);
function fn(e, i, array){
var prop = Object.getOwnPropertyDescriptor(obj, e);
option.style[e]+= prop.value;
return this;
}return this;}
if(obj.constructor === Array){
if(obj.length === 1){
option.style.cssText += obj;
return this;
}
var err = ("Only one string blob is required in an array to hold all style definitions.");
alert(err);
throw new Error(err);
}
var err="Uncought Exception";
alert(err);
throw new Error(err);
},
 css : function(obj,option){
option =	option || this;
if(typeof obj === 'string' && typeof option === 'string'){
	this.style[obj] += option;
	return this;
}
if(typeof obj === 'string'){
option.style.cssText += obj;
return this;
}
if(obj.constructor === Object){
Object.keys(obj).forEach(fn);
function fn(e, i, array){
var prop = Object.getOwnPropertyDescriptor(obj, e);
option.style[e]+= prop.value;
return this;
}return this;}
if(obj.constructor === Array){
if(obj.length === 1){
option.style.cssText += obj;
return this;
}
var err = ("Only one string blob is required in an array to hold all style definitions.");
alert(err);
throw new Error(err);
}
var err="Uncought Exception";
alert(err);
throw new Error(err);
},
stringify: function(obj,ele){
	obj = obj || this;
var store = [];
Object.keys(obj).forEach(fn);
function fn(e, i, array){
i = Object.getOwnPropertyDescriptor(obj, e);if(ele){
i = (e+": "+i.value+"<br>");
ele.innerHTML +=i;
}else{
i = e+": "+i.value+" <br/> ";
document.write(i);}
store.push(i);}
return store;},
isAbsent : function(e){
var tag = sapi.tagName(e);
if(e === null || Object && !tag){
				return true;
			}

			return false;
		},
isPresent : function(e){
if(typeof e === "object" && e.ownerDocument.body.contains(e) != undefined){
				return true;
			}

			return false;
		},
		isBool : function(arg){
			return (typeof arg === "boolean" && !!arg === true || !!arg === false) ? true : false;
		},
isFunction : function(e){
 return (typeof e === "function") ? true : false;
		},
isObject : function(e){
return (typeof e === "object" && e !== null) ? true : false;
		},
		isArray : function(e){
	return isArray(e)|| Array.isArray (e);
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
		
		
isNumber : function(e){
var tst = /^\d+\.?\d*$/;
return (tst.test(e)) ? true : false;
		},
isString : function(arg){
	return (typeof arg === "string") ? true : false;
		},
		isNAN : function(arg){
			return (arg === NaN || typeof arg == "nan")
		},
		isNUL : function(e){
return (e === null) ? true : false;
		},
		isUndefined : function(e){
return (typeof e === undefined) ? true : false;
		},
		isEmpty : function(e){
	var tst = /\S+/;//not empty
//if true?false:true
return tst.test(e) ? false : true;
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
						a("You just refreshed. Why?");
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

CreateTable :function(node){	
	var fragment = sapi.createDocumentFragment();	var temp = Create("hr");
	temp.innerHTML = 
	"<table id=table width=50% border=1px><tr width=100%><td width=50%></td> <td width=50%></td></tr></table>";
var table = temp.firstChild,
body = body || node;
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
},//a(getInnerText(div)); //"Hello world!"

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


function isArray(e){
 if(Array.isArray(e)){
 	return true;
 }
 var r = Object.prototype.toString.call(e);
 if(r === "[object HTMLCollection]" || r === "[object NodeList]"){
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

////////////////////
//The lifeblood
sapi.PT = PT.sapi;
PT.sapi.PT.prototype = PT.sapi;
mixin(PT, PT.sapi);
mixin(PT.sapi.PT, PT.sapi);
mixin(sapi, PT.sapi);
//Trick Ends
//////////////////////
window.PT = PT;
window.sapi = sapi
window.SAPI = SAPI;



}(window));

a("PT Farewell!");

a("The end of PT");

 function a(a){
try{var foo =	confirm(a);
return foo ? prompt=confirm=alert=foo:!0;
}catch(e){alert(e);}}