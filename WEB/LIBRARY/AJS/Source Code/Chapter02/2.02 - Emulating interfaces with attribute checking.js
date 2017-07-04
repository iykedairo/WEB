/*

interface Composite {
    function add(child);
    function remove(child);
    function getChild(index);
}

interface FormItem {
    function save();
}

*/

var CompositeForm = function(id, method, action) {
    this.implementsInterfaces = ['Composite', 'FormItem'];
  // ...
};

//...

function addForm(formInstance) {
    if(!implements(formInstance, 'Composite', 'FormItem')) {
        throw new Error("Object does not implement a required interface.");
    }
    //...
}

// The implements function, which checks to see if an object declares that it 
// implements the required interfaces.

function implements(object) {
var i, l = arguments.length;
    for( i = 1; i < l; i++) { // Looping through all arguments 
                                                // after the first one.
        var
interfaceName = arguments[i],
 interfaceFound = false, j,
faces =  object.implementsInterfaces,
len = faces.length;

        for( j = 0; j < len;  j++) {
            if(faces[j] == interfaceName) {
                interfaceFound = true;
                break;
            }
        }
    
        if(!interfaceFound) {
            return false; // An interface was not found.
        }
    } 	
    return true; // All interfaces were found.
}