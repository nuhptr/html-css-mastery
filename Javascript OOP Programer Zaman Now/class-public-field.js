class Customer {
  // TODO: auto public property field
  firstName;
  lastName;
  balance = 0;

  constructor(firstName, lastName) {
    // get the property from top
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {}
}

const eko = new Customer();
console.info(eko); // Customer { firstName: undefined, lastName: undefined, balance: 0 }
