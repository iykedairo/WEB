var createElems = function(elem, nodePos, insertPos, innerH){
		var newElem = document.createElement(elem);
		var elemPos = document.getElementsByTagName(nodePos)[insertPos];
		var posiTION = elemPos.appendChild(newElem);
		(innerH != null || undefined) ? (newElem.innerHTML = innerH) : (newElem.innerText = innerH);
	};
	
var noBads = createElems("p", "h2" 0, "  //")

var newOne = "20" + "  +  " +  "  0 " + " = " + 20 + 0 +  " NOT " + parseFloat(20 + 0)+ noBads;


createElems("h2", "div", 0, newOne);


	var script2 = document.createElement("script");
	script2.type = "text/javascript";
	script2.defer = true;
	script2.src = "Date.js";
	var head = document.getElementsByTagName("body")[0].appendChild(script2);


