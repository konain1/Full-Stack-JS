

import {configureStore} from '@reduxjs/toolkit'
import display from '../feature/displaySlice'

export const store = configureStore({
    reducer:{
        dis:display
    }   
})

