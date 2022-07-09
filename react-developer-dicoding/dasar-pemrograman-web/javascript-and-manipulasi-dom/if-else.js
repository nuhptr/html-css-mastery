// TODO: Contoh 1
let x = 50;

if (x > 70) {
  console.log(x);
} else {
  console.log("Nilai kurang dari 70");
}

// output : nilai kurang dari 70

// TODO: Contoh 2
let language = "English";
let greeting = "Selamat Pagi!";

if (language === "English") {
  greeting = "Good Morning!";
}
// block else bersifat optional untuk dituliskan

console.log(greeting); // Good Morning!

// TODO: Contoh 3
let language2 = "French";
let greeting2 = "Selamat Pagi";

if (language2 === "English ") {
  greeting2 = "Good Morning!";
} else if (language2 === "French") {
  greeting2 = "Bonjour";
} else if (language2 === "Japanese") {
  greeting2 = "Ohayougozaimasu";
}

console.log(greeting2); // Bonjour
