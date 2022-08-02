const names = ["Harry", "Ron", "Jeff", "Thomas"];

names.forEach((name) => console.log(`Hello ${name}`));
/* Hello Harry
Hello Ron
Hello Jeff
Hello Thomas */

// foreach tidak bisa menggunakan operator break atau continue
const names2 = ["Harry", "Ron", "Jeff", "Thomas"];

for (let i = 0; i < names2.length; i++) {
  if (names2[i] === "Jeff") continue; // Bisa!

  console.log(`Hello, ${names2[i]}!`);
  /* Hello, Harry!
  Hello, Ron!
  Hello, Thomas! */
}

/* names.forEach((name) => {
  if(name === 'Jeff') continue; // Tidak Bisa!
  console.log(`Hello, ${name}`);
}); */
