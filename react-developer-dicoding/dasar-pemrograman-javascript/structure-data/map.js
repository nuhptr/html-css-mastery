const myMap = new Map([
  ["1", "A string key"],
  [1, "A number key"],
  [true, true],
]);

console.log(myMap);

/* Output: 
   Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Jepang"],
]);

console.log(capital.size); // 3
console.log(capital.get("London")); // England
capital.set("New Delhi", "India");
console.log(capital.size); // 4
console.log(capital.get("New Delhi")); // India
