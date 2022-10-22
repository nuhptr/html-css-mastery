const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

/* 
Storing function in variable
const start = function () {
  console.log("Game is starting!");
}; 
*/

/* 
console.dir(start);  Functions are objects
constructor : ƒ startGame()
[[Prototype]] : Object 
*/

// TODO: Player choice
const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`invalid choice! We choose ${ROCK} for you!`);
    return;
  }
  return selection;
};

// TODO: Computer choice
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue <= 0.34) {
    return ROCK;
  } else if (randomValue <= 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// TODO: Get Winner
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice == SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", function () {
  // Annonymous function
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;

  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  } and computer picked ${computerChoice}.`;
  if (winner === RESULT_DRAW) {
    message = message + " Had a draw";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + " You Won.";
  } else {
    message = message + " You Lost.";
  }
  alert(message);

  gameIsRunning = false;
});
