const action = process.argv[2];
let file = process.argv[3];
let fileoutExtension = process.argv[4];
const disassemble = require("./disassemble");
const assemble = require("./assemble");

if (action == "disassemble") {
  disassemble(file);
} else if (action == "assemble") {
  if (!file) {
    file = "output";
  }
  if (!fileoutExtension) {
    fileoutExtension = "txt";
  }
  assemble(file, fileoutExtension);
} else {
  console.log("Unknown Action: " + action);
}
