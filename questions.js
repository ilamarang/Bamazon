exports.prompt = {
chooseProfileQuestion: [{
                  name: 'chooseProfileAnswer',
                  message: 'Please select the profile you want to Choose',
                  type: 'list',
                  choices: ['Customer','Manager']
                  }],
managerProfileQuestion: [{
                  name: 'managerProfileAnswer',
                  message: 'Please select an option',
                  type: 'list',
                  choices: ['1. View Products for Sale','2. View Low Inventory', '3. Add to Inventory','4. Add New Product','5. Quit Application']
                    }],
purchaseProductQuestion: [{
    name: 'requestedItem',
    message: 'Please enter the Product Name you wish to Purchase',
    type: 'input'
    }],
purchaseQuantityQuestion: [{
        name: 'requestedNumber',
        message: 'Please enter the count of the items you wish to Purchase',
        type: 'input'
        }],
inquirePurchaseQuestion: [{
                name: 'inquirePurchaseAnswer',
                message: 'Do you want to Purchase Items ?',
                type: 'list',
                choices: ['Yes','No']
              }],
addInventoryProductQuestion: [{
                      name: 'requestedProduct',
                      message: 'Please enter ID of the product that wish to add',
                      type: 'input'
                      }],
addInventoryQuantityQuestion: [{
                              name: 'requestedNumber',
                              message: 'Please enter the count to items to be added to existing Stock',
                              type: 'input'
                              }],
addNewProductQuestion: [{
name: 'addNewProductAnswer',
message: 'Please enter the Product Name',
type: 'input'
}],
addPriceQuestion: [{
name: 'addNewPriceAnswer',
message: 'Please enter the price of the Product',
type: 'input'
}],
addDepartmentQuestion: [{
name: 'addNewDepartmentAnswer',
message: 'Please enter the Department Name',
type: 'input'
}],

addStockQuestion: [{
name: 'addNewStockAnswer',
message: 'Please enter the initial Stock amount',
type: 'input'
}]


}

exports.ManagerPrompt =
[
  {
  name: 'addNewProductAnswer',
  message: 'Please enter the Product Name',
  type: 'input'
},
{
name: 'addNewDepartmentAnswer',
message: 'Please enter the Department Name',
type: 'input'
},
{
name: 'addNewPriceAnswer',
message: 'Please enter the price of the Product',
type: 'input'
},
{
name: 'addNewStockAnswer',
message: 'Please enter the initial Stock amount',
type: 'input'
}




]
