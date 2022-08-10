


// Array destructing is used to break the array into single variables

let cars = ["audi","BMW","maruti"];

let [car1,car2,car3] = cars

console.log(car1);
console.log(car3);



// object destructing

let person ={
    Name:'konain',
    city:'delhi'
}

let {Name,city} = person;


console.log("person property "+Name)


let arr = ["i am","konain","kasab"];


// this e update not effect on arr
let [a,b,c,d,e='hi'] = arr

console.log(a,b);

console.log(arr)