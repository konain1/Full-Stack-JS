
import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    data : {},
    length: {}
}


const pageSlice = createSlice({

    name:'paginationSlice',
    initialState,
    reducers:{
        addData:(state,{payload})=>{
            state.data = payload;
        },
        getLength:(state,payload)=>{
            state.length = payload
        }
    }

})
export const {addData,getLength} = pageSlice.actions;

export default pageSlice.reducer;