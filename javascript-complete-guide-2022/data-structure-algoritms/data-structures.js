const age = [30, 29, 54]

// [30, 29, 54, _] => [30, 29, 54, 60]
age.push(60) // constant time complexity => O(1)

// [_, 30, 29, 54] => [10, 30, 29, 54]
age.unshift(10) // Linear time complexity => O(n)

const myAge = age[1] // constant time complexity => O(1)

// ------------------------------

const namePopularity = [
  {
    userName: 'John',
    usages: 30,
  },
  {
    userName: 'Michael',
    usages: 29,
  },
]

const michaelUsages = namePopularity.find(
  (pers) => pers.userName === 'Michael'
).usages
// BEST CASE: constant time complexity => O(1)
// WORST CASE: linear time complexity => O(n)
// AVERAGE CASE: linear time complexity => O(n)

const nameMap = {
  max: 6,
  manu: 5,
}

const maxUsages = nameMap['max'] // constant time complexity => O(1)
