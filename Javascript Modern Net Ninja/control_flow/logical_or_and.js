// TODO: Operator AND (&&)
const password = "p@ssword1234";

if (password.length >= 12 && password.includes("@")) {
  console.log("the password mighty strong"); // execute
} else if (password.length >= 8) {
  console.log("the password long enough");
} else {
  console.log("the password is not long enough!");
}

// TODO: Operator OR (||)
const pass = "p@ss";
if (pass.length >= 8 || pass.includes("@")) {
  console.log(`the password strong enough include is ${pass}`); // execute
}

// TODO: Operator And execute First so Or operation
const password2 = "p@sss123";
if (
  password2.length >= 8 ||
  (password2.includes("@") && password2.length >= 5)
) {
  console.log("that password is strong enough!"); 
}
