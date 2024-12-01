const playGameButton = document.querySelector("#play-game");
const button = document.querySelectorAll("#button");
const gameHistory = document.querySelector("#game-history");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

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

function playRound(playerChoice, computerChoice) {
  const faceOff = document.createElement("p");
  const whoWins = document.createElement("p");
  const winner = document.createElement("p");
  const gameContainer = document.createElement("div");

  gameContainer.classList.add("card__game");
  winner.classList.add("card__winner");

  switch(computerChoice) {
    case rules[playerChoice].win:
      faceOff.textContent = `${playerChoice} vs ${computerChoice}`;
      whoWins.textContent = "player win";
      playerScore++;
      break;
    case rules[playerChoice].lose:
      faceOff.textContent = `${playerChoice} vs ${computerChoice}`;
      whoWins.textContent = "computer win";
      computerScore++;
      break;
    default:
      faceOff.textContent = `${playerChoice} vs ${computerChoice}`;
      whoWins.textContent = "draw";
      break;
  }

  gameContainer.appendChild(faceOff);
  gameContainer.appendChild(whoWins);
  gameHistory.prepend(gameContainer);
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;

  if (playerScore == 5) {
    gameHistory.textContent = "";
    winner.textContent = "Player win the game";
    gameHistory.appendChild(winner);
    button.forEach((btn) => { btn.classList.add("hide") });
    playGameButton.classList.remove("hide")
  } else if (computerScore == 5) {
    gameHistory.textContent = "";
    winner.textContent = "Computer win the game";
    gameHistory.appendChild(winner);
    button.forEach((btn) => { btn.classList.add("hide") });
    playGameButton.classList.remove("hide")
  }
}

playGameButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  gameHistory.textContent = "";
  playGameButton.classList.add("hide");
  button.forEach((btn) => { btn.classList.remove("hide") });
})

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const playerChoice = e.target.textContent.toLowerCase();
    playRound(playerChoice, getComputerChoice());
  })
})