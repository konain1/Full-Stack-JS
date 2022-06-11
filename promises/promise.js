const fs = require('fs')

// let promise = new Promise(function(resolve,reject){
//     let a= 9;
//     let b=9;

//     if(a==b){
//         resolve("this msg is sending from resolve");
//     }else{
//         reject();
//     }
// })

// promise.then(function(d){
//     console.log("equal "+d)
// }).catch(function(){
//     console.log("not equal")
// })

let f1 = fs.promises.readFile('f1.txt')
let f2 = fs.promises.readFile('f2.txt')


function cb(data){
    console.log(data+" ")
}

f1.then(cb)
f2.then(cb)