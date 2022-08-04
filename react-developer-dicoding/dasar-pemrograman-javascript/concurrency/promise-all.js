// Theori 1 :
/* 
const promises = [firstPromise(), secondPromises(), thirdPromises()];

Promise.all(promises).then((resolvedValue) => {
  console.log(resolvedValue);
}); 
*/

// Example 1 :
const state = {
  stock: {
    coffeBeans: 250,
    water: 1000,
  },
  isCoffeMachineBusy: false,
};

// Then execute first
const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeMachineBusy) {
        resolve("Mesin kopi siap digunakan!");
      } else {
        reject("Maaf, mesin sedang sibuk");
      }
    }, 1000);
  });
};

// then execute second
const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeBeans >= 16 && state.stock.water >= 250) {
        resolve("Stok cukup. Bisa membuat kopi.");
      } else {
        reject("Stok tidak cukup!");
      }
    }, 1500);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Memanaskan air...");
    setTimeout(() => {
      resolve("Air panas sudah siap!");
    }, 2000);
  });
};

const grindCoffeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log("Menggiling biji kopi...");
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 1000);
  });
};

// Execute after promise.all() in make ekspresso.
const brewCoffe = () => {
  console.log("Membuatkan kopi anda...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 2000);
  });
};

// Run first time
async function makeExpresso() {
  try {
    const check = await checkAvailability();
    console.log(check);
    const stock = await checkStock();
    console.log(stock);
    const promise = await Promise.all([boilWater(), grindCoffeBeans()]);
    console.log(promise);
    const coffe = await brewCoffe();
    console.log(coffe);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeExpresso();

/* 
  Mesin kopi siap digunakan!
  Stok cukup. Bisa membuat kopi.
  Memanaskan air...
  Menggiling biji kopi...
  [ 'Air panas sudah siap!', 'Kopi sudah siap!' ]
  Membuatkan kopi anda...
  Kopi sudah siap!
*/
