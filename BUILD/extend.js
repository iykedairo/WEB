function extend(from, to) {
   for (var property in from) {
     var descriptor = Object.getOwnPropertyDescriptor(from, property) || { value: from[property] };
     Object.defineProperty(to, property, descriptor);
   }
   return to;
}



  function extend(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

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