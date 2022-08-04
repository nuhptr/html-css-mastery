const getCoffe = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;
    setTimeout(() => {
      if (seeds >= 10) {
        resolve("Kopi didapatkan!");
      } else {
        reject("Biji kopi habis!");
      }
    }, 1000);
  });
};

async function makeCoffe() {
  try {
    const coffe = await getCoffe();
    console.log(coffe);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeCoffe();
