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

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}
