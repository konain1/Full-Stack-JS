

import { createSlice } from "@reduxjs/toolkit";


export const userDetailSlice= createSlice({

    name : "userDetailSlice",
    initialState:{
        users:[],
        loading:false,
        error:null

    }
})

export default userDetailSlice.reducer