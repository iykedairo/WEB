//button.focus();
var button = document.getElementById("comment");
button.focus();

//event = EventUtil.getEvent(window);
//EventUtil.stopPropagation();

(function(){
	var userName = document.getElementsByClassName("username")[0];
	var echoUser = document.getElementsByClassName("btnn")[0];

	var alarm = function(){
		var div = document.createElement("div");
		var chat = document.getElementsByClassName("chat")[0].appendChild(div);
		
		var text = document.getElementById("comment").value;
		alert(text + " " + userName.value);
		div.innerHTML = userName.value + ":   "+ text;
		EventUtil.addHandler(userName, "blur", function(){
			button.focus();

		});
	};

	EventUtil.addHandler(echoUser, "click", alarm);
})();

/*var image = document.createElement(“img”);
EventUtil.addHandler(image, “load”, function(event){
EventUtil.addHandler(window, “load”, function(){
event = EventUtil.getEvent(event);
alert(EventUtil.getTarget(event).src);
});
document.body.appendChild(image);
image.src = “smile.gif”;
});*/