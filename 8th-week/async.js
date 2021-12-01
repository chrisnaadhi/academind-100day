const fs = require("fs/promises");

function readFile() {
  let fileData;

  //   fs.readFile("data.txt", function (error, fileData) {
  //     console.log("File Parsing done!");
  //     try {
  //       console.log(fileData.toString());
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   });

  fs.readFile("data.txt")
    .then((fileData) => {
      console.log("File Parsing done!");
      console.log(fileData.toString());
    })
    .then(() => {
      console.log("NicE!");
    })
    .catch((err) => {
      console.log(err.message);
    });

  console.log("Hello there!");
}

readFile();
