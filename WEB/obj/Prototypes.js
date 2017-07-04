/*

Constructors allow you to confgure object instances with the same
properties, but constructors alone don’t eliminate code redundancy.
In the example code thus far, each instance has had its own sayName()
method even though sayName() doesn’t change. That means if you have
100 instances of an object, then there are 100 copies of a function that
do the exact same thing, just with different data.
It would be much more effcient if all of the instances shared one
method, and then that method could use this.name to retrieve the appropriate data. This is where prototypes come in


*/

function Person(name) {
Object.defineProperty(this, "name", {
get: function() {
return name;
},
set: function(newName) {
name = newName;
},
enumerable: true,
configurable: true
});
this.sayName = function() {
console.log(this.name);
};
}

var person1 = Person("Nicholas"); // note: missing "new" that makes content of Person all Global
console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas

//Prototypes

var book = {
title: "The Principles of Object-Oriented JavaScript"
};
console.log("title" in book); // true
console.log(book.hasOwnProperty("title")); // true
console.log("hasOwnProperty" in book); // true
console.log(book.hasOwnProperty("hasOwnProperty")); // false
console.log(Object.prototype.hasOwnProperty("hasOwnProperty")); // true

/*ide n T if y ing a ProToT y Pe ProPe r T y
You can determine whether a property is on the prototype by using a function such as:
*/
function hasPrototypeProperty(object, name) {
return name in object && !object.hasOwnProperty(name);
}
console.log(hasPrototypeProperty(book, "title")); // false
console.log(hasPrototypeProperty(book, "hasOwnProperty")); // true

/*If the property is in an object but hasOwnProperty() returns false, then
the property is on the prototype*/

//The [[Prototype]] Property

var object = {};
var prototype = Object.getPrototypeOf(object);
console.log(prototype === Object.prototype); // true

var object = {};
console.log(Object.prototype.isPrototypeOf(object)); // true

var object = {};
u console.log(object.toString()); // "[object Object]"
object.toString = function() {
return "[object Custom]";
};
v console.log(object.toString()); // "[object Custom]"
// delete own property
delete object.toString;
www.it-ebooks.info56 Chapter 4
w console.log(object.toString()); // "[object Object]"
// no effect - delete only works on own properties
delete object.toString;
console.log(object.toString()); // "[object Object]"

//Using Prototypes with Constructors

/*
The shared nature of prototypes makes them ideal for defning methods
once for all objects of a given type. Because methods tend to do the same
thing for all instances, there’s no reason each instance needs its own set
of methods.
It’s much more effcient to put the methods on the prototype and
then use this to access the current instance. For example, consider the
following new Person constructor:
*/

function Person(name) {
this.name = name;
}
u Person.prototype.sayName = function() {
console.log(this.name);
};
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log(person1.name); // "Nicholas"
console.log(person2.name); // "Greg"
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"

/*You can also store other types of data on the prototype, but be careful when using reference values. Because these values are shared across
instances, you might not expect one instance to be able to change values
that another instance will access. This example shows what can happen
when you don’t watch where your reference values are pointing:*/

function Person(name) {
this.name = name;
}
Person.prototype.sayName = function() {
console.log(this.name);
};
 Person.prototype.favorites = [];
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
person1.favorites.push("pizza");
person2.favorites.push("quinoa");
console.log(person1.favorites); // "pizza,quinoa"
console.log(person2.favorites); // "pizza,quinoa"


function Person(name) {
this.name = name;
}
Person.prototype = {
u sayName: function() {
console.log(this.name);
},
v toString: function() {
return "[Person " + this.name + "]";
}
};


/*
This code defnes two methods on the prototype, sayName() u and
toString() v. This pattern has become quite popular because it eliminates
the need to type Person.prototype multiple times. There is, however, one
side effect to be aware of:
*/

var person1 = new Person("Nicholas");
console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // false
u console.log(person1.constructor === Object); // true

/*Using the object literal notation to overwrite the prototype changed
the constructor property so that it now points to Object u instead of Person.
This happened because the constructor property exists on the prototype,
not on the object instance. When a function is created, its prototype property is created with a constructor property equal to the function. This
pattern completely overwrites the prototype object, which means that
constructor will come from the newly created (generic) object that was
assigned to Person.prototype. To avoid this, restore the constructor property to a proper value when overwriting the prototype:*/

function Person(name) {
this.name = name;
}
Person.prototype = {
u constructor: Person,
sayName: function() {
console.log(this.name);
},
toString: function() {
return "[Person " + this.name + "]";
}
};
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // true
console.log(person1.constructor === Object); // false
console.log(person2 instanceof Person); // true
console.log(person2.constructor === Person); // true
console.log(person2.constructor === Object); // false

/*IN THIS EXAMPLE, THE CONSTRUCTOR PROPERTY IS SPECIFCALLY ASSIGNED
ON THE PROTOTYPE U. IT’S GOOD PRACTICE TO MAKE THIS THE FRST PROPERTY ON
THE PROTOTYPE SO YOU DON’T FORGET TO INCLUDE IT.
PERHAPS THE MOST INTERESTING ASPECT OF THE RELATIONSHIPS AMONG
CONSTRUCTORS, PROTOTYPES, AND INSTANCES IS THAT THERE IS NO DIRECT LINK
BETWEEN THE INSTANCE AND THE CONSTRUCTOR. THERE IS, HOWEVER, A DIRECT
LINK BETWEEN THE INSTANCE AND THE PROTOTYPE AND BETWEEN THE PROTOTYPE
AND THE CONSTRUCTOR.*/

//Changing Prototypes

/*Because all instances of a particular type reference a shared prototype,
you can augment all of those objects together at any time. Remember, the
[[Prototype]] property just contains a pointer to the prototype, and any
changes to the prototype are immediately available on any instance referencing it. That means you can literally add new members to a prototype
at any point and have those changes reﬂected on existing instances, as in
this example:*/

function Person(name) {
this.name = name;
}

Person.freeze();

Person.prototype = {
constructor: Person,
u sayName: function() {
console.log(this.name);
},
v toString: function() {
return "[Person " + this.name + "]";
}
};
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log("sayHi" in person1); // false
console.log("sayHi" in person2); // false
// add a new method
 Person.prototype.sayHi = function() {
console.log("Hi");
};
person1.sayHi(); // outputs "Hi"
person2.sayHi(); // outputs "Hi"

//BETER WAY TO IT

function Person(name) {
this.name = name;
}
Person.prototype = {
u sayName: function() {
console.log(this.name);
},
v toString: function() {
return "[Person " + this.name + "]";
}
};

////////////////////////
function Person(name) {
this.name = name;
}
Person.prototype = {
u constructor: Person,
sayName: function() {
console.log(this.name);
},
toString: function() {
return "[Person " + this.name + "]";
}
};
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // true
console.log(person1.constructor === Object); // false
console.log(person2 instanceof Person); // true
console.log(person2.constructor === Person); // true
console.log(person2.constructor === Object); // false