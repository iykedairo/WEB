pt.ready = function fn(){

if(objects(s) || primitives(s)){
	HandleGeneric();
	return;
}
 
 
 
var plain = {};
plain.style " g:h; h:d";
set styles(css){
	this.css(css, this);
}

set addEvent(a, b, c){
	this.addHandler(a, b, c);
}



/*


function nthChild(p, nthCh){
var nthChild;
pt(p).Each = function(){
	//a(this
};

Techie(p).each(fn);
function fn(){ a(this)
nthChild = this.children[nthCh || 0];
return nthChild;

}
var nt = nthChild('p');




function InspectArgs(x, b){
var c = pt.lower.call(x),
ctner = [Object, Array, Function, String, Number, Boolean, null, undefined, NaN],ctns = String(ctner).toLowercase().split(/,/);
a(ctns); a(ctns.length);
if(ctns[c]){return true}
return false;
}





*/ Techie.ready = function(){
var str = pt.stringify;
a = a.a;
log(this)

 function foo(){a(this.SAPI)};
function food(){a("Food")}
function fruit(){a("Fruit")}
function bar(){a("Bar")}
function baz(){a("Baz")}
var num = 50, obj = {},
arr = [], bool = !0;
arr.push(foo,bar,baz); var

function search(o, s){
var i;stk = []; for(i in o){
	if(i === o){
		stk.push(i+': '+o[i]);
	}
}return stk;
}

search: function(o, s){
s=this.explode(arguments, 1);
var store = [], name, value;
for(i in o){name = o[i].name;
value = o[i];
s.filter(function(e){
	if(e === name){
e = '<h4>'+name+': '+value;
		store.push(e);
}});}
this.log(store, false);
},

explode: function(arr, n){
	var stk = [];
return function explode(arr, n){
arr = [].slice.call(arr,n || 0);
arr.forEach(function(e, i){
if(!this.isArrayLike(e)){
 stk.push(e);}else{
arr = e; explode(arr);
}});return stk;
}(arr,n);
},


var A = ["Dos:true,Donts:true,auto:false,remember:false"];

a(this)


function StripCommas(str){
return str.replace(/\,+(,|\s\,+|$)/g, ',');
}

var b = sapi.id('dis');
str(b.previousSibling.outerHTML)
b.forEach(function(e){
	//a(e.children[0])
});
var n = pt.nth(0, "p");

//a(n)
extend: function () { var src, copyIsArray, copy, name, options, clone, target = arguments[ 0 ] || {}, i = 1, length = arguments.length, deep = false; // Handle a deep copy situation if ( typeof target === "boolean" ) { deep = target; // skip the boolean and the target target = arguments[ i ] || {}; i++; } // Handle case when target is a string or something (possible in deep copy) if ( typeof target !== "object" && !jQuery.isFunction( target ) ) { target = {}; } // extend jQuery itself if only one argument is passed if ( i === length ) { target = this; i--; } for ( ; i < length; i++ ) { // Only deal with non-null/undefined values if ( ( options = arguments[ i ] ) != null ) { // Extend the base object for ( name in options ) { src = target[ name ]; copy = options[ name ]; // Prevent never-ending loop if ( target === copy ) { continue; } // Recurse if we're merging plain objects or arrays if ( deep && copy && ( jQuery.isPlainObject( copy ) || ( copyIsArray = jQuery.isArray( copy ) ) ) ) { if ( copyIsArray ) { copyIsArray = false; clone = src && jQuery.isArray( src ) ? src : []; } else { clone = src && jQuery.isPlainObject( src ) ? src : {}; } // Never move original objects, clone them target[ name ] = jQuery.extend( deep, clone, copy ); // Don't bring in undefined values } else if ( copy !== undefined ) { target[ name ] = copy; } } } } // Return the modified object return target; },

merge: function ( first, second ) { var len = +second.length, j = 0, i = first.length; while ( j < len ) { first[ i++ ] = second[ j++ ]; } // Support: IE<9 // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists) if ( len !== len ) { while ( second[ j ] !== undefined ) { first[ i++ ] = second[ j++ ]; } } first.length = i; return first; }


};