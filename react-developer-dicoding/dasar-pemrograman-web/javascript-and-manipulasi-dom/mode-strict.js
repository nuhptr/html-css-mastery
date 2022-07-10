// "use strict"; bisa digunakan didalam function juga
// x = 9; error karena variable belum dideklarasikan
// showAngka(); error karena belum dideklarasikan

function showAngka() {
  "use strict";
  let x = 9;
  console.log(x);
}

showAngka();
