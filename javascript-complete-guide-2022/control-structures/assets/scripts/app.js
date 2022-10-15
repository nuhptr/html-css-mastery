// alert("this is works");

//TODO: Global Scope
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//TODO: get user input from id input-number
const getUserNumberInput = () => {
  return parseInt(usrInput.value);
};

//TODO: create output result and description
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
};

//TODO: to show in console
const writeToLog = (
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) => {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
  console.log(logEntry);
};

//TODO: logic calculate based on type
function calculateResult(calculationType) {
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBSTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  // check the type calculation
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBSTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else {
    console.log("Operation not found");
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

const add = () => {
  // TODO: Local Scope
  calculateResult("ADD");

  // Returning values
  // return result;
};

const subtract = () => {
  // TODO: Local Scope
  calculateResult("SUBSTRACT");
};

const multiply = () => {
  calculateResult("MULTIPLY");
};

const divide = () => {
  calculateResult("DIVIDE");
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
