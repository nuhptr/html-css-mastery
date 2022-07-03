function register(name, gender = "Not Choose") {
  console.info(name);
  console.info(gender);
}

register(); // undifined, not choose
register("Adi", "Male");
