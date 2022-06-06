

// let arr = [2,3,4,5];

// let addition = arr.reduce(function(accumulator,value){

//     accumulator+=value;
//     return accumulator;

// },0); // accumalator values may set here 

// console.log(addition)



//From the Transactions Array filter out positive Elements and Calculate the total amount
//Use filter and Reduce to Achieve thisconst 


var transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]

let balanace = transactions.filter(function(dollar){
    return dollar > 0;
}).reduce(function(sum,value){
    
    return sum+=value;
})

console.log(balanace)