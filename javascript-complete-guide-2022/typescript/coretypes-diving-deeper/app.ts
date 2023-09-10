function calculateResult(a: number, b: number) {
  return a + b
}

type PrintMode = 'console' | 'alert'

function printNumber(num: number | string, printMode: PrintMode): void {
  if (printMode === 'console') {
    console.log('Result: ' + num)
  } else if (printMode === 'alert') {
    alert('Result: ' + num)
  }
}

const calculate = calculateResult(5, 3)
printNumber(calculate, 'console')

// connect to html id
const num1 = <HTMLInputElement>document.getElementById('num1')
const num2 = <HTMLInputElement>document.getElementById('num2')
const button = document.querySelector('button')

type CalculationResults = { res: number; print: () => void }[]

let results: CalculationResults = []

button?.addEventListener('click', () => {
  const calculateNum1 = +num1.value
  // + is a shortcut to convert string to number
  const calculateNum2 = +num2.value

  const result = calculateResult(calculateNum1, calculateNum2)
  const resultContainer: { res: number; print: any } = {
    res: result,
    print() {
      console.log(this.res)
    },
  }

  results.push(resultContainer)
  console.log(results)
  printNumber(resultContainer.res, 'alert')
})
