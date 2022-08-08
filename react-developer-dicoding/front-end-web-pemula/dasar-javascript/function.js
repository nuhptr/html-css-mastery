function greeting() {
  console.log("Good Morning!");
}
greeting(); // Output : Good Morning!

function greetingWithName(name, language) {
  if (language === "English") {
    console.log(`Good Morning ${name}!`);
  } else if (language === "French") {
    console.log(`Bonjour ${name}!`);
  } else {
    console.log(`Selamat pagi ${name}!`);
  }
}
greetingWithName("Adi Nugraha Putra", "English"); // Good Morning Adi Nugraha Putra!

console.log("========");

function multiply(a, b) {
  return a * b;
}
let result = multiply(10, 2);
console.log(result); // 20

function returnGreeting(name, language) {
  if (language === "English") {
    return `Good morning ${name}`;
  } else if (language === "Japan") {
    return `Ohayou Gozaimasu ${name}`;
  } else {
    return `Selamat Pagi ${name}`;
  }
}
let greetingReturn = returnGreeting("Harry", "Japan");
console.log(greetingReturn); // Ohayou Gozaimasu Harry
