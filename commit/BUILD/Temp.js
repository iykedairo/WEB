Techie(window).ready = function(o, ext, body, head, api, w){ 
  var st =  {color: "gold", lineHeight: 2, backgroundColor: "#123456", padding: "5vh" };
    pt("#body").each = function(){ this.styles([ "font-size: 2em"]);this.css = st;};//forEach ends

var di = new pt.dim(); di.dim()
function getSize(method) { 
    return document.documentElement[method] || document.body[method]; 
} 

function setSize(method, value){
  document.body[method] = value;
return (document.documentElement || document.body)[method] = value;
}
  

  pt.extend({
    set Top( value ) {
  var root = getScrollRoot();
      return root.scrollTop = value;
    },
    get Top ( ) {
      var root = getScrollRoot();
      return root.scrollTop;
    }
  })

// a(pt.Top)

function getScrollRoot(){ 
var html = document.documentElement, body = document.body, root, cacheTop = 
((typeof window.pageYOffset !== "undefined") ? window.pageYOffset : null) || body.scrollTop || html.scrollTop;
html.scrollTop = body.scrollTop = cacheTop + (cacheTop > 0) ? -1 : 1;
 root = (html.scrollTop !== cacheTop) ? html : body; root.scrollTop = cacheTop; 
 return root;
}

// var scrollRoot = new getScrollRoot;
  
function getScrollTop(){
    if(typeof pageYOffset!= 'undefined'){  //most browsers except IE before #9
 return pageYOffset;
    } else{  var B= document.body; //IE 'quirks'
 var D= document.documentElement; //IE with doctype
 D= (D.clientHeight)? D: B;
 return D.scrollTop;
    }

}
// a(getSize("scrollHeight", 300))


/*var t = new scrollTop();
t.scoll = 2000;
a(t.scroll)
*/
  


}






















