const newMovies = {
   info: {
      set title(val) {
         if (val.trim() === "") {
            this._title = "DEFAULT"
            return
         }
         this._title = val
      },
      get title() {
         return this._title
      },
   },
}

newMovies.info.title = "TEST"
console.log(newMovies.info.title) // TEST

newMovies.info.title = ""
console.log(newMovies.info.title) // DEFAULT
