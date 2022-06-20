
// rest operator  


// let fruit = function(...fl){
//     for(let i in fl){
//         console.log(fl[i])
//     }
// }

// fruit('banana')

// fruit('banana','mango','lichi')


// fruit('iphone','laptop','Android','samsung')



// spread operator    its take the array as a argument

// let colors = function(...color){
//     for(let i in color){
//         console.log(color[i])
//     }
// }

// let cl = [ 'red','white','yellow','black'];

// colors(...cl);



// object literals


// let ln = "last"

// let person = {
//     "first":"konain",
//     [ln]:"kasab"
// }

// console.log(person)

// console.log("full name "+person.first +" "+ person.last);

// console.log(person["first"]+" "+person[ln])




// destructure Array

let student = ['konain','kasab','male']

let [fname,lname,gender] = student;


let [, , gen] = student;

console.log(fname)
console.log(lname)
console.log(gen)
