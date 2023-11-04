const codingLanguages = ["JavaScript", "Python", "Java", "C++", "C#"]

//? CONSTRUCTOR (currentValue, index, array)
const filteredLanguages = codingLanguages.filter((language) => language.includes("C"))

console.log(filteredLanguages) // [ 'JavaScript', 'C++', 'C#' ]
