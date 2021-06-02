




// class Red {
//    constructor(x) {
//         this.x = x;
      
        
//     }
// }


// let a = new Red("green");
// let b = new Red("yellow")

// b.getnew = "white"

// console.log(b.x)
// console.log(a.x)

// console.log(b.getnew)
// console.log(a.getnew)

class Car{
    constructor(name,price){
        this.naam= name;
        this.price = price
    }
    get details(){
        console.log(this.naam +"i have bought for $" + this.price)
    }
}

class buycar extends Car{
    constructor(name,price,maxp,old){
        super(name,price)
        this.maxp = maxp
        this.old = old;

    }
    get moredetails(){
        console.log(this.naam+ "  and price "+this.price);
        console.log("maximum speed "+this.maxp 
        +" and "+this.old + " years old")
    }
}

let parent = new Car("bmw",400);

let child = new buycar("ferrari",1000,300,4);
child.moredetails