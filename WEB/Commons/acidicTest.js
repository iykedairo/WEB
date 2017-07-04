
var myFunction = function () {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";


    EventUtil.addHandler(link, "load", function (event) {


alert("css loaded");
         });
    link.href = "acidicTest.css";
    document.getElementsByTagName("head")[0].appendChild(link);
    event = EventUtil.getEvent(event);
    EventUtil.stopPropagation(event);

    alert("Congratulations! The Acidic Test made it.");
} ();   
/*
function handler(){
    var myDiv = Qselectors.Qselect(.myDiv);
    myDiv.textContent = "I am feling good!";
    }
EventUtil.addHandler(btn, "click", handler);
EventUtil.removeHandler(btn, "click", handler);

event.stopPropagation();
event.preventDefault();
event = EventUtil.getEvent(event);
EventUtil.stopPropagation(event);

var link = document.getElementById("myLink");
link.onclick = function(event){
event = EventUtil.getEvent(event);
EventUtil.preventDefault(event);
};


var image = document.getElementById(“myImage”);
EventUtil.addHandler(image, “load”, function(event){
event = EventUtil.getEvent(event);
alert(EventUtil.getTarget(event).src);
});
*/