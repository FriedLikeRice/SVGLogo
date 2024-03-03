const { Triangle, Circle, Square } = require('./lib/shapes');
const promptUser = require('./lib/userInput');
const writeToFile = require('./lib/fileWriter');

const run = async () => {
  try {
    const userInput = await promptUser();

    let shape;
    switch (userInput.shape.toLowerCase()) {
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
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

run();
