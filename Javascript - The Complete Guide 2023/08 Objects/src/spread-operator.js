const person = { name: "ATM", hobbies: ["Sports", "Cooking"] }
const anotherPerson = person

person.age = 30
person.hobbies.push("Programming")

//? NEW DATA IS ADDED TO BOTH person AND anotherPerson
const person2 = { ...person }
console.log(person2) // {name: "ATM", hobbies: Array(3), age: 30}

const person3 = { ...person, age: 31, hobbies: [...person.hobbies] }
person3.hobbies.push("Reading") //? NEW DATA IS ADDED TO person3 ONLY (NOT person)
console.log(person3) // {name: "ATM", hobbies: Array(3), age: 31}

//? OBJECT ASSIGN
// const name1 = { name: "max" }
// const name2 = Object.assign({}, person) // complained code by sonar-lint use spread operator instead
// console.loog(name2) // {name: "max"}
