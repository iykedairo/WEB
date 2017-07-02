const MouseCounterModule = function(){
let numClicks = 0;
const handleClick = () => {
alert(++numClicks);
};
return {
countClicks: () => {
document.addEventListener("click", handleClick);
}
};
}();
(function(module) {
	 let numScrolls = 0;
const handleScroll = () => {
alert(++numScrolls);
}
module.countScrolls = () => {
document.addEventListener("wheel", handleScroll);
};
})(MouseCounterModule);


MouseCounterModule.countClicks();
MouseCounterModule.countScrolls();