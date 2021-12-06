class MathUtil {
  static sum(...numbers) {
    //   TODO: Make a error if wrong input
    if (numbers.length === 0) {
      const error = new Error("Parameter harus ada minimal 1");
      throw error;
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }

    return total;
  }
}

const sum = MathUtil.sum(1, 1, 1, 1, 1, 1, 1);
console.info(sum); // 7

console.info(MathUtil.sum()); // at console web check
