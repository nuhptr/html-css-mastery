/* 
  window.alert();
  console.dir(window.document);
 */

const h1 = document.querySelector("h1");

h1.textContent = "Some New Title";
h1.style.color = "White";
h1.style.backgroundColor = "black";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + " (Changed!)";

const body = document.body;

const listItemElements = document.getElementsByTagName("li");

// for (const listItemEl of listItemElements) {
//   console.dir(listItemEl);
// }

// next element sibling
const ul = document.body.firstElementChild.nextElementSibling; // section element
const firstLi = ul.firstElementChild; // ul

console.log(firstLi);

// Style the DOM
const section = document.querySelector("section");
const button = document.querySelector("button");

// section.style.backgroundColor = "blue";
section.className = "red-bg";

button.addEventListener("click", () => {
  if (section.className === "red-bg visible") {
    section.className = "red-bg invisible";
  } else {
    section.className = "red-bg visible";
  }
});
