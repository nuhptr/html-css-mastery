class Course {
   #price // private property

   // create getter setter
   set price(value) {
      if (value < 0) return 0
      this.#price = value
   }

   get price() {
      return `$${this.#price}`
   }

   constructor(title, length, price) {
      this.title = title
      this.length = length
      this.#price = price
   }

   calculateValue() {
      return this.length / this.#price
   }

   printSummary() {
      console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.#price}`)
   }
}

const course1 = new Course("Javascript", 20, 200)
const course2 = new Course("React", 30, 300)

course1.printSummary()
course2.printSummary()

class PracticalCourse extends Course {
   constructor(title, length, price, numOfExercises) {
      super(title, length, price)
      // property that inisiate in constructor
      this.numOfExercises = numOfExercises
   }
}

const angularCourse = new PracticalCourse("Angular", 40, 400, 10)
console.log(angularCourse.calculateValue())

class TheoreticalCourse extends Course {
   publish() {
      console.log("Publishing...")
   }
}

const reactCourse = new TheoreticalCourse("React", 30, 300)
reactCourse.publish()
reactCourse.printSummary()
