const {Triangle, Square, Circle} = require("./shape-classes")

describe('Shapes', () => {
  describe('Triangle', () => {
    it('should create a triangle with a blue background color', () => {
      const shape = new Triangle("blue", "triangle");
      expect(shape.color).toEqual("blue");
    })
  })

  describe('Square', () => {
    it('should create a square with a blue background color', () => {
      const shape = new Square("blue", "square");
      expect(shape.color).toEqual("blue");
    })
  })

  describe('Circle', () => {
    it('should create a circle with a blue background color', () => {
      const shape = new Circle("blue", "circle");
      expect(shape.color).toEqual("blue");
    })
  })


})


/*
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
*/