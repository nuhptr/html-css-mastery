let lastName;
lastName = "nurhasanah";

console.log(lastName);

// atau bisa juga seperti ini
let firstName = "zsazsa";
console.log(firstName);

/* let fullname = let lastname; error karena lastname adalah sebuah statement untuk deklarasi variable.
statement tidak bisa berada di posisi expression */

let fullName = (lastName = "Skywalker"); // true
let name = "Adi" + "Nugraha"; // true


const z = 100;
console.log(z) // 100
// z = 200 error assignment to constant variable