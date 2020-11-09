function createQueue() {
    const dataQueue = []

    // enqueue
    return {
        enqueue : function (value) {
            dataQueue.unshift(value)
        },
        // dequeue
        dequeue : function (value) {
            dataQueue.pop()
        },
        // peek
        peek : function () {
            return dataQueue[dataQueue.length - 1]
        },
        // size
        size : function () {
            return dataQueue.length
        }
    }
}

const q = createQueue()
q.enqueue("datascript for programmer")
q.enqueue("create code sample")
q.enqueue("Record data structure")
q.enqueue("vacation")

q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.peek())