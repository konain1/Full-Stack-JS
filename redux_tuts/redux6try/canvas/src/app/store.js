

import {configureStore} from '@reduxjs/toolkit';
import canvas from '../features/canvas/canvasSlice'


export const store = configureStore({
    reducer:{

        canvas:canvas
    }
})