function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Create new object from other prototype
Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is employee ${this.name}`);
};

const employee = new Employee("Adi");
employee.sayHello("Budi"); // Hello Budi, my name is employee Adi

const manager = new Manager("Eko");
manager.sayHello("Joko"); // Hello Joko, my name is manager Eko
