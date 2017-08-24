function extend(from, to) {
   for (var property in from) {
     var descriptor = Object.getOwnPropertyDescriptor(from, property) || { value: from[property] };
     Object.defineProperty(to, property, descriptor);
   }
   return to;
}



  function extend(target) {
/*var args = arguments, len = args.length,  sources = Array(len > 1 ? len - 1 : 0),  key = 1;
  for (key; key < len; key++) {
    sources[key - 1] = args[key];
  }*/
  sources = Array.prototype.slice.call(arguments, 1);
  sources.forEach(function (source) {
    Object.defineProperties(target, Object.keys(source).reduce(function (descriptors, key) {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {}));
  });
  return target;
};


function extend (to, from) {
  if (!from || typeof from !== 'object') return to

  var keys = Object.keys(from)
  var i = keys.length

  while (i--) {
    var descriptor = Object.getOwnPropertyDescriptor(from, keys[i])
    if (descriptor && (!descriptor.writable ||
                       !descriptor.configurable ||
                       !descriptor.enumerable ||
                       descriptor.get ||
                       descriptor.set)) {
      Object.defineProperty(to, keys[i], descriptor)
    } else {
      to[keys[i]] = from[keys[i]]
    }
  }
  return to
}


  function DefineProperties (object, properties, boo) {
             var value, property;
        boo = (boo == false) ? false : true;
        for (property in properties) {
                value = properties[property];
                Object.defineProperty(object, property, {
                    value: value,
                    writable: true,
                    configurable: true,
                    enumerable: boo
                });


            
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

    function DefineProperties ( object, properties, bool ) {
        for ( index in properties ) {

        }
    }





function extend (to, from) {
  if (!from || typeof from !== 'object') return to

  var keys = Object.keys(from)
  var i = keys.length

  while (i--) {
    var descriptor = Object.getOwnPropertyDescriptor(from, keys[i])
    if (descriptor && (!descriptor.writable ||
                       !descriptor.configurable ||
                       !descriptor.enumerable ||
                       descriptor.get ||
                       descriptor.set)) {
      Object.defineProperty(to, keys[i], descriptor)
    } else {
      to[keys[i]] = from[keys[i]]
    }
  }
  return to
}   






Object.keys SHIM
// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}


 // Super amazing, cross browser property function, based on http://thewikies.com/
function addProperty(obj, name, onGet, onSet) {

    // wrapper functions
    var
        oldValue = obj[name],
        getFn = function () {
            return onGet.apply(obj, [oldValue]);
        },
        setFn = function (newValue) {
            return oldValue = onSet.apply(obj, [newValue]);
        };

    // Modern browsers, IE9+, and IE8 (must be a DOM object),
    if (Object.defineProperty) {

        Object.defineProperty(obj, name, {
            get: getFn,
            set: setFn
        });

    // Older Mozilla
    } else if (obj.__defineGetter__) {

        obj.__defineGetter__(name, getFn);
        obj.__defineSetter__(name, setFn);

    // IE6-7
    // must be a real DOM object (to have attachEvent) and must be attached to document (for onpropertychange to fire)
    } else {

        var onPropertyChange = function (e) {

            if (event.propertyName == name) {
                // temporarily remove the event so it doesn't fire again and create a loop
                obj.detachEvent("onpropertychange", onPropertyChange);

                // get the changed value, run it through the set function
                var newValue = setFn(obj[name]);

                // restore the get function
                obj[name] = getFn;
                obj[name].toString = getFn;

                // restore the event
                obj.attachEvent("onpropertychange", onPropertyChange);
            }
        };  

        obj[name] = getFn;
        obj[name].toString = getFn;

        obj.attachEvent("onpropertychange", onPropertyChange);



        var human = function() {
    var _firstName = '';
    var _lastName = ''
    return {
        get firstName() {
            return _firstName;
        }, get lastName() {
            return _lastName;
        }, set firstName(name) {
            _firstName = name;
        }, set lastName(name) {
            _lastName = name;
        }, get fullName() {
            return _firstName + ' ' + _lastName;
        }
    }
}();
human.firstName = 'Saeed';
human.lastName = 'Neamati';
alert(human.fullName);   