

import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../feature/userSlice'

export const store = configureStore({
    reducer:{
        app:userSlice
    }
})