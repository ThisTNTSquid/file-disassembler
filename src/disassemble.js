const path = require("path");
const fs = require("fs");
const uuid = require("uuid/v4");
const dir = "./output";

let main = file => {
  var content = fs.readFileSync(file, "utf-8");

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
    fs.writeFileSync(path.join(dir, hexHead, hex) + ".txt", content[i]);
    console.log(
      i +
        1 +
        "/" +
        content.length +
        " written to " +
        dir +
        "/" +
        hexHead +
        "/" +
        hex +
        ".txt"
    );
  }
  console.timeEnd("exec");
};

module.exports=main
// console.log(content);
