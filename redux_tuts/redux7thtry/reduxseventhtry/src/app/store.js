import {configureStore}   from '@reduxjs/toolkit';
import { toogleSlice} from '../features/canva2/canvaSlice';



export const store = configureStore({

    reducer:{
        canva:toogleSlice
    }
})