function init() {
  let name = "Obi Wan"; // Variable lokal didalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikam di parent function
  }

  greet();
}

let myFunction = init(); 
myFunction(); // Halo, Obi Wan
