const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
  console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");

/* Output : 
  Persiapan sebelum berangkat kegiatan.
  Hari ini hujan. Bawa payung.
  Berangkat kegiatan.
*/
console.log("============");

let x = 50;

if (x > 70) {
  console.log(x);
} else {
  console.log("Nilai kurang dari 70");
}
// Output : Nilai kurang dari 70

console.log("============");

let language = "French";
let greeting = "Selamat Pagi";

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour!";
} else if (language === "Japanese") {
  greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

/* Output:
Bonjour!
*/

console.log("===========");

// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log("Anda mendapatkan diskon sebesar " + discount * 100 + "%");

/* Output:
Anda mendapatkan diskon sebesar 0%
*/
