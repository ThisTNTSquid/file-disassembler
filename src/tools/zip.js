const EasyZip = require("easy-zip").EasyZip;
let folder = process.argv[2];
let output = process.argv[3];

let zip = new EasyZip();
if (!folder) {
  folder = "output/";
}
if (!output) {
  output = "output.zip";
}
console.log("Zipping content....")
zip.zipFolder(folder, function() {
  zip.writeToFileSycn(output);
  console.log("Zipping finished :)")
});
