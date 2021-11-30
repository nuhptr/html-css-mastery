function factorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
}

// Factorial recursive
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}

let calc = factorialRecursive(5);
// 5 * factorialRecursive(4)
// 5 * 4 * factorialRecursive (3)
// dst
console.log(calc);