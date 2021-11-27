var ninjaGreeting = (name) => console.log(`${name} says hiyaaaa`);

ninjaGreeting("Mark"); // mark says hiyaa

var ninja = {
  name: "Ryu",
  chop(x) {
    var _this = this;
    window.setInterval(() => {
      if (x > 10) {
        console.log(_this.name + " Chopped the enemy ");
        x--;
      }
    }, 1000);
  },
};

ninja.chop(10);
