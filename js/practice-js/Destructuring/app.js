

// let pokemon = {

//     pikachu:'thunderbold',
//     skin:'yellow',
//     size:'2-meter'
// }


// const {pikachu:attack} = pokemon

// console.log(attack)


let arr = [{
    name:'charizard',
    id:2,
    attack:'fire'
},
{
    name:'balastTuid',
    id:1,
    attack:'water'
},
{
    name:'ivasour',
    id:3,
    attack:'grass'
}
]


for(let key of arr){
    console.log(key)
}


 const [{name:pokemon,id}] = arr;
 console.log(pokemon , id)