// defining variable
const defaultResult = 0
let currentResult = defaultResult

let logEntries = []

// splitting function
// get input from input field
function getUserNumberInput() {
   return parseInt(userInput.value) // from vendor.js
}

// generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
   outputResult(currentResult, calcDescription) // from vendor.js
}

// push to array logEntries
function writeToLog(operationType, prevResult, enteredNumber, newResult) {
   const logEntry = { operation: operationType, prevResult: prevResult, number: enteredNumber, result: newResult }
   logEntries.push(logEntry)
}

// function
function add() {
   const enteredNumber = getUserNumberInput()
   const initialResult = currentResult

   currentResult += enteredNumber
   createAndWriteOutput("+", initialResult, enteredNumber)
   writeToLog("ADD", initialResult, enteredNumber, currentResult)
   // return result
}

function substraction() {
   const enteredNumber = getUserNumberInput()
   const initialResult = currentResult

   currentResult -= enteredNumber
   createAndWriteOutput("-", initialResult, enteredNumber)
   writeToLog("SUBSTRACT", initialResult, enteredNumber, currentResult)
}

function multiplication() {
   const enteredNumber = getUserNumberInput()
   const initialResult = currentResult

   currentResult *= enteredNumber
   createAndWriteOutput("*", initialResult, enteredNumber)
   writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult)
}

function division() {
   const enteredNumber = getUserNumberInput()
   const initialResult = currentResult

   currentResult /= enteredNumber
   createAndWriteOutput("/", initialResult, enteredNumber)
   writeToLog("DIVIDE", initialResult, enteredNumber, currentResult)
}

// call function
// currentResult = add(5, 5)
// currentResult = currentResult + (10 * 2) / 2 - 1

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`
// let errorMessage = "An error \n" + "occurred!"

addBtn.addEventListener("click", add) // from vendor.js
subtractBtn.addEventListener("click", substraction) // from vendor.js
multiplyBtn.addEventListener("click", multiplication) // from vendor.js
divideBtn.addEventListener("click", division) // from vendor.js
