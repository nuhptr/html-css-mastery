// TODO: boolean & comparison
console.log(true, false, "true", "false");

// TODO: methods can return booleans
let email = "nugraha@gmail.com";
let result = email.includes("@"); // true
console.log(result);

let names = ["mario", "luigi", "toad"];
let result2 = names.includes("luigi");
console.log(result2); // true

// TODO: Comparison operator
let age = 25;
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

// TODO: loose comparison (different types can still be equal)
let number = 20;
console.log(age == 20);
console.log(age == "20");
console.log(age != 20);
console.log(age != "20");

// TODO: Strict comparison (different types cannot be equal)
console.log(age === 20);
console.log(age === "25");
console.log(age !== "25");
console.log(age !== 25);
