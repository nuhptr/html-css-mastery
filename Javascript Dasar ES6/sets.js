var names = new Set();

/** cannot duplicate value in set
 *
 */
names.add("Adi").add("Ninja").add("Crystal").add("Adi");
//* { 'Adi', 'Ninja', 'Crystal' }
names.delete("Ninja");

/**
 * 2
 * Set(2) { 'Adi', 'Crystal' }
 */
console.log(names.size);
console.log(names);

var ninjas = ["sahur", "makan", "minum", "puasa", "puasa", "makan"];
var refinedNinjas = new Set(ninjas);

ninjas = [...refinedNinjas];

console.log(ninjas); // [ 'sahur', 'makan', 'minum', 'puasa' ] (object individual)
