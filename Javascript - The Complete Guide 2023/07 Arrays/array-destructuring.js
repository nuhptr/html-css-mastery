const nameData = ["Max", "Schwarz"]
// const firstName = nameData[0]
// const lastName = nameData[1]

const [firstName, lastName, ...otherInformation] = nameData
console.log(firstName, lastName)
