//constructors
/*
A constructor is simply a function that is used with new to create an object.
Up to this point, you’ve seen several of the built-in JavaScript constructors, such as Object, Array, and Function. The advantage of constructors is
www.it-ebooks.info50 Chapter 4
that objects created with the same constructor contain the same properties and methods. If you want to create multiple similar objects, you can
create your own constructors and therefore your own reference types.
Because a constructor is just a function, you defne it in the same way.
The only difference is that constructor names should begin with a capital
letter, to distinguish them from other functions. For example, look at the
following empty Person function:
*/

function Person() {
// intentionally empty
}
//Instances of Person object type.
var person1 = new Person();
var person2 = new Person();

//OR

var person1 = new Person;
var person2 = new Person;

console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true

console.log(person1.constructor === Person); // true
console.log(person2.constructor === Person); // true

/*
Of course, an empty constructor function isn’t very useful. The whole
point of a constructor is to make it easy to create more objects with the
same properties and methods. To do that, simply add any properties you
want to this inside of the constructor, as in the following example:
*/

function Person(name) {
 this.name = name;
 this.sayName = function() {
console.log(this.name);
};
}

/*Return value

There’s no need to return a value from the function because the
new operator produces the return value.

You can also explicitly call return inside of a constructor. If the returned value
is an object, it will be returned instead of the newly created object instance. If the
returned value is a primitive, the newly created object is used and the returned
value is ignored
*/

var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log(person1.name); // "Nicholas"
console.log(person2.name); // "Greg"
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"


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