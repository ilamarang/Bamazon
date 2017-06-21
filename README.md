# Bamazon
A CLI based application using Node.js and MySQL integration to simulate Amazon like shopping experience.

* Writing code for the NodeJS environment.
* Use of the following NodeJS modules - 
 * inquirer - <https://www.npmjs.com/package/inquirer>
 * MySQL - <https://www.npmjs.com/package/mysql>
 * fs
 * cli-table - <https://www.npmjs.com/package/cli-table>
 * colors - <https://www.npmjs.com/package/colors>
* Javascript - 
 * classes
 * call backs
 * recursion



## Setting up Node
Following steps will help to get this project up and running in your local system
1. Install Node in your system using the link given below 
https://coderwall.com/p/mhd6nw/install-node-js-on-mac-os-x-and-windows
2. Clone this project using the following link 
https://github.com/ilamarang/Bamazon.git
3. Change your current directory to Bamazon and run the following command
npm install

## Setting up MySQL
1. Install MySQL in your system using the link given below
https://dev.mysql.com/downloads/installer/
2. Once you have verified that the SQL server is running, create tables given in steps 3 and 4 below
3. `create table Bamazon.departments(
department_id integer(10) auto_increment not null,
department_name varchar(50) not null , 
over_head_costs  decimal (10,2) not null, 
total_sales decimal(12,2) not null,
PRIMARY KEY (department_id)
);`

4. `create table Bamazon.products(
item_id integer(10) auto_increment not null,
product_name varchar(100) not null,
department_name varchar(50) not null , 
price  decimal (10,2) not null, 
stock_quantity integer(4) not null,
product_sales decimal(12,2),
PRIMARY KEY (item_id)
);`
