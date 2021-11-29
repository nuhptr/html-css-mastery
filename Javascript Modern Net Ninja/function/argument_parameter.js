// TODO: Argument and Parameter
const speak = function (name = "adi", time = "night") { // default value
  console.log(`good day! ${name} ${time}`);
};

speak("Mario", "Morning");
speak();
