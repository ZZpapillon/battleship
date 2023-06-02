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
      // other player properties and methods
    },
    Player2: {
      name: "Computer",
      turn: false,
      // other player properties and methods
    },
  },
  createFields() {
    for (let index = 0; index < 10; index++) {
      const arrayName = String.fromCharCode(97 + index);
      this.arrays[arrayName] = [];
      for (let number = 1; number < 11; number++) {
        this.arrays[arrayName].push(number);
      }
    }
    return this.arrays;
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
   placingShips(alphabet, num, ship) {
   const targetArray = this.arrays[alphabet];
    const shipLength = ship.length;
    
    

    for (let i = 0; i < shipLength; i++) {
      targetArray[num - 1 + i] = ship
    }

  },
  receiveAttack(alphabet,num) {
    const targetArray = this.arrays[alphabet];
     const element = targetArray[num - 1];

  if (typeof element === 'object' && element.hasOwnProperty('hitF')) {
    element.hitF();
    element.isSunk();
  } else {
    this.attackMissed(alphabet, num)
  }
},
          attackMissed(alphabet, num) {
               this.missedAttacks.push(`${alphabet},${num}`);

                          },
 areAllShipsSunk() {
  for (const key in this.arrays) {
    const array = this.arrays[key];
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