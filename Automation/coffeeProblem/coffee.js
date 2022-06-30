const orderPlace = function (drink) {
  return new Promise(function (resolve, reject) {
    if (drink == "coffee") {
      resolve("order for coffee");
    } else {
      reject("this product is not available here");
    }
  });
};

const orderIsBeingProcess = function (order) {
  return new Promise(function (resolve) {
    console.log("order is being processed wait 2 minutes");

    resolve(`${order} served`);
  });
};

// orderPlace("coffee")
//   .then(function (demand) {
//     let orderQueu = orderIsBeingProcess(demand);
//     return orderQueu;
//   })
//   .then(function (orderServed) {
//     console.log(orderServed);
//   })
//   .catch(function () {
//     console.log("order failed");
//   });


  // Async await

  async function serverOrder(){

    try {
        let orderTook = await orderPlace('coffee');

        let process = await orderIsBeingProcess(orderTook)
        console.log(process)
        
    } catch (error) {
        console.log(error)
        
    }



  
     
  }

  serverOrder();