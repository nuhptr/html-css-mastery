// Functional Paradigma
const user = {
  firstName: "Harry",
  lastName: "Protter",
};

const createUserWithNewLastName = (user, newLastName) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewLastName(user, "Potter");
console.log(newUser);
