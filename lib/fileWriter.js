const fs = require('fs');

const writeToFile = (fileName, content) => {
  fs.writeFileSync(fileName, content);
};

module.exports = writeToFile;