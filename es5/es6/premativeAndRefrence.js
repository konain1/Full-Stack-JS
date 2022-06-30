
// premative type  
let a = 10

let b = a

console.log("before changing the value"+a)
console.log("before changing the value"+b)

// it take another address not the same one which is occupied earlier on the code a's address
b = 30

console.log("after changing the value"+a);
console.log("after changing the value"+b);

// refrence type 


let person = {
    name:'neeru'
}


// person2 point to the person address it address property change by person2 it will also changed into person property
let person2 = person

console.log("before "+ person.name)
console.log("before "+ person2.name)


person2.name = "konain"

console.log("after "+ person.name)
console.log("after "+ person2.name)



// to copy only a object to another object without pointing the same address use spread operator

let person3 = {
    ...person
}



person3.name = "golu";


console.log("--> "+person.name)
console.log("--> "+person3.name)