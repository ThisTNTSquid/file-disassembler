const path = require("path");
const fs = require("fs");
const uuid = require("uuid/v4");
const dir = "./output";

let ind = [];

let main = file => {
  let content = fs.readFileSync(file, "utf-8");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  content = content.split("");

  console.time("exec");
  for (let i = 0; i < content.length; i++) {
    let hex = uuid();
    let hexHead = hex.charAt(0) + hex.charAt(1);
    if (!fs.existsSync(path.join(dir, hexHead))) {
      fs.mkdirSync(path.join(dir, hexHead));
    }
    ind.push(hex);
    fs.writeFile(path.join(dir, hexHead, hex), content[i], err => {
      console.log(
        `Broke ${i + 1} of ${content.length} -> ${dir}/${hexHead}/${hex}`
      );
    });
  }
  console.timeEnd("exec");
  fs.writeFile(path.join(dir, "index.json"), JSON.stringify(ind), err => {
    if (err) {
      console.log("something went wrong while writing index");
    } else {
      console.log("Index successfully written in output");
    }
  });
};

module.exports = main;
// console.log(content);
