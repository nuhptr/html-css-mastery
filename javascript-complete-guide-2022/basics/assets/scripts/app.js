// alert("this is works");

const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  // Returning values
  return result;
}

currentResult = add(37, 37);

let calculationDescription = `(${defaultResult} + 10) * 3 / 3`;
outputResult(currentResult, calculationDescription);
