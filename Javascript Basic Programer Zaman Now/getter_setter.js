const people = {
  firstName: "Adi",
  lastName: "Putra",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(val) {
    const array = val.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};
people.fullName = "Nugraha Putra";
console.info(people.fullName); // Nugraha Putra karena sudah di set
