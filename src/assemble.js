const path = require("path");
const fs = require("fs");

let main = (dir,ext) => {
  let index = fs.readFileSync(path.join(dir, "index.json"));
  index = JSON.parse(index);

  for (let i = 0; i < index.length; i++) {
    console.log(`Restoring ${i + 1} of ${index.length}`);
    let hexHead = index[i]
        .toString()
        .charAt(0) + index[i].toString().charAt(1);
    let content = fs.readFileSync(path.join(dir, hexHead, index[i] + ".txt"));
    fs.appendFileSync("output."+ext, content);
  }
};

module.exports = main;
