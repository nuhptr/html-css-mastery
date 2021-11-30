// TODO: Function haven't name
let say = function (name) {
  console.info(name);
};

say("Adi"); // Adi

// Annonmous Function di Parameter
function giveMeName(callback) {
  callback("Eko");
}

giveMeName(function (name) { // insert annonymous to params
  console.info(`Hello ${name}`); // Hello Eko
});
