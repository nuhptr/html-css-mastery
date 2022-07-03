class MathUtil {
  // TODO: make this method have own class
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }

    return total;
  }
}

const sum = MathUtil.sum(1, 1, 1, 1, 1, 1, 1);
console.info(sum); // 7
