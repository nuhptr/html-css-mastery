let x = 10;
let y = 5;

let plus = (x += y); // x = x + y
let minus = (x -= y); // x = x - y
let multiplication = (x *= y); // x = x * y
let divide = (x /= y); // x = x / y
let modulo = (x %= y); // x = x % y

console.log(plus); // 15
console.log(minus); // 10
console.log(multiplication); // 50
console.log(divide); // 10
console.log(modulo); // 0
