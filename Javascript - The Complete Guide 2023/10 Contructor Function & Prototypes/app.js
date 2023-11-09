//? LAST LEARN (OOP)
// class Person {
//    name = "Max"

//    constructor() {
//       this.age = 30
//    }

//    greet() {
//       console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`)
//    }
// }

function Person() {
   this.age = 30
   this.name = "Max"
   this.greet = () => console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`)
}

Person.prototype = {
   printAge() {
      console.log(this.age)
   },
}

console.dir(Person)

const p = new Person()
p.greet() // Hi, I am Max and I am 30 years old.
p.printAge() // 30

console.log(p.__proto__)
