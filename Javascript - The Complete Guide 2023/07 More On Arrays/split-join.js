const data = "new york;10.99;2000"

const transformData = data.split(";")
transformData[1] = +transformData[1]

console.log(transformData) // [ 'new york', 10.99, '2000' ]

const nameFragments = ["Max", "Schwarz"]
const combineName = nameFragments.join(" ")

console.log(combineName) // Max Schwarz
