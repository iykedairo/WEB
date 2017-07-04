function Tablet(a){
var table = document.createElement("table");
this.tb = function(a){
	table.id = "Results";
a.insertBefore(table, a[0]);
};
//Call this one differently  to create it once and for all

this.Table = function(){
	//Call this at regularly to create them a needed.
 var Row = document.createElement("tr"),
    Cell = document.createElement("td"),
    anotherCell = document.createElement("td"),
    body = document.body;
this.Cell = Cell, this.Row = Row, this.anotherCell = anotherCell;

		
	 Cell.id = "cell 1";
	 anotherCell.id = "cell 2";
	 Cell.innerHTML = "Cell One";
	 anotherCell.innerHTML = "Cell Two";

table.id = "table";
		 table.insertBefore(Row, table[0]);
		 Row.insertBefore(Cell, Row[0]);
		 Row.insertBefore(anotherCell, Row[1]);
		 console.log("Success!"+ table + "created with these information:- id:" + table.id + ", " + Row + " " + Cell + ": " + Cell.id + " " + anotherCell + ": " + anotherCell.id );
};

return this;
}
