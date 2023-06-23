const sumUp = (numbers) => {
   let sum = 0;

   for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
   }

   return sum;
};

// Linear time complexity => O(n) => n is the length of the array

const array = [1, 5, 3, 2];

console.log(sumUp(array)); // 11
