//? for in loop

const person = {
   person1: { name: "Mosh", age: 30 },
   person2: { name: "John", age: 40 },
   person3: { name: "Doe", age: 50 },
};

for (let key in person) {
   console.log(key);
   console.log("---------");
   console.log(person[key].name);
   console.log(person[key].age);
}
