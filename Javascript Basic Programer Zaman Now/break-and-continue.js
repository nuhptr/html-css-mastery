//? Break
let counter = 1;
while (true) {
  console.info(`perulangan ke ${counter}x`);
  counter++;

  if (counter > 10) {
    break; // Finish
  }
}

//? Continue
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    continue; // Skip bilangan genap (even number)
  }
  console.info(`perulangan ganjil ke ${i}`);
}
