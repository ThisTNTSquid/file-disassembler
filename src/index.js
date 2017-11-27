const action = process.argv[2];
const file = process.argv[3];
const disassemble = require("./disassemble");
const assemble = require("./assemble");

if (action == "disassemble") {
  disassemble(file);
} else if (action == "assemble") {
  assemble(file);
} else {
  console.log("Unknown Action: " + action);
}
