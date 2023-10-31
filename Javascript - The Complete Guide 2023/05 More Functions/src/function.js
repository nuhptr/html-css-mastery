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

//? REST PARAMETERS => ALWAYS AT THE END OF THE PARAMETERS
const sumUp = (a, b, ...numbers) => {
   //? FUNCTION INSIDE A FUNCTION
   const validateNumber = (number) => (isNaN(number) ? 0 : number)

   console.log(a, b)
   let sum = 0
   for (const num of numbers) sum += validateNumber(num)
   return sum
}
console.log(sumUp("test", "boost", 1, 2, 3, 4, 5))
