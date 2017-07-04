//jQuery(foo);
//jQuery().ready(foo);
//function foo(){
//alert(jQuery);
location.hash = "id=CiDAB01CeDOC";
location.search = "?q=javascript";
location.ids = "www.yahoo.com";
function celect(id){
	if(document.querySelector){
	return document.querySelector(id);
}
else if(document.querySelectorAll){
	return document.querySelectorAll(id);
}
else{
	//return document.documentElement.setAttribute
}
}

var btnn = celect(".btnn");

btnn.onclick = function(){
	var username = celect(".username");
	//location.replace("index.html");
	var message = celect("#comment");
		var ho = (username.value + "\n" + message.value);
a//lert(ho);
		location.reload(true);//true to force a reload from the server not from cache.
var chat = div.innerHTML = ho; 
};
}
document.ready = foo;



