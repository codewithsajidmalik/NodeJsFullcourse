const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'crud');
const filepath = `${dirpath}/apple.txt`;
//write
fs.writeFileSync(filepath,'this is txt');
//read file************
fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item)
})
//apend file*************
fs,fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
    if(!err) console.log("file is updated")
})

//rename file
fs.rename(filepath,`${dirpath}/fruit.txt`,(err=>{
    if(!err)console.log("file is updated")
    
    
}))
 //for delete file
 fs.unlink(`${filepath}/fruit.txt`)