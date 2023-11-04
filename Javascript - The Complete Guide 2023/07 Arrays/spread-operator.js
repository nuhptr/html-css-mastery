//? CATCH ALL ELEMENTS OF AN ARRAY
const names = ["test", "test2", "test3"]
const copiedName = [...names, "test4"]
console.log(copiedName) // [ 'test', 'test2', 'test3', 'test4' ]

const prices = [10.99, 5.99, 3.99, 6.59]
console.log(Math.min(...prices)) // 3.99

const person = [
   { name: "Max", age: 30 },
   { name: "Manuel", age: 31 },
]

//? COPY AN ARRAY OF OBJECTS BUT CAN'T RECEIVE NEW OBJECTS
const copiedPerson = [...person.map((person) => ({ name: person.name, age: person.age }))]

person.push({ name: "Anna", age: 32 })
person[0].age = 31

console.log(person, "/", copiedPerson) // [ { name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }, { name: 'Anna', age: 29 } ] [ { name: 'Max', age: 30 }, { name: 'Manuel', age: 31 } ]
