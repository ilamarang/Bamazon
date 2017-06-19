var mysql = require('mysql');
var Table = require('cli-table');
var inquirer = require('inquirer');
var questions = require('./questions.js');
var sqlQuery = require('./query.js');
var tableDisplayDefinition = require('./tableHeaders.js')

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'Bamazon'

});

//Connect to the database
connection.connect(function(err){
  if(err) {
    throw err
  }
  else

  {

      displayAllProducts();
      connection.end();

}
})

//Display all Products in inventory
var displayAllProducts = function() {

  connection.query(sqlQuery.sqlQuery.selectAllProducts,function(selectQueryError,results,fields){
    if (selectQueryError) throw selectQueryError;
    var table = new Table({
      head: tableDisplayDefinition.headers.fullTable.fullTableColumns,
      colWidths: tableDisplayDefinition.headers.fullTable.fullTableWidth
  });
    results.forEach(function(row,index){
      var displayArray = new Array(5);
      displayArray[0] = row.item_id,
      displayArray[1] = row.product_name,
      displayArray[2] = row.department_name,
      displayArray[3] = row.price,
      displayArray[4] = row.stock_quantity
      table.push(displayArray);
    })
    console.log(table.toString());
  })

}
