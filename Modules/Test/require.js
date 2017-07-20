//files that depend on others


pt.ready = function(Techie, sapi, body, head, pt, w){









while(true){
    if(typeof Test === "undefined"){//a("here")
 loadScript('modules/Test/Test.js', function(script){t.call(this, sapi);  });
 /* a("also   ");*/ break;
    }else{/*a("Not yet")*/}
}
var see = setTimeout(function(){
 // a("Checks")
  
}, 0)

};
function loadScript(url, callback){
    var script = document.createElement("script");
    script.type = "text/javascript"; script.defer = false; script.async = false;  script.hidden = true;
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback.call(script, script);
            }
        };
    } else {  //Others
        script.onload = function(){
            callback.call(script, script);
        };
    }
    script.src = url;
    document.body.appendChild(script);
    //a(script.parentNode)

}
var dependencies = {
	"ObjectTools.js": ["FunctionalTools.js"],
"Dictionary.js": ["ObjectTools.js"],
"TestModule.js": ["FunctionalTools.js", "Dictionary.js"]};



var loadedFiles = {};
function Require(file/*, dependencies*/){
//slice out the dependencies
var i = 1, dependencies = [];
/*function exlode(arr, n, r = []){
	if(n == arr.length){
		return true;
	}else{
		
	}
}*/
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

function Require(files, func){
    if (typeof files === "string" && typeof func === "function") {
        files = files.split(",");
    }else if(arguments.length > 2){
        files = pt.Slice.call(arguments, arguments, 0, (arguments.length - 1)); func = arguments[arguments.length - 1];
    } //At this point, files is an array, func is a function
    if (files instanceof Array && typeof func === "function") {
        //pt.ready.bind(func).call(files)
        pt.ready = func.bind(window, files);
    }
}




//require("TestModule.js");test();