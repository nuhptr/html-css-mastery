const hobbies = ["Sports", "Cooking"]

//? TRANSFORMING DATA WITH MAP()
const newHobby = hobbies.map((hobby) => {
   return "Hobby: " + hobby
})

console.log(newHobby) // [ 'Hobby: Sports', 'Hobby: Cooking' ]
