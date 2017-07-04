/*The in operator looks for a property with a given name in a specifc
object and returns true if it fnds it. In effect, the in operator checks to see
if the given key exists in the hash table. For example, here’s what happens
when in is used to check for some properties in the person1 object:
*/

console.log("name" in person1); // true
console.log("age" in person1); // true
console.log("title" in person1); // false
Keep in mind that methods are just properties that reference functions, so you can check for the existence of a method in the same way.
The following adds a new function, sayName(), to person1 and uses in to
confrm the function’s presence.
var person1 = {
name: "Nicholas",
sayName: function() {
console.log(this.name);
}
};
console.log("sayName" in person1); // true

/*In most cases, the in operator is the best way to determine whether
the property exists in an object. It has the added beneft of not evaluating the value of the property, which can be important if such an evaluation is likely to cause a performance issue or an error.
In some cases, however, you might want to check for the existence of
a property only if it is an own property. The in operator checks for both
own properties and prototype properties, so you’ll need to take a different
approach. Enter the hasOwnProperty() method, which is present on all objects
and returns true only if the given property exists and is an own property.
For example, the following code compares the results of using in versus
*/
hasOwnProperty() on different properties in person1:
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

var person1 = {
name: "Nicholas"
};
console.log("name" in person1); // true
u console.log(person1.propertyIsEnumerable("name")); // true
var properties = Object.keys(person1);
console.log("length" in properties); // true
v console.log(properties.propertyIsEnumerable("length")); // false