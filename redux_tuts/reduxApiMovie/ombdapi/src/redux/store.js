

import {configureStore} from '@reduxjs/toolkit';
import ombdmovies from './../feature/movieSlice'

export const store = configureStore({
    reducer:{
        ombd:ombdmovies
    }
})