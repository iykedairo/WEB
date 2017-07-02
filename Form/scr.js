pt.addHandler(window, 'load', function(){

var form = sapi.id('form1'),
submit = sapi.id("submit"),
fname = sapi.id("fn");
//  alert(form.submit);
/*pt.EventUtil.addHandler(form, 'submit', function(){
	return false;
});
*/
form.onsubmit = handler;

function handler(event){
event = pt.EventUtil.getEvent(event);
pt.EventUtil.preventDefault(event);

}


window.onclick = function(){
	fn = fn.value;
	 initChecks().name(fn);
}









function initChecks(){
var pattern, match;return {	
empty : function(x){
pattern = /\S+/;
match = pattern.test(x);
return match;
},
//return !0 if not empty

phone: function(x){
pattern = /^[0-9]{7,12}+/;
match = pattern.test
return !match;
 },
		
name: function(name, stk){
//pattern = /^[-\w\s]+$/;
///[^a-z\d]/i;
///^([a-zA-Z0-9 _-]+)$/;
///^\w*$/;
///^[a-z0-9]*$/i
pattern = /[0-9]/;
///^[a-z]+$/i;
///\A[^\W\d_]+\z/i;
//min of one xter, use below
// ^\s*([0-9a-zA-Z]+)\s*$
//At least 1 no & 1 xter
// ^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$

if(pattern.test(name)){
alert(match+' '+name);
}
else{
alert(pattern.test(name))
}
		}
		
		
		
		
		
		
	};
}
	
	
});