// TODO: truty and falsy
//? OR -> Mengambil truty paling kiri
//? AND -> Mengambil truty paling kanan
console.info("0" && "NOL"); // NOL

console.info("Hello" || ""); // truty / falsy -> Hello
console.info("" || []); // falsy / truty -> []
console.info("0" || "NOL"); // truty / truty -> 0 (string)
console.info(0 || "NOL"); // NOL
console.info(null || "NULL"); // NULL
console.info(undefined || "undefined"); // undefined
console.info(0 || false); // false

const orang = {
  firstName: "",
  lastName: "Khannedy",
};

const names = orang.firstName || orang.lastName; // lastName get
console.info(names);
