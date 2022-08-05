/*  
(&&)
Operator dan (and). Logika akan menghasilkan nilai true apabila 
semua kondisi terpenuhi (bernilai true).

(||)
Operator atau (or). Logika akan menghasilkan nilai true 
apabila ada salah satu kondisi terpenuhi (bernilai true).

(!)
Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.
*/

let a = 10;
let b = 20;

// TODO: AND Operator
console.log(a < 15 && b > 10); // true & true => true
console.log(a > 15 && b < 10); // false & true => false

// TODO: OR Operator
console.log(a < 15 || b > 10); // true || true => true
console.log(a > 15 || b > 10) // false || true => false
