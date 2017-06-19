exports.prompt = {
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
