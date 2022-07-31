function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
    // console.log(result);
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
