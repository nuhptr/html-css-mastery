// global scope
let counter = 0;

// global scope
function hitMe(params) {
  // local scope
    let say = `Hai ${params}`
    return say;
    // counter++;
}

// global scope
function other(params) {
  // local scope
}

// say; error
