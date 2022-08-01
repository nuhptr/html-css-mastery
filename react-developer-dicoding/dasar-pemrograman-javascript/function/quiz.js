function minimal(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else if (a === b) {
    return a;
  }
}

console.log(minimal(3, 3));

function power(a, b) {
  return a ** b;
}

console.log(power(3, 3));
