function getElement(id){
return	(document.getElementById || document.all) ? document.getElementById(id) || document.all[id] : throw new Error("No way to retrieve element!");
}
