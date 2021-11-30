// TODO: memunculkan pilihan
const masuk = confirm("Anda yakin mau masuk?");
if (masuk) {
  const name = prompt("Siapa nama anda?");
  alert(`hello ${name}`);
} else {
  alert(`Bye Bye`);
}
