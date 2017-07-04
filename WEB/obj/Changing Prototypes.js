//Changing Prototypes
//Built-in Object Prototypes

Array.prototype.sum = function() {
return this.reduce(function(previous, current) {
return previous + current;
});
};
var numbers = [ 1, 2, 3, 4, 5, 6 ];
var result = numbers.sum();
console.log(result); // 21


String.prototype.capitalize = function() {
return this.charAt(0).toUpperCase() + this.substring(1);
};
var message = "hello world!";
console.log(message.capitalize()); // "Hello world!

/*
summary
Constructors are just normal functions that are called with the new operator. You can defne your own constructors anytime you want to create
multiple objects with the same properties. You can identify objects created
from constructors using instanceof or by accessing their constructor property directly.
Every function has a prototype property that defnes any properties
shared by objects created with a particular constructor. Shared methods
and primitive value properties are typically defned on prototypes, while
all other properties are defned within the constructor. The constructor
property is actually defned on the prototype because it is shared among
object instances.
The prototype of an object is stored internally in the [[Prototype]]
property. This property is a reference, not a copy. If you change the
prototype at any point in time, those changes will occur on all instances
because of the way JavaScript looks up properties. When you try to access
a property on an object, that object is searched for any own property with
the name you specify. If an own property is not found, the prototype is
searched. This searching mechanism means the prototype can continue
to change, and object instances referencing that prototype will reﬂect
those changes immediately.
Built-in objects also have prototypes that can be modifed. While it’s
not recommended to do this in production, it can be helpful for experimentation and proofs of concept for new functionality
*/