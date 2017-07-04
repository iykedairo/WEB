var Main = {
//Main Object starts


//select element by id and class
 getElement : (function(id){
				return	(document.getElementById || document.all) ? document.getElementById(id) || document.all[id] : throw new Error("No way to retrieve element!");//not tested yet
				}),

//select script
createScript : function(){
				var scripts = 10;
				var sources = arguments;
				for(var i = 0; i < scripts && i < sources.length; i++){
				var j = scripts[i];
				j = document.createElement("script");
				j.type = "text/javascript";
				j.defer = true;

				(sources[i] !== typeof nulls) ? (j.src = "../" + sources[i]) : (j.src = sources[i]);
				//j.src =  sources[i];
				// if(j.src !== null){
				// 	j.src = j.src;
				// }
				// else{
				// 	j.src = "../" + sources[i];
				// }
				 var poSItion = document.head.appendChild(j);
			}
		},


		//CREATE CSS FILE


		createStyle : function(){
				var styles = 10;
				var hrefs = arguments;
				for(var i = 0; i < styles && i < hrefs.length; i++){
				var j = styles[i];
				j = document.createElement("link");
				j.rel = "stylesheet";
				j.type = "text/css";
				j.href = "../" + hrefs[i];
				var poSItion = document.head.appendChild(j);
			}
		},
		
		
createElems : function(elem, nodePos, insertPos, innerH){
		var newElem = document.createElement(elem);
		var elemPos = document.getElementsByTagName(nodePos)[insertPos];
		var posiTION = elemPos.appendChild(newElem);
		(innerH != null || undefined) ? (newElem.innerHTML = innerH) : (newElem.innerText = innerH);
		//return newElem || (newElem && elemPos) || (newElem && elemPos && poSItion);
		if(elemPos !== typeof 0){
			return newElem && elemPos;
		}
		else{
			alert("whoops!");
		}
	},
//date methods
	getNow : {
	 todayFull: function(){
			var DateToday = new Date();
				return DateToday;
			 }()
  }
	
	
	
//Main Object ends
};
	//Main.selectScript("Build.js", "crossBrEvents.js", "custom.js", "Test.js", "Use_Event.js");
Main.createScript("custom.js", "another.js");
Main.createStyle("style.css", "Href.css", "stylesheet.css", "Pages.css", "Main.css", "rainbow.css");

