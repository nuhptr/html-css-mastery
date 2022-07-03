let firstName = null;

if (firstName === undefined) {
  console.info("Hello undefined");
} else if (firstName === null) {
  console.info("Hello null"); // execute
} else {
  console.info(`Hello ${firstName}`);
}
