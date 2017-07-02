function find(selector, root){
root = root || document;
var parts = selector.split(" "),
query = parts[0],
rest = parts.slice(1).join(" "),
elems = root.getElementsByTagName( query ),
results = [];
for ( var i = 0; i < elems.length; i++ ) {
if ( rest ) {
results = results.concat( find(rest, elems[i]) );
} else {
results.push( elems[i] );
}
}
return results;