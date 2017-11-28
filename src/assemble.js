const path = require("path");
const fs = require("fs");

let main = (dir,ext) => {
  let index = fs.readFileSync(path.join(dir, "index.json"));
  index = JSON.parse(index);

  for (let i = 0; i < index.length; i++) {
    console.log(`Restored ${i + 1} of ${index.length} <- ${index[i]}`);
    let hexHead = index[i]
        .toString()
        .charAt(0) + index[i].toString().charAt(1);
    let content = fs.readFileSync(path.join(dir, hexHead, index[i]));
    fs.appendFileSync("output."+ext, content);
  }
  console.log("File restored")
};

module.exports = main;
