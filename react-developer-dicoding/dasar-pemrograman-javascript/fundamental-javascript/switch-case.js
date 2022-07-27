let language = "INDONESIA";
let greeting = null;

switch (language) {
  case "ENGLISH":
    greeting = "Good Morning!";
    break;
  case "INDONESIA":
    greeting = "Selamat Pagi!";
    break;
  default:
    greeting = "No Greeting";
    break;
}

// output : Selamat Pagi!
