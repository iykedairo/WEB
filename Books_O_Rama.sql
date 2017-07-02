
/*
 ____________________________________________________________________________________
|TERMS USED IN THIS SCRIPT
|____________________________________________________________________________________
|primary key means primary key
|auto_increment means the value should automatically increment
|unsigned means int value is either 0 or positive number
|tinyint means int value 0 - 255
|char(width) means value is a string
|not null means it will be filled later and not left null indefinitely
|float(digits, decimal_places)

*/

-- First Table is a table of four rows
create table Customers(
customerid int unsigned not null auto_increment primary key,
name char(50) not null,
address char(100) not null,
city char(30) not null
);

create table Orders(
orderid int unsigned not null auto_increment primary key,
customerid int unsigned not null,
amount float(6,2), -- Six digits in two decimal places
date date not null
);


create table Books(
isbn char(13) unsigned not null primary key,
author char(50),
title char(100),
price float(4,2) --4422.200 i.e four digits in two decimal places
);

create table Orders_Items(
orderid int unsigned not null,
isbn char(13) not null,
quantity tinyint unsigned,
primary key (orderid, isbn)
);


create table Books_Review(
isbn char(13) not null primary key,
review text
);