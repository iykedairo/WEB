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
			context.className.concat("	" + classname);
		}else{context.className = classname;}

	}, context)
return this;
}