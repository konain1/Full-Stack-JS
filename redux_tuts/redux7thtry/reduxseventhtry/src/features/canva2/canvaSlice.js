
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    color:{
        code : '#000000'
    }
}

export const toogleSlice = createSlice({

    name:'canva',
    initialState,

    reducers:{

        changeColor :(state,action)=>{
        
            state.color.code = action.payload;
        }

    }
})

export const coloredSeleted = state => state.toogleSlice.color.code

export const {changeColor} = toogleSlice.actions;

export default toogleSlice.reducer;
