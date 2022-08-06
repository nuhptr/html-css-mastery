function scoreChecker(score) {
  let result;

  if (score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A.";
  } else if (score >= 80) {
    result = "Selamat! Anda mendapatkan nilai B.";
  } else if (score >= 70) {
    result = "Selamat! Anda mendapatkan nilai C.";
  } else if (score >= 60) {
    result = "Selamat! Anda mendapatkan nilai D.";
  } else {
    result = "Selamat! Anda mendapatkan nilai E.";
  }

  return result;
}

console.log(checkScore(79)); // Selamat! Anda mendapatkan nilai C.
