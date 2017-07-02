PT.ready(foo);
function foo(){
var sub = [];
	 var ninjas = {
zero:{name: "Yagyu", weapon: "shuriken"},
one:{name: "Yoshi", weapon: "katana"},
two:{name: "Kuma", weapon: "wakizashi"}
};
Object.keys(ninjas).forEach(function(i){
var val = Object.getOwnPropertyDescriptor(ninjas, i);
val = val.value;
sub.push(val);
	pt.Log(val.name);
});
var weapons = [];
var ninjas = [
{name: "Yagyu", weapon: "shuriken"},
{name: "Yoshi", weapon: "katana"},
{name: "Kuma", weapon: "wakizashi"},
{name: "Michael", weapon: "bible"},
{name: "Iyke", weapon: "words"},
{name: "Ajogwu", weapon: "riffle"},
{name: "Oke", weapon: "salts"}
];
pt.each(function(){
	weapons.push(this.weapon);
	
}, ninjas);

//object building on the fly
var FlyObj = {};
var FlyArray = [];
var names = [];
var weapns = [];
var details= map(fn, ninjas);
function fn(i, ninja,ninjas){
// Build the FlyObj
FlyObj[this.name]=this.weapon;
FlyArray.push(
{User:'',First:'',Last:''},
{Addr:'',Locale:'',City:''},
{Contact:'',Phne:'',Email:''}
);
names.push(this.name);
weapns.push(this.weapon);
	return ('<h2>'+ninja.name+': '+ninja.weapon)
}

Techie.Log("I AM A NinJa!!");

function map(fn, obj){
var map = [],i;bj=obj||this;
if(pt.isArrayLike(obj)){
for(i= 0;i < obj.length;i++){
map.push(fn.call(obj[i], i, obj[i], obj));
}}
else{
	 Object.keys(obj).forEach(function(i){
var val = Object.getOwnPropertyDescriptor(ninjas, i);
val = val.value;
sub.push(val);

});
	
}
return map;
}
var names = map(foo, sub);
function foo(i,ninja,ninjas){
	return ninja.name;
}
pt.Log(names)
//Techie.Log(details);
	
var num = [1,2,3,4,5,6,7,8];


function each(fn, obj){var i;
for(i=0; i < obj.length; i++)
fn.apply(obj[i], [i, obj[i], obj]);
}
//pt.Log(num.sort(pt.Alphabetical))
pt.Log(pt.add( [1,2,3,4,5,6,7,8 ]))
}