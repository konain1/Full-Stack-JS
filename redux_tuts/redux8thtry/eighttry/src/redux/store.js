

// import { confiqureStore} from '@reduxjs/toolkit'

import { legacy_createStore } from "redux"
import { counterSlice } from "../feature/counter/counterSlice"


export const store = legacy_createStore({
    reducer:{
        counter:'counterSlice'
    }
})