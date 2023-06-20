const combine = (resultHandlers, operation, ...numbers) => {
   // function inside a function
   const validateNumber = (number) => {
      return isNaN(number) ? 0 : number;
   };

   let sum = 0;
   for (const num of numbers) {
      if (operation === "ADD") {
         sum += validateNumber(num);
      } else {
         sum -= validateNumber(num);
      }
   }
   resultHandlers(sum, "The result after adding all numbers is:");
};

// callback functions
const showResult = (result, messageText) => {
   console.log(messageText + " " + result);
};

// bind
combine(
   showResult.bind(this, "The result after adding all the number"),
   "ADD",
   1,
   5,
   10,
   -3,
   6,
   10,
   "fdsa"
);
combine(
   showResult.bind(this, `The result after adding all the number`),
   "ADD",
   1,
   5,
   10,
   -3,
   6,
   10
);
combine(
   showResult.bind(this, "The result after substract all the number"),
   "SUBTRACT",
   1,
   5,
   10,
   -3,
   6,
   10
);

// sumUp(showResult, 1, 5, 10, -3, 6, 10);

// const subtractUp = function () {
//    let sum = 0;
// DON'T USE THIS
//    for (const num of arguments) {
//       sum -= num;
//    }
//    return sum;
// };
