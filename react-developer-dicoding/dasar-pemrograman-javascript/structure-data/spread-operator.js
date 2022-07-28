const favorite = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorite); // Seafood Salad Nugget Soup
// seperti memanggil satu persatu menggunakan [0] [1] dst.

// TODO: menggabungkan 2 array
const others = ["Cake", "Pie", "Donuts"];

console.log(others); // ['Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donuts']

// TODO: menggabungkan 2 object literals
const obj1 = { firstName: "Luke", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };
console.log(newObj);
// { firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
