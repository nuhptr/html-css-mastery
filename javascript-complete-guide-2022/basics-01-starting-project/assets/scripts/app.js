const defaultResult = 0;
let currentResult = defaultResult;

// custom function
function add(num1, num2) {
   const result = num1 + num2;
   // alert("The result is " + result);
   return result;
}

add(1, 2);
add(5, 5);

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
// let errorMessage = "An error \n" + "occurred!";

outputResult(currentResult, calculationDescription);
