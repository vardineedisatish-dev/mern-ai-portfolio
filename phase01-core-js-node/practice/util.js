
const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

async function readData() {
  try {
    const data = await readFile('sample.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readData();
