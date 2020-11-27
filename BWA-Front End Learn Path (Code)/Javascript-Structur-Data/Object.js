
let fruit = {
    name: 'grape',
    description: 'Popular and famous fruit',
    colors: ['purple', 'green'],
    isSmall: true,
    order: 1
}

console.log(fruit["isSmall"]) // true

// can access with this way
console.log(fruit.description) // Popular and famous fruit

let keys = Object.keys(fruit)
console.log(keys)
// { 'name', 'Description' , 'colors' , 'isSmall', 'order' }

let value = Object.values(fruit)
console.log(value)
// value object fruit

let entries = Object.entries(fruit)
console.log(entries)
// [
//   [ 'name', 'grape' ],
//   [ 'description', 'Popular and famous fruit' ],
//   [ 'colors', [ 'purple', 'green' ] ],
//   [ 'isSmall', true ],
//   [ 'order', 1 ]
// ]

// add a new data price
fruit.price = 250000
console.log(fruit)

// change the data name
fruit.name = "Manggo"
console.log(fruit)

// delete the data order
delete fruit.order
console.log(fruit)