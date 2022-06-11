// microtask queue serially control by promise

const fs = require('fs')


let f1p = fs.promises.readFile('f1.txt')

f1p.then(cb)

function cb(data){
    console.log(data+" ")
    let f2p =fs.promises.readFile('f2.txt')

    f2p.then(cb2)

}

function cb2(d){
    console.log(d+" ");
    let f2p = fs.promises.readFile('f3.txt');

    f2p.then(function(d){
        console.log(d+"")
    })
}
       
