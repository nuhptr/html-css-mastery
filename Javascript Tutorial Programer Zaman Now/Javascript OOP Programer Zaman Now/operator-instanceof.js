class Eat {}

class Food extends Eat {}

class Drink {}

const cocacola = new Drink();
const pizza = new Food();

console.info(cocacola instanceof Drink); // true
console.info(pizza instanceof Food); // true

console.info(pizza instanceof Eat); // true
