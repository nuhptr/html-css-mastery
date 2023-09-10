// while loop
let j = 0
while (j < 3) {
  console.log('-------------')
  j++
}

// Another example
let randomNumber = []
let finished = false

while (!finished) {
  const rndNumber = Math.random()
  randomNumber.push(rndNumber)
  if (rndNumber > 0.5) {
    finished = true
    console.log(randomNumber)
  }
}

// Do-While Loop
let a = 0
do {
  console.log(a)
  a++
} while (a < 3)
