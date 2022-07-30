const favorites = ["seafood", "salad", "nugget", "soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
console.log(firstFood); // seafood
console.log(secondFood); // salad
console.log(thirdFood); // nugget
console.log(fourthFood); // soup

// Kosongkan bagian depan jika hanya butuh index tertentu
const [, , thirdFoods] = favorites;
console.log(thirdFood); // nugget

// TODO: Destructuring assignment
const myCar = ["Toyota", "BNW", "Bugatti", "Audi"];

let myToyota = "Toyota New Edition";
let myBnw = "BNW New Edition";

[myToyota, myBnw] = myCar;
console.log(myToyota); // Toyota
console.log(myBnw); // BNW

// Example : swap
let a = 1;
let b = 2;

console.log(a); // 1
console.log(b); // 2
console.log("=======");
[a, b] = [b, a]; // swap method destructuring
console.log(a); // 2
console.log(b); // 1

// TODO: Default values
const food = ["Seafood"];

const [myFood, herFood = "Salad"] = food;
console.log(myFood); // Seafood
console.log(herFood); // Salad
