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
    displayAllProducts('customer');
    //connection.end();
})

var pushTableData = function(results,table) {
  results.forEach(function(row, index) {
      var displayArray = new Array(5);
      displayArray[0] = row.item_id,
          displayArray[1] = row.product_name,
          displayArray[2] = row.department_name,
          displayArray[3] = row.price,
          displayArray[4] = row.stock_quantity
      table.push(displayArray);
  })
}


//Display all Products in inventory
var displayAllProducts = function(userProfile) {

    connection.query(query.sqlQuery.selectAllProducts, function(selectQueryError, results, fields) {
        if (selectQueryError) throw selectQueryError;
        var table = new Table({
            head: tableDisplayDefinition.headers.fullTable.fullTableColumns,
            colWidths: tableDisplayDefinition.headers.fullTable.fullTableWidth
        });

        pushTableData(results,table);
        console.log(table.toString());
        //Determine the recursive function based on who caller.
        requestForPurchase();

    })

}


var requestForPurchase = function() {
    inquirer.prompt(questions.prompt.inquirePurchaseQuestion).then(function(userResponse) {
        if (userResponse.inquirePurchaseAnswer.toLowerCase() == 'yes' || userResponse.inquirePurchaseAnswer.toLowerCase() == 'y') {
            purchaseProducts();
        } else {
            connection.end();
        }
    })

}
//Generate Receipt Functionality
var printReceipt = function(productName,productPrice,productQuantity,productId) {
console.log('-----------------------------------------------------------');
console.log('               BAMAZON   RECEIPT                    ');
console.log('         eat sleep code repeat forever                     ');
console.log('ST# 2006 OP# 0006176  TE# 03                       ');
console.log(productName +'                         '+ productPrice + ' * ' + productQuantity  + '        ' + (productPrice*productQuantity));
console.log(new Date());
console.log('          # ITEMS SOLD 1         ');
console.log('-----------------------------------------------------------');
}

var purchaseProducts = function() {
    inquirer.prompt(questions.prompt.purchaseProductQuestion).then(function(itemAnswer) {
        inquirer.prompt(questions.prompt.purchaseQuantityQuestion).then(function(quantityAnswer) {
            connection.query(query.sqlQuery.searchProductByName, "%" + [itemAnswer.requestedItem] + "%", function(selectQueryError, results, fields) {
                if (selectQueryError) throw selectQueryError;
                console.log(results.length);
                if(results.length === 1)
                {
                  var dbStockQuantity = 0;
                  var dbItemId = 0;
                  var dbPrice = 0;
                  var dbProductName = '';
                  results.forEach(function(row, index) {
                      dbStockQuantity = row.stock_quantity;
                      dbItemId = row.item_id;
                      dbPrice = row.price;
                      dbProductName = row.product_name;
                  })
                  if (dbStockQuantity >= quantityAnswer.requestedNumber) {
                          //Update Products Inventory
                          connection.query(query.sqlQuery.updateItem, [dbStockQuantity - quantityAnswer.requestedNumber, dbItemId], function(selectQueryError, results, fields) {
                          console.log("Items Successfully Purchased");
                          printReceipt(dbProductName,dbPrice,quantityAnswer.requestedNumber,dbItemId);
                          displayAllProducts();
                      })
                  } else {
                      console.log(colors.red('\u2717' + ' Insufficient Quantity - Please enter a valid quantity'));
                      requestForPurchase();
                  }

                } else if (results.length === 0)

                {
                  console.log(colors.red('\u2717' + ' No results matched your criteria - Please enter a valid Product name'));
                  requestForPurchase();
                }
                else {
                  console.log(colors.red('\u2717' + ' More than one results matched your criteria - Please enter a Product'));
                  requestForPurchase();
                }

            })

        })

    })
}
