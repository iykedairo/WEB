function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}


	$("a.preview").mousemove(function(e){

			$("#preview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")

	});

.. but then I put a condition in there to get the desired effect:

	$("a.preview").mousemove(function(e){

			if (e.pageY + $("#preview").height() - 20 >= $(window).height() ) {

			posY = $(window).height() - $("#preview").height() - 20;
			
			} else {			

			posY = e.pageY - xOffset;

			}

			$("#preview")
			.css("top",(posY) + "px")
			.css("left",(e.pageX + yOffset) + "px")

	});	


	function runScroll() {
  scrollTo(document.body, 0, 600);
}
var scrollme;
scrollme = document.querySelector("#scrollme");
scrollme.addEventListener("click",runScroll,false)

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop == to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}



document.getElementsByTagName('button')[0].onclick = function () {
    scrollTo(document.body, 0, 1250);   
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        increment = 20;

    var animateScroll = function(elapsedTime) {        
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);                        
        element.scrollTop = position; 
        if (elapsedTime < duration) {
            setTimeout(function() {
                animateScroll(elapsedTime);
            }, increment);
        }
    };

    animateScroll(0);
}
function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}




// first add raf shim
// http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

// main function
function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY || document.documentElement.scrollTop,
        scrollTargetY = scrollTargetY || 0,
        nspeed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            console.log('scroll done');
            window.scrollTo(0, scrollTargetY);
        }
    }

    // call it once to get started
    tick();
}

// scroll it!
scrollToY(0, 1500, 'easeInOutQuint');




function TopscrollTo() {
if(window.scrollY!=0)
{
    setTimeout(function() {
       window.scrollTo(0,window.scrollY-30);
        TopscrollTo();
    }, 100);
   }
}



// scroll to top
scrollTo(0, 1000);

// Element to move, time in ms to animate
function scrollTo(element, duration) {
    var e = document.documentElement;
    if(e.scrollTop===0){
        var t = e.scrollTop;
        ++e.scrollTop;
        e = t+1===e.scrollTop--?e:document.body;
    }
    scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if(typeof from === "object")from=from.offsetTop;
    if(typeof to === "object")to=to.offsetTop;

    scrollToX(element, from, to, 0, 1/duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed<= 0) {
        element.scrollTop = xTo;
        return;
    }
    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;

    setTimeout(function() {
        scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
}
function easeOutCuaic(t){
    t--;
    return t*t*t+1;

}

// c = element to scroll to or top position in pixels
// e = duration of the scroll in ms, time scrolling
// d = (optative) ease function. Default easeOutCuaic
function scrollTo(c,e,d){d||(d=easeOutCuaic);var a=document.documentElement;if(0===a.scrollTop){var b=a.scrollTop;++a.scrollTop;a=b+1===a.scrollTop--?a:document.body}b=a.scrollTop;0>=e||("object"===typeof b&&(b=b.offsetTop),"object"===typeof c&&(c=c.offsetTop),function(a,b,c,f,d,e,h){function g(){0>f||1<f||0>=d?a.scrollTop=c:(a.scrollTop=b-(b-c)*h(f),f+=d*e,setTimeout(g,e))}g()}(a,b,c,0,1/e,20,d))};
function easeOutCuaic(t){
    t--;
    return t*t*t+1;
}



    var scrollIt = function(time) {
    // time = scroll time in ms
    var start = new Date().getTime(),
        scroll = document.documentElement.scrollTop + document.body.scrollTop,
        timer = setInterval(function() {
            var now = Math.min(time,(new Date().getTime())-start)/time;
            document.documentElement.scrollTop
                = document.body.scrollTop = (1-time)/start*scroll;
            if( now == 1) clearTimeout(timer);
        },25);
}

var scrollIt = function(time) {
    // time = scroll time in ms
    var start = new Date().getTime(),
        scroll = document.documentElement.scrollTop + document.body.scrollTop,
        timer = setInterval(function() {
            var now = Math.min(time,(new Date().getTime())-start)/time;
            document.documentElement.scrollTop
                = document.body.scrollTop = (1-time)/start*scroll;
            if( now == 1) clearTimeout(timer);
        },25);
}



// *Set options
var options = {
  'showButtonAfter': 200, // show button after scroling down this amount of px
  'animate': "linear", // [false|normal|linear] - for false no aditional settings are needed

  'normal': { // applys only if [animate: normal] - set scroll loop distanceLeft/steps|ms
    'steps': 20, // the more steps per loop the slower animation gets
    'ms': 10 // the less ms the quicker your animation gets
  }, 
  'linear': { // applys only if [animate: linear] - set scroll px|ms
    'px': 30, // the more px the quicker your animation gets
    'ms': 10 // the less ms the quicker your animation gets
  }, 
};


// *Create new Scroller and run it.
var scroll = new Scroller(options);
scroll.init();


