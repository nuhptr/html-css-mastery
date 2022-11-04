const sumUp = (resultHandler, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  resultHandler(sum);
};

// TODO: using callback function
const showResult = (result) => {
  console.log(`the result after adding all number is: ${result}`);
};

sumUp(showResult, 1, 2, 3, 4, 5, 6, 7, 8); // the result after adding all the number is: 36
