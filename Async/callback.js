
const fs  = require('fs');


// function printfirstname(firstname,cb){
//     console.log(firstname);
//     cb('kasab');
// }

// function printlastname(lastname){
//     console.log(lastname);
// }
// printfirstname('konain',printlastname);

//sych

// console.log('before sync')

// let data = fs.readFileSync('f1.txt')

// console.log(data);

// console.log('after')
// Async

console.log('before')

fs.readFile('f1.txt',cb)

function cb(err,data){
    if(err){
        console.log(err)
    }
    console.log(data);
}

console.log('after');