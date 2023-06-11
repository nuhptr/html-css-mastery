const defaultResult = 0;
let currentResult = defaultResult;
// using arrays
let logEntries = [];

// get the user input
function getUserNumberInput() {
   return parseInt(userInput.value);
}

// generate and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult(currentResult, calcDescription); // from vendor.js
}

// function writeToLog
function writeToLog(
   operationIdentifier,
   prevResult,
   number,
   newResult
) {
   const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: number,
      result: newResult,
   };
   logEntries.push(logEntry);
   console.log(logEntries);
}

// function add()
function add() {
   // parse the string to integer
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult += enteredNumber;

   createAndWriteOutput("+", initialResult, enteredNumber);

   writeToLog("ADD", initialResult, enteredNumber, currentResult);
}

// function subtract()
function subtract() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult -= enteredNumber;

   createAndWriteOutput("-", initialResult, enteredNumber);

   writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

// function multiply()
function multiply() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult *= enteredNumber;

   createAndWriteOutput("*", initialResult, enteredNumber);

   writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

// function divide()
function divide() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult /= enteredNumber;

   createAndWriteOutput("/", initialResult, enteredNumber);

   writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

// alert(result); result is not defined (out of scope)

// const additionResult = add(1, 2);

// currentResult = additionResult;

// let calculationDescription = `${defaultResult} + ${currentResult}`;
// let errorMessage = "An error \n" + "occurred!";

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
