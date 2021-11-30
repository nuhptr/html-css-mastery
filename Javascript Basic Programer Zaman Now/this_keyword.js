const person = {
  name: "Eko",
  sayHello: function (name) {
    console.info(`hello ${name}, my name is ${this.name}`);
  },
};

person.sayHello("Adi"); // hello adi, my name is Eko
