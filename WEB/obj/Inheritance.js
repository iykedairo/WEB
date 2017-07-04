var book = {
title: "The Principles of Object-Oriented JavaScript"
};
var prototype = Object.getPrototypeOf(book);
console.log(prototype === Object.prototype); // true

var book = {
title: "The Principles of Object-Oriented JavaScript",
toString: function() {
return "[Book " + this.title + "]"
}
};
var message = "Book = " + book;
// "Book = [Book The Principles of Object-Oriented JavaScript]"
console.log(message);


/*You can also create objects with a null [[Prototype]] via Object.create(),
such as:*/

var nakedObject = Object.create(null);
console.log("toString" in nakedObject); // false
console.log("valueOf" in nakedObject); // false


// you write this
function YourConstructor() {
// initialization
}
// JavaScript engine does this for you behind the scenes
YourConstructor.prototype = Object.create(Object.prototype, {
constructor: {
configurable: true,
enumerable: true,
value: YourConstructor
writable: true
}
});

//Rectangle constructor
function Rectangle(length, width) {
this.length = length;
this.width = width;
}

//getArea() method on Rectangle Prototype
Rectangle.prototype.getArea = function() {
return this.length * this.width;
};

//toString() method of Rectangle Prototype changed
Rectangle.prototype.toString = function() {
return "[Rectangle " + this.length + "x" + this.width + "]";
};

// inherits from Rectangle
//Square constructor
v function Square(size) {
this.length = size;
this.width = size;
}

//Square prototype overwritten by Rectangle constructor
Square.prototype = new Rectangle();

//Square prototype constructor changed back to inherit from original square constructor
Square.prototype.constructor = Square;

//squre prototype toString() modified
Square.prototype.toString = function() {
return "[Square " + this.length + "x" + this.width + "]";
};
var rect = new Rectangle(5, 10);
var square = new Square(6);
console.log(rect.getArea()); // 50
console.log(square.getArea()); // 36
console.log(rect.toString()); // "[Rectangle 5x10]"
console.log(square.toString()); // "[Square 6x6]"
console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Object); // true
console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
console.log(square instanceof Object); // true

/*
In this code, there are two constructors: Rectangle u and Square v. The
Square constructor has its prototype property overwritten with an instance
of Rectangle. No arguments are passed into Rectangle at this point because
they don’t need to be used, and if they were, all instances of Square would
share the same dimensions. To change the prototype chain this way, you
always need to make sure that the constructor won’t throw an error if the
www.it-ebooks.info74 Chapter 5
arguments aren’t supplied (many constructors contain initialization logic
that may require the arguments) and that the constructor isn’t altering
any sort of global state, such as keeping track of how many instances have
been created. The constructor property is restored on Square.prototype
after the original value is overwritten.
After that, rect is created as an instance of Rectangle, and square is
created as an instance of Square. Both objects have the getArea() method
because it is inherited from Rectangle.prototype. The square variable is
considered an instance of Square as well as Rectangle and Object because
instanceof uses the prototype chain to determine the object type
*/

// inherits from Rectangle
function Square(size) {
this.length = size;
this.width = size;
}
Square.prototype = Object.create(Rectangle.prototype, {
constructor: {
configurable: true,
enumerable: true,
value: Square,
writable: true
}
});
Square.prototype.toString = function() {
return "[Square " + this.length + "x" + this.width + "]";
};


/*

In this version of the code, Square.prototype is overwritten with a
new object that inherits from Rectangle.prototype, and the Rectangle
constructor is never called. That means you don’t need to worry about
causing an error by calling the constructor without arguments anymore.
Otherwise, this code behaves exactly the same as the previous code. The
prototype chain remains intact, so all instances of Square inherit from
Rectangle.prototype and the constructor is restored in the same step.
n o T e Always make sure that you overwrite the prototype before adding properties to it,
or you will lose the added methods when the overwrite happens.

*/

//CONSTRUCTOR STEALING

/*

Because inheritance is accomplished through prototype chains in
JavaScript, you don’t need to call an object’s supertype constructor. If
you do want to call the supertype constructor from the subtype constructor, then you need to take advantage of how JavaScript functions work.
In Chapter 2, you learned about the call() and apply() methods,
which allow functions to be called with a different this value. That’s
exactly how constructor stealing works. You simply call the supertype constructor from the subtype constructor using either call() or apply() to
pass in the newly created object. In effect, you’re stealing the supertype
constructor for your own object, as in this example:

*/

