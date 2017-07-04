//Stacking methods: Last_In_First_Out
var colors = new Array();
var count = colors.push("red", "green");
alert(count); //2
count = colors.push("black");
alert(count); //3
alert(colors.length);
var item = colors.pop();
alert(item);//black just poped off from the end
alert(colors.length);//2

//Queue  methods: First_in_First_Out
var colors = new Array();
var count = colors.push ("red", "green");
alert(count);//2
count = colors.push ("black");
alert(count);//3
var item = colors.shift();
alert(item);//red
alert(colors.length);//2
colors.unshift ("indigo", "violet", "olive", "orange");
alert(count);
count = colors.unshift ("cyan");
alert (colors + " " + " =  " + count);
var item = colors.pop();
alert(item + " " + colors.length);

//Reordering methods
var values = [1, 2, 3, 4, 5];
values.reverse();
alert(values);
//by default, sort() puts values in ascending order with the smallest value  first
