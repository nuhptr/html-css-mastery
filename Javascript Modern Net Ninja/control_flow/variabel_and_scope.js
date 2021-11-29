// TODO: varibel & block scope
// different scope
let age = 30;
let names = "Paijo";

if (true) {
  // scope inside different value with outside
  let age = 40;
  let names = "Shaun";
  console.log("Inside 1st code block:", age, names); // age = 40 Shaun

  if (true) {
    let age = 50;
    console.log("Inside 2nd code block", age);
  }
}

console.log("outside code block:", age, names); // age = 30 Paijo
