	document.getElementById("div1").innerHTML = "20" + "1 " + " NOT " + 20 + 1;

	var joke = document.getElementById("joke");

	var numberJoke = 20 + 1;
joke.innerHTML = "20 + 1 = " + 20 + 1 + "  NOT " + parseFloat(numberJoke);

	var script2 = document.createElement("script");
	script2.type = "text/javascript";
	script2.defer = true;
	script2.src = "Date.js";
	var head = document.getElementsByTagName("body")[0].appendChild(script2);