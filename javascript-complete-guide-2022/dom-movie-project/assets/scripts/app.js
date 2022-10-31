const addMovieModal = document.getElementById("add-modal");
// get last element child in header
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = document.querySelector(".btn--passive");
const confirmAddMovieButton = document.querySelector(".btn--success");

const userInputs = document.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

function clearMovieInput() {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
}

function toggleBackdrop() {
  backdrop.classList.toggle("visible");
}

function backdropClickHandler() {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
}

function closeMovieModal() {
  addMovieModal.classList.remove("visible");
}

function showMovieModal() {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
} // function() {}

function cancelAddMovieHandler() {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
}

function updateUI() {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
}

function addMovieHandler() {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("please insert valid values (rating between 1 and 5.)");
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
}

function closeMovieDeletionModal() {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
}

function deleteMovieHandler(movieId) {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  closeMovieDeletionModal();
}

function startDeleteMovieHandler(movieId) {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  const confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  

  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
}

function renderNewMovieElement(id, title, imageUrl, rating) {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class='movie-element__image'>
    <img src='${imageUrl}' alt='${title}' />
  </div>
  <div class='movie-element__info'>
    <h2>${title}</h2>
    <p>${rating}</p>
  </div>
  `;
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
  );

  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
}

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
