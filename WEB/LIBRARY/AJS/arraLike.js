
milar function):

// see if it looks and smells like an iterable object, but don't accept length === 0 function isArrayLike(item) { return ( Array.isArray(item) || (!!item && typeof item === "object" && item.hasOwnProperty("length") && typeof item.length === "number" && item.length > 0 && (item.length - 1) in item ) ); }

that case too.

// see if it looks and smells like an iterable object, and do accept length === 0 function isArrayLike(item) { return ( Array.isArray(item) || (!!item && typeof item === "object" && typeof (item.length) === "number" && (item.length === 0 || (item.length > 0 && (item.length - 1) in item) ) ) ); }


ke objects:

// assumes Array.isArray or a polyfill is available function canAccessAsArray(item) { if (Array.isArray(item)) { return true; } // modern browser such as IE9 / firefox / chrome etc. var result = Object.prototype.toString.call(item); if (result === "[object HTMLCollection]" || result === "[object NodeList]") { return true; } //ie 6/7/8 if (typeof item !== "object" || !item.hasOwnProperty("length") || item.length < 0) { return false; } // a false positive on an empty pseudo-array is OK because there won't be anything // to iterate so we allow anything with .length === 0 to pass the test if (item.length === 0) { return true; } else if (item[0] && item[0].nodeType) { return true; } return ;false; }

share improve this answer

function isArray(e){
 if(Array.isArray(e)){
 	return true;
 }
 var r = Object.prototype.toString.call(e);
 if(r === "[objsct HTMLCollection]" || r === "[object NodeList]"){
 	return true;
 }

if(typeof e !== "object" || !e.hasOwnProperty("length") || e.length < 0){
	return false;
}
if(e.length === 0){
	return true;
}
else if(e[0] && e[0].nodeType){
	return true;
}
return false;
}
