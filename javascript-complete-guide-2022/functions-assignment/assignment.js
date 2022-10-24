const sayHello = (name) => console.log("Hi " + name);

const sayHelloPhraseName = (name, phrase) => `${phrase} to ${name}`;
const sayHelloNoArguments = () => console.log("Hi hard-coded");
const sayHelloReturnOutput = (name) => `Hi ${name}`;

const sayHelloWithDefaultArgument = (name, phrase = "Hi") => {
  console.log(phrase + " " + name);
};

function checkInput(callback, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }

  if (!hasEmptyText) {
    callback();
  }
}

checkInput(sayHelloNoArguments, "2");
