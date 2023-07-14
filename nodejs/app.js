 const a = require('./index')

 const fs = require('fs')

console.log('node')
fs.readFile('./sample.txt','utf-8',(err,data)=>{

    if(err){
        throw err
    }

    console.log(data)
})

fs.writeFile('./sample2.txt','hi this is file system',()=>{
    console.log('file is written')
})
a.ave(10,29);