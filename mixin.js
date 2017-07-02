function mixin(receiver, supplier) {
			Object.keys(supplier).forEach(function(property) {
var descriptor = Object.getOwnPropertyDescriptor(supplier, property);		Object.defineProperty(receiver, property, descriptor);
document.writeln(property);
			});
			return receiver;
			}
var dm = {};

function mixin(receiver, supplier) { for (var property in supplier) { if  (supplier.hasOwnProperty(property)) {             receiver[property]  =  supplier[property]         }     } return  receiver; }

//mixin(dm, window.document);
//alert("2222222333")


function  mixin(receiver, supplier) { if (Object.getOwnPropertyDescriptor) { Object.keys(supplier).forEach(function(property) { var descriptor = Object.getOwnPropertyDescriptor(supplier, property);
//Object.getOwnPropertyNames() 
Object.defineProperty(receiver, property, descriptor);  });}}else{for(var property in supplier){if  (supplier.hasOwnProperty(property)){receiver[property]  =  supplier[property]}} return  receiver; }