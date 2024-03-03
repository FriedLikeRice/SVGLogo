const promptUser = require('./lib/utils/userInput');
const writeToFile = require('./lib/utils/fileWriter');
const Triangle = require('./lib/shapes/Triangle');
const Circle = require('./lib/shapes/Circle');
const Square = require('./lib/shapes/Square');

const run = async () => {
  const userInput = await promptUser();

  let shape;
  switch (userInput.shape) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape selected.');
      return;
  }

  shape.setColor(userInput.shapeColor);

  const svgCode = shape.render();
  writeToFile('logo.svg', svgCode);

  console.log('Generated logo.svg');
};

run();