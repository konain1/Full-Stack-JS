

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     
    searchedMovie:{}
     }


export const movieSlice = createSlice({

    name:"ombdmovies",
    initialState,
    reducers:{
        AddMovies:(state,{payload})=>{
            state.searchedMovie = payload;
        }
    }
})

export default movieSlice.reducer
export const {AddMovies} =movieSlice.actions
