const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render method should return SVG code with the specified color', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Similar tests for Circle and Square
