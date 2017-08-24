pt(window).ready = function(W, doc, body, head, T, w){
   var $sun = pt('.sun');
   var $win = pt(window);
   $win.on("scroll", function(ev){
                  // jQuery uses var top = $win.scrollTop() *3; ie a scrollTop func with .each running inside
    var top = w.scrollY *3;
    $sun[0].css('transform', 'rotate( ' + top + 'deg) ');
   });

   var index = 0, deg;

   var int = setInterval( function() {
    if (index < 360) {
       index += 10;
    }else{
         index = 0;
    }
     deg = index + "deg";
    // $sun.css('transform', 'rotate( '  + deg +') ');

   }, 20);
Log(window.$.fn.scrollTop)
/*
var isSupported = document.implementation.hasFeature(“HTMLEvents”, “2.0”);
var isSupported = document.implementation.hasFeature(“UIEvent”, “3.0”);




EventUtil.addHandler(window, “scroll”, function(event){
if (document.compatMode == “CSS1Compat”){
alert(document.documentElement.scrollTop);
} else {
alert(document.body.scrollTop);
}
});

*/

pt.extend({
  scroll: {
getScrollTop: function(){

},
setScrollTop: function setScrollTop(value){
var root = getScrollRoot();
a(pt("html")[0])
root.scrollTop = value; 
}.bind(window)
  }
})

pt.scroll.setScrollTop(200)

// a(sapi.documentElement.scrollTop)
function getScrollRoot(){ 
var html = document.documentElement, body = document.body, root, cacheTop = 
((typeof window.pageYOffset !== "undefined") ? window.pageYOffset : null) || body.scrollTop || html.scrollTop;
html.scrollTop = body.scrollTop = cacheTop + (cacheTop > 0) ? -1 : 1;
 root = (html.scrollTop !== cacheTop) ? html : body; root.scrollTop = cacheTop; 
 return root;
}
}//.bind(this)


