const eat = ["rice", "fish"];
// TODO: push method to add value to array
eat.push("kerupuk");
// TODO: add in first index
eat.unshift("coding");
// TODO: remove last index
const poppeValue = eat.pop();

// TODO: delete at the beginning
eat.shift();
console.log(eat);

// TODO: replace value
eat[1] = "Fried Rice";
console.log(eat);

// TODO: remove basic on index and how many delete, if need add item after delete
eat.splice(1, 0, "Good Food");
console.log(eat);

// TODO: slice
