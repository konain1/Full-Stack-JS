"use strict"


//1 
 
 //it will get empty object
// console.log(this)


//2 

//it will get undefined

// function f(){
//     console.log(this)
// }

// f();

//3 

// it will print object itself

// let obj = {
//     f:function f(){
//         console.log(this)
//     },
// }

// obj.f();

//4 

//it will print undefined

let obj = {
    f:function f(){
        function g(){
            console.log(this)
        }
        g();
    },
}

obj.f();