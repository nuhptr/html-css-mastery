// definingn variable
const defaultResult = 0
let currentResult = defaultResult

// function
function add() {
   currentResult = currentResult + parseInt(userInput.value)
   outputResult(currentResult, "")

   // return result
}

// call function
// currentResult = add(5, 5)
// currentResult = currentResult + (10 * 2) / 2 - 1

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`
// let errorMessage = "An error \n" + "occurred!"

addBtn.addEventListener("click", add)
