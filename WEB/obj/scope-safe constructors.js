function Person(name) {
this.name = name;
}
Person.prototype.sayName = function() {
console.log(this.name);
};
u var person1 = Person("Nicholas"); // note: missing "new"
console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas"

/*In this case, name is created as a global variable because the Person constructor is called without new u. Keep in mind that this code is running
in nonstrict mode, as leaving out new would throw an error in strict mode.
The fact that the constructor begins with a capital letter usually indicates
that it should be preceded by new, but what if you want to allow this use
case and have the function work without new? Many built-in constructors,
such as Array and RegExp, also work without new because they are written
to be scope safe. A scope-safe constructor can be called with or without new
and returns the same type of object in either case.
When new is called with a function, the newly created object represented by this is already an instance of the custom type represented by
the constructor. So you can use instanceof to determine whether new was
used in the function call:*/

function Person(name) {
if (this instanceof Person) {
// called with "new"
} else {
// called without "new"
}
}


/*Using a pattern like this lets you control what a function does based
on whether it’s called with new or without. You may want to treat each circumstance differently, but you’ll often want the function to behave the
same way (frequently, to protect against accidental omission of new). A
scope-safe version of Person looks like this:*/


function Person(name) {
if (this instanceof Person) {
this.name = name;
} else {
return new Person(name);
}
}

/*For this constructor, the name property is assigned as always when
new is used. If new isn’t used, the constructor is called recursively via new
to create a proper instance of the object. In this way, the following are
equivalent:*/

var person1 = new Person("Nicholas");
var person2 = Person("Nicholas");
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true

/*Creating new objects without using the new operator is becoming more
common as an effort to curb errors caused by omitting new. JavaScript itself
has several reference types with scope-safe constructors, such as Object,
Array, RegExp, and Error.*/


