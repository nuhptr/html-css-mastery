// const coffe = new Promise();

const executorFunction = (resolve, reject) => {
  const isCoffeMakerReady = true;
  if (isCoffeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin kopi tidak bisa digunakan");
  }
};

const makeCoffee = () => {
  return new Promise(executorFunction);
};

const coffePromise = makeCoffee();
console.log(coffePromise); // Promise { 'Kopi berhasil dibuat' }

/* 
resolve() => parameter pertama pada executor function. 
Parameter ini merupakan fungsi yang dapat menerima satu parameter. 
Biasanya kita gunakan untuk mengirimkan data ketika promise berhasil dilakukan. 
Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari pending menjadi fulfilled.

reject() adalah parameter kedua pada executor function. Parameter ini merupakan fungsi 
yang dapat menerima satu parameter dan digunakan untuk memberikan alasan kenapa Promise 
tidak dapat terpenuhi. Ketika fungsi ini terpanggil, kondisi Promise akan berubah dari 
pending menjadi rejected.
*/
