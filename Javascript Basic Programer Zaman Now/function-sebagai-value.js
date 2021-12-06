function sayHello(name) {
  console.info(`Hello ${name}`);
}

sayHello("Eko");

// Jadikan function as value
const say = sayHello;
console.info(say("Adi"));

function giveMeName(callback) {
  callback("Adi"); // sayHello("Adi")
}

giveMeName(sayHello);
giveMeName(say); // giveMeName(sayHello)
