function createAdder(value) {
    const owner = "Adi";

    function add(params) {
        console.info(owner);
        return value + params;
    }

    return add;
}

const addTwo = createAdder(2);
// function addTwo(params) {
// console.info("Eko")
// return 2 + param
// }