(function TechieFunctionShims(){
//Techie API Function Shims	for back compatibilty
if(!Function.prototype.bind){
Function.prototype.bind = function bind(f, obj, var_args) {
    var a = slice.call(arguments, 2);
    return function() {
      return f.apply(obj, a.concat(slice.call(arguments)));
    };
  }
  
  
  function bind(f, obj, var_args){
	  return function(){
		  return f.apply(obj, slice.call(bind.arguments, 2).concat(slice.call(foo.arguments)));
	  }
  }
  }

if (!Array.prototype.forEach) { 
   Array.prototype.forEach = function forEach(fn){ 
     for ( var i = 0; i < this.length; i++ ) { 
       fn.call(thisArg || this[i], i, this[i], this ); 
     } 
   }; 
 } 


  //END Tchie Function Shims
})