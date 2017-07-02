var keyValueStore = (function() { var count = 0; // Singleton private properties 
var kvs = function() { count++; 
// Instance private properties 
this.data = {};
 // Instance public properties
  }; 
  kvs.prototype = { // Instance public properties
 'get' : function(key) { return this.data[key]; },
 'set' : function(key, value) { this.data[key] = value; },
'delete' : function(key) { delete this.data[key]; },
'getLength' : function() { var l = 0; for (p in this.data) l++; return l; }
 }; 
return { // Singleton public properties 
'create' : function() { return new kvs(); }, 
'count' : function() { return count; }
}; })();


kvs = keyValueStore.create(); 
kvs.set('Tom', "Baker"); kvs.set('Daisy', "Hostess"); 
var profession_of_daisy = kvs.get('Daisy'); kvs.delete('Daisy'); 
console.log(keyValueStore.count());

