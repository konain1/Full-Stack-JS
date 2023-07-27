

import {configureStore} from '@reduxjs/toolkit'
import pgReducer from '../features/paginationSlice'


export const store = configureStore({

    reducer:{
        userApi:pgReducer
    }
})