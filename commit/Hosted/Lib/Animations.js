/*
var car1 = new Carousel("id1");  carousel one
var car2 = new Carousel("id2");carousel two
var car = new carousel(); all caousels in the body of the document
car.next(), car.prev(), car.next(1000), cAR.PREV(1000), car.stop(), CAR.SLIDE(2)
*/

a = a.a;
function Carousel (containerID) {
    this.container = Techie(containerID);
    this.slides = Techie(".carousel", this.container);
    this.total = this.slides.length;
    this.current = 0;
    this.length = this.slides.length - 1;
    this.count = 0;
    this.index = 0;
    this.slide(this.current);//plug it 
}
Carousel.prototype = {  
    caro: function ( ) {

    },
    ride: function (  ) {
   this.backwards = false; this.forwards = true; this.isRunning = true;
 this.slides.each(function(){this.style.display = "none";}); 
this.slides[this.current].style.display = "block";
(this.current === this.length) ? this.current = 0 : this.current += 1;
this.slide(this.current);
    setTimeout(this.ride.bind(this), 2000);
}, 
next: function(effect, interval){
this.interval = interval; this.backwards = false; this.forwards = true; this.isRunning = true;
(this.current === this.total) ? this.current = 0 : this.current+= 1;
this.pass(this.current);
this.stop();
if(typeof interval === "number" && (interval % 1) === 0) { 
    this.run = setTimeout(function(){
        this.next(effect, interval);
    }.bind(this), 1000);
}
},

prev: function(effect, interval){
    this.interval = interval;
    this.backwards = true; this.forwards = false; this.isRunning = true;
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

stop: function(){   this.isRunning = false; clearTimeout(this.run); 
},
pause: function(){
    if (this.forwards) {
if (this.isRunning) {
    this.isRunning = false; clearTimeout(this.run);
} else {this.next(this.current, this.interval);}
    } else if (this.backwards) {
        if (this.isRunning) {
            this.isRunning = false; clearTimeout(this.run);
        } else { this.prev(this.current, this.interval); }
    }
},






scroll: function(object, interval, speed) {

     this.interval = interval; this.backwards = false; this.forwards = true; this.isRunning = true;
object = this.slides[this.current]; this.slide(this.current);
(this.current === this.total) ? this.current = 0 : this.current += 1;
this.stop(); 
var left = 0; var  firstRun =  typeof firstRun === "object" ? firstRun  : (function(){
pt("img").css({width: "100%",  border: "nones", position: "relative", left: "0px"})
 return {};}());

if(typeof interval === "number" && (interval % 1) === 0) {
    this.run = setInterval(function(){
            if (left < 320) { 
                 pt.css(object, { width: "50%",   "background-color": "#ffffff", position: "relative", 
                    left: left + "px"}) ; left += (speed || 1);
            } else { 
                clearInterval(this.run);  this.scroll(object, interval);
            }
     
     }.bind(this), (interval || 10));
}

},
slider: function(object, interval, speed) {
     this.interval = interval; this.backwards = false; this.forwards = true; this.isRunning = true;
object = this.slides[this.current]; this.slide(this.current); 
(this.current === this.total) ? this.current = 0 : this.current += 1; 
this.stop(); this.olength = !this.olength ? this.slides.length : this.olength;
// a(this.olength)
var left = 0, firstRun =  typeof firstRun === "object" ? firstRun  : (function(){
pt("img", object.parentNode).css({width: "100%",  border: "nones", position: "relative", left: "0px", opacity: 1})
 return {};}());

if(typeof interval === "number" && (interval % 1) === 0) {
       this.pass(object, 10, 5);
       if (this.olength) {
         this.olength--; this.slider(object, interval, speed); 

       }

   }

},

pass: function(index, interval, speed){ 
    this.width = this.width || 400; 
    var element = this.slides[this.current]; 
    Techie.forEach(function(element, start){  this.slides[start].display = "none"; },this.slides, this);
index = this.index;
Techie.css(this.slides[this.current], {display: "inline-block", position: "relative", left: index + "px"});
if (this.index < this.width) {this.index += 5;} else { this.slides[this.current].style.display = "none"}
    this.time = setTimeout(this.pass.bind(this), 10);

    


},


passss: function ( object, interval, speed ) {
this.index = this.index || 0; this.width = this.width || 400;
if ( this.index < this.width ) {
    this.time = setTimeout(function ( ) {
    object.css({
    position: "relative", left: this.index + "px"}); this.index += ( speed || 0.5 );    
    clearTimeout(this.time); 
    this.pass( object , interval, speed ); 
}.bind(this), ( interval || 10 ));
} 
},

crossFly: function () {
    var index = 0;
    var t =  setTimeout(function(){
           this.pass( 0, 100, 100 );
    }.bind(this), 10);
    // this.crossFly(div);
},




opacitize: function() {

},

slide: function(index){
    if(index >= 0 && index <= this.total){
this.stop(); var start = 0; 
for(; start <= this.length; start++){
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


console.log(this.Techie)