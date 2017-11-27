const action = process.argv[2];
const file = process.argv[3];
const fileoutExtension =process.argv[4];
const disassemble = require("./disassemble");
const assemble = require("./assemble");

if (action == "disassemble") {
  disassemble(file);
} else if (action == "assemble") {
  assemble(file,fileoutExtension);
} else {
  console.log("Unknown Action: " + action);
}
