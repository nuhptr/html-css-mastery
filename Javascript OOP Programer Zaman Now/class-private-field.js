class Counter {
  // TODO: make this property private
  #counter = 0;

  increment() {
    this.#counter += 1;
  }

  decrement() {
    this.#counter -= 1;
  }

  get() {
    return `value : ${this.#counter}`;
  }
}

let counter = new Counter();
// Increment 2 times
counter.increment();
counter.increment();

console.info(counter.get()); // value = 2
console.info(counter);
