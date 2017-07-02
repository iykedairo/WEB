Techie.ready = function(){var
str=pt.stringify,arr,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,obj,O,A;s = str;


function Index(A,item){
var all = arguments, c = 0,
len = all.length, j = 0,prev;
if(len > 2||len < 2){return;}
var arr = all[0],stk = [];
var items = all[1],store={};
if(sapi.isArrayLike(items)){
items = sapi.explode(items);
}else{items = [items];}



sapi.each(function(i,e,itms){
sapi.each(function(j,k,o){
	if(e === j){
prev = item = k;
}else if(e === k){
prev = item = j;
}
}, arr);
if(prev === item){
	stk.push(prev);
}else{
	stk.push(-1);
}
}, items);
if(stk.length === 1){
return stk[0]; }return stk;
}



function searchArray(A, Aa){
	var stk = [];
Aa=Techie.explode(arguments,1);Aa.forEach(function(e){

	if(Index(A, e) != -1){
		stk.push(e);
	}
});return stk;
}
t=['sam','gom','sap','bom','suit'];

/*y = searchArray(t, ['gom','bom','boom',2,'sam']);
log(y, false);
*/

a(Index(t,['bolb','burn','sam','sap','bom']))
};