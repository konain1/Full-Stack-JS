

//1

//it will conosle window object
// console.log(this)


//2 it will console window object

// function f(){
//     console.log(this);
// }
// f();

//3 it will conosole object itself

// obj = {
//     f:function fun(){
//         console.log(this)
//     }
// }
// obj.f();

//4 it will console window object

obj = {
    f:function fun(){
        function g(){
            console.log(this)
        }
        g()
    }
}
obj.f();

