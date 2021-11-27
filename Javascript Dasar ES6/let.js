var x = 10;

if (x > 5) {
  // can't get the value x = 5 in outside scope
  let x = 5;
  console.log("Inside: " + x);
}

console.log("outside: " + x);
