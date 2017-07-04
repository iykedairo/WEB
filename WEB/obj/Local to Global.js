/*
LOCAL VARIABLE TO GLOBAL VARIABLE

Make sure to always call constructors with new; otherwise, you risk
changing the global object instead of the newly created object. Consider
what happens in the following code:s
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

var person1 = Person("Nicholas"); // note: missing "new"
console.log(person1 instanceof Person); // false
console.log(typeof person1); // "undefined"
console.log(name); // "Nicholas"




/*
When Person is called as a function without new, the value of this
inside of the constructor is equal to the global this object. The variable
person1 doesn’t contain a value because the Person constructor relies on
new to supply a return value. Without new, Person is just a function without
a return statement. The assignment to this.name actually creates a global
www.it-ebooks.infoConstructors and Prototypes 53
variable called name, which is where the name passed to Person is stored.
Chapter 6 describes a solution to both this problem and more complex
object composition patterns.
n o T e An error occurs if you call the Person constructor in strict mode without using new.
This is because strict mode doesn’t assign this to the global object. Instead, this
remains undefined, and an error occurs whenever you attempt to create a property
on undefined.

*/