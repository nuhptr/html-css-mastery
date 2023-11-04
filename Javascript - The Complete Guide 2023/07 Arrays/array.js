//? CREATE ARRAYS IN DIFFERENT WAYS
const numbers = [1, 2, 3, "Test", "Hi", 0.2]
console.log(numbers)

const moreNumbers = Array(5, 2)
console.log(moreNumbers)

const yetMoreNumbers = Array.of(1, 2, 0.2)
console.log(yetMoreNumbers)

const moreNumbers2 = Array.from("Hi!")
console.log(moreNumbers2) // [ "H", "i", "!" ]

//? HTML Array
// const listItems = document.querySelectorAll("li")
// console.log(listItems)

// const arrayListItems = Array.from(listItems)
// console.log(arrayListItems)

console.log("==========")

//? WHATS DATA TYPES ARE IN THE ARRAY
const hobbies = ["Cooking", "Sports"]
const personalData = [30, "Max", { moreDetail: [] }]
console.log(personalData[1]) // Max

const analyticsData = [
   [1, 1.6],
   [-5.4, 2.1],
]

for (const data of analyticsData) {
   // Turn in to second array
   for (const dataPoint of data) {
      console.log(dataPoint)
   }
}
