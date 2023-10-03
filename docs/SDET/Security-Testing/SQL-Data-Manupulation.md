---
title: SQL Data Manupulation 
---

# Data Manupulation

### Add data into table
```bash
insert into tablename (columnName1,columnName2) values("Test Value","Test Value2")
```

### Accessing Database
```bash
# Show all values from the table
select * from tableName;

# Show a specific row
select * from tableName where id =1;

# Show count of rows
select count(*) from tableName;

# showing non NUll values
select * from tableName where name is NOT NULL

# Show data where age not equal to 40;
select * from tableName where age != 40;

# Show unique rows
select distinct * from tableName 

# In operator
select * from tableName where  id in(1,2,3);

# Between operator
select * from tableName where id between 1 and 10;

# Get todays date year time day and week
select time(now()), day(now()), year(now()), week(now());
```

### Reguler expression usage
```bash
# Show rows with name starting with s + any letter + u
select * from tableName where (name like "%s_u" && age > 40) || (name like "%su" && age < 40) ;

# Show rows with name containing letter  o
select * from tableName where name like "%o%";

# Show rows with name not starting with su
select * from tableName where name not like "su%";
```

### Updating Database
```bash
# Adding new column to an existing table 
alter table tableName add columnName varchar(20); 

# Removing a column from an existing table
alter table tableName drop columnName

# Added Foreign key to existing table (this act like Enums in db world)
alter table tableName add constrain fk_addForeignkey foreign key (columnName) reference tablename (columnName)

# Update values in existing table
update tableName set columnName1 = "Value" where id = 1;

# Add index to and existing table(this adds index to the columns rows which helps in fetching the data quickly)
alter table tableName add index idx_index(columnName);
```

### Group By, Order by, Limits, Union, UnionAll, Sub Queries, Views
```bash
# Accending Order
select * from tableName order by columnName1 asc, columnName2 desc;

# Decending Order
select * from tableName order by columnName1 desc, columnName2 desc;

# Group By
select columnName2 from tableName where condition group by columnName2 having condition order by columnName2 asc/desc;

#Limits
select * from TableName Limit 1, 10;

# note - Both the tables needs to be similer for this to work
# Union Rmoves duplicates while unionall doesnt 
select * from TableName condition
union/union all
select * from TableName condition

# Sub Queries
select * from TableName where column in (select * from table);

# View
create view viewName as (your SQL query);
# View is a virtual table whose access can be provided to restricted users(developer decides which columns to be visible in the views)
# View creates something which looks like table but in the background it just runs the query and creates a table/view.
# Hene views can be slow to access.
# note - data can be inserted into the view but it will endup inserting in the main table (might not be visible in view)
```

### Joins 
```bash
# Inner Join 
select a.columnName1 , b.columnName2 from table1 as a join table2 as b on a.columnName1 = b.columnName2;

# Left Join 
select a.columnName1 , b.columnName2 from table1 as a left join table2 as b on a.columnName1 = b.columnName2;

# Right Join 
select a.columnName1 , b.columnName2 from table1 as a right join table2 as b on a.columnName1 = b.columnName2;
```

### Variables and Functions 
```bash
# Varibale
set @varName = "Value";

# Function

# Join Strings
select concat(columnName,string2,string3,and so on ...) from tableName;

# Uppercase String
select ucase(string);

# Lower case String
select lcase(string)
```

### Stored Proc
```bash 
# running multiple qureies at ones from another application
# Create Procedure
create procedure ProcedureName(in id1 int, id2 int, title text )
begin
select id, title into @id, @title from tableName where columnName1 < id1 and columnName2 > id2 and columnName3 = title;
end;
# note - you should be using a databse for prcedures to work

# Drop Procedure
drop prcedure ProcedureName;

# invoking a procedure
call ProcedureName(1,2);

# Create Function 
# just returns one single value
create function functionName(id int, name text) returns numberic(10,2) 
begin
  declare results numberic(10,2);
  select id into @results from tablename where id= 1;

  return results
end; 

# calling Function 
select functionName(1,2,"text"); 
# functions will return one value 

```