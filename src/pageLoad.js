// const {domControl, startButton} = require('./domControl');

const { startButton, gameBoard} = require('./ships');

const inputPlayer1 = document.createElement('input');
const inputPlayer2 = document.createElement('input');
let playervsPlayer = 0

const PageLoad = (() => {
const container = document.querySelector('.container')
 const contentContainer = document.querySelector('.contentContainer')
 const header = document.querySelector('.header')
 
const playersBox = document.querySelector('.playersBox')
const enemysBox = document.querySelector('.enemysBox')
 contentContainer.style.display = 'none'

 const playButton = document.getElementById('playButton');
const audio = new Audio('./Icons/music.mp3');
let isMuted = false;
// document.addEventListener('DOMContentLoaded', () => {
//   // Play the audio from the beginning
  
//     audio.play();
 
//   });


playButton.addEventListener('click', () => {
  if (isMuted) {
    // Unmute and change the button image to play icon
    audio.muted = false;
    playButton.style.backgroundImage = 'url("Icons/play.png")';
  } else {
    // Mute and change the button image to mute icon
    audio.muted = true;
    playButton.style.backgroundImage = 'url("Icons/mute.png")';
  }
  
  isMuted = !isMuted; // Toggle the mute state
  
  // Restart the audio from the beginning
  audio.currentTime = 0;
  audio.play();
});
 const friendlyWaters = document.createElement('div');
  friendlyWaters.classList.add('friendly-waters');

   const friendlyWatersText = document.createElement('div')
  friendlyWatersText.classList.add('watersText')
  friendlyWatersText.textContent = 'YOUR WATERS:';

  const enemyWaters = document.createElement('div');
  enemyWaters.classList.add('enemy-waters');
  enemyWaters.style.display = 'none'
  
  const enemyWatersText = document.createElement('div')
  enemyWatersText.classList.add('watersTextEnemy')
  enemyWatersText.textContent = 'ENEMY WATERS:';
  
 
enemyWaters.appendChild(enemyWatersText)
 friendlyWaters.appendChild(friendlyWatersText)
  contentContainer.appendChild(friendlyWaters);
  contentContainer.appendChild(enemyWaters)


 
const childDiv2 = document.createElement('div');
childDiv2.classList.add('child2');

const startBattleShip = document.createElement('button')
startBattleShip.classList.add('startBattleship')
startBattleShip.textContent = 'Start Game'
childDiv2.appendChild(startBattleShip)

const logo = document.createElement('div')
logo.classList.add('logo')
header.appendChild(logo)


container.appendChild(childDiv2);
const playComputer = document.createElement('button')

startBattleShip.addEventListener('click', () => {
  // Remove the existing button
  startBattleShip.remove();

  // Create new buttons
  const playPlayer = document.createElement('button');
  ;

  // Add classes to the new buttons
  playPlayer.classList.add('startBattleship');
  playComputer.classList.add('startBattleship');

  // Set the text content of the buttons
  playPlayer.textContent = 'Player vs Player';
  playComputer.textContent = 'Player VS Computer';

  // Append the new buttons to childDiv2
  childDiv2.appendChild(playPlayer);
  childDiv2.appendChild(playComputer);
  
 function applyResponsiveStyles() {
  if (window.innerWidth < 768) {
    childDiv2.style.gridTemplateRows = '1fr 1fr';
  } else {
    childDiv2.style.gridTemplateColumns = '1fr 1fr';
  }
} 
applyResponsiveStyles();
  playComputer.addEventListener('click', () => {
  childDiv2.style.display = 'none';
  contentContainer.style.display = 'grid';

  
  startButton.addEventListener('click', () => {
      enemyWaters.style.display = 'inline'
      friendlyWaters.style.placeSelf = 'center'
      enemyWaters.style.placeSelf = 'center'
      friendlyWaters.style.marginRight = '-5%'
      enemyWaters.style.marginLeft = '-18%'
      })
});


playPlayer.addEventListener('click', () => {
   childDiv2.innerHTML = ''
   
  
    
      inputPlayer1.type = 'text';
      inputPlayer1.textContent = 'Player 1'
      inputPlayer1.placeholder = 'Player 1 Name (3-15 characters)';
      inputPlayer1.classList.add('inputField');

      
      inputPlayer2.type = 'text';
      inputPlayer2.textContent = 'Player 2'
      inputPlayer2.placeholder = 'Player 2 Name (3-15 characters)';
      inputPlayer2.classList.add('inputField');

      const startPvP = document.createElement('button');
      startPvP.textContent = 'Start Game';
      startPvP.classList.add('playersButton');

      const form = document.createElement('div')
      form.classList.add('form')
      
      form.appendChild(inputPlayer1);
      form.appendChild(inputPlayer2);
      childDiv2.appendChild(form)
      form.appendChild(startPvP);
      
       if (window.innerWidth < 768) {
    form.style.marginTop = '20vh'
   } else {
    childDiv2.style.gridTemplateColumns = '1fr';
    
  }

       startPvP.addEventListener('click', () => {
 if (inputPlayer1.value.length < 3 || inputPlayer1.value.length > 15 || inputPlayer2.value.length < 3 || inputPlayer2.value.length > 15) {
          const errorMessage = document.createElement('div');
          errorMessage.textContent = 'Player names must be between 3 and 15 characters.';
          errorMessage.classList.add('error');
          form.appendChild(errorMessage);
           startPvP.style.pointerEvents = 'none';
           startPvP.style.backgroundColor = 'red';
    setTimeout(() => {
      startPvP.style.backgroundColor = 'transparent';
     
    }, 200);
          
          setTimeout(() => {
      errorMessage.remove();
        startPvP.style.pointerEvents = 'auto';
    }, 5000);
        } else {
        childDiv2.style.display = 'none';
        contentContainer.style.display = 'grid'  
        
        startButton.style.display = 'none'
        
        gameBoard.gameModePvp = 'true' 
         
    
    const readyPlayer1Button = document.createElement('button');
    readyPlayer1Button.classList.add('start-button');
    readyPlayer1Button.textContent = `READY!`;
 
    friendlyWatersText.textContent = `${inputPlayer1.value.toUpperCase()} WATERS:`
    
    contentContainer.appendChild(readyPlayer1Button);
    

     readyPlayer1Button.addEventListener('click', () => {
        
         contentContainer.classList.add('layoutEnemy')

        playersBox.style.display = 'none'
        friendlyWaters.style.display = 'none'
        readyPlayer1Button.style.display = 'none'

        enemyWatersText.textContent = `${inputPlayer2.value.toUpperCase()} Waters:`
        
      
        
       
        startButton.style.display = 'inline'
        enemyWaters.style.display = 'inline'
        enemysBox.style.display = 'grid'
       

      startButton.addEventListener('click', () => {
    contentContainer.classList.remove('layoutEnemy')
     playersBox.style.display = 'grid'
     friendlyWaters.style.display = 'inline'
      
      
      friendlyWaters.style.placeSelf = 'center'
      enemyWaters.style.placeSelf = 'center'
      friendlyWaters.style.marginRight = '-5%'
      enemyWaters.style.marginLeft = '-18%'
     
      })
     })

        }
});


});
});




})();
module.exports = {
  PageLoad,
  inputPlayer1,
  inputPlayer2
};




















