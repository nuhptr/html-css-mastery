class People {
  // Otomatis dimiliki oleh turunannya
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.firstName}`);
  }
}

// TODO: inheritance the class
class Manager extends People {
  constructor(firstName, lastName) {
    //   TODO: using super keyword
    super(firstName);
    this.lastName = lastName;
  }

  sayHello(name) {
    console.info(
      `Hello ${name}, my name is manager ${this.firstName} ${this.lastName}`
    );
  }
}

// inisiate
const budi = new People("Budi");
budi.sayHello("Jaka"); // Hello Jaka, my name is employee Budi

const eko = new Manager("Eko", "Khannedy");
eko.sayHello("Jaka"); // Hello Jaka, my name is manager Eko
