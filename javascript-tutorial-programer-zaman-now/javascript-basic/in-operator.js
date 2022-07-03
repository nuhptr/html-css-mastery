const person = {
  firstName: "eko",
  lastName: "Khannedy",
};

if ("firstName" in person) {
  // must in string the key
  console.info("There are eko");
} else {
  console.info("Hello");
}

// undefined atau null akan tetap muncul
const student = {
  firstName: "Kevin",
  middleName: undefined,
  lastName: "Anggara",
};

if ("middleName" in student) {
  console.info(`hello ${student.middleName}`); // hello undefined
} else {
  console.info(`Hello Student`);
}
