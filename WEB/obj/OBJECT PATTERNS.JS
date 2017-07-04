//PRIVATE AND PRIVILEGED MEMBERS

/*All object properties in JavaScript are public, and there’s no explicit way
to indicate that a property shouldn’t be accessed from outside a particular object. At some point, however, you might not want data to be public.
For example, when an object uses a value to determine some sort of state,
modifying that data without the object’s knowledge throws the state management process into chaos. One way to avoid this is by using naming
conventions. For example, it’s quite common to prefx properties with an
underscore (such as this._name) when they are not intended to be public.
However, there are ways of hiding data that don’t rely on convention and
are therefore more “bulletproof” in preventing the modifcation of private information.*/


/*The Module Pattern


The module pattern is an object-creation pattern designed to create singleton objects with private data. The basic approach is to use an immediately
invoked function expression (IIFE) that returns an object. An IIFE is a function expression that is defned and then called immediately to produce a
result. That function expression can contain any number of local variables
that aren’t accessible from outside that function. Because the returned
object is defned within that function, the object’s methods have access
to the data. (All objects defned within the IIFE have access to the same
local variables.) Methods that access private data in this way are called
privileged methods. Here’s the basic format for the module pattern:*/


var yourObject = (function() {
// private data variables
return {
// public methods and properties
};
 }());

/*
In this pattern, an anonymous function is created and executed
immediately. (Note the extra parentheses at the end of the function u.
You can execute anonymous functions immediately using this syntax.)
That means the function exists for just a moment, is executed, and then
is destroyed. IIFEs are a very popular pattern in JavaScript, partially for
their use in the module pattern.
www.it-ebooks.infoObject Patterns 81
The module pattern allows you to use regular variables as de facto
object properties that aren’t exposed publicly. You accomplish this by
creating closure functions as object methods. Closures are simply functions that access data outside their own scope. For example, whenever you
access a global object in a function, such as window in a web browser, that
function is accessing a variable outside its own scope. The difference with
the module function is that the variables are declared within the IIFE,
and a function that is also declared inside the IIFE accesses those variables. For example:
*/

var person = (function() {
u var age = 25;
return {
name: "Nicholas",
v getAge: function() {
return age;
},
w growOlder: function() {
age++;
}
};
}());
console.log(person.name); // "Nicholas"
console.log(person.getAge()); // 25
person.age = 100;
console.log(person.getAge()); // 25
person.growOlder();
console.log(person.getAge()); // 26


/*
This code creates the person object using the module pattern. The age
variable u acts like a private property for the object. It can’t be accessed
directly from outside the object, but it can be used by the object methods.
There are two privileged methods on the object: getAge() v, which reads
the value of the age variable, and growOlder() w, which increments age.
Both of these methods can access the variable age directly because it is
defned in the outer function in which they are defned.
www.it-ebooks.info82 Chapter 6

There is a variation of the module pattern called the revealing module
pattern, which arranges all variables and methods at the top of the IIFE
and simply assigns them to the returned object. You can write the previous example using the revealing module pattern as follows:
*/

var person = (function() {
var age = 25;
function getAge() {
return age;
}
function growOlder() {
age++;
}
return {
name: "Nicholas",
getAge: getAge,
growOlder: growOlder
};
}());


//PRIVATE MEMBERS FOR CONSTRUCTORS

/*The module pattern is great for defning individual objects that have private properties, but what about custom types that also require their own
private properties? You can use a pattern that’s similar to the module
pattern inside the constructor to create instance-specifc private data.
For example:*/

function Person(name) {
// define a variable only accessible inside of the Person constructor
var age = 25;
this.name = name;
u this.getAge = function() {
return age;
};
 this.growOlder = function() {
age++;
};
}
var person = new Person("Nicholas");
console.log(person.name); // "Nicholas"
console.log(person.getAge()); // 25
person.age = 100;
console.log(person.getAge()); // 25
person.growOlder();
console.log(person.getAge()); // 26	

/*In this code, the Person constructor has a local variable, age. That variable is used as part of the getAge() u and growOlder() v methods. When
you create an instance of Person, that instance receives its own age variable, getAge() method, and growOlder() method. In many ways, this is similar to the module pattern, where the constructor creates a local scope and
returns the this object. As discussed in Chapter 4, placing methods on an
object instance is less effcient than doing so on the prototype, but this is
the only approach possible when you want private, instance-specifc data.
If you want private data to be shared across all instances (as if it were
on the prototype), you can use a hybrid approach that looks like the module pattern but uses a constructor:*/

