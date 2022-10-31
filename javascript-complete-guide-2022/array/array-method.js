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

eat.splice(1, 0, "Good Food");
console.log(eat);
