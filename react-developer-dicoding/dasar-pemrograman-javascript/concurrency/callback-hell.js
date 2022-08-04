// Example callback hell
function makeACake(...rawIngredients) {
  collectIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeTheCake)
    .then(console.log("Making cake"));
}

makeACake("Soup", "Rice", "Onion");
