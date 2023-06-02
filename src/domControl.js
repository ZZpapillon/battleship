const { createShips, gameBoard } = require('./ships');

const domControl = (() => {
  
  const fields = gameBoard.createFields()
  

 const appendFieldsToContent = () => {
    // Clear the content element
   const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
   const content = document.querySelector('.content')
   const middle = document.querySelector('.middle')

    // Iterate over the alphabet keys (a-j)
    for (let index = 0; index < 10; index++) {
      const arrayName = String.fromCharCode(97 + index);
      const array = fields[arrayName];

      // Create a row element for each array
      const rowElement = document.createElement('div');
      rowElement.className = 'row';

      // Iterate over the elements in the array
      for (let i = 0; i < array.length; i++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.textContent = array[i];
        
        // Append the cell element to the row element
        rowElement.appendChild(cellElement);
      }

      // Append the row element to the content element
      content.appendChild(rowElement);
      
    }
     const alphabetRow = document.createElement('div');
     alphabetRow.className = 'alphabet';

    alphabet.forEach((letter) => {
      const letterDiv = document.createElement('div');
      letterDiv.className = 'alphabet-cell';
      letterDiv.textContent = letter;
      alphabetRow.appendChild(letterDiv);
    });

     const numbersRow = document.createElement('div');
    numbersRow.className = 'numbers';

    numbers.forEach((number) => {
      const numberDiv = document.createElement('div');
      numberDiv.className = 'number-cell';
      numberDiv.textContent = number;
      numbersRow.appendChild(numberDiv);
    });

    middle.appendChild(alphabetRow)
    middle.appendChild(numbersRow)
  };
  appendFieldsToContent();

  
  return fields;
})();

// Export the factory object
module.exports = domControl;