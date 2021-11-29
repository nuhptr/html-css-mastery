// TODO: Break and Continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let index = 0; index < scores.length; index++) {
  console.log(`Your score is ${scores[0]}`);

  if (scores[index] === 0) {
    continue; // skip the value
  }

  if (scores[index] === 25) {
    console.log(`congrats, you got the top score!`);
    break; // done
  }
}
