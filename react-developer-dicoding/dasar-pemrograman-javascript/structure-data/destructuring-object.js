const profile = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 18,
};

// Destructuring
const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age); // Jhon Doe 18

// TODO: Destructuring Assignment
const namePerson = {
  first: "Melia",
  second: "Doe",
  ageNumber: 20,
};

let first = "Dimas";
let ageNumber = 20;

// Menginisiasi nilai baru melalui destructuring object
({ first, ageNumber } = namePerson);
console.log(first); // Melia
console.log(ageNumber); // 20

// TODO: Default values
const car = {
  brand: "Toyota",
  price: 10000000000,
  tires: 4,
};

const { brand, price, isNew = true } = car;
console.log(brand); // Toyota
console.log(price); // 10000000000
console.log(isNew); // true

// TODO: Assigning to Different local variable names
const { brand: localBrand, price: normalPrice, tires: numberOfTires } = car;
console.log(brand); // Toyota
console.log(price); // 10000000000
console.log(numberOfTires); // 4
