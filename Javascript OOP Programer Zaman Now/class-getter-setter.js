class Electronic {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  get fullInfo() {
    return `${this.name} and ${this.year}`;
  }

  set fullInfo(value) {
    const result = value.split(" ");
    this.name = result[0];
    this.year = result[1];
  }
}

const tv = new Electronic("Panasonic", 2019);
console.info(tv);
console.info(tv.fullInfo);

// set new value
tv.fullInfo = "Samsung 2022";
console.info(tv);
