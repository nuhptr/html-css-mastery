function outer() {
  function inner() {}

  inner();
  inner();
}

outer();
// inner();  Error : inner is not defined
