// fade out

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}


Which can be used like:

var el = document.querySelector('.js-fade');

fadeOut(el);
fadeIn(el);
fadeIn(el, "inline-block");





function fadeOut(id,val){

  if(isNaN(val)){ val = 9;}

  document.getElementById(id).style.opacity='0.'+val;

  //For IE

  document.getElementById(id).style.filter='alpha(opacity='+val+'0)';

  if(val>0){

    val--;

    setTimeout('fadeOut("'+id+'",'+val+')',90);

  }else{return;}

}

 

function fadeIn(id,val){

  if(isNaN(val)){ val = 0;}

  document.getElementById(id).style.opacity='0.'+val;

  //For IE

  document.getElementById(id).style.filter='alpha(opacity='+val+'0)';

  

  if(val<9){

    val++;

    setTimeout('fadeIn("'+id+'",'+val+')',90);

   }else{return;}

}



function fadeOut(id,val){ if(isNaN(val)){ val = 9;}
  document.getElementById(id).style.opacity='0.'+val;
  //For IE
  document.getElementById(id).style.filter='alpha(opacity='+val+'0)';
  if(val>0){
    val–;
    setTimeout('fadeOut("'+id+'",'+val+')',90);
  }else{return;}
}

function fadeIn(id,val){
// ID of the element to fade, Fade value[min value is 0]
  if(isNaN(val)){ val = 0;}
  document.getElementById(id).style.opacity='0.'+val;
  //For IE
  document.getElementById(id).style.filter='alpha(opacity='+val+'0)';
  if(val<9){
    val++;
    setTimeout('fadeIn("'+id+'",'+val+')',90);
  }else{return;}
}

function fade(what, duration) {
  what.opct = 100;
  what.ih = window.setInterval(function() {
    what.opct--;
    if(what.opct) {
      what.MozOpacity = what.opct / 100;
      what.KhtmlOpacity = what.opct / 100;
      what.filter = "alpha(opacity=" + what.opct + ")";
      what.opacity = what.opct / 100;
    }else{
      window.clearInterval(what.ih);
      what.style.display = 'none';
    }
  }, 10 * duration);
}

Use it like :
fade(htmlobject, 2); // delay is in second





var el = document.getElementById("div1");

function fadeIn(el) {
  el.style.opacity = 0;


  var tick = function() {
    el.style.opacity = +el.style.opacity + 0.01;


    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };

  tick();
}

fadeIn(el);



function starter()
{
    var ele = document.getElementById("div1");
    fin(ele);
}
function fin(ele)
{
    for (i = 0; i <= 1; i += 0.01)
    {
        i=Math.round(i*100)/100;
        setTimeout(function() { setto(ele,i); }, i * 1000);
    }
}

function seto(ele,opa)
{
    ele.style.opacity = opa;
}


function fadeIn($element){
  $element.style.display="block";
  $element.style.opacity=0;
  recurseWithDelayUp($element,0,1);
}
function fadeOut($element){
  $element.style.display="block";
  $element.style.opacity=1;
  recurseWithDelayDown($element,1,0);
}

function recurseWithDelayDown($element,startFrom,stopAt){
    window.setTimeout(function(){
      if(startFrom > stopAt ){
          startFrom=startFrom - 0.1;
            recurseWithDelayDown($element,startFrom,stopAt)
            $element.style.opacity=startFrom;
      }else{
        $element.style.display="none"
      } 
  },30);
}
function recurseWithDelayUp($element,startFrom,stopAt){
    window.setTimeout(function(){
      if(startFrom < stopAt ){
          startFrom=startFrom + 0.1;
            recurseWithDelayUp($element,startFrom,stopAt)
            $element.style.opacity=startFrom;
      }else{
        $element.style.display="block"
      } 
  },30);
}