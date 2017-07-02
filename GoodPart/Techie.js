/*
Techie API: 1.00.
Welcome to Techie NIGERIA's JavaScript API. All Rights Reserved.
All custom code will be here.
These custom codes will be  called and used natively in the scripts pages.
The code is primarily for the purpose of a self-made Library profitable for personal use.
Therefore, there is bound to be upgrades and time-stamped changes that aims to reflect growth, proficiency capacity and mile-stones.
*/

Object.prototype.a = a;
a=function foo(){return !0}
a("Welcome To Techie Nigeria's JavaScript API version 1.00. All rights reserved.");
a("This is Techie. Take your time, explore the place;! Techie is a big place");
;!(function(window){
var root=window,pt = Techie,
sapi = root.document;

var
url = URL = sapi.URL, BaseURI = baseuri = BaseUri = sapi.baseURI, 
URI = uri = sapi.documentURI, element,
Garbage = {},
Store = {}, array = [], 
str = "abc",
Reg = /(?=\w+\s*\W*\w*)+$/;

function match(name, obj){
var match = new RegExp("\\ b(" + name + ")\\b", "gi"),
matched = match.match(obj);
	return matched;
}

var
h1 = '<h1>', h2 = '<h2>',
h3 = '<h3>' , h4 = '<h4>' ,
h5 = '<h5>' , h6 = '<h6>' ,
search = str.search,
match = str.match,
lower = str.toLowerCase,
upper = str.toUpperCase,
toString = Store.toString,
slice = array.slice,
split = str.split,
splice = array.splice,
join = array.join;

function  EventTarget(){ } EventTarget.prototype  =  {     constructor: EventTarget,     addListener:  function(type, listener){// create an array if it doesn't exist 
if (!this.hasOwnProperty("_listeners")) { this._listeners  =  [];} if (typeof this._listeners[type] == "undefined"){ this._listeners[type]  =  [];         } this._listeners[type].push(listener);},
 fire: function(event){
 if(!event.target){             event.target  =  this;         } if (!event.type){//falsy
throw new Error("Event object missing 'type' property.");         } if(this._listeners && this._listeners[event.type] instanceof Array){ var listeners = this._listeners[event.type]; 
var i,len = listeners.length;
for(i = 0; i  <  len; i++){                 listeners[i].call(this,event);}}},
removeListener: function(type, listener){ if (this._listeners && this._listeners[type] instanceof Array){ 
//corrected listeners 's'
var listener = this._listeners[type];
var i,len = listeners.length;
for(i = 0; i < len; i++){
if(listeners[i]===listener){
listeners.splice(i, 1); break; }}}}};

var Events = {
EventTarget: EventTarget,
target: new EventTarget(),
getClipboardText: function(event){
var clipboardData = (event.clipboardData || window.clipboardData);
return clipboardData.getData("text");
},

setClipboardText: function(event, value){
if (event.clipboardData){
return event.clipboardData.setData("text/plain", value);
} else if (window.clipboardData){
return window.clipboardData.setData("text", value);
}
},

getWheelDelta: function(event){
if (event.wheelDelta){
return (client.engine.opera && client.engine.opera < 9.5 ?
-event.wheelDelta : event.wheelDelta);
} else {
return -event.detail * 40;
}
},
getCharCode: function(event){
if (typeof event.charCode == "number"){
return event.charCode;
} else {
return event.keyCode;
}
},
//used to get mouse click right, left, midle wheel
getButton: function(event){
if (document.implementation.hasFeature("MouseEvents", "2.0")){
return event.button;
} else {
switch(event.button){
case 0: case 1: case 3:
case 5: case 7: return 0;
case 2: case 6: return 2;
case 4: return 1; }}
},
on: function(ev,fn,el){
el = el || this;
if(!isNode(el)){
throw new TypeError();
}forEach(function(){
Events.addHandler(this,ev,fn);},el); return this;
 },
	
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
};Techie.EventUtil = Events;
var EventUtil = Events;
function Handle(s){var i,g;
 if(!arguments.length){
	return this;}

args = slice.call(s);
	 if(arrays(args[0])){
	 	d =  args[0];
	 	mixin(Techie, d);
	 	return d;
}for(i in args){
if(ownProp(args,i))
g = args[i];
if(functions(g)){ 
Techie.sapi.Ready(g);
}else{
var obj =	g;
mixin(pt,obj);
this['object'] = obj;
	delete this.a;
	}
}
}
Handle.prototype = pt;

function Techie(selector){
//Welcome To Techie JS API version: 1.00 All Rights Reserved.
if(!strings(selector) && !isHTML(selector) && !isCollection(selector)){
return new Handle(arguments);}
if(!instance(this,Techie)){
return new Techie.sapi.Techie(selector);}return Techie(selector || this);
}



Techie.sapi = Techie.prototype = {
constructor : Techie,
Techie : function(selector){
if(!selector){return this;}
 this.length = 0; 
var nodes = [];
this.nodes = nodes;
if(isCollection(selector)) {
nodes = selector.length > 1 ? slice.call(selector) : [selector]; } 
else if(strings(selector)){ if (selector[0] === '<' && selector[selector.length - 1] === ">") { 
nodes = [createFrag(selector)];
 } else { nodes = slice.call(document.querySelectorAll(selector)); 
 } } else{
 nodes = [selector];
 }
if (nodes.length){
this.length = nodes.length; 
nodes.each = forEach;
var techie = this;
nodes.each(function(i,e,o){
	techie[i] = e;
	 mixin(element,e);});
}},
isready : false,
onReady: function(func){
 this.isready = true;
func.call(this,this, sapi, sapi.body, sapi.head, PT,  window); 
}, 
READY: function(func){ 
var args = Array.prototype.slice.call(this, arguments);
var boundReadyFunc = func.bind(this,args.slice(1)); 
if(this.isready){func(); } else {
 document.addEventListener( "DOMContentLoaded", this.onReady.bind(this, func), false ); } 
}, 
 
DomReadyState : false,
Ready: function(fn){
if(this.isready){
	this.onReady.bind(this, fn);
}else{
 document.addEventListener( "DOMContentLoaded", this.onReady.bind(this, fn), false );
}
},
get status(){
	return sapi.readyState;
},
get isReady(){
return sapi.readyState === 'complete';
},
set ready(fn){
var timer;
timer = setInterval(function(){ if(this.isReady){
fn.call(this,this, sapi, sapi.body, sapi.head, PT,  window); clearInterval(timer);
return this.status; 	
	}
}.bind(this),0);
},
get ready(){var timer;
return function(fn){
timer = setInterval(function(){ if(this.isReady){
fn.call(this,this, sapi, sapi.body, sapi.head, PT,  window); clearInterval(timer);
return this.status; 	
} }.bind(this),0); };
},
set Each(f){
a.a(f)
f = forEach;
},
get Each(){
return function(a,b,c){
	forEach(a,b,c);
};
},
get version(){
	return {
		number: this.version++,
		info: "Release detail"
	};
},
set version (version){
return 1.00;
},

defineGlobals:function(o,r){
if(arguments.length < 2){
	r = o; o = PT;
}if(!Array.isArray(r)){
	r = [r];
}var l = r.length, i = 0;
for(; i < l; i++){
window[r[i]] = o;
}
},
	Elements: Elements,
	sapi : Techie,
	html : html,
	HTML: html,
	events: Events,
	Events: Events,
	body : sapi.body,
	head : sapi.head,
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
	upper : upper,
	lower : lower,
		page : true,
		Store : [],
		store : [],
		array : [],
		pit : function(arg){
return pt.explode(arg);
		},
		

create : create,
createFrag : createFrag,
isNode: isNode,
isElement : isHTML,
isHTML : isHTML,
set Extend(o){
mixin(o,this);
},
extend: function(s, r){
r = r || this; 
s = s || pt;
mixin(s,r);
if(booleans(r)){
Extender(r, [s,pt]);
}
	return r;
},
Extender: Extender,
isCollection: isCollection, 
isNodeList: isNodeList,
ExtractLetters: function(s){
if(arguments){var stk = [];
s = slice.call(arguments);
s.forEach(function (s){
	stk.push(String(s));}); 
s = String(stk).split('');
 s = String(s).split(/[\W]*\s*/);
return s;}return '--NIL--';
},


ExtractWords: function(s){
if(arguments){var stk = [];
s = slice.call(arguments);
s.forEach(function (s){
	stk.push(String(s));}); 
s = String(stk);
 s = s.split(/[\W]+\s*/);
return s;}return '--NIL--';
},


capitalize: function(s){
if(arguments){ var stk = [],
arr = slice.call(arguments);
arr.forEach(function(s){
//t hold one item from pos 0
var t = String(s).slice(0,1);
//u hold all items from pos 1
var u = String(s).slice(1);
var C = t.toUpperCase().concat(u.toLowerCase()); 
stk.push(C);
});
return stk;
}
return false;
},
ExtractArgsArr: function(){
if(arguments){var args = slice.call(arguments),
len = args.length, stk = [];
args.forEach(function(e){
	stk.push(e);
}); this.length = len;
return stk;
}
	return false;
},
styles: function(obj,option){
option =	option || this;
//a(this)
if(typeof obj === 'string' && typeof option === 'string'){
	if(!isHTML(this)){return; }
	this.style[obj] += option;
	return this;
}
if(typeof obj === 'string'){
if(!isHTML(option)){return;}
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
if(strings(obj) && strings(option)){
	this.style[obj] = option;
	return this;
}if(!isHTML(option)){
	if(isHTML(this)){
		option = this;
	}else{
throw new TypeError('HTML please.');
	}}
if(strings(obj) && option){
option.style.cssText += obj;
return this;
}
if(objects(obj)){
Object.keys(obj).forEach(function(e, i, array){
var prop = Object.getOwnPropertyDescriptor(obj, e);
option.style[e]+= prop.value;
return this;
});return this;}
if(arrays(obj)){
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
Bool: Bool,
Binarize: function(x){
match = this.Bool.Nan(x);
var s=this.Bool.empty(x);
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
}return Results.join(' ');
},
Log: function(text, e, f){
if(e !== false){
this.hideErrors();
}
var ee = sapi.create("h3");
ee.id = "err";
f = f || sapi.body;
if(arguments.length == 1){
if(this instanceof HTMLElement){
	f =	this;
	}
}
ee.innerHTML = text; 
pt.PrependChild(ee, f);
pt.styles({
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
pt.styles("width:23em",
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
pt.styles({
'color':'crimson',
'border':'.1em solid crimson',
'position':'absolute',
'font-size': '10px',
'display':'block-block',
'box-sizing': 'border-box',
'word-wrap': 'break-word'
}, ee);
pt.styles("width:23em",
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
pt.styles({
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
pt.styles("width:23em",
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
}else if(pt.isHTML(e)){
try{if(e.parentNode){
var cssText=e.style.cssText;
y.innerHTML += cssText;
}else{throw new TypeError("An on-page html element is required.");}
}catch(e){y.innerHTML=e;}}
else{
y.innerHTML = new TypeError("An on-page html element is required");
}
pt.styles( {
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
pt.Log(store.join(" "));//pt.Log(stk);
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
ownProp: function(z,y){
return z.hasOwnProperty(y);
},
extendArray: function(x,y){
//extend x with y
if(x.length && y.length){
	var i = x.length, j;
	for(j in y){i += 1;
	if(ownProp(y,j))
		x[i] = y[j];
	}x = pt.StripCommas(x);
	return x.split(',');}
},

merge: function( first, second ) { var len = +second.length, j = 0, i = first.length; 
while ( j < len ) {
first[ i++ ] = second[ j++ ];
} // Support: IE<9 // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists) 
if ( len !== len ) {
while ( second[ j ] !== undefined ) { 
first[ i++ ] = second[ j++ ]; } } first.length = i; 
return first; },


MapArrayToArray: function(x,y){
if(x.length !== y.length){
	return null}var mapped={};
x.forEach(function(e, index){
mapped[e] = y[index];
});
mapped=pt.ObjectToArray(mapped);
return mapped;
},

ObjectToArray: function(o){
o = pt.stringifyAll(o,false,false);
return o;
},

searchArray:function(A, Aa){
	var stk = [];
Aa=pt.explode(arguments,1);Aa = pt.StripCommas(String(Aa)).split(',')
Aa.forEach(function(e){
if(pt.index(A,e)!=-1){
	stk.push(e);}});return stk;
},


ArrayToObject: function(rr){
var object = {},
vls = this.StripCommas(String(rr).split(/[\w]+\:/)).split(','),
prps = this.StripCommas(String(rr).split(/\:\w+/)).split(',');
prps.forEach(function(prp,i){	object[prp] = vls[i];
});return object;
},
methods: function(o){
var stk = [],j,i;o = o ||pt;
for(i in o){j = o[i];
if(functions(j)){
	if(o.hasOwnProperty(i)){
		stk.push(h4+(typeof o[i])+': '+i);
	}} stk = stk.sort(this.Alphabetical);
} this.Log(stk, false); 
return stk;
},
props: function(o){
var stk = [],i,j;o = o ||pt;
for(i in o){ j = o[i];
if(type.isAtype(j)){
	if(o.hasOwnProperty(i)){
		stk.push(h4+(typeof o[i])+': '+i);
	}} stk = stk.sort(this.Alphabetical);
} this.Log(stk, false); 
return stk;
},
StripSpace: function(s){
//x.replace(/(^\s+|\s+$)/g, "")
	return String(s).replace(/\s/g,'');
},

nthChild: nthChild,
nth: function(p,n){var 
len=arguments.length,pos=0;
if(!len){return null;}
if(len < 2){
if(isHTML(this)){n=p;p=this;
} else{return null;} }
var ch = !function next(e){
e = e.nextElementSibling;
pos += 1;
if(pos == n){return e;}
	next(e)
}(p.firstElementChild);
 return ch;
},

StripCommas: function(str){
//s.replace(/\s*(,|^|$)\s*why/g, "$1")
str = String(str).replace(/\,+(,|\s\,+|$)/g, ',');
str = str.replace(/^\,|\,$/g, '')
return str;
},

stringifyAll: function(o,f,e){
//if f is !5, for in will be careful. if e is a bool, store wont be logged, if it an elem, fine, else body is the default container
var store = [],stk = [],j,i;
for(i in o){if(f===false ){
if(o.hasOwnProperty(i)){
 j = h4+i+": "+o[i];
 stk.push(i+': '+o[i]);
 store.push(j);
}}else{
	 j = h4+i+": "+o[i];
 stk.push(i+': '+o[i]);
 store.push(j);}}
 if(arguments.length == 3 ){
 	if(isHTML(e)){
this.Log(store, false, e);
	}else if(typeof e === 'boolean'){
		return stk;
	}else{
		this.Log(store,false);}
}return stk;
},
search: function(o, s){
if(arguments.length === 1){
s = this.explode(arguments);
o = this;}else{
s=this.explode(arguments,1);
}var store = [],name, value;
for(i in o){try{
if(o[i].name){
	name = o[i].name;
	}else{name = i;}
}catch(e){name = i}
value = o[i];
s.filter(function(e){
	if(e === name){
e = h4+name+': '+value;
		store.push(e);
}});}
this.Log(store, false);
},

index: index,

Index: Index,
explode: explode,
commaSeparated:function(x){
var comSep = /(?=\w)+?[\w]+\s*\,\s*(\w+|\,)\s*$/;
return comSep.test(x);
},

stringify: function(obj, e){
	obj = obj || this;
var store = [];
 if(pt.isArray(obj)){
alert("True Array")
return store;}

Object.keys(obj).forEach(fn);function fn(e, i, array){
i = Object.getOwnPropertyDescriptor(obj, e); 
i = h4+e+": "+i.value;
store.push(i);} 
if(e){
if(e === !!0 || e === !0){
return store;
}
}
if(pt.isArray(e)){
e.forEach(function(index){
	index.innerHTML = store;
});return store;}
(e) ? (e.innerHTML = store):
  sapi.Log(store);
return store;},
isAbsent : function(e){
return !(this.isPresent(e));
		},
isPresent : function(e){
if(isHTML(e)){
return  e.ownerDocument.body.contains(e);
}return false;
	},
isBoolean : function(arg){
return (booleans(arg));
		},
isFunction : function(e){
 return (functions(e));
		},
isObject : function(e){
return(objects(e));
		},
isArray : function(e){
	return (arrays(e))},
isPrimitive : function(arg){
var prims = ["string", "number", "boolean", "nan", "null", "undefined"], 
 isPrim = false;
 prims.forEach(function(e){
 if(typeof arg === e){
 	isPrim = true;}
 });
return isPrim;
		},
		
		
isNumber : function(e){
return (/^\d+\.?\d*$/.test(e));
		},
isString : function(arg){
	return (strings(arg));
		},
		isNan: function(arg){
return (arg === NaN || typeof arg === "nan");
		},
		isNull : function(e){
return (e === null);
		},
isUndefined : function(e){
return (typeof e === 'undefined');
		},
		isEmpty : function(e){
return !(/\S+/.test(e));
		},
		log: function(log){
			console.log(log);
			return this;
		},
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
b.appendChild(e); return this;
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

PrependToParent : function(p, e){//test
//p[parentElement]
//e[element]
return (p !== null) ? p.parentNode.insertBefore(e, p[0]) : console.log(p + "is null");
		},
insert : function(){
	
},
		
Append :function(e, c){//test
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
return this
},
PrependChild: function(a, b){
//used to create firstChild
b = b || this;
try{
if(!isHTML(b)){
throw new TypeError(b +' is null');
}}catch(er){return er;}
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

id : sapi.getElementById,

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
 (e.classList.contains(n)) ? this.removeClass(n) : this.addClass(n);
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
frg = sapi.createFrag(frg);
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

addChild : true,

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


LoadScripts: function(scripts, pos){
var test = /[,^]/;
pos = pos || document.head;
var err = new TypeError("Only arrays are supported. An array of comma separated strings is required.");
if(scripts.constructor !== Array){
pt.Log(err);
throw new Error(err);
}
if(scripts.length == 1 && test.test(scripts)){
pt.Log(err);
throw new Error(err);
}
pt.each(fn, scripts);
function fn(elem,index,arr){
index = document.createElement('script');
index.type='text/javascript';
index.defer = true;
index.src = elem;
pos.appendChild(index);
}
return this;
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
div = fr;
this.obj = div; 
if(s){
if(s.constructor!==Object){
var err = 'Only Objects are supported to extend the popup styles. Arrays and strings are not supprted';
alert(err);
throw new TypeError(err);
}pt.mixin(s,this.styles);
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
each : forEach,
Hex: function(obj){
if(!obj){obj = {}; var i=0;
while(i<111){obj[i] = i;i++;}}else 
if(obj.constructor!=Object){
if(typeof obj === 'number'){
	obj = obj.toString(16);
	pt.Log(obj);return obj;
}return null;}var store=[];	Object.keys(obj).forEach(function(e, i, arr){arr = Object.getOwnPropertyDescriptor(obj, e);i = arr.value;
i=h3+i+': '+i.toString(16);
store.push(i);});
pt.Log(store.join(' '));
},
each: forEach,
add:function(x){var total=0;
x = pt.explode(arguments, 0);
var len = x.length, i = 0;
return function add(x){
if(len) {
if(typeof x[i] === 'number'){
total += +x[i];
i++; len--;
add(x); 
}}
return total;
}(x);
},
nthChild: nthChild,
Children: Children,
type: type,
types: type,
tag: tag,
blob: blob,
element: element,
objects: objects,
arrays: arrays,
functions: functions,
strings: strings,
numbers: numbers,
booleans: booleans,
show: show,
invalidChars: invalidChars,
isArrayLike : isArrayLike


};






function Index(item,A){
	A = A || this;
var all = arguments,
store = {}, stk = [], arr = pt.explode(all[0]),items = (pt.isArrayLike(all[1])) ? pt.explode(all[1]) : String(slice.call(arguments,1)).split(',');
pt.each(function(i,e,itms){
pt.each(function(j,k,o){
if(e == j){store[e] = k;
stk.push(k);}else if(e == k){
store[e] = j; stk.push(j);
}}, arr);if(!(e in store)){
 store[e] = -1; stk.push(-1);
}},items);if(stk.length==1){
return stk[0]; }return stk;
}

function explode(arr, n){
	var stk = [];
return function explode(arr, n){
arr = slice.call(arr,n || 0);
arr.forEach(function(e, i){
if(!isArrayLike(e)){
 stk.push(e);}else{
arr = e; explode(arr);
}});return stk;
}(arr,n);
}





 
function html(c){
if(strings(c)){
if( invalidChars(c) ){
c = sapi.querySelectorAll(c)[0];
}else{c=create(c);}}
var d = isHTML(c);
if(!d){return false;}
if(this instanceof html){
	return c
}return true;
}

function create(x){
x = sapi.createElement(x);
return x;
}
function createFrag(x){
var temp = sapi.create("p");
temp.innerHTML = x;
return temp.firstChild;
}



function isHTML(s){
	if(isNode(s)){
if(s.nodeType == 1){
return true;}return false;}
return false;}

function invalidChars(c){
if(strings(c)){
return (/[#.]+/.test(c));
}
}


function isCollection(N){
return arrays(N) && isHTML(N[0]);
}

 function isNodeList(N){
try{
if(strings(N)){return false}
var len = (N.length === 0),
e = ((N[0] instanceof HTMLElement) || (N[0] instanceof NodeList) || (N[0] instanceof HTMLCollection)),
isNL = ((N instanceof HTMLCollection) || (N instanceof NodeList));
return (isNL && (e || e));
}catch(t){return false;}
}

function isNode(a){var un,i;
if(!a){return false;}
if( invalidChars(a) ){ 
a=sapi.querySelectorAll(a)[0];return checkHtml(a);}
if(strings(a)){
a=a.trim();if(a.charAt(0)=='<'&&a.charAt(a.length-1)=='>'){a = createFrag(a);
return checkHtml(a);}
a = pt.create(a);
return checkHtml(a);
}
return checkHtml(a);
function ChkNm(n){
if(!objects(n)){return !5;}
if(pt.isNodeList(n)){
n = n[0];}try{
n = upper.call(n);
}catch(e){return false;}
un = ['UNKNOWN','UNDEFINED','NULL','NAN','OBJECT OBJECT'];
var r = true;
forEach(function(){
if(index(this, n) !== -1){
r = false;}  },un);return r;
}function checkHtml(obj){
 if(ChkNm(obj)){
 if(pt.isNodeList(obj)){
 	obj = obj[0]; }
return obj.nodeType ? true : false;}return false;}}






a("This is Techie! Have fun.");



sapi.All = function(x){
return slice.call(sapi.querySelectorAll(x));
};

sapi.all = function(x){
	return slice.call(sapi.querySelectorAll(x));
}; 
sapi.qs = function(x){
x = slice.call(sapi.querySelectorAll(x));
return x[0];
	};
	
function write(r){
	sapi.writeln(r);
}

function ownProp(x,y){
return Object.prototype.hasOwnProperty.call(x,y);
}

function Extender(Rec,Sup){
if(!Rec && !Sup){return null}
var len = arguments.length, SupBl = (Sup instanceof Array || Sup instanceof Object),
RecBl = (Rec instanceof Array || Rec instanceof Object);
if(len && !(len > 2) && SupBl && RecBl){if(len < 2){
 Sup = Rec; Rec = this;
}if(!(Rec instanceof Array)){
 		Rec = new Array(Rec);
}if(!(Sup instanceof Array)){
 		Sup = [Sup]; }var i, j;
 Rec = slice.call(Rec);
 	Sup = slice.call(Sup);
Rec.forEach(function(R){
	Sup.forEach(function(obj){
		for(j in obj){
if(R instanceof Object && obj instanceof Object && obj.hasOwnProperty(j)){
			R[j] = obj[j]; }
		}
	});
});
}
}
function  mixin(supplier, receiver ) {
receiver = receiver || this;
if(Object.getOwnPropertyDescriptor) { Object.keys(supplier).forEach(function(property) { var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
Object.defineProperty(receiver, property, descriptor);  });}else{for(var property in supplier){if  (supplier.hasOwnProperty(property)){receiver[property]  =  supplier[property]}} return  receiver;}}



function type(x,y){
if(type.isAtype(x)){if(y){
if(strings(y)){
var t = typeof x === y;
return t;
}else{throw new TypeError()}
}	return typeof x;
	}return 'NIL';
}var 
types = type.prototype = {
	numbers: function(x){
return typeof +x ==='number';
	},
	strings: function(x){
return typeof x === 'string';
	},
	booleans: function(x){
return typeof x ==='boolean';
	},
undefineds:function(x){return typeof x === 'undefined';
	},
	nulls: function(x){
return typeof x === 'null';
	},
	objects: function(x){
return x instanceof Object;
	},
	functions: function(x){
return typeof x==='function';
	},
	arrays: function(x){
return typeof x === 'array';
	},
	
	isAtype: function(x){
var r = typeof x === 'array',
o = typeof x === 'object',
f = typeof x === 'function',
s = typeof x === 'string',
b = typeof x === 'boolean',
n = typeof x === 'number',
u = typeof x === 'undefined',
N = typeof x === 'null',
z = typeof x === 'nan';
return  o || f || r || s || b || n || u || N || z;
	},
	type: type,
	nothing: function(x){
		if(this.isAtype(x)){
			return false;
		}return true;
	},
types: [ "object", 
"undefined", "nan", "null", 
"string", "number", "array",
"boolean", "function" ]
};mixin(types,type);


function Bool(){
return {
empty: function(x){
	var test = /\S+/.test(x);
	return (!test || x ===null || x === undefined)?!0:!1;
   },
   primitives: function(p){
		return pt.isPrimitive(p);
	},
	objects: function(o){
		return pt.isObject(o);
	},
	functions: function(f){
		return pt.isFunction(f);
	},
	arrays: function(ar){
		return pt.isArray(ar);
	},
	strings: function(s){
		return pt.isString(s);
	},
	booleans: function(b){
		return pt.isBoolean(b);
	},
	numbers: function(b){
		return pt.isNumber(b);
	},
	Null: function(n){
		return pt.isNull(n);
	},
	Undefined: function(u){
		return pt.isUndefined(u);
	},
	Nan: function(n){
		return pt.isNan(n);
	},
	nothing: function(e){
try{	return !(this.primitives(e) && this.arrays(e) && this.objects(e) && this.functions(e) && this.Nan(e))}catch(e){
	return false;
}
	}
};}
function objects(n){
var N = ((typeof n === 'object') || (instance(n, Object)));
if(instance(this, objects)){
	return Object(n);
}return N;
}
function booleans(n, boo){
var N = ((typeof n === 'boolean') || (instance(n, Boolean)));
if(arguments.length > 1){ return n === boo;}
if(instance(this,booleans)){
	return Boolean(n);
}return N;
}
function arrays(n){
var N = ((typeof n === 'array') || (instance(n, Array)));
if(instance(this, arrays)){
	return Array(n);
}return N;
}

function functions(fn){
var t = ((typeof fn === 'function') || (instance(fn, Function)));return t;
}
function strings(s){
var S = ((typeof s === 'string') || (instance(s, String)));
if(instance(this,strings)){
	return String(s);
}return S;
}
function numbers(n){
var N = ((typeof n==='number') || (instance(n, Number)));
if(instance(this, numbers)){
	return Number(n);
}return N;
}

var Elements = {};

Elements.events = Events;

Elements.props = {
tabForward: function(event){
event = EventUtil.getEvent(event);
var target = EventUtil.getTarget(event);
if (target.value.length == target.maxLength){
var form = target.form;
for (var i=0, len=form.elements.length; i < len; i++) {
if (form.elements[i] == target) {
if (form.elements[i+1]){
form.elements[i+1].focus();
}
return;
}
}
}
},
selectText: function(textbox, startIndex, stopIndex){
if(textbox.setSelectionRange){
textbox.setSelectionRange(startIndex, stopIndex);
} else if (textbox.createTextRange){
var range = textbox.createTextRange();
range.collapse(true);
range.moveStart("character", startIndex);
range.moveEnd("character", stopIndex - startIndex);
range.select();
}
textbox.focus();
},
getSelectedOptions: function(selectbox){
var result = new Array();
var option = null;
for (var i=0, len=selectbox.options.length; i < len; i++){
option = selectbox.options[i];
if (option.selected){
result.push(option);
}
}
return result;
},
serialize: function(form){
var parts=[],field = null,i,
len,j,optLen,option,optValue;
for (i=0, len=form.elements.length; i < len; i++){
field = form.elements[i];
switch(field.type){
case "select-one":
case "select-multiple":
if (field.name.length){
 for (j=0, optLen = field.options.length; j < optLen; j++){
option = field.options[j];
if (option.selected){
optValue = "";
if (option.hasAttribute){
optValue = (option.hasAttribute("value") ?
option.value : option.text);
} else {
optValue = (option.attributes["value"].specified ?
option.value : option.text);
}
parts.push(encodeURIComponent(field.name) + "=" +
encodeURIComponent(optValue));
}
}
}
break;
case undefined: //fieldset
case "file": //file input
case "submit": //submit button
case "reset": //reset button
case "button": //custom button
break;
case "radio": //radio button
case "checkbox": //checkbox
if (!field.checked){
break;
}
/* falls through */
default:
//don’t include form fields without names
if (field.name.length){
parts.push(encodeURIComponent(field.name) + "=" +
encodeURIComponent(field.value));
}
}
}
return parts.join("&");
},
	props: Element.props,
	css: pt.css,
	styles: pt.styles,
	addClass: function(c,e){
(e||this).clasasList.add(c);
return this;
	},
removeClass: function(c,e){
(e||this).classList.remove(c); return this;
},
toggleClass: function(c,e){
e = e || this;
if(e.hasClass(c)){
this.removeClass(c)
}else{e.addClass(c)}
},
	
 each: function(fn, o, d){
o = o || this; 
if(!isArrayLike(o)){
	if(element(o)){o = [o];
	}else{return null;}
}var l = o.length, i = 0, g;
for(; i < l; i++){g = o[i];
if(element(g)){
fn.call(d || g, i, g, o);}}
},

setText: function(text,e){
e = e || this;
if (typeof e.textContent == "string"){
e.textContent = text;
} else {
e.innerText = text;
}
},

getText: function(e){
e = e || this;
return (typeof e.textContent === "string") ? e.textContent : e.innerText;
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

set text(str) {
this.setText(str, this);
  },
	addChild: function(b,a){
if(b && !a && isHTML(this)){
a = this;
}if(!objects(b)){if(blob(b)){b = createFrag(b)}
}else if(tag(b)){
	b = create(b);
}else{return;}
a.appendChild(b);return b;
	},
removeChild: function(a,b){
(a||this).removeChild(b);
return this;
},
	getAttr: function(a,e){
(e||this).getAttribute(a);
	},
	getParent: function(e){
return (e||this).parentNode;
	},
getChildren: function(e){
e = e || this;
return slice.call(e.children);
},
getPrevSib: function(e){
return (e||this).previousSibling;
},
getNextSib: function(e){
return(e||this).nextSibling;
},
getFirstChild: function(e){
return (e||this).firstChild;
},
getLastChild: function(e){
return (e||this).lastChild;
},
setAttr: function( ){
	
},
	setPrevSib: function( ){
		
	},
	setNextSib: function( ){
		
	},
setFirstChild: function(c,e){
(e||this).prependChild(c);
return this;
},
setLastChild: function(c,e){
this.addChild(c,e);
return this;
},
PrependToParent : function(p, e){//test
//parentElement, element
return (p !== null) ? p.parentNode.insertBefore(e, p[0]) : Error(p+"is null");
		},
insert : function(){
	
},
prepend: function (a, b){
//used to create previousSib
b = b || this;if(b=== null){
var err = b+' is null';
throw new TypeError(err)
}b.insertBefore(a, b.previousSibling);
return this;
},
prependChild: function(a, b){//used to create 1stChild
b = b || this;if(b=== null){
var err = b+' is null';
throw new TypeError(err);
}b.insertBefore(a, b.firstChild);return this;
},
append: function(a, b){
//used to create nextSibling
	b = b || this;
	if(b === null){
var err = b+' is null';
throw new TypeError(err);
	}
b.insertBefore(a, b.nextSibling);
return this;
},
appendChild: function(a,b){
//used to create lastChild
b = b || this;
var err = b+' is null';
if(b === null){
throw new TypeError(err)
} b.appendChild(a);
return this;
},
qs: function(s){
	
},
all: function(s){
	
},
id: function(s){
	
},
className: function(s){
	
},
name: function(s){
	
},
tagName: function(t){
	
},
nthChild: nthChild,
Children: Children,
show: show, mixin: mixin,
extend: pt.extend,
Extender: Extender
};



//utilities
function Children(parent){
var l = arguments.length,
 children = [], child = null;
if(l < 1){	if(isHTML(this)){
		parent = this;
	}else{throw new Error()}
}
if(l < 2 && isHTML(this)){
child = parent;parent = this;
}if(l > 1){
	parent = arguments[0];
	child = arguments[1];
}if(!isHTML(parent)){
	return null;
	} 	!function next(div){
	if(isHTML(div)){
		 children.push(div);
div = div.nextElementSibling;
	next(div);
	}
}(parent.firstElementChild );
if(numbers(child)){
	return children[child];
}
return pt(children);
}

function nthChild(p, c){
	if(arguments.length < 2 ){
		if(isHTML(this)){
			c = p; p = this;
		}
	}
return Children(p, c);
}

function element(e){var t;
if(strings(e)){t=isHTML(e);}
else{
t = instance(e,HTMLElement);
}if(instance(this,element)&& t){return (blob(e)) ? createFrag(e) : create(e);
}return t;
}

Extender(element,[Events, Elements, Elements.props]);

element.prototype = element;

function tag(t){
if(!strings(t)){return !5;}
var c = isHTML(t);
if(this instanceof tag &&c){
return create(t);
}
return c;
}
function instance(i, fn){
try{var y = i instanceof fn;
return y;
}catch(e){return false;}
}

function blob(b){
var blb = /(?=\s*\<\s*\w+\s*\>){1,1}^[\s*\S*\w*\W*]*(<\\{0,1}\s*\w+\s*\>\s*$)/.test(b);
if(this instanceof blob && blb){
	return createFrag(b);
}
return blb;
}

function SAPI(selector){var
nodes = slice.call(sapi.querySelectorAll(selector)),length;
if (nodes.length) {
length = nodes.length; 
nodes.each = forEach;
nodes.each(function(){
mixin(element,this);
});return nodes[1] ? nodes : nodes[0];}return null;
} 
function index(item,ar,S){
//(arr,item,start)
if(strings(item) && strings(ar)){
return ar.search(item);
}ar = ar || this; var j,
len = ar.length, count = -1;
S = +S || 0;if(S < 0){
S += len; if(S < 0){S = 0;}}
if(S >= len){return -1;}
for(;S < len; S++){j =ar[S];
if(item===j){count=S;break;}
else if(item===S){count= j;
break;}}
return count !== -1 ? count : -1;
}

function show(rg,o){var stk = [],j,i,t = pt.type;if(!o){
o=(this!==window)? this: pt;}if(booleans(rg)){
//style display to block;
this.style.display = 'block';return this;}
if(rg.search('prop')!=-1){
pt.props(o); return;
}if(rg.search('meth')!=-1){
pt.methods(o); return;
} if(index(rg,type.types)){
var j, msg; for(i in o){
j = o[i];if(ownProp(o, i)){
 if(type(j,rg)){
stk.push(h4+type(j)+': '+i);
	}
}}}pt.Log(stk, false);
return stk;
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

function forEach(fn,o,d){
var l, i = 0; o = o || this;
if(isArrayLike(o)){
l = o.length;for(;i<l;i++){
if(fn.call(d||o[i],i,o[i],o) === false ) { break; } } } 
else { for(i in o){ 
if(ownProp(o, i)){
if(fn.call(d||o[i],i,o[i],o) === false ) { break; }} } } return o; }

function HTML(contnt){var c;
if(strings(contnt)){
	
}
}

function ownProp(z,y){
return Object.prototype.hasOwnProperty.call(z,y);
}
	
function walk(node, func) {
func(node);     
node = node.firstChild;     
while (node) {    
walk(node, func);         
node = node.nextSibling;
} }

////////////////////
//The lifeblood
//Techie.addHandler
mixin(Techie.EventUtil,Techie);
//sapi.Techie(o).each(fn);
sapi.Techie = Techie.sapi;
//life of Techie constructor
Techie.sapi.Techie.  prototype = Techie.sapi;
//Techie.each(fn,r,this)
mixin(Techie.sapi,Techie);
//pt.pt.pt.each(f,r,this)
mixin(Techie.sapi.Techie, Techie.sapi );
//sapi.each(fn,o,this)
mixin(Techie.sapi,sapi);


//Trick Ends
//////////////////////
window.Techie = Techie;
window.sapi = sapi;
window.SAPI = SAPI;
window.pt = Techie;
window.log=function(a,b,c){
	return Techie.Log(a,b,c);
};
window.Log = log;


}(window));

a("Techie Farewell!");

a("The end of Techie");

 function a(a){
try{var foo =	confirm(a);
return foo ? prompt=confirm=alert=foo:!0;
}catch(e){prompt(e);}} 