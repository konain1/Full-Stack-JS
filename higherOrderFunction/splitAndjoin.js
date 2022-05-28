

// let str = 'i am american';

// let newstr = str.split('a');
// console.log(newstr)


// let newstr2 = newstr.join('i');

// console.log(newstr2)




// let nameArr = ['Vishal Kumar' , 'Vaibahv Rawal' , 'Anmol Taneja']

// let lastname = nameArr.map(function(i){

//     let n =  i.split(" ");
//     return n[1];
// })


// let firstname = nameArr.map(function(i){

//     let n =  i.split(" ");
//     return n[0];
// })

// console.log("first name --> "+firstname)
// console.log("last name --> "+lastname)



const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;

let converted = transactions.map(function(dollar){
    let inr = dollar*inrtToUsd;
    return inr;
})

console.log(converted);