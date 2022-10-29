/* 
  window.alert();
  console.dir(window.document);
 */

// TODO: h1
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

// TODO: Style the DOM
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

// TODO: Adding element
const list = document.querySelector("ul");
const div = document.querySelector("div");

list.innerHTML = list.innerHTML + "<li>Item 4</li>";
list.innerHTML = list.innerHTML + "<li>Item 5</li>";

div.innerHTML = div.innerHTML + "<p>Thats great</p>";
div.insertAdjacentHTML("beforeend", "<p> Something went wrong!</p>");

// TODO: creating element via createElement()
const otherList = document.querySelector("ul");
const newLi = document.createElement("li");

// otherList.appendChild(newLi); // create new li
otherList.append(newLi);
newLi.textContent = "Item 6";
newLi.style.backgroundColor = "blue";

// TODO: clone node
const newLi2 = newLi.cloneNode(true);
list.append(newLi, newLi2);

// TODO: removing element
// list.remove();
newLi.remove();
