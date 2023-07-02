import { legacy_createStore} from 'redux'



const reducer = (state=0,action)=>{
    switch(action.type){
        case 'increment':return state +=1;

        case 'decrement':return state -=1;
        default : return state;
    }
}

export const store = legacy_createStore(reducer);