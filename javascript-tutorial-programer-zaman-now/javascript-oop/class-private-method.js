class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  // TODO: make this method private
  #sayWithoutName() {
    return console.info(`hello you`);
  }

  #sayWithName(name) {
    return console.info(`hello ${name}`);
  }
}

let adi = new Person();
adi.say("budi"); // hello budi
