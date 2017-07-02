//files that depend on others
function load(src, fn){
//load("food.file", a(food))
	var array = [], slice = array.slice,
	script = sapi.createElement("script");
	script.defer = false;
	script.type = "text/javascript";
function func(fn){
fn.bind(script, slice.call(fn.arguments));
}
script.name = "dynamicJS";
try{
pt.addHandler(script, 'load', func);
}catch(e){
	script.onreadyStateChange = function(){
		if(script.readyState === 'loaded' || script.readyState === 'complete'){
			func();
		}
	}
}
}
var dependencies = {
	"ObjectTools.js": ["FunctionalTools.js"],
"Dictionary.js": ["ObjectTools.js"],
"TestModule.js": ["FunctionalTools.js", "Dictionary.js"]};



var loadedFiles = {};
function Require(file/*, dependencies*/){
//slice out the dependencies
var i = 1, dependencies = [];
function exlode(arr, n, r = []){
	if(n == arr.length){
		return true;
	}else{
		
	}
}
}
function require(file) {
if (dependencies[file]) {
//file depends on anothr file
var files = dependencies[file];
for (var i = 0; i < files.length; i++)
require(files[i]);
}
if (!loadedFiles[file]) {
loadedFiles[file] = true;
load(file, function(){
	alert(script.readyState);
});
}
}


a(this)
require("TestModule.js");test();