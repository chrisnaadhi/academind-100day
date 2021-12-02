const fs = require("fs/promises");

async function readFile() {
  let fileData;

  //   fs.readFile("data.txt", function (error, fileData) {
  //     console.log("File Parsing done!");
  //     try {
  //       console.log(fileData.toString());
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   });

  try {
    fileData = await fs.readFile("data.txt")
  } catch (error) {
    console.log(error);
  }
  
  console.log("File Parsing done!");
  console.log(fileData.toString());

  console.log("Hello there!");
}

readFile();
