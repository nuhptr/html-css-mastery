var nama = "Crystal";
var belt = "Black";

var ninja = {
  nama,
  belt,
  chop: function (x) {
    console.log(`you chopped the enemy ${x} times`);
  },
};

console.log(ninja.nama); // crystal
console.log(ninja.chop(5)); // you chopped the enemy 5 times
