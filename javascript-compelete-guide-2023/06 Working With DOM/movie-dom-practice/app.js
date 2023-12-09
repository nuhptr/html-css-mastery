const movies = []

//? CLEAR INPUTS
function clearMovieInput() {
   for (const usrInput of userInput) {
      usrInput.value = ""
   }
}

//? TOGGLE BACKDROP
function toggleBackdrop() {
   return backdropElement.classList.toggle("visible")
}

function backdropClickHandler() {
   closeMovieModal()
   closeMovieDeletionModal()
   clearMovieInput()
}

//? MODAL
const showMovieModal = () => {
   // function() {}
   addMovieModal.classList.add("visible")
   toggleBackdrop()
}

function closeMovieModal() {
   return addMovieModal.classList.remove("visible")
}

const closeMovieDeletionModal = () => {
   toggleBackdrop()
   deleteMovieModal.classList.remove("visible")
}

const cancelAddMovieHandler = () => {
   closeMovieModal()
   toggleBackdrop()
   clearMovieInput()
}

//? ADD MOVIE INPUT TO ARRAY
function addMovieHandler() {
   const titleValue = userInput[0].value
   const imageUrlValue = userInput[1].value
   const ratingValue = userInput[2].value

   if (
      titleValue.trim() === "" ||
      imageUrlValue.trim() === "" ||
      ratingValue.trim() === "" ||
      +ratingValue < 1 ||
      +ratingValue > 5
   ) {
      alert("Please enter valid values (rating between 1 and 5).")
   }

   const newMovies = { id: Math.random().toString(), title: titleValue, image: imageUrlValue, rating: ratingValue }
   movies.push(newMovies)
   closeMovieModal()
   toggleBackdrop()
   clearMovieInput()

   renderNewMovieElement(newMovies.id, newMovies.title, newMovies.image, newMovies.rating)
   updateUI()
}

//? DELETE MOVIE
function deleteMovieHandler(movieId) {
   let movieIndex = 0

   for (const movie of movies) {
      if (movie.id === movieId) break
      movieIndex++
   }

   movies.splice(movieIndex, 1) // remove 1 element from array
   const listRoot = document.getElementById("movie-list")
   listRoot.children[movieIndex].remove()
   closeMovieDeletionModal()
}

const confirmDeleteMovieHandler = (movieId) => {
   deleteMovieModal.classList.add("visible")
   toggleBackdrop()

   const cancelDeleteMovieButton = deleteMovieModal.querySelector(".btn--passive")
   let confirmDeleteMovieButton = deleteMovieModal.querySelector(".btn--danger")

   confirmDeleteMovieButton.replaceWith(confirmDeleteMovieButton.cloneNode(true))
   confirmDeleteMovieButton = deleteMovieModal.querySelector(".btn--danger")

   cancelDeleteMovieButton.removeEventListener("click", closeMovieDeletionModal)

   cancelDeleteMovieButton.addEventListener("click", closeMovieDeletionModal)
   confirmDeleteMovieButton.addEventListener("click", deleteMovieHandler.bind(null, movieId))
   //    deleteMovie(movieId)
}

//? UPDATE UI
function updateUI() {
   if (movies.length === 0) entryTextSection.style.display = "block"
   else entryTextSection.style.display = "none"
}

//? RENDER MOVIE
function renderNewMovieElement(id, title, imageUrl, rating) {
   const newMovieElement = document.createElement("li")
   newMovieElement.className = "movie-element"
   newMovieElement.innerHTML = `
            <div class="movie-element__image">
                <img src="${imageUrl}" alt="${title}" />
            </div>
            <div class="movie-element__info">
                <h2>${title}</h2>
                <p>${rating}/5 stars</p>
            </div>
        `

   newMovieElement.addEventListener("click", confirmDeleteMovieHandler.bind(null, id))
   const listRoot = document.getElementById("movie-list")
   listRoot.append(newMovieElement)
}
