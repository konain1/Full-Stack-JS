

import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:0}

export const displaySlice = createSlice({
    initialState,
    name:'display',
    reducers:{
        view:(state)=>{
            state.value = state.value
        },
        
        addOn:(state,action)=>{
            state.value = state.value+1
        },
        subOn:(state,action)=>{
            state.value = state.value-1
        }
    }

})

export const {view,addOn,subOn} = displaySlice.actions;

export default displaySlice.reducer;