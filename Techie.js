;
(function(global, factor, factory) {

    if (typeof module === "object" && typeof module.exports === "object") {
        // For CommonJS and CommonJS-like environments where a proper window is present, execute the factory and get Techie.For environments that do not have a `window` with a `document`(such as Node.js), expose a factory as module.exports.This accentuates the need for the creation of a real `window`.e.g. var jQuery = require("jquery")(window);See ticket #14549 for more info.
        module.exports = global.document ?
            factory(global, true) : function(w) {

                if (!w.document) {
                    throw new Error("Techie requires a window with a document");
                }
                return factory(w);
            };
    } else {

        //We probably have a window//////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////
        function a(a) { ///////////////////////////////////////////////////////////////////////////////
            try { 
                var foo = confirm(a); //////////////////////////////////////////////////////////////////
                return foo ? prompt = confirm = alert = foo : false; /////////////////////////////////////////
            } catch (e) { var firstRun = true;///////////////////////////////////////////////////////////////////////////////////
                alert(e);///////////////
            }
        } ///////////////////////////////////////////////////////////////////////////////////////
        Object.prototype.a = a; //////////////////////////////////////////////////////////////////////
        a = function foo() {} /////////////////////////////////////////////////////////////
        a("Welcome To Techie Nigeria's JavaScript API version 1.00. All rights reserved."); //////////
        a("This is Techie. Take your time, explore the place;! Techie is a big place"); //////////////


        factory(global);
    } // Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function factor(global) {

}, function factory(root, sapi, pt, factor) {
    a = function foo() {
            return false
        } /////////////////////////////////////////////////////////
    this.pt = pt = Techie;
    this.sapi = sapi = document;

    var
        url = URL = sapi.URL,
        BaseURI = baseuri = BaseUri = sapi.baseURI,
        URI = uri = sapi.documentURI,
        element,
        Garbage = {},
        Store = {},
        array = [],
        str = "abc",
        Reg = /(?=\w+\s*\W*\w*)+$/;

    function match(name, obj) {
        var match = new RegExp("\\ b(" + name + ")\\b", "gi"),
            matched = match.match(obj);
        return matched;
    }

    var
        h1 = '<h1>',
        h2 = '<h2>',
        h3 = '<h3>',
        h4 = '<h4>',
        h5 = '<h5>',
        h6 = '<h6>',
        search = str.search,
        match = str.match,
        lower = str.toLowerCase,
        upper = str.toUpperCase,
        toString = Store.toString,
        slice = array.slice,
        split = str.split,
        splice = array.splice,
        join = array.join;

    function EventTarget() {}
    EventTarget.prototype = {
        constructor: EventTarget,
        addListener: function(type, listener) { // create an array if it doesn't exist 
            if (!this.hasOwnProperty("_listeners")) {
                this._listeners = [];
            }
            if (typeof this._listeners[type] == "undefined") {
                this._listeners[type] = [];
            }
            this._listeners[type].push(listener);
        },
        fire: function(event) {
            if (!event.target) {
                event.target = this;
            }
            if (!event.type) { //falsy
                throw new Error("Event object missing 'type' property.");
            }
            if (this._listeners && this._listeners[event.type] instanceof Array) {
                var listeners = this._listeners[event.type];
                var i, len = listeners.length;
                for (i = 0; i < len; i++) {
                    listeners[i].call(this, event);
                }
            }
        },
        removeListener: function(type, listener) {
            if (this._listeners && this._listeners[type] instanceof Array) {
                //corrected listeners 's'
                var listener = this._listeners[type];
                var i, len = listeners.length;
                for (i = 0; i < len; i++) {
                    if (listeners[i] === listener) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            }
        }
    };

    var Events = {
        EventTarget: EventTarget,
        target: new EventTarget(),
        getClipboardText: function(event) {
            var clipboardData = (event.clipboardData || window.clipboardData);
            return clipboardData.getData("text");
        },

        setClipboardText: function(event, value) {
            if (event.clipboardData) {
                return event.clipboardData.setData("text/plain", value);
            } else if (window.clipboardData) {
                return window.clipboardData.setData("text", value);
            }
        },

        getWheelDelta: function(event) {
            if (event.wheelDelta) {
                return (client.engine.opera && client.engine.opera < 9.5 ?
                    -event.wheelDelta : event.wheelDelta);
            } else {
                return -event.detail * 40;
            }
        },
        getCharCode: function(event) {
            if (typeof event.charCode == "number") {
                return event.charCode;
            } else {
                return event.keyCode;
            }
        },
        //used to get mouse click right, left, midle wheel
        getMouseButton: function(event) {
            if (document.implementation.hasFeature("MouseEvents", "2.0")) {
                return event.button;
            } else {
                switch (event.button) {
                    case 0:
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                        return 0;
                    case 2:
                    case 6:
                        return 2;
                    case 4:
                        return 1;
                }
            }
        },
        on: function(event, fn, object) {//window.on("scroll", function(){})
        object = object || this;
            object = isList(object) ? object : [object];
            forEach(function(index, object) {
                Events.addHandler(object, event, fn);
            }, object); 
            return this;
        },

        addHandler: function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        removeHandler: function(element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },


        getEvent: function(event) {
            return event ? event : window.event;
        },


        getTarget: function(event) {
            return event.target || event.srcElement;
        },


        preventDefault: function(event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },



        stopPropagation: function(event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },
        
        getRelatedTarget: function(event) {
                if (event.relatedTarget) {
                    return event.relatedTarget;
                } else if (event.toElement) {
                    return event.toElement;
                } else if (event.fromElement) {
                    return event.fromElement;
                } else {
                    return null;
                }
            }
            //more code here
    };
    Techie.EventUtil = Events;
    var EventUtil = Events;

    function populate(receiver, supplier) {
        //USE: populate(arrayOne, arrayTwo); simply extends arrayOne
        // USE: populate(Techie, [['fire', 'water', 'saver'], [fire, water, saver]])
        //USER2: populate(sapi, [['fire,water, saver'], [fire, water, saver]])
        if (isList(receiver) && isList(supplier)) {
            if (receiver.length != supplier.length) {
                throw new Error("Both receiver and supplier must be equal");
            }
            var index = 0,
                length = supplier.length;
            for (; index < length; index++) {
                receiver[receiver.length] = supplier[index];
            }
            return receiver;
        } else
        if (isList(supplier)) {
            var index = 0,
                props = supplier[0],
                vals = supplier[1],
                length = vals.length;
            if (props.length = 1) {
                props = String(props[0]).split(/,/)
            }
            if (props.length != vals.length) {
                throw new Error(supplier + " should have two equal arrays: first - strings, second the reference objects")
            }
            for (; index < length; index++) {
                receiver[props[index]] = vals[index];
            }
        }
    }

    function DefineGlobals(object, array) {
        if (arguments.length < 2) {
            array = object;
            object = typeof Techie !== 'undefined' ? Techie : this;
        }
        if (Object.prototype.toString.call(array) != "[object Array]") {
            array = [array];
        }
        var length = array.length,
            i = 0;
        for (; i < length; i++) {

            window[array[i]] = object;
        }
    }


    function DefineAccessors(object, name, gttr, sttr, boo) {
        boo = boo == false ? false : true;
        Object.defineProperty(object, name, {
            get: gttr,
            set: sttr,
            enumerable: boo,
            configurable: true
        });
    }

    function Slice(array, n, stop) {
        n = n || 0;
        array = array || this;
        stop = stop || array.length;
        var argsArray = [],
            length = stop,
            i = 0;
        for (; i < length && array[n] != null; i++) {
            argsArray[i] = array[n];
            n++
        }
        return argsArray;
    }

    function explode(array, n) {
        if (typeof array !== 'object' && typeof array !== 'array') {
            return null;
        }
        var stk = [],
            item = null,
            argsArray = array,
            index;
        if ((Object.prototype.toString.call(array) != '[object Object]') && ('0' in array)) {
            argsArray = Slice(array, n || 0);
        }
        return function explode(array) {
            for (index in array) {
                if (array.hasOwnProperty(index)) {
                    item = array[index];
                    if (toString.call(item) == '[object Array]') {
                        explode(item);
                    } else {
                        stk.push(item);
                    }
                }
            }
            return stk
        }(argsArray);
    }



    function isHTML(s) {
        if (isNode(s)) {
            if (s.nodeType == 1) {
                return true;
            }
        }
        return false;
    }



    //Type considerations

    var plain = {
        booleans: function(value) {
            return Object.prototype.toString.call(value) == "[object Boolean]";
        },
        objects: function(value) {
            return Object.prototype.toString.call(value) == "[object Object]";
        },
        arrays: function(value) {
            return Object.prototype.toString.call(value) == "[object Array]";
        },

        functions: function(value) {
            var f = Object.prototype.toString.call(value) == "[object Function]" || typeof value === 'function',
                notReg = Object.prototype.toString.call(value) != "[object RegExp]";
            return (f && notReg);
        },
        RegExp: function(value) {
            return Object.prototype.toString.call(value) == "[object RegExp]";
        },

        isNativeJSON: function(value) {
            return window.JSON && Object.prototype.toString.call(JSON) == "[object JSON]";
        },

        strings: function(value) {
            return Object.prototype.toString.call(value) == "[object String]";
        },
        numbers: function(value) {
            return Object.prototype.toString.call(value) == "[object Number]";
        }
    };






    function Techie(selector, context) {
        //Welcome To Techie JS API version: 1.00 All Rights Reserved.
        if (!(this instanceof Techie)) {
            return new Techie.sapi.Techie(selector, context);
        }
        return Techie((selector || this), context);
    }


    Techie.sapi = Techie.prototype = {
        //Techie home 
        constructor: Techie,
        Techie: function(selector, context) {
            if (Object.prototype.toString.call(selector) == '[object String]') {
                var saved = selector;
                selector = false;
            }
            if (!selector && typeof saved !== 'string') {
                return this;
            }
            //if(typeof selector === 'Object' && !('length' in selector) && !('nodeType' in selector)){a(selector)}
            if (typeof plain === 'object' && (plain.objects(selector) || plain.arrays(selector))) { //pure objects || arrays
                DefineProperties(this, selector, true);
              DefineProperties(this, {length: selector.length}, false)
                return this;
            }
            if (typeof plain === 'object' && plain.functions(selector)) {
                Techie.Ready = selector;
                return this;
            }
            context = (typeof context === 'object' && context.querySelectorAll) ? context : document;
            var nodes = [];
            if (isList(selector)) {
                nodes = selector.length > 1 ? slice.call(selector) : [selector];
                var sel = selector;
                selector = null;
            }
            if (typeof saved === 'string') {
                if (saved[0] === '<' && saved[saved.length - 1] === ">") {
                    nodes = [createFrag(saved, context)];
                    var sel = saved;
                    saved = null;
                } else {
                    nodes = slice.call(context.querySelectorAll(saved));
if (!nodes || nodes[0] == null) {
isHTML(sapi.getElementsByClassName(saved)[0]) ?   str = "." + saved :
isHTML(sapi.getElementById(saved)) ? str = "#" + saved : str = null;
if (str != null) {
    nodes = slice.call(sapi.querySelectorAll(str));
}} var sel = saved; saved = null;
                }
            }
            if (typeof selector !== "undefined" && selector) {
                //if at this point, selector is not saved and emptied or returned, deal with it
                nodes = [selector];
                var sel = selector;
                selector = null;
            }
            var prevObject, nextObject;
            if (nodes.length) {
                forEach(function(i, e, o) {
                    this[i] = e;
                    try {
prevObject = e.previousElementSibling;
nextObject = e.nextElementSibling;
DefineProperties(this[i], element, false);
DefineAccessors(this[i], "CSS", function gettr(){return  function(object, option ){
        option = ( object && (object.nodeType || isCollection(object))) ? (option || "") : object; 
        object = option == object ? this : object;return styles(object, option); };}, styles);
DefineAccessors(this[i], "css", function gettr(){return  function(object, option, more){
if (arguments.length == 3) { return styles(object, option, more)}
    else if ((arguments.length == 2)) {
        return styles.call(this, object, option);}
        else if (arguments.length == 1) { return styles(object)} else{ styles(this);}

/*option = ( object && (object.nodeType || isCollection(object))) ? (option || "") : object; 
a(option)
        object = option == object ? this : object;return styles(object, option);*/ };}, styles);
DefineAccessors(this[i], "styles", function gettr(){return  function(object, option ){
        option = ( object && (object.nodeType || isCollection(object))) ? (option || "") : object; 
        object = option == object ? this : object;
        return styles(object, option); };}, styles);
                    } catch (e) {console.warn(e);}
                }, nodes, this);
                DefineProperties(this, { 
                    selector: sel,
                    prevObject: prevObject,
                    nextObject: nextObject,
                    context: context,
                    nodes: nodes,
                    length: nodes.length
                }, false);

            }
        },








        get status() {
            return sapi.readyState;
        },
        get state(){
            return sapi.readyState;
        },
        get readyState (){
            return sapi.readyState;
        },
        get isReady() {
            return (sapi.readyState === 'loaded' || sapi.readyState === 'complete');
        },

        get version() {
            return this.version;
        },
        
        isready: false,

        onReady: function(func) {
            this.isready = true;
            var head = sapi.head,
                body = head.nextElementSibling;
            this.body = body;
            this.head = head;
            func.call(this, this, sapi, body, head, Techie, window);
        },
        READY: function(func) {
            var args = Array.prototype.slice.call(this, arguments);
            var boundReadyFunc = func.bind(this, args.slice(1));
            if (this.isready) {
                this.onReady.bind(this, func);
            } else {
                document.addEventListener("DOMContentLoaded",
                    this.onReady.bind(this, func), false);
            }
        },



DomReadyState: false,isHTML: isHTML,isNode: isNode,isNodeList:isNodeList,dim: dim,
Slice: Slice,slice: slice,isTag: isTag,plain: plain,isList: isList,
isArrayLike: isArrayLike,DefineGlobals: DefineGlobals,Elements: Elements,
html: html,HTML: html,events: Events,Events: Events,body: sapi.body,
head: sapi.head,mixin: mixin,baseuri: baseuri,BaseUri: BaseUri,
SAPI: SAPI,pt: Techie,URL: URL,url: url,Url: url,uri: uri,URI: URI,
BaseURI: BaseURI,upper: upper,lower: lower,page: true,Store: {},store: [],
array: [],create: create,createFrag: createFrag,isElement: isHTML,
Extender: Extender,isCollection: isCollection,populate: populate,
Bool: type,walk_the_DOM: walk,walk: walk,DefineProperty: DefineProperty,
nthChild: nthChild,DefineProperties: DefineProperties,explode: explode,DefineAccessors: DefineAccessors,
index: index,Index: Index,Children: Children,type: type,types: type,
ChildPos: ChildPos,tag: tag,blob: blob,element: element,show: show,
objects: objects,arrays: arrays,functions: functions,strings: strings,
numbers: numbers,booleans: booleans, removeClass: removeClass,
invalidChars: invalidChars,extend: extend,isAbsent: isAbsent, 
isNumber: plain.numbers,isString: plain.strings,removeAttr:removeAttr,	
isUndefined: type.undefineds,isPrimitive: type.primitives,isArray: plain.arrays,
isObject: plain.objects,isFunction: plain.functions,Attr:Attr,attrHooks:attrHooks,
isBoolean: plain.booleans,isPresent: isPresent,addClass:addClass,
computedStyle: computedStyle, getElementsByAttribute: getElementsByAttribute,



        //TECHIE METHODS
        EnterKeyPress: function(event) {
            event = event || window.event;
            if (event.keyCode == 13) {
                console.log("Session submitted. . .");
                if (!value.value || !item.value) {
                    console.log("Please supply the values.");
                } else {
                    Foo();
                    console.log("Session values computed.");
                }
            }
        },

        Keypress: function(evt) {
            evt = evt || window.event;
            switch (evt.keyCode) {
                case 13: //enter
                    break;
                case 96: //esc ..
                    break;
                case 32: //space bar
                    break;
                case 16: //shift
                    break;
                case 8: //backspace
                    break;

            }
        },


        Table: function(a) {
            console.clear();
            console.log("Table initializes . . . start");
            var
                table = sapi.createElement("table"),
                Row = sapi.createElement("tr"),
                Cell = sapi.createElement("td"),
                anotherCell = sapi.createElement("td"),
                body = body || sapi.body;
            Cell.id = "cell 1", anotherCell.id = "cell 2";
            Cell.innerHTML = "Cell One", anotherCell.innerHTML = "Cell Two";

            table.id = "table";
            this.Cell = Cell, this.Row = Row, this.anotherCell = anotherCell;
            console.log("....end");
            ! function() {
                console.log("Insert initializes . . . start");
                if (a) {
                    console.clear();
                    console.log("We have argument " + a + " supplied. Good to go!");
                    if (arguments.length == 0) {
                        a.insertBefore(Row, a.children[0]);
                        //table.insertBefore(Row, table[0]);
                        Row.insertBefore(Cell, Row[0]);
                        Row.insertBefore(anotherCell, Row[1]);
                        console.log("Success!" + table + "created with these information:- id:" + table.id + ", " + Row + " " + Cell + ": " + Cell.id + " " + anotherCell + ": " + anotherCell.id);

                        return table;
                    } else if (arguments.length != 0) {
                        console.log("Please, only one arguments are required.");
                    } else {
                        console.log("Your arguments :" + arguments[0] + arguments[1] + "are not applicable in this context.");
                    }
                } else {
                    console.clear();
                    console.log("No values . . . default values will be submitted instead");
                    ! function() {
                        body.insertBefore(table, body[0]);
                        table.insertBefore(Row, table[0]);
                        Row.insertBefore(Cell, Row[0]);
                        //			Row(Cell, Row[1]);
                        Cell.parentNode.insertBefore(anotherCell, Cell[1]);

                        return table;
                    }();
                }
            }();
        },

        Clear: function() {
            item.value = " ";
            item.placeholder = "New item";
            value.value = " ";
            value.placeholder = "The vlaue";
            item.focus();
        },

        Clean: function() {
            //reset all fields here

            var clear = (function() {
                Total = 0;
                total.innerHTML = "Total: " + Total;
                Results.innerHTML = " ";
                prompt("You must write something now.")
            });
            return [clear(), Clear()];
        },





        Create: function(e) {
            e = sapi.createElement(e);
            return this;
        },
        CreateElement: function(e, b) {
            e = sapi.createElement(e);
            b.appendChild(e);
            return this;
        },

        CreateToBody: function(e) {
            var element = Create(e);
            body.appendChild(element);
            return this;
        },

        CreateRow: function(x) {
            var temp = Create("table");
            temp.innerHTML = "<tr width=100%> <td width=50%></td> <td width=50%></td></tr>";
            var
                RowData = temp.firstChild;
            x.insertBefore(RowData, x[0]);
            console.log("Done!");
        },

        CreateTable: function(node) {
            var fragment = sapi.createDocumentFragment();
            var temp = Create("hr");
            temp.innerHTML =
                "<table id=table width=50% border=1px><tr width=100%><td width=50%></td> <td width=50%></td></tr></table>";
            var table = temp.firstChild,
                body = body || node;
            body.insertBefore(table, body.children[0]);
            console.log(temp + "craeted with id: ");
        },






        pop: {
            obj: null,
            minimal: function(message, title, styleObject) {
                //a-message,b-title
                message = message || 'Welcome onbaord';
                title = title || 'Prize Techie';
                var cover = sapi.createElement('div'),
                    body = sapi.body;
                cover.textContent = "I love crazy boys"
                    //focus on it and blur the body of the document 	           	
                    //pt.styles(cover, {opacity:1, "background-color": "blue", "z-index": 2, width: body.width, height: body.height});

                var footerBlob = '<span id=cancel>Nope!</span><span id=ok>Sure!</span>',
                    bodyBlob = '<div id=pop><h1 id=i></h1><p id=p></p><footer id=ft></footer></div>',
                    div = pt.createFrag(bodyBlob);
                this.obj = div;
                if (styleObject) {
                    if (toSting.call(styleObject) != '[object Object]') {
                        throw new TypeError('Only a plain object is required to extend the popup styles. Array or string is not supported');
                    }
                    pt.mixin( this.styles,styleObject);
                }
                body.appendChild(cover)
                var dive = div.children,
                    header = dive[0],
                    body = dive[1],
                    footer = dive[2];
                header.innerHTML = title;
                body.innerHTML = message;
                footer.innerHTML = footerBlob;
                sapi.body.appendChild(div);
                var spanA = footer.firstChild,
spanB = footer.lastChild;
pt.css(spanA, {'position': 'relative','right': '6em',
	'display': 'inline-block','padding-top': '3em'});
 pt.css(spanB, {'position': 'relative','left': '4em',
 	'display': 'inline-block','padding-top': '3em'
         });
                pt.styles(sapi.body, {
"position": "fixed","pointer-events": "none",opacity: 1
                });
                //data-dissabled

                pt.css( this.obj,this.styles); //styles the div
                EventUtil.addHandler(spanA, 'click', function() {
                    pt.pop.hide();
                });
                EventUtil.addHandler(spanB, 'click', function() { /* pt.Log(this.innerText, false); */
                    pt.pop.hide();
                });
            },
            styles: {
'display': 'block','font-size': '120%','color': 'white','left': '25%',
'background': 'purple','position': 'absolute',"text-align": "center",
'top': '3em','width': '40%','border-radius': '.3em','z-index': '1',
'padding': '1em',"pointer-events": "auto",opacity: "1"
},
            display: function() {
                pt.css(this.obj,"display:block");
            },
            hide: function(object) {
                sapi.body.style["pointer-events"] = "auto";
                pt.FX.fadeOut(object || this.obj, {
                    duration: 1700,
                    complete: function(e) {
                        // a(this.textContent)
                    }
                });
       pt.styles(sapi.body, {
    "position": "relative",opacity: 1  
});

            //(object || this.obj).style.display = 'none';
            },
            small: function(msg) {
                var div = sapi.createElement('div'),
                    def1 = {
display: 'block',position: 'absolute',left: "12%",width: '35%',
top: '2em',color: 'cyan',padding: '1em',background: '#444',
'font-size': '1em','z-index': 1,'text-align': 'center'
},
     def2 = {display: 'none'};
                div.id = 'test';
                var ed = "<p><small>Yet, they are real fun!!</small></p>";
                div.innerHTML = msg || "I love to use a popup, but they drive me crazy." + ed;
                sapi.body.appendChild(div);
                Techie.styles( div, def1);
                Events.addHandler(sapi, 'click', function() {
                    pt.pop.hide(div)
                });

            }
        },







        Cookie: function(checkFirstVisit) {
            if (document.cookie.indexOf("mycookie") == -1) {
                //cookie doesn't exist, create it
                document.cookie = "mycookie = 1";
            } else {
                //not first visit, so fire your weapon.
                a("You just refreshed. Why?");
            }
        },

        clone: function(object) {
            if (object === null || typeof object !== "object" || "isActiveClone" in object) {
                //return object;
                if (object instanceof Date) {
                    var temp = new object.constructor();
                } else {
                    var temp = object.constructor();
                }
                for (var key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key)) {
                        object["isActiveClone"] = null;
                        temp[key] = clone(object[key]);
                        delete object["isActiveClone"];
                    }

                }
                return temp;
            }
        },


        stringify: function(obj, element) {
            if (!obj) {
                return null;
            }
            var store = [];
            if (toString.call(obj) == "[object Array]") {
                var index = 0;
                length = obj.length;
                for (; index < obj.length; index++) {
                    store.push(h4 + index + ": " + obj[index]);
                }
            } else {
                Object.keys(obj).forEach(function(e, i, array) {
                    i = Object.getOwnPropertyDescriptor(obj, e);
                    i = h4 + e + ": " + i.value;
                    store.push(i);
                });
            }
            if (element) {
                if (toString.call(element) == "[object Boolean]") {
                    return store;
                }
            }
            if (isArrayLike(element)) {
                element.forEach(function(index) {
                    index.innerHTML = store;
                });
                return store;
            }
            (element) ? (element.innerHTML = store) :
            Techie.Log(store, false);
            return store;
        },

        small: function(boo, msg) {
            var div = sapi.createElement('div'),
                def1 = {
                    display: 'none',
                    position: 'absolute',
                    left: "12%",
                    width: '90%',
                    top: '2em',
                    color: 'crimson',
                    background: 'silver',
                    'font-size': '2em',
                    'z-index': 1
                },
                def2 = {
                    display: 'none'
                };
            div.textContent = msg || "I love to use a popup. It's fun!!";
            sapi.body.appendChild(div);
            Techie.styles( div, def1);
            //pt.pop.small(true,msg).trigger;
            return {
                trigger: function() {
                    if (!!boo) {
                        alert("work in progress");
                    }
                    if (div.style.display == 'block') {
                        div.style.display = 'none';
                    } else if (div.style.display == 'none') {
                        div.style.display = 'block';
                    }
                }
            };
        },

        msg: function(text, e) {
            this.hideErrors();
            var ee = sapi.createElement("span");
            ee.id = 'msg';
            e = e || sapi.body;
            if (arguments.length == 1) {
                if (this instanceof HTMLElement) {
                    e = this;
                }
            }
            ee.innerHTML = text;
            Elements.props.append(ee, e);
            pt.styles(ee, {
'box-sizing': 'border-box','word-wrap': 'break-word','color': 'indigo',
  'position': 'absolute','display': 'inline','border-radius': '2px',
'padding': '1em','background-color': '#efefef','top': '0',
'border': '1px solid olive','margin': 'inherit','font-size': '10px'
 });
            pt.styles( sapi.body,"width:23em");

            function fire(fn, x) {
                var timer = setTimeout(function() {
                    fn();
                    clearTimeout(timer);
                }, x);
            }
            fire(pt.hideErrors, 5000);
        },


        Log: function(text, bool, element) {
            Techie.ready(function(techie, sapi, body, head, PT, w) {
                if (bool != false) {
                    this.hideErrors();
                }
                var error = sapi.createElement("h3");
                error.id = "err";
                element = element || body;
                if (arguments.length == 1) {
                    if (this instanceof HTMLElement) {
                        element = this;
                    }
                }
                error.innerHTML = text;
                Elements.props.prependChild(element, error);
                Techie.styles(error, {
'background-color': '#444','margin': '.1em auto','padding': '0.8em',
'border': '1px #fff','text-align': 'justify','box-sizing': 'border-box',
'word-wrap': 'break-word','color': 'cyan','border-radius': '2%'
                } );
            });
        },





        hideErrors: function(err) {
            var msg = Techie('msg'),
                error = Techie("#err");
            err = msg[0] ? msg : error;
            forEach(function(index, err) {
                if (isHTML(err)) {
                    err.style.display = 'none';
                }
            }, err);
            return 'done';
        },

        min: function(text, element) {
            this.hideErrors();
            var error = sapi.createElement("span");
            error.id = 'err';
            element = element || sapi.body;
            if (arguments.length == 1) {
                if (this instanceof HTMLElement) {
                    element = this;
                }
            }
            error.innerHTML = text;
            Elements.props.prependChild(error, element);
            Techie.styles(error, {
'color': 'crimson','border': '.1em solid crimson','position': 'absolute',
'font-size': '10px','display': 'block-block','box-sizing': 'border-box',
'word-wrap': 'break-word'
            });
            pt.styles(sapi.body, "width:23em");
            return error;
        },

        methods: function(o) {
            var stk = [],
                j, i;
            o = o || pt;
            for (i in o) {
                j = o[i];
                if (functions(j)) {
                    if (o.hasOwnProperty(i)) {
                        stk.push(h4 + (typeof o[i]) + ': ' + i);
                    }
                }
                // stk = stk.sort(this.Alphabetical);
            }
            this.Log(stk, false);
            return stk;
        },
        props: function(o) {
            var stk = [],
                i, j;
            o = o || pt;
            for (i in o) {
                j = o[i];
                if (type.isAtype(j)) {
                    if (o.hasOwnProperty(i)) {
                        stk.push(h4 + (typeof o[i]) + ': ' + i);
                    }
                }
                stk = stk.sort(this.Alphabetical);
            }
            this.Log(stk, false);
            return stk;
        },

        stringifyAll: function(object, bool, element) {
            //if bool is false, for in will be careful. if e is a bool, store wont be logged, if it an elem, fine, else body is the default container
            var store = [],
                stk = [],
                j, i;
            for (i in object) {
                if (bool == false) {
                    if (object.hasOwnProperty(i)) {
                        j = h4 + i + ": " + object[i];
                        stk.push(i + ': ' + object[i]);
                        store.push(j);
                    }
                } else {
                    j = h4 + i + ": " + object[i];
                    stk.push(i + ': ' + object[i]);
                    store.push(j);
                }
            }
            if (arguments.length == 3) {
                if (isHTML(element)) {
                    this.Log(store, false, element);
                } else if (typeof element === 'boolean') {
                    return stk;
                } else {
                    Techie.Log(store, false);
                }
            }
            return stk;
        },

        Timestable: function(count, limit, rounds) {
            //Timestable(1, 12, 12); Perfect
            count = count || 1,
                limit = limit || 12, rounds = rounds || 12;
            var round = 1,
                store = [],
                stk = [],
                ocount = count;
            while (true) {
                if (count <= limit * ocount) {
                    store.push(count);
                    count += ocount;
                } else {
                    store.push("<br/>");
                    stk.push(round);
                    ocount++;
                    count = ocount;
                    if (round < rounds) {
                        round++;
                    } else {
                        pt.Log(store.join(" "), false);
                        pt.Log(stk, false);
                        break;
                    }
                }
            }
        },
        counter: function(count, limit, rounds) {
            //use: counter(0, 21, 7);
            /*//count will show the start
            01 ,02 ,03 ,04, 05, 06, 07,//End-game: round will indicate how long for each row across
            08, 09, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21//limit will show the limit of the overall count
            */
            count = count || 1,
                limit = limit || 15, rounds = rounds || 15;
            var round = 1,
                store = [],
                stk = [],
                ocount = count;
            while (true) {
                if (count <= limit) {
                    store.push(count);
                    count++;
                } else {
                    store.push("<br/>");
                    stk.push(round);
                    if (round < rounds) {
                        round++;
                        count = ocount;
                    } else {
                        pt.Log(store, false);
                        pt.Log(stk, false)
                        break;
                    }
                }
            }
        },
        ownProp: function(z, y) {
            return z.hasOwnProperty(y);
        },


        //STRINGS STRINGS STRINGS
        commaSeparated: function(x) {
            var comSep = /(?=\w)+?[\w]+\s*\,\s*(\w+|\,)\s*$/;
            return comSep.test(x);
        },
        StripSpace: function(s) {
            //x.replace(/(^\s+|\s+$)/g, "")
            return String(s).replace(/\s/g, '');
        },

        StripCommas: function(str) {
            //s.replace(/\s*(,|^|$)\s*why/g, "$1")
            str = String(str).replace(/\,+(,|\s\,+|$)/g, ',');
            str = str.replace(/^\,|\,$/g, '')
            return str;
        },

        ExtractLetters: function(s) {
            if (arguments.length) {
                var stk = [];
                s = slice.call(arguments);
                s.forEach(function(s) {
                    stk.push(String(s));
                });
                s = String(stk).split('');
                s = String(s).split(/[\W]*\s*/);
                return s;
            }
            return '--NIL--';
        },


        ExtractWords: function(s) {
            if (arguments.length) {
                var stk = [];
                s = slice.call(arguments);
                s.forEach(function(s) {
                    stk.push(String(s));
                });
                s = String(stk);
                s = s.split(/[\W]+\s*/);
                return s;
            }
            return '--NIL--';
        },


        capitalize: function(s) {
            if (arguments) {
                var stk = [],
                    arr = slice.call(arguments);
                arr.forEach(function(s) {
                    //t hold one item from pos 0
                    var t = String(s).slice(0, 1);
                    //u hold all items from pos 1
                    var u = String(s).slice(1);
                    var C = t.toUpperCase().concat(u.toLowerCase());
                    stk.push(C);
                });
                return stk;
            }
            return false;
        },


        //ARRAY ARRAY ARRAY

        search: function(o, s) {
            if (arguments.length === 1) {
                s = this.explode(arguments);
                o = this;
            } else {
                s = this.explode(arguments, 1);
            }
            var store = [],
                name, value;
            for (i in o) {
                try {
                    if (o[i].name) {
                        name = o[i].name;
                    } else {
                        name = i;
                    }
                } catch (e) {
                    name = i
                }
                value = o[i];
                s.filter(function(e) {
                    if (e === name) {
                        e = h4 + name + ': ' + value;
                        store.push(e);
                    }
                });
            }
            this.Log(store, false);
        },
        extendArray: function(x, y) {
            //extend x with y
            if (x.length && y.length) {
                var i = x.length,
                    j;
                for (j in y) {
                    i += 1;
                    if (ownProp(y, j))
                        x[i] = y[j];
                }
                x = pt.StripCommas(x);
                return x.split(',');
            }
        },

        merge: function(first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;
            while (j < len) {
                first[i++] = second[j++];
            } // Support: IE<9 // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists) 
            if (len !== len) {
                while (second[j] !== undefined) {
                    first[i++] = second[j++];
                }
            }
            first.length = i;
            return first;
        },


        MapArrayToArray: function(x, y) {
            if (x.length !== y.length) {
                return null
            }
            var mapped = {};
            x.forEach(function(e, index) {
                mapped[e] = y[index];
            });
            mapped = pt.ObjectToArray(mapped);
            return mapped;
        },

        ObjectToArray: function(o) {
            o = pt.stringifyAll(o, false, false);
            return o;
        },

        searchArray: function(A, Aa) {
            var stk = [];
            Aa = pt.explode(arguments, 1);
            Aa = pt.StripCommas(String(Aa)).split(',')
            Aa.forEach(function(e) {
                if (pt.index(e, A) != -1) {
                    stk.push(e);
                }
            });
            return stk;
        },


        ArrayToObject: function(rr) {
            var object = {},
                vls = this.StripCommas(String(rr).split(/[\w]+\:/)).split(','),
                prps = this.StripCommas(String(rr).split(/\:\w+/)).split(',');
            prps.forEach(function(prp, i) {
                object[prp] = vls[i];
            });
            return object;
        },
        ExtractArgsArr: function() {
            if (arguments) {
                var args = slice.call(arguments),
                    len = args.length,
                    stk = [];
                args.forEach(function(e) {
                    stk.push(e);
                });
                this.length = len;
                return stk;
            }
            return false;
        },

        Reverse: function(arr) {
            if (arr.constructor !== Array) {
                var err = "Only arrays are supported.";
                pt.min(err);
                throw new TypeError(err);
            }
            var i, Results = [];
            for (i = arr.length; i >= 0; --i) {
                Results.push(arr[i])
            }
            return Results.join(' ');
        },

        Alphabetical: function(a, b) {
            return (a < b) ? -1 : (a > b) ? 1 : 0;
        },

        //DATES

        today: function() {
            var getNow = function() {
                var DateToday = new Date();
                return DateToday; //.toUTCString();
            }();
            var dateDiv = document.createElement("h3");
            var dateDivPos = document.body.appendChild(dateDiv);
            dateDiv.innerHTML = getNow;
            dateDiv.style.cssText = "background: #000000; color: #ebebeb; text-align:center;font-style: Impact;font-weight:bold;font-size:100%;border-radius:4%;width:20%;position:absolute;right:0;top:0";
            //call it in your document script thus:
            //EventUtil.today();
            //works with both inline and external scripts same way.
        },


        //ELEMENT ELEMENT ELEMENT

        //NUMBER NUMBER NUMBER
        Hex: function(obj) {
            if (!obj) {
                obj = {};
                var i = 0;
                while (i < 111) {
                    obj[i] = i;
                    i++;
                }
            } else
            if (obj.constructor != Object) {
                if (typeof obj === 'number') {
                    obj = obj.toString(16);
                    pt.Log(obj);
                    return obj;
                }
                return null;
            }
            var store = [];
            Object.keys(obj).forEach(function(e, i, arr) {
                arr = Object.getOwnPropertyDescriptor(obj, e);
                i = arr.value;
                i = h3 + i + ': ' + i.toString(16);
                store.push(i);
            });
            pt.Log(store.join(' '));
        },
        add: function(x) {
            var total = 0;
            x = pt.explode(arguments, 0);
            var len = x.length,
                i = 0;
            return function add(x) {
                if (len) {
                    if (typeof x[i] === 'number') {
                        total += +x[i];
                        i++;
                        len--;
                        add(x);
                    }
                }
                return total;
            }(x);
        },

        Binarize: function(x) {
            match = this.Bool.Nan(x);
            var s = this.Bool.empty(x);
            if (s || match) {
                var err = "Invalid command";
                pt.min(err);
                throw new Error(err);
            }
            var Results = [],
                y = x;
            if (x == 0) {
                Results.push(x);
            }
            while (true) {
                if (x < 1) {
                    break;
                } else {
                    if (x % 2 == 0) {
                        x = x / 2;
                        Results.push(0);
                    } else if (x % 2 == 1) {
                        x -= 1;
                        x = x / 2;
                        Results.push(1);
                    }
                }
            }
            return {
                Raw: Results.join(' '),
                Results: function() {
                    var r = pt.Reverse(Results);
                    return "The binary of " + y + " is " + r.join(' ');

                }()
            };
        },

        /*
        SPECIAL CONSIDERATIONS
        */

        
        

        //END OF SPECIAL CONSIDERATIONS







    };
/************************TECHIE**************************************/

/*********************************************************************
*********************************************************************
**********************************************************************


*////////////////////////////////////////////////////////////////////


DefineAccessors(Techie.prototype, "Extend", function gttr(){
	return function(receiver, supplier){
 mixin(receiver, supplier); return this;
	};
}, function sttr(supplier){
	mixin(this, supplier); return this;
})

    DefineAccessors(Techie.prototype, "ready", function gttr() {
        /*///////////////////ready getter/////////////////////////*/
        a = {}.a; /////////////////ready getter//////////////////

        var timer;
        return function(fn) {
            timer = setInterval(function() {
                if (this.isReady) {
                    clearInterval(timer);
                    var head = sapi.head;
                    var body = head.nextElementSibling;
                    fn.call(this, this, sapi, body, head, Techie, window);

                    return this.status;
                }
            }.bind(this), 0);
        };
    }, function sttr(fn) {
        /*///////////////////ready setter/////////////////////////*/
        a = {}.a; ////////////////ready setter////////////////////

        var timer;
        timer = setInterval(function() {
            if (this.isReady) {
                clearInterval(timer);
                var head = sapi.head;
                var body = head.nextElementSibling;
                fn.call(this, this, sapi, body, head, Techie, window);
                return this.status;
            }
        }.bind(this), 0);
    }, true);


    DefineAccessors(Techie.prototype, 'Ready', function gttr() {
            /*/////////////////////Ready getter///////////////////////*/
            a = {}.a; /////////////////Ready getter///////////////////
            return function(fn) {
                if (this.isready) {
                    this.onReady.bind(this, fn);
                } else {
                    document.addEventListener("DOMContentLoaded", this.onReady.bind(this, fn), false);
                }
            };
        },
        function sttr(fn) {
            /*/////////////////Ready setter///////////////////////////*/
            a = {}.a; ///////////////Ready setter/////////////////////
            if (this.isready) {
                this.onReady.bind(this, fn);
            } else {
                document.addEventListener("DOMContentLoaded", this.onReady.bind(this, fn), false);
            }

        });

    DefineAccessors(Techie.prototype, "forEach", function gttr(fn, object, thisArg) {
        return function(fn, object, thisArg) {
            if (toString.call(fn) != "[object Function]") {
                return;
            }
            if (toString.call(this) == "[object Array]") {
                thisArg = object;
                object = this;
            }
            if (!object) {
                object = this;
            }
            if (object.hasOwnProperty("0") && typeof object.length === "number") {
                var index = 0,
                    length = object.length;
                for (index; index < length; ++index) {
                    fn.call(thisArg || object[index], index, object[index], object);
                }
            } else {
                for (index in object) {
                    if (object.hasOwnProperty(index)) {
                        fn.call(thisArg || object[index], index, object[index], object);
                    }
                }
            }
            return object;
        };
    }, function sttr(fn) {
        if (toString.call(fn) != "[object Function]") {
            return;
        }
        var object = this;
        if ('0' in object && typeof object.length === "number") {
            var index = 0,
                length = object.length;
            for (index; index < length; ++index) {
                fn.call(object[index], index, object[index], object);
            }
        } else {
            for (index in object) {
                if (object.hasOwnProperty(index)) {
                    fn.call(object[index], index, object[index], object);
                }
            }
        }
        return object;
    }, true);


DefineAccessors(Techie.prototype, "Each", function gttr(){
return forEach;
}, function sttr(fn){
forEach(fn, this)
});

DefineAccessors(Techie.prototype, "each", function gttr(){
return forEach;
}, function sttr(fn){
forEach(fn, this)
});

DefineAccessors(Techie.prototype, "css", function gettr(){
    return  function(object, style, option){
        if (!arguments.length) { 
            if (this.nodeType || this[0].nodeType) { return styles(this);}
             else {throw new Error("No arguments at Techie.css");}
      }
        if (arguments.length == 3) {return styles(object, style, option);}
var this_bool = !!(this.nodeType || isCollection(this));
var object_bool = !!(object.nodeType || isCollection(object));
if (object_bool) {return styles(object, style);}
if (this_bool) {
    if (typeof style === "string" && typeof object === "string") { return styles(this, object, style)}
        else if(style) {return console.log("Syntax error: Usage:--- pt(#div).css({}||[]||'cssTextblob')")}
            return styles(this, object);
}
   }; }, styles);

DefineAccessors(Techie.prototype, "styles", function gettr(){
    return  function(object, style, option){
        if (!arguments.length) { 
            if (this.nodeType || this[0].nodeType) { return styles(this);}
             else {throw new Error("No arguments at Techie.css");}
      }
        if (arguments.length == 3) {return styles(object, option, more).bind(this);}
var this_bool = !!(this.nodeType || isCollection(this));
var object_bool = !!(object.nodeType || isCollection(object));
if (object_bool) {return styles(object, style).bind(this);}
if (this_bool) {
    if (typeof style === "string" && typeof object === "string") { return styles(this, object, style)}
        else if(style) {return console.log("Syntax error: Usage:--- pt(#div).css({}||[]||'cssTextblob')")}
            return styles(this, object).bind(this);
}
   }; }, styles);


 function styles ( element, style, options )    {/*a(element)*/
var temp1, temp2, temp3, ret, string, object, array, elements,
styleError = "Techie.css:- the style specified is invalid. It should be a plain object, array or string",
elementError = "Techie.css:- the element specified is invalid. It should be a HTMLObject or a collection of elements",
cssTextblob =  /(\w+[-]{0,1}\w+\s*:\s*\w+[-]{0,1}\w+\s*[;]{0,1})+/g; //normal-dev: good-hand
cssTextblob = /([\d\w]+[-]{0,1}[\d\w]+\s*:\s*[#\d\w]+[-]{0,1}[\d\w%]*\s*[;]{0,1})+/g;//dev-improvedBy: #20%  
cssTextblob =  /(([\d\w]+[-]{0,1}[\d\w]+)+\s*:\s*[#\d\w]+[-]{0,1}[\d\w%]*\s*[;]{0,1})+/g;//mega-dev-man: #-Goody-dev%
cssTextblob = /(([-]{0,1}[\d\w]+[-]{0,1}[\d\w]+)+\s*:\s*[\W\d\w]+[-]{0,1}[\d\w\W]*\s*[;]{0,1})+/g; //-New-dev-in-town; #-Goody-Goody-by-%/100%
var propReg = /^(\s*\w+[-]{0,1}\w+\s*)$/g;

//NO ARGUMENTS SUPPLIED
if(!arguments.length && isHTML(this)){
 ret = computedStyle(this);
}

//THREE AGRGUMENTS SUPPLIED
else if (arguments.length == 3) {
    if (!element.nodeType && !isCollection(element)) {throw new Error(elementError);}
if(typeof style !== "string" || typeof(options) !== "string") { throw new Error(styleError);
 } element = element;  string =   style +": "+ options;        //all parameters are the same and unchanged
}

//TWO ARGUMENTS SUPPLIED
else if (arguments.length == 2) {
if (isHTML(this) || isCollection(this)) {//a(Techie)
    if (typeof element === "string" && typeof style === "string") {
        // options = style ; style = element;
          string = element + ": " + style; element = this; 
    } 
} if (isHTML(element) || isCollection(element)){
    element = element;
if (typeof style === "string") {
    if (style.match(propReg)) { ret = computedStyle(element)[style];
    }     else if (style.match(cssTextblob)) {string = style;
    } else if (!style.length) { ret = pt.stringifyAll(computedStyle(element), false);}
}   else if (toString.call(style) == "[object Array]") {
        if (style.length < 2) {
            string = style[0];
        }else {
            array = style;
        }
    }        else if (toString.call(style) == "[object Object]") { 
        object = style;
    }           else {throw new Error(styleError);}
}
if(!element)   {   throw new Error(elementError);}
}   
//ONE ARGUMENT SUPPLIED

else if (arguments.length == 1) {
 (isHTML(element) || isCollection(element)) ? style = style : style = element;
element = (isHTML(element) || isCollection(element)) ? element : (isHTML(this) || isCollection(this)) ? this :  null;
if (!element) { throw new Error("Techie.css -- no element provided. ");}
if (!style) { ret = pt.stringifyAll(computedStyle(element), false);
}
    else {
        if  (typeof style === "string")  {
            if (style.match(propReg)) {
                ret =   computedStyle(element) ?  computedStyle(element)[style] : null;
            }   else if (style.match(cssTextblob)) {
                string = style; element = element;
            } else{
                throw new Error(styleError);
            }
        } else if (toString.call(style) == "[object Array]")    {
            if (style.length < 2) {
                string = style[0];
            } else{
                array = style;
            }
        } else if (toString.call(style) == "[object Object]") {
            object = style;
        } else {
            throw new Error(styleError);
        }
    }
} 

element = element.length ? element : [element];
forEach(function(index, element){
    if (string) {
element.style.cssText = string; ret = this;
}else if (array) { 
    forEach (function ( index, style ){
        element.style.cssText += style; ret = this;
    }, array, this);
    }
    else if (object) {
        forEach (function ( prop, style ){
            element.style[prop] = style; ret = this;
        }, object, this);
    }
}, element);
return ret;
 }





function stylers (object, styleOptions) {
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

function computedStyle( dom ) {
        var style, val;
        var returns = {};
        // FireFox and Chrome way
        if(window.getComputedStyle){
            style = window.getComputedStyle(dom || this, null);
            forEach(function(index, prop){
                val = style.getPropertyValue(prop);
                returns[prop] = val;
            }, style);
            // return returns;
        }
        // IE and Opera way
        if(dom.currentStyle){
            style = dom.currentStyle;
            for(var prop in style){
                returns[prop] = style[prop];
            }
            // return returns;
        }
        // Style from style attribute
        if(style = dom.style){
            for(var prop in style){
                if(typeof style[prop] !== 'function' && style[prop]){
                    returns[prop] = style[prop];
                }
            }
            // return returns;
        }
        return returns;
    };


function attrHooks(element, attr, value){
    if (element.setAttribute) {
element.setAttribute(attr, value || "");
    }else{
var newAttr = document.createAttribute(attr);
newAttr.value = value || "";    
element.attributes.setNamedItem(newAttr);
    }}


function getElementsByAttribute(attribute, context){ //"div[data-dim='dimmer']", ctxt[attr]
    var elements = document.querySelectorAll(context || "*" + "[" +attribute + "]");
    pt.mixin(elements, pt.element);
    return Array.prototype.slice.call(elements);
}


function Attr(element, attr, value){//element = element/nodeList
/*Attr(ele,"title", " ")--empty; elem.Attr("id", 'clicked') --remove/add if found/not found
Attr(div, 'data-cardboard', "Shelf_One")--remove/add if found/not found
*/
if (!element) {return;} var counter = 0, attributes, stack = [], attributesString,
thisOption = isCollection(this) || isHTML(this), isAttrSet, ret, noNode; 
value = value || ((thisOption && typeof attr !== "undefined") ? attr : value); 
attr = (!attr || value == attr) ? element : attr;//rebasing accordingly
element = (element == attr) ? this : element;//this reconaissance
if (!isCollection(element)) {element = [element];}
var count = 0; var   valueAdded;
forEach(function(index,element){





noNode = !isNode(element); 
if (typeof attr !== "string" || noNode) {
    var el = "HTMLElement object: "+ element || null, at = ", attrString: " + attr||null;
	throw new Error('Techie:- Techie.Attr(elem, "id", "show"); Values:-'+el+at);
} isAttrSet = element.getAttribute(attr) ? true : false;//is attr existing
if (!isAttrSet) { attrHooks(element, attr);}//set attr if it not existing
 if(count == 0){count++; 
    attributesString = element.getAttribute(attr);
if (typeof attributesString !== "string") {return;}
 attributes = attributesString.split(/\s+/);
   valueAdded = attributesString ? attributesString.concat(" " + value) : value;

}








attributes.forEach(function(attribute){
    if(attribute == value){counter++;}else{stack.push(attribute);}//The subtle job
});
if (typeof value === "undefined") {//there is no value at all, just get
ret = attributesString;
}
if (typeof value == "string") {
if (!value.length || value == attributesString) {//empty
    if (element.setAttribute) {element.setAttribute(attr, "");}
		else{element.getAttributeNode(attr).value = "";}
ret =  this;
}}
if(counter > 0){//there is  match, therefore remove it ..stack..
    if (element.setAttribute) {element.setAttribute(attr, stack.join(" "));}
	else{element.getAttributeNode(attr).value = stack.join(" ");}
ret = this;
}
if (counter == 0 && value) {//there is a different value, so add it

if (element.setAttribute) { element.setAttribute(attr, valueAdded);}
else{ element.getAttributeNode(attr).value =  valueAdded;}	
ret = this;
}
}, element, this);
 return ret;
}


function removeAttr(element, attr, value){//element = element/nodeList
if (!element) {return;} 
var thisOption = isCollection(this) || isHTML(this); value = 
value || ((thisOption && typeof attr !== "undefined") ? attr : ""); 
attr = (!attr || value == attr) ? element : attr;
element = (element == attr) ? this : element;
if (!isCollection(element)) {element = [element];}
forEach(function(index,element){
var noNode = !isNode(element); var counter = 0;
if (typeof attr !== "string" || typeof value !== "string" || noNode) {
	throw new Error('Techie.removeAttr(elem, "id", "show")');
}
var attributesString = element.getAttribute(attr), stack = [];
if (typeof attributesString !== "string") {return;}
var attributes = attributesString.split(/\s+/);
attributes.forEach(function(each){
	if(each == value){counter++;}else{stack.push(each);}
});
if(value == "" || value == attributesString){
    if (element.setAttribute) {element.setAttribute(attr, "");}
else{element.getAttributeNode(attr).value = "";}
}else{if (element.setAttribute) {element.setAttribute(attr, stack.join(" "));}
else{element.getAttributeNode(attr).value = stack.join(" ");}}
if(counter == 0 && value){
	console.log(attr+" "+value+" was not found.")}

}, element);

 return this;
}

function removeClass(context, classname){
var throwError = "Techie.removeClass:--pt.removeClass(elemObj, 'className')";
classname = typeof classname !== "undefined" ? 
    ( typeof classname === "string" ? classname : Error(throwError)) :
     (typeof context === "string" ? context : classname);
     if ((isCollection(this) || isHTML(this)) && !classname && context) {return;}
context = classname === context ? this : context;//Reconaissance
if (!(isHTML(context) || isCollection(context))) {throw new Error(throwError);}
if(!isList(context)){context = [context];}
pt.forEach(function(index, element){var nType = element.nodeType;
if ( nType === 3 || nType === 8 || nType === 2 ) { return; }
if (element.className.length) { var classString = element.getAttribute("class");
var className = classString.split(/\s+/); var counter = 0, stack = [];
className.forEach(function(name){
if (name == classname) {counter++;}else{stack.push(name);}
});}if (!classname || !classname.length) {//Empty
element.className = "";
}if(counter > 0){//remove the matching class ...stack...
element.className = stack.join(" ");
}if (counter == 0 && classname.length) { 
    console.log("Class "+classname+" was not found in "+ element);
}}, context);
return this;
}

function addClass(context, classname){
var throwError = "Techie.addClass:--pt.addClass(elemObj, 'className')";
	classname = typeof classname !== "undefined" ? 
	( typeof classname === "string" ? classname : Error(throwError)) :
	 (typeof context === "string" ? context : Error(throwError));
	context = classname === context ? this : context;
	if (!(isHTML(context) || isCollection(context))) {
		throw new Error(throwError);
	}
	if(!isList(context)){context = [context]}
	pt.forEach(function(index, context){nType = context.nType;
		if ( nType === 3 || nType === 8 || nType === 2 ) { return; }
		if (context.className.length) {
		context.className = context.className.concat("	" + classname);
		}else{context.className = classname;}

	}, context)
return this;
}





    function Index(item, A) {
        A = A || this;
        var all = arguments,
            store = {},
            stk = [],
            arr = pt.explode(all[0]),
            items = (pt.isArrayLike(all[1])) ? pt.explode(all[1]) : String(slice.call(arguments, 1)).split(',');
        pt.each(function(i, e, itms) {
            pt.each(function(j, k, o) {
                if (e == j) {
                    store[e] = k;
                    stk.push(k);
                } else if (e == k) {
                    store[e] = j;
                    stk.push(j);
                }
            }, arr);
            if (!(e in store)) {
                store[e] = -1;
                stk.push(-1);
            }
        }, items);
        if (stk.length == 1) {
            return stk[0];
        }
        return stk;
    }


    function html(c) {
        if (strings(c)) {
            if (invalidChars(c)) {
                c = sapi.querySelectorAll(c)[0];
            } else {
                c = create(c);
            }
        }
        var d = isHTML(c);
        if (!d) {
            return false;
        }
        if (this instanceof html) {
            return c
        }
        return true;
    }

    function create(x) {
        x = sapi.createElement(x);
        return x;
    }

    function createFrag(blob, context) {
        var temp = sapi.createElement("p");
        temp.innerHTML = blob;
        if (!temp.firstChild) { throw new Error("createFrag could not create the node from fragment. ");}
        forEach(function(index, context){
        if(typeof context === 'object' && context.nodeType){
            context.appendChild(temp.firstChild);
        }
    }, (typeof context === "object" && context && isList(context)) ? context : [context], null);
        return temp.firstChild;
    }



    function isHTML(datum) { //HTML tags are objects and no other data type
        if (isNode(datum) && (datum.nodeType == 1)) {
            return true;
        }
        return false;
    }

    function invalidChars(c) {
        if (toString.call(c) == '[object String]') {
            return (/[#.]+/.test(c));
        }
    }


    function isCollection(array) {
        return array && array.length && isHTML(array[0]);
    }


    function isList(array) {
        if( array && Object.prototype.toString.call(array) != "[object String]"){
      if (array.length && typeof array.length === 'number' && array.hasOwnProperty('0')) {
            return true;
        }
        }
        return false;
    }

    function isAbsent(datum) {
        return isPresent(datum) ? false : true;
    }
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


    function isPresent(datum) {
        datum = datum || this;

        function Query(tag) {
            try {
                return sapi.querySelectorAll(tag)[0] ? true : false;
            } catch (err) {
                return false
            }
        }

        if (typeof datum !== 'string' && typeof datum !== 'object') {
            return false;
        }
        if (isHTML(datum)) {
            if (datum.ownerDocument.body.contains(datum)) {
                return true;
            }
        }
        var tag, invalidCharacters;
        if (typeof datum === 'string') {
            invalidCharacters = /[#.]+/.test(datum);
            var cLass = /\s+class\s*=/i,
                id = /\s+id\s*=/i;
            others = /([\w-]+\s*=\s*['"][\w\s*].+?['"])/;
            if (invalidCharacters) {
                return Query(datum);
            } else
            if (id.test(datum)) {
                var reg1 = /(id\s*=\s*['"][\w\s*].+?['"])/i;
                var match = datum.match(reg1);
                var reg2 = String(match[0]).match(/['|"'](.*?)['|"']/);
                tag = '#' + reg2[1];
                return Query(tag);
            } else
            if (cLass.test(datum)) {
                var reg1 = /(class\s*=\s*['"][\w\s*].+?['"])/i;
                var match = datum.match(reg1)
                var reg2 = String(match[0]).match(/['|"'](.*?)['|"']/);
                tag = "." + reg2[1];
                return Query(tag);
            } else
            if (others.test(datum)) {
                datum = datum.match(others);
                tag = "[" + datum[0] + "]";
                // a(tag)
                return Query(tag);
            } else { //match all "< p >", "p"
                tag = datum.match(/<{0,1}(\s*\w+)?/);
                return Query(tag)
            }
        }
        //objects considerations
        else {
            if (pt.isNodeList(datum)) {
                datum = datum[0];
            }
            if (pt.isNode(datum)) {
                return sapi.querySelectorAll(datum.tagName)[0] ? true : false;
            }
            return false;


        }
        /*end of func*/
    }


    function isNodeList(N) {
        try {
            if (Object.prototype.toString.call(N) == '[object String]') {
                return false
            }
            var len = (N.length === 0),
                e = ((N[0] instanceof HTMLElement) || (N[0] instanceof NodeList) || (N[0] instanceof HTMLCollection)),
                isNL = ((N instanceof HTMLCollection) || (N instanceof NodeList));
            return (isNL && (e || e));
        } catch (t) {
            return false;
        }
    }



    function isTag(string) {
        //It should be clear that isTag focuses on checking a string for html tag validity
        if (!string || (typeof string !== "string") || invalidChars(string)) {
            return false;
        }
        if (string.charAt(0) === '<' && string.charAt(string.length - 1) === '>') {
            string = string.split(/\W+/)[1]; //split by all non-word characters and give me the second item
            //I could also use createFrag and check it against isNode
        }
        if (isNode(sapi.createElement(string))) {
            return true;
        }
        return false;
    }

    function isNode(object) { /*HTML nodes are objects and no other data type;
        Use isTag(string) instead; string will be created and checked against 
        isNode(object);*/
        var unknowns, i; if (typeof object !== 'object') { return false;}
        return checkHtml(object);

        function ChkNm(name) {
         if (isNodeList(name)) { name = name[0]; }
try { name = upper.call(name);} catch (err) { return false;}
            unknowns = ['UNKNOWN', 'UNDEFINED', 'NULL', 'NAN', 'OBJECT OBJECT'];
    var returned = true; forEach(function() {
                if (index(name, this) !== -1) {returned = false;} }, unknowns);
            return returned;
        }
        function checkHtml(obj) {
            if (ChkNm(obj)) {
                if (isNodeList(obj)) {
                    obj = obj[0];
                }
                return obj.nodeType ? true : false;
            }
            return false;
        }
    }




    function DefineProperties(object, properties, boo) {
        var value;
        boo = (boo == false) ? false : true;
        var i;
        for (i in properties) {
            if (properties.hasOwnProperty(i)) {
                value = properties[i];
                Object.defineProperty(object, i, {
                    value: value,
                    writable: true,
                    configurable: true,
                    enumerable: boo
                });
            }
        }
    }


    function DefineProperty(
        object, name, value, boo) {
        boo = (boo == false) ? false : true;
        Object.defineProperty(object, name, {
            value: value,
            writable: true,
            configurable: true,
            enumerable: boo
        })
    }



    a("This is Techie! Have fun.");



    sapi.All = function(x) {
        return slice.call(sapi.querySelectorAll(x));
    };

    sapi.all = function(x) {
        return slice.call(sapi.querySelectorAll(x));
    };
    sapi.qs = function(x) {
        x = slice.call(sapi.querySelectorAll(x));
        return x[0];
    };

    function write(r) {
        sapi.writeln(r);
    }

    function ownProp(x, y) {
        return Object.prototype.hasOwnProperty.call(x, y);
    }

    function extend(receiver, supplier) {
        if (!arguments.length) {
            throw new Error("Techie: Usage: pt.extend(receiver, supplier) or pt.extend(object) //extend pt with yours")
        }
        if (arguments.length < 2) {
            supplier = receiver;
            receiver = this;
        }
        if (receiver == this) {
        	Extender([Techie.prototype, this], [supplier]);
        }else{
        mixin( receiver, supplier);
        } return receiver;
    }

    function Extender(Recievers, Suppiers) {
        if (!Recievers) {
            return null
        }
        if (arguments.length < 2) { //Rebase accordingly
            Suppiers = Recievers;
            Recievers = this;
        }
        if (toString.call(Recievers) != '[object Array]') { //Recievers is an array of objects
            Recievers = new Array(Recievers);
        }
        if (toString.call(Suppiers) != '[object Array]') { //Suppiers is an array objects
            Suppiers = [Suppiers];
        }
        var index, jot;
        Recievers = slice.call(Recievers);
        Suppiers = slice.call(Suppiers);
        Recievers.forEach(function(Reciever) {
            Suppiers.forEach(function(object) {
                for (jot in object) {
                    if (object.hasOwnProperty(jot)) {
                        Reciever[jot] = object[jot];
                    }
                }
            });
        });
        return Recievers[1] ? Recievers : Recievers[0];
    }




    function type(x, y) {
        if (type.isAtype(x)) {
            if (y) {
                if (Object.prototype.toString.call(y) == "[object String]") {
                    var t = typeof x === y;
                    return t;
                } else {
                    throw new TypeError("Techie: pt.type({}, 'object'); //true, type(28, 'number'); //true")
                }
            }
            return typeof x;
        }
        return 'NIL';
    }
    var
        types = type.prototype = {
            numbers: function(x) {
                return toString.call(x) == "[object Number]";
            },
            strings: function(x) {
                return typeof x === 'string';
            },
            booleans: function(x) {
                return toString.call(x) == "[object Boolean]";
            },
            undefineds: function(x) {
                return (toString.call(x) == "[object Undefined]");
            },
            nulls: function(x) {
                return toString.call(x) == "[object Null]";
            },
            objects: function(x) {
                return toString.call(x) == "[object Object]";
            },
            functions: function(x) {
                return toString.call(x) == "[object Function]";
            },
            arrays: function(x) {
                return toString.call(x) == "[object Array]";
            },
            primitives: function(datum) {
                var primitives = ["[object String]", "[object Number]", "[object Boolean]", "[object Nan]",
                        "[object Null]", "[object Undefined]"
                    ],
                    isPrimitive = false;
                forEach(function(index, eachPrimitive, primitives) {
                    if (toString.call(datum) == eachPrimitive) {
                        isPrimitive = true;
                    }
                }, primitives);
                return isPrimitive;
            },

            isAtype: function(x) {
                switch (toString.call(x)) {
                    case '[object String]':
                    case '[object Number]':
                    case '[object Boolean]':
                    case '[object Null':
                    case '[object Nan]':
                    case '[object Undefined]':
                    case '[object Array]':
                    case '[object Function]':
                    case '[object Object]':
                        return true;
                        break;
                    default:
                        return false;
                }
            },
            empty: function(x) {
                var test = /\S+/.test(x);
                return (!test || x === null || x === undefined) ? !0 : !1;
            },
            type: type,
            nothing: function(x) {
                if (this.isAtype(x)) {
                    return false;
                }
                return true;
            },
            types: ["[object Undefined]", "[object Nan]", "[object Null]", "[object Boolean]",
                "[object String]", "[object Number]", "[object Array]", "[object Function]", "[object Object]"
            ]
        };
    mixin(type, types);


    function objects(o) {
        var N = typeof o === 'object' || Object.prototype.toString.call(o) == "[object Object]";
        if (this instanceof objects) {
            return new Object(o);
        }
        return N;
    }

    function booleans(o, boo) {
        var N = Object.prototype.toString.call(o) == "[object Boolean]";
        if (arguments.length > 1) {
            return o === boo;
        }
        if (this instanceof booleans) {
            return new Boolean(o);
        }
        return N;
    }

    function arrays(o) {
        var N = Object.prototype.toString.call(o) == "[object Array]";
        if (this instanceof arrays) {
            return new Array(o);
        }
        return N;
    }

    function functions(o) {
        var f = Object.prototype.toString.call(o) == "[object Function]" || typeof o === 'function',
            notReg = Object.prototype.toString.call(o) != "[object RegExp]";
        return (f && notReg);
    }

    function strings(s) {
        var S = Object.prototype.toString.call(s) == "[object String]";
        if (this instanceof strings) {
            return new String(s);
        }
        return S;
    }

    function numbers(n) {
        var N = Object.prototype.toString.call(n) == "[object Number]";
        if (this instanceof numbers) {
            return Number(n);
        }
        return N;
    }

    var Elements = {};

    Elements.events = Events;

    Elements.props = {
        isAbsent: function(e) {
            return !(isPresent(e));
        },
        get status() {
            return sapi.readyState;
        },
        tabForward: function(event) {
            event = EventUtil.getEvent(event);
            var target = EventUtil.getTarget(event);
            if (target.value.length == target.maxLength) {
                var form = target.form;
                for (var i = 0, len = form.elements.length; i < len; i++) {
                    if (form.elements[i] == target) {
                        if (form.elements[i + 1]) {
                            form.elements[i + 1].focus();
                        }
                        return;
                    }
                }
            }
        },
        selectText: function(textbox, startIndex, stopIndex) {
            if (textbox.setSelectionRange) {
                textbox.setSelectionRange(startIndex, stopIndex);
            } else if (textbox.createTextRange) {
                var range = textbox.createTextRange();
                range.collapse(true);
                range.moveStart("character", startIndex);
                range.moveEnd("character", stopIndex - startIndex);
                range.select();
            }
            textbox.focus();
        },
        getSelectedOptions: function(selectbox) {
            var result = new Array();
            var option = null;
            for (var i = 0, len = selectbox.options.length; i < len; i++) {
                option = selectbox.options[i];
                if (option.selected) {
                    result.push(option);
                }
            }
            return result;
        },
        serialize: function(form) {
            var parts = [],
                field = null,
                i,
                len, j, optLen, option, optValue;
            for (i = 0, len = form.elements.length; i < len; i++) {
                field = form.elements[i];
                switch (field.type) {
                    case "select-one":
                    case "select-multiple":
                        if (field.name.length) {
                            for (j = 0, optLen = field.options.length; j < optLen; j++) {
                                option = field.options[j];
                                if (option.selected) {
                                    optValue = "";
                                    if (option.hasAttribute) {
                                        optValue = (option.hasAttribute("value") ?
                                            option.value : option.text);
                                    } else {
                                        optValue = (option.attributes["value"].specified ?
                                            option.value : option.text);
                                    }
                                    parts.push(encodeURIComponent(field.name) + "=" +
                                        encodeURIComponent(optValue));
                                }
                            }
                        }
                        break;
                    case undefined: //fieldset
                    case "file": //file input
                    case "submit": //submit button
                    case "reset": //reset button
                    case "button": //custom button
                        break;
                    case "radio": //radio button
                    case "checkbox": //checkbox
                        if (!field.checked) {
                            break;
                        }
                        /* falls through */
                    default:
                        //don’t include form fields without names
                        if (field.name.length) {
                            parts.push(encodeURIComponent(field.name) + "=" +
                                encodeURIComponent(field.value));
                        }
                }
            }
            return parts.join("&");
        },
        
        addClass: function(element, className) {
            addClass(element, className);
            return this;
        },
        removeClass: function(element, className) {
            removeClass(element, className);
            return this;
        },
        toggleClass: function(element, classname) {
            if (!classname && typeof element === "string") {
                classname = element; element = this;
            } element = element.nodeType ? [element] : element;
            if (isCollection(element) && typeof classname === "string") {
                             Attr(element, "class", classname);
            }
           return this;
        },

        eachChild: function(fn, element, Thisarg) {
            element = Children(element || this);
            for (var index in element){
                if (element[index].nodeType && fn.call) {
                     fn.call(Thisarg || element[index], element[index], index, element);

                } 
            }
            return this;
        },

        setText: function(text, e) {
            e = e || this;
            if (typeof e.textContent == "string") {
                e.textContent = text;
            } else {
                e.innerText = text;
            }
        },

        getText: function(e) {
            e = e || this;
            return (typeof e.textContent === "string") ? e.textContent : e.innerText;
        },
        nthChild: nthChild,

        set text(str) {
            this.setText(str, this);
        },
        get text(){
            return function (element){
            element = element || this;
            return (typeof element.textContent === "string") ? element.textContent : element.innerText;
        };
        },
        addChild: function(element, child) {//create last child
            if (!child) {
                child = element;
                element = this
            }
            this.elementsScreener([child, element]);
            element.appendChild(child);
            return this;
        },
        removeChild: function(element, child) {
            if (toString.call(child) == '[object Number]') {
                child = Children(element, child);
            }
            if (isHTML(child)) {
                child.style.display = none;
            }
            return this;
        },
   siblings: function(node, fn){if (node == null) {return;}
this.stack = this.stack || [];
this.node = this.node || node.parentNode.firstChild;
    if (this.node) {
        if (this.node.nodeType == 1) {this.stack.push(this.node);( fn || function(){}).call(this.node, this.node);}
       this.node = this.node.nextSibling; this.siblings(this.node, fn); 
    }
return  this.stack;
},
        getAttr: function(element, attribute) {
            return Attr(element, attribute)
        },
        getParent: function(element) {
            this.paren = this.paren ? this.paren : element.parentNode; if (!(this.paren && this.paren.nodeType)) {return;}
            if ( this.paren.nodeType != 1 ){ this.paren = this.paren.previousSibling; this.getParent(this.paren);} 
           return this.paren;
        },
        getChildren: function(element) {
            element = element || this;
            return Children(element);
        },
        getPrevSib: function(element) {
        this.prevSib = (typeof  this.prevSib !== "undefined") ? this.prevSib : element.previousSibling;  
        if (!(this.prevSib && this.prevSib.nodeType)) {return;}
            if ( this.prevSib.nodeType != 1 ) {  this.prevSib = this.prevSib.previousSibling;  this.getPrevSib(this.prevSib); } 
          return this.prevSib
        },
        next: function(e){
            this.node = typeof this.node === "undefined" ? e.nextSibling : this.node;
            if (this.node.nodeType != 1) { this.node = this.node.nextSibling; this.next(this.node);}
               return this.node;
        },
        getNextSib: function(element) { 
            this.nextSib = (typeof this.nextSib !== "undefined") ? this.nextSib : element.nextSibling;
             if (!(this.nextSib && this.nextSib.nodeType)) { return;}
            if ( this.nextSib.nodeType != 1) { this.nextSib =   this.nextSib.nextSibling; this.getNextSib(this.nextSib); }
          return  this.nextSib;
        },
        getFirstChild: function(element) {
            this.firstKid = typeof this.firstKid !== "undefined" ? this.firstKid : element.firstChild;
                if (!(this.firstKid && this.firstKid.nodeType)){return;}
                if (this.firstKid.nodeType != 1 ){  this.firstKid = this.firstKid.nextSibling; this.getFirstChild(this.firstKid); } 
                 return this.firstKid;
        },

        getLastChild: function(e) {
            this.lastKid = typeof this.lastKid !== "undefined" ? this.lastKid : e.lastChild; 
            if (!(this.lastKid && this.lastKid.nodeType)) { return;} 
            if (this.lastKid.nodeType != 1) {  this.lastKid = this.lastKid.previousSibling; this.getLastChild(this.lastKid); }
          return this.lastKid;
        },



        hasAttr: function(element, attribute) {
            if (element.hasAttribute) { ret  = element.hasAttribute(attribute);} else { ret = element.attributes[attribute].specified ; }
            return ret;
        },
        setAttr: function(element, attribute, value) {
         Attr(element, attribute, value);
            return this;
        },
        setPrevSib: function(element, previousSibling) {
             if (!element) {return;}
           previousSibling = (element.nodeType || isCollection(element)) ? previousSibling : element;
           var context = previousSibling == element ? this : element;
           if ( !previousSibling.nodeType && !(context.nodeType || isCollection(context)) ) {return;}
           context = context.nodeType ? [context] : context;
           forEach (function(index, element){
                      element.parentNode.insertBefore(previousSibling, element);
 }, context);
            return this;
        },
        setNextSib: function(element, nextSibling) {
         if (!element) {return;}
           nextSibling = (element.nodeType || isCollection(element)) ? nextSibling : element;
           var context = nextSibling == element ? this : element;
           if ( !nextSibling.nodeType && !(context.nodeType || isCollection(context)) ) {return;}
           context = context.nodeType ? [context] : context;
           forEach (function(index, element){
            element.parentNode.insertBefore(nextSibling, element.nextSibling);
           }, context);
            return this;
        },
        setFirstChild: function(element, child) {
             if (!element) {return;}
           child = (element.nodeType || isCollection(element)) ? child : element;
           var context = child == element ? this : element;
           if ( !child.nodeType && !(context.nodeType || isCollection(context)) ) {return;}
           context = context.nodeType ? [context] : context;
           forEach (function(index, element){
            element.insertBefore(child, element.firstChild);
           }, context);
            return this;
        },
        setLastChild: function(element, child) {
             if (!element) {return;}
           child = (element.nodeType || isCollection(element)) ? child : element;
           var context = child == element ? this : element;
           if ( !child.nodeType && !(context.nodeType || isCollection(context)) ) {return;}
           context = context.nodeType ? [context] : context;
           forEach (function(index, element){
            element.insertBefore(child, element.lastChild)
           }, context);
            return this;
        },
        append: function(element, nextSibling) { //Used to create nextSibling
            if (!element) {return;}
           nextSibling = (element.nodeType || isCollection(element)) ? nextSibling : element;
           var context = nextSibling == element ? this : element;
           if ( !nextSibling.nodeType && !(context.nodeType || isCollection(context)) ) {return;}
           context = context.nodeType ? [context] : context;
           forEach (function(index, element){
              element.parentNode.insertBefore(nextSibling, element.nextSibling);
         }, context);
            return this;
        },
        prepend: function(element, previousSibling) { //used to create previousSibling
             if (!element) {return;}
           previousSibling = (element.nodeType || isCollection(element)) ? previousSibling : element;
           var context = previousSibling == element ? this : element;
           if ( !previousSibling.nodeType && !(context.nodeType || isCollection(context)) ) {return;}
           context = context.nodeType ? [context] : context;
           forEach (function(index, element){
                       element.parentNode.insertBefore(previousSibling, element);
}, context);
            return this;
        },
        elementsScreener: function(element) {
            if (!arguments.length) {
                throw new TypeError("Techie: No element to provided")
            }
            var elements = Techie.explode(arguments);
            elements.forEach(function(element) {
                if (!isHTML(element)) {
                    throw new TypeError("Techie: " + element + " is not an object HTMLElement");
                }
            });
            return true;
        },
        prependChild: function(element, child) { //used to create 1stChild
             if (!element) {return;}
           child = (element.nodeType || isCollection(element)) ? child : element;
           var context = child == element ? this : element;
           if ( !child.nodeType && !(context.nodeType || isCollection(context)) ) {return;}
           context = context.nodeType ? [context] : context;
           forEach (function(index, element){
            element.insertBefore(child, element.firstChild);
           }, context);
           return this;
        },

  contains: function (refNode, otherNode){
if (typeof refNode.contains === "function" &&
(!client.engine.webkit || client.engine.webkit >= 522)){
return refNode.contains(otherNode);
} else if (typeof refNode.compareDocumentPosition === "function"){
return !!(refNode.compareDocumentPosition(otherNode) & 16);
} else {
var node = otherNode.parentNode;
do {if (node === refNode){
return true;
} else {
node = node.parentNode;
}
} while (node != null);
return false;
}
},

matchesSelector: function (element, selector){
if (element.matchesSelector){
return element.matchesSelector(selector);
} else if (element.msMatchesSelector){
return element.msMatchesSelector(selector);
} else if (element.mozMatchesSelector){
return element.mozMatchesSelector(selector);
} else if (element.webkitMatchesSelector){
return element.webkitMatchesSelector(selector);
} else {
throw new Error("Not supported.");
}
},
        appendchild: function(element, child) { //Used to create last child
            if (!element) {return;}
           child = (!child && (element.nodeType || isCollection(element))) ? element : child;
           var context = child == element ? this : element; a(context)
           if ( !child.nodeType && !(context.nodeType || isCollection(context)) ) {return;}
           context = context.nodeType ? [context] : context;
           forEach (function(index, element){
            element.appendChild(child);

           }, context);
           return this;
        },
        qs: function(selector, context) {
           context = context || (this.nodeType ? this : document);
           if (context.nodeType != 1) {return;}
            return slice.call(context.querySelectorAll(selector));
        },
        all: function(selector, context) {
            context = context || (this.nodeType ? this : document);
           if (context.nodeType != 1) {return;}
            return slice.call(context.querySelectorAll(selector));
        },
        idName: function(id, context) {
            context = context || (this.nodeType ? this : document);
           if (!context.nodeType) {return;}
            return context.getElementById(id);
        },
        classNames: function(className, context) {
           context = context || (this.nodeType ? this : document);
           if (context.nodeType != 1) {return;}
            return slice.call(context.getElementsByClassName(className));
        },
        names: function(name, context) {
           context = context || (this.nodeType ? this : document);
           if (context.nodeType != 1) {return;}
            return slice.call(context.getElementsName(name));
        },
        Children: Children,
        tagNames: function(tagName, context) {
           context = context || (this.nodeType ? this : document);
           if (context.nodeType != 1) {return;}
            return slice.call(context.getElementsByTagName(tagName));
        },
        props: Element.props,
        show: show,
        mixin: mixin,
        extend: extend,
        set fool(foo){
            alert(foo);
        },
        get fool(){
return function(foo){
    Techie.Log(foo);
};
        },
        Extender: Extender
    };



DefineAccessors(Elements.props, "CSS", function(){
return  function(object, option ){
option = ( object && (object.nodeType || isCollection(object))) ? (option || "") : object; 
                object = option == object ? this : object;
       return styles(object, option);
    };
}, styles);

DefineAccessors(Elements.props, "styles", function gttr(){ 
    return  function(object, option ){
option = ( object && (object.nodeType || isCollection(object))) ? (option || "") : object; 
                object = option == object ? this : object; //a(object)
       return styles(object, option);
    };
}, styles);

DefineAccessors(Elements.props, "css", function(){
return  function(object, option ){
option = ( object && (object.nodeType || isCollection(object))) ? (option || "") : object; 
                object = option == object ? this : object;
       return styles(object, option);
    };
}, styles);




    //utilities
    function Children(parent) { //Children(body, 4)
        var children = [],
            child = null;
        if (!arguments.length && !isHTML(this)) {
            throw new Error("Techie: No object HTMLElement specified.");
        }
        if (arguments.length == 1) {
            if (isHTML(this)) {
                child = parent;
                parent = this;
            } else {
                parent = arguments[0]
            }
        }
        if (arguments.length > 1) {
            parent = arguments[0];
            child = arguments[1];
        }
        if (!isHTML(parent)) {
            throw new Error("Techie: " + parent + " is not object HTMLElement.")
        }!(function next(div) {
            if (isHTML(div)) {
                children.push(div);
                div = div.nextElementSibling;
                next(div);
            }
        }(parent.firstElementChild));
        if (typeof child === "number") {
            var pos = children[child];
            return (pos < 0) ? null : pos;
        } else if (isHTML(child)) {
            return children.indexOf(child);
        }
        return children;
    }

    function ChildPos(parent, element) { //returns the nth pos of an element in parent;  number is based on element siblings
        var pos = Children(parent).indexOf(element);
        return (pos < 0) ? null : pos;
    }



    function nthChild(parent, child) { //nthChild(body, 6)
        if (!isHTML(parent && typeof child === "number")) {
            throw new Error("Techie: Usage: nthChild(body, 3) //The 3rd element in the parentElement");
        }
        return Children(parent, child);
    }


    function element(e) {
        if (Object.prototype.toString.call(e) == '[object String]') {
            if (blob(e)) {
                e = createFrag(e)
            } else {
                e = sapi.createElement(e.match(/\w+/));
            }
        }
        if (this instanceof element) {
            var nodes;
            if (isCollection(e)) {
                nodes = slice.call(e);
            } else {
                nodes = [e]
            }
            forEach(function(index, node, all) {
                this[index] = node;
                try {
                    DefineProperties(this[index], element, false);
                } catch (e) {
                    console.warn("Techie: No elements found.")
                }
            }, nodes, this);
            DefineProperties(this, {
                nodes: nodes,
                length: nodes.length
            }, false);
        } else {
            return isHTML(e)
        }
    }

    Extender([element, element.prototype], [Events, Elements, Elements.props]);

    function tag(string) {
        //It should be clear that isTag focuses on checking a string for html tag validity
        if (!string || (typeof string !== "string") || invalidChars(string)) {
            return false;
        }
        if (string.charAt(0) === '<' && string.charAt(string.length - 1) === '>') {
            string = string.split(/\W+/)[1]; //split by all non-word characters and give me the second item
            //I could also use createFrag and check it against isNode
        }
        var tg = sapi.createElement(string),
            nodes;
        if (!isNode(tg)) {
            return false;
        }
        if (this instanceof tag) {
            this[0] = tg;
            DefineProperties(this[0], element, false);
            DefineProperties(this, {
                nodes: [tg],
                length: this.nodes.length
            }, false);

        } else {
            return true;
        }
    }




    function blob(b) {
        var blb = /(?=\s*\<\s*\w+\s*\>){1,1}^[\s*\S*\w*\W*]*(<\\{0,1}\s*\/*\w+\s*\>\s*$)/.test(b);
        if (this instanceof blob && blb) {
            return createFrag(b);
        }
        return blb;
    }

    function SAPI(selector, context, nodes) { //don,t bother, I,ll overwrite the variable nodes
        if (!selector) {
            return this;
        }
        context = (typeof context === 'object' && context.querySelectorAll) ? context : document;
        var nodes = [];
        if (isList(selector)) {
            nodes = selector.length > 1 ? slice.call(selector) : selector;
        }
        if (typeof selector === 'string') {
            if (selector[0] === '<' && selector[selector.length - 1] === ">") {
                nodes = [createFrag(selector, context)];
            } else {
                nodes = slice.call(context.querySelectorAll(selector));
            }
        }
        if (nodes.length) {
            forEach(function(index, node, all) {
                this[index] = node;
                try {
                    DefineProperties(this[index], element, false);
                } catch (e) {
                    console.warn("Techie: No elements found.")
                }
            }, nodes, nodes);
            return nodes[1] ? nodes : nodes[0];
        }
    }

function index(array, item, start) {
if (Object.prototype.toString.call(item) == "[object String]" 
&& Object.prototype.toString.call(array) == "[object String]") {
return array.search(item);}//good
var originalArray = array,originalItem = item, jota, er, count = -1;
array = isList(this) ? (toString.call(array) == "[object Array]" ? 
array : this) : array; var length = array.length;
item = array == this ? originalArray : item;
if (array == this && item == originalArray && start) {
er = "Techie.index(array, item, start), pt(array).index(item, start)";
	throw new Error("Techie.index:- "+er);
}start = item == originalArray ? originalItem : start;
if (typeof start !== "number") {start = 0;}
if (start < 0) {start += length;if (start < 0) {start = 0;}}
if (start >= length) {return -1;}
for (;start < length; start++) {jota = array[start];
    if (item == jota) { count = start;break;
    } else if (item == start) {count = jota; break;}
}
return count;
}



    function show(rg, o) {
        var stk = [],
            j, i, t = pt.type;
        if (!o) {
            o = (this !== window) ? this : pt;
        }
        if (typeof rg === 'boolean') {
            //style display to block;
            this.style.display = 'block';
            return this;
        }
        if (rg.search('prop') != -1) {
            pt.props(o);
            return;
        }
        if (rg.search('meth') != -1) {
            pt.methods(o);
            return;
        }
        if (index(type.types, rg)) {
            var j, msg;
            for (i in o) {
                j = o[i];
                if (ownProp(o, i)) {
                    if (type(j, rg)) {
                        stk.push(h4 + type(j) + ': ' + i);
                    }
                }
            }
        }
        pt.Log(stk, false);
        return stk;
    }

    function isArrayLike(e) {
        if (Array.isArray(e)) {
            return true;
        }
        var r = Object.prototype.toString.call(e);
        if (r === "[object HTMLCollection]" || r === "[object NodeList]") {
            return true;
        }
        if (typeof e !== "object" || !e.hasOwnProperty("length") || e.length < 0) {
            return false;
        }
        if (e.length === 0) {
            return true;
        } else if (e[0] && e[0].nodeType) {
            return true;
        }
        return false;
    }

    function forEach(fn, o, d) {
        var l, i = 0;
        o = o || this;
        if (isArrayLike(o)) {
            l = o.length;
            for (; i < l; i++) {
                if (fn.call(d || o[i], i, o[i], o) === false) {
                    break;
                }
            }
        } else {
            for (i in o) {
                if (ownProp(o, i)) {
                    if (fn.call(d || o[i], i, o[i], o) === false) {
                        break;
                    }
                }
            }
        }
        return o;
    }

    function HTML(contnt) {
        var c;
        if (strings(contnt)) {

        }
    }

    function ownProp(z, y) {
        return Object.prototype.hasOwnProperty.call(z, y);
    }

    function walk(node, func) {
        func(node);
        node = node.firstChild;
        while (node) {
            walk(node, func);
            node = node.nextSibling;
        }
    }


    function mixin(receiver, supplier) {
    	receiver = !supplier ? this : receiver;
		supplier = supplier || receiver;
        if (Object.getOwnPropertyDescriptor) {
            Object.keys(supplier).forEach(function(property) {
                var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
                Object.defineProperty(receiver, property, descriptor);
            });
        } else {
            for (var property in supplier) {
                if (supplier.hasOwnProperty(property)) {
                    receiver[property] = supplier[property]
                }
            }
            return receiver;
        }
    }



    
////////////////////
    //The lifeblood
    //Techie.addHandler
    mixin(Techie.prototype, Techie.EventUtil);
    //sapi.Techie(o).each(fn);
    sapi.Techie = Techie.sapi;
    //life of Techie constructor
    Techie.sapi.Techie.prototype = Techie.sapi;
    //Techie.each(fn,r,this)
    mixin(Techie, Techie.sapi);
    //pt.pt.pt.each(f,r,this)
    mixin(Techie.sapi, Techie.sapi.Techie);
    //sapi.each(fn,o,this)
    // mixin(Techie, Techie.sapi);



    //Trick Ends
    //////////////////////
    window.Techie = Techie;
    window.sapi = sapi;
    window.SAPI = SAPI;
    window.pt = Techie;
    window.log = function(a, b, c) {
        return Techie.Log(a, b, c);
    };
    window.Log = log;


    a("Techie Farewell!");

    a("The end of Techie");

}))


