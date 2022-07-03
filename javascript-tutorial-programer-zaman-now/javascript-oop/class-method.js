class Plant {
  constructor(name) {
    this.name = name;
  }

  growth(name) {
    console.info(`the plant ${name} is growing`);
  }
}

const bugenvil = new Plant("Bugenvil");
console.info(bugenvil);
// TODO: call method growth
bugenvil.growth("Bugenvil");

const mawar = new Plant("Mawar");
console.info(mawar);
