class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateNumberInput(num1, num2, num3) {
  if (typeof num1 !== "number") {
    throw new ValidationError("Argumen pertama harus number");
  } else if (typeof num2 !== "number") {
    throw new ValidationError("Argumen kedua harus number");
  } else if (typeof num3 !== "number") {
    throw new ValidationError("Argumen ketika harus number");
  } else {
    console.log("Harus ada inputan");
  }
}

const detectTriangle = (a, b, c) => {
  try {
    validateNumberInput(a, b, c);

    if (a === b && b === c) {
      return "Segitiga sama sisi";
    }

    if (a === b || a === c || b === c) {
      return "Segitiga sama kaki";
    }

    return "Segitiga sembarang";
  } catch (error) {
    console.log(error.message);
  }
};

detectTriangle(1, false, 3);