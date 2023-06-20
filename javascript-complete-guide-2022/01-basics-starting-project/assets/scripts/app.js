const defaultResult = 0;
let currentResult = defaultResult;
// using arrays
let logEntries = [];

// get the user input
function getUserNumberInput() {
   // parseInt() converts string to number
   return parseInt(userInput.value);
}

// generate and write calculation log
function writeOutputLog(operator, resultBeforeCalc, calcNumber) {
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult(currentResult, calcDescription); // from vendor.js
}

// function writeToLog
function writeToLog(operationIdentifier, initialResult, enteredNumber, newResult) {
   const logEntry = {
      operation: operationIdentifier,
      initialResult: initialResult,
      enteredNumber: enteredNumber,
      result: newResult,
   };
   logEntries.push(logEntry);
   console.log(logEntries);
}

// calculate the result
function calculateResult(calculationType) {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   let mathOperator;

   if (calculationType === "ADD") {
      currentResult += enteredNumber;
      mathOperator = "+";
   } else if (calculationType === "SUBTRACT") {
      currentResult -= enteredNumber;
      mathOperator = "-";
   } else if (calculationType === "MULTIPLY") {
      currentResult *= enteredNumber;
      mathOperator = "*";
   } else if (calculationType === "DIVIDE") {
      currentResult /= enteredNumber;
      mathOperator = "/";
   } else {
      return Error("Hey you forgot to input operation (ADD/DIVIDE/MULTIPLY/DIVIDE)!");
   }

   writeOutputLog(mathOperator, initialResult, enteredNumber);
   writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculateResult.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculateResult.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculateResult.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculateResult.bind(this, "DIVIDE"));
