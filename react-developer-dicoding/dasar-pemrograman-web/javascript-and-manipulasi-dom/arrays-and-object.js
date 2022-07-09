// TODO: Arrays
let myArrays = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArrays); // [ 'Coklat', 42.5, 22, true, 'Programming' ]

console.log(myArrays[2]); // 22
console.log(myArrays.length); // panjang arrays 5

// TODO: Object
let user = {
  name: {
    first: "Harry",
    last: "Potter",
  },
  age: 20,
  isMuggle: false,
  stuff: ["Magic Wind", "Flying Car", "Owl"],
};

console.info(
  `my name is ${user.name.first} ${user.name.last} and my age is ${user.age} and my weapon is ${user.stuff[0]}`
);
