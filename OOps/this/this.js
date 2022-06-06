
// non stick mode



//1

// it will get empty object
// console.log(this) 


//2

// it will get global object
// function f(){
//     console.log(this)
// }
// f();

//3

//it will get object it self

// obj = {
//     name:"konain",
//     f:function(){
//         console.log(this)
//     }
// }

// obj.f();


//4 

//it will get global object

// obj2 = {
//     name:"konain",
//     f:function(){
//         function g(){
//             console.log(this)
//         }
//         g();
//     }
// }

// obj2.f();