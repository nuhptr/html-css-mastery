// TODO: Convert String and Number
const value1 = "11";
const value2 = 1;

console.log(`${value2.toString()}`); // convert to String
console.log(`${parseInt(value1)}`); // convert to integer
console.log(`${parseFloat(value1)}`); // convert to floating number
console.log(`${Number("1.1")}`); // convert to number

let convertNum = parseInt(value1);
let sum = convertNum + value2;
console.log(sum); // 12 bukan 111

// function check is a not number
let isNan = isNaN(100);
console.log(isNan); // false