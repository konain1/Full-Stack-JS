// const arr = ['hellow']



// const spreadelements = [..."abc"]
// const spreadArr = [...[1234]]
// const copyarr = [...arr,...spreadelements]



// console.log(spreadArr)


// spread opertor in object

const obj1 = {
    name:'doora',
    age:'2',
    color:'multicolor'
}
const obj2 = {
    beast:'kurama',
    power:'2',
    skin:'orange'
}



const newobj = {...obj1,...obj2}

// for(key in newobj){
//  
//    console.log(key+' ->'+newobj[key])
// }
const copyObj = {...obj1,...obj2}
console.log(copyObj)
// console.log(newobj)

