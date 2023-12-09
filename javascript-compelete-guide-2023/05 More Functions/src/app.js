const startGameBtn = document.getElementById("start-game-btn")

const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSORS = "SCISSORS"
const DEFAULT_USER_CHOICE = ROCK

let gameIsRunning = false

function getPlayerChoice() {
   const selected = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase()

   if (selected !== ROCK && selected !== PAPER && selected !== SCISSORS) {
      alert("Invalid choice! We chose rock for you!")
      return
   }

   return selected
}

function getComputerChoice() {
   const randomValue = Math.random()

   if (randomValue < 0.34) return ROCK
   else if (randomValue < 0.67) return PAPER
   else return SCISSORS
}

function getWinner(cChoice, pChoice = DEFAULT_USER_CHOICE) {
   if (cChoice === pChoice) return "Game is DRAW"
   else if (
      (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
   )
      return "The Winner is PLAYER"
   else return "The Winner is COMPUTER"
}

function gameHandler() {
   if (gameIsRunning) return

   gameIsRunning = true
   const userSelection = getPlayerChoice()
   const computerSelection = getComputerChoice()
   const getWinnerResult = getWinner(computerSelection, userSelection)
   let message = `You picked ${userSelection}, computer picked ${computerSelection}, so ${getWinnerResult}`

   alert(message)
   gameIsRunning = false
}

startGameBtn.addEventListener("click", gameHandler)
