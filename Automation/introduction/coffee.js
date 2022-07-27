


function orderPlace(drink){

    return new Promise(function(resolve,reject){
        

        if(drink == 'coffee'){
            resolve('coffee')
        }else {
            reject(`we cannot place ${drink}`)
        }
    })

}


function orderProcessing(order){
    return new Promise(function(resolve){
        console.log(`your ${order} is being made`);

        resolve(`${order} served`);
    })
}

// promise method

// orderPlace('coffee').then(function(demand){
//     console.log(demand);

//     let orderProcess = orderProcessing(demand);
//     return orderProcess;
// }).then(function(served){
//     console.log(served);

    
// }).catch(function(err){
//     console.log(err)
// })


// Async await

async function orderServed(){

    try{
        let orderplaced = await orderPlace('coffee');
    console.log(orderplaced);

    let proccedOrder = await orderProcessing(orderplaced)
    console.log(proccedOrder )
    }catch (err){
        console.log(err)
        
    }
    
}

orderServed();