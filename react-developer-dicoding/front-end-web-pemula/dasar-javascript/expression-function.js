// Expression function tidak memerlukan nama function

const greeting = function (name, language) {
  if (language === "English") {
    return `Good Morning ${name}!`;
  } else if (language === "Japan") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}`;
  }
};

console.log(greeting("zsazsa", "Japan")); // Bonjour zsazsa!
