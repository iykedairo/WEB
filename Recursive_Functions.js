 function Each(fn, arr) { 
arr = arr || this;
var length = arr.length;
return (function Each(index){
return (index < length) ?
(function(){
fn.call(arr, arr[index], index, arr); 
Each(++index); 
}()) : false;
 }(0));
 };

 
function sib(node, fn){if (node == null) {return;}
this.stack = typeof this.stack === "undefined" ? [] : this.stack;
this.index = typeof this.index !== "number" ? 0 : this.index;
if (node.nodeType == 1) {
     this.stack[this.index] = node;
     if (fn.call(node, this.index, node, this.stack) == false) {return;}
     this.index++;
} node = node.nextSibling;
sib(node, fn);
return this.stack;
}




function nextSiblingOf(element){if ( element != null) {return;}
this.index = typeof this.index !== "number" ? 0 : this.index;
    this.node  = element.nextSibling;
    if(this.node.nodeType == 1){return this.node;
    }else{  this.index++; nextSiblingOf(this.node);}
        return this.node;
}

function prevSiblingOf(element){if ( element != null) {return;}
this.index = typeof this.index !== "number" ? 0 : this.index;
    this.node  = element.previousSibling;
    if(this.node.nodeType == 1){return this.node;
    }else{  this.index++; prevSiblingOf(this.node);}
        return this.node;
}

