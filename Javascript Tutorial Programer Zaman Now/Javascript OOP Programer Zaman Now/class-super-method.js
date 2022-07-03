class Shape {
  paint() {
    console.info("Paint Shape");
  }
}

class Circle extends Shape {
  paint() {
    super.paint(); // -> manggil yang method parentnya juga "Paint Shape"
    console.info("Paint Circle");
  }
}

const circle = new Circle();
circle.paint();
