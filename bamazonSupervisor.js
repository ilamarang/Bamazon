//Import all the external packages and javascript required to run the application
var mysql = require('mysql');
var Table = require('cli-table');
var inquirer = require('inquirer');
var questions = require('./questions.js');
var query = require('./query.js');
var tableDisplayDefinition = require('./tableHeaders.js');
var colors = require('colors/safe');

//Define Global Variables


//Create a connection String
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Bamazon'

});

//Connect to the database
connection.connect(function(err) {
    if (err) throw err
    manageSelectionMenu();
})

var manageSelectionMenu = function() {
    inquirer.prompt(questions.prompt.supervisorProfileQuestion).then(function(userResponse) {
        switch (userResponse.supervisorProfileAnswer) {
            case '1. View Product Sales by Department':
                displayAllDepartments();
                break;
            case '2. Create New Department':
                addNewDepartment();
                break;
            default:
                connection.end();
        }


    })

}

var addNewDepartment = function() {
    inquirer.prompt(questions.supervisorPrompt).then(function(userResponse) {
        //Add Product Inventory

        connection.query(query.sqlQuery.addNewDepartment, [userResponse.addNewDepartmentName, userResponse.addNewOverheadCosts], function(selectQueryError, results, fields) {
            if (selectQueryError) throw selectQueryError;

            console.log("Stock Updated Successfully");
            displayAllDepartments();


        })

    })

}

var pushTableData = function(results, table) {
    results.forEach(function(row, index) {
        var displayArray = new Array(5);
        displayArray[0] = row.department_id;
        displayArray[1] = row.department_name;
        displayArray[2] = row.over_head_costs;
        displayArray[3] = row.total_sales;
        displayArray[4] = row.total_profit;

        table.push(displayArray);
    })
}


//Display all Departments
var displayAllDepartments = function() {

    connection.query(query.sqlQuery.selectAllDepartments, function(selectQueryError, results, fields) {
        if (selectQueryError) throw selectQueryError;
        var table = new Table({
            head: tableDisplayDefinition.headers.departmentTable.fullTableColumns,
            colWidths: tableDisplayDefinition.headers.departmentTable.fullTableWidth
        });
        pushTableData(results, table);
        console.log(table.toString());
        //Determine the recursive function based on who caller.
        manageSelectionMenu();

    })

}
