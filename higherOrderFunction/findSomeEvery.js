

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


// let firstEncounter = transactions.find(function(i){
//         return i < 0;
// })

// console.log(firstEncounter)


// it will return first value who encounter first


// let somefun = transactions.some(function(n){
//     return n > 0;

//     // atleast one value true it will return true like or operator
// })

// console.log(somefun)



let everyfun = transactions.every(function(n){
    // every element must be true it will return true 


    return n > 0;
})

console.log(everyfun)