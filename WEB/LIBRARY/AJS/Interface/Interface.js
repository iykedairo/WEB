// Constructor

;
(function(window, undefined){
var document = window.document,
body = document.body || document.createElement("body"), html = document.documentElement, head = document.head,
 url = document.URL, BaseURI = document.baseURI, URI = document.documentURI, element = typeof document.nodeType === 2;
})(window);
document.writeln(document.URL);
var Interface = function(name, methods) {
    if(arguments.length != 2) {
        document.writeln("Interface constructor called with " + arguments.length
          + "arguments, but expected exactly 2.");
    }
    
    this.name = name;
    this.methods = [];
var i, len = methods.length;
    for(i = 0; i < len; i++) {
        if(typeof methods[i] !== 'string') {
            document.writeln("Interface constructor expects method names to be " 
              + "passed in as a string.");
        }
        this.methods.push(methods[i]);        
    }    
};    

// Static class method.

Interface.ensureImplements = function(object) {
    if(arguments.length < 2) {
        document.writeln("Function Interface.ensureImplements called with " + 
          arguments.length  + "arguments, but expected at least 2.");
    }
var i,  len = arguments.length;  
  for( i = 1; i < len; i++) {
        var interface = arguments[i];
        if(interface.constructor !== Interface) {
            document.writeln("Function Interface.ensureImplements expects arguments "   
              + "two and above to be instances of Interface.");
        }
        var j, methodsLen = interface.methods.length;
        for(j = 0; j < methodsLen; j++) {
       var method = interface.methods[j];
            if(!object[method] || typeof object[method] !== 'function') {
                document.writeln("Function Interface.ensureImplements: object " 
                  + "does not implement the " + interface.name 
                  + " interface. Method " + method + " was not found.");
            }
else if(object[method] || typeof object[method] === 'function') {
Err("Good Job!");
	}
        }
    } 
};

var Int = new Interface("add", "remove"),
Fl = new Interface("", "");
function add(){
	document.writeln(1000);
}
function remove(){
	document.writeln("20 - 5");
}

!function(show){
	Interface.ensureImplements("Int", ["Fl"]);
}();