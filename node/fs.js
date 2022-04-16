const fs = require('fs');


// let content = fs.readFileSync('f1.txt');
// console.log(content.toString());

// // writefilesync(filename,content)
// fs.writeFileSync('f2.txt','this is f2 file ');


//append file   

// fs.appendFileSync('f2.txt','this is new data');

//delete a file

// fs.unlinkSync('f2.txt');

// ------------------------directories--------------------------------

// making a directory


// fs.mkdirSync('newFolder');
// console.log('folder has been created');



// deleting a directory

// fs.rmdirSync('newFolder');
// console.log('dirctory has been romoved');

// get stats of a directory

// let getstats = fs.lstatSync('newFolder');
// // console.log(getstats);

// console.log("isfile? "+getstats.isFile());
// console.log('isDir ' +getstats.isDirectory());




// check existance of a file/folder

// let doesexits = fs.existsSync('newFolder');
// console.log(doesexits);

//folder path    CHECK CONTENT OF THE DIRECTORY

let folderpath = '//home//konain7//dev//node//newFolder';
let content = fs.readdirSync(folderpath);
console.log(content);