
// // rest is for packed 
// function addnumbers(a,b,c, ...z){
  
//     return a+ b+ c + z[0] + z[1] + z[[2]];
// }

// console.log(addnumbers(1,2,2,3,4,2))


// //  spread is for unpacked

// function sub(...nums){
//     let res = 0;

//     for(let e of nums){
//         res -= e
//     }
//     return res
// }


// const nums = [1,2,3,44,22,12];

// let res =sub(...nums)

// console.log(res)

let arr = [1,2,3,45,4]

let arr2 = [22,34,44,12]

let arr3 = [...arr]


for(let i = 0;i<3;i++){
   

    arr.push(arr[i])
}
console.log(arr)

