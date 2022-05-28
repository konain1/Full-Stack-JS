

let arr = [ 1,2,3,4,5];


let sqr = arr.map(function square(i){
    return i*i;

})

console.log(sqr)
console.log("original array "+arr);



let nameArr = ['Vishal Kumar' , 'Vaibahv Rawal' , 'Anmol Taneja']
// You have to use map function and you will take out firstName and lastName separately

let names = nameArr.map(function print(i){
    return i;
})
console.log(names)