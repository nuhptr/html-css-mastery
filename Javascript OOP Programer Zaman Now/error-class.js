// TODO: create manual error class
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}


