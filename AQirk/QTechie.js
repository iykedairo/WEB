/*
Techie API: 1.00.
Welcome to Techie NIGERIA's JavaScript API. All Rights Reserved.
All custom code will be here.
These custom codes will be  called and used natively in the scripts pages.
The code is primarily for the purpose of a self-made Library profitable for personal use.
Therefore, there is bound to be upgrades and time-stamped changes that aims to reflect growth and proficiency.
*/

Object.prototype.a = a;
var lert = a;
a = a;
a = foo;
function foo(){return this}
a("Welcome To Techie Nigeria's JavaScript API version 1.00. All rights reserved.");
a("This is Techie. Take your time, explore the place;! Techie is a big place");
;(function(window,undefined){
	
var
root = window, EventUtil = null,
document = root.document, 
sapi = document, 
html = sapi.documentElement, head = sapi.head,
url = URL = sapi.URL, BaseURI = baseuri = BaseUri = sapi.baseURI, 
URI = uri = sapi.documentURI, element,
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
function isElement(e){
e = e || this;
return e instanceof HTMLElement;
}
function match(name, obj){
var match = new RegExp ("\\ b(" + name + ") \\b", "gi "),
matched = match.match(obj);

	return matched;
}
var P$ = "sapi.getElementById",
m = P$.match(/getElement/);
//a(m);





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
Techie.EventUtil = EventUtil;

function create(x){
x = sapi.createElement(x);
x.length = 0;
x.nodes = [];
x.nodes = [x];
Techie.prototype.mixin(x,this);
return x;
}
function createFrag(x){
var 
temp = sapi.create("p");
temp.innerHTML = x;
temp.length = temp.children.length;
return temp.children;
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
 function isunknownHTML(e){
a = {}.a, a = a;
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
a("trouble");
//need to extract & compare
throw new Error("Unrecognized input. Input must be in quotes e.g: \"div\" ");
}else{return (Html(b) && !Unknown(b)) ? false: true;
	}}else{
	return "Uncought Exception"
}
}
 

//isHTML(/body/);

function isHTML(e){
//a = a = {}.a;
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


a("This is Techie! Have fun.");


sapi.removeClass = function(e,n){
	e.classList.remove(n);
	return this;
};
sapi.addClass=function(n,c){
//[class, name]
c = c || this;
n = " "+ n;
(c.classList) ? c.classList.add(n) : c.className += n;
	return this;
};

sapi.All = function(x){
x = sapi.querySelectorAll(x);
return (x.length === 0) ? x : (x.length === 1) ? x[0] : x;
};

sapi.all = function(x){
	return sapi.All(x);
}; 
sapi.qs = function(x){
x = sapi.querySelector ?
 sapi.querySelector(x) : sapi.querySelectorAll(x)[0];
return x;
	};
	
function write(r){
	sapi.writeln(r);
}

function mixin(receiver, supplier) {
			Object.keys(supplier).forEach(function(property) {
var descriptor = Object.getOwnPropertyDescriptor(supplier, property);		Object.defineProperty(receiver, property, descriptor);
//document.writeln(property);
			});
			return receiver;
			}












function mixinx(){}

function SAPI(selector){
this.nodes = [].slice.call(document.querySelectorAll(selector)); 
if (this.nodes.length) {
this.length = this.nodes.length; 
this.each = each;
this.nodes.each = each;
function each(fn){var i = 0;
for(; i < this.length; i++)
	fn.call(this[i], i, this);
}

this.nodes.each(function(){
this.each = each;
});

if(this.length > 1){
return this.nodes;
}else{
var node = this.nodes[0];
node.length = this.nodes.length;
	return node;
}
}
}


function Techie(selector){
//Welcome To Techie JS API v:1.00
//Techie constructor is internal

if((selector instanceof Array) || (arguments.length > 1) || (typeof selector === 'function')) {
selector = [].slice.call(arguments);
if(typeof arguments[0] === 'array'){selector = arguments[0]
a(arguments[0])
}
return Techie.sapi.Ready(selector); }
if(!(this instanceof Techie)){
return new Techie.sapi.Techie(selector);
}
}


Techie.sapi = Techie.prototype = {
	
constructor : Techie,
Techie : function(selector){
 this.length = 0; 
this.nodes = []; 
if (selector instanceof HTMLElement || selector instanceof NodeList) {
this.nodes = selector.length > 1 ? [].slice.call(selector) : [selector]; } 
else if (typeof selector === 'string') { if (selector[0] === '<' && selector[selector.length - 1] === ">") { 
this.nodes = [createFrag(selector)[0]]; }
 else {this.nodes = [].slice.call(document.querySelectorAll(selector)); } } 
if (this.nodes.length) {
this.length = this.nodes.length; 
var techie = this;
forEach(fn, this.nodes);
function fn(i, e, obj){
techie[i] = e; mixin(techie[i],Techie.sapi);}}},

DomReadyState : false,
Ready: function(fn){var stk = [].slice.call(arguments);
Techie.addHandler(sapi, "DOMContentLoaded", function ev(){Techie.removeHandler(sapi, "DOMContentLoaded", ev);
var T=setInterval(function(){
if(DOMISREADY()){var Arr;
clearInterval(T);
stk.forEach(function(fn,i){
Arr=stk.splice(i);},Techie);
Arr.forEach(function(fn,i){
	if(Techie.isArrayLike(fn) ){
fn.forEach(function(f, j){
if(typeof f !== 'function'){
	return f;
}f.call(Techie, sapi);
});}else{if(typeof fn !== 'function'){	return fn;}
fn.call(Techie, sapi);}
},Techie);}},0);});
function DOMISREADY(){
if(sapi.readyState === "complete"){
Techie.DomReadyState = true;
}else{
Techie.DomReadyState = false;}
return Techie.DomReadyState;
}return Techie.DomReadyState; },

set READY(fn){
	Techie.Ready(fn);
},
get versions(){
	return {
		number: this.version++,
		info: "Release detail"
	};
},
version: 1.00,	
	
	mixinx : mixinx,
	sapi : Techie,
	html : HTML,
	HTML: html,
	body : body,
	head : head,
	mixin : mixin,
	SAPI :SAPI,
	pt :   Techie,
	URL : URL,
	url : url,
	Url : url,
	uri : uri,
	URI : URI,
	baseuri: baseuri,
	BaseUri: BaseUri,
	BaseURI: BaseURI,
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
isElement : isElement,
isHTML : isHTML,
extend: function(O, obj){
//Techie.mixin([O,Techie,sapi], obj);
mixinx(O, obj);
	return this;
},
styles: function(obj,option){
option =	option || this;
//a(this)
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
a(err);
throw new Error(err);
}
var err="Uncought Exception";
a(err);
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
a(err);
throw new Error(err);
}
var err="Uncought Exception";
a(err);
throw new Error(err);
},
Bool: {
	isEmpty: function(x){
	var test = /\S+/.test(x);
	return (!test || x ===null || x === undefined)?!0:!1;
   },
   isNaN: function(x){
 return /[^\d]+/.test(x);
   }
},
Binarize: function(x){
match = this.Bool.isNaN(x);
var s=this.Bool.isEmpty(x);
if(s || match){
var err = "Invalid command";
pt.min(err);
throw new Error(err);
}var Results = [], y = x;
if(x == 0){Results.push(x);}
while(true){if(x <1){break;}
else{if(x % 2 == 0){
x = x / 2;Results.push(0);
	}else if(x % 2 == 1){
x -= 1;x = x / 2;
Results.push(1);
}}}return {Raw: Results.join(' '),
	Results: function(){
var r = pt.Reverse(Results);
return "The binary of "+y +" is "+r.join(' ');

	}()
};
},
walk_the_DOM: walk,
walk: walk,
Reverse: function(arr){
if(arr.constructor !== Array){
var err = "Only arrays are supported.";
pt.min(err);
throw new TypeError(err);
}var i, Results = [];
for(i=arr.length;i>=0; --i){
Results.push(arr[i])
}return Results;
},
Log: function(text, e){
if(e !== false){
this.hideErrors();
}
var ee = sapi.create("h3");
ee.id = "err";
e = e || sapi.body;
if(arguments.length == 1){
if(this instanceof HTMLElement){
	e =	this;
	}
}
ee.innerHTML = text; 
this.PrependChild(ee, e);
Techie.styles({
'box-sizing': 'border-box',
'word-wrap': 'break-word',
'color':'cyan',
'border':'1px solid crimson',
'background-color':'#333333',
'margin':'1em auto',
'max-width':'17em',
'border':'1px #fff',
'text-align':'center',
'padding':'1em',
'border-radius':'2%'
}, ee);
Techie.styles("width:23em",
sapi.body);
},
hideErrors: function(err){
if(err){
Techie(err).each(function(){
		this.css('dislay:none')
	});
	return 'done';
}
Techie("#err").each(function(){
	this.css("display:none");
});
},
EClass: function(a, b){
	b = b || 'E';
	a.classList.add(b);
Techie('.R').each(function(){
	this.css( "border: 1px solid indigo" );
});
	},
min: function(text, e){
//this.hideErrors();
var ee=sapi.create("span");
ee.id = 'err';
e = e || sapi.body;
if(arguments.length == 1){
if(this instanceof HTMLElement){e =	this;}
}
ee.innerHTML = text; 
this.AppendChild(ee, e);
Techie.styles({
'color':'crimson',
'border':'.1em solid crimson',
'position':'absolute',
'font-size': '10px',
'display':'block-block',
'box-sizing': 'border-box',
'word-wrap': 'break-word'
}, ee);
Techie.styles("width:23em",
sapi.body);
return ee;
},
Alphabetical:function(a, b){
return (a < b) ? -1 : (a > b) ? 1 : 0;
},
msg: function(text, e){
this.hideErrors();
var ee=sapi.create("span");
ee.id = 'err';
e = e || sapi.body;
if(arguments.length == 1){
if(this instanceof HTMLElement){e =	this;}
}
ee.innerHTML = text; 
this.PrependChild(ee, e);
Techie.styles({
'box-sizing': 'border-box',
'word-wrap': 'break-word',
'position':'absolute',
'display':'inline',
'color':'indigo',
'border-radius':'2px',
'padding': '1em',
'background-color':'#efefef',
'border':'1px solid olive',
'margin':'inherit',
'top': '0',
'font-size': '10px'
}, ee);
Techie.styles("width:23em",
sapi.body);
function fire(fn, x){
setTimeout(function(){
fn(x);
}, 1200);
setTimeout(pt.hideErrors, 5000);
}
fire();
},
computed_styles:function(e,y){
var pass = upper.call(e);
var passer = /CSSSTYLED/; y = y||sapi.body.appendChild(sapi.create("h2"));
if(passer.test(pass)){
var cssText = e.cssText;
y.innerHTML += cssText;
}else if(Techie.isHTML(e)){
try{if(e.parentNode){
var cssText=e.style.cssText;
y.innerHTML += cssText;
}else{throw new TypeError("An on-page html element is required.");}
}catch(e){y.innerHTML=e;}}
else{
y.innerHTML = new TypeError("An on-page html element is required");
}
Techie.styles( {
	'color':'cyan',
'display':'block',
'border':'1px solid #000',
'background-color':'#333333',
'margin':'1em auto 0 auto',
'max-width':'15em',
'border':'1px #fff',
'text-align':'center',
'padding':'4em',
'font-family':'Impact',
'border-radius':'2%'
} , y );
},
Timestable: function(count, limit, rounds){count=count||1,
limit=limit||12,rounds=rounds||12; var round=1,
store=[],stk=[],ocount=count;
while(true){
if(count <= limit*ocount){
store.push(count);
count += ocount;
}else{store.push("<br/>");
stk.push(round);ocount++;
count = ocount;
if(round < rounds){round++;
}else{
pt.Log(store);//pt.Log(stk);
break;}}}
},
counter: function(count, limit, rounds){count=count||1,
limit=limit||15,rounds=rounds||15; var round=1,store=[],
stk=[],ocount=count;
while(true){
if(count <= limit){
store.push(count);count++;}
else{store.push("<br/>");
stk.push(round);
	if(round < rounds){
round++;count = ocount;}else{
pt.Log(store);pt.Log(stk)
break;}}}
},
stringify: function(obj, e){
	obj = obj || this;
var store = [];
 if(isArray(obj)){
alert("True Array")
return store;}

Object.keys(obj).forEach(fn);function fn(e, i, array){
i = Object.getOwnPropertyDescriptor(obj, e); 
i = '<h4>'+e+": "+i.value;
store.push(i);} 
if(e){
if(e === !!0 || e === !0){
return store;
}
}
if(isArray(e)){
e.forEach(function(index){
	index.innerHTML = store;
});return store;}
(e) ? (e.innerHTML = store):
  sapi.Log(store);
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
		log: function(log){
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
Prepend: function (a, b){
//used to create previousSib
b = b || this;
if(n ===  null){
var err = b+' is null';
alert(err);
throw new TypeError(err)
}
b.insertBefore(a, b.previousSibling[0])
return this;
},
Append: function(a, b){
//used to create nextSibling
	b = b || this;
	if(b === null){
var err = b+' is null';
alert(err);
throw new TypeError(err);
	}
b.insertBefore(a, b.nextSibling[0]);
return this;
},
PrependChild: function(a, b){
//used to create firstChild
b = b || this;
if(b === null){
var err = b+' is null';
alert(err);
throw new TypeError(err);
}
b.insertBefore(a, b.firstChild);
return this;
},
AppendChild: function(a,b){
//used to create lastChild
b = b || this;
var err = b+' is null';
if(b === null){
alert(err); 
throw new TypeError(err)
} b.appendChild(a);
return this;
},
prepend:function(c,p){//test
//[child, parent]
p = p || this;
(p !== null) ? p.insertBefore(c, p.children[0]) : console.log(p+ "is null");
return this;
		},
	
qs : sapi.qs,

id : sapi.id,

className : sapi.className,

addClass: function(a,b){
b = b || this;
a = a;
b.classList.add(a);
return this;
},
removeClass : function(element, name){
	return element.classList.remove(name);
},

removeClass:function(className){ return this.each(function() {
this.className = this.className.replace(new RegExp('\\b' + className + '\\b', 'g'), ''); });
 },

toggleClass : function(e, n){
	//[element, className]
 (e.classList.contains(n)) ? removeClass(n) : addClass(n);
 return this;
},


hasClass : function(n,e){
 e = e || this;
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

META: function(i,m,b,l){
/*
initial-width, maximum-scale, user-scalable[0/1], minimum-scale;
var m = pt.META;
m(); m(1.0, 10.0, 1, 0.8);
m("i=1,m=9,b=0")...will not overrite l.
m("i=1,m=9,b=0", false);overrite all with <--
*/
var arr = [], meta;
Techie('meta').each(function(){
arr.push(this['name'].toLowerCase());
if(!arr['viewport']){
var frg = 
'<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=0.8, maximum-scale=5.0, user-scalable=1" />';
frg = sapi.createFrag(frg)[0];
sapi.head.appendChild(frg);
} });
meta = sapi.querySelector('meta[name="viewport"]');
if(typeof i === 'string'){
	if(typeof m==='boolean'){
meta.setAttribute('content',i);
	}else{
		define(meta, i);
	}
}else{
if(i){
 define(meta,'initial-scale='+i);
 }if(m){
 define(meta,'maximum-scale='+m);
 }if(b){
 define(meta,'user-scalabe='+b);
 } if(l){
 define(meta,'minimum-scale='+l);
 }
 }
function define(e, a){
var attr = e.getAttribute('content');
attr += a + ", ";
e.setAttribute('content',attr);
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

getInnerText:function(element){
return (typeof element.textContent === "string") ? element.textContent : element.innerText;
},
nthChild :function(parent,pos,childPos){
//[parent, pos, childPos]
if(parent.nodeType === 1){
parent = sapi.tagName(parent)[pos];
parent.children[childPos];
 return this;
	}
	return this;
},
LoadScripts: function(scripts, pos){
var test = /[,^]/;
pos = pos || document.head;
var err = new TypeError("Only arrays are supported. An array of comma separated strings is required.");
if(scripts.constructor !== Array){
Techie.Log(err);
throw new Error(err);
}
if(scripts.length == 1 && test.test(scripts)){
Techie.Log(err);
throw new Error(err);
}
Techie.each(fn, scripts);
function fn(elem,index,arr){
index = document.createElement('script');
index.type='text/javascript';
index.defer = true;
index.src = elem;
pos.appendChild(index);
}
return this;
},

on : function(name,handler){ return this.each(function(){
 this.addEventListener(name, handler, false); }); 
 },
text : function(str, obj) {
obj = obj || this;
if (str){
 obj.each(function(){
this.innerText = str; }); }
 return this.length && this[0].innerText;
  },
pop : {
	obj :   null,
	minimal: function(a, b,s){
		//a-message,b-title
a = a || 'Welcome onbaord';
b = b || 'Prize Techie';
var d = '<span id=cancel>Nope!</span><span id=ok>Sure!</span>',
c = '<div id=pop><h1 id=i></h1><p id=p></p><footer id=ft></footer></div>',
fr = pt.createFrag(c),
div = fr[0];
this.obj = div; 
if(s){
if(s.constructor!==Object){
var err = 'Only Objects are supported to extend the popup styles. Arrays and strings are not supprted';
alert(err);
throw new TypeError(err);
}pt.mixin(this.styles, s);
}div.length = div.children.length;var
header = div.children[0],
body = div.children[1];
footer = div.children[2];
header.innerHTML = b;
	body.innerHTML = a;
	footer.innerHTML = d;
	sapi.body.appendChild(div);
var spanB = footer.lastChild,
spanA = footer.firstChild;
pt.css({
	'position' : 'relative',
	'right' : '4.5em',
	'display': 'inline-block',
	'padding-top': '3em'
}, spanA);
pt.css({
	'position' : 'relative',
	'left': '4em',
	'display': 'inline-block',
	'padding-top' : '3em'
}, spanB);
pt.styles("position:fixed", sapi.body);
pt.css(this.styles, this.obj);
pt.EventUtil.addHandler(spanA, 'click', function(){
pt.pop.hide();
});
pt.EventUtil.addHandler(spanB, 'click', function(){
	pt.Log(this.innerText);
	pt.pop.hide();
});
},
	styles : {
	'display' : 'block',
	'font-size': '150%',
	'color' : 'white',
	'background': 'green',
	'position' : 'absolute',
	'left'     : '5%',
	'top'      : '.4em',
	'width'    : '90%',
	'border-radius': '.2em',
	'z-index'  : '1',
	'padding': '1em',
	'overflow': 'scroll'
	},
	display : function(){
pt.css("display:block", this.obj);
	},
hide : function(){
this.obj.style.display = 'none';
sapi.styles("position:relative", sapi.body);
},
small: function(boo,msg){ 
var div = sapi.create('div'),
def1 = {
	display : 'none',
	position : 'absolute',
	left      : "12%",
	width     : '90%',
	top			 : '2em',
	color 		 : 'crimson',
	background : 'silver',
	'font-size': '2em',
	'z-index' : 1
},
def2 = {display : 'none'};
div.textContent = msg || "I love to use a popup. It's fun!!";
sapi.body.appendChild(div);
pt.css(def1, div); 
//pt.pop.small(true,msg).trigger;
return {trigger: function(){	
if(!!boo){
alert("work in progress");
}
if(div.style.display == 'block'){div.style.display = 'none';}else if(div.style.display == 'none'){div.style.display = 'block';}}}}
},
isReady : false,
onReady: function(func){
 this.isReady = true;
func.call(this); 
}, 
ready: function(func){ 
var args = Array.prototype.slice.call(this, arguments);
var boundReadyFunc = func.bind(this,args.slice(1)); 
if(this.isReady){func(); } else {
 document.addEventListener( "DOMContentLoaded", this.onReady.bind(this, func), false ); } }, 
each : function(fn, obj){
	obj = obj || this;
	return forEach(fn, obj);
},
Hex: function(obj){
if(!obj){obj = {}; var i=0;
while(i<111){obj[i] = i;i++;}}else 
if(obj.constructor!=Object){
if(typeof obj === 'number'){
	obj = obj.toString(16);
	pt.Log(obj);return obj;
}return null;}var store=[];	Object.keys(obj).forEach(function(e, i, arr){arr = Object.getOwnPropertyDescriptor(obj, e);i = arr.value;
i='<h3>'+i+': '+i.toString(16);
store.push(i);});
pt.Log(store);
},
forEach : function(fn, obj){
	obj = obj || this;
	return forEach(fn, obj);
},
add : function(number){
var sum = 0;
pt.each(function(i){
sum += this;}, number);
return sum;
	},
isArrayLike : isArrayLike


};







 Techie.EventUtil = {
	
	addHandler: function(element, type, handler){
if(element.addEventListener){
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

function isArray(x){
	return x instanceof Array;
}

function isArrayLike(e){
if(Array.isArray(e)){
return true; }var r = Object.prototype.toString.call(e);if(r === "[object HTMLCollection]" || r === "[object NodeList]"){
 return true;}
if(typeof e !== "object" || !e.hasOwnProperty("length") || e.length < 0){
	return false;
}if(e.length === 0){return true;}else if(e[0] && e[0].nodeType){return true;}
return false;
}



//console.log(Techie.SAPI.tagName());
//Techie.log();



function forEach(fn, obj){
var length, i = 0; 
obj = obj || this;
if(isArrayLike(obj)){ length = obj.length; for(;i < length;i++){ if (fn.call(obj[i],i,obj[i],obj) === false ) { break; } } } 
else { 
for(i in obj){ 
if(callback.call(obj[i],i,obj[i],obj) === false ) { break; } } } return obj; }



	Function.prototype.FN = function(fn){
		mixin(this.prototype, fn)
		return this;
	};
function walk(node, func) {
func(node);     
node = node.firstChild;     
while (node) {    
walk(node, func);         
node = node.nextSibling;
} }

////////////////////
//The lifeblood
mixin(Techie,Techie.EventUtil);
sapi.Techie = Techie.sapi;
Techie.sapi.Techie.  prototype = Techie.sapi;
mixin(Techie, Techie.sapi);
mixin(Techie.sapi.Techie, Techie.sapi);
mixin(sapi, Techie.sapi);


//Trick Ends
//////////////////////
window.Techie = Techie;
window.sapi = sapi;
window.SAPI = SAPI;
window.pt = Techie;
window.log = function(a, b){
	return Techie.Log(a, b);
};
window.Log = log;
/*pt.ready(function (){
try{
Techie.Log( '<p>' +url +'<p>' + URL +'<p>' +BaseURI +'<p>' +baseuri +'<p>' + BaseUri +'<p>' +URI +'<p>' +uri );
}catch(e){alert(e)}
});
*/

}(window));

a("Techie Farewell!");

a("The end of Techie");

 function a(a){
try{var foo =	confirm(a);
return foo ? prompt=confirm=alert=foo:!0;
}catch(e){alert(e);}} 