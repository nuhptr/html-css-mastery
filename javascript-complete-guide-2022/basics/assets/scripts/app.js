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
  // from vendor file
  outputResult(currentResult, calcDescription);
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

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;

  if (operation === "ADD") {
    currentResult += enteredNumber;
    operator = "+";
  } else if (operation === "SUBTRACT") {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (operation === "MULTIPLY") {
    currentResult *= enteredNumber;
    operator = "*";
  } else if (operation === "DIVIDE") {
    currentResult /= enteredNumber;
    operator = "/";
  }

  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

// TODO: Adding bind method to eventListener
addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
