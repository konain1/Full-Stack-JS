

// it is a Construction function

function car(Name,Model,Price){
    this.carName =Name,       // this  is filling value into the empty object 
    this.carModel = Model,
    this.carPrice = Price

    this.test = function(){
        console.log(`this is ${this.carName} ${this.carModel}`);
    }
}


let car1 = new car('audi','x7',450000);  // new keyword refer this as a {} object  

console.log(car1)    

car1.test()