


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