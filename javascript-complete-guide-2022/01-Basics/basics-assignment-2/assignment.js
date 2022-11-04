const task3Element = document.getElementById("task-3");

const greet = () => {
  alert("Hello assignment-2");
};

const greetUser = (name) => {
  alert(`Hi ${name}`);
};

const showNewBrand = (name1, name2, name3) => {
  const combine = `${name1} ${name2} ${name3}`;
  return alert(combine);
};

greetUser("zsazsa");
showNewBrand("toyota", "avanza", "daihatsu");
task3Element.addEventListener("click", greet);
