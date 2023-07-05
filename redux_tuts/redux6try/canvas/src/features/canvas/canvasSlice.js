

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    color:{
        code : '#000000'
    },
    font : {
        size: 16
    },
    opacity:  {
        opacity:0.7
    }
}


export const canvasSlice = createSlice({
    name:'canvas',
    initialState,

    reducers :{
        changeColor : (state,action)=>{
            state.color.code = action.payload;
        },
        changeFont : (state,action)=>{

            state.font.size = action.payload; 
        },
        changeOpacity : (state,action)=>{

            state.opacity.opacity = action.payload
        }
    }
})

export const selectedColor = state => state.canvas.color.code;

export const selectedFont = state => state.canvas.font.size;
export const selectedOpacity = state => state.canvas.opacity.opacity;

export const {changeColor , changeFont,changeOpacity} = canvasSlice.actions;

export default canvasSlice.reducer;