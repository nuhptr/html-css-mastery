// fungsi ini akan menghasilkan nilai boolean
// TODO: arr.some(callback(element, [index], [array]), [thisArg])
// [...] => adalah optional parameter

const array = [1, 2, 3, 4, 5];
const even = array.some((element) => element % 2 === 0);

console.log(even); // true
