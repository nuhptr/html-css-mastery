function log(num = 10) {
  console.log(num);
}

log(); // return default value of num 10
log(20); // value num = 20

function logNinja(name = "adi", belt = "black", age = 25) {
  console.log(
    "My name is " +
      name +
      " and my belt colour is " +
      belt +
      " and my age is " +
      age
  );
}

logNinja(); // using default value except change it "my name is adi and my belt colour is black and my age is 25"
logNinja("Maria", "Gray", 21); // change the value
