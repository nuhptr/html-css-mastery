// TODO: Array Destructuring
const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3); // 1 3

// TODO: Object Destructuring
const names = { name: "Adi", age: 23 };
const { name, age } = names;

// nama variable / constanta must same with object
console.log({
  name,
  age,
});
