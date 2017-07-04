!(function(window){
	//my dream of the usage of the code in BluePrjnt.Js
	var 

Prize = Techie = pt = PT(window),
sapi = Techie.SAPI,
body = document.body || 
sapi.create("body"),
bd = body[0];
p = "many/some code frags",
frag = p.fragment(p);
document.click = function(){
body.insertBefore(frag, bd);
};



	
	
	})(window);