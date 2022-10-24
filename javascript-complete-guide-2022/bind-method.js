// Calculate function
const combine = (resultHandler, operation, ...numbers) => {
  // function in function
  const validateNumber = (numbers) => {
    return isNaN(numbers) ? 0 : numbers;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else if (operation === "SUBSTRACT") {
      sum -= validateNumber(num);
    } else {
      return;
    }
  }

  resultHandler(sum);
};

// Callback function
// messageText comes from bind and result from resultHandler
const showResult = (messageText, result) => {
  console.log(messageText, result);
};

combine(
  showResult.bind(this, "The result after adding all is:"),
  "ADD",
  1,
  2,
  3,
  4
); // The result after adding all is: 10

combine(
  showResult.bind(this, "The result after minus all is:"),
  "SUBSTRACT",
  10,
  9,
  8,
  7,
  6
); // The result after minus all is: -40
