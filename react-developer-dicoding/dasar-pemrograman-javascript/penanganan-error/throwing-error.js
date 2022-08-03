let json = {
  name: "Yoda",
  age: 20,
};

try {
  let user = JSON.parse(JSON.stringify(json));

<<<<<<< HEAD
  console.log(user.name); // Yoda
  console.log(user.age); // 20
=======
  console.log(user.name);
  // console.log(user.age);
>>>>>>> 0a2e0894f039884817a042b5a6dd9f7cb7f8993d
} catch (error) {
  console.log(error.message);
  console.log(error.name);
}
