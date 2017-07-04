//remove the “user” class
//first, get list of class names
var classNames = div.className.split(/\s+/);
//find the class name to remove
var pos = -1,
i,
len;
for (i=0, len=classNames.length; i < len; i++){
if (classNames[i] == ”user”){
pos = i;
}
}
//remove the class name
classNames.splice(i,1);
//set back the class name
div.className = classNames.join(” ”);

HTML5 introduces a way to manipulate class names in a much simpler and safer manner through
the addition of the classList property for all elements. The classList property is an instance of a
new type of collection named DOMTokenList. As with other DOM collections, DOMTokenList has a
length property to indicate how many items it contains, and individual items may be retrieved via
the item() method or using bracket notation. It also has the following additional methods:
add(value) — Adds the given string value to the list. If the value already exists, it will
not be added.
contains(value) — Indicates if the given value exists in the list (true if so; false if not).
remove(value) — Removes the given string value from the list.
toggle(value) — If the value already exists in the list, it is removed. If the value doesn’t
exist, then it’s added.
The entire block of code in the previous example can quite simply be replaced with the following:
div.classList.remove(“user”);
Using this code ensures that the rest of the class names will be unaffected by the change. The other
methods also greatly reduce the complexity of the basic operations, as shown in these examples:
//remove the “disabled” class
div.classList.remove(“disabled”);
//add the “current” class
div.classList.add(“current”);
//toggle the “user” class
div.classList.toggle(“user”);
//figure out what’s on the element now
if (div.classList.contains(“bd”) && !div.classList.contains(“disabled”)){
//do something
)
//iterate over the class names
➤ ➤ ➤ ➤
HTML5 ❘ 363
www.it-ebooks.info364 ❘ CHAPTER 11 DOM EXTENSIONS
for (var i=0, len=div.classList.length; i < len; i++){
doSomething(div.classList[i]);
}