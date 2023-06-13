import "./style.css";
const { createShips, gameBoard } = require('./ships');
const {domControl, fieldEnemy, fieldPlayer} = require('./domControl')
const {gameRound} = require('./gameloop')
console.log("hey");
 const {PageLoad} = require('./pageLoad')

 















//  const container = document.querySelector('.container')
//  const contentContainer = document.querySelector('.contentContainer')
//  const header = document.querySelector('.header')
//  const inputPlayer1 = document.createElement('input');
// const inputPlayer2 = document.createElement('input');
//  let playervsPlayer = false
//  contentContainer.style.display = 'none'

 
 
// const childDiv2 = document.createElement('div');
// childDiv2.classList.add('child2');

// const startBattleShip = document.createElement('button')
// startBattleShip.classList.add('startBattleship')
// startBattleShip.textContent = 'Start Game'
// childDiv2.appendChild(startBattleShip)

// const logo = document.createElement('div')
// logo.classList.add('logo')
// header.appendChild(logo)


// container.appendChild(childDiv2);
// const playComputer = document.createElement('button')

// startBattleShip.addEventListener('click', () => {
//   // Remove the existing button
//   startBattleShip.remove();

//   // Create new buttons
//   const playPlayer = document.createElement('button');
//   ;

//   // Add classes to the new buttons
//   playPlayer.classList.add('startBattleship');
//   playComputer.classList.add('startBattleship');

//   // Set the text content of the buttons
//   playPlayer.textContent = 'Player vs Player';
//   playComputer.textContent = 'Player VS Computer';

//   // Append the new buttons to childDiv2
//   childDiv2.appendChild(playPlayer);
//   childDiv2.appendChild(playComputer);

//   playComputer.addEventListener('click', () => {
//  childDiv2.style.display = 'none'
//  contentContainer.style.display = 'grid'    
// });

// playPlayer.addEventListener('click', () => {
//    childDiv2.innerHTML = ''

    
//       inputPlayer1.type = 'text';
//       inputPlayer1.textContent = 'Player 1'
//       inputPlayer1.placeholder = 'Player 1 Name (3-15 characters)';
//       inputPlayer1.classList.add('inputField');

      
//       inputPlayer2.type = 'text';
//       inputPlayer2.textContent = 'Player 2'
//       inputPlayer2.placeholder = 'Player 2 Name (3-15 characters)';
//       inputPlayer2.classList.add('inputField');

//       const startButton = document.createElement('button');
//       startButton.textContent = 'Start Game';
//       startButton.classList.add('playersButton');

//       const form = document.createElement('div')
//       form.classList.add('form')
      
//       form.appendChild(inputPlayer1);
//       form.appendChild(inputPlayer2);
//       childDiv2.appendChild(form)
//       form.appendChild(startButton);

//        startButton.addEventListener('click', () => {
//  if (inputPlayer1.value.length < 3 || inputPlayer1.value.length > 15 || inputPlayer2.value.length < 3 || inputPlayer2.value.length > 15) {
//           const errorMessage = document.createElement('p');
//           errorMessage.textContent = 'Player names must be between 3 and 15 characters.';
//           errorMessage.classList.add('error');
//           form.appendChild(errorMessage);
//            startButton.style.pointerEvents = 'none';
//            startButton.style.backgroundColor = 'red';
//     setTimeout(() => {
//       startButton.style.backgroundColor = 'transparent';
     
//     }, 200);
          
//           setTimeout(() => {
//       errorMessage.remove();
//         startButton.style.pointerEvents = 'auto';
//     }, 5000);
//         } else {
//         childDiv2.style.display = 'none'
//  contentContainer.style.display = 'grid'  
//  playervsPlayer = true  
//         }
// });

// });
// });

//  console.log(fieldEnemy.arrays)
//  console.log(fieldPlayer.arrays)

// // module.exports = {
// //   playervsPlayer
// // };
