// Function Expression
const sayHello = (greet) => {
  console.log(`${greet}!`);
};

const sayName = (name) => {
  console.log(`Nama saya ${name}`);
};

sayName("Zsasa"); // Nama saya zsasa

// Example 2 :
const sayHai = () => {
  console.log("Selamat pagi semuanya!");
};

// Example 3 :
const hello = (name) => console.log(`Nama saya ${name}`);
hello("zsasa");

// Example 4 :
const sayGoodBye = () => console.log("Selamat pagi semuanya!");
sayGoodBye(); // Selamat pagi semuanya!

// Example 5 :
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12
