const people = {
  firstName: "Adi",
  middleName: "Nugraha",
  lastName: "Putra",
};

for (const peopleEat in people) {
  // Get the index
  console.log(`${peopleEat}`); // firstName, middleName, lastName;
}
