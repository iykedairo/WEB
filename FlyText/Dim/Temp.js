Techie(window).ready = function(o, doc, body, head, api, w){ 
  // Techie.dim = dim;
    var bd = o.element.idName("body");

    bd = pt(bd)
    var st =  {color: "gold", lineHeight: 2, backgroundColor: "#123456", padding: "5vh" };
    bd.each = function(){
        this.styles([ "font-size: 2em"]);
        this.css = st;};//forEach ends

var di = new dim(); //This method lives inside the PT and was only built here, hence the original reference.
di.dim()

function dim( displayed_item, func_processor )   {
displayed_item = displayed_item ? pt(displayed_item) : null;func_processor = func_processor || function(){};
  sapi.body.appendChild(pt.createFrag("<div data-dim='dimmer'>PT API: Techie Inc. </div>"));
 var index = 0, dimmed_item = pt("div[data-dim='dimmer']"); this.dim_state = this.dim_state || false;
  //dim display
  this.dim = function(displayed_item) {    this.dim_state = true; 
    var timmer = setInterval(function(){
      if(index < 0.5){
        dimmed_item.css = {
position: "fixed", width: "100%", height: "100%", float: "left",top: "0px", left: "0px", visibility: "visible", display: "block",
      backgroundColor: "rgb(118, 118, 111)", zIndex: "300", textAlign: "center", color: "#fff", fontStyle: "Impact",
      fontWeigth: "bold", fontSize: "3vh"  ,opacity: index
    }; index += 0.01;
    } else {clearInterval(timmer);}
    }, 10);   /*Remove when done */  dimmed_item.on("click", function(){this.detatch()}.bind(this));
  };
//ditcatch dimmer / clear dimmed state.
  this.detatch = function () { this.dim_state = false;
      var timer = setInterval(function(){  if(index > 0.15) { index -= 0.1; dimmed_item.css = {opacity: index};
        }else{ clearInterval(timer);   dimmed_item.css = ["opacity: 0", "display: none","visibility: hidden"];
        }        
      }, 20);
};
}
















}

