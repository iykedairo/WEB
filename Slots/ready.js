Techie.ready = function(){var
str=pt.stringify,arr,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,obj,O,A;s = str;


function Index(A,item){
var all = arguments,store={},
stk = [], arr = all[0],items = (sapi.isArrayLike(all[1])) ? sapi.explode(all[1]) : String([].slice.call(arguments,1)).split(',');
sapi.each(function(i,e,itms){
sapi.each(function(j,k,o){
		if(e == j){
store[e] = k; stk.push(k);
}else if(e == k){
store[e] = j; stk.push(j);
}}, arr);if(!(e in store)){
 store[e] = -1; stk.push(-1);
}}, items);if(stk.length==1){
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

y = searchArray(t, ['gom','bom','boom',2,'sam']);
log(y, false);


a(Index(t, 	0,1,2,3,4,5,6))
};