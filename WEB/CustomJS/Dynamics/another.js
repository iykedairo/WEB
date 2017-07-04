//EventUtil.alert();

	var newH1 = Main.createElems("h1", "body", 0, "This is my first page.");
	EventUtil.addHandler(document, "keypress",
		function(){
			var h2 = Main.createElems("p"	);
			h2.innerHTML = Main.getNow.todayFull;
			
		});