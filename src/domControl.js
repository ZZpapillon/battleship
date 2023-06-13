const { createShips, gameBoard, startButton} = require('./ships');
const { startGame} = require('./gameloop');
const {playervsPlayer, PageLoad} = require('./pageLoad')

   const contentContainer = document.querySelector('.contentContainer')
   contentContainer.appendChild(startButton)

const domControl = (() => {
  
  const enemysBox = document.querySelector('.enemysBox')
 const playersBox = document.querySelector('.playersBox')

  
   

  const fieldPlayer = gameBoard.players.Player1
  const fieldEnemy = gameBoard.players.Player2

  
  
  gameBoard.createFields(fieldEnemy)

  
  gameBoard.createFields(fieldPlayer)
 let shipsCreated = false
 let shipsCreated2 = false


 function resetArrays(player) {
  // Clear the fieldPlayer.arrays object
  Object.keys(player.arrays).forEach((arrayKey) => {
    const array = player.arrays[arrayKey];
    for (let i = 0; i < array.length; i++) {
      array[i] = ''; // Set the index to an empty string
    }
  });
}
let shipName;
let shipName2;

 const appendFieldsToPlayer = () => {
  if (!shipsCreated) {
      fieldPlayer.ships = gameBoard.shipMaker();
      shipsCreated = true;
    } 
  
  
   resetArrays(fieldPlayer); // Reset the arrays in fieldPlayer
   

  gameBoard.storedShips.forEach((storedShip) => {
    if (storedShip.player === fieldPlayer.name) {
      const { alphabet, number, shipName, orientation } = storedShip;
      try {
        gameBoard.placingShips(fieldPlayer, alphabet, number, shipName, orientation);
      } catch (error) {
        // Invalid placement, handle error if needed
      }
    }
    });

  
  
    // Clear the content element
   const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
   const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
   const content = document.querySelector('.content')
   const playersBox = document.querySelector('.playersBox')

   content.innerHTML = ''

   
  //  resetArrays()
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

        // Add alphabet, array, and index as data attributes
       cellElement.setAttribute('data-array', arrayName);
       cellElement.setAttribute('data-index', i + 1);
 


        if (array[i]) {
  
  cellElement.classList.add('ship');
  cellElement.style.backgroundColor = "lightblue";
  cellElement.textContent = ""; // Delete text content
  
  // Find the ship name associated with the current cell
     shipName = Object.keys(fieldPlayer.ships).find((name) => fieldPlayer.ships[name] === array[i]);

    // Set the ship name as a data attribute
    cellElement.setAttribute('data-ship-name', shipName)
     
    cellElement.classList.add(shipName);
    if (i === 0) {
          cellElement.classList.add('ship-start'); // Add ship-start class to first cell of the ship
        }
   
    
   
         

 
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

const shipElements = document.querySelectorAll('.ship');

const cellElements = document.querySelectorAll('.cell');
let selectedShipCells = null;
let shipElement = null;

// ...

const dragStartHandler = (event) => {
  const clickedCell = event.target;
  shipElement = clickedCell.closest('.ship');

  if (shipElement) {
    event.stopPropagation();

    const shipName = shipElement.getAttribute('data-ship-name');
    const shipCells = Array.from(document.querySelectorAll(`.cell[data-ship-name="${shipName}"]`));

    const firstCellArray = shipCells[0].getAttribute('data-array');
    const isVertical = shipCells.every((cell) => cell.getAttribute('data-array') === firstCellArray);

    shipCells.forEach((cell) => {
      cell.classList.add('dragging');

      if (cell === clickedCell) {
        cell.classList.add('ship-start');
      }
    });

    // Create a custom drag image
    const dragImage = document.createElement('div');
    dragImage.className = 'drag-image';

    if (isVertical) {
      const shipHeight = shipCells.length * clickedCell.offsetHeight;
      dragImage.style.width = `${clickedCell.offsetHeight}px`;
      dragImage.style.height = `${shipHeight}px`;
    } else {
      const shipWidth = shipCells.length * clickedCell.offsetHeight;
      dragImage.style.width = `${shipWidth}px`;
      dragImage.style.height = `${clickedCell.offsetHeight}px`;
    }

    dragImage.style.backgroundColor = 'lightblue'; // Set the desired background color
    event.dataTransfer.setDragImage(dragImage, 0, 0);
    document.body.appendChild(dragImage)

     

    // Store a reference to the selected ship cells
    selectedShipCells = shipCells;
  }
};

const dragOverHandler = (event) => {
  event.preventDefault();
};










const dragEndHandler = () => {
  const cells = document.querySelectorAll('.cell.dragging');

  cells.forEach((cell) => {
    cell.classList.remove('dragging');
  });

  selectedShipCells = null;
};



const dropHandler = (event) => {
  event.preventDefault();

  if (selectedShipCells) {
    const targetCell = event.target.closest('.cell');
    if (targetCell) {
      const clickedArray = targetCell.dataset.array;
      const clickedIndex = parseInt(targetCell.dataset.index);

      console.log('Dropping ship on target cell:', targetCell);
      console.log('Clicked Array:', clickedArray);
      console.log('Clicked Index:', clickedIndex);

      const clickedShipName = selectedShipCells[0].dataset.shipName;
      console.log(clickedShipName);
      const clickedShipData = gameBoard.storedShips.find(
        (shipData) => shipData.shipName.name === clickedShipName && shipData.player === fieldPlayer.name 
      );
      console.log(clickedShipData)
      
      if (clickedShipData) {
        const { alphabet, number, shipName, orientation } = clickedShipData;
        const clickedShipIndex = gameBoard.storedShips.findIndex(
          (ship) =>
            ship.player === fieldPlayer.name &&
            ship.shipName.name === clickedShipName
        );
        console.log(gameBoard.storedShips[clickedShipIndex]);
        if (clickedShipIndex !== -1) {
          // Update the coordinates in the storedShips array
          gameBoard.storedShips[clickedShipIndex].alphabet = clickedArray;
          gameBoard.storedShips[clickedShipIndex].number = clickedIndex;

          // Remove the ship from its old position in fieldPlayer.arrays
          const oldAlphabet = clickedShipData.alphabet;
          const oldNumber = clickedShipData.number;
          console.log(gameBoard.storedShips[clickedShipIndex]);
          
        }
        
        resetArrays(fieldPlayer)

       

        // // Repost all ships from stored ships, excluding the clicked ship
        gameBoard.storedShips.forEach((storedShip) => {
          if (
            storedShip.player === fieldPlayer.name &&
            storedShip.shipName.name !== clickedShipName
          ) {
            const { alphabet, number, shipName, orientation } = storedShip;
            gameBoard.placingShips(
              fieldPlayer,
              alphabet,
              number,
              shipName,
              orientation
            );
          }

         
        });

        try {
          // Try placing the clicked ship with the new coordinates
          gameBoard.placingShips(
            fieldPlayer,
            clickedArray,
            clickedIndex,
            shipName,
            orientation
          );
          clickedShipData.coordinates = {
            array: clickedArray,
            index: clickedIndex,
          };
          
          console.log('Clicked ship placed with new coordinates:', clickedShipData);

          // // Update the coordinates in storedShips
          const storedShipIndex = gameBoard.storedShips.findIndex(
            (storedShip) =>
              storedShip.player === fieldPlayer.name &&
              storedShip.shipName.name === clickedShipName
          );
          if (storedShipIndex !== -1) {
            gameBoard.storedShips[storedShipIndex].coordinates = {
              array: clickedArray,
              index: clickedIndex,
            };
            console.log('Clicked ship coordinates updated in storedShips:', gameBoard.storedShips[storedShipIndex]);
          }
          appendFieldsToPlayer();
        } catch (error) {
          // Invalid placement, revert to original coordinates
          clickedShipData.alphabet = alphabet;
          clickedShipData.number = number;
          gameBoard.placingShips(
            fieldPlayer,
            alphabet,
            number,
            shipName,
            orientation
          );
          
          console.log(clickedShipData.alphabet, clickedShipData.number)
          console.log(fieldPlayer.arrays);
          console.log('Invalid placement, reverting to original coordinates:',error );
          console.log(shipElements)
         

      
     

 
       selectedShipCells.forEach((ship) => {
          ship.classList.add('vibrate');
          setTimeout(() => {
            ship.classList.remove('vibrate');
          }, 5000);
        });
    


      setTimeout(() => {
          appendFieldsToPlayer();
        }, 1000);
          
        }
      }
    }
  }
};









// Attach event listeners to cell elements

cellElements.forEach((cellElement) => {
  cellElement.addEventListener('dragover', dragOverHandler);
  cellElement.addEventListener('drop', dropHandler);

  const shipElement = cellElement.closest('.ship');
  if (shipElement) {
    cellElement.draggable = true;
    cellElement.addEventListener('dragstart', dragStartHandler);
    cellElement.addEventListener('dragend', dragEndHandler);
  }
});








 const clickHandler = (event) => {
  console.log('Clicked on shipElement');

  
  
  const clickedCell = event.currentTarget;
  const clickedArray = clickedCell.dataset.array;
  const clickedIndex = clickedCell.dataset.index;
  console.log('Clicked Cell:', clickedCell);
  console.log('Clicked Array:', clickedArray);
  console.log('Clicked Index:', clickedIndex);

  // Find the ship name based on the clicked cell
  const clickedShipName = clickedCell.dataset.shipName;
  const clickedShipData = gameBoard.storedShips.find((shipData) => {
    return (
      shipData.player === fieldPlayer.name &&
      shipData.shipName.name === clickedShipName
    );
  });

  if (clickedShipData) {
    console.log('Clicked Ship Data:', clickedShipData);
    const { alphabet, number, shipName, orientation } = clickedShipData;
    const newOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

    // Empty the fieldPlayer.arrays object
    resetArrays(fieldPlayer)

    // Repost all ships from stored ships, excluding the clicked ship
    gameBoard.storedShips.forEach((storedShip) => {
      if (
        storedShip.player === fieldPlayer.name &&
        storedShip.shipName.name !== clickedShipName
      ) {
        const { alphabet, number, shipName, orientation } = storedShip;
        gameBoard.placingShips(
          fieldPlayer,
          alphabet,
          number,
          shipName,
          orientation
        );
      }
    });

    try {
      // Try placing the clicked ship with the new orientation
      gameBoard.placingShips(
        fieldPlayer,
        alphabet,
        number,
        shipName,
        newOrientation
      );
      clickedShipData.orientation = newOrientation;
      
      console.log('Clicked ship placed with new orientation:', clickedShipData);

      // Update the orientation in storedShips
      const storedShipIndex = gameBoard.storedShips.findIndex(
        (storedShip) =>
          storedShip.player === fieldPlayer.name &&
          storedShip.shipName.name === clickedShipName
      );
      if (storedShipIndex !== -1) {
        gameBoard.storedShips[storedShipIndex].orientation = newOrientation;
        console.log('Clicked ship orientation updated in storedShips:', gameBoard.storedShips[storedShipIndex]);
      }
      appendFieldsToPlayer();
    } catch (error) {
      // Invalid placement, revert to original orientation
      gameBoard.placingShips(
        fieldPlayer,
        alphabet,
        number,
        shipName,
        orientation
      );
       
      console.log('Invalid placement, reverting to original orientation:', error);
      const shipCells = document.querySelectorAll(`[data-ship-name="${clickedShipName}"]`)
  
      shipCells.forEach((cell) => {
        cell.classList.add('vibrate');
        setTimeout(() => {
          cell.classList.remove('vibrate');
        }, 5000);
      });

          setTimeout(() => {
            appendFieldsToPlayer();
          }, 1000);
    }
  }
};

    shipElements.forEach((shipElement) => {
    shipElement.addEventListener('dblclick', clickHandler);
  });
  
  
   
   
  


   startButton.addEventListener('click', () => {
    shipElements.forEach((shipElement) => {
    shipElement.removeEventListener('dblclick', clickHandler);
    // shipElement.style.backgroundColor = 'transparent'
  });
  cellElements.forEach((cellElement) => {
  cellElement.removeEventListener('dragover', dragOverHandler);
  cellElement.removeEventListener('drop', dropHandler);

  const shipElement = cellElement.closest('.ship');
  if (shipElement) {
    cellElement.draggable = false;
    cellElement.removeEventListener('dragstart', dragStartHandler);
    cellElement.removeEventListener('dragend', dragEndHandler);
  }
});
    changeLayout()
    startButton.remove()
    
  
    startGame(fieldEnemy, fieldPlayer);
    
  });
  
  function changeLayout() {
    enemysBox.style.display = 'grid'
    contentContainer.style.setProperty('--blur', 'none');
    contentContainer.classList.add('new-layout');
    content.classList.add('new-layout')
    playersBox.classList.add('new-layout');
    enemysBox.classList.add('new-layout')
    alphabetRow.classList.add('new-layout')
    numbersRow.classList.add('new-layout')
  }

  };
  

 
 
 
 
 
 
 
  const appendFieldsToEnemy = () => {
     if (!shipsCreated2) {
      fieldEnemy.ships = gameBoard.shipMaker();
      shipsCreated2 = true;
    } 
  
  
   resetArrays(fieldEnemy); // Reset the arrays in fieldPlayer
   

  gameBoard.storedShips.forEach((storedShip) => {
    if (storedShip.player === fieldEnemy.name) {
      const { alphabet, number, shipName, orientation } = storedShip;
      try {
        gameBoard.placingShips(fieldEnemy, alphabet, number, shipName, orientation);
      } catch (error) {
        // Invalid placement, handle error if needed
      }
    }
    });
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
        cellElement.className = 'cell2';
        cellElement.setAttribute('data-array2', arrayName);
        cellElement.setAttribute('data-index2', i + 1);
        if (array[i]) {
  cellElement.classList.add('ship2');
  cellElement.style.backgroundColor = "lightblue";
  cellElement.textContent = ""; // Delete text content

  // Find the ship name associated with the current cell
     shipName = Object.keys(fieldEnemy.ships).find((name) => fieldEnemy.ships[name] === array[i]);

    // Set the ship name as a data attribute
    cellElement.setAttribute('data-ship-name', shipName)
    
    cellElement.classList.add(shipName);
    if (i === 0) {
          cellElement.classList.add('ship-start'); // Add ship-start class to first cell of the ship
        }
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

const shipElements = document.querySelectorAll('.ship2');

const cellElements = document.querySelectorAll('.cell2');
let selectedShipCells = null;
let shipElement = null;

const dragStartHandler = (event) => {
  const clickedCell = event.target;
  shipElement = clickedCell.closest('.ship2');

  if (shipElement) {
    event.stopPropagation();

    const shipName = shipElement.getAttribute('data-ship-name');
    const shipCells = Array.from(document.querySelectorAll(`.cell2[data-ship-name="${shipName}"]`));

    const firstCellArray = shipCells[0].getAttribute('data-array2');
    const isVertical = shipCells.every((cell) => cell.getAttribute('data-array2') === firstCellArray);

    shipCells.forEach((cell) => {
      cell.classList.add('dragging');

      if (cell === clickedCell) {
        cell.classList.add('ship-start');
      }
    });

    // Create a custom drag image
    const dragImage = document.createElement('div');
    dragImage.className = 'drag-image';

    if (isVertical) {
      const shipHeight = shipCells.length * clickedCell.offsetHeight;
      dragImage.style.width = `${clickedCell.offsetHeight}px`;
      dragImage.style.height = `${shipHeight}px`;
    } else {
      const shipWidth = shipCells.length * clickedCell.offsetHeight;
      dragImage.style.width = `${shipWidth}px`;
      dragImage.style.height = `${clickedCell.offsetHeight}px`;
    }

    dragImage.style.backgroundColor = 'lightblue'; // Set the desired background color
    event.dataTransfer.setDragImage(dragImage, 0, 0);
    document.body.appendChild(dragImage)

     

    // Store a reference to the selected ship cells
    selectedShipCells = shipCells;
  }
};
const dragOverHandler = (event) => {
  event.preventDefault();
};

const dragEndHandler = () => {
  const cells = document.querySelectorAll('.cell2.dragging');

  cells.forEach((cell) => {
    cell.classList.remove('dragging');
  });

  selectedShipCells = null;
};
const dropHandler = (event) => {
  event.preventDefault();

  if (selectedShipCells) {
    const targetCell = event.target.closest('.cell2');
    if (targetCell) {
      const clickedArray = targetCell.dataset.array2;
      const clickedIndex = parseInt(targetCell.dataset.index2);

      console.log('Dropping ship on target cell:', targetCell);
      console.log('Clicked Array:', clickedArray);
      console.log('Clicked Index:', clickedIndex);

      const clickedShipName = selectedShipCells[0].dataset.shipName;
      console.log(clickedShipName);
      const clickedShipData = gameBoard.storedShips.find(
        (shipData) => shipData.shipName.name === clickedShipName && shipData.player === fieldEnemy.name 
      );
      console.log(clickedShipData)
      
      if (clickedShipData) {
        const { alphabet, number, shipName, orientation } = clickedShipData;
        const clickedShipIndex = gameBoard.storedShips.findIndex(
          (ship) =>
            ship.player === fieldEnemy.name &&
            ship.shipName.name === clickedShipName
        );
        console.log(gameBoard.storedShips[clickedShipIndex]);
        if (clickedShipIndex !== -1) {
          // Update the coordinates in the storedShips array
          gameBoard.storedShips[clickedShipIndex].alphabet = clickedArray;
          gameBoard.storedShips[clickedShipIndex].number = clickedIndex;

          // Remove the ship from its old position in fieldPlayer.arrays
          const oldAlphabet = clickedShipData.alphabet;
          const oldNumber = clickedShipData.number;
          console.log(gameBoard.storedShips[clickedShipIndex]);
          
        }
        
        resetArrays(fieldEnemy)

       

        // // Repost all ships from stored ships, excluding the clicked ship
        gameBoard.storedShips.forEach((storedShip) => {
          if (
            storedShip.player === fieldEnemy.name &&
            storedShip.shipName.name !== clickedShipName
          ) {
            const { alphabet, number, shipName, orientation } = storedShip;
            gameBoard.placingShips(
              fieldEnemy,
              alphabet,
              number,
              shipName,
              orientation
            );
          }

         
        });

        try {
          // Try placing the clicked ship with the new coordinates
          gameBoard.placingShips(
            fieldEnemy,
            clickedArray,
            clickedIndex,
            shipName,
            orientation
          );
          clickedShipData.coordinates = {
            array: clickedArray,
            index: clickedIndex,
          };
          
          console.log('Clicked ship placed with new coordinates:', clickedShipData);

          // // Update the coordinates in storedShips
          const storedShipIndex = gameBoard.storedShips.findIndex(
            (storedShip) =>
              storedShip.player === fieldEnemy.name &&
              storedShip.shipName.name === clickedShipName
          );
          if (storedShipIndex !== -1) {
            gameBoard.storedShips[storedShipIndex].coordinates = {
              array: clickedArray,
              index: clickedIndex,
            };
            console.log('Clicked ship coordinates updated in storedShips:', gameBoard.storedShips[storedShipIndex]);
          }
          appendFieldsToEnemy();
        } catch (error) {
          // Invalid placement, revert to original coordinates
          clickedShipData.alphabet = alphabet;
          clickedShipData.number = number;
          gameBoard.placingShips(
            fieldEnemy,
            alphabet,
            number,
            shipName,
            orientation
          );
          
          console.log(clickedShipData.alphabet, clickedShipData.number)
          console.log(fieldEnemy.arrays);
          console.log('Invalid placement, reverting to original coordinates:',error );
          console.log(shipElements)
         

      
     

 
       selectedShipCells.forEach((ship) => {
          ship.classList.add('vibrate');
          setTimeout(() => {
            ship.classList.remove('vibrate');
          }, 5000);
        });
    


      setTimeout(() => {
          appendFieldsToEnemy();
        }, 1000);
          
        }
      }
    }
  }
};

  
cellElements.forEach((cellElement) => {
  cellElement.addEventListener('dragover', dragOverHandler);
  cellElement.addEventListener('drop', dropHandler);

  const shipElement = cellElement.closest('.ship2');
  if (shipElement) {
    cellElement.draggable = true;
    cellElement.addEventListener('dragstart', dragStartHandler);
    cellElement.addEventListener('dragend', dragEndHandler);
  }
});

const clickHandler = (event) => {
  console.log('Clicked on shipElement');

  
  
  const clickedCell = event.currentTarget;
  const clickedArray = clickedCell.dataset.array2;
  const clickedIndex = clickedCell.dataset.index2;
  console.log('Clicked Cell:', clickedCell);
  console.log('Clicked Array:', clickedArray);
  console.log('Clicked Index:', clickedIndex);

  // Find the ship name based on the clicked cell
  const clickedShipName = clickedCell.dataset.shipName;
  const clickedShipData = gameBoard.storedShips.find((shipData) => {
    return (
      shipData.player === fieldEnemy.name &&
      shipData.shipName.name === clickedShipName
    );
  });

  if (clickedShipData) {
    console.log('Clicked Ship Data:', clickedShipData);
    const { alphabet, number, shipName, orientation } = clickedShipData;
    const newOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

    // Empty the fieldPlayer.arrays object
    resetArrays(fieldEnemy)

    // Repost all ships from stored ships, excluding the clicked ship
    gameBoard.storedShips.forEach((storedShip) => {
      if (
        storedShip.player === fieldEnemy.name &&
        storedShip.shipName.name !== clickedShipName
      ) {
        const { alphabet, number, shipName, orientation } = storedShip;
        gameBoard.placingShips(
          fieldEnemy,
          alphabet,
          number,
          shipName,
          orientation
        );
      }
    });

    try {
      // Try placing the clicked ship with the new orientation
      gameBoard.placingShips(
        fieldEnemy,
        alphabet,
        number,
        shipName,
        newOrientation
      );
      clickedShipData.orientation = newOrientation;
      
      console.log('Clicked ship placed with new orientation:', clickedShipData);

      // Update the orientation in storedShips
      const storedShipIndex = gameBoard.storedShips.findIndex(
        (storedShip) =>
          storedShip.player === fieldEnemy.name &&
          storedShip.shipName.name === clickedShipName
      );
      if (storedShipIndex !== -1) {
        gameBoard.storedShips[storedShipIndex].orientation = newOrientation;
        console.log('Clicked ship orientation updated in storedShips:', gameBoard.storedShips[storedShipIndex]);
      }
      appendFieldsToEnemy();
    } catch (error) {
      // Invalid placement, revert to original orientation
      gameBoard.placingShips(
        fieldEnemy,
        alphabet,
        number,
        shipName,
        orientation
      );
       
      console.log('Invalid placement, reverting to original orientation:', error);
      const shipCells = document.querySelectorAll(`[data-ship-name2="${clickedShipName}"]`)
  
      shipCells.forEach((cell) => {
        cell.classList.add('vibrate');
        setTimeout(() => {
          cell.classList.remove('vibrate');
        }, 5000);
      });

          setTimeout(() => {
            appendFieldsToEnemy();
          }, 1000);
    }
  }
};
shipElements.forEach((shipElement) => {
    shipElement.addEventListener('dblclick', clickHandler);
  });

  startButton.addEventListener('click', () => {
    shipElements.forEach((shipElement) => {
    shipElement.removeEventListener('dblclick', clickHandler);
  });
  cellElements.forEach((cellElement) => {
  cellElement.removeEventListener('dragover', dragOverHandler);
  cellElement.removeEventListener('drop', dropHandler);

  const shipElement = cellElement.closest('.ship2');
  if (shipElement) {
    cellElement.draggable = false;
    cellElement.removeEventListener('dragstart', dragStartHandler);
    cellElement.removeEventListener('dragend', dragEndHandler);
  }
});
   
    
  });

};


  




  

 



 const generatePlacedShips = (player) => {
  
  const alphabet = 'abcdefghij';
  const numberRange = Array.from({ length: 10 }, (_, i) => i + 1);
  const orientations = ['vertical', 'horizontal'];

  const getRandomPosition = () => ({
    alphabet: alphabet[Math.floor(Math.random() * alphabet.length)],
    number: numberRange[Math.floor(Math.random() * numberRange.length)]
  });

  const getRandomOrientation = () =>
    orientations[Math.floor(Math.random() * orientations.length)];

   for (const shipName in player.ships) {
    const ship = player.ships[shipName];
    let placed = false;

  while (!placed) {
    const { alphabet, number } = getRandomPosition();
    const orientation = getRandomOrientation();
    
    

    try {
      

      gameBoard.placingShips(player, alphabet, number, ship, orientation);
      
      placed = true;
      const placedShip = {
          player: player.name,
          shipName: player.ships[shipName],
          alphabet,
          number,
          orientation
        };
        gameBoard.storedShips.push(placedShip);
        appendFieldsToPlayer()
        appendFieldsToEnemy()

    } catch (error) {
      // Invalid placement, try again
    }
  }
  
}

};

appendFieldsToPlayer()
appendFieldsToEnemy()
generatePlacedShips(fieldEnemy);
generatePlacedShips(fieldPlayer)
  
 












 
 

  
   return { appendFieldsToPlayer, appendFieldsToEnemy, fieldPlayer, fieldEnemy};
})();


module.exports = {
  domControl: domControl,

};
