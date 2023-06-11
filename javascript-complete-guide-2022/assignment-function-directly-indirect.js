// Todo: Your solution code goes here
function double(num) {
   return num * 2;
}

function transform(num, fn) {
   const result = fn(num);
   return console.log(result); // 20
}

transform(10, double);
