// TODO: object
const person = {};

// ubah property
person["nama"] = "Eko Kurniawan";
person["alamat"] = "Indonesia";
person["umur"] = 30;

console.log(person);
// { nama: 'Eko Kurniawan', alamat: 'Indonesia', umur: 30 }

delete person["umur"];
console.log(person);
// { nama: 'Eko Kurniawan', alamat: 'Indonesia' }

// TODO: create object with properties
const orang = {
  nama: "Eko Kurniawan",
  alamat: "Indonesia",
  umur: 30,
};

console.log(orang); // { nama: 'Eko Kurniawan', alamat: 'Indonesia', umur: 30 }

// TODO: Mengakses property object
const orang = {
  nama: "Eko kurniawan",
  alamat: "Indonesia",
  umur: 30,
};

console.info(`Nama: ${orang.nama}`); // Eko Kurniawan
console.info(`Alamat: ${orang.alamat}`); // Indonesia
console.info(`Umur: ${orang.umur}`); // 30
