

const person = {
    name:'doora',
    age: 2,
    breed:'colina',
    hobbies:['miyaoooon','fighting','watching cartoons']
}


for( key in person){
    console.log(key+' ' + person[key])
}

console.log(Object.keys(person))