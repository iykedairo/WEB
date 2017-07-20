function cdd(element, style, options){
    //support cdd(div, "color", "green")
    //support div.cdd("color", "green")
    //support cdd(div, cssText),
    //support div.css(),div.cdd(cssText)
    //support div.css("color")
    var cssblob, prop, val, empty, thisArg;
    arguments.length == 3 ? var threeArgs = 3 : arguments.length == 2 ? 
    var twoArgs = 2 : arguments.length == 1 ? var oneArg = 1 : empty = true;
}




function styles (object, styleOptions) {
if(!object){ var html;
try{ html = this.nodeTyp == 2 ? this : this[0];
    return  computedStyle(html);
}catch(er){return;} alert()}
function err(r){return "Techie.styles:-pt.css(htmlObj, {}) "+r;}
styleOptions = !styleOptions ? object : styleOptions;
object = (styleOptions == object || !object) ? this : object;
var html, index, style;
if (!isHTML(object) && !isCollection(object)) {
    throw new Error(err("No element specified."));
}
html = isHTML(object) ? [object] : object;
if (typeof object === 'string' && typeof styleOptions === 'string') {
    if (!isHTML(this) && !isCollection(this)) {
        throw new Error(err("No HTML object found."))
    }html = isList(this) ? this : [this];
            forEach(function(index, element){
            element.style[object] = styleOptions;
 }, html) ; return this;
        }
if (typeof styleOptions === 'string') {
forEach(function(index, element){
       element.style.cssText += styleOptions;
}, html);return this;
} 
if (toString.call(styleOptions) == "[object Array]") {
    forEach(function(index, element){
styleOptions.forEach(function(style){
    element.style.cssText += style;
});
}, html);console.warn(err(""));
 return this;
}
if (toString.call(styleOptions) != "[object Object]") {return;}
forEach(function(indices, element){
for(index in styleOptions){
 element.style[index] = styleOptions[index];
}
}, html);return this;
}





function cdd(element, style, options){
    //support cdd(div, "color", "green")

    //support div.cdd("color", "green")
    //support cdd(div, cssText),
    //support div.css(),div.cdd(cssText)
    //support div.css("color")
    var cssblob, prop, val, empty, thisArg, threeArgs, twoArgs, oneArg;
    arguments.length == 3 ?  threeArgs = 3 : arguments.length == 2 ? 
     twoArgs = 2 : arguments.length == 1 ? oneArg = 1 : empty = true;
empty ? element = this : element = element;
if (oneArg) {//we have only element and style || null
    style = isHTML(element) ? null : element; 
    element = style == element ? this : element;
}
if (twoArgs) {
    
}
    if (threeArgs) {}
}