var Person = (function() {
// everyone shares the same age
var age = 25;
function InnerPerson(name) {
this.name = name;
}
InnerPerson.prototype.getAge = function() {
return age;
};
InnerPerson.prototype.growOlder = function() {
age++;
};
return InnerPerson;
}());
www.it-ebooks.info84 Chapter 6
var person1 = new Person("Nicholas");
var person2 = new Person("Greg");
console.log(person1.name); // "Nicholas"
console.log(person1.getAge()); // 25
console.log(person2.name); // "Greg"
console.log(person2.getAge()); // 25
person1.growOlder();
console.log(person1.getAge()); // 26
console.log(person2.getAge()); // 26

//MIXINS

/*
Although pseudoclassical inheritance and prototypal inheritance are
used frequently in JavaScript, there is also a type of pseudoinheritance
accomplished through mixins. Mixins occur when one object acquires the
properties of another without modifying the prototype chain. The frst
object (a receiver) actually receives the properties of the second object (the
supplier) by copying those properties directly. Traditionally, you create
mixins using a function such as this:

*/





function mixin(receiver, supplier) {
for (var property in supplier) {
if (supplier.hasOwnProperty(property)) {
receiver[property] = supplier[property]
}
}
return receiver;
}


/*The mixin() function accepts two arguments: the receiver and the supplier. The goal of the function is to copy all enumerable properties from
the supplier onto the receiver. You accomplish this using a for-in loop
that iterates over the properties in supplier and then assigns the value
www.it-ebooks.infoObject Patterns 85
of that property to a property of the same name on receiver. Keep in
mind that this is a shallow copy, so if a property contains an object, then
both the supplier and the receiver will be pointing to the same object.
This pattern is used frequently for adding new behaviors to JavaScript
objects that already exist on other objects.
For example, you can add event support to an object through a mixin
rather than inheritance. First, suppose you’ve already defned a custom
type for using events:*/


function EventTarget(){
}
EventTarget.prototype = {
constructor: EventTarget,
u addListener: function(type, listener){
// create an array if it doesn't exist
if (!this.hasOwnProperty("_listeners")) {
this._listeners = [];
}
if (typeof this._listeners[type] == "undefined"){
this._listeners[type] = [];
}
this._listeners[type].push(listener);
},
v fire: function(event){
if (!event.target){
event.target = this;
}
if (!event.type){ // falsy
throw new Error("Event object missing 'type' property.");
}
if (this._listeners && this._listeners[event.type] instanceof Array){
var listeners = this._listeners[event.type];
for (var i=0, len=listeners.length; i < len; i++){
listeners[i].call(this, event);
}
}
},
www.it-ebooks.info86 Chapter 6
w removeListener: function(type, listener){
if (this._listeners && this._listeners[type] instanceof Array){
var listeners = this._listeners[type];
for (var i=0, len=listeners.length; i < len; i++){
if (listeners[i] === listener){
listeners.splice(i, 1);
break;
}
}
}
}
};


/*The EventTarget type provides basic event handling for any object.
You can add u and remove w listeners as well as fre events v directly
on the object. The event listeners are stored on a _listeners property that
is created only when addListener() is called for the frst time (this makes it
easier to mix in). You can use instances of EventTarget like this:*/


var target = new EventTarget();
target.addListener("message", function(event) {
console.log("Message is " + event.data);
})
target.fire({
type: "message",
data: "Hello world!"
});

/*Support for events is useful for objects in JavaScript. If you want to
have a different type of object that also supports events, you have a few
options. First, you can create a new instance of EventTarget and then add
on the properties that you want*/

var person = new EventTarget();
person.name = "Nicholas";
person.sayName = function() {
console.log(this.name);
this.fire({ type: "namesaid", name: name });
};

/*In this code, a new variable called person is created as an instance of
EventTarget, and then the person-related properties are added. Unfortunately, this means that person is actually an instance of EventTarget instead
of Object or a custom type. You also incur the overhead of needing to add
a bunch of new properties by hand. It would be better to have a more
organized way of doing this.*/


/*A second way to solve this problem is to use pseudoclassical
inheritance:*/

function Person(name) {
this.name = name;
}
u Person.prototype = Object.create(EventTarget.prototype);
Person.prototype.constructor = Person;
Person.prototype.sayName = function() {
console.log(this.name);
this.fire({ type: "namesaid", name: name });
};
var person = new Person("Nicholas");
console.log(person instanceof Person); // true
console.log(person instanceof EventTarget); // true


/*In this case, there is a new Person type that inherits from EventTarget u.
You can add any further methods you need to Person’s prototype afterward. However, this isn’t as succinct as it could be, and you could argue
that the relationship doesn’t make sense: A person is a type of event target? By using a mixin instead, you can reduce the amount of code necessary to assign those new properties to the prototype:*/

function Person(name) {
this.name = name;
}
u mixin(Person.prototype, new EventTarget());
mixin(Person.prototype, {
constructor: Person,
sayName: function() {
console.log(this.name);
this.fire({ type: "namesaid", name: name });
}
});
var person = new Person("Nicholas");
console.log(person instanceof Person); // true
console.log(person instanceof EventTarget); // false

