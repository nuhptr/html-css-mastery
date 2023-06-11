const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
   return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult(currentResult, calcDescription);
}

// custom function
function add() {
   // parse the string to integer
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult + enteredNumber;

   createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult - enteredNumber;

   createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult * enteredNumber;

   createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
   const enteredNumber = getUserNumberInput();
   const initialResult = currentResult;
   currentResult = currentResult / enteredNumber;

   createAndWriteOutput("/", initialResult, enteredNumber);
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
