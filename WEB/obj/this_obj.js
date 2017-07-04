/*THE this object
Every scope in JavaScript has a this object that represents the calling object for the function. In the global scope, this represents the
global object (window in web browsers). When a function is called while
attached to an object, the value of this is equal to that object by default.
So, instead of directly referencing an object inside a method, you can reference this instead. For example, you can rewrite the code from the previous example to use this:
*/
var person = {
name: "Nicholas",
sayName: function() {
console.log(this.name);
}
};
person.sayName(); // outputs "Nicholas"

/*This code works the same as the earlier version, but this time, sayName()
references this instead of person. That means you can easily change the
name of the variable or even reuse the function on different objects.
*/
function sayNameForAll() {
console.log(this.name);
}
var person1 = {
name: "Nicholas",
sayName: sayNameForAll
};
var person2 = {
name: "Greg",
sayName: sayNameForAll
};
var name = "Michael";
person1.sayName(); // outputs "Nicholas"
person2.sayName(); // outputs "Greg"
sayNameForAll(); // outputs "Michael

/*CHANGING this
Even though this is typically assigned automatically, you can change
its value to achieve different goals. There are three function methods that
allow you to change the value of this.s

*/

//USING call()

function sayNameForAll(label) {
console.log(label + ":" + this.name);
}
var person1 = {
name: "Nicholas"
};
var person2 = {
name: "Greg"
};
var name = "Michael";
sayNameForAll.call(this, "global"); // outputs "global:Michael"
sayNameForAll.call(person1, "person1"); // outputs "person1:Nicholas"
sayNameForAll.call(person2, "person2"); // outputs "person2:Greg"


//USING apply()

function sayNameForAll(label) {
console.log(label + ":" + this.name);
}
var person1 = {
name: "Nicholas"
};
var person2 = {
name: "Greg"
};
var name = "Michael";
sayNameForAll.apply(this, ["global"]); // outputs "global:Michael"
sayNameForAll.apply(person1, ["person1"]); // outputs "person1:Nicholas"
sayNameForAll.apply(person2, ["person2"]); // outputs "person2:Greg



//USING bind()
function sayNameForAll(label) {
console.log(label + ":" + this.name);
}
var person1 = {
name: "Nicholas"
};
var person2 = {
name: "Greg"
};
// create a function just for person1
var sayNameForPerson1 = sayNameForAll.bind(person1);
sayNameForPerson1("person1"); // outputs "person1:Nicholas"
// create a function just for person2
var sayNameForPerson2 = sayNameForAll.bind(person2, "person2");
sayNameForPerson2(); // outputs "person2:Greg"
// attaching a method to an object doesn't change 'this'
person2.sayName = sayNameForPerson1;
person2.sayName("person2"); // outputs "person2:Nicholas"


function Pers(x){
this.x = x;

}


Pers.bind(Object, "name");
alert(name);