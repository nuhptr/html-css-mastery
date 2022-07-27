const isRaining = true;

console.log("Persiapan sebelum berangkat kejadian.");
if (isRaining) {
  console.log("hari ini hujan, bawa payung");
}

console.log("Berangkat kegiatan");

// output : Persiapan sebelum berangkat kejadian.
// hari ini hujan, bawa payung
// Berangkat kegiatan

let x = 50;

if (x > 70) {
  console.log(x);
} else {
  console.log("nilai kurang dari 70");
}

// nilai kurang dari 70

let language = "French";
let greeting = "Selamat Pagi";

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour!";
} else if (language === "Japanese") {
  greeting = "Ohayou Gozaimasu";
}

// output: Bonjour

// TODO: Ternary operator
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`anda mendapatkan diskon sebesar ${discount * 100}%`);

// TODO: truthy and falsy
/* number 0
BigInt 0n
String kosong seperti """" atau ""
null
undefined
NaN atau not a number */