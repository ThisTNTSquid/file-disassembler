const fs = require("fs");
fs.readFile("a.png", (err, data) => {
  console.log(data);
  fs.writeFile("a.txt", data, err => {
    console.log("done");
  });
});
