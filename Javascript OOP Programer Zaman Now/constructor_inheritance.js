function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  // send the constructor to parent
  Employee.call(this, firstName);
}

const eko = new Manager("Eko", "Khannedy");
// eko.sayHello("Adi");
console.info(eko); // punya say hello parent juga
