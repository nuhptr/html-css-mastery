// const startGameBtn = document.getElementById("start-game-btn")

//? ANNOMYOUS FUNCTION
// startGameBtn.addEventListener("click", () => {
//    console.log("Game is starting...")
// })

//? STORING FUNCTIONS IN VARIABLES
const startGame = () => {
   console.log("Game is starting...")
}

const person = {
   name: "Max",
   greet: function greet() {
      console.log("Hello there!")
   },
}

person.greet()
console.log(typeof startGame)

console.log("=========")

const ADD = "ADD"
const SUBTRACT = "SUBTRACT"

//? REST PARAMETERS => ALWAYS AT THE END OF THE PARAMETERS
const combine = (resultHandler, operation, ...numbers) => {
   //? FUNCTION INSIDE A FUNCTION
   const validateNumber = (number) => (isNaN(number) ? 0 : number)

   let sum = 0
   for (const num of numbers) {
      if (operation === ADD) sum += validateNumber(num)
      else sum -= validateNumber(num)
   }

   //? CALLBACK FUNCTION
   resultHandler(sum)
}

const showResult = (messageText, result) => {
   console.log(messageText + "" + result)
}

//? INVOKE CALLBACK FUNCTION
//! BIND => PRE-CONFIGURE A FUNCTION TO NEW RETURNED FUNCTION
combine(showResult.bind(this, "Result after add all: "), ADD, 1, 5, -3, 6, 10)
combine(showResult.bind(this, "Result after subtract all: "), SUBTRACT, 1, 5, -3, 6, 10)
