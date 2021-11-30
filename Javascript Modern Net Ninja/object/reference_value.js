// TODO: Reference value
const userOne = { name: "ryu", age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo); // same value

userOne.age = 40;
console.log(userOne, userTwo); // same value too because this is pointer
