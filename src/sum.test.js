const sum = require('./sum');
const { createShips, gameBoard } = require('./ships');


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});



test('increment hit property when hitF is called', () => {
  // Create a ship with initial hit value of 0
  const ship = createShips(5, 0, false);

  // Call the hitF function
  ship.hitF();

  // Check if the hit property has been incremented by 1
  expect(ship.hit).toBe(1);
});

test('increment hit property when hitF is called', () => {
  // Create a ship with initial hit value of 0
  const ship = createShips(5, 0, false);

  // Call the hitF function
  ship.hitF();
  ship.hitF();
  ship.hitF();
  ship.hitF();
  ship.hitF();
  ship.isSunk()

  // Check if the hit property has been incremented by 1
  expect(ship.sunk).toBe(true);
});

test('returns the correct game board fields', () => {
  // Create an empty object to serve as the arrays parameter
  

  // Call the createFields method to generate the game board
  const result = gameBoard.createFields();

  // Check the values of specific fields
  expect(result.a).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(result.b).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // ...
  expect(result.h).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('modifies the arrays parameter correctly', () => {
  // Create an empty object to serve as the arrays parameter
  

  // Call the createFields method to generate the game board
  const result = gameBoard.createFields();

  // Check if the arrays parameter has been modified correctly
  expect(gameBoard.arrays).toEqual({
    a: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    b: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      c: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        d: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          e: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            f: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              g: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    
    h: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    i: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    j: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  });
});

test('placing ships into arrays', () => {
  // Create a ship with initial hit value of 0
  const ships = gameBoard.shipMaker();
  const arrays = gameBoard.createFields()
  gameBoard.placingShips('a', 1, ships.boat)

  // Call the hitF function
  

  // Check if the hit property has been incremented by 1
  expect(arrays.a).toEqual([ships.boat, 2, 3, 4, 5, 6, 7, 8, 9, 10])
});

test('pushed ship', () => {
  // Create a ship with initial hit value of 0
  const ships = gameBoard.shipMaker();
  const arrays = gameBoard.createFields()
  gameBoard.placingShips('a', 1, ships.carrier)

  // Call the hitF function
  

  // Check if the hit property has been incremented by 1
  expect(arrays.a).toEqual([ships.carrier, ships.carrier, ships.carrier, ships.carrier, ships.carrier, 6, 7, 8, 9, 10])
});

test('checking if revieve attack,missed attack works', () => {
  // Create a ship with initial hit value of 0
  const ships = gameBoard.shipMaker();
  const arrays = gameBoard.createFields()
  gameBoard.placingShips('a', 1, ships.carrier)
  

  // Call the hitF function
  

  // Check if the hit property has been incremented by 1
  expect(arrays.a).toEqual([ships.carrier, ships.carrier, ships.carrier, ships.carrier, ships.carrier, 6, 7, 8, 9, 10])

  gameBoard.receiveAttack('a', 1)
  gameBoard.receiveAttack('a', 2)
   gameBoard.receiveAttack('a', 6)
  
  expect(ships.carrier.hit).toEqual(2)
  expect(gameBoard.missedAttacks).toContain('a,6')
});

test('checking if all ships have been sunk', () => {
  // Create a ship with initial hit value of 0
  const ships = gameBoard.shipMaker();
  const arrays = gameBoard.createFields()
  gameBoard.placingShips('a', 1, ships.carrier)
  

  // Call the hitF function
  

  // Check if the hit property has been incremented by 1
  expect(arrays.a).toEqual([ships.carrier, ships.carrier, ships.carrier, ships.carrier, ships.carrier, 6, 7, 8, 9, 10])

  gameBoard.receiveAttack('a', 1)
  gameBoard.receiveAttack('a', 2)
  gameBoard.receiveAttack('a', 3)
  gameBoard.receiveAttack('a', 4)
  
   gameBoard.receiveAttack('a', 6)
  
  expect(ships.carrier.hit).toEqual(4)
  expect(gameBoard.missedAttacks).toContain('a,6')
  expect(gameBoard.areAllShipsSunk(gameBoard)).toBeFalsy()
});

test('creating players and checking their properties', () => {
  // Create the players
  const player1 = gameBoard.players.Player1;
  const player2 = gameBoard.players.Player2;

  // Check the properties of player1
  expect(player1.name).toEqual('Player');
  expect(player1.turn).toBe(true);

  // Check the properties of player2
  expect(player2.name).toEqual('Computer');
  expect(player2.turn).toBe(false);
});

