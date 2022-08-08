const minimal = function (a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else if (a === b) {
    return a;
  } else {
    return 0;
  }
};

const power = function (a, b) {
  return a ** b;
};

console.log(minimal(100, 10));
console.log(power(3, 3));
