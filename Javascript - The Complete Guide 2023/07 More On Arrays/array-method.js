const hobbies = ["Sports", "Cooking"]

//? ADDING ELEMENTS
//? CONSTRUCTOR => (...items)
hobbies.push("Reading") // Add to the end of the array
hobbies.unshift("Coding") // Add to the start of the array

//? REMOVING ELEMENTS
hobbies.pop() // Remove the last item in the array
hobbies.shift() // Remove the first item in the array

console.log(hobbies)

hobbies[1] = "Coding" // Replace the second item in the array
// hobbies[5] = "Reading" // [ "Sports", "Coding", <3 empty items>, "Reading" ] RARELY(Jarang) USED

console.log(hobbies)

console.log("===============")

//? SPLICE(start, deleteCount, ...items) - REMOVE & INSERT ELEMENTS
const testResults = [1, 5.3, 1.5, 10.99, -5, 10]

testResults.splice(2, 2, 99) // (Remove 2 item from start index, and insert 99 in index 2)
// [ 1, 5.3, 99, -5, 10 ]
testResults.splice(0, 1) // (Remove 1 item from start index = 0)

console.log(testResults) // [ 5.3, 99, -5, 10 ]

console.log("===============")

//? SLICE(start, end) - COPY ELEMENTS
const storedResults = testResults.slice(0, 2) // (Copy from index 0 to 2) => [ 5.3, 99 ]

console.log(storedResults)
console.log(testResults.indexOf(99)) // 1 -> Index of 99
console.log(testResults.lastIndexOf(10)) // 3 -> Index of 10

console.log("===============")

//? ARRAY OBJECT
const personData = [{ name: "Max" }, { name: "Manuel" }]
console.log(personData.indexOf({ name: "Manuel" })) // -1 -> Because it's a new object

console.log("===============")

//? FIND(value, index, object[]) & FINDINDEX(value, index, object[]) - Find the object in the array
const manuel = personData.find((person, idx) => {
   return person.name === "Manuel"
})
manuel.name = "Anna" // Change the name of the object
console.log(manuel, personData) // { name: 'Anna' } [ { name: 'Max' }, { name: 'Anna' } ]

const maxIndex = personData.findIndex((person, idx) => {
   return person.name === "Max"
})
console.log(maxIndex) // 0

//? INCLUDES(searchElements, fromIndex?) - Check if the array contains a certain element

const testResults2 = [1, 5.3, 1.5, 10.99, -5, 10]
console.log(testResults2.includes(10.99)) // true
