(function(window){
	var Lenz = sapi.id("Lenz");
	var fact = sapi.id("fact");
 var btn = sapi.id('button');
  var err = sapi.create("i");
  PT.body.appendChild(err);
  
  
	function msg(r){
r = r || "Sorry, the fearure isn't supported yet.";
err.textContent = r;
}
PT.EventUtil.addHandler(btn, "click", fn);
function fn(){
	 var Lz = Lenz.selected;
	var fct = fact.selected;
	if(!Lz && !fct){
	msg();
		return null;
	}
	if(Lz){
		msg("Lenz Rule in play")
	}
	else if(fct){
		msg("Facts at play")
	}
}
alert(btn)
}(window));