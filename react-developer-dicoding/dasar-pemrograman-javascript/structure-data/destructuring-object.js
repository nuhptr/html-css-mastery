const profile = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 18,
};

// Destructuring
const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age); // Jhon Doe 18

// Destructuring Assignment
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
