let a = 10;
let b = 10;

// < kurang dari
console.log(a < b); // true

// > lebih dari
console.log(a > b); // false

// == apakah kedua nilai(tidak identik)
console.log(a == b); // false`

// (!=) apakah kedua nilai tidak sama (tidak identik)
console.log(a != b); // true

// === membandingkan nilai apakah keduanya identik
console.log(a === b); // nilainya harus sama dan identik => true

// !== membandingkan kedua nilai apakah tidak identik
console.log(a !== b); // false, karena kedua nilainya identik

// >= lebih dari sama dengan
console.log(a >= b); // true

// <= kurang dari sama dengan
console.log(a <= b); // true

// study case ===
const aString = "10";
const aNumber = 10;

console.log("-----------");
console.log(aString === aNumber); // false
console.log(aString == aNumber); // true -> karena keidentikannya tidak di check
