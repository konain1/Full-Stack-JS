
import  {createSlice,createAsyncThunk} from '@reduxjs/toolkit'



// action

export const getallData = createAsyncThunk("gitusers", async()=>{

    const response = await fetch('https://api.github.com/users')
    const result = response.json();
    return result;
})

export const usersSlice = createSlice({

    name:'gituser',
    initialState:{
        user:[],
        loading:false,
        error:null
    },
    extraReducers:{
        [getallData.pending] : (state)=>{
            state.loading = true
        },
        [getallData.fulfilled] : (state,action)=>{
            state.loading = false
            state.user = action.payload
        },
        [getallData.rejected] : (state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    }

})

export default usersSlice.reducer;