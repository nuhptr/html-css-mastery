function multiply(num) {
  // variable total menjadi global
  total = num * num;
  return total;
}

let total = 9;
let number = multiply(20);

console.log(total);

// Global variable, dapat diakses pada parent() atau child()
const a = "a";

function parent() {
  // local variable, dapat diakses parent() dan child(), tetapi tidak dapat diakses diluar function tersebut
  const b = "b";

  function child() {
    // local variable, dapat diakses hanya pada fungsi child()
    const c = "c";
  }
}
