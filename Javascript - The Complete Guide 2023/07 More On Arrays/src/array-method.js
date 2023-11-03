const hobbies = ["Sports", "Cooking"]

//? ADDING & REMOVING ELEMENTS
hobbies.push("Reading") // Add to the end of the array
hobbies.unshift("Coding") // Add to the start of the array
hobbies.pop() // Remove the last item in the array
hobbies.shift() // Remove the first item in the array

console.log(hobbies)

hobbies[1] = "Coding" // Replace the second item in the array
// hobbies[5] = "Reading" // [ "Sports", "Coding", <3 empty items>, "Reading" ] RARELY(Jarang) USED
console.log(hobbies)

console.log("===============")

//? SPLICE() - REMOVE & INSERT ELEMENTS
const testResults = [1, 5.3, 1.5, 10.99, -5, 10]

testResults.splice(2, 2, 99) // (Remove 2 item from start index, and insert 99 in index 2)
// [ 1, 5.3, 99, -5, 10 ]
testResults.splice(0, 1) // (Remove 1 item from start index = 0)
// [ 5.3, 99, -5, 10 ]

console.log(testResults)

console.log("===============")

//? SLICE() - COPY ELEMENTS
const storedResults = testResults.slice(0, 2) // (Copy from index 0 to 2)
// [ 5.3, 99 ]

console.log(storedResults)
