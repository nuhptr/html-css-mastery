const numbers = [1, 2, 3, 4, 5, 6, 7]

const numGraterThan5 = numbers.filter((num) => num > 5)
console.log(numGraterThan5) // [ 6, 7 ]

const mappedNumbers = numbers.map((num) => ({ num: num }))
console.log(mappedNumbers) // [ { num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }, { num: 6 }, { num: 7 } ]

const muliplication = numbers.reduce((curResult, curValue) => curResult * curValue, 1)
console.log(muliplication) // 5040

function findMax(...numbers) {
   let curMax = numbers[0]
   let curMin = numbers[0]

   for (const num of numbers) {
      if (num > curMax) curMax = num
   }

   for (const num of numbers) {
      if (num < curMin) curMin = num
   }

   return [curMax, curMin]
}

const [max, min] = findMax(...numbers)
console.log(max, min) // 7 1
