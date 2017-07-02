create table Names(
FirstName char(25) not null,
MiddleName char(25) not null,
LastName char(25) not null
);

create table Address(
Street char(255) not null,
City char(50) not null,
State char(50) not null,
AreaCode int(10) unsigned not null,
Coountry char(50) not null
);


create table Contacts(
PhoneNumber int(15) unsigned not null,
Email char(255) not null,
Fax int(15) unsigned not null,
Website char(255) not null
);

create table Response(
Response text
);