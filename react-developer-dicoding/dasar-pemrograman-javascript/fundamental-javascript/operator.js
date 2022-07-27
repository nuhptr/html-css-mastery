// TODO: Assignment Operator
x = y;

let x = 10;
let y = 5;

x += y; // x = x + y;
console.log(x);

// TODO: Assignment Lainnya
let numberOne = 10;
let numberTwo = 5;

numberOne += numberTwo; // artinya -> numberOne = numberOne + numberTwo
numberOne -= numberTwo; // artinya -> numberOne = numberOne + numberTwo
numberOne *= numberTwo; // artinya -> numberOne = numberOne + numberTwo
numberOne /= numberTwo; // artinya -> numberOne = numberOne + numberTwo
numberOne %= numberTwo; // artinya -> numberOne = numberOne + numberTwo

// TODO: Comparison Operator
/* == : membandingkan kedua nilai apakah sama (tidak identik).
  / !=  : membandingkan kedua nilai apakah tidak sama (tidak identik).
  === : membandingkan kedua nilai apakah identik.
  / !== : membandingkan kedua nilai apakah tidak identik.
  >   : membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
  >=  : membandingkan dua nilai apakah nilai pertama lebih dari sama dengan nilai kedua.
  <   : kurang dari
  <=  : kurang dari sama dengan
*/

let a = 10;
let b = 20;

console.log(a < b); // true
console.log(a > b); // false

// perbedaan "sama" == dan "identik" ===
const aString = "10";
const aNumber = 10;

console.log(aString == aNumber); // true, karena nilainya sama-sama 10
console.log(aString === aNumber); // false, karena walaupun nilainya sama tetapi tipe datanya beda

// TODO: Logical operator
/* && -> nilai true apabila semua kondisi bernilai true
   || -> nilai true apabila ada salah satu kondisi bernilai true
   / ! -> membalikan suatu kondisi
*/

let c = 10;
let d = 20;

// AND operator
console.log(c < 15 && d > 10); // (true & true) -> true

// OR operator
console.log(c < 15 || d > 20); // (true & false) -> true
