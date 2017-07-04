var Main = {
//Main Object starts

selectScript : function(scripts, src){
scripts = new Array(scripts);
src = src || document.head;
scripts.forEach(fn);
function fn(e, i, array){
i = document.createElement('script');
i.type = 'text/javascropt';
i.defer = false;
i.src = e;
src.appendChild(i);
}
var scripts = 10;
var sources = arguments;
for(var i = 0; i < scripts && i < sources.length; i++){
				var j = scripts[i];
j = document.createElement("script");
				j.type = "text/javascript";
				j.defer = true;
				j.src = "../" + sources[i];
				var poSItion = document.head.appendChild(j);
			}
		}

//Main Object ends
};

function LoadScripts(scripts, pos){
pos = pos || document.head;
scripts = new Array(scripts);
scripts.forEach(fn);
function fn(elem,index,arr){
index = document.createElement('script');
index.type='text/javascript';
index.defer = false;
index.src = elem;
pos.appendChild(index);
}
}

LoadScript([], body)
	Main.selectScript("Build.js", "crossBrEvents.js", "custom.js", "Test.js", "Use_Event.js");