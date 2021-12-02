const fs = require('fs');

function readFile() {
  try {
    const fileData = fs.readFileSync('data.json');
  } catch {
    console.log('Seems like an error!')
  }
  console.log('Hello there!');
}

readFile();

let fileData = 'Hello World!';
const fileData = 15;