let currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);

const priceInJpy = 5000;

let priceInIDR = priceInJpy * currency.get("JPY");
console.log(priceInIDR); // 65500
