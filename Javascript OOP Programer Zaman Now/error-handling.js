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

// TODO: error handling
try {
  console.info(MathUtil.sum()); // at console web check
  console.info("Eko");
} catch (error) {
  console.error(`${error}`); // Error: Parameter harus ada minimal 1
} finally {
  // finally block
  console.info("Program Selesai");
}

// TODO: Try - Finally
class Counter {
  #counter = 0;

  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}
