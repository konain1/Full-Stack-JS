

const fs = require('fs')


// let data = fs.readFile('f1.txt',function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log(data+" ");
// })


let pro = fs.promises.readFile("f1.txt");

console.log(pro)

pro.then(function(data)
{
    console.log(data+" ")
}).catch(function(err){
    console.log(err)
})