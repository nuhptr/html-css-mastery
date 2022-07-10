console.log("Selamat anda berhasil menggunakan javascript web");

const calculator = {
  displayNumber: "0",
  operator: null,
  firstNumber: null,
  waitingForSecondNumber: false,
};

// update display
function updateDisplay() {
  document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

// clear calculator
function clearCalculator() {
  calculator.displayNumber = "0";
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
}

// input digit
function inputDigit(digit) {
  calculator.displayNumber += digit;
}

const buttons = document.querySelectorAll(".button");

for (const button of buttons) {
  button.addEventListener("click", function (event) {
    // mendapatkan elemen yang di klik
    const target = event.target;

    inputDigit(target.innerText);
    updateDisplay();
  });
}
