// Example 1
try {
  console.log("Awal blok try");
  errorCode;
  console.log("Akhir blok try");
} catch (err) {
  console.log("error");
}

// Output : 
// Awal blok try
// error

console.log("-------------");

// Example 2
try {
  console.log("Awal blok try");
  errorCode;
  console.log("Akhir blok try");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  //   console.log(error.stack);
}

// Output :
// Awal blok try
// ReferenceError
// errorCode is not defined

console.log("-------------");

// Example 3
try {
  console.log("Awal block try");
  console.log("Akhir block try");
} catch (error) {
  console.log("Baris ini diabaikan");
} finally {
  console.log("Akan tetap dieksekusi");
}

// Output
// Awal block try
// Akhir block try
// Akan tetap dieksekusi