const { createShips, gameBoard } = require('./ships');

const domControl = (() => {
  
 

  const fieldPlayer = gameBoard.players.Player1
  const fieldEnemy = gameBoard.players.Player2
   gameBoard.createFields(fieldPlayer)
   gameBoard.createFields(fieldEnemy)
  

 const appendFieldsToPlayer = () => {
    
    // Clear the content element
   const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
   const content = document.querySelector('.content')
   const playersBox = document.querySelector('.playersBox')

   content.innerHTML = ''

    // Iterate over the alphabet keys (a-j)
    for (let index = 0; index < 10; index++) {
      const arrayName = String.fromCharCode(97 + index);
      const array = fieldPlayer.arrays[arrayName];

      // Create a row element for each array
      const rowElement = document.createElement('div');
      rowElement.className = 'row';

      // Iterate over the elements in the array
      for (let i = 0; i < array.length; i++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        if (array[i]) {
  cellElement.style.backgroundColor = "lightblue";
  cellElement.textContent = ""; // Delete text content
}
        
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

    playersBox.appendChild(alphabetRow)
    playersBox.appendChild(numbersRow)
  };

  const appendFieldsToEnemy = () => {
    
    // Clear the content element
   const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
   const content2 = document.querySelector('.content2')
   const enemysBox = document.querySelector('.enemysBox')

   content2.innerHTML = ''

    // Iterate over the alphabet keys (a-j)
    for (let index = 0; index < 10; index++) {
      const arrayName = String.fromCharCode(97 + index);
      const array = fieldEnemy.arrays[arrayName];

      // Create a row element for each array
      const rowElement = document.createElement('div');
      rowElement.className = 'row';

      // Iterate over the elements in the array
      for (let i = 0; i < array.length; i++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        if (array[i]) {
  cellElement.style.backgroundColor = "lightblue";
  cellElement.textContent = ""; // Delete text content
}
        
        // Append the cell element to the row element
        rowElement.appendChild(cellElement);
      }

      // Append the row element to the content element
      content2.appendChild(rowElement);
      
    }
     const alphabetRow = document.createElement('div');
     alphabetRow.className = 'alphabet2';

    alphabet.forEach((letter) => {
      const letterDiv = document.createElement('div');
      letterDiv.className = 'alphabet-cell2';
      letterDiv.textContent = letter;
      alphabetRow.appendChild(letterDiv);
    });

     const numbersRow = document.createElement('div');
    numbersRow.className = 'numbers2';

    numbers.forEach((number) => {
      const numberDiv = document.createElement('div');
      numberDiv.className = 'number-cell';
      numberDiv.textContent = number;
      numbersRow.appendChild(numberDiv);
    });

    enemysBox.appendChild(alphabetRow)
    enemysBox.appendChild(numbersRow)
  };

const ships = gameBoard.shipMaker();
  
const generatePlacedShips = () => {

}

  gameBoard.placingShips(fieldPlayer, 'b', 4, ships.carrier,'vertical')
  gameBoard.placingShips(fieldPlayer, 'f', 9, ships.boat,'horizontal')
  gameBoard.placingShips(fieldPlayer, 'b', 10, ships.cruiser,'horizontal')
 
   



  appendFieldsToPlayer()
  appendFieldsToEnemy()

  
   return { playerFields, enemyFields };
})();

// Export the factory object
module.exports = domControl;