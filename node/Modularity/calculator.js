// making own module

function add(a,b){
    console.log("sum = "+ a+b);
}

function sub(a,b){
    console.log("difference "+a-b);
}

function mul(a,b){
    console.log("product "+a*b);
}

function div(a,b){
    console.log("quotient "+a/b);
}


module.exports = {
    addition : add,
    subtraction : sub,
    multiply : mul,
    division : div,
}