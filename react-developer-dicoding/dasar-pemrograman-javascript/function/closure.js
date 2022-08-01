// Example 1 :
let add = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

let addCounter = add();

console.log(addCounter()); // 1
console.log(addCounter()); // 2
console.log(addCounter()); // 3

// Example 2 :
function init() {
  let name = "Obi Wan"; // Variable lokal didalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikam di parent function
  }

  greet();
}

init(); // Halo, Obi Wan
