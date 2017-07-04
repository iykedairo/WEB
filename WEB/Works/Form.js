comment.focus();

(function(){
	

	var handler = function(){
		var res = function(){ 

				comment.value = "";
			comment.placeholder = "Type some text";
			username.value = "";
			username.placeholder = "Your Username";
			comment.focus();
			
			
			
		};
		//form elements automatically get their ids registered with javascript.
		//No need to define them again before use.
if(username.value === "" || comment.value === ""){
				alert("Nay");
				var reset = res();

			}

			else{

		var div = document.createElement("div");
		var chat = document.getElementsByClassName("chat")[0].appendChild(div);
		
		div.innerHTML = username.value + ":   "+ comment.value;
				var reset = res();
			}

			
	};

	submit.addEventListener("click", handler, false);



	

})();
	
	
	