const zip=require('zip-folder')

zip('../../output','../../output.zip',(err)=>{
  if (err){
    console.log("Something went wrong with the zipping process")
  }
})