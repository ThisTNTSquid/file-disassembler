const EasyZip = require('easy-zip').EasyZip;

let zip = new EasyZip();

zip.zipFolder('output/',function(){
  zip.writeToFileSycn('out.zip')
})
