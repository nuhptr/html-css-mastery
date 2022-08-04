// setTimeout() merupakan cara yang paling mudah untuk membuat kode kita dijalankan secara asynchronous
console.log("Selamat datang");
setTimeout(() => {
  console.log("Terima kasih sudah mampir, silahkan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu");

/* 
  Selamat datang
  Ada yang bisa dibantu
  Terima kasih sudah mampir, silahkan datang kembali!
*/
