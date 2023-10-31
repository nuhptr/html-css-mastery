//? DEFINING VARIABLES
const defaultResult = 0
let currentResult = defaultResult

let logEntries = []

//? SPLITTING CODE INTO FUNCTIONS
//? GET USER INPUT
function getUserNumberInput() {
   return parseInt(userInput.value) // from vendor.js
}

//? GENERATE AND WRITE CALCULATION LOG
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
   outputResult(currentResult, calcDescription) // from vendor.js
}

//? WRITE TO LOG
function writeToLog(operationType, prevResult, enteredNumber, newResult) {
   const logEntry = { operation: operationType, prevResult: prevResult, number: enteredNumber, result: newResult }
   logEntries.push(logEntry)
}

//? FUNCTION DECLARATION
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

addBtn.addEventListener("click", add) // from vendor.js
subtractBtn.addEventListener("click", substraction) // from vendor.js
multiplyBtn.addEventListener("click", multiplication) // from vendor.js
divideBtn.addEventListener("click", division) // from vendor.js
