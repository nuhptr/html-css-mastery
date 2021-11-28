function* gen() {
  yield console.log("pear");
  yield console.log("banana");
  yield console.log("apple");
  console.log("All done");
}

var myGen = gen();
// Appear the data with keyword yield
myGen.next(); // pear
myGen.next(); // banana
