

class customer{

    constructor(n){
        this.name = n
    }

    purchase(){
        console.log("customer name "+this.name);
    }
}

class sellsman extends customer{

hello(){
    console.log("hello")
}
}




let c1 = new sellsman('konain');

c1.purchase();

c1.hello();