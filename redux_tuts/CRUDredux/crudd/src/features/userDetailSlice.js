

import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";


export const createUsers = createAsyncThunk('createUsers', async (data,{rejectWithValue})=>{

    const response = await fetch("https://64b4f351f3dbab5a95c65d75.mockapi.io/crudUser", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    });

    try {
        
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)

    }

})



export const userDetailSlice= createSlice({

    name : "userDetailSlice",
    initialState:{
        users:[],
        loading:false,
        error:null

    },
    extraReducers:{
        [createUsers.pending] :(state)=>{
            state.loading = true;
        },
        [createUsers.fulfilled] :(state,action)=>{
            state.loading =false;
            state.users=action.payload
        },
        [createUsers.rejected] :(state,action)=>{
            state.loading =false;
            state.users =action.payload
        }
    }
})

export default userDetailSlice.reducer