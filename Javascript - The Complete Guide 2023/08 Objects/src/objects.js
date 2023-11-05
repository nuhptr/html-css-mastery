// const movieList = document.getElementById("movie-list")

// movieList.style["background-color"] = "red"
// movieList.style.display = "block"

const person = {
   "first-name": "Max",
   age: 30,
   hobbies: ["Sports", "Cooking"],
   greet: () => alert("Hi there!"),
   1.5: "hello",
}

// ....
// person.age = 31
// person.age = null
// person.age = undefined
delete person.age

person.isAdmin = true
console.log(person) // {name: "Max", hobbies: Array(2), greet: ƒ, isAdmin: true}
console.log(person["first-name"]) // Max
console.log(person[1.5]) // hello
