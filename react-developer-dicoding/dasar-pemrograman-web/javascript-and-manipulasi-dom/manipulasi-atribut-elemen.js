// run in console web
let image;
image = document.querySelector("#catImage");
image.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg");

let changeCaption;
changeCaption = document.querySelector("#caption");
changeCaption.innerHTML = "<em>Tiga anak kucing</em>";

// membuat elemen baru
let newElement;
newElement = document.createElement("p");
newElement.innerHTML =
  'Anda menekan gambar kucing sebanyak <span id="count">0</span> kali';

document.body.appendChild(newElement);

image.addEventListener("click", function (event) {
  document.querySelector("#count").innerText++;
});
