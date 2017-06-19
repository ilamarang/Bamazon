exports.prompt = {
initialQuestions: [{
    name: 'dbStartQuestions',
    message: 'Please select an option to start using this App',
    type: 'list',
    choices: ['1. Search By Artist', '2. All Artists > 2', '3. Search By Range', '4. Display all Items'
    ]
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
