const fs = require('fs');

function saveData(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function readData(filePath) {
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath));
  }
  return {};
}

module.exports = { saveData, readData };