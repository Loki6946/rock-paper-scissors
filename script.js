const playRoundButton = document.getElementById("play-round");
const playGameButton = document.getElementById("play-game");

const rules = {
  "rock": {
    "win": "scissors",
    "lose": "paper",
  },
  "paper": {
    "win": "rock",
    "lose": "scissors",
  },
  "scissors": {
    "win": "paper",
    "lose": "rock",
  },
}

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerChoice() {
  const playerChoice = prompt("Rock, Paper, Scissors choose").toLowerCase();
  switch(playerChoice) {
    case "rock":
    case "paper":
    case "scissors":
      return playerChoice;
    default:
      alert("invalid input");
      break;
  }
}

function playRound(playerChoice, computerChoice) {
  if (!playerChoice) {
    return;
  }
  console.log(playerChoice + " vs " + computerChoice);
  switch(computerChoice) {
    case rules[playerChoice].win:
      console.log("Player win");
      playerScore++;
      break;
    case rules[playerChoice].lose:
      console.log("Computer win");
      computerScore++;
      break;
    default:
      console.log("Draw");
      break;
  }
}

function playGame() { 
  playerScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
  }
  console.log("Player score: " + playerScore);
  console.log("Computer score: " + computerScore);
  console.log(playerScore > computerScore ? "Player win the game" : "Computer win the game");
}

playRoundButton.addEventListener("click", () => {
  playRound(getPlayerChoice(), getComputerChoice());
})

playGameButton.addEventListener("click", () => {
  playGame();
})