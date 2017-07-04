// top-level namespace being assigned an object literal
var myApp = myApp || {};

// a convenience function for parsing string namespaces and
// automatically generating nested namespaces
function extend( ns, nsStr) {
var 
parts = nsStr.split('.'),
parent = ns, pl, i;
if (parts[0] == "myApp") {
 parts = parts.slice(1);
    }
pl = parts.length;
 for (i = 0; i < pl; i++) {
        //create a property if it doesnt exist
if (typeof parent[parts[i]] == 'undefined') {
parent[parts[i]] = {};
        }
 parent = parent[parts[i]];
    }

    return parent;
}

// sample usage:
// extend myApp with a deeply nested namespace
var mod = extend(myApp, 'myApp.modules.module2');
// the correct object with nested depths is output
console.log(mod);
// minor test to check the instance of mod can also
// be used outside of the myApp namesapce as a clone
// that includes the extensions
console.log(mod == myApp.modules.module2); //true
// further demonstration of easier nested namespace
// assignment using extend
extend(myApp, 'moduleA.moduleB.moduleC.moduleD');
extend(myApp, 'longer.version.looks.like.this');
console.log(myApp);

var Main = {};
main.Element = function{};
Main.Element.prototype = {
	isTrue : function(bool){
		if(bool === 1){
			return true;
		}
		return false;
	}
};



var 
application = {utilities:{
drawing:{canvas:{d2:{ }} }}};

// extend.js
// written by andrew dupont, optimized by addy osmani
function extend(dest, src) {
 var 
toString = Object.prototype.toString,
obj = toString.call({});
for(var prop in src){
if(src[prop] && obj == toString.call(src[prop])) {
dest[prop] = src[prop] || {};           extend(dest[prop],src[prop]);
     } else {
 dest[prop] = src[prop];
        }
    }
    return dest;
};


console.group("objExtend namespacing tests");

// define a top-level namespace for usage
var myNS = myNS || {};

// 1. extend namespace with a 'utils' object
extend(myNS, {
        utils:{
        }
});

console.log('test 1', myNS);
//myNS.utils now exists

// 2. extend with multiple depths (namespace.hello.world.wave)
extend(myNS, {
                hello:{
                        world:{
                                wave:{
                                    test: function(){
                                        /*...*/
                                    }
                                }
                        }
                }
});

// test direct assignment works as expected
myNS.hello.test1 = 'this is a test';
myNS.hello.world.test2 = 'this is another test';
console.log('test 2', myNS);

// 3. what if myNS already contains the namespace being added
// (eg. 'library')? we want to ensure no namespaces are being
// overwritten during extension

myNS.library = {
        foo:function(){}
};

extend(myNS, {
        library:{
                bar:function(){
                    /*...*/
                }
        }
});

// confirmed that extend is operating safely (as expected)
// myNS now also contains library.foo, library.bar
console.log('test 3', myNS);


// 4. what if we wanted easier access to a specific namespace without having
// to type the whole namespace out each time?.

var shorterAccess1 = myNS.hello.world;
shorterAccess1.test3 = "hello again";
console.log('test 4', myNS);
//success, myApp.hello.world.test3 is now 'hello again'

console.groupEnd();

var namespace = (function () {

    // defined within the local scope
    var privateMethod1 = function () { /* ... */ }
    var privateMethod2 = function () { /* ... */ }
    var privateProperty1 = 'foobar';

    return {
        // the object literal returned here can have as many
        // nested depths as you wish, however as mentioned,
        // this way of doing things works best for smaller,
        // limited-scope applications in my personal opinion
        publicMethod1: privateMethod1,

        //nested namespace with public properties
        properties:{
            publicProperty1: privateProperty1
        },

        //another tested namespace
        utils:{
            publicMethod2: privateMethod2
        }
        ...
    }
})();