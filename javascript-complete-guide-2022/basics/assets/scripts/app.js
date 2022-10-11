// alert("this is works");

// TODO: Global Scope
const defaultResult = 0;
let currentResult = defaultResult;

// get user input from id input-number
const getUserNumberInput = () => {
  return parseInt(usrInput.value);
};

// create ouput result and description
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
};

const add = () => {
  // TODO: Local Scope
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);

  // Returning values
  // return result;
};

const subtract = () => {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", intialResult, enteredNumber);
};

const multiply = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
};

const divide = () => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
