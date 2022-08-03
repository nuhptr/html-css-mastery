let json = {
  name: "Yoda",
  age: 20,
};

try {
  let user = JSON.parse(JSON.stringify(json));

  console.log(user.name);
  // console.log(user.age);
} catch (error) {
  console.log(error.message);
  console.log(error.name);
}
