Object.prototype.css = function(p, v){
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
	
	};
var a = function(a){
return alert(a);

};
var sapi = {};
sapi.qs  = function (x){
return document.querySelector(x);
};

sapi.create  = function (x){
return document.createElement(x);
};
var input = sapi.qs('#search');
var val = input.value;
var place = input.placeholder;
var article = sapi.qs("article");
var X = sapi.qs("#X");
var h2 = sapi.qs("#h20");
function hide(e){
	e.css("display:none");
	return this;
	}
	
	function isFocused(e){	 
if	( e === e.focus){
	alert("e is currently focused");
		return !!true;
		}
		else{
			alert("e does not have focus");
			return !!false;
			}
		return this;
		}
	hide(X);
	var d = sapi.qs("div");
	
	if(isFocused(input)){
		alert("focused");
X.css(" position:absolute; left : 23.3%; top: 2.75%; font-size:12px; font-family: helvetica; color:cyan; display: inline;");
}

else{
	hide(X);
	}

X.addEventListener("click", fn);

function fn(){
	input.value = "";
	place = "Search or URL";
	X.css("color", "orange");
	}