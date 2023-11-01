const addMovieModal = document.getElementById("add-modal")
const deleteMovieModal = document.getElementById("delete-modal")
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
// console.log(addMovieModal)
const backdropElement = document.getElementById("backdrop")

const startAddMovieButton = document.querySelector("header button")
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive")
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling // element after cancel button

const userInput = addMovieModal.querySelectorAll("input")
const entryTextSection = document.getElementById("entry-text")

backdropElement.addEventListener("click", backdropClickHandler)
startAddMovieButton.addEventListener("click", showMovieModal)

cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler)
confirmAddMovieButton.addEventListener("click", addMovieHandler)
