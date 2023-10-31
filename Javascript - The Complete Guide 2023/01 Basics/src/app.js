//? DEFINING VARIABLES
const defaultResult = 0
let currentResult = defaultResult

let logEntries = []

const ADD = "ADD"
const SUBTRACT = "SUBTRACT"
const MULTIPLY = "MULTIPLY"
const DIVIDE = "DIVIDE"

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
//! ADDING BIND TO THIS CALCUATOR
const calculate = (operation) => {
   const enteredNumber = getUserNumberInput()
   const initialResult = currentResult
   let operator

   switch (operation) {
      case ADD:
         currentResult += enteredNumber
         operator = "+"
         break
      case SUBTRACT:
         currentResult -= enteredNumber
         operator = "-"
         break
      case MULTIPLY:
         currentResult *= enteredNumber
         operator = "*"
         break
      case DIVIDE:
         currentResult /= enteredNumber
         operator = "/"
         break
      default:
         console.log("Invalid operation")
   }

   createAndWriteOutput(operator, initialResult, enteredNumber)
   writeToLog(operation, initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener("click", calculate.bind(this, ADD)) // from vendor.js
subtractBtn.addEventListener("click", calculate.bind(this, SUBTRACT)) // from vendor.js
multiplyBtn.addEventListener("click", calculate.bind(this, MULTIPLY)) // from vendor.js
divideBtn.addEventListener("click", calculate.bind(this.DIVIDE)) // from vendor.js
