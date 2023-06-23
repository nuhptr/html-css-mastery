function oddEvenNumber(number) {
   //   if (number % 2 === 0) {
   //      return "even";
   //   } else {
   //      return "odd";
   //   }
   return number % 2 === 0 ? "even" : "odd";
}

// Constant time complexity => O(1)

console.log(oddEvenNumber(2)); // even
console.log(oddEvenNumber(3)); // odd
