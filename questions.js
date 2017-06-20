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
CustomerQuestion: [{
    name: 'itemAnswer',
    message: 'Enter the artist Name',
    type: 'input'
  }],
itemPrice: [{
    name: 'titlePrice',
    message: 'Enter Item Price',
    type: 'input'
  }],
startRange: [{
      name: 'startRange',
      message: 'Enter your start Range',
      type: 'input'
    }],
endRange: [{
          name: 'endRange',
          message: 'Enter your last Range',
          type: 'input'
        }]

}
