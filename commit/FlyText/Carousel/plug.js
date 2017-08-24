    // var slider = new Carousel(".carousel");


  Techie.ready = function (body, head, doc, $, _,  w ){ 
    var slider = new Carousel();
    // slider.next()
// w.plug = plug;
// $.on("load", slider.ride(null, 20));
$.on("load", slider.pass(0, 100, 100));
$.on("mouseover", slider.stop.bind(slider));
var next = pt("#next"); next.on("click", slider.next.bind(slider, null, slider.interval));
var prev = pt("#prev"); prev.on("click", slider.prev.bind(slider, null, slider.interval));
var pause = pt("#pause"); pause.on("click", slider.pause.bind(slider));
var stop = pt("#stop"); stop.on("click", slider.stop.bind(slider))

}






