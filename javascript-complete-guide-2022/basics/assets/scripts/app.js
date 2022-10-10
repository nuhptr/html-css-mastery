// alert("this is works");

// TODO: Global Scope
const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  // TODO: Local Scope
  currentResult += userInput.value;
  outputResult(currentResult, "");
  // Returning values
  // return result;
}

addBtn.addEventListener("click", add);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 3`;
