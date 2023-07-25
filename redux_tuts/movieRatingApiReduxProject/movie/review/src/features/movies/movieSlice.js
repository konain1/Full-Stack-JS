

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchedMovies : {}
}


export const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state,{  payload}) =>{
            state.searchedMovies  = payload

        }

    }
})

export const {addMovies} = movieSlice.actions;
// export const getAllMovies =  movieSlice
// export const movie = initialState.movies
// movie is coming form store  --------------^ this one  

export default movieSlice.reducer;