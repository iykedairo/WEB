!function(){

	function mixin(receiver, supplier) {
			Object.keys(supplier).forEach(function(property) {
			var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
			Object.defineProperty(receiver, property, descriptor);
			});
			return receiver;
			}

		Function.prototype.FN = function(fn){
		mixin(this.prototype, fn)
		return this;
	};

var Main = {
	married : true,
		single : function(){alert("SINGLE FOLK!!!!!!!!!!!!")},
		isObject : true,
		isFinite : false
	};
//Remarkable
//_Prize.FN(Main);
//mixin(_Prize, Main);

function _Prize(){

}

_Prize.prototype = {
 sound : function(){
	alert("Working");

},

	//Query Selectors
qs: (function(x){
	if (document.querySelector) {
return document.querySelector(x);
	}
	else if(document.querySelectorAll){
		return document.querySelectorAll(x);
	}
}),

//Element By id
id: (function(x){
	return document.getElementById(x);
}),

//Elements By Tagname
tag: (function(a){
	return document.getElementsByTagName(a);
}),
//OTHERS {getElementsByClass, etc	}
names : (function(x){
	return document.getElementsByName(x);
}),
class : (function(x){
	return document.getElementsByClass(x);
})

//END   END   END   END   END   END   END   END   END   END   END   END

};

window.Prize = window.Techie = window.PT = new _Prize;

//Prize.single();

return Prize;
}();



	/*var useless = function(){
		function _$(){
			var i = 0, len = 0;
			this.single = true;
			this.isElement = function(){
				alert("What do you wnat brother?");
			};
		}
		// class_name.prototype.method_name = function(first_argument) {
		// 	// body...
		// };
		

		_$.prototype = {
			Create : function(){
				var arr = [], j;
				var i = 0;
				 var len = 10;
				 for (i; i < len; i++) {
				 	j = i + " : " + len[i];
				 	arr.push(j);
				
				 
				}
			console.log(arr);
			}
		};

_$.prototype.method = function(){
			alert("tHIS IS GREAT NEWS!");
		};


window.P = new _$();
	P.method();
	P.Create();}
*/