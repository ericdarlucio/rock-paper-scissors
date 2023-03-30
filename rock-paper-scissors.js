let computerScore = 0;
let playerScore = 0;

const container = document.querySelector('.container');


const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

btn1.textContent = '✊';
btn2.textContent = '✋';
btn3.textContent = '✌️';

btn1.style.cssText = 'font-size: 60px'
btn2.style.cssText = 'font-size: 60px'
btn3.style.cssText = 'font-size: 60px'

container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);

const h1 = document.createElement('h1');
h1.style.cssText = 'font-size: 40px';
container.appendChild(h1);

btn1.addEventListener('click', () => {
  playClickSound();
  playRound(getComputerChoice(), 'Rock');
  evaluateScore();
});

btn2.addEventListener('click', () => {
  playClickSound();
  playRound(getComputerChoice(), 'Paper');
  evaluateScore();
});

btn3.addEventListener('click', () => {
  playClickSound();
  playRound(getComputerChoice(), 'Scissors');
  evaluateScore();
});

const getComputerChoice = () => {
  const computerChoice = (Math.floor(Math.random() * 3) + 1);
  if ( computerChoice === 1) {
    return 'Rock'
  } else if ( computerChoice === 2) { 
    return 'Paper'
  } else { 
    return 'Scissors'
  }
}

const playRound = (computerSelection, playerSelection) => {

  const para = document.createElement('p');
  container.appendChild(para);

  if ( computerSelection.toUpperCase() === playerSelection.toUpperCase() ) {
    para.textContent = `Tie! You both chose ${playerSelection}!`
  } else if ( (playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper') ) {
    playerScore += 1;
    para.textContent = `You win! ${playerSelection} beats ${computerSelection}!`
  } else {
    computerScore += 1;
    para.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`
  }
}

const evaluateScore = () => {
  if (playerScore === 5) {
    const winSound = new Audio('assets/sounds/gameoverwin.mp3');
    winSound.play();  
    setTimeout(function() {
      alert(`You won! Score: ${playerScore} - ${computerScore}`);
      location.reload();
    }, 50); // Delay the alert by 500 milliseconds (0.5 seconds)
  } else if (computerScore === 5) {
    const loseSound = new Audio('assets/sounds/gameoverlose.mp3');
    loseSound.play();
    setTimeout(function() {
      alert(`You lost! Score: ${playerScore} - ${computerScore}`);
      location.reload();
    }, 50); // Delay the alert by 500 milliseconds (0.5 seconds)
  } else {
    h1.textContent = `Player ${playerScore} - ${computerScore} Computer`;
  }
}

function playClickSound() {
  const clickSound = new Audio('assets/sounds/swoosh.mp3');
  clickSound.play();
}