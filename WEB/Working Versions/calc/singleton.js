!function(){
	//SAPI denotes Selector API. 
				//qs denotes querySelector(id)
				//id denotes document.getElementById(id)
				EventUtil.today();
			
			var Total = 0;
			var total = SAPI.qs("span#total");
			var resultsPane = SAPI.qs("#resultsPane");
			var input = SAPI.tag("input");
			var submit = SAPI.qs("#submit");
			var item = SAPI.qs("#item");
			var reset = SAPI.qs("#reset");
			var value = SAPI.qs("#value");	
			var Results = SAPI.qs("#Results");
			item.focus();
			total.innerHTML = "Total: " + Total;

			// Event CALLS
			EventUtil.addHandler(submit, "click", Foo);
		    EventUtil.addHandler(document, "keydown", EnterKeyPress);
			EventUtil.addHandler(reset, "click", Clean);
			/*EventUtil.addHandler(window, "beforeunload", function(){
				alert("Reloaded Right!");
			});*/

			/*window.onbeforeunload = function(){
				alert("Reloaded Right!");
				return (window.navigation.type == 1) ? alert("Page Reloaded Right") : alert("This is not working");
			};*/

			(function(checkFirstVisit){
				if (document.cookie.indexOf("mycookie") == -1) {
					//cookie doesn't exist, create it
					document.cookie = "mycookie = 1";
				}
					else{
						//not first visit, so fire your weapon.
						alert("You just refreshed. Why?");
					}
				
			})();

			//function initializations
	 function Clean(){ 
			//reset all fields here
				
	      var clear = (function(){
				Total = 0;
			total.innerHTML = "Total: " + Total;
			Results.innerHTML = " ";
			prompt("You must write something now.")
			});

			return [clear(), Clear()];

	
		}
		function Clear(){
			item.value = " ";
				item.placeholder = "New item";
				value.value = " ";
				value.placeholder = "The vlaue";
				item.focus();
		}

		function Food(){
				var p = document.createElement("p");
				p.name = "dynamic paragraphs";
				 var dynamicps = SAPI.names("dynamic paragraphs");

				Total += parseFloat(value.value, 10);
				console.log(Total);
				total.innerHTML = "Total: " + Total; 
				//var p = document.createFragment("p");
				//Add each session of inputs to a paragraph and release
				p.innerHTML = input[1].value + ":   " + input[2].value;
				//resultsPane.addChild(p);	
				resultsPane.insertBefore(p, resultsPane.children[0]);	
				var reset = Clear();
				

		}
		
		function Foo(){
			var table = new Table(Results);
				table.Cell.innerHTML = item.value;
				table.anotherCell.innerHTML = value.value;
				Total += parseFloat(value.value, 10); //The elusive counter engine
				console.log(item.value + ": " + Total);
				total.innerHTML = "Total: " + Total; 
				var reset = Clear();
				console.log("Success!");



		}
		
		function EnterKeyPress(event){
		event = event || window.event;
		if(event.keyCode == 13){
		console.log("Session submitted. . .");
		if( !value.value || !item.value){
			console.log("Please supply the values.");
		}

		else { 
			Foo();
			console.log("Session values computed.");
			}
	}}

	

	function keypresses(evt) {
                        
        evt = evt || window.event;
        switch (evt.keyCode) {
                case 13: //enter
                //alert("Enter key pressed. Be careful!");
                Foo();
                //leftArrowPressed(nextUrl);
                break;

                case 96: //esc .. .NOT WORKING YET
                alert("esc key just got a message");
                Clean();
                break;

                 case 32: //space bar
                //rightArrowPressed(prevUrl);
                break;

				case 16: //shift
                //rightArrowPressed(prevUrl);
                break;

                case 8: //backspace
                //downArrowPressed(prevUrl);
                break;

        }
    }
	

}();