// TODO: Operator Logika (&&, ||, !)
const nilaiUjian = 70;
const nilaiAbsen = 70;

const lulusUjian = nilaiUjian > 75; // false
const lulusAbsensi = nilaiAbsen > 75; // false

const lulus = lulusUjian && lulusAbsensi;
console.log(lulus); // false -> keadaan tidak terpenuhi
console.log(!lulus); // true