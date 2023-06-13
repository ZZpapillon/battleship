const { createShips, gameBoard } = require('./ships');
const {inputPlayer1, inputPlayer2} = require('./pageLoad')

// const { domControl, appendFieldsToPlayer, fieldPlayer, fieldEnemy } = require('./domControl');
let currentArray, currentIndex;
let direction;
let shipHit = false;
let directionHit;
let gameFinished = false;
let hitArray;
let hitIndex;
let currentPlayer = 1;
let playerWon
function showWinner() {
  if (!gameBoard.gameModePvp) {
  const container = document.querySelector('.container')
  container.style.opacity = 0.35
  const winner = document.createElement('div')
  document.body.appendChild(winner)
  winner.classList.add('winner')
  if(playerWon) {
  winner.textContent = 'You won!'
} else {
  winner.textContent = 'Computer won!'
}
} else {
  const container = document.querySelector('.container')
  container.style.opacity = 0.35
  const winner = document.createElement('div')
  document.body.appendChild(winner)
  winner.classList.add('winner')
  if(playerWon) {
  winner.textContent = `${inputPlayer1.value}  won!`
} else {
  winner.textContent = `${inputPlayer2.value}  won!`
}
}
}

function startGame(fieldEnemy, fieldPlayer) {
 
  const cellElements = document.querySelectorAll('.cell')
  const cellElements2 = document.querySelectorAll('.cell2');

  
  if (gameBoard.gameModePvp) {
  // Define your variables and game logic




function handleClick(event) {
  if (gameFinished) {
    return; // Ignore clicks if the game is finished
  }

  const cellElement = event.target;
  console.log('cliecked again')
  if (cellElement.classList.contains('clicked')) {
    return; // Ignore if the cell has already been clicked
  }
  if (currentPlayer === 1) {
    if (!cellElement.classList.contains('cell2')) {
      return; // Ignore if it's not Player 1's turn or not clicking on fieldEnemy
    }
  }
  if (currentPlayer === 2) {
    if (!cellElement.classList.contains('cell')) {
      return; // Ignore if it's not Player 1's turn or not clicking on fieldEnemy
    }
  }
   
  
  let clickedArray
  let  clickedIndex
if (currentPlayer === 1) {
   clickedArray = cellElement.getAttribute('data-array2');
   clickedIndex = parseInt(cellElement.getAttribute('data-index2'), 10);
} else {
   clickedArray = cellElement.getAttribute('data-array');
   clickedIndex = parseInt(cellElement.getAttribute('data-index'), 10);
   console.log('clicked')
}
  if (cellElement.classList.contains('cell2')) {
    // Player 1's turn
    if (currentPlayer === 1) {
      if (cellElement.classList.contains('ship2')) {
        cellElement.style.backgroundColor = 'red';
        gameBoard.receiveAttack(fieldEnemy, clickedArray, clickedIndex);
         const shipName = cellElement.getAttribute('data-ship-name');
      const ship = fieldEnemy.ships[shipName];

    if (ship.isSunk()) {
  
  
  const sunkShipNulls = fieldEnemy.shipNullCells[shipName];
  
  if (sunkShipNulls) {
    for (const coordinate of sunkShipNulls) {
      const { alphabet, num } = coordinate;
      const cell = document.querySelector(`[data-array2="${alphabet}"][data-index2="${num }"]`);
      
      if (cell) {
        if (cell.style.backgroundColor !== 'gray') {
        cell.style.backgroundColor = 'green';
       
        }
        cell.classList.add('clicked');
        
      }
    }
  }
}
        // Check if the ship is sunk and other game conditions
        // Rest of the code...
      } else {
        cellElement.style.backgroundColor = 'gray';
        gameBoard.receiveAttack(fieldEnemy, clickedArray, clickedIndex);
      }
      currentPlayer = 2; // Switch to Player 2's turn

      // Check if the game is finished
      if (gameBoard.areAllShipsSunk(fieldEnemy)) {
        playerWon = true       
        endGame();
      }
    }
  } else {
    // Player 2's turn
    if (currentPlayer === 2) {
      if (cellElement.classList.contains('ship')) {
        cellElement.style.backgroundColor = 'red';
        gameBoard.receiveAttack(fieldPlayer, clickedArray, clickedIndex);
         const shipName = cellElement.getAttribute('data-ship-name');
      const ship = fieldPlayer.ships[shipName];

    if (ship.isSunk()) {
  
  
  const sunkShipNulls = fieldPlayer.shipNullCells[shipName];
  
  if (sunkShipNulls) {
    for (const coordinate of sunkShipNulls) {
      const { alphabet, num } = coordinate;
      const cell = document.querySelector(`[data-array="${alphabet}"][data-index="${num }"]`);
      
      if (cell) {
        if (cell.style.backgroundColor !== 'gray') {
        cell.style.backgroundColor = 'green';
       
        }
        cell.classList.add('clicked');
        
      }
    }
  }
}
        // Check if the ship is sunk and other game conditions
        // Rest of the code...
      } else {
        cellElement.style.backgroundColor = 'gray';
        gameBoard.receiveAttack(fieldPlayer, clickedArray, clickedIndex);
      }
      currentPlayer = 1; // Switch to Player 1's turn

      // Check if the game is finished
      if (gameBoard.areAllShipsSunk(fieldPlayer)) {
        playerWon = false
        endGame();
      }
    }
  }

  cellElement.classList.add('clicked');
}

function endGame() {
  
  gameFinished = true;
  
  cellElements.forEach((cellElement) => {
    cellElement.removeEventListener('click', handleClick);
  });
  cellElements2.forEach((cellElement) => {
    cellElement.removeEventListener('click', handleClick);
  });
   showWinner()
  // Perform necessary actions to end the game
}


  cellElements2.forEach((cellElement) => {
  cellElement.addEventListener('click', handleClick);
  console.log('alls')
  });
  cellElements.forEach((cellElement) => {
  cellElement.addEventListener('click', handleClick);
  console.log('yess')
  });
  } 
  else {
 // Define your variables and game logic
 
function handleClick(event) {
    if (gameFinished) {
      console.log('yeah')
      return; // Ignore clicks if the game is finished
      
    }

    const cellElement2 = event.target;
    
   

    if (cellElement2.classList.contains('clicked')) {
      return; // Ignore if the cell has already been clicked
    }
 console.log(gameBoard.areAllShipsSunk(fieldEnemy))
    cellElement2.classList.add('clicked');
    const clickedArray = cellElement2.getAttribute('data-array2');
    const clickedIndex = parseInt(cellElement2.getAttribute('data-index2'), 10);

    if (cellElement2.classList.contains('ship2')) {
      cellElement2.style.backgroundColor = 'red';
      gameBoard.receiveAttack(fieldEnemy, clickedArray, clickedIndex);
      const shipName = cellElement2.getAttribute('data-ship-name');
      const ship = fieldEnemy.ships[shipName];

    if (ship.isSunk()) {
  
  
  const sunkShipNulls = fieldEnemy.shipNullCells[shipName];
  
  if (sunkShipNulls) {
    for (const coordinate of sunkShipNulls) {
      const { alphabet, num } = coordinate;
      const cell = document.querySelector(`[data-array2="${alphabet}"][data-index2="${num }"]`);
      
      if (cell) {
        if (cell.style.backgroundColor !== 'gray') {
        cell.style.backgroundColor = 'green';
       
        }
        cell.classList.add('clicked');
        
      }
    }
  }
}



      if (gameBoard.areAllShipsSunk(fieldEnemy)) {
        playerWon = true
        endGame();
        
        return
      } else {
        computerMoves();
      }
    } else {
      cellElement2.style.backgroundColor = 'gray';
      gameBoard.receiveAttack(fieldEnemy, clickedArray, clickedIndex);
      computerMoves();
    }
  }
  

function computerMoves() {
  let validMove = false;

  while (!validMove) {
    if (!currentArray || !currentIndex || !shipHit) {
      const randomValues = gameBoard.generateRandom();
      currentArray = randomValues.char;
      currentIndex = randomValues.number;
      hitArray = null;
      hitIndex = null;
      direction = null;
      directionHit = null;
      shipHit = false;
    } else {
      currentArray = getNextArray(currentArray, direction);
      currentIndex = getNextIndex(currentIndex, direction);
    }

    if (
      isWithinBoundaries(currentArray, currentIndex) &&
      !isCellClicked(currentArray, currentIndex)
    ) {
      validMove = true;
      const currentCell = document.querySelector(
        `[data-array="${currentArray}"][data-index="${currentIndex}"]`
      );
      currentCell.classList.add('clicked');

      if (currentCell.classList.contains('ship')) {
        currentCell.style.backgroundColor = 'red';
        gameBoard.receiveAttack(fieldPlayer, currentArray, currentIndex);
        computerShipHit(currentCell);
        shipHit = true;

        if (gameBoard.areAllShipsSunk(fieldPlayer)) {
          playerWon = false
          endGame();
        }

        const shipName = currentCell.getAttribute('data-ship-name');
        const ship = fieldPlayer.ships[shipName];

        if (ship.isSunk()) {
          currentArray = null;
          currentIndex = null;
          shipHit = false;
          hitArray = null;
          hitIndex = null;
          direction = null;
          directionHit = null;
        } else {
          if (!hitArray && !hitIndex) {
            hitArray = currentArray;
            hitIndex = currentIndex;
            direction = getRandomDirection();
            directionHit = direction;
          }
        }
      } else {
        currentCell.style.backgroundColor = 'gray';
        gameBoard.receiveAttack(fieldPlayer, currentArray, currentIndex);

       if (shipHit) {
          const oppositeDirection = getOppositeDirection(directionHit);
          currentArray = hitArray;
          currentIndex = hitIndex;

          if (
            !isWithinBoundaries(currentArray, currentIndex) ||
            isCellClicked(currentArray, currentIndex) ||
            !currentCell.classList.contains('ship')
          ) {
            // Ship was not hit in the current direction, backtrack to the first hit
            currentArray = hitArray;
            currentIndex = hitIndex;

            if (directionHit === 'right' || directionHit === 'left') {
              // Switch to the opposite direction
              direction = oppositeDirection;
              directionHit = direction;
            } else if (directionHit === 'up' || directionHit === 'down') {
              // Switch to the opposite direction
              direction = oppositeDirection;
              directionHit = direction;
            }
          } else {
            // Update directionHit
            direction = directionHit;
          }
        } else {
          direction = getRandomDirection();
        }
      }
    } else {
      direction = getRandomDirection();
    }
  }
}




function getRandomDirection() {
  const directions = ['up', 'right', 'down', 'left'];
  return directions[Math.floor(Math.random() * directions.length)];
}
function getOppositeDirection(direction) {
  const oppositeDirections = {
    up: 'down',
    right: 'left',
    down: 'up',
    left: 'right'
  };
  return oppositeDirections[direction];
}
function getNextDirection(triedDirections) {
  const remainingDirections = ['up', 'right', 'down', 'left'].filter(
    (direction) => !triedDirections.includes(direction)
  );
  return remainingDirections[Math.floor(Math.random() * remainingDirections.length)];
}


function getNextArray(currentArray, direction) {
  if (direction === 'up' || direction === 'down') {
    return currentArray;
  } else if (direction === 'right') {
    return String.fromCharCode(currentArray.charCodeAt(0) + 1);
  } else if (direction === 'left') {
    return String.fromCharCode(currentArray.charCodeAt(0) - 1);
  }
}

function getNextIndex(currentIndex, direction) {
  if (direction === 'up') {
    return currentIndex - 1;
  } else if (direction === 'right' || direction === 'left') {
    return currentIndex;
  } else if (direction === 'down') {
    return currentIndex + 1;
  }
}

function isWithinBoundaries(array, index) {
  return array >= 'a' && array <= 'j' && index >= 1 && index <= 10;
}

function isCellClicked(array, index) {
  
  const currentCell = document.querySelector(
    `[data-array="${array}"][data-index="${index}"]`
  );
  return currentCell.classList.contains('clicked');
}

function computerShipHit(randomCell) {
  const shipName = randomCell.getAttribute('data-ship-name');
  const ship = fieldPlayer.ships[shipName];

  if (ship.isSunk()) {
    

    const sunkShipNulls = fieldPlayer.shipNullCells[shipName];

    if (sunkShipNulls) {
      for (const coordinate of sunkShipNulls) {
        const { alphabet, num } = coordinate;
        const cell = document.querySelector(
          `[data-array="${alphabet}"][data-index="${num}"]`
        );

        if (cell) {
          if (cell.style.backgroundColor !== 'gray') {
            cell.style.backgroundColor = 'green';
            cell.classList.add('clicked');
          }
        }
      }
    }
  }
}


 

  function endGame() {
    gameFinished = true;
    cellElements2.forEach((cellElement2) => {
      cellElement2.removeEventListener('click', handleClick);
    });
    // Perform necessary actions to end the game
    showWinner()
  }
 
  // Add click event listeners
  cellElements2.forEach((cellElement2) => {
    cellElement2.addEventListener('click', handleClick);
    console.log('clicked')
  });
  



  }
  
}

module.exports = {
  startGame: startGame
};
