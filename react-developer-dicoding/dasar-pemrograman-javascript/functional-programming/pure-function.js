// Metode dilarang bergantung ke nilai luar
const hitungLuasLingkaran = (jari) => {
  return 3.14 * (jari * jari);
};

console.log(hitungLuasLingkaran(10)); // 314

// Dilarang keras mengubah nilai yang berada diluar baik secara sengaja maupun tidak sengaja
const createPersonWithAge = (person, age) => {
  return { ...person, age };
};

const person = {
  name: "Boho",
};

const newPerson = createPersonWithAge(person, 20);
console.log(newPerson); // { name: 'Boho', age: 20 }
