import { coffeeStock, isCoffeMachineReady } from "./es6-state.js";

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);
/* output : 
arabica
robusta
liberica*/
console.log(isCoffeMachineReady); // true
