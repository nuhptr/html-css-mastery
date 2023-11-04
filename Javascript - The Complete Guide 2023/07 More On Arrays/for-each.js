const prices = [10.99, 5.99, 3.99, 6.59]
const tax = 0.19
const taxAdjustedPrices = []

prices.forEach((price, idx, prices) => {
   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) }
   taxAdjustedPrices.push(priceObj)
})

console.log(taxAdjustedPrices) // [ 13.0881, 7.1281, 4.7411, 7.8411 ]
