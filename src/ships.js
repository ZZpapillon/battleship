function createShips(length, hit, sunk) {
  return {
    length: length,
    hit: hit,
    sunk: sunk,
    value: 'ship',
    hitF: function() {
      return this.hit++
    },
    isSunk: function() {
           if (this.length === this.hit) {
        return  this.sunk = true;
           }
    }
  };
}
 




const gameBoard = {
  arrays: {},
  missedAttacks: [],
  
  players: {
    Player1: {
      name: "Player",
      turn: true,
      arrays: {},
      missedAttacks: [],
      // other player properties and methods
    },
    Player2: {
      name: "Computer",
      turn: false,
      arrays: {},
      missedAttacks: [],
      // other player properties and methods
    },
  },
  createFields(player) {
    for (let index = 0; index < 10; index++) {
      const arrayName = String.fromCharCode(97 + index);
      player.arrays[arrayName] = [];
      for (let number = 1; number < 11; number++) {
        player.arrays[arrayName].push('');
      }
    }
    return player.arrays;
  },
  shipMaker() {
    const carrier = new createShips(5, 0, false);
    const battleship = new createShips(4, 0, false);
    const battleship2 = new createShips(4, 0, false);
    const cruiser = new createShips(3, 0, false);
    const cruiser2 = new createShips(3, 0, false);
    const cruiser3 = new createShips(3, 0, false);
    const submarine = new createShips(2, 0, false);
    const submarine2 = new createShips(2, 0, false);
    const submarine3 = new createShips(2, 0, false);
    const submarine4 = new createShips(2, 0, false);
    const boat = new createShips(1, 0, false);
    const boat2 = new createShips(1, 0, false);
    const boat3 = new createShips(1, 0, false);
    const boat4 = new createShips(1, 0, false);
    
    return {
      carrier,
      battleship,
      battleship2,
      cruiser,
      cruiser2,
      cruiser3,
      submarine,
      submarine2,
      submarine3,
      submarine4,
      boat,
      boat2,
      boat3,
      boat4,
    };
  },
placingShips(player, alphabet, num, ship, orientation = 'vertical') {
  const targetArray = player.arrays[alphabet];
  const shipLength = ship.length;

  // Check if the placement is valid
  const isPlacementValid = (startIndex, endIndex, array) => {
    if (orientation === 'vertical') {
      for (let i = startIndex; i <= endIndex; i++) {
        if (array[i] !== '') {
          return false; // Overlapping ship found
        }
        
      }
    } else if (orientation === 'horizontal') {
      for (let i = startIndex; i <= endIndex; i++) {
        const alphabetIndex = String.fromCharCode(i + 97);
        if (player.arrays[alphabetIndex][num - 1] !== '') {
          return false; // Overlapping ship found
        }
      }
    }
    return true; // No overlapping ships found
  };

  if (orientation === 'vertical') {
    const startIndex = num - 1;
    const endIndex = num - 1 + shipLength - 1;

    if (!isPlacementValid(startIndex, endIndex, targetArray)) {
      throw new Error('Invalid ship placement');
    }

    for (let i = startIndex; i <= endIndex; i++) {
      targetArray[i] = ship;
    }
for (let i = startIndex - 1; i <= endIndex + 1; i++) {
  const alphabetIndex = String.fromCharCode(alphabet.charCodeAt(0) - 1);
  const neighborArray = player.arrays[alphabetIndex];
  if (neighborArray) {
    if (i >= 0 && i < neighborArray.length) {
      neighborArray[i] = null;
    }
  }
}
for (let i = startIndex - 1; i <= endIndex + 1; i++) {
  const alphabetIndex = String.fromCharCode(alphabet.charCodeAt(0) + 1);
  const neighborArray = player.arrays[alphabetIndex];
  if (neighborArray) {
    if (i >= 0 && i < neighborArray.length) {
      neighborArray[i] = null;
    }
  }
}
if (startIndex - 1 >= 0) {
  targetArray[startIndex - 1] = null;
}

if (endIndex + 1 < targetArray.length) {
  targetArray[endIndex + 1] = null;
}

  } else if (orientation === 'horizontal') {
    const startIndex = alphabet.charCodeAt(0) - 97;
    const endIndex = startIndex + shipLength - 1;

    if (!isPlacementValid(startIndex, endIndex, targetArray)) {
      throw new Error('Invalid ship placement');
    }

    for (let i = startIndex; i <= endIndex; i++) {
      const alphabetIndex = String.fromCharCode(i + 97);
      player.arrays[alphabetIndex][num - 1] = ship;
    }
  for (let i = startIndex; i <= endIndex; i++) {
  const alphabetIndex = String.fromCharCode(i + 97);
  
  if (player.arrays.hasOwnProperty(alphabetIndex)) {
    if (player.arrays[alphabetIndex].hasOwnProperty(num - 2)) {
      player.arrays[alphabetIndex][num - 2] = null;
    }
    
    if (player.arrays[alphabetIndex].hasOwnProperty(num)) {
      player.arrays[alphabetIndex][num] = null;
    }
  }
}

 
const alphabetIndexLeft = String.fromCharCode(startIndex - 1 + 97);
const alphabetIndexRight = String.fromCharCode(endIndex + 1 + 97);


  if (player.arrays.hasOwnProperty(alphabetIndexLeft)) {
     if (player.arrays[alphabetIndexLeft].hasOwnProperty(num - 2)) {
    player.arrays[alphabetIndexLeft][num - 2] = null;
  }
     player.arrays[alphabetIndexLeft][num - 1] = null;
    if (player.arrays[alphabetIndexLeft].hasOwnProperty(num)) {
    player.arrays[alphabetIndexLeft][num] = null;
  }
  }

  if (player.arrays.hasOwnProperty(alphabetIndexRight)) {
   if (player.arrays[alphabetIndexRight].hasOwnProperty(num - 2)) {
    player.arrays[alphabetIndexRight][num - 2] = null;
  }
    player.arrays[alphabetIndexRight][num - 1] = null;
   if (player.arrays[alphabetIndexRight].hasOwnProperty(num)) {
    player.arrays[alphabetIndexRight][num] = null;
  }
  }
  } else {
    throw new Error('Invalid orientation: choose either "vertical" or "horizontal"');
  }
}



,
  receiveAttack(player,alphabet,num) {
    const targetArray = player.arrays[alphabet];
     const element = targetArray[num - 1];

  if (typeof element === 'object' && element.hasOwnProperty('hitF')) {
    element.hitF();
    element.isSunk();
  } else {
    this.attackMissed(alphabet, num)
  }
},
          attackMissed(player,alphabet, num) {
               player.missedAttacks.push(`${alphabet},${num}`);

                          },
 areAllShipsSunk(player) {
  for (const key in player.arrays) {
    const array = player.arrays[key];
    for (const element of array) {
      if (typeof element === 'object' && element.hasOwnProperty('sunk') && !element.sunk) {
        return false;
      }
    }
  }
  return true;
},
 turnsForAttacks() {
    if(this.players.Player1.turn === true) {
        let alphabet, num;
    let isAlreadyAttacked = true;

    while (isAlreadyAttacked) {
      // Get user input for attack coordinates, e.g., from event listener
      // Set `alphabet` and `num` based on user input

      const targetArray = this.arrays[alphabet];
      const element = targetArray[num - 1];
      isAlreadyAttacked = typeof element === 'object' && element.hasOwnProperty('hit');
    }
        
        this.receiveAttack(alphabet, num)
        this.players.Player1.turn = false
        this.players.Player2.turn = true
    }
    if (this.players.Player2.turn === true) {
    // Player 2's turn
    let randomAlph, randomNumber;
    let isAlreadyAttacked = true;

    while (isAlreadyAttacked) {
      const randomValues = this.generateRandom();
      randomAlph = randomValues.char;
      randomNumber = randomValues.number;

      const targetArray = this.arrays[randomAlph];
      const element = targetArray[randomNumber - 1];
      isAlreadyAttacked = typeof element === 'object' && element.hasOwnProperty('hit');
    }

    this.receiveAttack(randomAlph, randomNumber);
    this.players.Player2.turn = false;
    this.players.Player1.turn = true;
    }
    
 },
 generateRandom() {
  const alphabet = 'abcdefghij';
  const randomAlph = alphabet[Math.floor(Math.random() * alphabet.length)];
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return { char: randomAlph, number: randomNumber };
}

};

module.exports = {
  createShips: createShips,
  gameBoard: gameBoard,
};