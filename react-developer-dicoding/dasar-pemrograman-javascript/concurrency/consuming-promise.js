const stock = {
  coffeBeans: 250,
  water: 1000,
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeBeans >= 16 && stock.water >= 250) {
      resolve("Stock cukup, Bisa membuat kopi");
    } else {
      reject("Stock tidak cukup");
    }
  });
};

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

checkStock().then(handleSuccess, handleFailure); // Stock cukup, Bisa membuat kopi


/* 
checkStock() merupakan fungsi yang mengembalikan promise dan akan menghasilkan resolve() 
dengan membawa nilai “Stok cukup. Bisa membuat kopi”.

Lalu kita mendeklarasikan fungsi handleSuccess() dan handleFailure() yang mencetak nilai dari parameternya.

Kemudian kita memanggil method .then() dari checkStock. Isi parameter then() dengan dua fungsi 
handler yang telah kita buat sebelumnya.

Parameter pertama berisi fungsi handleSuccess untuk menangani kondisi ketika promise berstatus resolve. 
Parameter kedua berisi fungsi handleFailure yang menangani ketika promise berstatus reject.
*/