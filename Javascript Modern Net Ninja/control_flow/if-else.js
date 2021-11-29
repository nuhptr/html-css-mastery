// TODO: If Statement
const age = 25;

if (age > 20) {
  console.log("you are over 20 years old"); // you are over 20 years old
}

const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];
if (ninjas.length > 3) {
  console.log("thats a lot of ninjas"); // tahts a lot of ninjas
}

// Else If Statement
const password = "p@ssword12345";
if (password.length >= 12) {
  console.log("the password is might strong"); // the passsword is might strong
} else if (password.length >= 8) {
  console.log("the password long enough");
} else {
  console.log("the passsword is not long enough");
}
