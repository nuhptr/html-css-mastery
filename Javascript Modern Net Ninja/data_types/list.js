let ninjas = ["shaun", "ryu", "chun-li"];

// ninjas[1] = "ken";
// console.log(ninjas)

let ages = [20, 25, 30, 35];
console.log(ages[2]); // 30

let random = ["shaun", "crystal", 30, 20];
console.log(random);

console.log(ninjas.length);

// array method
let join = ninjas.join("-");
console.log(join); // shaun-ryu-chun-li

let result2 = ninjas.indexOf("chun-li");
console.log(result2); // 2

let result3 = ninjas.concat(["ken", "crystal"]); // join the array
console.log(result3);

let result4 = ninjas.push("ken");
console.log(result4);

result4 = ninjas.pop();
console.log(result4)