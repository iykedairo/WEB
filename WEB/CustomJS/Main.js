location.hash = "id=CiDAB01CeDOC";
location.search = "?q=javascript";
location.ids = "www.yahoo.com";

var Main = {

//Main Object starts

//#Id and .Class Selectors
Selector : function(id){
	//we are going to have a ... statement here to catch all exception
				return document.getElementById(id);
},


//select script
selectScript : function(){
				var scripts = 10;
				var sources = arguments;
				for(var i = 0; i < scripts && i < sources.length; i++){
				var j = scripts[i];
				j = document.createElement("script");
				j.type = "text/javascript";
				j.defer = true;
				j.src = sources[i];
				
				//j.src = "../" + sources[i];
				var poSItion = document.head.appendChild(j);
			}
		},
		
		
createElems : function(elem, nodePos,n, insertPos, innerH){
		var newElem = document.createElement(elem);
		//Find way to get tagNames through their ids
		var elemPos = document.getElementsByTagName(nodePos)[insertPos];
		var posiTION = elemPos.appendChild(newElem);
		(innerH != null || undefined) ? (newElem.innerHTML = innerH) : (newElem.innerText = innerH);
	}
	
	
//Main Object ends
};

	Main.selectScript("../custom.js", "Budget.js");
