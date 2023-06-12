// function add()
function add() {
   calculateResult("ADD");
}

// function subtract()
function subtract() {
   calculateResult("SUBTRACT");
}

// function multiply()
function multiply() {
   calculateResult("MULTIPLY");
}

// function divide()
function divide() {
   calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
