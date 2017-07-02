(function() {
function forEach(obj, fn){
	obj = obj || this;
	var i, len = obj.length;
for(i = 0; i < len; i++)
fn.call(obj, ibj[i], i, obj);
//this,e,i,e[for reference]
	}
	
function	map(obj, fn){
obj = obj || this;
var i, len = obj.length, 
box = [];
for(i = 0; i < len; i++)
box.push(fn.call(obj, obj[i], i, obj));
}
  // Use a private class.
  function _$(e) {
 this.elements = []; var 
 obj, doc = window.document,
 qs = doc.querySelector,
 qsA = doc.querySelectorAll;
forEach(e, function(a, i, o){
//element, indexOf, Refcopy
obj = e[a];
if(typeof obj ==='string'){
try{
obj = qs(obj);
      }
 catch(e){
 doc.write(e);
}obj = qsA(obj);
}
 this.elements.push(obj);
}return this.elements;
}
_$.prototype = {
each: function(fn, obj) {
obj = obj || this;
var i, len = obj.length;
 for(i = 0; i < len; ++i ) {
fn.call(obj, obj[i], i, obj);
}
 return this;
  },
 setStyle: function(prop, val){
        this.style[prop] = val;
      return this;
    },
    
 css : function(p, v){
	var l = arguments.length;
	if(l == 1){
		//alert("single");
		this.style.cssText = arguments[0];
		}
		else if(l == 2){
	this.style[p] = v;
	}
	else if (l > 2){
alert("please only one or two arguments required");
		}
		else{
			alert("please supply style information in quotes");
			}
	
	return this;
	
	},
    
    show: function() {
 this.css('display:block');
      return this;
    },
    addEvent: function(type, fn) {
 var add = function(el) {
   if (window.addEventListener) {
          el.addEventListener(type, fn, false);
        } 
        else if (window.attachEvent) {
          el.attachEvent('on'+type, fn);
        }
      };
      this.each(function(el) {
        add(el);
      });
      return this;
    }
  };
  window.$ = function() {
    return new _$(arguments);
  };
})();


/* Usage. */

$(window).addEvent('click', function() {
alert(24546889);
  var h1 = $('h1');
  h1.a();
  h1.setStyle('color', 'red').
    addEvent('click', function(e) {
 $(this).setStyle('color', 'green');
    });
});

$.a("The object change.");