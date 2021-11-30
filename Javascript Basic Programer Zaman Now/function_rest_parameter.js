// Rest Parameter => ...
function sum(name, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }

  console.info(`total belanja ${name} adalah ${total}`);
}

sum("Orange", 10, 20, 30, 40, 50); // total belanja Orange adalah 150

// Spread syntac
sum("Banana", ...[10, 20, 30, 40, 50, 60]); // total belanja Banana adalah 210
