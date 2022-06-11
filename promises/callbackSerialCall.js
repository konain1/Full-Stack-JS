
// serial code of call back


const fs = require('fs')

let f1 = fs.readFile('f1.txt',cb)

function cb(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data+" ")

        let f2 = fs.readFile('f2.txt',cb2);
    }
}

function cb2(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data+" ")
        let f3 = fs.readFile('f3.txt',cb3)
    }
}

function cb3(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data+ " ")
        
    }
}