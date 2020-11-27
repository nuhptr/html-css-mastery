function foo(x = 0,y,z) {
    return x + 1
}

console.log(foo(1)); // 1 + 1

const foo1 = (x = 0) => {
    return x + 1
};

console.log(foo1()); // 0 + 1


function addSquares(a, b) {
    function square(x) {
        return x * x 
    }

    return square(a) + square(b);
}

console.log(addSquares(1,2)); 
// a -> 1 * 1 : 1
// b -> 2 * 2 : 4
// hasilnya 5

function loop(x) {
    if (x >= 10) return;
    console.log(x);
    loop(x+1)
}

loop(1) // recursive function