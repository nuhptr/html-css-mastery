const sayHello = (name) => {
  const say = `Hello ${name}`;
  console.info(say);
};

sayHello("Adi");

// Tanpa kode block
const sayHello = (name) => console.log(`hello ${name}`);
sayHello("adi");

// return value
const sum = (first, second) => first + second;
console.info(sum(10, 10));

// sebagai parameter
function giveMeName(callback) {
  callback("Adi");
}

giveMeName((name) => console.info(`hello ${name}`)); // hello Adi
