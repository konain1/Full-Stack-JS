"use strict"


// 1 it will console window object
// console.log(this)

//2 it will console undefined

// function f(){
//     console.log(this)
// }
// f();

//3 it will console object itself

// let obj = {
//     f:function fun(){
//         console.log(this)
//     }
// }


//4 it will console undefined
let obj = {
    f:function fun(){
        function g(){
            console.log(this)
        }
        g()
    }
}
obj.f()