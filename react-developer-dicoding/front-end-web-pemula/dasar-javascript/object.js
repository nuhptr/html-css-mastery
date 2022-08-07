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

const spaceShip = {
  name: "Millenium falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light Gray",
};

// Merubah isi nilai spaceship
spaceShip.color = "Glossy Red";
spaceShip["maxSpeed"] = 1300;

// Tambah member baru
spaceShip.fly = true;
console.log(spaceShip);

// Delete member
delete spaceShip.manufacturer;
console.log(spaceShip);
