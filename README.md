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

# Table of Contents
* [Usage](#usage)
  * [Setting up Node](#setting-up-node)
  * [Setting up MySQL](#setting-up-mysql)
  * [Insall the Application](#install-the-application)
* [Running the application](#running-the-application)
  * [Customer View](#customer-view)
  * [Manager View](#manager-view)
  * [Supervisor View](#supervisor-view)

## Usage
Application requires setting up node.js and MySQL. Details of node and MySQL installation have been given in the sections below.

## Setting up Node
Following steps will help to get this project up and running in your local system
1. Install Node in your system using the link given below 
https://coderwall.com/p/mhd6nw/install-node-js-on-mac-os-x-and-windows
2. To install the application, first clone this repository:
 
    `git clone https://github.com/ilamarang/Bamazon.git`
3. Change your current directory to Bamazon and run the following command

  	`npm install`
               
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


# Running the Application

## Customer View
1. Run the following command

`node bamazonCustomer.js`
The application will display the list of all Products available from the 'products' table and inquire the user if he wishes to Puchase any Product
![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/Bamazon_Customer_Initial_View.png)

2. Application will quit if the user selects 'No'

3. On selecting 'Yes', application will inquire the Product Name. User can provide a partial name of the product. For instance, in the screen shot given below, user wishes to purchase diapers and he has entered partial key word 'dia'

![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/Bamazon_Customer_InquireProductName.png)

4. System will inquire the product count as indicated in the screen shot below 

![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/Bamazon_Customer_InquireProductCount.png)

5. Once confirmed, a receipt will be generated and the inventory updated in the Database. The updated inventory details will be displayed to the user.

![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/Bamazon_Customer_Receipt.png)


## Manager View
1. Run the following command

`node bamazonManager.js`
The application will display a list of Menu items for the Manager selection as displayed below.
![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/ManagerView_InitialInquiry.png) 

2. View Products Menu will display all the menu items in the products table.

![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/ManagerView_ViewProducts.png)

3. View Low Inventory option will display the list of items that are low in inventory (<=100)

![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/ManagerView_LowInventory.png)

4. Add Inventory menu helps to add inventory to the daabase.

![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/ManagerView_AddInventory.png)

5. Add Products Menu helps in adding a new product in the database.

![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/ManagerView_AddProduct.png)


## Supervisor View
1. Run the following command

`node bamazonSupervisor.js`
The application will display a list of Menu items for the Supervisor selection as displayed below.
![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/Supervisor_Menu.png) 

2. View Product Sales by Department option displays the sale by each department.

![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/Supervisor_DepartmentView.png)

3. Create new department menu helps to create a new department.

![alt text](https://github.com/ilamarang/Bamazon/blob/master/images/Supervisor_AddNew_Department.png)
