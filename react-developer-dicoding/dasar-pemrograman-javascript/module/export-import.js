const coffeStock = require("./state");
const isCoffeMachineReady = require("./state");

const makeCoffe = (type, miligrams) => {
  if (coffeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffe("robusta", 80); // Kopi berhasil dibuat!
console.log(coffeStock);
console.log(isCoffeMachineReady);
