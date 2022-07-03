class CounterIteratorResult {
  constructor(value, done) {
    this.value = value;
    this.done = done;
  }
}

class CounterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        return new CounterIteratorResult(this.value, true);
      } else {
        return new CounterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

class Count {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {
    return new CounterIterator(this.value, this.max);
  }
}

const counter = new Count(1, 10);
for (const element of counter) {
  console.info(element); // repeat from 1 until 10
}
