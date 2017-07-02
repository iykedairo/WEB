!(function Globes(){
a = {}.a; alert = a;
var ErrorStack = [];
var ErrorStyler = [];
var err = null, match = null;
var initChecks = {
ReportErrors: function(){
	if(ErrorStack.length > 0){
ErrorStyler.forEach(function(e){
	pt.css("border: 1px solid red", e.children[0]);
});
return {
	ErrorStack: ErrorStack,
	ErrorStyler: ErrorStyler
};
	}
var 
congr = "Congratulations!!";
function trig(){
	pt.Log(congr)
}
setTimeout(trig);
clearTimeout(trig);
function fire(fn,t){
	t = t || 2000;
	setTimeout(fn, 0);
	clearTimeout(fn, t);
}
//set timeout to zero while displaying; set timeout to clear the timeout. darn!!!
return true;
},


emptyChecks:function(str,p,id){
var NotEmpty = /\S+/;
var tst = NotEmpty.test(str);
if(tst !== true){
err = id + " is empty!<br/>";
ErrorStack.push(err);
pt.min(err,p);
ErrorStyler.push(p);
return false;
}
return true;
	},
	
	
phone: function(str, p, id){
if(!this.emptyChecks(str,p,id)){
return false;
}
	match = /^(\d{7,12})+$/.test(str);
	if(!match){
err = "Invalid "+ id;
ErrorStack.push(err);
ErrorStyler.push(p);
pt.min(err,p);
}},



email: function(str,p,id){
if(!this.emptyChecks(str,p,id)){
return false;
}
match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str); 
if(!match){
err = "Invalid "+ id;
ErrorStack.push(err);
ErrorStyler.push(p);
pt.min(err,p);
}},



pwd: function(str, p, id){
if(!this.emptyChecks(str,p,id)){
return false;
}
match = /^\s*([0-9a-zA-Z]*)\s*$/.test(str);
if(!match){
err = "Invalid "+ id;
ErrorStack.push(err);
ErrorStyler.push(p);
pt.min(err,p);
}},
	
	
names: function(str,p,id){
if(!this.emptyChecks(str,p,id)){
return false;
}
match =/^([A-z]{5,})+$/i.test(str);
	if(!match){
err = "Invalid " + id;
ErrorStack.push(err);
pt.min(err,p);
ErrorStyler.push(p)
}},


userName: function(str,p,id){
if(!this.emptyChecks(str,p,id)){
return false;
}
match = /^(([A-Za-z]|[0-9]|_){5,})+$/.test(str);
if(!match){
err = "Invalid "+ id;
ErrorStack.push(err);
ErrorStyler.push(p);
pt.min(err,p);
}}

//end of initChecks
};

var fname = sapi.id('first name'),
lname = sapi.id('last name'),
mname = sapi.id('middle name'),
userN = sapi.id('username'), 
pwd = sapi.id('password'), 
email = sapi.id('email address'),
phone = sapi.id('mobile number');
var p = sapi.forms[0].getElementsByTagName("p");




pt.addHandler(sapi.forms[0], 'submit', function(e){
	 pt.preventDefault(e);

initChecks.names(fname.value, p[0], fname.id);

initChecks.names(mname.value, p[1], mname.id);

initChecks.names(lname.value, p[2], lname.id);

initChecks.userName(userN.value, p[3], userN.id);


initChecks.email(email.value, p[5], email.id);

initChecks.pwd(pwd.value, p[4], pwd.id);

initChecks.phone(phone.value, p[6], phone.id);
//pt.Log(ErrorStack);
initChecks.ReportErrors();
}); 

Techie("input").each(function(){
pt.addHandler(this, 'focus', function(){
pt.hideErrors();
ErrorStyler.forEach(function(e){
	e = e.children[0];
pt.css("border: 1px solid #888", e);
})
ErrorStack = [];
ErrorStyler =[];
});});


}())