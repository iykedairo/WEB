//EventUtil.alert();

//var h2 = Main.createElems("input", "h1", 0,  Main.getNow.todayFull);
var docInput = document.getElementById("searchbox"), inputSpan = document.getElementById("inputSpan");
//spanStyle.hidden = true;
docInput.style.cssText =
	"width:25%";

inputSpan.style.cssText = "font-size:60%; color:red; position:relative; left:-2.5%;";
inputSpan.hidden = true;
	EventUtil.addHandler(docInput, "focus",
		function(){
			//newH1 += h2;

			if(docInput.isfocus){
				inputSpan.hidden = false;
			}
			else if(docInput != focus){
				inputSpan.hidden = true;

			}

		});