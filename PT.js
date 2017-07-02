// JavaScript Document
constructor : Techie,
Techie : function(selector){
if(!selector){return this;}
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

set ready(fn){
	Techie.Ready(fn);
},
set Each(fn, obj, ths){
obj = obj || this;
forEach(fn, obj, ths);
},
get versions(){
	return {
		number: this.version++,
		info: "Release detail"
	};
},
version: 1.00,	
	
	
	Elements: Elements,
	mixinx : mixinx,
	sapi : Techie,
	html : HTML,
	HTML: html,
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
	test : test,
	tests : tests,
	search : search,
	match : match,
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
isElement : isElement,
isHTML : isHTML,
extend: function(O, obj){
//Techie.mixin([O,Techie,sapi], obj);
mixinx(O, obj);
	return this;
},
Extender: function(Rec,Sup){
if(!Rec && !Sup){return null}
var len = arguments.length, SupBl = (Sup instanceof Array || Sup instanceof Object),
RecBl = (Rec instanceof Array || Rec instanceof Object);
if(len && !(len > 2) && SupBl && RecBl){if(len < 2){
 Sup = Rec; Rec = this;
}if(!(Rec instanceof Array)){
 		Rec = new Array(Rec);
}if(!(Sup instanceof Array)){
 		Sup = [Sup]; }var i, j;
 Rec = [].slice.call(Rec);
 	Sup = [].slice.call(Sup);
Rec.forEach(function(R){
	Sup.forEach(function(obj){
		for(j in obj){
if(R instanceof Object && obj instanceof Object && obj.hasOwnProperty(j)){
			R[j] = obj[j]; }
		}
	});
});
}
},
isCollection: function(N){
var ar =((N instanceof Array) || (N instanceof Object)),
e = (Techie.isHTML(N[0])),
len = (N.length === 0);
return (ar && (len || e));
},
isNodeList: function(N){
var len = (N.length === 0),
e = (Techie.isHTML(N[0])),
isNL = ((N instanceof HTMLCollection) || (N instanceof NodeList));
return (isNL && (len || e));
},
ExtractLetters: function(s){
if(arguments){var stk = [];
s = [].slice.call(arguments);
s.forEach(function (s){
	stk.push(String(s));}); 
s = String(stk).split('');
 s = String(s).split(/[\W]*\s*/);
return s;}return '--NIL--';
},


ExtractWords: function(s){
if(arguments){var stk = [];
s = [].slice.call(arguments);
s.forEach(function (s){
	stk.push(String(s));}); 
s = String(stk);
 s = s.split(/[\W]+\s*/);
return s;}return '--NIL--';
},


capitalize: function(s){
if(arguments){ var stk = [],
arr = [].slice.call(arguments);
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
if(arguments){var args = [].slice.call(arguments),
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
this.PrependChild(ee, f);
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
mapped=Techie.ObjectToArray(mapped);
return mapped;
},

ObjectToArray: function(o){
o = Techie.stringifyAll(o,false,false);
return o;
},

searchArray:function(A, Aa){
	var stk = [];
Aa=Techie.explode(arguments,1);Aa = Techie.StripCommas(String(Aa)).split(',')
Aa.forEach(function(e){
if(Techie.indexOf(A,e)!=-1){
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
	var stk = [],i;
for(i in o){
if(o[i] instanceof Function){
	if(o.hasOwnProperty(i)){
		stk.push('<h4>'+(typeof o[i])+': '+i);
	}} stk = stk.sort(this.Alphabetical);
} this.Log(stk, false); 
return stk;
},
StripSpace: function(s){
//x.replace(/(^\s+|\s+$)/g, "")
	return String(s).replace(/\s/g,'');
},

nthChild: function(nth,p){

this.Log(sapi)
},
nth: function(n,p){
var len = arguments.length,
stk = [],leng = stk.length;
if(!len){return null;}
if(len < 2){
if(isHTML(this)){p = this;}
	else{return null;}
} Techie(p).each(function(){
n = this.children[n];
if(n !== null && n !== undefined){
	stk.push(n);
	}
});return (stk[1]) ? stk : stk[0];
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
 j = '<h4>'+i+": "+o[i];
 stk.push(i+': '+o[i]);
 store.push(j);
}}else{
	 j = '<h4>'+i+": "+o[i];
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
s=this.explode(arguments,1);
var store = [], name, value;
for(i in o){
	try{
if(o[i].name){
	name = o[i].name;
	}else{name = i;}
}catch(e){name = i}
value = o[i];
s.filter(function(e){
	if(e === name){
e = '<h4>'+name+': '+value;
		store.push(e);
}});}
this.Log(store, false);
},

indexOf:function(arr,item,S){
//(arr,item,start)
var j, len = arr.length;
S = +S || 0;var count = -1;
if(S < 0){
S += len; if(S < 0){S = 0;}
}if(S >= len){return -1;}
for(;S < len; S++){j =arr[S];
if(item === j){
	count = S;break;}
else if(item === S){count= j;
break;}}
return count !== -1 ? count : -1;
},

Index: function(A,item){
var all = arguments,store={},
stk = [], arr = Techie.explode(all[0]),items = (Techie.isArrayLike(all[1])) ? Techie.explode(all[1]) : String([].slice.call(arguments,1)).split(',');
Techie.each(function(i,e,itms){
Techie.each(function(j,k,o){
if(e == j){store[e] = k;
stk.push(k);}else if(e == k){
store[e] = j; stk.push(j);
}}, arr);if(!(e in store)){
 store[e] = -1; stk.push(-1);
}}, items);if(stk.length==1){
return stk[0]; }return stk;
},

explode: function(arr, n){
	var stk = [];
return function explode(arr, n){
arr = [].slice.call(arr,n || 0);
arr.forEach(function(e, i){
if(!isArrayLike(e)){
 stk.push(e);}else{
arr = e; explode(arr);
}});return stk;
}(arr,n);
},

commaSeparated:function(x){
var comSep = /(?=\w)+?[\w]+\s*\,\s*(\w+|\,)\s*$/;
return comSep.test(x);
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
return !(this.isPresent(e));
		},
isPresent : function(e){
if(isHTML(e)){
return  e.ownerDocument.body.contains(e);
}return false;
	},
isBoolean : function(arg){
return (typeof arg === "boolean");
		},
isFunction : function(e){
 return (typeof e === "function");
		},
isObject : function(e){
return(e instanceof Object);
		},
isArray : function(e){
	return Array.isArray(e) || e instanceof Array;
				},
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
	return (typeof arg === "string");
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
READY: function(func){ 
var args = Array.prototype.slice.call(this, arguments);
var boundReadyFunc = func.bind(this,args.slice(1)); 
if(this.isReady){func(); } else {
 document.addEventListener( "DOMContentLoaded", this.onReady.bind(this, func), false ); } }, 
 
each : function(fn,obj,ths){
	obj = obj || this;
return forEach(fn,obj,ths);
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
pt.Log(store.join(' '));
},
forEach : function(fn,obj,ths){
	obj = obj || this;
return forEach(fn,obj,ths);
},
add:function(x){var total=0;
x = Techie.explode(arguments, 0);
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

isArrayLike : isArrayLike


};




