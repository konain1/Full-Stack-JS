

  
// WHAT THE HELL  


// var url = `www.https//facebook.com/profile.jpg`;


// function download(compressing) {
//     console.log(`uploading is started from ${url}` )
//     setTimeout(()=>{


//         const path = url.split('/').pop();
//         compressing(path)

//     },2000)
    
// }
    
// function compressFile(path,compressed) {

//     console.log(`compressing the file is started`);

//         setTimeout(()=>{

//             // console.log(`FILE HAS BEEN COMPRESSED`);

//             const compresspath = path.split('.')[0];

//             compressed(compresspath)

//          },2000)
// }


// download(function(path) {
//     console.log("after compressing  = " +path);
    
//     compressFile(path,function(compresspath) {
//         console.log(`after compressed  -- ${compresspath}`)
        
//     })

// })



// function hell(getname,cb) {
//     console.log(`welcome to the callback hell `);

//     setTimeout(function () {
//         const zozo = getname
//         cb(zozo);
        
//     },2000)

// }
//     function change(zozo,hell) {

//         console.log(`before assign into rname - ${zozo}`);
//         setTimeout(function () {

//             const path = zozo.split(' ').shift();
//             hell(path);
            
//         },3000)
//     }

// function fighting(chakra) {

   

//     setTimeout(()=>{

//         const bestskill = "reasengun";

//         chakra(bestskill)
//     })
    
// }




// hell("naruto uzumaki",function (getname) {

//     console.log(getname);

//  change(getname,function (path) {

//      console.log(path)

//      setTimeout(function () {

//          console.log("testing purpose")
         
//          fighting(function (bestskill) {
             
//             console.log(bestskill)
//          })


//      },4000)
     
//  });
// })