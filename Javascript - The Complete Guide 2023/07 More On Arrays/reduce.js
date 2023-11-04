const prices = [10.99, 5.99, 3.99, 6.59]
// let sum = 0
// prices.forEach((price, idx, prices) => {
//    sum += price
// })

// console.log(sum) // 27.56

//? REDUCE() -> CONSTRUCTOR (previousValue, currentValue, currentIndex, array)
const sum = prices.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

console.log(sum) // 27.56


