
// console.log(this) empty object

// function test(){ 
//     console.log(this) global object
// }

// test()


// object itself

// obj = {
//     name:'rock',
//     entrance:function(){
//         console.log('its this  a smell ')
//         console.log(this)
        
//     },
// }



// global object
obj = {
    name:'rock',
    entrance:function(){
        function nested(){
            console.log(this)
        }
        nested()
        
    },
}
obj.entrance();