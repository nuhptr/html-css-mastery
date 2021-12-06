// TODO: Return with value
function sayHello(firstName, lastName) {
  const say = `Hello ${firstName} ${lastName}`;
  return say; // return value
}

sayHello("Adi Nugraha"); // Hello Adi Nugraha

// Menghetikan eksekusi dengan return
function isContains(array, searchValue) {
  for (const element of array) {
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

console.info(isContains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // true
