const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }]

const sum = originalArray.map((obj) => obj.price).reduce((sumVal, curVal) => sumVal + curVal, 0)

console.log(sum) // 46.97
