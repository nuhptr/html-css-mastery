// TODO: generator => *
function* createName() {
  yield "Eko";
  yield "Kurniawan";
  yield "Khannedy";
}

// console.log(createName()); // iterable gabisa di akses menggunakan index
const names = createName();
for (const name of names) {
  console.info(name); // ditampilkan sebanyak yieldnya
}

// Lazy Evaluation
function* buatGanjil(value) {
  for (let i = 0; i < value; i++) {
    if (i % 2 === 1) {
      console.info(`yield ${i}`);
      yield i;
    }
  }
}

const number = buatGanjil(10);
// for (const num of number) {
//   console.info(num);
// }

// Yield satu kali
console.info(number.next().value);
// yield 1
// 1
