


// function fun(){
//     console.log("inside fun function");
// }


// console.log("first line");

// fun();

// console.log("last line")

// Asynchonus


//crating delay function 

// make a delay function and it will freeze the browser


// function delay(n) {
//     for(let i = 1; i<= n; i++){
//         var x = new Date().getTime();
//         while(new Date().getTime() < x + 5000){}
        
//     }
//     console.log(x)
// }
// delay(3);



setTimeout(function  cb(params) {
    params = `this is params`
    console.log(params);

    
},3000);