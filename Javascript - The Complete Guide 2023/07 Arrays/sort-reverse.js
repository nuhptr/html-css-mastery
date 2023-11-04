const pricesMore = [10.99, 5.99, 3.99, 6.59]

//? SORT() - Sort the array / toSorted() - Sort the array and return a new array
//? CONSTRUCTOR (number1, number2)
const sortedPrice = pricesMore.toSorted((a, b) => {
   if (a > b) return 1
   else if (a === b) return 0
   else return -1
})

console.log(sortedPrice) // [ 3.99, 5.99, 6.59, 10.99 ]
console.log(sortedPrice.reverse()) // [ 10.99, 6.59, 5.99, 3.99 ]
