loopi: for (let i = 0; i < 10; i++) {
  loopj: for (let j = 0; j < 50; j++) {
    console.info(`${i} - ${j}`);
  }
}

//? Continue and break at label
loopi: for (let i = 0; i < 10; i++) {
  loopj: for (let j = 0; j < 50; j++) {
    if (j > 10) {
      continue loopi; // di skip dan dilanjutkan ke loop i
    }
    console.info(`${i} - ${j}`);
  }
}
