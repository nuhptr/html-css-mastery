// TODO: Spread
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers); // [1, 2, 3, 4]

const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: "23",
};

console.log(newPerson); // { name : 'Max', age: '23' }

// TODO: Rest
const filterNumber = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filterNumber(1, 2, 3, 4)); // 1
