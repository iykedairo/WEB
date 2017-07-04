//Detecting properties
//in
console.log("name" in person1); // true
console.log("age" in person1); // true
console.log("title" in person1); // false

var person1 = {
name: "Nicholas",
sayName: function() {
console.log(this.name);
}
};
console.log("sayName" in person1); // true

//hasOwnProperty()
var person1 = {
name: "Nicholas",
sayName: function() {
console.log(this.name);
}
};
console.log("name" in person1); // true
console.log(person1.hasOwnProperty("name")); // true
console.log("toString" in person1); // true
u console.log(person1.hasOwnProperty("toString")); // false

//removing Properties

var person1 = {
name: "Nicholas"
};
console.log("name" in person1); // true
delete person1.name; // true - not output
console.log("name" in person1); // false
u console.log(person1.name); // undefined

//enumeration

var property;
for (property in object) {
console.log("Name: " + property);
console.log("Value: " + object[property]);
}

var properties = Object.keys(object);
// if you want to mimic for-in behavior
var i, len;
for (i=0, len=properties.length; i < len; i++){
console.log("Name: " + properties[i]);
console.log("Value: " + object[properties[i]]);
}

var person1 = {
name: "Nicholas"
};
console.log("name" in person1); // true
u console.log(person1.propertyIsEnumerable("name")); // true
var properties = Object.keys(person1);
console.log("length" in properties); // true
v console.log(properties.propertyIsEnumerable("length")); // false


//Types of Properties

/*
There are two different types of properties: data properties and accessor
properties. Data properties contain a value, like the name property from earlier examples in this chapter. The default behavior of the [[Put]] method
is to create a data property, and every example up to this point in the
chapter has used data properties. Accessor properties don’t contain a value
but instead defne a function to call when the property is read (called
a getter), and a function to call when the property is written to (called a
setter). Accessor properties only require either a getter or a setter, though
they can have both.
There is a special syntax to defne an accessor property using an
object literal:
*/

var person1 = {
u _name: "Nicholas",
v get name() {
console.log("Reading name");
return this._name;
},
www.it-ebooks.info38 Chapter 3
w set name(value) {
console.log("Setting name to %s", value);
this._name = value;
}
};
console.log(person1.name); // "Reading name" then "Nicholas"
person1.name = "Greg";
console.log(person1.name); // "Setting name to Greg" then "Greg"
/*
This example defnes an accessor property called name. There is a data
property called _name that contains the actual value for the property u.
(The leading underscore is a common convention to indicate that the
property is considered to be private, though in reality it is still public.)
The syntax used to defne the getter v and setter w for name looks a lot
like a function but without the function keyword. The special keywords get
and set are used before the accessor property name, followed by parentheses and a function body. Getters are expected to return a value, while
setters receive the value being assigned to the property as an argument.
Even though this example uses _name to store the property data, you
could just as easily store the data in a variable or even in another object.
This example simply adds logging to the behavior of the property; there’s
usually no reason to use accessor properties if you are only storing the
data in another property—just use the property itself. Accessor properties
are most useful when you want the assignment of a value to trigger some
sort of behavior, or when reading a value requires the calculation of the
desired return value.
n o T e You don’t need to defne both a getter and a setter; you can choose one or both.
If you defne only a getter, then the property becomes read-only, and attempts to
write to it will fail silently in nonstrict mode and throw an error in strict mode.
If you defne only a setter, then the property becomes write-only, and attempts to
read the value will fail silently in both strict and nonstrict modes.
*/

//Property attributes

/*
There are two property attributes shared between data and accessor
properties. One is [[Enumerable]], which determines whether you can
iterate over the property. The other is [[Configurable]], which determines
whether the property can be changed. You can remove a confgurable
property using delete and can change its attributes at any time. (This also
means confgurable properties can be changed from data to accessor
properties and vice versa.) By default, all properties you declare on an
object are both enumerable and confgurable.
If you want to change property attributes, you can use the Object
.defineProperty() method. This method accepts three arguments: the
object that owns the property, the property name, and a property descriptor object containing the attributes to set. The descriptor has properties
with the same name as the internal attributes but without the square
brackets. So you use enumerable to set [[Enumerable]], and configurable
to set [[Configurable]]. For example, suppose you want to make an object
property nonenumerable and nonconfgurable:
*/

var person1 = {
u name: "Nicholas"
};
Object.defineProperty(person1, "name", {
v enumerable: false
});
console.log("name" in person1); // true
w console.log(person1.propertyIsEnumerable("name")); // false
var properties = Object.keys(person1);
console.log(properties.length); // 0
Object.defineProperty(person1, "name", {
x configurable: false
});
// try to delete the Property
delete person1.name;
y console.log("name" in person1); // true
console.log(person1.name); // "Nicholas"
z Object.defineProperty(person1, "name", { // error!!!
configurable: true
});

//Data Property Attributes

var person1 = {};
Object.defineProperty(person1, "name", {
value: "Nicholas",
enumerable: true,
configurable: true,
writable: true
});

