




function download(url){
    console.log(`download has been started`);

    return new Promise(function (resolve,reject) {
        setTimeout(()=>{
            

            const downloadedpath = url.split('/').pop();

            resolve(downloadedpath)
        },3000)
    })
        
    
        
}


function compression(downloadedpath){
    console.log(`compressing has been started`)

    return new Promise(function (resolve,reject) {

        setTimeout(()=>{

            const compressedpath = downloadedpath.split(".").pop();

            resolve(compressedpath)
            

        },3000)
       
    })
}

download(`www.facebook.com/profile.jpg`)
.then(compression)
.then(function (compressedpath) {
    console.log("file format "+compressedpath)
    
})