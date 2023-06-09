import "./style.css";
const { createShips, gameBoard } = require('./ships');
const {domControl} = require('./domControl')
const {gameRound} = require('./gameloop')
console.log("hey");

 const container = document.querySelector('.container')
 container.style.display = 'none'

 const fakeContainer = document.createElement('div')
 fakeContainer.classList.add('fakecontainer')

 const childDiv1 = document.createElement('div');
childDiv1.classList.add('child1');


const childDiv2 = document.createElement('div');
childDiv2.classList.add('child2');

const startBattleShip = document.createElement('button')
startBattleShip.classList.add('startBattleship')
startBattleShip.textContent = 'Start Game'
childDiv2.appendChild(startBattleShip)


fakeContainer.appendChild(childDiv1);
fakeContainer.appendChild(childDiv2);
document.body.appendChild(fakeContainer)