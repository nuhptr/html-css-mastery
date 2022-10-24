// TODO: ... is rest parameter
const sumUp = (...numbers) => {
  // TODO: function inside function
  const validateNumbers = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumbers(num);
  }
  return sum;
};

const substractUp = function () {
  let sum = 0;
  // don't do that
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
};
