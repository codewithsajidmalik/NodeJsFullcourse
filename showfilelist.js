const fs  = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'files');
for(i=0; i<5;i++){
    fs.writeFileSync(dirpath+"/file"+i+".txt","a simpple text file")
}

// how to get files
fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
       console.log("file name is ", item);

    }) 
})