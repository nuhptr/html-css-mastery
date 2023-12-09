const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

//? GET USER INPUT
const getUserNumberInput = () => parseInt(userInput.value)

//? GENERATE AND WRITE CALCULATION LOG
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
   outputResult(currentResult, calcDescription) // from vendor file
}

function writeToLog(operationType, prevResult, enteredNumber, newResult) {
   const logEntry = { operation: operationType, prevResult: prevResult, number: enteredNumber, result: newResult }
   logEntries.push(logEntry)
}

function calculateResult(calculationType) {
   if (
      calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE"
   ) {
      return
   }

   const enteredNumber = getUserNumberInput()
   const initialResult = currentResult
   let mathOperator

   if (calculationType === "ADD") {
      currentResult += enteredNumber
      mathOperator = "+"
   } else if (calculationType === "SUBTRACT") {
      currentResult -= enteredNumber
      mathOperator = "-"
   } else if (calculationType === "MULTIPLY") {
      currentResult *= enteredNumber
      mathOperator = "*"
   } else if (calculationType === "DIVIDE") {
      currentResult /= enteredNumber
      mathOperator = "/"
   }

   createAndWriteOutput(mathOperator, initialResult, enteredNumber)
   writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}

const add = () => calculateResult("ADD")
const subtract = () => calculateResult("SUBTRACT")
const multiply = () => calculateResult("MULTIPLY")
const divide = () => calculateResult("DIVIDE")

addBtn.addEventListener("click", add)
subtractBtn.addEventListener("click", subtract)
multiplyBtn.addEventListener("click", multiply)
divideBtn.addEventListener("click", divide)