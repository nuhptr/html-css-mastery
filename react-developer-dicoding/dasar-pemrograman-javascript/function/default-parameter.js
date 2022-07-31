// Default parameter ialah parameter yang di isikan value
function exponentsFormula(baseNumber, exponent = 2) {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(10); // 10^2 = 100
