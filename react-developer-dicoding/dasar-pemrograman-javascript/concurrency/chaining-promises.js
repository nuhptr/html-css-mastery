const state = {
  stock: {
    coffeBeans: 250,
    water: 1000,
  },
  isCoffeMachineBusy: false,
};

// then first execution
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

// Second execution
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

// third execution
const brewCoffe = () => {
  console.log("Membuatkan kopi anda...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 2000);
  });
};

// call func makeExpresso first
function makeEspresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      return brewCoffe();
    })
    .then((value) => {
      console.log(value);
      state.isCoffeMachineBusy = false;
    })
    .catch((rejectedReason) => {
      // Menangkap jika ada error program
      console.log(rejectedReason);
      state.isCoffeMachineBusy = false;
    });
}

makeEspresso();