function Rectangle(length, width) {
this.length = length;
this.width = width;
}
Rectangle.prototype.getArea = function() {
return this.length * this.width;
};

Rectangle.prototype.toString = function() {
return "[Rectangle " + this.length + "x" + this.width + "]";
};

// inherits from Rectangle
 function Square(size) {
Rectangle.call(this, size, size);
// optional: add new properties or override existing ones here
}
Square.prototype = Object.create(Rectangle.prototype, {
constructor: {
configurable: true,
enumerable: true,
value: Square,
writable: true
}
});
Square.prototype.toString = function() {
return "[Square " + this.length + "x" + this.width + "]";
};
var square = new Square(6);
console.log(square.length); // 6
console.log(square.width); // 6
console.log(square.getArea()); // 36

/*

The u Square constructor calls the Rectangle constructor and passes in
this as well as size two times (once for length and once for width). Doing
so creates the length and width properties on the new object and makes
each equal to size. This is the way to avoid redefning properties from a
constructor from which you want to inherit. You can add new properties
or override existing ones after applying the super type constructor.
This two-step process is useful when you need to accomplish inheritance between custom types. You’ll always need to modify a constructor’s
prototype, and you may also need to call the supertype constructor from
within the subtype constructor. Generally, you’ll modify the prototype
for method inheritance and use constructor stealing for properties. This
approach is typically referred to as pseudoclassical inheritance because it
mimics classical inheritance from class-based languages.

*/

/*What we just achieved is called - pseudoclassical inheritance - */
// because it mimics classical inheritance from class-based languages.



// ACCESSING SUPERTYPE METHODS
/*
In the previous example, the Square type has its own toString() method
that shadows toString() on the prototype. It is fairly common to override
supertype methods with new functionality in the subtype, but what if
you still want to access the supertype method? In other languages, you
might be able to say super.toString(), but JavaScript doesn’t have anything
similar. Instead, you can directly access the method on the supertype’s
prototype and use either call() or apply() to execute the method on the
subtype object. For example:

*/

function Rectangle(length, width) {
this.length = length;
this.width = width;
}
Rectangle.prototype.getArea = function() {
return this.length * this.width;
};
Rectangle.prototype.toString = function() {
return "[Rectangle " + this.length + "x" + this.height + "]";
};
// inherits from Rectangle
function Square(size) {
Rectangle.call(this, size, size);
}
Square.prototype = Object.create(Rectangle.prototype, {
constructor: {
configurable: true,
enumerable: true,
value: Square,
writable: true
}
});
// call the supertype method
u Square.prototype.toString = function() {
var text = Rectangle.prototype.toString.call(this);
return text.replace("Rectangle", "Square");
};

/*In this version of the code, u Square.prototype.toString() calls
Rectangle.prototype.toString() by using call(). The method just needs
to replace "Rectangle" with "Square" before returning the resulting text.
This approach may seem a bit verbose for such a simple operation, but
it is the only way to access a supertype’s method.*/

/*summary

JavaScript supports inheritance through prototype chaining. A prototype
chain is created between objects when the [[Prototype]] of one object is
set equal to another. All generic objects automatically inherit from Object
.prototype. If you want to create an object that inherits from something
else, you can use Object.create() to specify the value of [[Prototype]] for a
new object.
You accomplish inheritance between custom types by creating a
prototype chain on the constructor. By setting the constructor’s prototype
property to another value, you create inheritance between instances of
the custom type and the prototype of that other value. All instances of
that constructor share the same prototype, so they all inherit from the
same object. This technique works very well for inheriting methods from
other objects, but you cannot inherit own properties using prototypes.
To inherit own properties correctly, you can use constructor stealing,
which is simply calling a constructor function using call() or apply() so
that any initialization is done on the subtype object. Combining constructor stealing and prototype chaining is the most common way to achieve
inheritance between custom types in JavaScript. This combination is
frequently called pseudoclassical inheritance because of its similarity
to inheritance in class-based languages.
You can access methods on a supertype by directly accessing the
supertype’s prototype. In doing so, you must use call() or apply() to execute the supertype method on the subtype object.*/