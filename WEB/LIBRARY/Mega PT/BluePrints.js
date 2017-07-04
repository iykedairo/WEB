!(function(window){
//BluePrint.Js stores import-
//ant methods gotten randomly
//which are necessary to ease
//our breath during productn

var
root = window, document = window.document, sapi = document, SAPI = sapi,
auto = 1, enhanced = 0, 
HTML = 0, html = HTML,
body = SAPI.body || SAPI.createElement("body"),
bd = body[0], Garbage = {},
Store = {}, array = [];

slice = array.slice, 
indexOf = array.indexOf,
sapi.create = sapi.createElement;

sapi.qs = function(x){
	x =
sapi.querySelector ?
 sapi.querySelector(x) :
 sapi.querySelectorAll(x);
return x;
	};
	
	
Object.prototype.a = a;
 function a(a){
	if(a){
		alert(this+ " says "+a);
		}
		else{
			alert(this);
		}
		return this;
			};
	/////// /////////	
		
		 function $() {
  var elements = [];
  for (var i = 0, len = arguments.length; i < len; ++i) {
    var element = arguments[i];
    if (typeof element == 'string') {
      element = document.getElementById(element);
    };
    if (arguments.length == 1) {
      return element;
    }
    elements.push(element);
  }
  return elements;
}

		
		
function	_pt(e){	
var elems, i, l = e.length;
elems = this.elems = [];

	for(i = 0; i < l; i++){
		var el = e[i];
		if(typeof el == "string")
		{
			el = SAPI.qs(el);
			elems.push(el);
			//a(elems);
			return el;
		}
		else{
			elems.push(el);
			//a(elems);
			return this;
		}
		}
	}
	
	
	
	_pt.prototype = {
	
		enhanced : false,
		auto : auto,
		hidden : false,
		visible : true,
		empty : true,
		delete : false,
		deleted : true,
		restore : true,
		undo : true,
		redo : true,
		each : enhanced,
		
		isDeleted : false,
		isUndoable : true,
		isRestored : true,
		isEmpty : true,
		isEnhanced : true,
		isAuto : false,
		isVisible : false,
		isHidden : true,
		isSet : true,
		
		display : function(ar){
			this.style.display = (arguments === !1) ? "none" : (arguments === !!1) ? "block" : arguments;
			return this;
		},
		show : function(){
	this.style.display = "block";
		return this;
		},
		replace : false,
		parseHTML : auto,
		parseCSS : auto,
		parseFloat : auto,
		parseInt : auto,

		
	css : 0,
	style : this.css,
	css : true,
	HTML : HTML,
	html: HTML,
  Garbage : Garbage,
  Store : Store,
   
//everything SAPI should go into the global SAPI so they can be accessed anywhere in the code. here should just act as a pointer for external access.
	SAPI : sapi,
	sapi : sapi,
	//_pt intrinsic methods
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
	keys : function(e){
	e = event || window.event;
	switch(e.keyCode) {
       case 13: //enter
       "";
      break;

     case 96: //esc
  " ";
    break;

  case 32: //space bar
  " ";
    break;

	case 16: //shift
	" ";
    break;

   case 8: //backspace
   "";
   break;

        }
	},
	
	on : {
	event : "event",
  e : event || window.event,
	Enter : function(){
			e.keyCode == 13;
			return this;
			}
		},
		
		
	
	done : true
		
		
		
};
	
	
	
function isArray(e){
 if(Array.isArray(e)){
 	return true;
 }
 var r = Object.prototype.toString.call(e);
 if(r === "[objsct HTMLCollection]" || r === "[object NodeList]"){
 	return true;
 }

if(typeof e !== "object" || !e.hasOwnProperty("length") || e.length < 0){
	return false;
}
if(e.length === 0){
	return true;
}
else if(e[0] && e[0].nodeType){
	return true;
}
return false;
}

	
	
	//This patter cannot allow for calls such as PT.method. 
//To achieve it, PT has to be directly assigned not returned. 
//WE THEREFORE OWE TO USE try catch TO FIX IT WELL TO FAVOR BOTH CASES.
	window.PT = function foo(){
	return new _pt(arguments);		};
	//	PT.a();
		
	})(window);
	
	var p = PT().sapi.create("p");
	
	//p.a();
	//alert(document.scripts[0].src);