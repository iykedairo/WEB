var Main = {
//Main Object starts

//select script
selectScript : function(){
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
		},
		
		
createElems : function(elem, nodePos, insertPos, innerH){
		var newElem = document.createElement(elem);
		var elemPos = document.getElementsByTagName(nodePos)[insertPos];
		var posiTION = elemPos.appendChild(newElem);
		(innerH != null || undefined) ? (newElem.innerHTML = innerH) : (newElem.innerText = innerH);
	}
	
	
	
//Main Object ends
};

	Main.selectScript("Build.js", "crossBrEvents.js", "custom.js", "Test.js", "Use_Event.js");
