let chosenMaxLife

try {
   chosenMaxLife = parseInt(prompt("Maximum life for you and the monster.", "100"))
} catch (error) {
   console.log(error)
   chosenMaxLife = 100
   alert("You entered something wrong, default value of 100 was used.")
}
