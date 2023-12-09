//? SETS => store unique values of any type
const ids = new Set(["Hi", "From", "Sets"])
ids.add(2) // add a new value

if (ids.has("Hi")) ids.delete("Hi")

// looping the value of the set
for (const entry of ids.values()) {
   console.log(entry) // From Sets 2
}

//? MAPS => store key-value pairs of any type
const person1 = { name: "Max" }
const person2 = { name: "Manuel" }

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]])
personData.set(person2, [{ date: "two weeks ago", price: 100 }])

console.log(personData, "/") // Map(1) { { name: 'Max' } => [ { date: 'yesterday', price: 10 } ] }
console.log(personData.get(person1), "/") // [ { date: 'yesterday', price: 10 } ]

for (const [key, value] of personData.entries()) {
   // { name: 'Max' } [ { date: 'yesterday', price: 10 } ]
   // { name: 'Manuel' } [ { date: 'two weeks ago', price: 100 } ]
   console.log(key, value)
}

for (const key of personData.keys()) {
   // { name: 'Max' }
   // { name: 'Manuel' }
   console.log(key)
}

for (const value of personData.values()) {
   // [ { date: 'yesterday', price: 10 } ]
   // [ { date: 'two weeks ago', price: 100 } ]
   console.log(value)
}

console.log(personData.size) // 2
