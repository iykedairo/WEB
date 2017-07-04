var Anim = function(){
	//body
};
/*Anim.prototype.start = function(){
	alert("Start Working");
};

Anim.prototype.stop = function(){
	alert("Stop Working");
};
*/
//Usage

/*Anim.prototype = {
	stop : function(){
		console.log("stop returns ");
	},

	start : function(){
		console.log("start returns ");
	}
};*/

Function.prototype.method = function(name, fn){
	this.prototype[name] = fn;
	return this;
};

Function.prototype.FN = function(fn){
	this.prototype = fn();
//fun.FN(fn);
//fun's prototype will be strewn with fn's properties through FN
}

Anim.method("START", function(word){
	word = word || "Hello STARTER!";
	console.log(word);
});
Anim.method("STOP", function(word){
	word = word || "Hello! STOPPER!";
	console.log(word);
});

var fns = function(){
	var start = function(){console.log("start returns ");}(),
	stop = function(){console.log("stop returns ");}();

};
//Anim.method("start", fns);
/*Anim.method("start", function(){
	console.log("Anim has a start method implied to it.")
});*/

var myAnim = new Anim();
Anim.prototype.START();
myAnim.STOP();












function PT(){
	Element = function(){

	}
	Element.prototype = {
		Create : function(){console.log("WORKERS TOGETHERS WITH OUR LORD JESUS CHRIST!!");},

	}
}

