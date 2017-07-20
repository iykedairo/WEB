/*
var car1 = new Carousel("id1");  carousel one
var car2 = new Carousel("id2");carousel two
var car = new carousel(); all caousels in the body of the document
car.next(), car.prev(), car.next(1000), cAR.PREV(1000), car.stop(), CAR.SLIDE(2)
*/
var carousel_prototype = {

next: function(effect, interval){
(this.current === this.total) ? this.current = 0 : this.current+= 1;
this.stop();
this.slide(this.current);
if(typeof interval === "number" && (interval % 1) === 0) {
    var context = this;
    this.run = setTimeout(function(){
        context.next(effect, interval);
    }, interval);
}
},

prev: function(effect, interval){
    (this.current === 0) ? this.current = this.total : this.current -= 1;
    this.stop();
    this.slide(this.current);
    if(typeof interval === "number" && (interval % 1) === 0){
        var context = this;
        this.run = setTimeout(function(){
            context.prev(effect, interval);
        }, interval)
    }
},

stop: function(){
    clearTimeout(this.run);
},
pause: function(){

},
scroll: function() {

},
opacitize: function() {

},

slide: function(index){
    if(index >= 0 && index <= this.total){
this.stop(); var start = 0; 
for(; start <= this.total; start++){
if(start === index){
this.slides[start].style.display = "inline-block";
}else{
this.slides[start].style.display = "none";
}
}
    } else{
        console.log("Techie.Carousel:- Index range exceed.")
    }
}

};
function Carousel (containerID) {
    this.container = document.getElementById(containerID) || document.body;
    this.slides = this.container.querySelectorAll(".carousel");
    this.total = this.slides.length - 1;
    this.current = 0;
    this.slide(this.current);//plug it 
}
Carousel.prototype = carousel_prototype;
a = a.a;