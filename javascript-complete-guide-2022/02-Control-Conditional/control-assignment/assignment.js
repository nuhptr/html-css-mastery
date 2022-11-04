const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

const alertSomething =
  randomNumber >= 0.7 ? "Grater or equal 0.7" : "Not Greater";

alert(alertSomething);

const numbers = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  console.log(element);
}

console.log("============");

for (const rndArray of numbers) {
  console.log(rndArray);
}

console.log("============");

// For loops => Backwards

for (let index = numbers.length - 1; index >= 0; index--) {
  console.log(numbers[index]);
}

const randomNumber2 =
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  (randomNumber <= 0.2 && randomNumber2 <= 0.2)
    ? "Grater than 0.7 or smaller than 0.2"
    : "Hmmmm";
