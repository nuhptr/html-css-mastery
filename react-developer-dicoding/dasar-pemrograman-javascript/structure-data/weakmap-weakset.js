/* 
TODO: Varian dari map yang mendukung garbage collection
garbage collection adalah proses dimana interpreter javascript mengambil kembali memori 
yang tidak dapat digunakan oleh program. Dan dilakukan secara otomatis

yang dimaksud weak adalah referensi terhadap nilai yang disimpan. Apabila suatu nilai
yang disimpan di Weakmap sudah tidak terjangkau / tidak bisa diakses lagi, maka referensi
ke memorinya akan dihapus

Yang membedakan antara Map dan WeakMap : 
1.  key dari WeakMap harus berupa object / array. Nilai primitif tidak bisa digunakan sebagai key
    karena tidak mengandung garbage collection.

2.  WeakMap memiliki method get(), set(), has(), dan delete(). namun, WeakMap tidak termasuk kategori 
    iterable sehingga tidak memiliki method keys(), values(), atau forEach().

3.  WeakMap juga tidak memiliki properti size. ini karena ukuran WeakMap dapat berubah karena proses
    garbage collection.
*/

// Example : Map
let visitCountMap = new Map(); // menyimpan daftar user

function countUser(user) {
  let count = visitCountMap.get(user) || 0;
  visitCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // menambahkan user "Jonas"

jonas = null; // Data object "Jonas dihapus"

setTimeout(() => {
  console.log(visitCountMap);
}, 1000); // Map(1) { { name: 'Jonas' } => 1 } Data jonas masih tersimpan dimemori sampai benar - benar dihapus

// Example : WeakMap
const { inspect } = require("util");

let countVisitMap = new WeakMap(); // Menyimpan data user

function countVist(user) {
  let count = countVisitMap.get(user) || 0;
  countVisitMap.set(user, count + 1);
}

let nando = { name: "Nando" };
countVist(nando); // menambahkan user "Nando"

nando = null; // data object nando dihapus

setTimeout(() => {
  console.log(inspect(countVisitMap, { showHidden: true }));
}, 3000); // WeakMap { { name: 'Nando' } => 1 } data weakmap
