function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, My name is ${this.firstName}`);
  };
}

const eko = new Person("Eko", "Khannedy");
// Memodifikasi instance object eko dan tidak ada di object budi
eko.sayGoodBye = function () {
  console.info(`Good Bye`);
};

// cara lain: tambahkan ke prototypenya
Person.prototype.sayBye = function () {
  console.info("Good Bye");
};

Person.prototype.run = function () {
  console.info(`${this.firstName} is running`);
};

const budi = new Person("Budi", "Nugraha");
// walaupun ada di prototype yang di cek di instance dulu
budi.sayBye = function () {
  console.info(`Sampai Jumpa`);
};

budi.sayBye(); // Sampai Jumpa
budi.run(); // Budi is running

console.log(eko);
console.log(budi); // _proto_ -> menandakan bahwa mewarisi sifat parent
