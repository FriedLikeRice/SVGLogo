const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render method should return SVG code with the specified color', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle render method should return SVG code with the specified color', () => {
  const circle = new Circle();
  circle.setColor('red');
  expect(circle.render()).toEqual('<circle cx="150" cy="150" r="100" fill="red" />');
});

test('Square render method should return SVG code with the specified color', () => {
  const square = new Square();
  square.setColor('green');
  expect(square.render()).toEqual('<rect width="200" height="200" fill="green" />');
});