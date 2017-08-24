/*
var car1 = new Carousel("id1");  carousel one
var car2 = new Carousel("id2");carousel two
var car = new carousel(); all caousels in the body of the document
car.next(), car.prev(), car.next(1000), cAR.PREV(1000), car.stop(), CAR.SLIDE(2)
*/


a = a.a;
function SlideShow ( id ) {
    this.array = new SlideShow.prototype.SlideShow(id);
    this.counter = 0; this.index = 0; this.current = this.array[this.index];this.length = this.array.length; 
    var tem = [].concat(Techie.Slice.call(this.array)); Techie.Extender([tem], [SlideShow.prototype, this.array, this]);
    return tem;
}


SlideShow.prototype = {

    constructor: SlideShow,

    SlideShow: function ( id ) {
       var slides = Techie ( id );
       slides.each ( function ( e, index ) { this[ index ] = e;}, null, this );
       this.length = slides.length; this.forEach = slides.forEach; this.each = slides.each;
    },

    slide: function (  ) {
        this.array.each(function (e){ e.style.display = "none";} ); this.counter++;
        if (this.counter > this.length) {this.counter = 1} 
    this.array[this.counter - 1].style.display = "block"; 
  this.timer =  setTimeout(this.slide.bind(this), 2000); 
    },

    next: function ( ) {

    },

    prev: function ( ) {

    },

    start: function (  ) {

},
    Stop: function ( ) { 
         clearTimeout(this.timer);
    },

    puase: function () {

    }
}
SlideShow.prototype.SlideShow.prototype = SlideShow.prototype;