const startGameBtn = document.getElementById("start-game-btn")

//? storing a function in a variable
const startGame = () => {
   console.log("Game is starting...")
}

// const person = {
//    name: "Max",
//    greet: function greet() {
//       console.log("Hello there!")
//    },
// }

// person.greet()
// console.log(typeof startGame)

startGameBtn.addEventListener("click", startGame)
