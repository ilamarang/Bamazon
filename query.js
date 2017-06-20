exports.sqlQuery = {
selectAllProducts: 'SELECT * FROM products',

searchProductByName: 'SELECT * FROM products WHERE LOWER(product_name) LIKE  ?',

updateItem: 'UPDATE products SET stock_quantity = ? WHERE item_id = ?',

lowInventoryList: 'SELECT * FROM products WHERE stock_quantity <=100',

searchProductById: 'SELECT * FROM products WHERE item_id =  ?',

}
