// Bagaimana menangani suatu nilai yang didapatkan secara asynchronous
// pada program yang synchronous

const orderCoffe = (callback) => {
  let coffee = null;
  console.log("Sedang membuat kopi, silahkan tunggu...");
  setTimeout(() => {
    coffee = "Kopi sudah jadi!";
    callback(coffee);
  }, 3000);
};

orderCoffe((coffee) => {
  console.log(coffee);
});

/* 
  Sedang membuat kopi, silahkan tunggu...
  Kopi sudah jadi!
*/