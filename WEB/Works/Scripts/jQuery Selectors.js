var show = function(){
    document.getElementById("h1").innerText = "Hi, Hellow...!"
};
//jQuery ready function
jQuery(show);
//jQuery selectors
jQuery("selector1", "selector2", "selectorN");
jQuery("element[attr='value'][attr='value2']");
//jQuery Wrapped sets
jQuery("selector")[0];
jQuery("selector").get(0);
jQuery("selector").add("<div>Content to add</div>");//but not DOM
//Basic Selectors
jQuery("*");// All elements
jQuery("elementName");//
jQuery("#elementId");
jQuery(".class");
//Attribute selectors
jQuery("selector[attr]"); //required, hidden, selected, ect
jQuery("selector[attr='value']");//with a specific value
jQuery("selector[attr^'value'");//ever starts with the mentioned value
jQuery("selector[attr$'value'");//ever ends with value
jQuery("selector[attr*'value'");//ever has a string matching value
//Heirachy selectors
jQuery("ancestor descendant");
jQuery("parent elem > child elem");
jQuery("prev elem + next elem");
jQuery("prev sibling + next sibling");
//Postional
jQuery("element:first");
jQuery("element:last");
jQuery("element:5nth");