/*Of course, you might decide that while you do want to use an object’s
properties, you don’t want a constructor of pseudoclassical inheritance at
all. In that case, you can use a mixin directly when you create your new
object:*/


var person = mixin(new EventTarget(), {
name: "Nicholas",
sayName: function() {
console.log(this.name);
this.fire({ type: "namesaid", name: name });
}
});


/*

In this example, a new instance of EventTarget is mixed in with some
new properties to create the person object without affecting person’s prototype chain.
One thing to keep in mind about using mixins in this way is that
accessor properties on the supplier become data properties on the receiver,
which means you can overwrite them if you’re not careful. That’s because
the receiver properties are being created by assignment rather than by
Object.defineProperty(), meaning the current value of the supplier property is read and then assigned to a property of the same name on the
receiver. For example:
*/


var person = mixin(new EventTarget(), {
get name() {
return "Nicholas"
},
sayName: function() {
console.log(this.name);
this.fire({ type: "namesaid", name: name });
}
});
console.log(person.name); // "Nicholas"
person.name = "Greg";
console.log(person.name); // "Greg"

/*
In this code, name is defned as an accessor property with only a
getter u. That means assigning a value to the property should have no
effect. However, because the accessor property becomes a data property
on the person object, it’s possible to overwrite name with a new value v.
During the call to mixin(), the value of name is read from the supplier and
assigned to the property called name on the receiver. At no point during
this process is a new accessor defned, making the name property on the
receiver a data property.
If you want accessor properties to be copied over as accessor properties, you need a different mixin() function, such as:
*/

function mixin(receiver, supplier) {
Object.keys(supplier).forEach(function(property) {
var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
Object.defineProperty(receiver, property, descriptor);
});
return receiver;
}
var person = mixin(new EventTarget(), {
get name() {
return "Nicholas"
},
sayName: function() {
console.log(this.name);
this.fire({ type: "namesaid", name: name });
}
});
console.log(person.name); // "Nicholas"
person.name = "Greg";
console.log(person.name); // "Nicholas"

/*This version of mixin() uses Object.keys() u to get an array of all enumerable own properties on supplier. The forEach() method is used to iterate over those properties. The property descriptor for each property on
supplier is retrieved and then added to receiver via Object.defineProperty()
v. This ensures that all of the relevant property information is transferred to receiver, not just the value. That means the person object has an
accessor property called name, so it cannot be overwritten.
www.it-ebooks.info90 Chapter 6
Of course, this version of mixin() works only in ECMAScript 5
JavaScript engines. If your code needs to work for older engines, you
should combine the two mixin() approaches into a single function:*/
function mixin(receiver, supplier) {
u if (Object.getOwnPropertyDescriptor) {
Object.keys(supplier).forEach(function(property) {
var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
Object.defineProperty(receiver, property, descriptor);
});
} else {
v for (var property in supplier) {
if (supplier.hasOwnProperty(property)) {
receiver[property] = supplier[property]
}
}
}
return receiver;
}
/*Here, mixin() checks whether Object.getOwnPropertyDescriptor() u exists
to determine whether the JavaScript engine supports ECMAScript 5. If so,
it goes on to use the ECMAScript 5 version. Otherwise, the ECMAScript 3
version is used v. This function is safe to use in both modern and legacy
JavaScript engines, as they will apply the most appropriate mixin strategy.
n o T e Keep in mind that Object.keys() returns only enumerable properties. If you want
to also copy over nonenumerable properties, use Object.getOwnPropertyNames()
instead.
*/
/*

summary
There are many different ways to create and compose objects in JavaScript. While JavaScript does not include the formal concept of private
properties, you can create data or functions that are accessible only from
within an object. For singleton objects, you can use the module pattern
to hide data from the outside world. You can use an immediately invoked
function expression (IIFE) to defne local variables and functions that
are accessible only by the newly created object. Privileged methods are
methods on the object that have access to private data. You can also
create constructors that have private data by either defning variables in
the constructor function or by using an IIFE to create private data that
is shared among all instances.
Mixins are a powerful way to add functionality to objects while avoiding inheritance. A mixin copies properties from one object to another
so that the receiving object gains functionality without inheriting from
the supplying object. Unlike inheritance, mixins do not allow you to identify where the capabilities came from after the object is created. For this
reason, mixins are best used with data properties or small pieces of functionality. Inheritance is still preferable when you want to obtain more
functionality and know where that functionality came from.
Scope-safe constructors are constructors that you can call with or
without new to create a new object instance. This pattern takes advantage
of the fact that this is an instance of the custom type as soon as the constructor begins to execute, which lets you alter the constructor’s behavior
depending on whether or not you used the new operator.*/






