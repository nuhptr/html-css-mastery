// alert("this is works");

// TODO: Global Scope
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// get user input from id input-number
const getUserNumberInput = () => {
  return parseInt(usrInput.value);
};

// create output result and description
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
};

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

const add = () => {
  // TODO: Local Scope
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog("Add", initialResult, enteredNumber, currentResult);

  // Returning values
  // return result;
};

const subtract = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog("Substract", initialResult, enteredNumber, currentResult);
};

const multiply = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog("Multiply", initialResult, enteredNumber, currentResult);
};

const divide = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog("Divide", initialResult, enteredNumber, currentResult);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
