const person1 = { name: "max" };
const person2 = { name: "max" };
const person3 = person1;

const comparison = person3 === person1;
console.log(comparison); // true

const personNameComparison = person1.name === person2.name;
console.log(personNameComparison); // true
