Object.prototype.a = function(a){
a = 	(typeof a !== "undefined") ? a : a+ this.constructor;

	alert(a);
}

var pt = function(s){
return new pt.fn.init(s);
};
pt.fn = pt.prototype = {
	s: null,
	c : null,
	constructor : pt,
	init : init,
};
pt.fn.init.prototype = pt.fn;
mixin(pt, pt.fn);
function init(s, c){
	
}

var jQuery = function( selector, context ) { // The jQuery object is actually just the init constructor 'enhanced' 
return new jQuery.fn.init( selector, context ); 

}; 
jQuery.fn = jQuery.prototype = { 
constructor: jQuery, 
context: null, 
isReady: null, 
init: function( selector, context ) { if (selector === document){ 
this.context = document; this.selector = document; 
} 
console.log(this); 
return this; 

}, 

ready: function(func){ 
var args = Array.prototype.slice.call(this, arguments), boundReadyFunc = func.bind(this, args.slice(1)); if (this.isReady){ func(); } else { document.addEventListener( "DOMContentLoaded", this.onReady.bind(this, func), false ); } }, 

onReady: function(func){ console.log("onready"); this.isReady = true; func.call(this); }, 

}; 

jQuery.fn.init.prototype = jQuery.fn;
mixin(jQuery, jQuery.fn);
 jQuery.ready(function(){ //alert("Hey, here I am"); });
