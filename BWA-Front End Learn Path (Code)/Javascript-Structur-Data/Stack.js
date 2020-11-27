function createStack() {
    let array = []
    return {
        // push
        push: function (item) {
            array.push(item)
        },
        // pop
        pop: function () {
            array.pop()
        },
        // peek
        peek: function () {
          return array[array.length - 1]
        },
        // size
        size: function () {
            return array.length
        }
    }
}

const bookStack = createStack()
bookStack.push("The Effective Engineer")
bookStack.push("Architecture software")
bookStack.push("the wrong way engineer")

console.log(bookStack.peek()) // lash push book
bookStack.pop()
console.log(bookStack.size())