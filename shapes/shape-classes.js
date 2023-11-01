/*
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
*/

class ovrShape {
  constructor(color) {
    this.color = color;
  }
  // makeColor(varColor){
  //   this.color = varColor;
  // }
}

class Circle extends ovrShape {
  constructor(color, circle){
    super(color);
    this.shape = circle;
  }
}

class Triangle extends ovrShape {
  constructor(color, triangle){
    super(color);
    this.shape = triangle;
  }
}

class Square extends ovrShape {
  constructor(color, square){
    super(color);
    this.shape = square;
  }
}


// const test = new Circle("blue", "circle")
// const test2 = new Triangle("orange", "triangle")
// const test3 = new Square("yellow", "square")
// console.log(test,"\n", test2,"\n", test3)

module.exports = {Circle, Triangle, Square};