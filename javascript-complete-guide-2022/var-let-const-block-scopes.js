let names = "Max";
let hobbies;

if (names === "Max") {
  hobbies = ["Sports", "Cooking"];
  console.log(hobbies);
}

function greet(name) {
  var age = 30;
  var name = "Manuel";
  // Manuel are assign to console.log in name variable not from global variable

  console.log(name, age, hobbies);
}

// age can't access outside block level function
// console.log(names, age);

console.log(names, hobbies);

greet(names);
