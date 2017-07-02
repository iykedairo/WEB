function extend(a,b) {
//John Resig
for ( var i in b ) {
var g = b.__lookupGetter__(i), s = b.__lookupSetter__(i);

if ( g || s ) {
if ( g )
a.__defineGetter__(i, g);
if ( s )
a.__defineSetter__(i, s);
} else
a[i] = b[i];
}
return a;
}

// JavaScript Document
pt.read(function(){
	
	
	
	
	 function Field(val){
var value = val || "Name";

this.__defineGetter__("value", function(){
return value;
});

this.__defineSetter__("value", function(val){
if(typeof val=== 'function'){
		var thisArg = this;
		val  = val.call(thisArg);
		return val;
	}else{
value += val
}
});
} 


function Field(val){
this.value = val;
}

Field.prototype = {
get value(){
return this._value;
},
set value(val){
this._value = val;
},

}
}





var f = new Field();
f.value = function(){
	this.value = " is Michael Iyke";
pt.stringify(this, false);
	};
log(f.value, false);
	
	
	
	 function P(){
	var n = "Michael";
 this.__defineGetter__("n", function(){
return n;
});

this.__defineSetter__("n", function(val){
if(typeof val ==='function'){
var thisArg = this,
val = val.call(thisArg);
n = val;
//return val;
}
	if(typeof val==='number'){
	n = 50;
	n += val; 
	return;
	}
n += val;
});
}





var p = new P();
p.n = " Smith";
p.n = 45;
p.n = function(){
return " Chukwuma ";
};
log(p.n, false)







	
	
	
	
	
	 var Person = {
	get FullName(){
		
	},
	set FullName(names){
		names = names || {};
		return names;
	},
	set FullInfo(object){
		return object;
	},
	set FirstName(name){
		
	},
	set LastName(name){
		
	},
	set MiddleName(name){
		
	},
	set Age(age){
		
	},
	set Address(address){
		
	}
};



});