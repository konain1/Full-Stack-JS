 
 
 
 // scopes


//  let x = 10
//  let y = 20

//  if(x>5){
//      y  = 30 
//      console.log( "inside if block "+y)
//  }

//  console.log("globally declare "+y)


//  // global object 

//     console.log(`  global objects -> browser -> window  ,  window is a global object here you can see all global objects variable and methods`);


//     console.log(` let and const are block scope  `)

//     console.log(`var is functional scope`);

//     var b = 100 

//     if(true){
//         b = 200 
//         console.log("after update "+ b);
//     }

//     console.log(b);


//   clouser

            // function fun(){
            //     console.log(`insede the function`);
            //     let x =0
            //     function innerfun(){
            //         x++;
            //         console.log(x)
            //     }
            //     return innerfun
            //      }

            // let f = fun();

            // f();


// CALLBACK

// function outerfun(){
//     console.log(`outerfun`);
    

// }
// function innerfun(){
//     console.log(`this is inner fun`);
// }
// outerfun(innerfun())

// Array method map()


// function square(num){
//     return num*num
// }

// let a = [1,2,3,4,5]
// let b = a.map(square);

// console.log(b)

// filter -> its return true or false . its take callback funtion as a paramerter


// let arr = [1,2,3,4,5,6,7,8,9]

// function isOdd(num){
//     if(num % 2 !== 0){
//         return true;
//     }
//     return false;
// }


// let res = arr.filter(isOdd);
// console.log(res)


