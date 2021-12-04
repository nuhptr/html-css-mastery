function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, My name is ${this.firstName}`);
  };
}

const eko = new Person("Eko", "Khannedy");
const budi = new Person("Budi", "Nugraha");

console.log(eko);
console.log(budi); // _proto_ -> menandakan bahwa mewarisi sifat parent
