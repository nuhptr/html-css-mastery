const person = {
  name: "max",
};

// because the value provide in secondPerson
const secondPerson = {
  ...person,
};

// object person.name not changed
person.name = "Manu";

console.log(secondPerson); // { name : 'max' }
