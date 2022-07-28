const user = {
  firstName: "Luke",
  lastName: "Shaw",
  age: 25,
  isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`); // Halo, nama saya Luke Shaw
console.log(`Umur saya ${user.age} tahun`); // Umur saya 25 tahun

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

// ubah nilai didalam object
spaceship.color = "Glossy Red";
spaceship["maxSpeed"] = 1300;
console.log(spaceship);

// Tambah member baru
spaceship.class = "Light freighter";
console.log(spaceship); // object bertambah { class : 'Light freighter' }

// Menghapus object
delete spaceship.manufacturer;
console.log(spaceship); // object manufacturer menghilang

/* 
{
  name: 'Millenium Falcon',
  // manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1300,
  color: 'Glossy Red',
  class : 'Light freighter'
} 
*/
