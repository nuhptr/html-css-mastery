class Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.name}`);
  }
}

// TODO: inheritance the class
class Manager extends Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is manager ${this.name}`);
  }
}

// inisiate
const budi = new Employee();
budi.name = "Budi";
budi.sayHello("Jaka"); // Hello Jaka, my name is employee Budi

const eko = new Manager();
eko.name = "Eko";
eko.sayHello("Jaka"); // Hello Jaka, my name is manager Eko
