var Main = {
//Main Object starts

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
		}

//Main Object ends
};

	Main.selectScript("Build.js", "crossBrEvents.js", "custom.js", "Test.js", "Use_Event.js");
