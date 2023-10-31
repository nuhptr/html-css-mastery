window.alert("Hello World!")

//? WINDOW OBJECT
console.dir(window.document)

const h1 = document.querySelector("h1")
const li2 = document.querySelector("li")[2]
const list = document.querySelector("#list")

h1.textContent = "Some new title!"
h1.style.color = "white"
h1.style.backgroundColor = "black"

//? SET ATTRIBUTE
h1.setAttribute("class", "title")
h1.setAttribute("style", "color: red;")

const lastLi = list.querySelector("li:last-of-type")
lastLi.textContent = lastLi.textContent + " (Changed!)"
// set class
lastLi.className = "title"

// const allListItems = document.querySelectorAll("li")
const allListItems = document.getElementsByTagName("li")
for (const allLi of allListItems) {
   console.dir(allLi)
}
//? DOM TRAVERSAL
const ul = document.querySelector("ul")
console.log(ul.previousElementSibling) // <header>...</header>
console.log(ul.nextSibling) // #text
console.log(ul.nextElementSibling) // <footer>...</footer>
console.log(ul.childNodes) //? [text, li, text, li.list-item, text, li.list-item, text]

console.log("==============")

//? STYLING DOM
const footer = document.querySelector("footer")
const button = document.querySelector("button")

footer.style.backgroundColor = "blue"

button.addEventListener("click", () => {
   // footer.classList.toggle("visible")
   footer.classList.toggle("invisible")
})
