(function(){function _$(els){
this.elements = [];
var i,l = els.length,element;
for(i = 0; i < l; i++){
element = els[i];
if(typeof element=='string') {element = document.querySelector(element);}
this.elements.push(element);}
return this.elements
}
  
  _$.prototype = {
each: function(fn) {
for ( var i = 0, len = this.elements.length; i < len; ++i ){
fn.call(this,this.elements[i]);}
return this;
    },
 setStyle: function(prop, val){
this.style[prop] = val;
return this;
},
css : function(p, v){
var l = arguments.length;
if(l == 1){
this.style.cssText=arguments[0];}else if(l == 2){
	this.style[p] = v;
	}else if (l > 2){
alert("please only one or two arguments required");
}else{
alert("please supply style information in quotes");
}return this;
},
show: function() {
this.css('font-size:5em;color:red');
return this;
},
addEvent: function(type, fn){
this.each(function(el) {
var add = function(el){
if(window.addEventListener){
el.addEventListener(type, fn, false);} 
else if(window.attachEvent){
el.attachEvent('on'+type, fn);}};
add(el);});
return this;
}
};
pt.mixin(_$, _$.prototype);
var $ = window.$= function(){
    return new _$(arguments);
  };
  return $;
})();


/* Usage. */
/*
$(window).addEvent('click', function() {
alert(24546889);
  var h1 = $('h1');
  h1.a();
  h1.setStyle('color', 'red').
    addEvent('click', function(e) {
 $(this).setStyle('color', 'green');
    });
});
*/