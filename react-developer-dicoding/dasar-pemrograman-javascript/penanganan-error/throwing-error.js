let json = {
  name: "Yoda",
  age: 20,
};

try {
  let user = JSON.parse(JSON.stringify(json));

  console.log(user.name); // Yoda
  console.log(user.age); // 20
} catch (error) {
  console.log(error.message);
  console.log(error.name);
}

console.log("-------------");

// Example 2
let json2 = { age: 20 };

try {
  let user = JSON.parse(JSON.stringify(json2));
  console.log(user.name); // undefined
  console.log(user.age); // 20
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

console.log("------------");

// Example 3
let json3 = '{ "age": 20 }';

try {
  let user = JSON.parse(json3);

  if (!user.name) { // kena di syntak ini
    throw new SyntaxError("'name' is required");
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(`JSON Error : ${error.message}`);
}
