function callback(call) {
  console.log(call);
}

var fruits = ["banana", "apple", "pear"];

fruits.forEach(callback); // banana, apple, pear

$.get("data/tweets.json", function (data) {
    console.log(data)
})
