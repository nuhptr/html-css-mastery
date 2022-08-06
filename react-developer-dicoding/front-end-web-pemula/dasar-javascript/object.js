const user = {
  firstName: "Harry",
  lastName: "Meguire",
  age: 22,
  isJedi: true,
  "home world": "Tattoine",
};

console.log(
  `Hallo, my name is ${user.firstName} ${user.lastName} and my age ${user.age}`
); // Hallo, my name is Harry Meguire and my age 22

console.log(`I\'m from ${user["home world"]}`); // I'm from Tattoine
