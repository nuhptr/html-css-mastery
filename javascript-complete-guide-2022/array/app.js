const listItems = document.querySelectorAll("li");
console.log(listItems);

// TODO: for converting iterable objects to real arrays
const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

// TODO: which data store to arrays
/* 
const hobbies = ["Sports", "Cooking"];
const personalData = [30, "max", { moredetail: [] }];
console.log(personalData[1]);

const analyticData = [
  [1, 1.6],
  [-5, 4, 2.1],
];

for (const data of analyticData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
} 
*/

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