var person1 = {};
Object.defineProperty(person1, "name", {
value: "Nicholas"
});
console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // false
delete person1.name;
console.log("name" in person1); // true
person1.name = "Greg";
console.log(person1.name); // "Nicholas"
/*
Accessor Property Attributes

Accessor properties also have two additional attributes. Because there
is no value stored for accessor properties, there is no need for [[Value]]
or [[Writable]]. Instead, accessors have [[Get]] and [[Set]], which contain
the getter and setter functions, respectively. As with the object literal form
of getters and setters, you need only defne one of these attributes to
create the property.
n o T e If you try to create a property with both data and accessor attributes, you will get
an error.
*/

var person1 = {
_name: "Nicholas",
get name() {
console.log("Reading name");
return this._name;
},
set name(value) {
console.log("Setting name to %s", value);
this._name = value;
}
};
This code can also be written as follows:
var person1 = {
_name: "Nicholas"
};
Object.defineProperty(person1, "name", {
get: function() {
console.log("Reading name");
return this._name;
},
set: function(value) {
console.log("Setting name to %s", value);
this._name = value;
},
enumerable: true,
configurable: true
});

var person1 = {
_name: "Nicholas"
};
www.it-ebooks.infoUnderstanding Objects 43
Object.defineProperty(person1, "name", {
get: function() {
console.log("Reading name");
u return this._name;
}
});
console.log("name" in person1); // true
console.log(person1.propertyIsEnumerable("name")); // false
delete person1.name;
console.log("name" in person1); // true
person1.name = "Greg";
console.log(person1.name); // "Nicholas"

//Defining Multiple Properties

var person1 = {};
Object.defineProperties(person1, {
u // data property to store data
_name: {
value: "Nicholas",
enumerable: true,
configurable: true,
writable: true
},
www.it-ebooks.info44 Chapter 3
v // accessor property
name: {
get: function() {
console.log("Reading name");
return this._name;
},
set: function(value) {
console.log("Setting name to %s", value);
this._name = value;
},
enumerable: true,
configurable: true
}
});

//Retrieving Property Attributes

var person1 = {
name: "Nicholas"
};
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.enumerable); // true
console.log(descriptor.configurable); // true
console.log(descriptor.writable); // true
console.log(descriptor.value); // "Nicholas"

/*
Preventing object modification

Objects, just like properties, have internal attributes that govern their
behavior. One of these attributes is [[Extensible]], which is a Boolean
value indicating if the object itself can be modifed. All objects you
create are extensible by default, meaning new properties can be added to
the object at any time. You’ve seen this several times in this chapter. By
setting [[Extensible]] to false, you can prevent new properties from being
added to an object. There are three different ways to accomplish this.

Preventing Extensions

One way to create a nonextensible object is with Object.preventExtensions().
This method accepts a single argument, which is the object you want to
make nonextensible. Once you use this method on an object, you’ll never
be able to add any new properties to it again. You can check the value of
[[Extensible]] by using Object.isExtensible(). The following code shows
examples of both methods at work.
*/

var person1 = {
name: "Nicholas"
};
u console.log(Object.isExtensible(person1)); // true
v Object.preventExtensions(person1);
console.log(Object.isExtensible(person1)); // false
w person1.sayName = function() {
console.log(this.name);
};
console.log("sayName" in person1); // false

/*
Sealing Objects
The second way to create a nonextensible object is to seal the object. A
sealed object is nonextensible, and all of its properties are nonconfgurable. That means not only can you not add new properties to the object,
www.it-ebooks.info46 Chapter 3
but you also can’t remove properties or change their type (from data to
accessor or vice versa). If an object is sealed, you can only read from and
write to its properties.
You can use the Object.seal() method on an object to seal it. When
that happens, the [[Extensible]] attribute is set to false, and all properties have their [[Configurable]] attribute set to false. You can check to see
whether an object is sealed using Object.isSealed() as follows:
*/

var person1 = {
name: "Nicholas"
};
console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false
u Object.seal(person1);
v console.log(Object.isExtensible(person1)); // false
console.log(Object.isSealed(person1)); // true
w person1.sayName = function() {
console.log(this.name);
};
console.log("sayName" in person1); // false
x person1.name = "Greg";
console.log(person1.name); // "Greg"
y delete person1.name;
console.log("name" in person1); // true
console.log(person1.name); // "Greg"
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.configurable); // false

//Freezing Objects
//not the best recommended above .seal()
/*
The last way to create a nonextensible object is to freeze it. If an object is
frozen, you can’t add or remove properties, you can’t change properties’
types, and you can’t write to any data properties. In essence, a frozen object
is a sealed object where data properties are also read-only. Frozen objects
can’t become unfrozen, so they remain in the state they were in when
they became frozen. You can freeze an object by using Object.freeze() and
determine if an object is frozen by using Object.isFrozen(). For example:
*/

var person1 = {
name: "Nicholas"
};
console.log(Object.isExtensible(person1)); // true
console.log(Object.isSealed(person1)); // false
console.log(Object.isFrozen(person1)); // false
u Object.freeze(person1);
v console.log(Object.isExtensible(person1)); // false
w console.log(Object.isSealed(person1)); // true
console.log(Object.isFrozen(person1)); // true
person1.sayName = function() {
console.log(this.name);
};
console.log("sayName" in person1); // false
x person1.name = "Greg";
console.log(person1.name); // "Nicholas"
delete person1.name;
console.log("name" in person1); // true
console.log(person1.name); // "Nicholas"
var descriptor = Object.getOwnPropertyDescriptor(person1, "name");
console.log(descriptor.configurable); // false
console.log(descriptor.writable); // false