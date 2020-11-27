const iceCream = 5 % 2;

// comparasi operator
if (iceCream == 2) {
    console.log(iceCream); // 1
} else {
    console.log("iceCream tidak sama dengan 2"); // karena tidak sama dengan 2
}

// unary operator
let angka = "5";

console.log(-angka); // -5
console.log(--angka); // 4
console.log(++angka); // 5
 
// logical comparasi
const number = 10;
const sayaSukaEsKrim = false;
const sayaSukaHumberger = false;
const nama = "Adi Nugraha Putra";

if (sayaSukaEsKrim || sayaSukaHumberger) {
    console.log("hmm yummy");
} else {
    console.log("hmm wrong logic"); // <- execute
}

console.log(!number); // jadi false

// harus menggunakan tanda ``
console.log(`${nama}`); // Adi Nugraha Putra
