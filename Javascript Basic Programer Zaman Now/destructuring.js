const people = {
  firstName: "Adi",
  lastName: "Putra",
  address: {
    street: "Jalan belum ada",
    city: "Jakarta",
    country: "Indonesia",
  },
  hobby: "Game",
  channel: "Adi Nugraha Putra",
};

// ambil sesuai dalam object nama dan urutan harus sesuai
let { firstName, lastName } = people;

console.info(firstName); // Adi

//? Destructuring di Function Parameter
function displayPerson({ firstName, middleName, lastName }) {
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

const person = {
  firstName: "Eko",
  middleName: "Kurniawan",
  lastName: "Khannedy",
};

displayPerson(person);

//? destructuring default value
const names = ["Adi", "Nugraha"];
const [firstName, middleName, lastName = "Putra"] = names;

console.info(firstName);
console.info(middleName);
