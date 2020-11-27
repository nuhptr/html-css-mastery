/* console.log("Hello Adi") // hello adi

var a = 5
var b = 10
console.log(a + b) // 15
console.log(a) // 5

function tambah(a,b) {
    return a + b
}

console.log(tambah(10,2)) // 12 */

const hero = require("superheroes")

for (let i =0; i<10; i++) {
    console.log(hero.random())
}

const nameHero =  hero.random()
console.log(nameHero)

console.log("==============")

const op = require("./module-tambah")
const moduleTambah = op.tambah(10,20)

console.log(moduleTambah)