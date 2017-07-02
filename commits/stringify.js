
function stringify(obj, ele){
	obj = obj || this;
	var store = [];
Object.keys(obj).forEach(fn);
function fn(e, i, array){
i = Object.getOwnPropertyDescriptor(obj, e);if(ele){
i = (e+": "+i.value+"  ");
ele.innerHTML += i+"<br/>";
}else{
i = e+": "+i.value+" <br/> ";
document.write(i)}
store.push(i)}return store}

var 
is = {},
obj = {
	beta : 1.00,
	version_0 : 1.11,
	version_1 : 1.20,
	auto : true,
	is : 2001,
	"is.Numeric" : /^\d+$/,
	"is.NotEmpty" : /\S+/
}