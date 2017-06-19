exports.sqlQuery = {
selectAllProducts: 'SELECT * FROM products',

searchProductByName: 'SELECT * FROM products WHERE LOWER(product_name) LIKE  ?',

purchaseItem: 'UPDATE products SET stock_quantity = ? WHERE item_id = ?',

}
