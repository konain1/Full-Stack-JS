

let car = ['maruti','audi','BMW'];

// spread are used to copy of a array to another array


let mycar = ['honda',...car];

console.log(mycar)



// rest operator take array as a argument

function rest(...all){
    console.log(all)
}

rest(1,2,3,4,5,6,7)