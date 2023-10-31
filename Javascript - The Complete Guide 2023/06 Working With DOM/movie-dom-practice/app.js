const addMovieModal = document.getElementById("add-modal")
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
// console.log(addMovieModal)
const backdropElement = document.getElementById("backdrop")

const startAddMovieButton = document.querySelector("header button")
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive")

const toggleBackdrop = () => {
   backdropElement.classList.toggle("visible")
}

const toggleMovieModal = () => {
   addMovieModal.classList.toggle("visible")
   toggleBackdrop()
}

const cancelMovieHandler = () => {
   toggleMovieModal()
}

const backdropClickHandler = () => {
   toggleMovieModal()
}

startAddMovieButton.addEventListener("click", toggleMovieModal)
backdropElement.addEventListener("click", backdropClickHandler)
cancelAddMovieButton.addEventListener("click", cancelMovieHandler)
