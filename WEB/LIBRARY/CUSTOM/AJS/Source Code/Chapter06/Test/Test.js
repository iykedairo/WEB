(function(){
	//Authored by Nicholas Zakas
	function mixin(receiver, supplier) {
			Object.keys(supplier).forEach(function(property) {
			var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
			Object.defineProperty(receiver, property, descriptor);
			});
			return receiver;
			}
	var obj = {
		married : true,
		single : function(){alert("SINGLE FOLK!!!!!!!!!!!!")},
		isObject : true,
		isFinite : false
	};
	
	Function.prototype.method = function(name, fn){
		this.prototype[name] = fn;
		
	};
	
	Function.prototype.FN = function(fn){
		mixin(this.prototype, fn);
		return this;
		};
	s.FN(obj);
	
	function s(){
	console.log(s);
}		

s.fn = function(){
	console.log(s.fn);
};

s.fn.foo = function(){
	console.log(s.fn.foo);
};
var ref = new S();
ref.single();
console.log(ref.married);


window.s = s;
	return s;
})();
