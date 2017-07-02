pt.ready = function fn(){
//objects,arrays,functions,strings,booleans,numbers,regexps,dates,maths
var o = {
	primitives: function(arg){
	//constructor for all prims
	return arg;
	},
	
	 strings: function(arg){
	//constructor for all strs
	return arg;
	},
	
	 objects: function(arg){
	//constructor for all objs
	return arg;
	},
	
	 arrays: function(arg){
	//constructor for all arrs
	return arg;
	},
	
	 functions: function(arg){
	//constructor for all funcs
	return arg;
	},
	
	 regexps: function(arg){
	//constructor for all rgxps
	return arg;
	},
	
	 maths: function(arg){
	//constructor for all mths
	return arg;
	},
	
	 dates: function(arg){
	//constructor for all dates
	return arg;
	}
};

function Disable(e,ev,bool){
//element, event, boolean
pt.addHandler(e, ev, function foo(ev){
    ev = pt.getEvent(ev);var
 target = pt.getTarget(ev);
 pt(target.getElementById( 'disable' )).each(function(){
 	if(bool === true){
 		this.disabled = true;
 	}else{
 		this.disabled = false;
 	}
 });
 pt.removeHandler(e,ev,foo);
});
}



function InspectArgs(x, b){
var c = pt.lower.call(x),
ctner = [Object, Array, Function, String, Number, Boolean, null, undefined, NaN],ctns = String(ctner).toLowercase().split(/,/);
a(ctns); a(ctns.length);
if(ctns[c]){return true}
return false;
}

extend: function () { 
var src, copyIsArray, copy, name, options, clone, target = arguments[ 0 ] || {}, i = 1, length = arguments.length, 
deep = false; // Handle a deep copy situation
 if ( typeof target === "boolean" ) { deep = target; // skip the boolean and the target 
 target = arguments[ i ] || {}; i++; } // Handle case when target is a string or something (possible in deep copy) 
 if ( typeof target !== "object" && !jQuery.isFunction( target ) ) { target = {}; } // extend jQuery itself if only one argument is passed 
 if ( i === length ) { target = this; i--; } 
 for ( ; i < length; i++ ) { // Only deal with non-null/undefined values 
 if ( ( options = arguments[ i ] ) != null ) { // Extend the base object 
 for ( name in options ) { src = target[ name ]; copy = options[ name ]; // Prevent never-ending loop 
 if ( target === copy ) { continue; } // Recurse if we're merging plain objects or arrays 
 if ( deep && copy && ( jQuery.isPlainObject( copy ) || ( copyIsArray = jQuery.isArray( copy ) ) ) ) { if ( copyIsArray ) { copyIsArray = false; clone = src && jQuery.isArray( src ) ? src : []; } else { clone = src && jQuery.isPlainObject( src ) ? src : {}; } // Never move original objects, clone them 
 target[ name ] = jQuery.extend( deep, clone, copy ); // Don't bring in undefined values 
 } else if ( copy !== undefined ) { target[ name ] = copy; } } } } // Return the modified object return
  target; },

merge: function ( first, second ) { var len = +second.length, j = 0, i = first.length; 
while ( j < len ) {
first[ i++ ] = second[ j++ ];
} // Support: IE<9 // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists) 
if ( len !== len ) {
while ( second[ j ] !== undefined ) { 
first[ i++ ] = second[ j++ ]; } } first.length = i; 
return first; }

function Select(obj, vals){ 
obj = sapi.id(obj);//<select>
var len = obj.options.length,
i = 0, o;for(;i < len; i++ ){
 o = obj.options[i]; 
 if ( values.indexOf(o.value) != -1 ){ o.selected = true; }
  else { o.selected = false; } } }



search: function (o, s){ s=this.explode(arguments,1); var store = [], name, value; for(i in o){ 
	try{ if(o[i].name){ name = o[i].name;
	 }else{name = i;} }catch(e){name = i} 
	 value = o[i]; s.filter(function(e){ if(e === name){ e = ''+name+': '+value; store.push(e); }});} 
	 this.Log(store, false); }

function Search(x,y){
y = y.split(',')[0];
function lower(s){
return Techie.lower.call(s);
}y = lower(y);
if(/\*/.test(y)){
	y = y.split('*')[0];
}
	if(typeof x === 'string'){
x = lower(x).split(',')[0];
 if(x.search(y) != -1){
 	return x;
 }return null;
	}if(x instanceof Array){
	y = Techie.explode(y);
	y.forEach(function(e){
if(lower(e).search(y) != -1){
	stk.push(e);
}
	});
}else{
if(lower(x).search(y)!=-1){
	stk.push(x);
}
}if(stk.length){return stk;}
return null;
}

/*
pt.arrays,pt.objects,pt.strings,pt.numbers,pt.dates,.maths
I just configure the type and
mix with pt 
*/


//loadscripts,On,getInnerText,setInnext,nthchild
function load(fls,p,t,m){
//files,parent,type,mime-type
t = t || 'script';
m = m || 'text/javascript';
p = p || sapi.head;
if(!objects(p)){
	p = sapi.qs(p);
}
	if(isHTML(this)){
p = this;
	}if(strings(fls)){
		fls = fls.split(',');
	}if(arrays(fls)){
		fls = explode(fls);
	}
}
load([],);load(", , , ",);
function dates(d){
	if(this instanceof dates){
var t = new Date();

	}
}
};