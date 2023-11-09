function Person() {
   this.age = 30
   this.name = "Max"
   this.greet = () => console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`)
}

// Person.prototype = {
//    printAge() {
//       console.log(this.age)
//    },
// }

Person.describe = function () {
   console.log("Creating persons...")
}

Person.prototype.printAge = function () {
   console.log(this.age)
}

console.dir(Person)

const p = new Person()
p.greet() // Hi, I am Max and I am 30 years old.
p.printAge() // 30

console.log(p.length) // undefined
console.log(p.toString())

const p2 = new p.__proto__.constructor()
console.log(p2) // Person {age: 30, name: "Max", greet: ƒ}
console.dir(Object.prototype.__proto__) // null
