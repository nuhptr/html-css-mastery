// Undefined : variable tidak memiliki nilai
let x;
console.log(typeof x); // undefined

// numbers
let y = 10;
console.log(typeof y); // number

let z = 17.5;
console.log(typeof z); // number

// TODO: Operator
let number1 = 10;
let number2 = 12;

// +
console.log(number1 + number2); // 22

// -
console.log(number1 - number2); // -2

// *
console.log(number1 * number2); // 120

// /
console.log(number1 / number2); // 0.833333

// % (sisa bagi)
console.log(number1 % number2); // 10

// TODO: Increment and Decrement
let postFix = 5;
postFix++; // 5
console.log(postFix); // 6

let prefix = 5;
console.log(++prefix); // 6

// TODO: BigInt
// cukup tambahkan huruf n diakhir angka

const bigNumber = 123456778891919191n;
console.log(bigNumber); // 123456778891919191n

const bigIntButSmallNumber = 7n;
console.log(bigIntButSmallNumber); // 7n

// example
console.log(5n + 2n); // 7n
console.log(5n - 2n); // 3n
console.log(5n % 2n); // 1n

// TODO: Strings
let greet = "Hello";
console.log(typeof greet); // string

// note : jika terdapat petik 2 dalam string maka gunakan petik 1 ''

let names = "andi ";
let age = "20th";
let biodata = names + age; // andi 20th

// string interpolation
const myName = "zsazsa";
console.log(`Hello, my name is ${myName}`);

// TODO: Boolean
let logic1 = true;
let logic2 = false;

console.log(logic1);
console.log(logic2);

// operator komparasi
const a = 10;
const b = 5;

let isGrater = a > b;
let isLess = b < a;

// TODO: null
let someData = null;
console.log(someData); // null

// TODO: Symbol
// variable tidak sama walaupun symbolnya sama 

