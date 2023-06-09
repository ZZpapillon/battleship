const { createShips, gameBoard } = require('./ships');
const { domControl, appendFieldsToPlayer, fieldPlayer, fieldEnemy } = require('./domControl');

function startGame(fieldEnemy, fieldPlayer) {
  let gameFinished = false;
  const cellElements = document.querySelectorAll('.cell');

  function handleClick(event) {
    if (gameFinished) {
      return; // Ignore clicks if the game is finished
    }

    const cellElement = event.target;

    if (cellElement.classList.contains('clicked')) {
      return; // Ignore if the cell has already been clicked
    }

    cellElement.classList.add('clicked');
    const clickedArray = cellElement.getAttribute('data-array');
    const clickedIndex = parseInt(cellElement.getAttribute('data-index'), 10);

    if (cellElement.classList.contains('ship')) {
      cellElement.style.backgroundColor = 'red';
      gameBoard.receiveAttack(fieldPlayer, clickedArray, clickedIndex);
      const shipName = cellElement.getAttribute('data-ship-name');
      const ship = fieldPlayer.ships[shipName];

    if (ship.isSunk()) {
  console.log(shipName + ' is sunk!');
  
  const sunkShipNulls = fieldPlayer.shipNullCells[shipName];
  
  if (sunkShipNulls) {
    for (const coordinate of sunkShipNulls) {
      const { alphabet, num } = coordinate;
      const cell = document.querySelector(`[data-array="${alphabet}"][data-index="${num }"]`);
      
      if (cell) {
        if (cell.style.backgroundColor !== 'gray') {
        cell.style.backgroundColor = 'green';
        
        }
        // cell.classList.remove('ship');
        cell.removeEventListener('click', handleClick);
      }
    }
  }
}



      if (gameBoard.areAllShipsSunk(fieldPlayer)) {
        endGame();
      } else {
        computerMoves();
      }
    } else {
      cellElement.style.backgroundColor = 'gray';
      gameBoard.receiveAttack(fieldPlayer, clickedArray, clickedIndex);
      computerMoves();
    }
  }

  function computerMoves() {
    const cellElements2 = document.querySelectorAll('.cell2');
    let randomArray, randomIndex;
    let validMove = false;

    while (!validMove) {
      const randomValues = gameBoard.generateRandom();
      randomArray = randomValues.char;
      randomIndex = randomValues.number;

      const randomCell = document.querySelector(
        `[data-array2="${randomArray}"][data-index2="${randomIndex}"]`
      );

      if (!randomCell.classList.contains('clicked')) {
        validMove = true;
        randomCell.classList.add('clicked');

        if (randomCell.classList.contains('ship2')) {
          randomCell.style.backgroundColor = 'red';
        } else {
          randomCell.style.backgroundColor = 'gray';
        }

        gameBoard.receiveAttack(fieldEnemy, randomArray, randomIndex);
        if (gameBoard.areAllShipsSunk(fieldEnemy)) {
          endGame();
        }
      }
    }
  }

  function endGame() {
    gameFinished = true;
    cellElements.forEach((cellElement) => {
      cellElement.removeEventListener('click', handleClick);
    });
    // Perform necessary actions to end the game
  }

  // Add click event listeners
  cellElements.forEach((cellElement) => {
    cellElement.addEventListener('click', handleClick);
  });
}

module.exports = {
  startGame: startGame
};
