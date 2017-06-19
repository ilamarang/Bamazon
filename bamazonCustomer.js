var mysql = require('mysql');
var Table = require('cli-table');
var inquirer = require('inquirer');
var questions = require('./questions.js');
var query = require('./query.js');
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
      //connection.end();
}
})

//Display all Products in inventory
var displayAllProducts = function() {

  connection.query(query.sqlQuery.selectAllProducts,function(selectQueryError,results,fields){
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
    requestForPurchase();
  })

}

var requestForPurchase = function() {
  inquirer.prompt(questions.prompt.inquirePurchaseQuestion).then(function(userResponse) {
    if(userResponse.inquirePurchaseAnswer.toLowerCase() == 'yes' || userResponse.inquirePurchaseAnswer.toLowerCase() == 'y')
    {
      purchaseProducts();
    }

  })

}

var purchaseProducts = function() {
  inquirer.prompt(questions.prompt.purchaseProductQuestion).then(function(itemAnswer) {
    inquirer.prompt(questions.prompt.purchaseQuantityQuestion).then(function(quantityAnswer) {
        connection.query(query.sqlQuery.searchProductByName,"%"+ [itemAnswer.requestedItem] + "%",function(selectQueryError,results,fields){
        if (selectQueryError) throw selectQueryError;
        var dbStockQuantity = 0;
        var dbItemId = 0
        results.forEach(function(row,index){
            dbStockQuantity = row.stock_quantity;
            dbItemId = row.item_id;
        })
        if(dbStockQuantity >= quantityAnswer.requestedNumber) {

          connection.query(query.sqlQuery.purchaseItem,[dbStockQuantity - quantityAnswer.requestedNumber,dbItemId],function(selectQueryError,results,fields){
            console.log("Items Successfully Purchased");
            displayAllProducts();
          })
        }
        
      })

    })

  })
}
