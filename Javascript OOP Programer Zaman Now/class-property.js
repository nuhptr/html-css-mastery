class Home {
  constructor(nameHome) {
    // TODO: create new property
    this.name = nameHome;
  }
}

const apartement = new Home("Apartement");
console.info(apartement);
// access apartement name
console.info(apartement.name);
