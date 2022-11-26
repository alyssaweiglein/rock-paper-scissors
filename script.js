// rock beats scissors
// paper beats rock
// scissors beats paper

const playerSelection = 'ROCK';
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundNumber = 1;

// computer random choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch(randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}

// persons choice
function getPlayerChoice() {
}

// play 5 rounds
function playGame() {
  for (let i =0; i < 5; i++) {
    playRound(playerSelection, getComputerChoice());
  }
  console.log('player: ' + playerScore + "; computer: " + computerScore + "; tie: " + tieScore)
}

// pick winner for each round, add to total score
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('round# ' + roundNumber + '/5: its a tie')
    tieScore++
  }

  if (computerSelection === 'PAPER') {
    console.log('round# ' + roundNumber + '/5: you lose')
    computerScore++
  }

  if (computerSelection === 'SCISSORS') {
    console.log('round# ' + roundNumber + '/5: you win')
    playerScore++
  }
  roundNumber++
}

// game ends when score reaches 5
function checkForWinner() {
}

// clear score, restart game
function restartGame() {
}

playGame(playerSelection, computerSelection);
