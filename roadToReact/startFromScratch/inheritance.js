

class Person {
    constructor(Name,Age){
        this.name = Name
        this.age = Age
    }
}

class Player extends Person {
    constructor(Name,Age,position){
        super(Name,Age);
        this.position = position;
       
    }
}

class Coach extends Person {
    constructor(name,age,formation){
        super(name,age);
        this.formation = formation
    }
}

let p1 = new Person('messi',34);
let ansu = new  Player('Ansu',18,'LW')
let xavi = new Coach('xavi',37,433);

console.log(ansu)
console.log(xavi);