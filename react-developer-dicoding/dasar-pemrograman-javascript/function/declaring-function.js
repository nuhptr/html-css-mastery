// Example 1 :
function multiply(a, b) {
  return a * b;
}

multiply(2, 5);

// Example 2 :
function greeting() {
  console.log("Good Morning");
}

// Output : Good Morning

// Example 3 :
function greetingName(name, language) {
  if (language === "English") {
    return `Good Morning ${name}`;
  } else if (language === "French") {
    return `Bonjour ${name}`;
  } else {
    return `Selamat Pagi ${name}`;
  }
}

let greetingZsasa = greetingName("Zsasa", "French");
console.log(greetingZsasa); // Bonjour Zsasa

// Example 4 : Return value
function divide(a, b) {
  return a / b;
}

let result = divide(4, 2);
console.log(result); // 2
