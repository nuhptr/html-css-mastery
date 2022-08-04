try {
  // ...
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error : ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
