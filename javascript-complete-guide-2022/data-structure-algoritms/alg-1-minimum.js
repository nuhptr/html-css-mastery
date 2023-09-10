function getMin(numbers) {
  if (!numbers.length) {
    throw new Error('Should not be an empty array!')
  }

  let currentMinimum = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMinimum) {
      currentMinimum = numbers[i]
    }
  }

  return currentMinimum
}

const testNumber = [1, 5, 3, 2, 6, 8, 9, 4, 7]
const minimum = getMin(testNumber)
console.log(minimum)

// Different approach
function getMin2(numbers) {
  if (!numbers.length) {
    throw new Error('Should not be an empty array!')
  }

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i]

    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j]

      if (outerElement > innerElement) {
        numbers[i] = innerElement
        numbers[j] = outerElement

        outerElement = numbers[i]
        innerElement = numbers[j]
      }
    }
  }

  return numbers[0]
}

const testNumber2 = [1, 5, 3, 2, 6, 8, 9, 4, 7]
const minimum2 = getMin2(testNumber2)
console.log(minimum2)
