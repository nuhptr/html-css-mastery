// TODO: Callback and Foreach
const myFunc = (callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value);
};

myFunc(function (value) {
  // do something
  console.log(value); // 50
});

// Foreach
let people = ['marion', 'luigi', 'ryu', 'shaun', 'chun-li']

people.forEach((person, index) => {
    console.log(index, person)
})
