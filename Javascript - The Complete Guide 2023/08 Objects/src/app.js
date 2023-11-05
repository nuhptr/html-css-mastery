"use strict"

const addMovieBtn = document.getElementById("add-movie-btn")
const searchBtn = document.getElementById("search-btn")

const movies = []

function renderMovies(filter = "") {
   const movieList = document.getElementById("movie-list")

   if (movies.length === 0) {
      movieList.classList.remove("visible")
      return
   } else {
      movieList.classList.add("visible")
   }
   movieList.innerHTML = ""

   //? FILTER MOVIES BY TITLE AND CONDITIONAL DATA RENDERz
   const filteredMovies = !filter ? movies : movies.filter((movie) => movie.info.title.includes(filter))

   filteredMovies.forEach((movie) => {
      const movieEl = document.createElement("li")
      const { info, ...otherProps } = movie //? OBJECT DESTRUCTURING
      console.log(otherProps) // {id: "0.123456789", info: {…}}

      // const { title: movieTitle } = info //? OBJECT DESTRUCTURING
      let { getFormattedTitle } = movie //? OBJECT DESTRUCTURING
      // getFormattedTitle = getFormattedTitle.bind(movie) //? BINDING METHOD TO OBJECT

      //? CALL => constructor (thisArg: any, ...argArray: any[]) => any
      //? APPLY => constructor (thisArg: any, argArray?: any[] | undefined) => any
      let text = getFormattedTitle.call(movie) + " - "
      for (const key in info) {
         // GET RESULT WHEN KEY IS NOT TITLE => title - [extraName]: [extraValue]
         if (key !== "title") text = text + `${key}: ${info[key]}`
      }
      movieEl.textContent = text
      movieList.append(movieEl)
   })
}

function addMovieHandler() {
   const title = document.getElementById("title").value
   const extraName = document.getElementById("extra-name").value
   const extraValue = document.getElementById("extra-value").value

   if (title.trim() === "" || extraName.trim() === "" || extraValue.trim() === "") return

   const newMovie = {
      id: Math.random().toString(),
      info: { title, [extraName]: extraValue },
      getFormattedTitle() {
         console.log(this)
         return this.info.title.toUpperCase()
      },
   }

   movies.push(newMovie)
   renderMovies()
}

function searchMovieHandler() {
   console.log(this) //? BIND TO THE DOM WHO TRIGGERED THE EVENT
   const filterTerm = document.getElementById("filter-title").value
   renderMovies(filterTerm)
}

addMovieBtn.addEventListener("click", addMovieHandler)
searchBtn.addEventListener("click", searchMovieHandler)
