const fs = require('fs');

const writeToFile = (filename, data) => {
  try {
    fs.writeFileSync(filename, data);
  } catch (error) {
    console.error('An error occurred while writing to file:', error.message);
    throw error;
  }
};

module.exports = writeToFile;
