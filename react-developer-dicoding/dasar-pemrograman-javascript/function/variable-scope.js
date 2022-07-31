// global variable, dapat diakses pada parent() dan child()
const a = "a";

function parent() {
  // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar fungsi tersebut.
  const b = "b";

  function child() {
    // local variable, dapat diakses hanya pada fungsi child()
    const c = "c";
  }
}

function multiply(num) {
  total = num * num;
  return total;
}

let total = 9; // useless
let number = multiply(10);

console.log(total);
/* Output : 
  400
*/
