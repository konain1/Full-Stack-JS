// const redux = require('redux')

// const createStore = redux.legacy_createStore


// const BUY_Cake = 'buy_cake'


// function buycake(){
//     return {
//         type:BUY_Cake,
//         info:'first redux action'
//     }
// }

// // store

// const intialState = {
//     numOfCakes:10
// }

// // reduces function

// const reducer = (state = intialState, action)=>{
//     switch(action.type){
//         case  BUY_Cake: return {
//             numOfCakes: state.numOfCakes -1
//         }
//         default : return state
//     }
   

// }

// const store = createStore(reducer)

// console.log('initail state '+ store.getState())

// const unsub = store.subscribe(()=> console.log('update state',store.getState()))

// store.dispatch(buycake())
// store.dispatch(buycake())
// store.dispatch(buycake())
// unsub()


