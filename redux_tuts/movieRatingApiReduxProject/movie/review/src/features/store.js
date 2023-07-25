

import {configureStore} from '@reduxjs/toolkit';
import moviefn  from './movies/movieSlice'

export const store = configureStore({
    reducer:{
        movie:moviefn
    }
})

