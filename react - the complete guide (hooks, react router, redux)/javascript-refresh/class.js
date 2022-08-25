class Human {
  // TODO: constructor just this
  gender = "female";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  gender = "male";
  name = "Max";

  // TODO: using arrow function
  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName(); // max

person.printGender(); // male
