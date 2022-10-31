// TODO: which data store to arrays

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
