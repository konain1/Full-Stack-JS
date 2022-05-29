

// let arr = [ 1,2,3,4,5,6,7,8,9,10]

// let evenNum = arr.filter(function(n){
//     return n %2 == 0;
// })

// console.log(evenNum);

// map is not a good solution for this map gives undefined value when number is not even
// let evenNum2 = arr.map(function(n){
//     if(n%2==0){
//         return n;
//     }
// })

// console.log(evenNum2)


// profit print

// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

// let profit = transactions.filter(function(n){
//     return n > 0;
     
// })

// console.log(profit)


let arr = [{name: "A", age: 14, gender: "M"},
{name: "B", age: 34, gender: "M"},
{name: "C", age: 24, gender: "F"},
{name: "D", age: 44, gender: "F"},
{name: "E", age: 44, gender: "M"},
{name: "I", age: 28, gender: "F"},
{name: "G", age: 36, gender: "M"},
{name: "H", age: 47, gender: "F"}]


let getage = arr.filter(function(n){
    if(n.gender == "F"){
        return true
    }
    return false
}).map(function(f){
    return f.age;
})

console.log(getage)

// this function is known as function chain