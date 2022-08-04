/* 
  Method .catch() mirip seperti .then(). Namun, method ini hanya menerima satu parameter 
  function yang digunakan untuk rejected handler. Method catch() ini akan terpanggil ketika 
  objek promise memiliki kondisi onRejected. Berikut contoh penggunaan method .catch():
*/

checkStock()
  .then(handleSuccess)
  .catch(handleFailure);
