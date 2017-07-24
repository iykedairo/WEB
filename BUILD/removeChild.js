// Get the <ul> element with id="myList"
var list = document.getElementById("myList");

// If the <ul> element has any child nodes, remove its first child node
if (list.hasChildNodes()) {
    list.removeChild(list.childNodes[0]);
} 
/*
<div><div id="mydiv">Important text here</div></div>
After removal of "mydiv":
<div>Important text here</div>
*/document.getElementById("mydiv").outerHTML = document.getElementById("mydiv").innerHTML



// Remove all child nodes of a list:
// Get the <ul> element with id="myList"
var list = document.getElementById("myList");

// As long as <ul> has a child node, remove it
while (list.hasChildNodes()) {  
    list.removeChild(list.firstChild);
} 


Remove a <li> element with id="myLI" from its parent element (without specifying its parent node):
var item = document.getElementById("myLI");
item.parentNode.removeChild(item);


REMOVE AND INSERT AGAIN
Remove a <li> element from its parent, and insert it again:
var item = document.getElementById("myLI");

function removeLi() {
    item.parentNode.removeChild(item);
}

function appendLi() {
    var list = document.getElementById("myList");
    list.appendChild(item);
}



// Remove a <span> element from its parent and insert it to an <h1> element in another document:
var child = document.getElementById("mySpan");

function removeLi() {
    child.parentNode.removeChild(child);
}

function myFunction() {
    var frame = document.getElementsByTagName("IFRAME")[0]
    var h = frame.contentWindow.document.getElementsByTagName("H1")[0];
    var x = document.adoptNode(child);
    h.appendChild(x);
}


function unwrap(i) {
    var wrapper = i.parentNode.getElementsByClassName('wrapper')[0];
    // return if wrapper already been unwrapped
    if (typeof wrapper === 'undefined') return false;
    // remmove the wrapper from img
    i.parentNode.innerHTML = wrapper.innerHTML + i.outerHTML;
    return true;
}

function unwrap(wrapper) {
    // place childNodes in document fragment
    var docFrag = document.createDocumentFragment();
    while (wrapper.firstChild) {
        var child = wrapper.removeChild(wrapper.firstChild);
        docFrag.appendChild(child);
    }

    // replace wrapper with document fragment
    wrapper.parentNode.replaceChild(docFrag, wrapper);
}