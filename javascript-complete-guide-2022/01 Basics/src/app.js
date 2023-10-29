// definingn variable
const defaultResult = 0
let currentResult = defaultResult

// splitting function
function getUserNumberInput() {
   return parseInt(userInput.value)
}

// function
function add() {
   const enteredNumber = getUserNumberInput()

   const calcDescription = `${currentResult} + ${enteredNumber}`
   currentResult = currentResult + enteredNumber
   outputResult(currentResult, calcDescription)

   // return result
}

function substraction() {
   const enteredNumber = getUserNumberInput()

   const calcDescription = `${currentResult} - ${enteredNumber}`
   currentResult = currentResult - enteredNumber
   outputResult(currentResult, calcDescription)
}

function multiplication() {
   const enteredNumber = getUserNumberInput()

   const calcDescription = `${currentResult} * ${enteredNumber}`
   currentResult = currentResult * enteredNumber
   outputResult(currentResult, calcDescription)
}

function division() {
   const enteredNumber = getUserNumberInput()

   const calcDescription = `${currentResult} / ${enteredNumber}`
   currentResult = currentResult / enteredNumber
   outputResult(currentResult, calcDescription)
}

// call function
// currentResult = add(5, 5)
// currentResult = currentResult + (10 * 2) / 2 - 1

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`
// let errorMessage = "An error \n" + "occurred!"

addBtn.addEventListener("click", add)
