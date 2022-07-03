// TODO: constructor function assumse as class
function Person(firstName, lastName) {
  // Constructor
  this.firstName = firstName;
  this.lastName = lastName;

  // function in constructor
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

// TODO: Call
const eko = new Person("Eko", "Khannedy");
eko.sayHello("adi"); // Hello adi, my name is Eko

const budi = new Person("Budi", "Nugraha");
budi.sayHello("eko"); // Hello eko, my name is Budi

console.log(eko); // Person { firstName: 'Eko', lastName: 'Khannedy' }
console.log(budi); // Person { firstName: 'Budi', lastName: 'Nugraha' }
