#!/usr/bin/env node

let fs = require('fs');



let inputArr = process.argv.slice(2);

// console.log(inputArr);

// making file and option arrays 
let optionsArr = [];

let filesArr = [];

for(let i = 0;i<inputArr.length;i++){
    let firstChar = inputArr[i].charAt(0);

    if(firstChar == "-"){
        optionsArr.push(inputArr[i]);
    }else{
        filesArr.push(inputArr[i]);
    }
}

//edge cases


// options cases

let isbothPresent = optionsArr.includes('-b') && optionsArr.includes('-n');

if(isbothPresent == true){
    console.log("either -n or either -b ")
    return;
}

// // file does not exsist

// for(let i = 0;i<filesArr.length;i++){
//     let isPresent = fs.readFileSync(filesArr[i]);

//     if(isPresent != true){
//         console.log("wrong file")
//         return;
//     }
// }


// // option invalid

// for(let i = 0;i<optionsArr.length;i++){

//     let isOptionpresent = optionsArr[i];

//     if(isOptionpresent != true){
//         console.log("wrong option");
//         return;
//     }
// }

//reading files

let content = ""

for(let i =0;i<filesArr.length;i++){
    let buffercontent = fs.readFileSync(filesArr[i]);
    content += buffercontent+"\n";
}

// spliting file into content array

let contentArr = content.split('\n');


// -s   method remove spaces except one space after content

let _sPresent = optionsArr.includes('-s');

if(_sPresent == true){


    //checking spaces indexes
    for(let i = 1;i<contentArr.length;i++){

        if(contentArr[i] == "" && contentArr[i-1]=="" ){
            contentArr[i] = null;
        }else if(contentArr[i] =="" && contentArr[i-1]==null) {
            contentArr[i] = null;
        }
    }

    
    //putting not empty indexes into tempArr

    let tempArr = []
    for(let i = 0;i<contentArr.length;i++){
        if(contentArr[i] != null){
            tempArr.push(contentArr[i])
         
        }
    }
  
    contentArr = tempArr;
   
}



// -n   setting the index number of all lines 

let nPresent = optionsArr.includes('-n');

if(nPresent == true){

    for(let i = 0;i<contentArr.length;i++){
        contentArr[i] = `${i+1 }  ${contentArr[i]}`;
       

    }

    
}


//-b   no numbering on empty lines

let bPresent = optionsArr.includes('-b');

if(bPresent == true){
    let count = 1;

    for(let i =0;i<contentArr.length;i++){
        if(contentArr[i] != ""){
            contentArr[i] = `${count} ${contentArr[i]}`
            count++;
        }
    }

   
}




console.log(contentArr.join('\n'));