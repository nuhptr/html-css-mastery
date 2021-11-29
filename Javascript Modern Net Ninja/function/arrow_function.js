// TODO: Arrow Function
const calcArea = (radius) => 3.14 * radius ** 2; // low syntak to low logical

const area = calcArea(10);
console.log(`area is: ${area}`); // area is 314

const bill = (products, tax) => {
  let total = 0;
  for (let index = 0; index < products.length; index++) {
    total += products[index] + products[index] * tax;
  }

  return total;
};

let product = [10, 20, 30];
console.log(bill(product, 0.2));

const nama = "shaun";
// function arrow
const great = () => "hello";

let resultOne = great();
console.log(resultOne);

// Method
let resultTwo = nama.toUpperCase();
console.log(resultTwo);
