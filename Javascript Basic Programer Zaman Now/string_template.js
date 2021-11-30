// TODO: String Template -> ${}
const names = "Adi Nugraha Putra";
const age = 20;
const template = `Name: ${names}, age: ${age}`;

// .info (info), .log (menampilkan), .error (eror), .debug, .warn (peringatan)
console.log(template); // name: Adi Nugraha Putra, age: 20

// expression in string template
const nilai = 90;
const template2 = `name: ${names}, Lulus: ${nilai > 75}`;

console.log(template2); // name: Adi Nugraha Putra, Lulus: true

// Multiline String
let multiline = `nama saya adi
dirumah aja
mau makan
oke sekian`;
