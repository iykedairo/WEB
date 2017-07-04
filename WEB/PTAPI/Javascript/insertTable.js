function Table(a){
	console.clear();
		console.log("Table initializes . . . start");
	var table = document.createElement("table"),
    Row = document.createElement("tr"),
    Cell = document.createElement("td"),
    anotherCell = document.createElement("td"),
    body = document.body;

		
	 Cell.id = "cell 1";
	 anotherCell.id = "cell 2";
	 Cell.innerHTML = "Cell One";
	 anotherCell.innerHTML = "Cell Two";

table.id = "table";
this.Cell = Cell, this.Row = Row, this.anotherCell = anotherCell;
console.log("....end");
!function(){
		console.log("Insert initializes . . . start");
	if(a){
		console.clear();
		console.log("We have argument " + a + " supplied. Good to go!");
		if(arguments.length == 0){
		 a.insertBefore(Row, a.children[0]);
		 //table.insertBefore(Row, table[0]);
		 Row.insertBefore(Cell, Row[0]);
		 Row.insertBefore(anotherCell, Row[1]);
		 console.log("Success!"+ table + "created with these information:- id:" + table.id + ", " + Row + " " + Cell + ": " + Cell.id + " " + anotherCell + ": " + anotherCell.id );

return table;
		}
	else if(arguments.length != 0){
		console.log("Please, only one arguments are required.");
	}
	else{
		console.log("Your arguments :" + arguments[0] + arguments[1] + "are not applicable in this context.");
	}
	}
	
	else{
		console.clear();
		console.log("No values . . . default values will be submitted instead");
			!function(){
		 body.insertBefore(table, body[0]);
			table.insertBefore(Row, table[0]);
			Row.insertBefore(Cell, Row[0]);
//			Row(Cell, Row[1]);
			Cell.parentNode.insertBefore(anotherCell, Cell[1]);

			return table;
			}();


	}


 }();

	 
}

//document.addEventListener("keydown", Table);

/*
<style type="text/css">
#bd{
	width: 50%;
	position: relative;;
	margin: 0 auto;
}
	#table{
		width: 100%
	}
	td{
		width: 50%;
	}
</style>
*/