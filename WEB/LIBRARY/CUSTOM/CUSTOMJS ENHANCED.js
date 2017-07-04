/*!(function(){
	var log =  function(x){console.log(x)};
function _Prize(){

}

_Prize.prototype = {
 sound : function(){
 	alert("We are on course!");
 	return this;
 }
};

//log(_Prize);

window.PT = function(){
	return new _Prize();
};
var PT = window.PT;
return PT;
})();*/

(function() {
   function _$(els) {
    this.elements = [];
    for (var i = 0, len = els.length; i < len; ++i) {
      var element = els[i];
      if (typeof element == 'string') {
        element = document.getElementById(element);
      }
      this.elements.push(element);
    }
  }
  _$.prototype = {
    each: function(fn) {
      for ( var i = 0, len = this.elements.length; i < len; ++i ) {
        fn.call(this, this.elements[i]);
      }
      return this;
    },
    setStyle: function(prop, val) {
      this.each(function(el) {
        el.style[prop] = val;
      });
      return this;
    },
    show: function() {
      var that = this;
      this.each(function(el) {
        that.setStyle('display', 'block');
      });
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

$(window).addEvent('load', function() {
  $('test-1', 'test-2').show().
    setStyle('color', 'red').
    addEvent('click', function(e) {
      $(this).setStyle('color', 'green');
    });
});
