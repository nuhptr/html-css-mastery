// TODO: Undefined
let x;
console.log(x); // undefined

// TODO: Numbers (1, 0.1, 0.75, etc)
let y = 10;
console.log(typeof y); // number

let z = 10.1;
console.log(typeof z); // number

// TODO: Operator
let a = 20;
let b = 9;

console.log(a + b); // 29
console.log(a - b); // 11
console.log(a * b); // 180
console.log(a / b); // 2.222222
console.log(a % b); // 2

// TODO: Increment dan Decrement
let postfix = 5;
console.log(postfix++); // 5
console.log(postfix); // 6

let prefix = 5;
console.log(++prefix); // 6

// TODO: Strings
let greet = "Hello";
console.log(typeof greet); // string

const question = '"What do you think of javascript?" I asked';
console.log(question); // "What do you think of javascript?" I asked

const answer = '"I think it\'s awesome" he answered confidently';
console.log(answer);

// TODO: Boolean
let d = true;
let e = false;

console.log(typeof d); // boolean
console.log(typeof e); // boolean

const number1 = 10;
const number2 = 20;

let isGreater = a > b;
let isLess = a < b;

console.log({
  isGreater, // true
  isLess, // false
});

// TODO: Null
let someLaterData = null;
console.log(someLaterData); // null

// TODO: symbol
const id = Symbol("id");
const aus = Symbol("aus");

console.log(id); // Symbol(id)
console.log(aus); // Symbol(aus)

console.log(id == aus); // false
